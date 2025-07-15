import React from "react";
import heroImg from "../assets/hanok (5).jpg";

const BEIGE = "#ded6c3";

function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
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
      {/* 중앙 영문 (이전 스타일로 복원) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <span className="text-[#222] text-lg md:text-xl font-light tracking-[0.4em] uppercase">Ongyeol</span>
      </div>
      {/* 맨 아래 중앙 슬로건 (고급스러운 폰트 유지) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center">
        <span style={{ fontFamily: 'Noto Serif KR, serif', fontWeight: 600 }} className="text-[#222] text-base md:text-lg tracking-wide">[온결:溫潔] 전통의 아름다움, 현대의 감각</span>
      </div>
    </section>
  );
}

export default HeroSection; 