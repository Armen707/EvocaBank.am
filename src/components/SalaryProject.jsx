import React, { useState } from 'react';

export default function SalaryProject() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:",
      answer: "Evoca աշխատավարձային նախագծին կարող է միանալ ցանկացած ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը Evocabank-ի քարտով ստանալուց բացի նաև ստանալ լրացուցիչ առավելություններ."
    },
    {
      question: "Կարո՞ղ եմ աշխատավարձս նոր գործատուից ունենալու դեպքում:",
      answer: "Այո, կարող եք աշխատավարձս նոր գործատուից ունենալու դեպքում."
    },
    {
      question: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:",
      answer: "Բնականաբար, եթե դեռ Evoca-ի հաճախորդ չես, կարող ես դիմել և դառնալ նրա հաճախորդը:"
    },
    {
      question: "Ե՞րբ կսկսեմ օգտվել արտոնություններից:",
      answer: "Արտոնություններից կարող ես օգտվել այն պահին, երբ առաջին աշխատավարձային փոխանցումը կատարվի Evocabank-ի քարտին:"
    },
    {
      question: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:",
      answer: "Այո, կարող ես ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում."
    },
    {
      question: "Ինչպե՞ս կարող եմ միանալ աշխատավարձային նախագծին:",
      answer: "Աշխատավարձային նախագծին միանալու համար կարող եք զանգահարել +37410605555 կամ այցելել Evocabank-ի ցանկացած մասնաճյուղ."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Хлебные крошки */}
        <div className="text-sm text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">EvocaSALARY</span>
        </div>

        {/* Главный баннер */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              EVOCA ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՆԱԽԱԳԻԾ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Քո աշխատավարձը կարող է քեզ տալ շատ ավելին։ Պարզապես պետք է ընտրել Evocabank-ը։
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
              alt="Salary Project Banner" 
              className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-sm"
            />
          </div>
        </div>

        {/* Соц. иконки и контент */}
        <div className="flex gap-6 mb-12">
          <div className="hidden sm:flex flex-col space-y-3 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">f</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">in</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">✉</a>
          </div>

          <div className="flex-1 space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ նոր հնարավորություններ ու առավելություններ։
            </p>

            {/* Блок 1: Mastercard Gold */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Բեր աշխատավարձդ Evoca, Տար անվճար Mastercard Gold</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Պրեմիում դասի քարտ</li>
                <li>Հասանելի ամբողջ աշխարհում</li>
                <li>Գումարի անվտանգության բարձր մակարդակ</li>
                <li>Դրական մնացորդի նկատմամբ 2% տարեկան տոկոսադրույք</li>
              </ul>
            </div>

            {/* Блок 2: Evoca Travel Card */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Բեր աշխատավարձդ Evoca, Տար 50% զեղչով Evoca Travel Card</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Մինչև 1.5% cashback արտասահմանում իրականացրած վճարումների համար</li>
                <li>Անվճար 6 մուտք Lounge Key սրահներ քեզ և հյուրերիդ համար</li>
                <li>Անվճար 6 անգամ Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</li>
                <li>Այլ ճամփորդական առավելություններ</li>
              </ul>
            </div>

            {/* Блок 3: Evoca Benefits */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Բեր աշխատավարձդ Evoca Տար մի շարք Բենեֆիթներ</h3>
              <p>Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու Evoca Benefits նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Մինչև 25% զեղչ</li>
                <li>Մինչև 25% cashback</li>
                <li>Նվեր քարտեր</li>
              </ul>
            </div>

            {/* Блок 4: Кредиты */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր</h3>
              
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="font-bold text-gray-800">Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-1">
                    <li>Մինչև աշխատավարձի 15-ապատիկի չափով</li>
                    <li>Մինչև 10 մլն դրամ գումար</li>
                    <li>Մինչև 60 ամիս մարման ժամկետ</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Ավտովարկ</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-1">
                    <li>0.5-ով ցածր տոկոսադրույք</li>
                    <li>Մինչև 50 մլն դրամ գումար</li>
                    <li>Մինչև 84 ամիս մարման ժամկետ</li>
                    <li>Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Անշարժ գույքի գրավով սպառողական վարկ</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-1">
                    <li>0.5-ով ցածր տոկոսադրույք</li>
                    <li>Մինչև 100 մլն դրամ գումար</li>
                    <li>Մինչև 120 ամիս մարման ժամկետ</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Последние новости */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-black text-gray-900">Վերջին նորությունները</h2>
            <a href="#" className="text-sm font-semibold text-[#6400dc] hover:underline">Բոլոր նորությունները →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png" alt="News 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-1">Կենսակերպ</p>
                <p className="font-bold text-gray-800 text-base mb-2">Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր</p>
                <p className="text-xs text-gray-400 font-semibold">08.10.2026</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" alt="News 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-1">Կենսակերպ</p>
                <p className="font-bold text-gray-800 text-base mb-2">Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր</p>
                <p className="text-xs text-gray-400 font-semibold">06.10.2026</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg" alt="News 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-1">Կենսակերպ</p>
                <p className="font-bold text-gray-800 text-base mb-2">Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր</p>
                <p className="text-xs text-gray-400 font-semibold">06.10.2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Часто задаваемые вопросы (FAQ) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">Հաճախ տրվող հարցեր</h2>
        <div className="space-y-4 mb-12">
          {faqList.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
              >
                <span>{faq.question}</span>
                <span className="text-lg" style={{ color: '#6400dc' }}>{openFaq === index ? '▲' : '▼'}</span>
              </button>
              {openFaq === index && (
                <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}