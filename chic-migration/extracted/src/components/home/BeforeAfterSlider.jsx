import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionLabel from '../SectionLabel';

const beforeImg = '/images/7ce47eb97_generated_abee0a1f.png';
const afterImg = '/images/6ecf401ff_generated_d64aa3be.png';

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleStart = useCallback((e) => {
    isDragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  }, [updatePosition]);

  const handleMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  }, [updatePosition]);

  const handleEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section className="py-20 md:py-28" style={{ background: '#faf8f5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel>The Transformation</SectionLabel>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mt-3 mb-4" style={{ color: '#1e1e1e' }}>
            See The Garden Chic Difference
          </h2>
          <p className="font-body text-base max-w-xl mx-auto" style={{ color: '#5a5a5a', lineHeight: 1.75 }}>
            Every project starts with a vision and ends with a garden you love.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto overflow-hidden select-none cursor-ew-resize"
          style={{ borderRadius: '12px', maxWidth: '900px', aspectRatio: '16/9' }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          {/* After (full width behind) */}
          <img src={afterImg} alt="After - beautiful manicured garden" className="absolute inset-0 w-full h-full object-cover" />

          {/* Before (clipped) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
            <img
              src={beforeImg}
              alt="Before - overgrown garden"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 z-10"
            style={{ left: `${position}%`, background: 'white', transform: 'translateX(-50%)' }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-lg cursor-grab active:cursor-grabbing"
            style={{
              left: `${position}%`,
              transform: 'translate(-50%, -50%)',
              background: '#c9547a',
            }}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
            <ChevronRight className="w-4 h-4 text-white" />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-body font-semibold text-white" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
            BEFORE
          </div>
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-body font-semibold text-white" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
            AFTER
          </div>
        </div>
      </div>
    </section>
  );
}