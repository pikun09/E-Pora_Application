import React, { useState, useEffect } from "react";
import {
  Play,
  BookOpen,
  Award,
  Users,
  Clock,
  Download,
  CheckCircle,
  Star,
  Filter,
  Search,
  Grid,
  List,
  Video,
  FileText,
  Headphones,
  Monitor,
  Zap,
  Target,
  ArrowRight,
  TrendingUp,
  Globe,
} from "lucide-react";
import JoinWithUs from "../components/JoinWIthUs";

const ContentPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentTypes = [
    { id: "all", name: "All Content", icon: Grid, count: 156 },
    { id: "videos", name: "Video Lectures", icon: Play, count: 89 },
    { id: "documents", name: "Study Materials", icon: FileText, count: 34 },
    { id: "interactive", name: "Interactive Labs", icon: Monitor, count: 23 },
    { id: "podcasts", name: "Audio Content", icon: Headphones, count: 10 },
  ];

  const learningContent = [
    {
      id: 1,
      title: "Introduction to Web Development",
      type: "videos",
      category: "Programming",
      duration: "45 min",
      level: "Beginner",
      rating: 4.8,
      students: 1250,
      description:
        "Learn the fundamentals of web development including HTML, CSS, and JavaScript basics.",
      image: "💻",
      tags: ["HTML", "CSS", "JavaScript"],
      instructor: "John Doe",
      premium: false,
      enrolled: true,
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      type: "videos",
      category: "Programming",
      duration: "2h 30min",
      level: "Advanced",
      rating: 4.9,
      students: 890,
      description:
        "Deep dive into React patterns, hooks, and performance optimization techniques.",
      image: "⚛️",
      tags: ["React", "Hooks", "Performance"],
      instructor: "Jane Smith",
      premium: true,
      enrolled: false,
    },
    {
      id: 3,
      title: "Data Science Fundamentals Guide",
      type: "documents",
      category: "Data Science",
      duration: "30 min read",
      level: "Intermediate",
      rating: 4.7,
      students: 2100,
      description:
        "Comprehensive guide covering statistics, Python, and machine learning basics.",
      image: "📊",
      tags: ["Python", "Statistics", "ML"],
      instructor: "Dr. Wilson",
      premium: false,
      enrolled: true,
    },
    {
      id: 4,
      title: "Interactive Python Lab",
      type: "interactive",
      category: "Programming",
      duration: "1h 15min",
      level: "Intermediate",
      rating: 4.6,
      students: 756,
      description:
        "Hands-on Python programming exercises with real-time feedback.",
      image: "🐍",
      tags: ["Python", "Practice", "Interactive"],
      instructor: "Mike Johnson",
      premium: true,
      enrolled: true,
    },
    {
      id: 5,
      title: "UX Design Principles Podcast",
      type: "podcasts",
      category: "Design",
      duration: "25 min",
      level: "Beginner",
      rating: 4.5,
      students: 432,
      description:
        "Learn essential UX design principles through expert discussions and case studies.",
      image: "🎨",
      tags: ["UX", "Design", "Principles"],
      instructor: "Sarah Lee",
      premium: false,
      enrolled: false,
    },
    {
      id: 6,
      title: "Machine Learning Workshop",
      type: "videos",
      category: "Data Science",
      duration: "3h 45min",
      level: "Advanced",
      rating: 4.9,
      students: 1890,
      description:
        "Complete workshop on machine learning algorithms and implementations.",
      image: "🤖",
      tags: ["ML", "Algorithms", "Python"],
      instructor: "Dr. Chen",
      premium: true,
      enrolled: false,
    },
    {
      id: 7,
      title: "CSS Grid and Flexbox Mastery",
      type: "videos",
      category: "Web Design",
      duration: "1h 20min",
      level: "Intermediate",
      rating: 4.7,
      students: 980,
      description:
        "Master modern CSS layout techniques with practical examples and projects.",
      image: "🎯",
      tags: ["CSS", "Layout", "Grid", "Flexbox"],
      instructor: "Alex Turner",
      premium: false,
      enrolled: true,
    },
    {
      id: 8,
      title: "Database Design Handbook",
      type: "documents",
      category: "Backend",
      duration: "45 min read",
      level: "Advanced",
      rating: 4.8,
      students: 670,
      description:
        "Complete guide to database design principles, normalization, and best practices.",
      image: "🗄️",
      tags: ["Database", "SQL", "Design"],
      instructor: "Maria Rodriguez",
      premium: true,
      enrolled: false,
    },
  ];

  const filteredContent = learningContent.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesTab && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case "videos":
        return Play;
      case "documents":
        return FileText;
      case "interactive":
        return Monitor;
      case "podcasts":
        return Headphones;
      default:
        return BookOpen;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-600";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-600";
      case "Advanced":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-25 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce">
                <TrendingUp size={16} />
                <span>Premium Learning Content</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Learn From
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
                  Expert Content
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover our comprehensive library of videos, interactive labs,
                study materials, and expert-guided learning paths designed to
                accelerate your career growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <span className="flex items-center space-x-2">
                    <span>Start Learning Now</span>
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  Browse Categories
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 animate-pulse">
                    150+
                  </div>
                  <div className="text-sm text-gray-600">
                    Learning Resources
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-gray-800 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    25+
                  </div>
                  <div className="text-sm text-gray-600">Subject Areas</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-gray-800 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Hours of Content</div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                  <div
                    className="absolute -bottom-3 -left-2 w-5 h-5 bg-blue-400 rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Teacher and Student Illustration */}
                  <div className="relative bg-white rounded-2xl p-6 min-h-80">
                    {/* Chalkboard */}
                    <div className="absolute top-4 left-4 right-4 h-24 bg-teal-700 rounded-lg flex items-center justify-center">
                      <div className="text-white text-lg font-semibold">
                        Content Learning
                      </div>
                    </div>

                    {/* Student Figure */}
                    <div className="absolute bottom-20 left-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
                        👩‍🎓
                      </div>
                      <div className="absolute -right-4 -top-2 w-12 h-8 bg-gray-200 rounded-lg flex items-center justify-center transform rotate-12">
                        💻
                      </div>
                    </div>

                    {/* Teacher Figure */}
                    <div className="absolute bottom-20 right-8">
                      <div
                        className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      >
                        👨‍🏫
                      </div>
                    </div>

                    {/* Books Stack */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="space-y-1">
                        <div className="w-20 h-3 bg-red-400 rounded transform rotate-2"></div>
                        <div className="w-20 h-3 bg-blue-400 rounded transform -rotate-1"></div>
                        <div className="w-20 h-3 bg-green-400 rounded transform rotate-1"></div>
                      </div>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute top-32 left-2 animate-bounce">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="text-blue-600" size={16} />
                      </div>
                    </div>
                    <div
                      className="absolute top-40 right-4 animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Play className="text-purple-600" size={16} />
                      </div>
                    </div>
                    <div
                      className="absolute top-36 left-20 animate-bounce"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Target className="text-green-600" size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">
                        4.9★ Rating
                      </div>
                      <div className="text-xs text-gray-600">
                        5000+ Students
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-white text-blue-600 shadow-sm transform scale-105"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-white text-blue-600 shadow-sm transform scale-105"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Tabs */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {contentTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeTab === type.id
                      ? "bg-blue-600 text-white shadow-lg animate-pulse"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={18} />
                  <span>{type.name}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs transition-all duration-300 ${
                      activeTab === type.id
                        ? "bg-white/20"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    {type.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((content, index) => {
                const TypeIcon = getTypeIcon(content.type);
                return (
                  <div
                    key={content.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 transform"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative p-6 pb-4">
                      {content.premium && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                            PREMIUM
                          </span>
                        </div>
                      )}

                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className="text-4xl animate-bounce"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {content.image}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <TypeIcon className="text-blue-600" size={16} />
                            <span className="text-sm text-gray-500 capitalize">
                              {content.type}
                            </span>
                          </div>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
                              content.level
                            )}`}
                          >
                            {content.level}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {content.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {content.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {content.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium hover:bg-blue-100 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{content.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star
                            className="text-yellow-400 fill-current"
                            size={14}
                          />
                          <span>{content.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <Users className="inline w-4 h-4 mr-1" />
                          {content.students} students
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium">
                          {content.premium && !content.enrolled
                            ? "Upgrade"
                            : "Start Learning"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredContent.map((content, index) => {
                const TypeIcon = getTypeIcon(content.type);
                return (
                  <div
                    key={content.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:scale-102"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-3xl animate-pulse">
                          {content.image}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <TypeIcon className="text-blue-600" size={16} />
                              <span className="text-sm text-gray-500 capitalize">
                                {content.type}
                              </span>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
                                  content.level
                                )}`}
                              >
                                {content.level}
                              </span>
                              {content.premium && (
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                                  PREMIUM
                                </span>
                              )}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                              {content.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                              {content.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {content.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium hover:bg-blue-100 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{content.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star
                                className="text-yellow-400 fill-current"
                                size={14}
                              />
                              <span>{content.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users size={14} />
                              <span>{content.students} students</span>
                            </div>
                          </div>
                          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium">
                            {content.premium && !content.enrolled
                              ? "Upgrade"
                              : "Start Learning"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {filteredContent.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No content found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
      <JoinWithUs />
    </div>
  );
};

export default ContentPage;
