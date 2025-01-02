import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router'dan useNavigate
import gidonImage from '../../assets/images/gidonn.svg'; // Gidon resmi
import shapeVector from '../../assets/icons/Shape-Vector.svg'; // Shape Vector resmi
import arrowRightIcon from '../../assets/icons/arrow-right.svg'; // Sağ ok ikonu

const headingItems = [
  { text: "focus." },
  { text: "lock." },
  { text: "security." }
];

function ImageSlide1() {
  const navigate = useNavigate(); // useNavigate ile yönlendirme fonksiyonu

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Gidon Resmi */}
      <div
        className="absolute"
        style={{
          top: '57px',
          left: '415px',
          width: '586px',
          height: '913px',
          backgroundImage: `url(${gidonImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Shape Vector Resmi */}
      <div
        className="absolute"
        style={{
          top: '192px',
          left: '429px',
          width: '71px',
          height: '71px',
          backgroundImage: `url(${shapeVector})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Yazı Katmanı */}
      <section
        className="inline-flex flex-col items-start gap-[10px] absolute"
        style={{
          top: '223px',
          left: '497px',
          paddingRight: '474px',
          paddingBottom: '376px',
        }}
      >
        {headingItems.map((item, index) => (
          <h2
            key={index}
            className="text-[96px] italic font-extrabold mix-blend-exclusion"
            style={{
              alignSelf: 'stretch',
              color: 'var(--stone-50, #FAFAF9)',
              fontFamily: '"SF Pro Display"',
              lineHeight: 'normal',
            }}
          >
            {item.text}
          </h2>
        ))}
      </section>

      {/* Pro Lock H7 Yazısı */}
      <h2
        className="text-[40px] font-extrabold"
        style={{
          color: '#E2E8F0',
          fontFamily: '"SF Pro Display"',
          fontSize: '40px',
          fontWeight: 700,
          position: 'absolute',
          top: '153px',
          left: '664px',
          mixBlendMode: 'exclusion',
        }}
      >
        Pro Lock H7
      </h2>

      {/* Buton */}
      <div
        className="inline-flex items-center"
        style={{
          padding: '12px 24px',
          borderRadius: '99px',
          backgroundColor: '#EDFF00',
          width: 'fit-content',
          cursor: 'pointer',
          position: 'absolute',
          top: '604px',
          left: '622px',
        }}
        onClick={() => navigate('/FSM')} // Butona tıklayınca yönlendirme
      >
        <span
          className="text-center"
          style={{
            fontFamily: '"SF Pro Display"',
            fontSize: '16px',
            fontWeight: '500',
            color: 'var(--stone-800, #292524)',
          }}
        >
          Discover Pro Lock H7
        </span>

        <img
          src={arrowRightIcon}
          alt="Arrow Right"
          className="ml-2"
          style={{
            width: '16px',
            height: '16px',
          }}
        />
      </div>
    </div>
  );
}

export default ImageSlide1;
