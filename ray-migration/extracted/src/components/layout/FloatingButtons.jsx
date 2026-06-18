import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingButtons() {
  const [callHover, setCallHover] = useState(false);
  const [quoteHover, setQuoteHover] = useState(false);

  return (
    <>
      {/* Quote Button — bottom 88px, right 24px */}
      <div className="fixed z-40" style={{ bottom: '88px', right: '24px' }}>
        {quoteHover && (
          <div
            className="absolute font-dm text-sm text-white whitespace-nowrap shadow-lg"
            style={{
              right: 'calc(100% + 12px)',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#0A0A0A',
              padding: '6px 12px',
              borderRadius: '6px',
            }}
          >
            Request a Quote
          </div>
        )}
        <Link
          to="/contact"
          onMouseEnter={() => setQuoteHover(true)}
          onMouseLeave={() => setQuoteHover(false)}
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#0A0A0A',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            transform: quoteHover ? 'translateY(-3px)' : 'translateY(0)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <MessageSquare style={{ width: '22px', height: '22px', color: '#FFFFFF' }} />
        </Link>
      </div>

      {/* Call Button — bottom 24px, right 24px */}
      <div className="fixed z-40" style={{ bottom: '24px', right: '24px' }}>
        {callHover && (
          <div
            className="absolute font-dm text-sm text-white whitespace-nowrap shadow-lg"
            style={{
              right: 'calc(100% + 12px)',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#CC2200',
              padding: '6px 12px',
              borderRadius: '6px',
            }}
          >
            Call Ray 24/7
          </div>
        )}
        <a
          href="tel:+18058352196"
          onMouseEnter={() => setCallHover(true)}
          onMouseLeave={() => setCallHover(false)}
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#CC2200',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: callHover
              ? '0 4px 20px rgba(204,34,0,0.5)'
              : '0 4px 16px rgba(204,34,0,0.35)',
            transform: callHover ? 'translateY(-3px)' : 'translateY(0)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            animation: 'float-pulse 2.5s ease-in-out infinite',
          }}
        >
          <Phone style={{ width: '22px', height: '22px', color: '#FFFFFF' }} />
        </a>
      </div>
    </>
  );
}