import React from 'react';

export default function TopoTexture({ color = '#9a7b43', opacity = 0.08, className = '' }) {
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
      <g fill="none" stroke="${color}" stroke-width="1.2">
        <path d="M0 120 Q150 80 300 130 Q450 180 600 100"/>
        <path d="M0 180 Q100 140 200 170 Q350 220 500 160 Q560 140 600 155"/>
        <path d="M0 240 Q80 210 180 250 Q300 290 420 230 Q520 190 600 220"/>
        <path d="M0 310 Q120 270 240 320 Q360 370 480 300 Q550 270 600 290"/>
        <path d="M0 370 Q100 340 220 380 Q340 420 460 360 Q540 330 600 350"/>
        <path d="M0 440 Q140 400 280 450 Q400 490 520 430 Q570 410 600 420"/>
        <path d="M0 510 Q120 470 250 520 Q380 560 500 500 Q560 475 600 490"/>
        <path d="M0 60 Q180 30 350 70 Q480 100 600 55"/>
      </g>
    </svg>
  `;
  const encoded = encodeURIComponent(svgContent.trim());

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,${encoded}")`,
        backgroundSize: '600px 600px',
        opacity,
      }}
    />
  );
}