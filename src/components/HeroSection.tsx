import { motion } from "framer-motion";
import heroImg from "../assets/hanok (5).jpg";
import { useContext } from "react";
import { LanguageContext } from "../App";

const BEIGE = "#ded6c3";

const TEXT = {
  ko: {
    slogan: "[온결:溫潔] 전통의 아름다움, 현대의 감각",
  },
  en: {
    slogan: "[Ongyeol:溫潔] The Beauty of Tradition, the Sensibility of Modernity",
  },
};

function HeroSection() {
  const { lang } = useContext(LanguageContext);
  return (
    <motion.section
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* 배경 한옥 이미지 */}
      <img
        src={heroImg}
        alt="온결 메인 배너 배경"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 brightness-95"
        draggable={false}
        style={{ background: BEIGE }}
      />
      {/* 더 연한 베이지 오버레이 */}
      <div className="absolute inset-0 z-10" style={{ background: 'rgba(222,214,195,0.5)' }} />
      {/* 중앙 영문 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="text-[#222] text-lg md:text-xl font-light tracking-[0.4em] uppercase">Ongyeol</span>
      </motion.div>
      {/* 맨 아래 중앙 슬로건 */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <span style={{ fontFamily: 'Noto Serif KR, serif', fontWeight: 600 }} className="text-[#222] text-base md:text-lg tracking-wide">{TEXT[lang].slogan}</span>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection; 