import React, { useState } from 'react';

const cardsData = [
  {
    id: 1,
    category: 'premium',
    title: "Evoca Travel Card",
    desc: "Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը։",
    features: [
      { label: "1.5%", sub: "Cashback արտասահմանում" },
      { label: "6 մուտք", sub: "Lounge Key սրահներ անվճար" },
      { label: "6 անգամ", sub: "Fast track անվճար" },
    ],
    price: "16․000֏",
    image: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg"
  },
  {
    id: 2,
    category: 'premium',
    title: "Evoca Visa Platinum",
    desc: "Պրեմիում առավելություններ պրեմիում քարտով։",
    features: [
      { label: "30.000 ֏", sub: "Սպասարկման վճար" },
      { label: "6 մուտք", sub: "Օդանավակայանների բիզնես սրահներ անվճար" }
    ],
    price: "30.000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png"
  },
  {
    id: 3,
    category: 'visa',
    title: "Wilco Visa Infinite",
    desc: "Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ։",
    features: [],
    image: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png"
  },
  {
    id: 4,
    category: 'gift',
    title: "Evoca Gift Card",
    desc: "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:",
    features: [],
    image: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png"
  },
  {
    id: 5,
    category: 'gift',
    title: "Digital Gift Card",
    desc: "Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ կհավանի՞, թե՞ ոչ։ Մենք առաջարկում ենք իդեալական նվերի տարբերակ։",
    features: [],
    image: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png"
  },
  {
    id: 6,
    category: 'visa',
    title: "Visa Infinite",
    desc: "Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է։",
    features: [
      { label: "1%", sub: "Կանխիկացում բանկի կետերում" },
      { label: "1.2%", sub: "Կանխիկացում ԱրՔա անդամ բանկերում" },
      { label: "1.5%", sub: "Կանխիկացում այլ բանկերում" }
    ],
    price: "100,000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png"
  },
  {
    id: 7,
    category: 'visa',
    title: "Visa Vision",
    desc: "Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:",
    features: [],
    image: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png"
  },
  {
    id: 8,
    category: 'mastercard',
    title: "Mastercard World Digital",
    desc: "Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում։",
    features: [
      { label: "2%", sub: "Կանխիկացում բանկի բանկոմատներից" },
      { label: "2.5%", sub: "Կանխիկացում ԱրՔա համակարգում" },
      { label: "1000 ֏", sub: "Տարեկան սպասարկում" }
    ],
    image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png"
  },
  {
    id: 9,
    category: 'unionpay',
    title: "UnionPay Business Platinum",
    desc: "Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:",
    features: [
      { label: "0.5%", sub: "Կանխիկացում" },
      { label: "5 տարի", sub: "Քարտի ժամկետ" },
      { label: "15000 ֏", sub: "Տարեկան սպասարկում" }
    ],
    price: "15000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png"
  },
  {
    id: 10,
    category: 'gift',
    title: "MyLer Gift Card",
    desc: "Մեկ քարտ, անսահմանափակ արկածներ:",
    features: [],
    image: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png"
  },
  {
    id: 11,
    category: 'unionpay',
    title: "UnionPay Gold",
    desc: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:",
    features: [
      { label: "0.5%", sub: "Կանխիկացում" },
      { label: "5 տարի", sub: "Քարտի ժամկետ" },
      { label: "15000 ֏", sub: "Տարեկան սպասարկում" }
    ],
    price: "15000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png"
  },
  {
    id: 12,
    category: 'gift',
    title: "4U.am Gift card",
    desc: "Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր։",
    features: [],
    image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png"
  },
  {
    id: 13,
    category: 'mastercard',
    title: "Mastercard Gold",
    desc: "Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով։",
    features: [
      { label: "0%", sub: "Կանխիկացում մինչև 2 մլն ֏" },
      { label: "0.8%", sub: "Կանխիկացում ԱրՔա անդամ բանկերում" },
      { label: "1%", sub: "Կանխիկացում այլ բանկերում" }
    ],
    price: "15․000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png"
  },
  {
    id: 14,
    category: 'mastercard',
    title: "Mastercard Standard",
    desc: "Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն։",
    features: [
      { label: "0%", sub: "Կանխիկացում մինչև 1 մլն ֏" },
      { label: "0.8%", sub: "Կանխիկացում ԱրՔա անդամ բանկերում" },
      { label: "1%", sub: "Կանխիկացում այլ բանկերում" }
    ],
    price: "5000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png"
  },
  {
    id: 15,
    category: 'visa',
    title: "Visa Digital",
    desc: "Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:",
    features: [
      { label: "2%", sub: "Կանխիկացում բանկի բանկոմատներից" },
      { label: "մինչև 4%", sub: "Մնացորդի տարեկան տոկոսադրույք" },
      { label: "մինչև 0.5%", sub: "Քեշբեք" }
    ],
    price: "1000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png"
  },
  {
    id: 16,
    category: 'visa',
    title: "Visa Classic",
    desc: "Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:",
    features: [
      { label: "0.2%", sub: "Կանխիկացում բանկի կետերում" },
      { label: "0.8%", sub: "Կանխիկացում ԱրՔա անդամ բանկերում" },
      { label: "1%", sub: "Կանխիկացում այլ բանկերում" }
    ],
    price: "5,000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png"
  },
  {
    id: 17,
    category: 'arca',
    title: "Arca Classic",
    desc: "Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի։",
    features: [
      { label: "0.5%", sub: "Կանխիկացում մինչև 300,000 ֏" },
      { label: "1%", sub: "Կանխիկացում ԱրՔա համակարգում" }
    ],
    price: "1500 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png"
  },
  {
    id: 18,
    category: 'arca',
    title: "Arca-UnionPay",
    desc: "Մեկ քարտ, բազմաթիվ հնարավորություններ. Arca՝ ամենօրյա գնումների և UnionPay՝ միջազգային գնումների համար։",
    features: [
      { label: "2%", sub: "Cashback տեղական գործարքներից" },
      { label: "Մինչև 1M ֏", sub: "Անվճար կանխիկացում Բանկի ATM-ով" }
    ],
    price: "2,500֏",
    image: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png"
  },
  {
    id: 19,
    category: 'visa',
    title: "Visa Business",
    desc: "Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով։",
    features: [
      { label: "0.2%", sub: "Կանխիկացում բանկի կետերում" },
      { label: "0.8%", sub: "Կանխիկացում ԱրՔա անդամ բանկերում" },
      { label: "1%", sub: "Կանխիկացում այլ բանկերում" }
    ],
    image: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png"
  },
  {
    id: 20,
    category: 'visa',
    title: "Visa Gold",
    desc: "Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից",
    features: [
      { label: "0.2%", sub: "Կանխիկացում բանկի կետերում" },
      { label: "0.8%", sub: "Կանխիկացում ԱրՔա անդամ բանկերում" },
      { label: "1%", sub: "Կանխիկացում այլ բանկերում" }
    ],
    price: "15,000 ֏",
    image: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png"
  },
  // Վերջին 2 քարտերը (կհայտնվեն միայն 2-րդ էջում)
  {
    id: 21,
    category: 'gift',
    title: "Dalma Gift Card",
    desc: "Նվեր ընտրելն այլևս դժվար չէ:",
    features: [],
    image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png"
  },
  {
    id: 22,
    category: 'gift',
    title: "Rio Gift Card",
    desc: "Ամեն ինչ մեկ նվեր քարտում:",
    features: [],
    image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png"
  }
];

