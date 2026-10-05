import React, { useRef, useEffect, useState } from 'react';

const originalPartners = [
  { id: 1, name: 'Partner 1', url: 'https://www.evoca.am/images-cache/partners/1/16104604109064/185x80_grayscale.png' },
  { id: 2, name: 'Partner 2', url: 'https://www.evoca.am/images-cache/partners/1/16104604382658/185x80_grayscale.png' },
  { id: 3, name: 'Partner 3', url: 'https://www.evoca.am/images-cache/partners/1/17104032198171/185x80_grayscale.png' },
  { id: 4, name: 'Partner 4', url: 'https://www.evoca.am/images-cache/partners/1/17077436606929/185x80_grayscale.png' },
  { id: 5, name: 'Partner 5', url: 'https://www.evoca.am/images-cache/partners/1/17107493820339/185x80_grayscale.png' },
  { id: 6, name: 'Partner 6', url: 'https://www.evoca.am/images-cache/partners/1/17072192942611/185x80_grayscale.png' },
  { id: 7, name: 'Partner 7', url: 'https://www.evoca.am/images-cache/partners/1/17072192635138/185x80_grayscale.png' },
  { id: 8, name: 'Partner 8', url: 'https://www.evoca.am/images-cache/partners/1/17072192435541/185x80_grayscale.png' },
  { id: 9, name: 'Partner 9', url: 'https://www.evoca.am/images-cache/partners/1/16104577054001/185x80_grayscale.png' },
  { id: 10, name: 'Partner 10', url: 'https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png' },
  { id: 11, name: 'Partner 11', url: 'https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png' },
  { id: 12, name: 'Partner 12', url: 'https://www.evoca.am/images-cache/partners/1/16104594273635/185x80_grayscale.png' },
  { id: 13, name: 'Partner 13', url: 'https://www.evoca.am/images-cache/partners/1/1610459808737/185x80_grayscale.png' },
  { id: 14, name: 'Partner 14', url: 'https://www.evoca.am/images-cache/partners/1/16104599802947/185x80_grayscale.png' },
  { id: 15, name: 'Partner 15', url: 'https://www.evoca.am/images-cache/partners/1/16104603665095/185x80_grayscale.png' },
];

const partners = [...originalPartners, ...originalPartners, ...originalPartners];

export default function EvocaPartners() {
  const sliderRef = useRef(null);
  const [showAllModal, setShowAllModal] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  const handleScrollCheck = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      const singleSetWidth = scrollWidth / 3;

      if (scrollLeft <= 50) {
        sliderRef.current.scrollLeft = scrollLeft + singleSetWidth;
      } else if (scrollLeft >= singleSetWidth * 2 - 50) {
        sliderRef.current.scrollLeft = scrollLeft - singleSetWidth;
      }
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  const handleShowAllPartners = () => {
    setShowAllModal(true);
  };

  return (
    <section className="bg-white py-28 overflow-hidden relative">
      {/* Ծնողական կոնտեյներ սահմանափակված լայնությամբ և ձախից պահպանված հեռավորությամբ */}
      <div className="max-w-[90rem] mx-auto pl-6 lg:pl-16 pr-0 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        
        {/* Ձախ մաս՝ Վերնագիր, նկարագրություն և կոճակ */}
        <div className="lg:w-[32%] flex flex-col items-start z-10 pr-6 lg:pr-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Գործընկերներ
          </h2>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
            Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:
          </p>
          <button 
            type="button"
            onClick={handleShowAllPartners}
            className="px-6 py-3 rounded-full bg-purple-50 border border-purple-200 text-[#7B2CBF] text-sm font-semibold hover:bg-purple-100 transition flex items-center gap-2 cursor-pointer z-30"
          >
            Բոլոր գործընկերները &gt;
          </button>
        </div>

        {/* Աջ մաս՝ Սլայդեր, որը բացասական margin-ի միջոցով առանց w-full-ի հասնում և կպնում է էկրանի աջ պատին */}
        <div className="lg:w-[65%] relative flex items-center z-20 mr-[calc(-50vw+50%)] pr-4">
          
          {/* Դեղին կետերը (շրջանագծերը) */}
          <div className="absolute left-20 top-[100px] z-0 pointer-events-none flex items-center justify-center">
            <div className="w-[381px] h-[381px] rounded-full border-[3px] border-dashed border-yellow-400/90 animate-spin absolute" style={{ animationDuration: '45s' }}></div>
            <div className="w-[315px] h-[315px] rounded-full border-[3px] border-dashed border-yellow-400/75 animate-spin absolute" style={{ animationDuration: '36s', animationDirection: 'reverse' }}></div>
            <div className="w-[250px] h-[250px] rounded-full border-[3px] border-dashed border-yellow-400/60 animate-spin absolute" style={{ animationDuration: '28s' }}></div>
            <div className="w-[185px] h-[185px] rounded-full border-[3px] border-dashed border-yellow-400/40 animate-spin absolute" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
            <div className="w-[120px] h-[120px] rounded-full border-[3px] border-dashed border-yellow-400/25 animate-spin absolute" style={{ animationDuration: '14s' }}></div>
          </div>

          {/* Ձեռքի նկարը */}
          <div className="absolute -left-5 -top-22 z-35 pointer-events-none">
            <img 
              src="https://www.evoca.am/img/hand.png" 
              alt="Hand rock icon" 
              style={{ width: '138px', height: '328px' }}
              className="object-contain drop-shadow-2xl" 
            />
          </div>

          {/* Ձախ սլաք */}
          <button 
            type="button"
            onClick={scrollLeft}
            className="absolute -left-12 z-40 text-[#7B2CBF] hover:scale-125 transition p-3 font-bold text-2xl cursor-pointer"
          >
            &lt;
          </button>

          {/* Սլայդերի հիմնական կոնտեյներ (ձախից կլորացված, աջից կպած պատին) */}
          <div className="w-full bg-[#f8f7fb] rounded-l-[2rem] rounded-r-none relative overflow-hidden shadow-sm flex items-center py-10 pl-8 pr-16 z-30">
            
            <div 
              ref={sliderRef}
              onScroll={handleScrollCheck}
              className="flex items-center overflow-x-auto scrollbar-hide scroll-smooth w-full gap-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  onClick={handleShowAllPartners}
                  className="flex-shrink-0 flex items-center justify-center p-6 h-32 w-[240px] border-r border-gray-200/70 last:border-r-0 cursor-pointer hover:bg-purple-100/40 transition rounded-xl"
                >
                  <img 
                    src={partner.url} 
                    alt={partner.name} 
                    className="max-h-14 max-w-[160px] object-contain filter grayscale hover:grayscale-0 transition duration-300 pointer-events-none" 
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Աջ սլաք */}
          <button 
            type="button"
            onClick={scrollRight}
            className="absolute right-10 z-40 text-[#7B2CBF] hover:scale-125 transition p-3 font-bold text-2xl cursor-pointer"
          >
            &gt;
          </button>

        </div>

      </div>

      {/* Մոդալ պատուհան (Բոլոր գործընկերների ցանկը) */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8 shadow-2xl relative">
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Բոլոր գործընկերները</h3>
              <button 
                onClick={() => setShowAllModal(false)}
                className="text-gray-500 hover:text-black text-xl font-bold p-2 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {originalPartners.map((partner) => (
                <div key={partner.id} className="flex items-center justify-center p-4 border border-gray-100 rounded-2xl shadow-sm bg-gray-50 h-28">
                  <img src={partner.url} alt={partner.name} className="max-h-12 max-w-[120px] object-contain" />
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}