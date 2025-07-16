import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-serif font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          온결의 이야기
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          온결은 한국의 전통 문양, 문자, 색채를 현대적으로 재해석하여 일상 속에서 사용할 수 있는 고급스러운 굿즈를 만듭니다.
연꽃, 태극문, 오방색과 같은 전통 요소를 세련된 디자인으로 담아내어, 전통의 아름다움을 현대의 감각으로 전달합니다.
        </motion.p>
      </div>
    </section>
  );
} 