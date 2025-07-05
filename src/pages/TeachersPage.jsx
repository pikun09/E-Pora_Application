import React, { useState } from "react";
import {
  ChevronRight,
  Star,
  Linkedin,
  Instagram,
  Twitter,
  Users,
  Award,
  BookOpen,
  Clock,
} from "lucide-react";
import JoinWithUs from "../components/JoinWIthUs";

const TeachersPage = () => {
  const [hoveredInstructor, setHoveredInstructor] = useState(null);

  const instructors = [
    {
      id: 1,
      name: "Dr. Michael Harrison",
      rating: 4.9,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialty: "Advanced Mathematics",
      experience: "15+ Years",
      students: "2.5K+",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    {
      id: 2,
      name: "Prof. Sarah Rodriguez",
      rating: 4.8,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialty: "Computer Science",
      experience: "12+ Years",
      students: "3.1K+",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      rating: 4.9,
      reviews: 298,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialty: "Physics & Engineering",
      experience: "18+ Years",
      students: "1.8K+",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    {
      id: 4,
      name: "Prof. Emma Thompson",
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialty: "Literature & Writing",
      experience: "10+ Years",
      students: "2.2K+",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    {
      id: 5,
      name: "Dr. Kevin Chang",
      rating: 4.8,
      reviews: 267,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      specialty: "Data Science",
      experience: "14+ Years",
      students: "2.9K+",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    {
      id: 6,
      name: "Prof. Lisa Anderson",
      rating: 4.9,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop&crop=face",
      specialty: "Business Management",
      experience: "16+ Years",
      students: "3.3K+",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Online Courses",
      description: "Comprehensive digital learning experience",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Trainer",
      description: "Learn from industry professionals",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Get Certificate",
      description: "Earn recognized certifications",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Life Time Access",
      description: "Access courses anytime, anywhere",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-emerald-600 font-medium">Home</span>
                <ChevronRight className="w-4 h-4 inline mx-2 text-gray-400" />
                <span className="text-gray-600">Instructor</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Instructor
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Meet our world-class instructors who bring years of industry
                experience and academic excellence to guide your learning
                journey.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Instructor teaching students"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-700 transition-colors duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructors Section */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-lg mb-4 block">
              Instructor
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Expert Instructor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry leaders and academic experts who are
              passionate about sharing their knowledge and helping you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredInstructor(instructor.id)}
                onMouseLeave={() => setHoveredInstructor(null)}
              >
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Media Links */}
                  <div
                    className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
                      hoveredInstructor === instructor.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                  >
                    <a
                      href={instructor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={instructor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-200"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={instructor.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-200"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Decorative Border Elements */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 border-4 border-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                      {instructor.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">
                        {instructor.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({instructor.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="text-emerald-600 font-medium mb-4">
                    {instructor.specialty}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {instructor.experience}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {instructor.students}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show All Instructors Button */}
          <div className="text-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Show All Instructors
            </button>
          </div>
        </div>
      </div>

      <JoinWithUs />

      {/* Join With Us Section */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with
            our expert-led courses. Start learning today and unlock your
            potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Join With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-200 transform hover:scale-105">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;
