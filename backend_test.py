import requests
import sys
import json
from datetime import datetime

class MSYLimoAPITester:
    def __init__(self, base_url="https://premium-nola-deploy.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:300]}")
                self.failed_tests.append({
                    "test": name,
                    "endpoint": endpoint,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text[:300]
                })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "endpoint": endpoint,
                "error": str(e)
            })
            return False, {}

    def test_health_endpoints(self):
        """Test basic health and info endpoints"""
        print("\n=== Testing Health & Info Endpoints ===")
        
        # Test root endpoint
        self.run_test("Root API", "GET", "api/", 200)
        
        # Test health check
        self.run_test("Health Check", "GET", "api/health", 200)

    def test_service_info_endpoints(self):
        """Test service information endpoints"""
        print("\n=== Testing Service Info Endpoints ===")
        
        # Test services endpoint
        self.run_test("Get Services", "GET", "api/services", 200)
        
        # Test service areas
        self.run_test("Get Service Areas", "GET", "api/service-areas", 200)
        
        # Test fleet info
        self.run_test("Get Fleet", "GET", "api/fleet", 200)

    def test_contact_endpoint(self):
        """Test contact form submission"""
        print("\n=== Testing Contact Form ===")
        
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "555-123-4567",
            "subject": "Test Contact",
            "message": "This is a test contact message from automated testing."
        }
        
        success, response = self.run_test(
            "Submit Contact Form",
            "POST",
            "api/contact",
            200,
            data=contact_data
        )
        
        if success and response.get('success'):
            print(f"   Contact ID: {response.get('id')}")
        
        return success

    def test_quote_request_endpoints(self):
        """Test quote request functionality"""
        print("\n=== Testing Quote Request Endpoints ===")
        
        quote_data = {
            "name": "Test Customer",
            "email": "customer@example.com",
            "phone": "555-987-6543",
            "service_type": "airport",
            "pickup_location": "BWI Airport",
            "dropoff_location": "Downtown Baltimore",
            "date": "2024-12-25",
            "message": "Need airport pickup service for Christmas"
        }
        
        # Test creating quote request
        success, response = self.run_test(
            "Create Quote Request",
            "POST",
            "api/quote-request",
            200,
            data=quote_data
        )
        
        if success:
            quote_id = response.get('id')
            print(f"   Quote ID: {quote_id}")
        
        # Test getting quote requests (admin endpoint)
        self.run_test("Get Quote Requests", "GET", "api/quote-requests", 200)
        
        return success

    def test_cors_headers(self):
        """Test CORS configuration"""
        print("\n=== Testing CORS Headers ===")
        
        try:
            response = requests.options(f"{self.base_url}/api/health", timeout=10)
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
                'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
                'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
            }
            print(f"CORS Headers: {cors_headers}")
            
            if cors_headers['Access-Control-Allow-Origin']:
                print("✅ CORS properly configured")
                return True
            else:
                print("❌ CORS headers missing")
                return False
                
        except Exception as e:
            print(f"❌ CORS test failed: {e}")
            return False

def main():
    print("🚀 Starting MSY Limo Service API Tests")
    print("=" * 50)
    
    tester = MSYLimoAPITester()
    
    # Run all test suites
    tester.test_health_endpoints()
    tester.test_service_info_endpoints()
    tester.test_contact_endpoint()
    tester.test_quote_request_endpoints()
    tester.test_cors_headers()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print(f"\n❌ Failed Tests ({len(tester.failed_tests)}):")
        for i, test in enumerate(tester.failed_tests, 1):
            print(f"{i}. {test['test']}")
            if 'error' in test:
                print(f"   Error: {test['error']}")
            else:
                print(f"   Expected: {test['expected']}, Got: {test['actual']}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"\n🎯 Success Rate: {success_rate:.1f}%")
    
    return 0 if success_rate >= 80 else 1

if __name__ == "__main__":
    sys.exit(main())