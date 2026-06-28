import { useEffect } from "react";

const BookingWidget = ({ className = "" }) => {
  useEffect(() => {
    // Load the mylimobiz widget script
    const existingScript = document.querySelector('script[src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://book.mylimobiz.com/v4/widgets/widget-loader.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={className}>
      <a 
        href="https://book.mylimobiz.com/v4/92transp" 
        data-ores-widget="website" 
        data-ores-alias="92transp"
        className="inline-block w-full bg-black text-white text-center py-4 px-8 rounded font-semibold hover:bg-gray-800 transition-colors"
      >
        Online Reservations
      </a>
    </div>
  );
};

export default BookingWidget;
