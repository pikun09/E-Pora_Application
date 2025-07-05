// import React, { useState, useEffect } from 'react';
// import { 
//   Search, 
//   ChevronDown, 
//   User, 
//   ShoppingBag, 
//   Menu, 
//   X 
// } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const categories = [
//     'Web Development',
//     'Mobile Development',
//     'Data Science',
//     'Design',
//     'Digital Marketing',
//     'Business',
//     'Photography',
//     'Music'
//   ];

//   const navigationItems = [
//     { name: 'Home', href: '/', hasDropdown: true },
//     { name: 'Pages', href: '/about', hasDropdown: true },
//     { name: 'Course', href: '/courses', hasDropdown: true },
//     { name: 'Content', href: '/content', hasDropdown: true },
//     { name: 'Instructor', href: '/teachers', hasDropdown: true },
//     { name: 'Blog', href: '/blogs', hasDropdown: true }
//   ];

//   // Handle scroll to show/hide full navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      
//       {/* Main Navbar - Always visible when not scrolled */}
//       <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
            
//             {/* Left Side - Logo and Category */}
//             <div className="flex items-center gap-6">
//               {/* Logo */}
//               <div className="flex-shrink-0">
//                 <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                   E-PORA.
//                 </h1>
//               </div>

//               {/* Category Dropdown - Desktop */}
//               <div className="hidden lg:block relative">
//                 <button
//                   onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//                   className="bg-coral-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-coral-600 transition-colors"
//                 >
//                   Categories
//                   <ChevronDown size={18} className={`transform transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {/* Category Dropdown Menu */}
//                 {isCategoryOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
//                     {categories.map((category, index) => (
//                       <a
//                         key={index}
//                         href="#"
//                         className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-coral-500 transition-colors"
//                         onClick={() => setIsCategoryOpen(false)}
//                       >
//                         {category}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Right Side - Search Bar */}
//             <div className="hidden md:flex flex-1 max-w-md">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="What you want to learn?"
//                   className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
//                 />
//                 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition-colors">
//                   <Search size={18} />
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 text-gray-600 hover:text-coral-500 transition-colors"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Sticky Navigation - Always visible */}
//       <div className="border-t border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14">
            
//             {/* Left Side - Navigation Items */}
//             <div className="hidden lg:flex items-center space-x-8">
//               {navigationItems.map((item, index) => (
//                 <div key={index} className="relative group">
//                   <a
//                     href={item.href}
//                     className="flex items-center gap-1 text-gray-600 hover:text-coral-500 font-medium transition-colors py-4"
//                   >
//                     {item.name}
//                     {item.hasDropdown && (
//                       <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
//                     )}
//                   </a>
//                 </div>
//               ))}
//             </div>

//             {/* Logo for scrolled state */}
//             <div className={`lg:hidden transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
//               <h1 className="text-xl font-bold text-gray-900">E-PORA.</h1>
//             </div>

//             {/* Right Side - Profile and Bag */}
//             <div className="hidden lg:flex items-center gap-4">
//               <button className="p-2 text-gray-600 hover:text-coral-500 transition-colors">
//                 <User size={24} />
//               </button>
//               <button className="p-2 text-gray-600 hover:text-coral-500 transition-colors relative">
//                 <ShoppingBag size={24} />
//                 <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   0
//                 </span>
//               </button>
//             </div>

//             {/* Mobile Menu Button for sticky nav */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 text-gray-600 hover:text-coral-500 transition-colors"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100">
//           <div className="px-4 py-4 space-y-4">
            
//             {/* Mobile Search */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="What you want to learn?"
//                 className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
//               />
//               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition-colors">
//                 <Search size={18} />
//               </button>
//             </div>

//             {/* Mobile Category */}
//             <div>
//               <button
//                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//                 className="w-full bg-coral-500 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-between hover:bg-coral-600 transition-colors"
//               >
//                 Categories
//                 <ChevronDown size={18} className={`transform transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
//               </button>
              
