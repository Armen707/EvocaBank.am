import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { database } from '../lib/firebase'; 
import { ref, get, set } from 'firebase/database';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const initialSlidesData = {
  slide1: {
    title: "Visa Infinite",
    subtitle: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտն հենց հիմա",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png",
    bgColor: "#dadada",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  slide2: {
    title: "Հիփոթեքային վարկեր Evocabank-ում",
    subtitle: "Ձեռք բեր քո երազանքի բնակարանը՝ ամենահարմար պայմաններով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png",
    bgColor: "#6539aa",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/loans"
  },
  slide3: {
    title: "UnionPay Gold",
    subtitle: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png",
    bgColor: "#000000",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  slide4: {
    title: "Օնլայն ավանդ EvocaTOUCH-ով",
    subtitle: "Դի՛ր ավանդ Evocabank-ում՝ բարձր տոկոսադրույքներով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg",
    bgColor: "#27292b",
    buttonText: "Ծանոթանալ պայմաններին",
    buttonLink: "/deposits"
  },
  slide5: {
    title: "Evoca Travel Card",
    subtitle: "Այս քարտն իր առավելություններով կդառնա քո ճամփորդական ընկերը",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png",
    bgColor: "#000000",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  slide6: {
    title: "Evoca Աշխատավարձային նախագիծ",
    subtitle: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "#E4DFFF",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/salary"
  },
  slide7: {
    title: "Կարճ հեռախոսահամար՝ 8444",
    subtitle: "Բարի գալուստ, Evocabank: Մենք սպասում ենք ձեր զանգին...",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png",
    bgColor: "#b6a44f",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/touch"
  },
  slide8: {
    title: "Visa Vision",
    subtitle: "Ձեռք բեր Visa Vision քարտն քո նախընտրած գույնով ու ոճով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "#FFDCFB",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  }
};

export default function HeroSlider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slidesRef = ref(database, 'slides');

    get(slidesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const slidesArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setSlides(slidesArray);
          setLoading(false);
        } else {
          set(slidesRef, initialSlidesData).then(() => {
            const slidesArray = Object.keys(initialSlidesData).map((key) => ({
              id: key,
              ...initialSlidesData[key],
            }));
            setSlides(slidesArray);
            setLoading(false);
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ width: '100%', height: '650px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>Բեռնվում է...</div>;
  if (slides.length === 0) return null;

  return (
    <div style={{ width: '100%', backgroundColor: '#fff', paddingTop: '8px', paddingBottom: '40px', overflow: 'hidden' }}>
      <div style={{ width: '100%' }}>
        <div style={{ position: 'relative', width: '100%', borderBottomLeftRadius: '200px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect={'fade'}
            speed={800}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            navigation={{
              prevEl: '.swiper-custom-prev',
              nextEl: '.swiper-custom-next',
            }}
            loop={true}
            style={{ width: '100%', height: '650px' }}
          >
            {slides.map((slide) => {
              const lightBackgrounds = ["#dadada", "#E4DFFF", "#b6a44f", "#FFDCFB"];
              const isLightBg = lightBackgrounds.includes(slide.bgColor);
              const textColor = isLightBg ? '#111827' : '#ffffff';
              const subTextColor = isLightBg ? '#374151' : '#d1d5db';

              return (
                <SwiperSlide key={slide.id}>
                  <div 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'flex-end', 
                      position: 'relative', 
                      backgroundColor: slide.bgColor || '#1f1829',
                      color: textColor,
                      fontFamily: "'Poppins', 'Montserrat', sans-serif"
                    }}
                  >
                    {/* Ձախ մաս՝ բացարձակ տեղադրված հենց ձախ եզրին */}
                    <div 
                      style={{ 
                        position: 'absolute', 
                        left: '60px', 
                        maxWidth: '550px', 
                        zIndex: 10, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'flex-start', 
                        gap: '20px', 
                        textAlign: 'left' 
                      }}
                    >
                      <h2 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: '1.1', margin: 0 }}>
                        {slide.title}
                      </h2>
                      <p style={{ fontSize: '18px', lineHeight: '1.6', color: subTextColor, margin: 0 }}>
                        {slide.subtitle}
                      </p>
                      {slide.buttonText && (
                        <a
                          href={slide.buttonLink || '#'}
                          style={{
                            display: 'inline-block',
                            backgroundColor: '#6600cc',
                            color: '#ffffff',
                            padding: '14px 32px',
                            borderRadius: '9999px',
                            fontWeight: 800,
                            fontSize: '16px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            transition: 'background-color 0.3s'
                          }}
                        >
                          {slide.buttonText}
                        </a>
                      )}
                    </div>

                    {/* Աջ մաս՝ նկար */}
                    {slide.imageUrl && (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, height: '100%', paddingRight: '60px' }}>
                        <img 
                          src={slide.imageUrl} 
                          alt={slide.title} 
                          style={{ maxHeight: '550px', objectFit: 'contain', mixBlendMode: 'luminosity' }}
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Ներքևի վահանակ՝ սլաքներ և կետեր (մեջտեղում) */}
          <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', alignItems: 'center', gap: '24px', pointerEvents: 'none' }}>
            <button className="swiper-custom-prev" style={{ pointerEvents: 'auto', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
              <ArrowLeft size={24} strokeWidth={2.5} />
            </button>

            <div className="swiper-custom-pagination" style={{ display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'auto' }}></div>

            <button className="swiper-custom-next" style={{ pointerEvents: 'auto', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
              <ArrowRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}