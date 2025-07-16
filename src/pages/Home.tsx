import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Stories from "../components/Stories";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import trandhan1 from "../assets/trandhan (1).png";
import trandhan2 from "../assets/trandhan (2).png";
import trandhan3 from "../assets/trandhan (3).png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../App";

const TEXT = {
  ko: {
    storyTitle: "온결의 이야기",
    storyDesc: `<span class='font-bold tracking-wider'>온결</span>은 한국의 전통 문양, 문자, 색채를 현대적으로 재해석하여<br />일상 속에서 사용할 수 있는 고급스러운 굿즈를 만듭니다.`,
    storyDots: "•<br />•<br />•",
    section1: [
      "온결은 전통 문양과 색채를 현대적으로 재해석하여,",
      "일상 속에서 특별함을 느낄 수 있는 굿즈를 만듭니다.",
      "섬세한 디테일과 고급스러운 소재로 완성된 제품은",
      "한국의 미와 감성을 자연스럽게 전합니다.",
    ],
    section2: [
      "온결의 디자인은 단순한 소품을 넘어,",
      "전통과 현대의 조화를 경험하게 합니다.",
      "당신의 공간과 삶에 깊이 있는 아름다움을 더하는,",
      "온결만의 감성을 만나보세요.",
    ],
    discover: "Discover and Experience Emerging Labels<br/>from Korea",
    newIn: "New In",
    newInDesc: "온결의 새로운 굿즈를 만나보세요.<br />전통의 아름다움과 현대의 감각이 어우러진<br />특별한 신상품을 지금 경험해보세요.",
    newInBtn: "신상품 보러가기",
    brand: "ONGYEOL",
    contact: "Contact",
    email: "ongyul@email.com",
    instagram: "@ongyeol_official (Instagram)",
    kakao: "@ongyeol_kakao (KakaoTalk)",
  },
  en: {
    storyTitle: "Ongyeol Story",
    storyDesc: `<span class='font-bold tracking-wider'>Ongyeol</span> reinterprets traditional Korean patterns, characters, and colors in a modern way,<br />creating luxurious goods for everyday life.`,
    storyDots: "•<br />•<br />•",
    section1: [
      "Ongyeol reinterprets traditional patterns and colors in a modern way,",
      "creating goods that bring specialness to everyday life.",
      "Products made with delicate details and luxurious materials",
      "naturally convey the beauty and sensibility of Korea.",
    ],
    section2: [
      "Ongyeol's design goes beyond simple accessories,",
      "allowing you to experience the harmony of tradition and modernity.",
      "Adding deep beauty to your space and life,",
      "Experience Ongyeol's unique sensibility.",
    ],
    discover: "Discover and Experience Emerging Labels<br/>from Korea",
    newIn: "New In",
    newInDesc: "Discover Ongyeol's new goods.<br />Experience special new arrivals that blend traditional beauty and modern sensibility.",
    newInBtn: "View New Arrivals",
    brand: "ONGYEOL",
    contact: "Contact",
    email: "ongyul@email.com",
    instagram: "@ongyeol_official (Instagram)",
    kakao: "@ongyeol_kakao (KakaoTalk)",
  },
};

