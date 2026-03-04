import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/suvatsalya-logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const [leaveTimeout, setLeaveTimeout] = useState(null);
  const location = useLocation();

  const isActivePage = (href) => {
    const currentPath = location.pathname + location.hash;
    if (href === '/') return location.pathname === '/';
    if (href.includes('#')) return currentPath === href;
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
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
    { label: "Careers", href: "/internships", hasDropdown: false },
    { label: "Parent Testimonial", href: "/testimonials", hasDropdown: false },
    { label: "Government Benefits", href: "/benefits", hasDropdown: false },
    { label: "Blog", href: "/blog", hasDropdown: false },
    { label: "Contact", href: "/contact", hasDropdown: false },
  ];

  const handleMouseEnter = (item) => {
    if (leaveTimeout) clearTimeout(leaveTimeout);
    if (item.hasDropdown) setActiveDropdown(item.label);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setLeaveTimeout(timeoutId);
  };

  const renderDesktopDropdown = (item) => {
    if (!item.hasDropdown) return null;

    return (
      <div 
        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 rounded-md py-2 z-50"
        onMouseEnter={() => { if (leaveTimeout) clearTimeout(leaveTimeout); }}
        onMouseLeave={handleMouseLeave}
      >
        {item.dropdownItems.map((dropdownItem, index) => {
          if (!dropdownItem.hasDropdown) {
            const active = isActivePage(dropdownItem.href);
            return (
              <Link
                key={index}
                to={dropdownItem.href}
                onClick={handleLinkClick}
                className={`block px-4 py-2 transition-colors text-sm ${
                  active
                    ? 'bg-brand-cream text-brand-teal font-semibold'
                    : 'text-gray-700 hover:bg-brand-cream hover:text-brand-teal'
                }`}
              >
                {dropdownItem.label}
              </Link>
            );
          } else {
            const active = isActivePage(dropdownItem.href);
            return (
              <div key={index} className="relative group">
                <Link
                  to={dropdownItem.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between px-4 py-2 transition-colors text-sm ${
                    active
                      ? 'bg-brand-cream text-brand-teal font-semibold'
                      : 'text-gray-700 hover:bg-brand-cream hover:text-brand-teal'
                  }`}
                >
                  {dropdownItem.label}
                  <ChevronRight size={16} />
                </Link>
                <div className="absolute left-full top-0 ml-0 w-56 bg-white shadow-lg border border-gray-200 rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItem.dropdownItems.map((nestedItem, nestedIndex) => {
                    const nestedActive = isActivePage(nestedItem.href);
                    return (
                      <Link
                        key={nestedIndex}
                        to={nestedItem.href}
                        onClick={handleLinkClick}
                        className={`block px-4 py-2 transition-colors text-sm ${
                          nestedActive
                            ? 'bg-brand-cream text-brand-teal font-semibold'
                            : 'text-gray-700 hover:bg-brand-cream hover:text-brand-teal'
                        }`}
                      >
                        {nestedItem.label}
                      </Link>
                    );
                  })}
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
        const active = isActivePage(item.href);
        return (
          <Link
            key={index}
            to={item.href}
            onClick={handleLinkClick}
            className={`block text-sm py-3 px-2 rounded transition-colors ${
              active
                ? 'text-brand-teal bg-brand-cream font-semibold border-l-3 border-brand-teal'
                : 'text-gray-700 hover:text-brand-teal hover:bg-brand-cream'
            }`}
            style={{ paddingLeft: `${(depth + 1) * 0.75}rem` }}
          >
            {item.label}
          </Link>
        );
      }

      return (
        <div key={index}>
          <div
            className={`flex items-center justify-between w-full text-sm py-3 px-2 rounded transition-colors ${
              isActivePage(item.href)
                ? 'text-brand-teal bg-brand-cream font-semibold'
                : 'text-gray-700 hover:text-brand-teal hover:bg-brand-cream'
            }`}
            style={{ paddingLeft: `${(depth + 1) * 0.75}rem` }}
          >
            <Link
              to={item.href}
              onClick={handleLinkClick}
              className="flex-1"
            >
              {item.label}
            </Link>
            <button
              onClick={() => toggleMobileMenu(itemKey)}
              className="p-1 -mr-1"
              aria-label={`Toggle ${item.label} submenu`}
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          
          {isOpen && (
            <div className="bg-gray-50">
              {renderMobileMenu(item.dropdownItems, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-2">
          {/* Logo only - no text */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Suvatsalya Logo"
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6 font-medium text-sm">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center transition-colors border-b-2 pb-1 ${
                    isActivePage(item.href)
                      ? 'text-brand-teal border-brand-teal font-semibold'
                      : 'text-gray-800 border-transparent hover:text-brand-teal'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </Link>

                {item.hasDropdown && activeDropdown === item.label && renderDesktopDropdown(item)}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden text-gray-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="xl:hidden max-h-[70vh] overflow-y-auto flex flex-col space-y-1 pb-4 pt-2 border-t border-gray-200 bg-white">
            {renderMobileMenu(menuItems)}
          </nav>
        )}
      </div>
    </header>
  );
}
