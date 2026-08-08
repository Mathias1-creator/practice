import React, { useEffect, useRef, useState } from 'react';

export default function TimelineConnector() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeight(100);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex justify-center items-center py-0 relative" style={{ height: 64 }}>
      {/* Top dot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#2E7D32]" />
      {/* Line */}
      <div className="w-[2px] bg-[#2E7D32]/20 absolute top-0 bottom-0 left-1/2 -translate-x-1/2">
        <div
          className="w-full bg-[#2E7D32] transition-all duration-700 ease-in-out"
          style={{ height: height + '%' }}
        />
      </div>
      {/* Bottom dot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#2E7D32]" />
    </div>
  );
}