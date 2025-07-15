import goods9 from "../assets/goods (9).png";
import goods11 from "../assets/goods (11).png";
import goods12 from "../assets/goods (12).png";
import { Link } from "react-router-dom";

const products = [
  {
    brand: "ONGYEOL",
    price: "₩28,000",
    image: goods9,
  },
  {
    brand: "ONGYEOL",
    price: "₩42,000",
    image: goods11,
  },
  {
    brand: "ONGYEOL",
    price: "₩19,000",
    image: goods12,
  },
];

function Products() {
  return (
    <section className="w-full py-20 bg-white flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 px-4 md:px-8">
        {/* 왼쪽: 상품 카드 */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div key={idx} className="w-full flex flex-col items-start cursor-pointer">
              <img
                src={item.image}
                alt={item.brand}
                className="w-full h-96 object-cover select-none cursor-pointer shadow-lg hover:shadow-2xl transition-shadow my-6"
                draggable={false}
              />
              <div className="w-full text-center mt-3 cursor-pointer">
                <div className="text-xs text-[#7c111b] font-semibold tracking-widest mb-1 font-serif">{item.brand}</div>
                {/* 상품명 제거, 가격만 남길 경우 아래 주석 해제 */}
                {/* <div className="text-lg font-bold text-black mb-1 font-serif">{item.price}</div> */}
              </div>
            </div>
          ))}
        </div>
        {/* 오른쪽: New In 정보 박스 */}
        <div className="md:w-1/3 flex flex-col justify-center items-center md:items-center md:pl-12 mt-12 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center" style={{fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em'}}>신상품</h2>
          <p className="text-base text-black mb-8 text-center" style={{maxWidth: '320px', fontFamily: 'Noto Serif KR, serif'}}>
            온결의 새로운 굿즈를 만나보세요.<br />
            전통의 아름다움과 현대의 감각이 어우러진<br />
            특별한 신상품을 지금 경험해보세요.
          </p>
          <Link
            to="/goods"
            className="bg-black text-white font-semibold px-8 py-3 hover:bg-[#222] transition text-base mt-2"
            style={{fontFamily: 'Noto Serif KR, serif', borderRadius: '2px'}}
          >
            신상품 보러가기
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products; 