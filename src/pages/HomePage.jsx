import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  BookOpen,
  Users,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Clock,
  TrendingUp,
  Heart,
  Shield,
} from "lucide-react";
import JoinWithUs from "../components/JoinWIthUs";
import WhyWeChooseYou from "../components/WhyWeChooseYou";

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    teachers: 0,
    satisfaction: 0,
  });

  // Intersection Observer for animations
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Animate statistics
    const animateStats = () => {
      const targets = {
        students: 5000,
        courses: 60,
        teachers: 100,
        satisfaction: 98,
      };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      Object.keys(targets).forEach((key) => {
        const target = targets[key];
        const step = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, increment);
      });
    };

    if (visibleSections.has("hero-stats")) {
      animateStats();
    }
  }, [visibleSections]);

  const features = [
    {
      icon: BookOpen,
      title: "Rich Content Library",
      description:
        "Access thousands of high-quality courses across various domains",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals and experienced educators",
      gradient: "from-coral-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Recognized Certificates",
      description: "Earn certificates that are valued by employers worldwide",
      gradient: "from-teal-600 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Engage with hands-on projects and real-world applications",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with learners from around the world",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace, anytime, anywhere",
      gradient: "from-coral-500 to-pink-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      image: "👩‍💻",
      content:
        "ePora transformed my career! The courses are comprehensive and the instructors are amazing.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      image: "👨‍🔬",
      content:
        "The practical approach and real-world projects helped me land my dream job.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "👩‍🎨",
      content:
        "Excellent platform with modern content and interactive learning experience.",
      rating: 5,
    },
  ];

  const popularCourses = [
    {
      title: "Full Stack Web Development",
      instructor: "John Doe",
      rating: 4.9,
      students: 15420,
      duration: "12 weeks",
      level: "Beginner",
      image: "💻",
    },
    {
      title: "Data Science & Machine Learning",
      instructor: "Dr. Jane Smith",
      rating: 4.8,
      students: 12350,
      duration: "16 weeks",
      level: "Intermediate",
      image: "📊",
    },
    {
      title: "UI/UX Design Masterclass",
      instructor: "Alex Johnson",
      rating: 4.7,
      students: 9870,
      duration: "10 weeks",
      level: "Beginner",
      image: "🎨",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addToRefs = (el, index) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el;
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800"
        ref={(el) => addToRefs(el, 0)}
        id="hero"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-coral-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-cyan-400 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-teal-300 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-left transition-all duration-1000 ${
              visibleSections.has("hero")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/30">
                <Star className="w-4 h-4 mr-2" />
                Learn New Skills & Popular Courses
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
              For Every Student,
              <br />
              <span className="text-coral-400">Every Classroom.</span>
            </h1>

            <p className="text-lg md:text-xl text-teal-100 mb-12 max-w-lg leading-relaxed">
              Dramatically supply transparent deliverables before backward comp
              internal or "organic" sources. Competently leverage other.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="cursor-pointer group px-8 py-4 bg-coral-500 hover:bg-coral-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-coral-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
                <span>Explore Courses</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              visibleSections.has("hero")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Background Shapes */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-coral-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-400 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 -left-8 w-20 h-20 bg-white opacity-10 transform rotate-45"></div>

              {/* Student Image Placeholder */}
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-coral-400 to-orange-500 rounded-2xl flex items-center justify-center text-8xl">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
            visibleSections.has("hero")
              ? "opacity-100 translate-y-0"
              : "opacity-20 translate-y-8"
          }`}
          ref={(el) => addToRefs(el, 1)}
          id="hero-stats"
        >
          <div className="grid grid-cols-4 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {stats.students.toLocaleString()}+
              </div>
              <div className="text-teal-200 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {stats.courses}+
              </div>
              <div className="text-teal-200 text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {stats.teachers}+
              </div>
              <div className="text-teal-200 text-sm">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {stats.satisfaction}%
              </div>
              <div className="text-teal-200 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <WhyWeChooseYou />
      <JoinWithUs />

      {/* Popular Courses */}
      <section
        className="py-20 bg-gray-50"
        ref={(el) => addToRefs(el, 3)}
        id="courses"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("courses")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Most Popular <span className="text-coral-500">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students in these trending courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                  visibleSections.has("courses")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative p-8 pb-6">
                  <div className="text-6xl mb-4">{course.image}</div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      course.level === "Beginner"
                        ? "bg-teal-100 text-teal-600"
                        : course.level === "Intermediate"
                        ? "bg-coral-100 text-coral-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {course.level}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">by {course.instructor}</p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <span>{course.students.toLocaleString()} students</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{course.duration}</span>
                    <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-1000 delay-500 ${
              visibleSections.has("courses")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-coral-500 to-orange-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 space-x-2">
              <span>View All Courses</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800"
        ref={(el) => addToRefs(el, 4)}
        id="testimonials"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-16 text-white transition-all duration-1000 ${
              visibleSections.has("testimonials")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            What Our Students Say
          </h2>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              visibleSections.has("testimonials")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-6xl mb-4">
                {testimonials[currentTestimonial].image}
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  )
                )}
              </div>
              <p className="text-xl text-white mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-teal-200">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-coral-400"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-gray-900 text-white"
        ref={(el) => addToRefs(el, 5)}
        id="cta"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              visibleSections.has("cta")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Ready to Start Your Journey?
          </h2>
          <p
            className={`text-xl mb-12 text-gray-300 transition-all duration-1000 delay-200 ${
              visibleSections.has("cta")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Join thousands of students who are already transforming their
            careers
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-400 ${
              visibleSections.has("cta")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="px-10 py-4 bg-gradient-to-r from-teal-600 to-coral-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-teal-500/25 transform hover:-translate-y-1 transition-all duration-300">
              Start Learning Today
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
