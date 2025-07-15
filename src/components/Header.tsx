import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "브랜드", to: "/#story" },
  { label: "스토어", to: "/goods" },
  { label: "Contact", to: "/contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 네비게이션 텍스트 색상: 배경이 투명일 땐 흰색, 스크롤 시 검정
  const navTextColor = scrolled ? "text-[#222]" : "text-white";
  const logoMainColor = scrolled ? "text-[#222]" : "text-white";
  const logoSubColor = scrolled ? { color: '#C9A227' } : { color: '#fff' };
  const headerBg = scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-gradient-to-b from-black/60 to-transparent";

  // 언어 토글 UI
  const handleLangToggle = () => setLang(lang === 'ko' ? 'en' : 'ko');

  // 온결의 이야기(브랜드)로 스크롤 이동
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

  // Contact로 스크롤 이동
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
          <span>온결</span>
          <span className="text-base align-middle font-normal ml-1" style={logoSubColor}>溫潔</span>
        </Link>
        <nav className="flex items-center gap-6">
          <ul className={`flex gap-6 text-base font-medium ${navTextColor} font-serif`} style={{fontFamily: 'Noto Serif KR, serif'}}>
            <li>
              <button
                onClick={handleBrandClick}
                className={`hover:text-[#C72C2C] transition-colors duration-150`}
                style={{fontFamily: 'Noto Serif KR, serif', fontWeight: 600, letterSpacing: '0.02em', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}
              >
                브랜드
              </button>
            </li>
            <li>
              <Link
                to="/goods"
                className={`hover:text-[#C72C2C] transition-colors duration-150 ${location.pathname === "/goods" ? "text-[#C72C2C] font-bold" : ""}`}
                style={{fontFamily: 'Noto Serif KR, serif', fontWeight: 600, letterSpacing: '0.02em'}}
              >
                스토어
              </Link>
            </li>
            <li>
              <button
                onClick={handleContactClick}
                className={`hover:text-[#C72C2C] transition-colors duration-150`}
                style={{fontFamily: 'Noto Serif KR, serif', fontWeight: 600, letterSpacing: '0.02em', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}
              >
                Contact
              </button>
            </li>
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