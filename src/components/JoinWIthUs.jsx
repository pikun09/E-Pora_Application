import React from 'react';

const JoinWithUs = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-coral-500 font-medium text-lg mb-4">Join With Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Which One is Suitable For You?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Learn Option */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Do you want to{' '}
                  <span className="text-coral-500">Learn</span> here?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dramatically supply transparent deliverables before & you.
                </p>
                <button className="px-8 py-3 border-2 border-coral-500 text-500 rounded-xl font-semibold hover:bg-coral-500 hover:text-white transition-all duration-300 group-hover:scale-105">
                  Join Now
                </button>
              </div>
              <div className="flex-shrink-0">
                <div className="w-64 h-48 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Student Illustration */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-coral-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">👨🏻‍💻</span>
                    </div>
                    <div className="absolute -top-8 -left-8 w-12 h-12 bg-teal-600 rounded-lg transform rotate-12 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-4 right-0 w-8 h-12 bg-red-500 rounded-sm"></div>
                    <div className="absolute -bottom-2 -right-4 w-6 h-8 bg-yellow-400 rounded-sm"></div>
                    <div className="absolute bottom-0 left-4 w-4 h-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teach Option */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Do you want to{' '}
                  <span className="text-coral-500">Teach</span> here?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dramatically supply transparent deliverables before & you.
                </p>
                <button className="px-8 py-3 border-2 border-coral-500 text-500 rounded-xl font-semibold hover:bg-coral-500 hover:text-white transition-all duration-300 group-hover:scale-105">
                  Join Now
                </button>
              </div>
              <div className="flex-shrink-0">
                <div className="w-64 h-48 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Teacher Illustration */}
                  <div className="relative">
                    <div className="w-20 h-12 bg-teal-700 rounded-lg mb-4 relative">
                      <div className="absolute inset-2 bg-teal-600 rounded"></div>
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center relative">
                      <span className="text-2xl">👩🏻‍🏫</span>
                      <div className="absolute -right-2 -top-2 w-6 h-8 bg-yellow-400 rounded-sm transform rotate-12"></div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-3 bg-red-500 rounded-full"></div>
                    <div className="absolute -top-8 right-0 w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className="absolute top-0 -right-8 w-6 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default JoinWithUs;