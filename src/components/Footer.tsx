import { useContext } from "react";
import { LanguageContext } from "../App";

const TEXT = {
  ko: {
    info: "쇼핑몰 기본정보",
    company: "상호명",
    ceo: "대표자명",
    address: "사업장 주소",
    regnum: "사업자 등록번호",
    salesnum: "통신판매업 신고번호",
    privacy: "개인정보보호책임자",
    cs: "고객센터 정보",
    phone: "상담/주문전화",
    email: "상담/주문 이메일",
    hours: "CS 운영시간",
    pay: "결제정보",
    bank: "무통장 계좌정보",
    account: "기업은행 51404735804019",
    owner: "예금주: 온결(溫潔)",
    sns: "SNS",
    about: "회사소개",
    terms: "이용약관",
    privacyPolicy: "개인정보처리방침",
    guide: "이용안내",
    copyright: "Copyright © 온결(溫潔). All Rights Reserved. Hosting by Example Corp.",
  },
  en: {
    info: "Shop Info",
    company: "Company Name",
    ceo: "CEO",
    address: "Address",
    regnum: "Business Registration No.",
    salesnum: "E-commerce Permit No.",
    privacy: "Privacy Officer",
    cs: "Customer Service",
    phone: "Phone",
    email: "Email",
    hours: "CS Hours",
    pay: "Payment Info",
    bank: "Bank Account",
    account: "IBK 51404735804019",
    owner: "Account Holder: Ongyeol(溫潔)",
    sns: "SNS",
    about: "About",
    terms: "Terms of Use",
    privacyPolicy: "Privacy Policy",
    guide: "Guide",
    copyright: "Copyright © Ongyeol(溫潔). All Rights Reserved. Hosting by Example Corp.",
  },
};

function Footer() {
  const { lang } = useContext(LanguageContext);
  return (
    <footer className="w-full mt-16 bg-white border-t border-gray-200 text-[#222] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 쇼핑몰 기본정보 */}
        <div>
          <div className="font-bold text-base mb-4">{TEXT[lang].info}</div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].company} <span className="font-normal text-[#aaa] ml-1">온결(溫潔)</span></div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].ceo} <span className="font-normal text-[#aaa] ml-1">홍길동</span></div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].address} <span className="font-normal text-[#aaa] ml-1">서울특별시 강남구 테헤란로 123, 4층</span></div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].regnum} <span className="font-normal text-[#aaa] ml-1">123-45-67890</span></div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].salesnum} <span className="font-normal text-[#aaa] ml-1">2024-서울강남-1234호</span></div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].privacy} <span className="font-normal text-[#aaa] ml-1">홍길동</span></div>
        </div>
        {/* 고객센터 정보 */}
        <div>
          <div className="font-bold text-base mb-4">{TEXT[lang].cs}</div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].phone} <span className="font-normal text-[#aaa] ml-1">02-1234-5678</span></div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].email} <span className="font-normal text-[#aaa] ml-1">info@ongyul.com</span></div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].hours} <span className="font-normal text-[#aaa] ml-1">평일 10:00~17:00 (점심 12:00~13:00)</span></div>
        </div>
        {/* 결제정보 */}
        <div>
          <div className="font-bold text-base mb-4">{TEXT[lang].pay}</div>
          <div className="mb-1 text-[#222] font-semibold">{TEXT[lang].bank}</div>
          <div className="mb-1 text-[#aaa]">{TEXT[lang].account}</div>
          <div className="mb-1 text-[#aaa]">{TEXT[lang].owner}</div>
        </div>
        {/* SNS */}
        <div className="flex flex-col items-end">
          <div className="font-bold text-base mb-4 self-end">{TEXT[lang].sns}</div>
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
        <a href="#" className="hover:underline">{TEXT[lang].about}</a>
        <a href="#" className="hover:underline">{TEXT[lang].terms}</a>
        <a href="#" className="hover:underline">{TEXT[lang].privacyPolicy}</a>
        <a href="#" className="hover:underline">{TEXT[lang].guide}</a>
      </div>
      {/* 카피라이트 */}
      <div className="text-center text-xs text-[#aaa] pb-4">{TEXT[lang].copyright}</div>
    </footer>
  );
}

export default Footer; 