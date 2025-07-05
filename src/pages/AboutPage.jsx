// pages/AboutPage.jsx
import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  Shield, 
  TrendingUp,
  BookOpen,
  Star,
  CheckCircle,
  Send,
  User,
  FileText,
  Clock
} from 'lucide-react';
import JoinWithUs from '../components/JoinWIthUs';

const AboutPage = () => {
  const stats = [
    { number: '50K+', label: 'Active Students', icon: Users, color: 'blue' },
    { number: '200+', label: 'Expert Courses', icon: BookOpen, color: 'purple' },
    { number: '100+', label: 'Skilled Teachers', icon: Award, color: 'green' },
    { number: '95%', label: 'Success Rate', icon: TrendingUp, color: 'orange' }
  ];

  const features = [
    {
      icon: Send,
      title: 'Online Courses',
      description: 'Access hundreds of courses anytime, anywhere with our comprehensive online learning platform.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: User,
      title: 'Expert Trainer',
      description: 'Learn from industry professionals and certified experts with years of real-world experience.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'Get Certificate',
      description: 'Earn recognized certificates upon course completion to boost your professional credentials.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Life Time Access',
      description: 'Enjoy unlimited access to your purchased courses with no time restrictions or expiry dates.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Learning',
      description: 'We believe learning should be engaging, accessible, and transformative for everyone.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every course is carefully crafted and reviewed by industry experts.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners and experts from around the world.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We continuously evolve our platform with cutting-edge technology.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'ePora was founded with a vision to democratize quality education worldwide.'
    },
    {
      year: '2021',
      title: 'Growth',
      description: 'Reached 10,000 students and launched our first 50 comprehensive courses.'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Partnered with industry leaders and expanded to serve 25,000+ students globally.'
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Introduced AI-powered personalized learning paths and interactive assessments.'
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Crossed 50,000 students milestone with 95% satisfaction rate and industry recognition.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Former Stanford professor with 15+ years in EdTech',
      speciality: 'Educational Technology'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Chief Academic Officer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Ex-MIT researcher specializing in online learning methodologies',
      speciality: 'Learning Sciences'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning UX designer from Silicon Valley',
      speciality: 'User Experience'
    },
    {
      name: 'David Kim',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop&crop=face',
      bio: 'Former Google engineer with expertise in scalable platforms',
      speciality: 'Technology Architecture'
    }
  ];

  const achievements = [
    'Best Online Learning Platform 2023',
    'EdTech Innovation Award 2022',
    'Top 10 Educational Startups 2021',
    'Excellence in Digital Education 2024'
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative min-h-screen bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect fill="%23285e61" width="1600" height="900"/><path fill="%23ffffff" fill-opacity="0.1" d="M300 200h400v300H300z"/><path fill="%23ffffff" fill-opacity="0.05" d="M800 300h300v200H800z"/></svg>')`
             }}>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-white/80 mb-8">
                  <span className="bg-white/20 px-3 py-1 rounded text-sm">Home</span>
                  <span>›</span>
                  <span>Pages</span>
                  <span>›</span>
                  <span className="font-medium">About Us</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                  About Us
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                  At ePora, we believe that quality education should be accessible to everyone, everywhere. 
                  Our mission is to bridge the gap between traditional learning and the digital future.
                </p>
              </div>
              
              {/* Right Content - Students Image */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                    {/* Placeholder for students studying image */}
                    <div className="text-center text-white">
                      <div className="text-8xl mb-4">👩‍🎓👨‍🎓</div>
                      <p className="text-lg font-medium">Students Learning Together</p>
                      <p className="text-white/70 text-sm mt-2">Collaborative Education Environment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Row at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Send className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Online Courses</h3>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Trainer</h3>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Get Certificate</h3>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Life Time Access</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Empowering Minds,
              </span>
              <br />
              <span className="text-gray-800">Transforming Lives</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the features that make our platform the perfect choice for your learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="text-blue-600 mr-3" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To democratize quality education by providing accessible, engaging, and effective 
                learning experiences that empower individuals to achieve their personal and 
                professional goals.
              </p>
              <div className="space-y-4">
                {[
                  'Make learning accessible to everyone',
                  'Provide industry-relevant skills',
                  'Foster a global learning community',
                  'Continuously innovate educational methods'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Vision 2030</h3>
                  <p className="text-gray-600">
                    To be the world's leading platform for transformative online education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-purple-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the experience we create
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              From a small startup to a global education platform
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-green-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators and technologists dedicated to transforming online learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center bg-gray-50 p-8 rounded-3xl hosver:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">
                  <img src={member.image} alt="" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                  {member.speciality}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinWithUs />


      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Recognition & Awards
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Award className="text-yellow-400 mx-auto mb-4" size={40} />
                <p className="text-white font-semibold">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;