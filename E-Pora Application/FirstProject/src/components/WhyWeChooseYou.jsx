import React from "react";
import { CheckCircle, Play, Award, BookOpen, Video, Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Stats */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-center mb-20">
                <img
                  src="https://res.cloudinary.com/tuteria/image/upload/c_fit,h_627,q_80,w_1200/v1/landing_page_images/successful-teacher-2021-09-24-03-01-11-utc.jpg"
                  alt=""
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -left-6 bg-slate-800 text-white px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-emerald-400">23+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>

              {/* Security Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-semibold text-gray-800">
                    Fully Safe & Secure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="text-coral-500 font-semibold text-lg mb-2 tracking-wide">
                <span className="text-orange-500">Why Choose Us</span>
              </div>
              <h1 className="text-5xl font-bold text-slate-800 leading-tight mb-6">
                Why You Choose Our
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  E-Pora Online learning
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dramatically supply transparent deliverables before & can
                backward comp internal or "organic" sources. Transform your
                learning experience with our comprehensive educational platform.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-800 font-semibold text-lg">
                  Increasing Your Learning Skills
                </span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-800 font-semibold text-lg">
                  High Quality Video & Audio Classes
                </span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-800 font-semibold text-lg">
                  Finish Your Course, Get Certificate
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg">
                Explore Courses
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600 text-sm">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">50+</div>
                <div className="text-gray-600 text-sm">Online Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">95%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
