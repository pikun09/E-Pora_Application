import React, { useState, useEffect } from "react";
import {
  Star,
  Users,
  BookOpen,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Play,
  Award,
  Target,
} from "lucide-react";
import JoinWithUs from "../components/JoinWIthUs";

const CoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const coursesPerPage = 6;

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const courses = [
    {
      id: 1,
      title: "WordPress 2022: The Complete WordPress Website Course",
      instructor: {
        name: "John Smith",
        avatar: "👨🏽‍💼",
      },
      image: "/api/placeholder/400/250",
      categories: ["Design", "Development"],
      categoryColors: [
        "text-green-600 bg-green-50",
        "text-orange-600 bg-orange-50",
      ],
      classes: 35,
      students: 291,
      rating: 4.7,
      reviews: 125,
      price: 29.99,
      description:
        "Learn to build professional WordPress websites from scratch with this comprehensive course.",
    },
    {
      id: 2,
      title: "SEO: Structured Data & Schema Markup for Webmasters",
      instructor: {
        name: "Sarah Johnson",
        avatar: "👩🏻‍💼",
      },
      image: "/api/placeholder/400/250",
      categories: ["SEO", "Data"],
      categoryColors: [
        "text-purple-600 bg-purple-50",
        "text-pink-600 bg-pink-50",
      ],
      classes: 35,
      students: 291,
      rating: 4.7,
      reviews: 125,
      price: 29.99,
      description:
        "Master SEO with structured data and schema markup to boost your website's search rankings.",
    },
    {
      id: 3,
      title: "Complete Web Design from Figma to Webflow to Freelancing",
      instructor: {
        name: "Maria Garcia",
        avatar: "👩🏽‍💼",
      },
      image: "/api/placeholder/400/250",
      categories: ["Webflow", "UI/UX"],
      categoryColors: [
        "text-blue-600 bg-blue-50",
        "text-indigo-600 bg-indigo-50",
      ],
      classes: 35,
      students: 291,
      rating: 4.7,
      reviews: 125,
      price: 29.99,
      description:
        "Learn complete web design workflow from Figma design to Webflow development and freelancing.",
    },
    {
      id: 4,
      title: "React.js: Build Modern Web Applications",
      instructor: {
        name: "David Chen",
        avatar: "👨🏻‍💼",
      },
      image: "/api/placeholder/400/250",
      categories: ["React", "Development"],
      categoryColors: [
        "text-cyan-600 bg-cyan-50",
        "text-orange-600 bg-orange-50",
      ],
      classes: 42,
      students: 456,
      rating: 4.8,
      reviews: 89,
      price: 39.99,
      description:
        "Master React.js and build dynamic, modern web applications with hooks and advanced patterns.",
    },
    {
      id: 5,
      title: "Python for Data Science and Machine Learning",
      instructor: {
        name: "Dr. Lisa Wang",
        avatar: "👩🏻‍🔬",
      },
      image: "/api/placeholder/400/250",
      categories: ["Python", "Data Science"],
      categoryColors: [
        "text-yellow-600 bg-yellow-50",
        "text-purple-600 bg-purple-50",
      ],
      classes: 58,
      students: 823,
      rating: 4.9,
      reviews: 234,
      price: 49.99,
      description:
        "Learn Python programming for data analysis, visualization, and machine learning applications.",
    },
    {
      id: 6,
      title: "Digital Marketing Masterclass 2024",
      instructor: {
        name: "Alex Rodriguez",
        avatar: "👨🏽‍💼",
      },
      image: "/api/placeholder/400/250",
      categories: ["Marketing", "SEO"],
      categoryColors: [
        "text-red-600 bg-red-50",
        "text-purple-600 bg-purple-50",
      ],
      classes: 28,
      students: 567,
      rating: 4.6,
      reviews: 156,
      price: 34.99,
      description:
        "Complete digital marketing course covering SEO, social media, PPC, and content marketing.",
    },
    {
      id: 7,
      title: "Full Stack JavaScript Development",
      instructor: {
        name: "Mike Thompson",
        avatar: "👨🏻‍💻",
      },
      image: "/api/placeholder/400/250",
      categories: ["JavaScript", "Full Stack"],
      categoryColors: [
        "text-yellow-600 bg-yellow-50",
        "text-gray-600 bg-gray-50",
      ],
      classes: 65,
      students: 934,
      rating: 4.8,
      reviews: 298,
      price: 59.99,
      description:
        "Become a full stack developer with Node.js, Express, MongoDB, and React.",
    },
    {
      id: 8,
      title: "UI/UX Design Principles and Figma Mastery",
      instructor: {
        name: "Emily Davis",
        avatar: "👩🏼‍🎨",
      },
      image: "/api/placeholder/400/250",
      categories: ["UI/UX", "Figma"],
      categoryColors: [
        "text-indigo-600 bg-indigo-50",
        "text-pink-600 bg-pink-50",
      ],
      classes: 31,
      students: 445,
      rating: 4.7,
      reviews: 167,
      price: 42.99,
      description:
        "Learn UI/UX design principles and master Figma for creating stunning user interfaces.",
    },
    {
      id: 9,
      title: "Advanced CSS and Animations",
      instructor: {
        name: "Tom Wilson",
        avatar: "👨🏼‍💻",
      },
      image: "/api/placeholder/400/250",
      categories: ["CSS", "Animation"],
      categoryColors: [
        "text-blue-600 bg-blue-50",
        "text-green-600 bg-green-50",
      ],
      classes: 24,
      students: 356,
      rating: 4.5,
      reviews: 98,
      price: 27.99,
      description:
        "Master advanced CSS techniques, animations, and create stunning visual effects.",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={`${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of courses designed to help
              you master new skills and advance your career
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="text-blue-600 ml-1" size={32} />
                  </div>
                </div>
                {/* Instructor Avatar */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white">
                    {course.instructor.avatar}
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.categories.map((category, index) => (
                    <span
                      key={category}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${course.categoryColors[index]}`}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Course Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <BookOpen size={16} className="text-orange-500" />
                    <span>{course.classes} Classes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-red-500" />
                    <span>{course.students} Students</span>
                  </div>
                </div>

                {/* Rating and Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {renderStars(course.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {course.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === index + 1
                  ? "bg-teal-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Join With Us Section */}
      <JoinWithUs />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp size={20} className="text-gray-600" />
        </button>
      )}

      <style jsx>{`
        .text-coral-500 {
          color: #ff6b6b;
        }

        .border-coral-500 {
          border-color: #ff6b6b;
        }

        .bg-coral-500 {
          background-color: #ff6b6b;
        }

        .hover\\:bg-coral-500:hover {
          background-color: #ff6b6b;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CoursesPage;
