import React from 'react';

const POINTS = [
  'Over 30 Years on the Land',
  'CSLB Licensed C-27 #1152556',
  'Licensed Pest Control #46723 · QAL B&D',
  'CA Farm Bureau Young Farmer Mentorship',
];

export default function ServicesCredentials() {
  return (
    <section className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex flex-wrap items-center justify-center">
          {POINTS.map((point, i) => (
            <React.Fragment key={point}>
              <span className="font-body text-body text-[13px] tracking-[0.08em] px-5 py-2 text-center">
                {point}
              </span>
              {i < POINTS.length - 1 && (
                <span className="hidden md:block w-[1px] h-[14px] flex-shrink-0" style={{ backgroundColor: '#9a7b43', opacity: 0.4 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}