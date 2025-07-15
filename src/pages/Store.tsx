import React, { useState } from "react";
import trandhan1 from "../assets/trandhan (1).png";
import trandhan2 from "../assets/trandhan (2).png";
import trandhan3 from "../assets/trandhan (3).png";
import jage1 from "../assets/jage (1).png";
import jage2 from "../assets/jage (2).png";
import jage3 from "../assets/jage (3).png";
import acc1 from "../assets/acc (1).png";
import acc2 from "../assets/acc (2).png";
import acc3 from "../assets/acc (3).png";

const categories = ["CLOTHING", "JAGAE", "GOODS", "ACCESSORY"];

const products = [
  // CLOTHING
  {
    id: 1,
    name: "트렌드한 한복 셋업",
    price: 189000,
    image: trandhan1,
    colors: ["#1a1a4b", "#cbb893", "#fff"],
    category: "CLOTHING",
  },
  {
    id: 2,
    name: "모던 저고리 재킷",
    price: 159000,
    image: trandhan2,
    colors: ["#000", "#fff"],
    category: "CLOTHING",
  },
  {
    id: 3,
    name: "트렌드한 원피스",
    price: 139000,
    image: trandhan3,
    colors: ["#cbb893", "#000"],
    category: "CLOTHING",
  },
  // JAGAE
  {
    id: 4,
    name: "자개 브로치",
    price: 39000,
    image: jage1,
    colors: ["#fff", "#cbb893"],
    category: "JAGAE",
  },
  {
    id: 5,
    name: "자개 헤어핀",
    price: 29000,
    image: jage2,
    colors: ["#fff", "#000"],
    category: "JAGAE",
  },
  {
    id: 6,
    name: "자개 귀걸이",
    price: 49000,
    image: jage3,
    colors: ["#cbb893", "#fff"],
    category: "JAGAE",
  },
  // ACCESSORY
  {
    id: 7,
    name: "전통 악세서리 파우치",
    price: 25000,
    image: acc1,
    colors: ["#cbb893", "#000"],
    category: "ACCESSORY",
  },
  {
    id: 8,
    name: "자수 팔찌",
    price: 19000,
    image: acc2,
    colors: ["#fff", "#1a1a4b"],
    category: "ACCESSORY",
  },
  {
    id: 9,
    name: "노리개 키링",
    price: 15000,
    image: acc3,
    colors: ["#cbb893", "#000", "#fff"],
    category: "ACCESSORY",
  },
  // GOODS (샘플)
  {
    id: 10,
    name: "온결 머그컵",
    price: 12000,
    image: trandhan1,
    colors: ["#fff", "#cbb893"],
    category: "GOODS",
  },
  {
    id: 11,
    name: "온결 에코백",
    price: 18000,
    image: trandhan2,
    colors: ["#fff", "#000"],
    category: "GOODS",
  },
  {
    id: 12,
    name: "온결 스티커 세트",
    price: 7000,
    image: trandhan3,
    colors: ["#cbb893", "#1a1a4b"],
    category: "GOODS",
  },
];

function Store() {
  const [selected, setSelected] = useState("CLOTHING");
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center pt-24 pb-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-[#222]">스토어</h1>
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10">
        {/* 카테고리 */}
        <aside className="w-full md:w-1/5 mb-8 md:mb-0">
          <div className="text-[#aaa] text-lg font-serif mb-6 tracking-widest">CATEGORY</div>
          <ul className="flex md:flex-col gap-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`block px-4 py-2 rounded text-left w-full font-serif text-base tracking-wide transition-all ${selected === cat ? "bg-[#f5f5f5] text-[#222] font-bold" : "text-[#aaa] hover:bg-[#f5f5f5]"}`}
                  onClick={() => setSelected(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        {/* 상품 리스트 */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.category === selected).map((p) => (
            <div key={p.id} className="flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] bg-gray-100 rounded overflow-hidden mb-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-base font-serif text-[#222] mb-1 text-center">{p.name}</div>
              <div className="text-lg font-bold text-[#0099cc] mb-1">
                {p.price.toLocaleString()}원
              </div>
              <div className="flex gap-2 mt-1">
                {p.colors.map((color, idx) => (
                  <span key={idx} className="w-4 h-4 rounded-full border border-gray-300" style={{background: color}}></span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Store; 