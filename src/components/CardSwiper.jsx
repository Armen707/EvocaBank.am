import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Բոլոր 22 ճիշտ քարտերն ու նկարները միանգամից այստեղ են
const cardsData = [
  { id: 'card1', title: 'Evoca Travel Card', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg', buttonText: 'Մանրամասն' },
  { id: 'card2', title: 'Evoca Visa Platinum', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card3', title: 'Wilco Visa Infinite', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card4', title: 'Evoca Gift Card', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card5', title: 'Digital Gift Card', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card6', title: 'Visa Infinite', imageUrl: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card7', title: 'Visa Vision', imageUrl: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card8', title: 'Mastercard World Digital', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card9', title: 'UnionPay Business Platinum', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card10', title: 'MyLer Gift Card', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card11', title: 'UnionPay Gold', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card12', title: '4U.am Gift card', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card13', title: 'Mastercard Gold', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card14', title: 'Evoca Pension', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card15', title: 'Mastercard Standard', imageUrl: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card16', title: 'Visa Digital', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card17', title: 'Visa Classic', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card18', title: 'Arca Classic', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card19', title: 'Visa Business',imageUrl: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card20', title: 'Dalma Gift Card',imageUrl: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card21', title: 'Rio Gift Card',imageUrl: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png', buttonText: 'Մանրամասն' },
  { id: 'card22', title: 'Visa Gold', imageUrl: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png', buttonText: 'Մանրամասն' },
];

export default function CardSwiper() {
  const [cards] = useState(cardsData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleMouseMove = (e) => {
    const cardEl = e.currentTarget;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -((y - centerY) / 10);
    const rotateY = (x - centerX) / 10;

    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  };

  const handleMouseLeave = (e) => {
    const cardEl = e.currentTarget;
    cardEl.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <div className="cards" style={{ 
      backgroundColor: '#f0f7fe', 
      boxSizing: 'border-box', 
      overflow: 'hidden', 
      padding: '95px 0',
      width: '100%'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '100px', 
        maxWidth: '1100px', 
        margin: '0 auto',
        fontFamily: 'sans-serif'
      }}>
        
        {/* 1. Ձախ կողմի ուղղահայաց փոքր նկարների շրջանցող (Thumbs Swiper) */}
        <div style={{ width: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Վերևի սլաք */}
          <div className="swiper-button-prev-custom" style={{ 
            cursor: 'pointer', 
            color: '#5b21b6', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            marginBottom: '10px',
            textAlign: 'center'
          }}>▲</div>

          <Swiper
            modules={[Navigation, Thumbs]}
            onSwiper={setThumbsSwiper}
            direction={'vertical'}
            slidesPerView={3}
            spaceBetween={15}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            watchSlidesProgress={true}
            style={{ height: '360px', width: '100%' }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={card.id || index} style={{ cursor: 'pointer', textAlign: 'center' }}>
                <div style={{
                  padding: '8px',
                  borderRadius: '12px',
                  background: '#f0f7fe',
                  transition: '0.3s'
                }}>
                  <img 
                    src={card.imageUrl} 
                    alt={card.title} 
                    style={{ width: '100%', height: '60px', objectFit: 'contain', borderRadius: '6px' }} 
                  />
                  <p style={{ fontSize: '12px', fontWeight: 'bold', margin: '5px 0 0', color: '#333' }}>
                    {card.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Ներքևի սլաք */}
          <div className="swiper-button-next-custom" style={{ 
            cursor: 'pointer', 
            color: '#5b21b6', 
            fontSize: '18px', 
            fontWeight: 'bold',
            marginTop: '10px',
            textAlign: 'center'
          }}>▼</div>
        </div>

        {/* 2. Մեջտեղի մեծ նկարի Swiper */}
        <div style={{ width: '400px' }}>
          <Swiper
            modules={[Thumbs, EffectFade]}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            slidesPerView={1}
            style={{ width: '100%', overflow: 'visible' }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={card.id || index}>
                <div 
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    textAlign: 'center', 
                    cursor: 'pointer',
                    transition: 'transform 0.1s ease-out',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <img 
                    src={card.imageUrl} 
                    alt={card.title} 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      objectFit: 'contain', 
                      filter: 'drop-shadow(0px 15px 25px rgba(0,0,0,0.15))',
                      pointerEvents: 'none'
                    }} 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 3. Աջ կողմի տեքստային հատված */}
        <div style={{ width: '350px' }}>
          <Swiper
            modules={[Thumbs, EffectFade]}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            slidesPerView={1}
            allowTouchMove={false}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={card.id || index}>
                <div>
                  <h2 style={{ fontSize: '26px', color: '#111', marginBottom: '15px' }}>{card.title}</h2>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '25px' }}>
                    {card.subtitle}
                  </p>
                  <button style={{
                    background: '#6d28d9',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(109, 40, 217, 0.3)'
                  }}>
                    {card.buttonText}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}