function Home() {
  const { lang } = useContext(LanguageContext);
  return (
    <main className="flex flex-col items-center h-full bg-white">
      <HeroSection />
      {/* 온결의 이야기 설명란 복원 */}
      <motion.section
        id="story"
        className="w-full py-20 relative overflow-hidden animate-fade-in"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center px-4 md:px-8 relative z-10">
          <motion.h2
            className="text-2xl md:text-3xl font-bold font-serif text-black mb-10 tracking-wider text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {TEXT[lang].storyTitle}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-serif text-black leading-loose tracking-wide text-center whitespace-pre-line mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: TEXT[lang].storyDesc }}
          />
          <motion.div
            className="my-8 text-2xl text-black text-center select-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: TEXT[lang].storyDots }}
          />
        </div>
      </motion.section>
      {/* 언밸런스 디자인 섹션 (사진 아래/옆 모든 글씨 완전 중앙 정렬, 문장별 줄바꿈 및 '여,' 한 줄에) */}
      <motion.section
        className="w-full flex flex-col items-center py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-6xl flex flex-col gap-24">
          {/* 첫 번째 사진: 왼쪽 정렬, 오른쪽에 설명 */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="flex flex-col items-center w-full md:w-[45%]">
              <img src={photo1} alt="Ongyeol Look 1" className="w-full max-w-xl object-cover mb-4 rounded-lg shadow-lg" />
              <div className="text-center text-black text-lg font-serif" dangerouslySetInnerHTML={{ __html: TEXT[lang].discover }} />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center md:pl-9 mt-10 md:mt-10">
              <motion.div
                className="text-center text-gray-700 text-base md:text-lg font-serif"
                style={{letterSpacing: '0.06em', lineHeight: '2.2', maxWidth: '520px'}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {TEXT[lang].section1.map((line, i) => (
                  <motion.span
                    key={i}
                    style={{display: 'block', marginBottom: i < 3 ? '1.7em' : 0}}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
          {/* 두 번째 사진: 오른쪽 정렬, 왼쪽에 설명 (동일 스타일 적용) */}
          <div className="w-full flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-8">
            <div className="flex flex-col items-center w-full md:w-[45%]">
              <img src={photo2} alt="Ongyeol Look 2" className="w-full max-w-xl object-cover mb-4 rounded-lg shadow-lg" />
              <div className="text-center text-black text-lg font-serif" dangerouslySetInnerHTML={{ __html: TEXT[lang].discover }} />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center md:pr-9 mt-10 md:mt-10">
              <motion.div
                className="text-center text-gray-700 text-base md:text-lg font-serif"
                style={{letterSpacing: '0.06em', lineHeight: '2.2', maxWidth: '520px'}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {TEXT[lang].section2.map((line, i) => (
                  <motion.span
                    key={i}
                    style={{display: 'block', marginBottom: i < 3 ? '1.7em' : 0}}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        viewport={{ once: true }}
      >
        <Products />
      </motion.div>
      {/* 왼쪽 New In 정보 박스, 오른쪽 상품 3개 섹션 */}
      <motion.section
        className="w-full py-20 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 px-4 md:px-8">
          {/* 왼쪽: New In 정보 박스 (가운데 정렬, 한국어 문구) */}
          <div className="md:w-1/3 flex flex-col justify-center items-center md:items-center mb-12 md:mb-0">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-black text-center"
              style={{fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {TEXT[lang].newIn}
            </motion.h2>
            <motion.p
              className="text-base text-black mb-8 text-center"
              style={{maxWidth: '320px', fontFamily: 'Noto Serif KR, serif'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: TEXT[lang].newInDesc }}
            />
            <motion.a
              href="#"
              className="bg-black text-white font-semibold px-8 py-3 hover:bg-[#222] transition text-base mt-2"
              style={{fontFamily: 'Noto Serif KR, serif', borderRadius: '2px'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: true }}
            >
              {TEXT[lang].newInBtn}
            </motion.a>
          </div>
          {/* 오른쪽: 상품 카드 3개 (goods 1, 2, 3) */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <img src={trandhan1} alt="Trandhan Product 1" className="w-full h-96 object-cover select-none cursor-pointer shadow-lg hover:shadow-2xl transition-shadow my-6 rounded-lg" draggable={false} />
              <div className="text-xs text-[#7c111b] font-semibold tracking-widest mb-1 font-serif text-center">{TEXT[lang].brand}</div>
            </div>
            <div>
              <img src={trandhan2} alt="Trandhan Product 2" className="w-full h-96 object-cover select-none cursor-pointer shadow-lg hover:shadow-2xl transition-shadow my-6 rounded-lg" draggable={false} />
              <div className="text-xs text-[#7c111b] font-semibold tracking-widest mb-1 font-serif text-center">{TEXT[lang].brand}</div>
            </div>
            <div>
              <img src={trandhan3} alt="Trandhan Product 3" className="w-full h-96 object-cover select-none cursor-pointer shadow-lg hover:shadow-2xl transition-shadow my-6 rounded-lg" draggable={false} />
              <div className="text-xs text-[#7c111b] font-semibold tracking-widest mb-1 font-serif text-center">{TEXT[lang].brand}</div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        viewport={{ once: true }}
      >
        <Stories />
      </motion.div>
      {/* Contact(연락처) 섹션 */}
      <motion.section
        id="contact"
        className="w-full py-12 flex flex-col items-center border-t border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-xl md:text-2xl font-bold font-serif text-black mb-4 tracking-wider text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          viewport={{ once: true }}
        >
          {TEXT[lang].contact}
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-base text-black font-serif mt-8">
          <div className="flex items-center gap-2">
            <span className="material-icons text-xl">mail</span>
            <span>{TEXT[lang].email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons text-xl">chat</span>
            <span>{TEXT[lang].instagram}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons text-xl">message</span>
            <span>{TEXT[lang].kakao}</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Home; 