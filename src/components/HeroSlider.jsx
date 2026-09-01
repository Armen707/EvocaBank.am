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

  if (loading) return <div className="w-full h-[550px] flex items-center justify-center bg-white">Բեռնվում է...</div>;
  if (slides.length === 0) return null;

  return (
    <div className="w-full bg-white pt-2 pb-10 overflow-hidden">
      <div className="w-full">
        <div className="relative w-full rounded-bl-[45px] overflow-hidden shadow-lg">
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
            className="w-full h-[550px]"
          >
            {slides.map((slide) => {
              const lightBackgrounds = ["#dadada", "#E4DFFF", "#b6a44f", "#FFDCFB"];
              const isLightBg = lightBackgrounds.includes(slide.bgColor);
              const textColor = isLightBg ? 'text-gray-900' : 'text-white';
              const subTextColor = isLightBg ? 'text-gray-700' : 'text-gray-300';

              return (
                <SwiperSlide key={slide.id}>
                  <div 
                    className={`w-full h-full flex items-center justify-between px-10 md:px-24 lg:px-32 relative transition-colors duration-500 ${textColor}`}
                    style={{ backgroundColor: slide.bgColor || '#1f1829' }}
                  >
                    {/* Ձախ մաս՝ տեքստ և կոճակ */}
                    <div className="max-w-xl z-10 flex flex-col items-start gap-6">
                      <h2 className="text-4xl md:text-[52px] font-black tracking-tighter leading-[1.1]">
                        {slide.title}
                      </h2>
                      <p className={`text-lg md:text-xl leading-relaxed ${subTextColor}`}>
                        {slide.subtitle}
                      </p>
                      {slide.buttonText && (
                        <a
                          href={slide.buttonLink || '#'}
                          className="inline-block bg-[#6600cc] hover:bg-[#5500aa] text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-md transition duration-300"
                        >
                          {slide.buttonText}
                        </a>
                      )}
                    </div>

                    {/* Աջ մաս՝ նկար, որտեղ հեռացված է ներքին ֆոնային շրջանակի տարբերությունը */}
                    {slide.imageUrl && (
                      <div className="hidden md:flex items-center justify-center z-10 max-w-[50%] h-full">
                        <img 
                          src={slide.imageUrl} 
                          alt={slide.title} 
                          className="max-h-[500px] lg:max-h-[550px] object-contain"
                          style={{ mixBlendMode: 'luminosity' }} // Միաձուլում է նկարի ֆոնը սլայդի գույնին
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Ներքևի վահանակ՝ սլաքներ և կետեր */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-6 pointer-events-none">
            <button className="swiper-custom-prev pointer-events-auto text-gray-500 hover:text-gray-900 transition cursor-pointer p-2">
              <ArrowLeft size={24} strokeWidth={2.5} />
            </button>

            <div className="swiper-custom-pagination flex items-center gap-2 pointer-events-auto"></div>

            <button className="swiper-custom-next pointer-events-auto text-gray-500 hover:text-gray-900 transition cursor-pointer p-2">
              <ArrowRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}