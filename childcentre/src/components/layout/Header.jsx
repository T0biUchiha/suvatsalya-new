import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/suvatsalya-logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const [leaveTimeout, setLeaveTimeout] = useState(null); // For "lazy" close

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      setIsWhiteBg(window.scrollY > heroHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileOpenMenus({});
  };

  const toggleMobileMenu = (label) => {
    setMobileOpenMenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const shouldShowWhiteBg = isMobile || isWhiteBg;

  // --- MENU ITEMS WITH URLs ---
  const menuItems = [
    {
      label: "About",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about#team" },
        { label: "Board of Advisors", href: "/about#board" },
      ]
    },
    {
      label: "What We Treat",
      href: "/what-we-treat",
      hasDropdown: true,
      dropdownItems: [
        { label: "Autism Spectrum Disorder", href: "/what-we-treat/autism" },
        { label: "ADHD", href: "/what-we-treat/adhd" },
        {
          label: "Learning Disability",
          href: "/what-we-treat/learning-disability",
          hasDropdown: true,
          dropdownItems: [
            { label: "Dyslexia", href: "/what-we-treat/learning-disability#dyslexia" },
            { label: "Dysgraphia", href: "/what-we-treat/learning-disability#dysgraphia" },
            { label: "Dyscalculia", href: "/what-we-treat/learning-disability#dyscalculia" },
            { label: "Dyspraxia", href: "/what-we-treat/learning-disability#dyspraxia" },
          ]
        },
        { label: "Cerebral Palsy", href: "/what-we-treat/cerebral-palsy" },
        { label: "Down Syndrome", href: "/what-we-treat/down-syndrome" },
        { label: "Global Development Delay", href: "/what-we-treat/gdd" },
      ]
    },
    {
      label: "Therapies We Provide",
      href: "/therapies",
      hasDropdown: true,
      dropdownItems: [
        { label: "Speech and Language Therapy", href: "/therapies/speech-therapy" },
        { label: "Occupational Therapy", href: "/therapies/occupational-therapy" },
        { label: "Special Education", href: "/therapies/special-education" },
        { label: "ABA Therapy", href: "/therapies/aba-therapy" },
        { label: "Physiotherapy", href: "/therapies/physiotherapy" },
        { label: "Psychological Tests", href: "/therapies/psychological-tests" },
      ]
    },
    { label: "Internships", href: "/internships", hasDropdown: false },
    
    // --- "Media" item removed ---

    { label: "Parent Testimonial", href: "/testimonials", hasDropdown: false },
    { label: "Government Benefits", href: "/benefits", hasDropdown: false },
    { label: "Blog", href: "/blog", hasDropdown: false },
    { label: "Contact", href: "/contact", hasDropdown: false },
  ];

  // --- LAZY DROPDOWN HANDLERS ---
  const handleMouseEnter = (item) => {
    if (leaveTimeout) clearTimeout(leaveTimeout);
    if (item.hasDropdown) setActiveDropdown(item.label);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay
    setLeaveTimeout(timeoutId);
  };
  // --- END OF LAZY DROPDOWN HANDLERS ---

  const renderDesktopDropdown = (item) => {
    if (!item.hasDropdown) return null;

    return (
      <div 
        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 py-2 z-50"
        // These handlers keep the dropdown open
        onMouseEnter={() => { if (leaveTimeout) clearTimeout(leaveTimeout); }}
        onMouseLeave={handleMouseLeave}
      >
        {item.dropdownItems.map((dropdownItem, index) => {
          if (!dropdownItem.hasDropdown) {
            // Regular dropdown item
            return (
              <a
                key={index}
                href={dropdownItem.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors"
              >
                {dropdownItem.label}
              </a>
            );
          } else {
            // Nested dropdown item
            return (
              <div
                key={index}
                className="relative group"
              >
                <a
                  href={dropdownItem.href}
                  className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors"
                >
                  {dropdownItem.label}
                  <ChevronRight size={16} />
                </a>
                
                {/* Nested dropdown */}
                <div className="absolute left-full top-0 ml-0 w-56 bg-white shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItem.dropdownItems.map((nestedItem, nestedIndex) => (
                    <a
                      key={nestedIndex}
                      href={nestedItem.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors"
                    >
                      {nestedItem.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  const renderMobileMenu = (items, depth = 0) => {
    return items.map((item, index) => {
      const itemKey = item.label;
      const isOpen = mobileOpenMenus[itemKey];

      if (!item.hasDropdown) {
        return (
          <Link
            key={index}
            to={item.href}
            onClick={handleLinkClick}
            className="block text-base py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
            style={{ paddingLeft: `${(depth + 1) * 0.5}rem` }}
          >
            {item.label}
          </Link>
        );
      }

      return (
        <div key={index}>
          <button
            onClick={() => toggleMobileMenu(itemKey)}
            className="flex items-center justify-between w-full text-base py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
            style={{ paddingLeft: `${(depth + 1) * 0.5}rem` }}
          >
            <span>{item.label}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {isOpen && (
            <div className="bg-gray-50">
              <Link
                to={item.href}
                onClick={handleLinkClick}
                className="block text-base py-3 px-2 font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
                style={{ paddingLeft: `${(depth + 2) * 0.5}rem` }}
              >
                {`All ${item.label}`}
              </Link>
              {renderMobileMenu(item.dropdownItems, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        shouldShowWhiteBg
          ? "bg-white shadow-md text-gray-900"
          : "bg-black/30 text-white"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* --- Logo Section --- */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Suvatsalya Logo"
              className={`w-auto transition-all duration-700 ${
                shouldShowWhiteBg ? "h-10 sm:h-12" : "h-12 sm:h-16"
              }`}
            />
            <div className="flex flex-col" style={{ fontFamily: "EB Garamond" }}>
              <span
                className={`font-light tracking-[0.2em] uppercase transition-all duration-700 ${
                  shouldShowWhiteBg
                    ? "text-xs sm:text-sm text-gray-800"
                    : "text-sm sm:text-base text-white"
                }`}
              >
                THE CHILD
              </span>
              <span
                className={`font-light tracking-[0.2em] uppercase transition-all duration-700 ${
                  shouldShowWhiteBg
                    ? "text-xs sm:text-sm text-gray-800"
                    : "text-sm sm:text-base text-white"
                }`}
              >
                DEVELOPMENT
              </span>
              <span
                className={`font-light tracking-[0.2em] uppercase transition-all duration-700 ${
                  shouldShowWhiteBg
                    ? "text-xs sm:text-sm text-gray-800"
                    : "text-sm sm:text-base text-white"
                }`}
              >
                CENTRE
              </span>
            </div>
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex items-center space-x-6 font-medium text-sm">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className={`flex items-center transition-colors ${
                    isWhiteBg
                      ? "text-gray-700 hover:text-teal-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </a>

                {item.hasDropdown && activeDropdown === item.label && renderDesktopDropdown(item)}
              </div>
            ))}
          </nav>

          {/* --- Mobile Menu Button --- */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`md:hidden ${shouldShowWhiteBg ? "text-gray-800" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- Mobile Menu --- */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-1 pb-4 pt-2 border-t border-gray-200">
            {renderMobileMenu(menuItems)}
          </nav>
        )}
      </div>
    </header>
  );
}