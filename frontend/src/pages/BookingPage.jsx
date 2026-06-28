import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to contact page for quotes
    navigate("/contact", { replace: true });
  }, [navigate]);

  return null;
};

export default BookingPage;
