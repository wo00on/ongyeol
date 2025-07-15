import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Stories from "../components/Stories";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import goods9 from "../assets/goods (9).png";
import goods11 from "../assets/goods (11).png";
import goods12 from "../assets/goods (12).png";
import trandhan1 from "../assets/trandhan (1).png";
import trandhan2 from "../assets/trandhan (2).png";
import trandhan3 from "../assets/trandhan (3).png";

function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-black">
      <HeroSection />
      {/* 온결의 이야기 설명란 복원 */}
      <section id="story" className="w-full bg-white py-20 relative overflow-hidden animate-fade-in">
        <div className="max-w-3xl mx-auto flex flex-col items-center px-4 md:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-black mb-10 tracking-wider text-center">온결의 이야기</h2>
          <p className="text-lg md:text-xl font-serif text-black leading-loose tracking-wide text-center whitespace-pre-line mb-12">
            <span className="font-bold tracking-wider">온결</span>은 한국의 전통 문양, 문자, 색채를 현대적으로 재해석하여<br />
            일상 속에서 사용할 수 있는 고급스러운 굿즈를 만듭니다.
          </p>
          <div className="my-8 text-2xl text-black text-center select-none">
            •<br />•<br />•
          </div>
        </div>
      </section>
      {/* 언밸런스 디자인 섹션 (사진 아래/옆 모든 글씨 완전 중앙 정렬, 문장별 줄바꿈 및 '여,' 한 줄에) */}
      <section className="w-full bg-white flex flex-col items-center py-16">
        <div className="w-full max-w-6xl flex flex-col gap-24">
          {/* 첫 번째 사진: 왼쪽 정렬, 오른쪽에 설명 */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="flex flex-col items-center w-full md:w-[45%]">
              <img src={photo1} alt="Ongyeol Look 1" className="w-full max-w-xl object-cover mb-4 rounded-lg shadow-lg" />
              <div className="text-center text-black text-lg font-serif">Discover and Experience Emerging Labels<br/>from Korea</div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center md:pl-9 mt-10 md:mt-10">
              <div className="text-center text-gray-700 text-base md:text-lg font-serif" style={{letterSpacing: '0.06em', lineHeight: '2.2', maxWidth: '520px'}}>
                <span style={{display: 'block', marginBottom: '1.7em'}}>온결은 전통 문양과 색채를 현대적으로 재해석하여,</span>
                <span style={{display: 'block', marginBottom: '1.7em'}}>일상 속에서 특별함을 느낄 수 있는 굿즈를 만듭니다.</span>
                <span style={{display: 'block', marginBottom: '1.7em'}}>섬세한 디테일과 고급스러운 소재로 완성된 제품은</span>
                <span style={{display: 'block'}}>한국의 미와 감성을 자연스럽게 전합니다.</span>
              </div>
            </div>
          </div>
          {/* 두 번째 사진: 오른쪽 정렬, 왼쪽에 설명 (동일 스타일 적용) */}
          <div className="w-full flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-8">
            <div className="flex flex-col items-center w-full md:w-[45%]">
              <img src={photo2} alt="Ongyeol Look 2" className="w-full max-w-xl object-cover mb-4 rounded-lg shadow-lg" />
              <div className="text-center text-black text-lg font-serif">Discover and Experience Emerging Labels<br/>from Korea</div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center md:pr-9 mt-10 md:mt-10">
              <div className="text-center text-gray-700 text-base md:text-lg font-serif" style={{letterSpacing: '0.06em', lineHeight: '2.2', maxWidth: '520px'}}>
                <span style={{display: 'block', marginBottom: '1.7em'}}>온결의 디자인은 단순한 소품을 넘어,</span>
                <span style={{display: 'block', marginBottom: '1.7em'}}>전통과 현대의 조화를 경험하게 합니다.</span>
                <span style={{display: 'block', marginBottom: '1.7em'}}>당신의 공간과 삶에 깊이 있는 아름다움을 더하는,</span>
                <span style={{display: 'block'}}>온결만의 감성을 만나보세요.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />
      {/* 왼쪽 New In 정보 박스, 오른쪽 상품 3개 섹션 */}
      <section className="w-full py-20 bg-white flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 px-4 md:px-8">
          {/* 왼쪽: New In 정보 박스 (가운데 정렬, 한국어 문구) */}
          <div className="md:w-1/3 flex flex-col justify-center items-center md:items-center mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center" style={{fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em'}}>New In</h2>
            <p className="text-base text-black mb-8 text-center" style={{maxWidth: '320px', fontFamily: 'Noto Serif KR, serif'}}>
              온결의 새로운 굿즈를 만나보세요.<br />
              전통의 아름다움과 현대의 감각이 어우러진<br />
              특별한 신상품을 지금 경험해보세요.
            </p>
            <a
              href="#"
              className="bg-black text-white font-semibold px-8 py-3 hover:bg-[#222] transition text-base mt-2"
              style={{fontFamily: 'Noto Serif KR, serif', borderRadius: '2px'}}
            >
              신상품 보러가기
            </a>
          </div>
          {/* 오른쪽: 상품 카드 3개 (goods 1, 2, 3) */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src={trandhan1} alt="Trandhan Product 1" className="w-full h-96 object-cover select-none cursor-pointer shadow-lg hover:shadow-2xl transition-shadow my-6 rounded-lg" draggable={false} />
            <img src={trandhan2} alt="Trandhan Product 2" className="w-full h-96 object-cover select-none cursor-pointer shadow-lg hover:shadow-2xl transition-shadow my-6 rounded-lg" draggable={false} />
            <img src={trandhan3} alt="Trandhan Product 3" className="w-full h-96 object-cover select-none cursor-pointer shadow-lg hover:shadow-2xl transition-shadow my-6 rounded-lg" draggable={false} />
          </div>
        </div>
      </section>
      {/* <Story /> removed */}
      <Stories />
      {/* Contact(연락처) 섹션 */}
      <section id="contact" className="w-full bg-white py-12 flex flex-col items-center border-t border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold font-serif text-black mb-4 tracking-wider text-center">Contact</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-base text-black font-serif">
          <div className="flex items-center gap-2">
            <span className="material-icons">mail</span>
            <span>ongyul@email.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons">chat</span>
            <span>@ongyeol_official (Instagram)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons">message</span>
            <span>@ongyeol_kakao (KakaoTalk)</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home; 