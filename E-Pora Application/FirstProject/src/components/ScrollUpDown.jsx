import React from "react";
import { Calendar, User, MessageCircle, Search, Play, ArrowUp } from 'lucide-react';


const ScrollUpDown = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      <div>

      {showScrollTop && (
          <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-teal-700 text-white rounded-full shadow-lg hover:bg-teal-800 transition-all duration-300 hover:scale-110 z-50"
          >
          <ArrowUp className="w-5 h-5 mx-auto" />
        </button>
      )}
      </div>
    </>
  );
};

export default ScrollUpDown;
