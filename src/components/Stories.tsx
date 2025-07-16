import { motion } from "framer-motion";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import hanok1 from "../assets/hanok (1).jpg";
import { useContext } from "react";
import { LanguageContext } from "../App";

const TEXT = {
  ko: {
    title: "NE 스토리",
    viewAll: "전체보기",
    stories: [
      {
        tag: "NE's View",
        title: "조용한 옷이 오래간다 – 온결의 시선",
        desc: "빠르게 변하는 세상 속에서 오래 남는 것은 조용함입니다. 주목받지 않아도 오래도록 곁에 머무는 온결의 미학을 만나보세요.",
      },
      {
        tag: "Trend Report",
        title: "럭셔리의 변화 – 스타일의 진화",
        desc: "과거의 럭셔리는 눈에 띄는 로고와 과시였지만, 이제는 절제된 아름다움과 본질에 집중합니다. 새로운 감각을 경험해보세요.",
      },
      {
        tag: "NE's View",
        title: "서울, 새로운 쿨의 수도",
        desc: "서울의 거리를 거닐다 보면, 조용하지만 강렬한 변화의 흐름을 느낄 수 있습니다. 온결이 전하는 서울의 새로운 감성을 만나보세요.",
      },
    ],
  },
  en: {
    title: "NE Stories",
    viewAll: "View all",
    stories: [
      {
        tag: "NE's View",
        title: "Quiet Clothes Last Long – Ongyeol's Perspective",
        desc: "In a rapidly changing world, what remains for a long time is quietness. Discover Ongyeol's aesthetics that stay by your side for a long time, even without being noticed.",
      },
      {
        tag: "Trend Report",
        title: "The Evolution of Luxury – The Maturation of Style",
        desc: "Luxury in the past was about flashy logos and display, but now it's about restrained beauty and essence. Experience a new sense of style.",
      },
      {
        tag: "NE's View",
        title: "Seoul, the New Capital of Cool",
        desc: "Walking the streets of Seoul, you can feel the strong flow of change in the quiet. Discover the new sensibility of Seoul delivered by Ongyeol.",
      },
    ],
  },
};

function Stories() {
  const { lang } = useContext(LanguageContext);
  const stories = TEXT[lang].stories;
  return (
    <section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-7xl flex justify-between items-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {TEXT[lang].title}
        </motion.h2>
        <motion.button
          className="border border-black px-6 py-2 text-black font-serif text-base hover:bg-black hover:text-white transition rounded"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {TEXT[lang].viewAll}
        </motion.button>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {stories.map((story, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="relative w-full aspect-[3/4] bg-gray-100 rounded overflow-hidden mb-6">
              <img src={[photo1, photo2, hanok1][idx]} alt={story.title} className="w-full h-full object-cover" />
            </div>
            <motion.div
              className="text-xs text-gray-500 font-serif mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + idx * 0.15 }}
              viewport={{ once: true }}
            >
              {story.tag}
            </motion.div>
            <motion.div
              className="text-lg md:text-xl font-bold font-serif text-black mb-2 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
              viewport={{ once: true }}
            >
              {story.title}
            </motion.div>
            <motion.div
              className="text-sm text-gray-700 font-serif leading-relaxed line-clamp-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 + idx * 0.15 }}
              viewport={{ once: true }}
            >
              {story.desc}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stories; 