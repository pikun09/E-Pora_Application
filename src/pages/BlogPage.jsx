import React, { useState } from 'react';
import { Calendar, User, MessageCircle, Search, Play, ArrowUp } from 'lucide-react';
import JoinWithUs from '../components/JoinWIthUs';
import ScrollUpDown from '../components/ScrollUpDown';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How to Understand Your Home Task and More Efficiently",
      excerpt: "Compellingly exploit B2B vortals with emerging total linkage. Appropriate pursue strategic leadership when intermediated ideas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "Dec 24, 2023",
      author: "RAYHAN",
      comments: 4,
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Business"
    },
    {
      id: 2,
      title: "How to Succeed in the AWS Certified Developer Associate Exam",
      excerpt: "Compellingly exploit B2B vortals with emerging total linkage. Appropriately pursue strategic leadership when intermediated ideas. Proactively revolutionize interoperable 'outside the box' thinking with fully researched innovation. Dramatically facilitate exceptional architectures and bricks-and-clicks data. Progressively generate extensible e-services for.",
      date: "Dec 28, 2023",
      author: "JAMIL RAYHAN",
      comments: 7,
      image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology",
      hasVideo: true
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for Modern Businesses",
      excerpt: "Leverage cutting-edge digital marketing techniques to transform your business presence online. Explore comprehensive strategies that drive engagement, conversion, and sustainable growth in today's competitive marketplace.",
      date: "Jan 05, 2024",
      author: "SARAH JOHNSON",
      comments: 12,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Creative"
    }
  ];

  const recentPosts = [
    {
      title: "Seamlessly monetize central material bleeding.",
      date: "21 Jan 2022",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      title: "How often should you schedule professional",
      date: "12 February, 2022",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      title: "How to keep your institute and home Safe",
      date: "14 January, 2022",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const categories = [
    { name: "Business", count: 14 },
    { name: "Cleaning", count: 19 },
    { name: "Consultant", count: 21 },
    { name: "Creative", count: 27 },
    { name: "Technology", count: 35 }
  ];

  const tags = [
    "IT Solution", "Digital Marketing", "Software Training",
    "Art & Design", "Photography", "Music", "Web Development",
    "UI/UX Design", "Content Strategy"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Discover insights, tutorials, and industry trends that matter to you
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    {post.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 group">
                          <Play className="w-6 h-6 text-indigo-600 ml-1 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>({post.comments}) Comments</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                        Read More
                      </button>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-2">
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                &#8249;
              </button>
              <button className="w-10 h-10 rounded-lg bg-teal-700 text-white flex items-center justify-center font-semibold">
                1
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                &#8250;
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Anything"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white p-2 rounded-lg hover:bg-teal-800 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex gap-4 group cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-indigo-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 px-2 rounded transition-colors cursor-pointer"
                    >
                      <span className="text-gray-700 font-medium">{category.name}</span>
                      <span className="text-gray-500 text-sm">({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JoinWithUs />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-teal-700 text-white rounded-full shadow-lg hover:bg-teal-800 transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5 mx-auto" />
        </button>
      )}
      {/* <ScrollUpDown /> */}
      



    </div>
  );
};

export default BlogPage;