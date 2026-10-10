import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    quote:
      'Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միակ այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին՝ նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:',
    author: 'Սուսաննա Վանյան',
    role: 'Հաճախորդ',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Գերազանց սպասարկում, ընտիր ու հաճելի անձնակազմ: Ազատության մասնաճյուղի Վարչական բաժնից շատ շնորհակալ եմ վարչն ձևակերպելע առանց ավելորդ քայլերից՝ հեշտ, արագ, որակով սպասարկման..',
    author: 'Նունե Գևորգյան',
    role: 'Հաճախորդ',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Դեպի նոր իրականություն, ահա թե ուր ենք մենք շարժվում՝ ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարվա համագործակցելով՝ կարելի է ասել, որ միասին անցել ենք մեծ ճանապարհ..',
    author: 'Արամ Ադարյան',
    role: 'Indigo Branding-ի հիմնադիր',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'Լավագույն նորարարական և թվային բանկ՝ լավագույն ծառայություններով և անձնակազմով։',
    author: 'Էլեն Վարդանյան',
    role: 'Հաճախորդ',
    rating: 5,
  },
  {
    id: 5,
    quote:
      'Բանկ, որ իր ոճավորված շքեղ միջոցառմամբ ու աշխատանքային ճկունով բանկային ոլորտում ահրավանեց որակ և ճաշակ թելադրեց։ Evocabank-ը առաջին իսկ վարկայինից ստեղծեց նորույթ և ժամանակակից։',
    author: 'Կամո Թովմասյան',
    role: 'KAMOBLOG մեդիա հարթակի հիմնադիր, influencer',
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative px-6 sm:px-12">
        
        {/* Left Decorative Hand and Zigzag Line */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 hidden lg:flex flex-col items-center">
          <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm mb-3 p-2 animate-bounce duration-1000">
            <img 
              src="https://www.evoca.am/img/reviews/hand1.png" 
              alt="Hand 1" 
              className="w-full h-full object-contain"
            />
          </div>
          <img 
            src="https://www.evoca.am/img/reviews/z-violet.png" 
            alt="Violet line" 
            className="w-10 h-auto mt-1"
          />
        </div>

        {/* Right Decorative Hand and Zigzag Line */}
        <div className="absolute right-0 top-1/3 -translate-y-1/2 hidden lg:flex flex-col items-center">
          <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm mb-3 p-2 animate-bounce duration-1000">
            <img 
              src="https://www.evoca.am/img/reviews/hand2.png" 
              alt="Hand 2" 
              className="w-full h-full object-contain"
            />
          </div>
          <img 
            src="https://www.evoca.am/img/reviews/z-purple.png" 
            alt="Purple line" 
            className="w-10 h-auto mt-1"
          />
        </div>

        {/* Main Content Box */}
        <div className="text-center mx-auto max-w-2xl">
          {/* Stars */}
          <div className="flex justify-center space-x-1.5 mb-6 text-amber-400 text-2xl sm:text-3xl">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Quote Text */}
          <div className="relative mb-8 min-h-[100px] flex items-center justify-center">
            <span className="absolute -top-4 -left-4 text-purple-600 text-4xl font-serif select-none">“</span>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed px-4">
              {currentTestimonial.quote}
            </p>
            <span className="absolute -bottom-6 -right-4 text-purple-600 text-4xl font-serif select-none">”</span>
          </div>

          {/* Author info */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-900 text-base">
              {currentTestimonial.author}
            </h4>
            <span className="text-xs text-gray-400 font-medium">
              {currentTestimonial.role}
            </span>
          </div>

          {/* Dots Navigation (Լրիվ կլոր կետեր) */}
          <div className="flex justify-center items-center space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full w-3 h-3 ${
                  currentIndex === index
                    ? 'bg-purple-900 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}