//               {isCategoryOpen && (
//                 <div className="mt-2 bg-gray-50 rounded-lg p-2">
//                   {categories.map((category, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className="block px-4 py-2 text-gray-700 hover:bg-white hover:text-coral-500 rounded transition-colors"
//                       onClick={() => setIsCategoryOpen(false)}
//                     >
//                       {category}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Navigation */}
//             <div className="space-y-2">
//               {navigationItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="flex items-center justify-between px-4 py-3 text-gray-600 hover:text-coral-500 hover:bg-gray-50 rounded-lg font-medium transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                   {item.hasDropdown && <ChevronDown size={16} />}
//                 </a>
//               ))}
//             </div>

//             {/* Mobile Icons */}
//             <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
//               <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-coral-500 transition-colors">
//                 <User size={20} />
//                 <span>Profile</span>
//               </button>
//               <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-coral-500 transition-colors relative">
//                 <ShoppingBag size={20} />
//                 <span>Bag</span>
//                 <span className="absolute -top-1 left-6 bg-coral-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   0
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .text-coral-500 {
//           color: #ff6b6b;
//         }
        
//         .bg-coral-500 {
//           background-color: #ff6b6b;
//         }
        
//         .hover\\:bg-coral-500:hover {
//           background-color: #ff6b6b;
//         }
        
//         .hover\\:bg-coral-600:hover {
//           background-color: #ff5252;
//         }
        
//         .hover\\:text-coral-500:hover {
//           color: #ff6b6b;
//         }
        
//         .border-coral-500 {
//           border-color: #ff6b6b;
//         }
        
//         .ring-coral-500 {
//           --tw-ring-color: #ff6b6b;
//         }
        
//         .focus\\:ring-coral-500:focus {
//           --tw-ring-color: #ff6b6b;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  User, 
  ShoppingBag, 
  Menu, 
  X 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Design',
    'Digital Marketing',
    'Business',
    'Photography',
    'Music'
  ];

  const navigationItems = [
    { name: 'Home', href: '/', hasDropdown: true },
    { name: 'Pages', href: '/about', hasDropdown: true },
    { name: 'Course', href: '/courses', hasDropdown: true },
    { name: 'Content', href: '/content', hasDropdown: true },
    { name: 'Instructor', href: '/teachers', hasDropdown: true },
    { name: 'Blog', href: '/blogs', hasDropdown: true }
  ];

  // Handle scroll to show/hide full navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Main Navbar - Always visible when not scrolled */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left Side - Logo and Category */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  E-PORA.
                </h1>
              </div>

              {/* Category Dropdown - Desktop */}
              <div className="hidden lg:block relative">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="bg-coral-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-coral-600 transition-colors"
                >
                  Categories
                  <ChevronDown size={18} className={`transform transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Category Dropdown Menu */}
                {isCategoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-coral-500 transition-colors"
                        onClick={() => setIsCategoryOpen(false)}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="What you want to learn?"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-coral-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Navigation - Always visible */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left Side - Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-gray-600 hover:text-coral-500 font-medium transition-colors py-4"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                    )}
                  </a>
                </div>
              ))}
            </div>

            {/* Logo for scrolled state */}
            <div className={`lg:hidden transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-xl font-bold text-gray-900">E-PORA.</h1>
            </div>

            {/* Right Side - Profile and Bag */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-coral-500 transition-colors">
                <User size={24} />
              </button>
              <button className="p-2 text-gray-600 hover:text-coral-500 transition-colors relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Button for sticky nav */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-coral-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="What you want to learn?"
                className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition-colors">
                <Search size={18} />
              </button>
            </div>

            {/* Mobile Category */}
            <div>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full bg-coral-500 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-between hover:bg-coral-600 transition-colors"
              >
                Categories
                <ChevronDown size={18} className={`transform transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCategoryOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg p-2">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-white hover:text-coral-500 rounded transition-colors"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-600 hover:text-coral-500 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </a>
              ))}
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-coral-500 transition-colors">
                <User size={20} />
                <span>Profile</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-coral-500 transition-colors relative">
                <ShoppingBag size={20} />
                <span>Bag</span>
                <span className="absolute -top-1 left-6 bg-coral-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;