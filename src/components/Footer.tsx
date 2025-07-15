import React from "react";
//d//
//s
function Footer() {
  return (
    <footer className="w-full mt-16 bg-white border-t border-gray-200 text-[#222] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 쇼핑몰 기본정보 */}
        <div>
          <div className="font-bold text-base mb-4">쇼핑몰 기본정보</div>
          <div className="mb-1 text-[#222] font-semibold">상호명 <span className="font-normal text-[#aaa] ml-1">온결(溫潔)</span></div>
          <div className="mb-1 text-[#222] font-semibold">대표자명 <span className="font-normal text-[#aaa] ml-1">홍길동</span></div>
          <div className="mb-1 text-[#222] font-semibold">사업장 주소 <span className="font-normal text-[#aaa] ml-1">서울특별시 강남구 테헤란로 123, 4층</span></div>
          <div className="mb-1 text-[#222] font-semibold">사업자 등록번호 <span className="font-normal text-[#aaa] ml-1">123-45-67890</span></div>
          <div className="mb-1 text-[#222] font-semibold">통신판매업 신고번호 <span className="font-normal text-[#aaa] ml-1">2024-서울강남-1234호</span></div>
          <div className="mb-1 text-[#222] font-semibold">개인정보보호책임자 <span className="font-normal text-[#aaa] ml-1">홍길동</span></div>
        </div>
        {/* 고객센터 정보 */}
        <div>
          <div className="font-bold text-base mb-4">고객센터 정보</div>
          <div className="mb-1 text-[#222] font-semibold">상담/주문전화 <span className="font-normal text-[#aaa] ml-1">02-1234-5678</span></div>
          <div className="mb-1 text-[#222] font-semibold">상담/주문 이메일 <span className="font-normal text-[#aaa] ml-1">info@ongyul.com</span></div>
          <div className="mb-1 text-[#222] font-semibold">CS 운영시간 <span className="font-normal text-[#aaa] ml-1">평일 10:00~17:00 (점심 12:00~13:00)</span></div>
        </div>
        {/* 결제정보 */}
        <div>
          <div className="font-bold text-base mb-4">결제정보</div>
          <div className="mb-1 text-[#222] font-semibold">무통장 계좌정보</div>
          <div className="mb-1 text-[#aaa]">기업은행 51404735804019</div>
          <div className="mb-1 text-[#aaa]">예금주: 온결(溫潔)</div>
        </div>
        {/* SNS */}
        <div className="flex flex-col items-end">
          <div className="font-bold text-base mb-4 self-end">SNS</div>
          <ul className="space-y-1 text-right">
            <li><a href="#" className="hover:underline text-[#aaa]">instagram</a></li>
            <li><a href="#" className="hover:underline text-[#aaa]">youtube</a></li>
            <li><a href="#" className="hover:underline text-[#aaa]">facebook</a></li>
            <li><a href="#" className="hover:underline text-[#aaa]">kakao</a></li>
            <li><a href="#" className="hover:underline text-[#aaa]">twitter</a></li>
            <li><a href="#" className="hover:underline text-[#aaa]">blog</a></li>
          </ul>
        </div>
      </div>
      {/* 하단 링크 */}
      <div className="max-w-7xl mx-auto px-4 pb-2 flex flex-wrap gap-4 justify-center text-xs text-[#aaa] font-serif border-t border-gray-200 pt-4">
        <a href="#" className="hover:underline">회사소개</a>
        <a href="#" className="hover:underline">이용약관</a>
        <a href="#" className="hover:underline">개인정보처리방침</a>
        <a href="#" className="hover:underline">이용안내</a>
      </div>
      {/* 카피라이트 */}
      <div className="text-center text-xs text-[#aaa] pb-4">Copyright &copy; 온결(溫潔). All Rights Reserved. Hosting by Example Corp.</div>
    </footer>
  );
}

export default Footer; 