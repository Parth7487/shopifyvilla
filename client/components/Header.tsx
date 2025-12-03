import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Heart, ShoppingBag, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";

interface HeaderProps {
  showAlways?: boolean;
}

const Header = ({ showAlways = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const shouldShowHeader = showAlways || isScrolled;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        shouldShowHeader
          ? "bg-white border-b border-stone-200/80 shadow-sm"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      {/* Top banner */}
      <div
        className={`text-center py-2 text-xs font-light tracking-wide transition-all duration-300 ${
          shouldShowHeader
            ? "bg-gradient-to-r from-stone-100/80 to-stone-50/80 text-stone-600"
            : "bg-white/0 text-white/60"
        }`}
      >
        {t("banner.text")}
      </div>

      {/* Main header */}
      <div
        className={`w-full transition-all duration-300 ${
          shouldShowHeader ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row - Logo stays centered with absolute positioning */}
          <div className="relative flex items-center justify-between py-4 sm:py-6">
            {/* Left controls - Language and Currency */}
            <div className="flex items-center flex-shrink-0">
              <div
                className={`transition-all duration-300 hidden sm:flex items-center ${
                  shouldShowHeader
                    ? "border-r border-stone-200"
                    : "border-r border-white/20"
                } pr-4 sm:pr-6`}
              >
                {/* Language Switcher */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() => setLanguage("NO")}
                    className={`transition-all duration-300 px-2 sm:px-3 py-1 sm:py-2 text-xs font-light uppercase tracking-wider ${
                      language === "NO"
                        ? shouldShowHeader
                          ? "text-stone-900"
                          : "text-white"
                        : shouldShowHeader
                          ? "text-stone-400 hover:text-stone-700"
                          : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    NO
                  </button>
                  <span
                    className={`transition-all duration-300 text-xs ${
                      shouldShowHeader ? "text-stone-300" : "text-white/30"
                    }`}
                  >
                    /
                  </span>
                  <button
                    onClick={() => setLanguage("EN")}
                    className={`transition-all duration-300 px-2 sm:px-3 py-1 sm:py-2 text-xs font-light uppercase tracking-wider ${
                      language === "EN"
                        ? shouldShowHeader
                          ? "text-stone-900"
                          : "text-white"
                        : shouldShowHeader
                          ? "text-stone-400 hover:text-stone-700"
                          : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Currency Switcher */}
                <div
                  className={`transition-all duration-300 border-l ${
                    shouldShowHeader ? "border-stone-200" : "border-white/20"
                  } pl-4 sm:pl-6 ml-4 sm:ml-6`}
                >
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as any)}
                    className={`transition-all duration-300 px-2 sm:px-3 py-1 sm:py-2 text-xs font-light uppercase tracking-wider bg-transparent border-0 focus:outline-none cursor-pointer ${
                      shouldShowHeader
                        ? "text-stone-700 hover:text-stone-900"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <option value="NOK" className="bg-stone-900 text-white">
                      NOK
                    </option>
                    <option value="EUR" className="bg-stone-900 text-white">
                      EUR
                    </option>
                    <option value="USD" className="bg-stone-900 text-white">
                      USD
                    </option>
                    <option value="GBP" className="bg-stone-900 text-white">
                      GBP
                    </option>
                    <option value="SEK" className="bg-stone-900 text-white">
                      SEK
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Logo - Always centered via absolute positioning */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0 z-10">
              <Link
                to="/"
                className="inline-flex flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa5269a01680d457f83a73f069f858527%2Fb5a2f56b6f5443dca184426b4e01a8a8?format=webp&width=300"
                  alt="VillaBella Logo"
                  className="h-10 sm:h-14 w-auto"
                />
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-2 sm:space-x-6 flex-shrink-0">
              <button
                className={`transition-all duration-300 hidden sm:flex items-center justify-center p-2 rounded-full hover:scale-110 ${
                  shouldShowHeader
                    ? "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Search"
              >
                <Search size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                className={`transition-all duration-300 hidden sm:flex items-center justify-center p-2 rounded-full hover:scale-110 ${
                  shouldShowHeader
                    ? "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Wishlist"
              >
                <Heart size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                className={`transition-all duration-300 relative flex items-center justify-center p-2 rounded-full hover:scale-110 ${
                  shouldShowHeader
                    ? "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Shopping bag"
              >
                <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
                <span
                  className={`absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light ${
                    shouldShowHeader ? "bg-stone-900" : "bg-white/40"
                  }`}
                >
                  0
                </span>
              </button>

              <button
                className={`transition-all duration-300 hidden sm:flex items-center justify-center p-2 rounded-full hover:scale-110 ${
                  shouldShowHeader
                    ? "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-label="User account"
              >
                <User size={18} className="sm:w-5 sm:h-5" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 transition-all duration-300 rounded-full flex-shrink-0 ${
                  shouldShowHeader
                    ? "text-stone-700 hover:bg-stone-100"
                    : "text-white/70 hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Navigation row - Below logo */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 pb-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-4 lg:px-6 py-3 font-light text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden group ${
                  shouldShowHeader
                    ? "text-stone-700"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {/* Animated background */}
                <span
                  className={`absolute inset-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${
                    shouldShowHeader ? "bg-stone-100" : "bg-white/10"
                  }`}
                ></span>

                {/* Text */}
                <span className="relative block">{item.label}</span>

                {/* Bottom border animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-stone-600 to-stone-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav
              className={`lg:hidden pb-4 sm:pb-6 space-y-1 pt-4 sm:pt-6 transition-all duration-300 ${
                shouldShowHeader
                  ? "border-t border-stone-200/50 bg-white"
                  : "border-t border-white/20 bg-stone-900/20"
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-light text-sm uppercase tracking-wide py-2 sm:py-3 px-4 transition-all duration-300 rounded hover:pl-5 sm:hover:pl-6 ${
                    shouldShowHeader
                      ? "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