export default function EvocaCardsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Ֆիլտրում ըստ կատեգորիայի
  const filteredCards = activeFilter === 'all' 
    ? cardsData 
    : cardsData.filter(card => card.category === activeFilter);

  // Բաժանում էջերի (Pagination)
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = filteredCards.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white min-h-screen text-gray-800" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Top Header Nav */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <span className="border-b-2 border-white pb-1 cursor-pointer">Քարտեր</span>
          <span className="opacity-80 hover:opacity-100 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
          <span className="opacity-80 hover:opacity-100 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
          <span className="opacity-80 hover:opacity-100 cursor-pointer">Evoca Benefits</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="text-sm text-gray-400 mb-2">
          Անհատ <span className="mx-1">&gt;</span> Քարտեր <span className="mx-1">&gt;</span> <span className="text-gray-600 font-semibold">Քարտեր</span>
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 mb-6">Քարտեր</h1>

        {/* Filter Buttons & System Icons Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-gray-100">
          <button 
            onClick={() => { setActiveFilter('all'); setCurrentPage(1); }}
            className="px-6 py-2.5 rounded-full text-base font-semibold transition shadow-md"
            style={{ backgroundColor: activeFilter === 'all' ? '#6400dc' : '#f3f4f6', color: activeFilter === 'all' ? '#ffffff' : '#374151' }}
          >
            Բոլորը
          </button>
          <button 
            onClick={() => { setActiveFilter('premium'); setCurrentPage(1); }}
            className="px-6 py-2.5 rounded-full text-base font-semibold transition shadow-md"
            style={{ backgroundColor: activeFilter === 'premium' ? '#6400dc' : '#f3f4f6', color: activeFilter === 'premium' ? '#ffffff' : '#374151' }}
          >
            Պրեմիում
          </button>
          <button 
            onClick={() => { setActiveFilter('gift'); setCurrentPage(1); }}
            className="px-6 py-2.5 rounded-full text-base font-semibold transition shadow-md"
            style={{ backgroundColor: activeFilter === 'gift' ? '#6400dc' : '#f3f4f6', color: activeFilter === 'gift' ? '#ffffff' : '#374151' }}
          >
            Նվեր քարտեր
          </button>

          {/* Payment System Image Icons Filter */}
          <div className="flex items-center space-x-2 ml-2">
            <button 
              onClick={() => { setActiveFilter('arca'); setCurrentPage(1); }}
              className="p-2.5 rounded-xl bg-gray-50 border transition hover:bg-gray-100"
              style={{ borderColor: activeFilter === 'arca' ? '#6400dc' : '#e5e7eb' }}
            >
              <img src="https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png" alt="ArCa" className="h-6 object-contain" />
            </button>
            <button 
              onClick={() => { setActiveFilter('visa'); setCurrentPage(1); }}
              className="p-2.5 rounded-xl bg-gray-50 border transition hover:bg-gray-100"
              style={{ borderColor: activeFilter === 'visa' ? '#6400dc' : '#e5e7eb' }}
            >
              <img src="https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png" alt="Visa" className="h-6 object-contain" />
            </button>
            <button 
              onClick={() => { setActiveFilter('mastercard'); setCurrentPage(1); }}
              className="p-2.5 rounded-xl bg-gray-50 border transition hover:bg-gray-100"
              style={{ borderColor: activeFilter === 'mastercard' ? '#6400dc' : '#e5e7eb' }}
            >
              <img src="https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png" alt="Mastercard" className="h-6 object-contain" />
            </button>
            <button 
              onClick={() => { setActiveFilter('unionpay'); setCurrentPage(1); }}
              className="p-2.5 rounded-xl bg-gray-50 border transition hover:bg-gray-100"
              style={{ borderColor: activeFilter === 'unionpay' ? '#6400dc' : '#e5e7eb' }}
            >
              <img src="https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png" alt="UnionPay" className="h-6 object-contain" />
            </button>
          </div>
        </div>

        {/* Vertical Cards Stack */}
        <div className="space-y-6 mb-12">
          {currentCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              {/* Left: Card Image */}
              <div className="w-full md:w-[420px] flex-shrink-0 flex items-center justify-center p-2 bg-transparent">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-auto max-h-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
                />
              </div>

              {/* Middle: Title, Description & Features */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">{card.desc}</p>

                {card.features && card.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    {card.features.map((feat, idx) => (
                      <div key={idx}>
                        <div className="text-xl font-bold" style={{ color: '#6400dc' }}>{feat.label}</div>
                        <div className="text-sm text-gray-500 mt-1">{feat.sub}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Price & Details Button */}
              <div className="w-full md:w-auto flex flex-col items-end justify-between self-stretch border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-10">
                {card.price ? (
                  <div className="text-right mb-8">
                    <div className="text-3xl font-black" style={{ color: '#6400dc' }}>{card.price}</div>
                    <div className="text-sm text-gray-400 mt-1">Քարտի տարեկան սպասարկում</div>
                  </div>
                ) : <div className="mb-8" />}

                <button 
                  className="w-full md:w-auto px-8 py-3.5 rounded-2xl font-semibold text-base transition-colors duration-200 flex items-center justify-center space-x-2 shadow-sm"
                  style={{ backgroundColor: '#f3eeff', color: '#6400dc' }}
                >
                  <span>Մանրամասն</span>
                  <span>&gt;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Էջավորում) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-6 py-6 border-t border-gray-100">
            {/* Ձախ սլաք */}
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`text-2xl transition ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-[#6400dc]'}`}
            >
              &larr;
            </button>

            {/* Էջերի համարներ */}
            <div className="flex items-center space-x-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-bold text-base transition flex items-center justify-center shadow-sm ${
                    currentPage === page 
                      ? 'text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  style={{ backgroundColor: currentPage === page ? '#6400dc' : undefined }}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Աջ սլաք */}
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`text-2xl transition ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-[#6400dc] hover:opacity-80'}`}
            >
              &rarr;
            </button>
          </div>
        )}

      </div>
    </div>
  );
}