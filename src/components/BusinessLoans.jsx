import React from 'react';
import { Link } from 'react-router-dom';


export default function BusinessLoans() {
  const loansList = [
    {
      id: 1,
      title: "Արագ բիզնես վարկ/վարկային գիծ",
      description: "Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով։",
      image: "https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png",
      stats: [
        { label: "Ժամկետ", value: "մինչև 60 ամիս" },
        { label: "Սահմանաչափ", value: "մինչև 30 մլն ֏" },
        { label: "Տարեկան տոկոսադրույք", value: "9.22%-17.89%" }
      ]
    },
    {
      id: 2,
      title: "Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ",
      description: "Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար։ Շտապեք դիմել, զարգացնել Ձեր բիզնեսը և դառնալ ոլորտում մրցունակ։",
      image: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png",
      stats: [
        { label: "Ժամկետ", value: "մինչև 36 ամիս" },
        { label: "Սահմանաչափ", value: "մինչև 500 մլն ֏" },
        { label: "Տոկոսադրույքի սուբսիդավորում", value: "8%" }
      ]
    },
    {
      id: 3,
      title: "Բիզնես վարկերի վերաֆինանսավորում",
      description: "Տեղափոխեք Ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և լրացուցիչ ֆինանսավորում՝ ավելի հարմար պայմաններով։",
      image: "https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png",
      stats: [
        { label: "Ժամկետ", value: "36-120 ամիս" },
        { label: "Գումար", value: "15մլն - 500մլն ֏" },
        { label: "Տոկոսադրույք", value: "ՀՀ դրամ՝ 12% | ԱՄՆ դոլար՝ 9%" }
      ]
    },
    {
      id: 4,
      title: "Պարտատոմսերով ապահովված վարկ",
      description: "Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը։",
      image: "https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png",
      stats: []
    },
    {
      id: 5,
      title: "Խոշոր և ՓՄՁ բիզնես վարկ",
      description: "Զարգացրե'ք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:",
      image: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg",
      stats: [
        { label: "Սահմանաչափ", value: "մինչև 4 մլրդ ֏" },
        { label: "Ժամկետ", value: "մինչև 180 ամիս" },
        { label: "Տոկոսադրույք", value: "սկսած 8.2%-ից" }
      ]
    },
    {
      id: 6,
      title: "Evoca GO",
      description: "Օգտվեք Եվրոպական Ներդրումային Բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:",
      image: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg",
      stats: [
        { label: "Սահմանաչափ", value: "մինչև 500 մլն ֏" },
        { label: "Մարման ժամկետ", value: "մինչև 90 ամիս" },
        { label: "Տոկոսադրույք", value: "10.5%" },
        { label: "Արտոնյալ ժամկետ", value: "մինչև 30 ամիս" }
      ]
    },
    {
      id: 7,
      title: "Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
      description: "Եթե Դուք ցանկանում եք ձեռք բերել ԷԱ սարքավորումներ և մեքենաներ կամ իրականացնել այլ Էներգաարդյունավետ ներդրումներ, այս վարկատեսակը Ձեզ համար է:",
      image: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg",
      stats: [
        { label: "Սահմանաչափ", value: "մինչև 500 մլն ֏" },
        { label: "Մարման ժամկետ", value: "մինչև 5 տարի" },
        { label: "Տոկոսադրույք", value: "սկսած 9%-ից" }
      ]
    },
    {
      id: 8,
      title: "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
      description: "Մի՛ օգտագործեք կուտակված խնայողությունները․ Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք։",
      image: "https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg",
      stats: [
        { label: "Ավանդի գումարի", value: "մինչև 95%" },
        { label: "Պարտատոմսի գումարի", value: "մինչև 80%" }
      ]
    },
    {
      id: 9,
      title: "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
      description: "Եթե ցանկանում եք իրականացնել Էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը Ձեզ համար է:",
      image: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg",
      stats: [
        { label: "Առանց գրավի", value: "մինչև 10 մլն ֏" },
        { label: "Տարեկան տոկոսադրույք", value: "9.5% - 10.25%" },
        { label: "Մարման ժամկետ", value: "մինչև 120 ամիս" }
      ]
    },
    {
      id: 10,
      title: "Պարզ բիզնես վարկ",
      description: "Ստացեք Պարզ բիզնես վարկ՝ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով: Վարկի տրամադրման վերաբերյալ որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում:",
      image: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg",
      stats: [
        { label: "Սահմանաչափ", value: "մինչև 50 մլն ֏" },
        { label: "Մարման ժամկետ", value: "մինչև 60 ամիս" },
        { label: "Տոկոսադրույք", value: "սկսած 7.5%-ից" }
      ]
    },
    {
      id: 11,
      title: "Հաշվի վարկավորում",
      description: "Հանդիսանո՞ւմ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:",
      image: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg",
      stats: [
        { label: "Սահմանաչափ", value: "առավելագույնը 500 մլն ֏" },
        { label: "Մարման ժամկետ", value: "առավելագույնը 12 ամիս" },
        { label: "Տոկոսադրույք", value: "սկսած 7%-ից" }
      ]
    },
    {
      id: 12,
      title: "Վարկային գիծ",
      description: "Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ, ապա կարող եք օգտվել Evocabank-ի վերականգնվող և չվերականգնվող վարկային գծերից:",
      image: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg",
      stats: [
        { label: "Սահմանաչափ", value: "մինչև 1.5 մլրդ ֏" },
        { label: "Մարման ժամկետ", value: "մինչև 5 տարի" },
        { label: "Տոկոսադրույք", value: "սկսած 6%-ից" }
      ]
    },
    {
      id: 13,
      title: "Արտադրողականության խթանման ծրագրի ներքո վարկ",
      description: "Մատչելի ֆինանսավորում Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով (գործում է մինչև 31.12.2026թ.):",
      image: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg",
      stats: [
        { label: "Սահմանաչափ", value: "մինչև 1 մլրդ ֏" },
        { label: "Մարման ժամկետ", value: "մինչև 120 ամիս" },
        { label: "Տոկոսադրույք", value: "սկսած 6%" },
        { label: "Սուբսիդավորում", value: "մինչև 6%" }
      ]
    },
    {
      id: 14,
      title: "KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում",
      description: "Կատարե'ք Ձեր կապիտալ ներդրումները և իրականացրե'ք բիզնես գործունեության նպատակները Evocabank-ի հետ:",
      image: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png",
      stats: [
        { label: "Սահմանաչափ", value: "մինչև 160 մլն ֏" },
        { label: "Մարման ժամկետ", value: "մինչև 60 ամիս" },
        { label: "Տոկոսադրույք", value: "սկսած 9.5%-ից" }
      ]
    }
  ];

  return (
    
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Վերևի Մանուշակագույն Ենթամենյու */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <Link to="/business-loans" className="pb-1 border-b-2 border-white font-bold">
            Բիզնես վարկեր
          </Link>
        </div>
      </div>
    
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6">
          Բիզնես <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Բիզնես վարկեր</span>
        </div>

        {/* Էջի վերնագիր */}
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-12">
          Բիզնես վարկեր
        </h1>

        {/* Վարկերի ցուցակ (Առանց սպիտակ ֆոնի ու ավելի մեծ չափսերով) */}
        <div className="space-y-12">
          {loansList.map((loan) => (
            <div 
              key={loan.id} 
              className="py-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-100 last:border-0"
            >
              {/* Ձախ կողմ՝ Նկար (Մեծացված) */}
              <div className="w-full md:w-5/12 mb-6 md:mb-0 md:pr-10 flex justify-center">
                <img 
                  src={loan.image} 
                  alt={loan.title} 
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>

              {/* Աջ կողմ՝ Տեքստեր և տվյալներ (Մեծացված) */}
              <div className="w-full md:w-7/12 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 leading-snug">
                    {loan.title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                    {loan.description}
                  </p>

                  {/* Վիճակագրություն / Պայմաններ */}
                  {loan.stats.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 pt-4">
                      {loan.stats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-2xl sm:text-3xl font-black text-[#6400dc]">
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Մանրամասն կոճակ */}
                <div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-base font-bold text-[#6400dc] hover:underline"
                  >
                    Մանրամասն <span className="ml-1 text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}