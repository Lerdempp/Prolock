import React from 'react';
import gidonImage from '../../assets/images/gidon2.png';
import shapeVector from '../../assets/icons/Shape-Vector.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';

const headingItems = [
  { text: "focus." },
  { text: "lock." },
  { text: "security." }
];

function ImageSlide2() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Gidon Resmi */}
      <div
        className="absolute"
        style={{
          top: '108px',
          left: '480px',
          width: '473px',
          height: '747px',
          backgroundImage: `url(${gidonImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Shape Vector Resmi */}
      <div
        className="absolute"
        style={{
          top: '297px',
          left: '678px',
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
          top: '378px',
          left: '678px',
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
          top: '754px',
          left: '677px',
        }}
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
          Discover Stem Mount
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

export default ImageSlide2;
