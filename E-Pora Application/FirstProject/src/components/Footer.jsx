import React, { useState, useEffect, useRef } from "react";
import {
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Mail,
  Send,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    experience: 0,
    courses: 0,
    reviews: 0,
  });

  const footerRef = useRef(null);

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  // Intersection Observer for footer visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      students: 276000,
      experience: 23,
      courses: 735,
      reviews: 407000,
    };

    const duration = 2500; // 2.5 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        students: Math.floor(targets.students * easeOutQuart),
        experience: Math.floor(targets.experience * easeOutQuart),
        courses: Math.floor(targets.courses * easeOutQuart),
        reviews: Math.floor(targets.reviews * easeOutQuart),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        // Set final values to ensure accuracy
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Format numbers for display
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-white/10"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full border border-white/10"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-white/20"></div>
      </div>

      {/* Statistics Section */}
      <div className="border-b border-emerald-700/50 relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {formatNumber(counters.students)}
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-3 rounded-full"></div>
              <div className="text-lg text-gray-200 group-hover:text-white transition-colors">
                Worldwide Students
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {counters.experience}
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-3 rounded-full"></div>
              <div className="text-lg text-gray-200 group-hover:text-white transition-colors">
                Years Experience
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {counters.courses}
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-3 rounded-full"></div>
              <div className="text-lg text-gray-200 group-hover:text-white transition-colors">
                Professional Courses
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {formatNumber(counters.reviews)}
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mb-3 rounded-full"></div>
              <div className="text-lg text-gray-200 group-hover:text-white transition-colors">
                Beautiful Reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About Section */}
          <div className="group">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-500 rounded-full mr-3"></div>
              About
            </h3>
            <ul className="space-y-4">
              {["About Us", "Blog", "Careers", "Jobs", "In Press"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <a
                      href="#"
                      className="text-gray-200 hover:text-white hover:underline transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="group">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "Refund Policy",
                "Documentation",
                "Chat online",
                "Order Cancel",
                "Privacy Policy",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center group-hover:translate-x-1 transition-transform duration-200"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white hover:underline transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="group">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-3"></div>
              Support
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Contact us", icon: Phone },
                { name: "Online Chat", icon: Mail },
                { name: "Whatsapp", icon: Phone },
                { name: "Telegram", icon: Send },
                { name: "Ticketing", icon: Clock },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center group-hover:translate-x-1 transition-transform duration-200"
                >
                  <item.icon
                    size={14}
                    className="mr-2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white hover:underline transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="group">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-3"></div>
              FAQ
            </h3>
            <ul className="space-y-4">
              {["Account", "Deliveries", "Orders", "Payments", "Return"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <a
                      href="#"
                      className="text-gray-200 hover:text-white hover:underline transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-red-500 rounded-full mr-3"></div>
              Newsletter
            </h3>
            <p className="text-gray-200 mb-8 leading-relaxed">
              Be the first one to know about discounts, offers and events.
              Unsubscribe whenever you like.
            </p>

            {/* Enhanced Newsletter Form */}
            <div className="mb-8 flex justify-center">
              <div className="flex rounded-full shadow-lg bg-white max-w-md w-full">
                <div className="flex items-center px-4">
                  <Mail size={18} className="text-gray-400 mr-2" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email"
                  className="flex-1 py-3 pr-4 text-gray-800 text-sm bg-white focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-gradient-to-r from-pink-500 to-red-500 px-4 py-3 text-white flex items-center justify-center rounded-full rounded-l-none hover:from-pink-600 hover:to-red-600 transition-all duration-300"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>

            {/* Enhanced Social Media Icons */}
            <div className="flex space-x-4">
              {[
                {
                  Icon: Facebook,
                  color: "hover:bg-blue-600",
                  name: "Facebook",
                },
                { Icon: Youtube, color: "hover:bg-red-600", name: "YouTube" },
                { Icon: Twitter, color: "hover:bg-sky-500", name: "Twitter" },
                {
                  Icon: Linkedin,
                  color: "hover:bg-blue-700",
                  name: "LinkedIn",
                },
              ].map(({ Icon, color, name }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg group relative overflow-hidden`}
                  title={name}
                >
                  <Icon size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className="border-t border-emerald-700/50 bg-emerald-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-3xl font-bold tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                E-PORA.
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-gray-400" />
              <p className="text-gray-300 text-sm">
                Copyright © E-Pora 2025, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
