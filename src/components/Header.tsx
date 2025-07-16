import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LanguageContext } from "../App";

const navText: { [key: string]: { label: string; to: string }[] } = {
  ko: [
    { label: "브랜드", to: "/#story" },
    { label: "스토어", to: "/goods" },
    { label: "Contact", to: "/contact" },
  ],
  en: [
    { label: "Brand", to: "/#story" },
    { label: "Store", to: "/goods" },
    { label: "Contact", to: "/contact" },
  ],
};
//이렇게 하는거다
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTextColor = scrolled ? "text-[#222]" : "text-white";
  const logoMainColor = scrolled ? "text-[#222]" : "text-white";
  const logoSubColor = scrolled ? { color: '#C9A227' } : { color: '#fff' };
  const headerBg = scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-gradient-to-b from-black/60 to-transparent";

  const handleLangToggle = () => setLang(lang === 'ko' ? 'en' : 'ko');

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById("story");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("story");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
        <Link to="/" className={`text-2xl font-bold tracking-widest font-serif flex items-center gap-2 ${logoMainColor}`}> 
          <span>{lang === 'ko' ? '온결' : 'Ongyeol'}</span>
          <span className="text-base align-middle font-normal ml-1" style={logoSubColor}>溫潔</span>
        </Link>
        <nav className="flex items-center gap-6">
          <ul className={`flex gap-6 text-base font-medium ${navTextColor} font-serif`} style={{fontFamily: 'Noto Serif KR, serif'}}>
            {navText[lang].map((item: { label: string; to: string }) => (
              <li key={item.label}>
                {item.label === (lang === 'ko' ? '브랜드' : 'Brand') ? (
                  <button
                    onClick={handleBrandClick}
                    className={`hover:text-[#C72C2C] transition-colors duration-150`}
                    style={{fontFamily: 'Noto Serif KR, serif', fontWeight: 600, letterSpacing: '0.02em', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}
                  >
                    {item.label}
                  </button>
                ) : item.label === 'Contact' ? (
                  <button
                    onClick={handleContactClick}
                    className={`hover:text-[#C72C2C] transition-colors duration-150`}
                    style={{fontFamily: 'Noto Serif KR, serif', fontWeight: 600, letterSpacing: '0.02em', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className={`hover:text-[#C72C2C] transition-colors duration-150 ${location.pathname === "/goods" && item.to === "/goods" ? "text-[#C72C2C] font-bold" : ""}`}
                    style={{fontFamily: 'Noto Serif KR, serif', fontWeight: 600, letterSpacing: '0.02em'}}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* 언어 토글 버튼 */}
          <button
            onClick={handleLangToggle}
            className={`ml-4 px-3 py-1 rounded-full border border-[#C9A227] text-xs font-semibold transition bg-white/80 hover:bg-[#C9A227] hover:text-white ${scrolled ? 'text-[#C9A227]' : 'text-[#C9A227]'}`}
            aria-label="언어 변경"
            style={{fontFamily: 'Noto Serif KR, serif', fontWeight: 600}}
          >
            {lang === 'ko' ? 'EN' : '한'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header; 