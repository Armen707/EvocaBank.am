import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EvocaInvest() {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const isActive = (path) => location.pathname === path;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ваша заявка успешно отправлена!');
  };

  const faqList = [
    {
      question: "Ի՞նչ է բաժնետոմսը:",
      answer: "Բաժնետոմսը ընկերության սեփականության մասնաբաժինն արտահայտող արժեթուղթ է: Բաժնետոմս գնելով՝ ներդրողը դառնում է տվյալ ընկերության մասնակի սեփականատեր և կարող է շահույթ ստանալ շահաբաժինների (դիվիդենտների) տեսքով կամ գնի աճի հաշվին:"
    },
    {
      question: "Ի՞նչ է պարտատոմսը:",
      answer: "Պարտատոմսը պարտքային արժեթուղթ է, որով թողարկողը պարտավորվում է սահմանված ժամկետում վերադարձնել ներդրված գումարը և վճարել պայմանագրով նախատեսված տոկոսները:"
    },
    {
      question: "Ի՞նչ է ETF-ը:",
      answer: "ETF-ը (Exchange-Traded Fund) բորսայում վաճառվող ֆոնդ է, որը ներառում է տարբեր ակտիվների (բաժնետոմսեր, պարտատոմսեր) զամբյուղ և թույլ է տալիս դիվերսիֆիկացնել ներդրումները մեկ գործիքի միջոցով:"
    },
    {
      question: "Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև:",
      answer: "Բաժնետոմսերը տալիս են ընկերության սեփականության մասնաբաժին և բարձր եկամտաբերության հնարավորություն (բարձր ռիսկով), պարտատոմսերը ավելի կանխատեսելի և կայուն եկամուտ ապահովող պարտքային գործիքներ են, իսկ ETF-ները միանգամից ներդրումային ֆոնդեր են՝ կազմված բազմաթիվ արժեթղթերից:"
    },
    {
      question: "Կարո՞ղ եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու:",
      answer: "Այո, բրոքերային հաշիվ կարող եք բացել ընդամենը մի քանի րոպեում՝ անմիջապես EvocaTOUCH հավելվածից՝ առանց Բանկ այցելելու անհրաժեշտության:"
    },
    {
      question: "Ո՞ր շուկաներին և գործիքներին է EvocaINVEST-ը ապահովում հասանելիություն:",
      answer: "EvocaINVEST-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ բաժնետոմսերի, պարտատոմսերի և ETF-ների միջոցով:"
    },
    {
      question: "Կարո՞ղ եմ միաժամանակ ունենալ տարբեր տեսակի արժեթղթեր:",
      answer: "Այո, դուք կարող եք ստեղծել դիվերսիֆիկացված պորտֆոլիո՝ միաժամանակ ունենալով թե՛ բաժնետոմսեր, թե՛ պարտատոմսեր և ETF-ներ:"
    },
    {
      question: "Ինչպե՞ս գտնել և գնել կոնկրետ արժեթուղթ:",
      answer: "Դուք կարող եք փնտրել ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրել լիմիտային կամ շուկայական պատվեր և հաստատել գործարքը:"
    },
    {
      question: "Ո՞րն է տարբերությունը լիմիտային և շուկայական պատվերների միջև:",
      answer: "Լիմիտային պատվերի դեպքում դուք սահմանում եք հստակ գին, որով ցանկանում եք գնել կամ վաճառել արժեթուղթը, իսկ շուկայական պատվերն իրականացվում է ակնթարթորեն՝ տվյալ պահին շուկայում գործող ընթացիկ գնով:"
    },
    {
      question: "Ի՞նչ է ticker-ը:",
      answer: "Ticker-ը բորսայում ընկերության կամ արժեթղթի կարճ տառային նշանն է (օրինակ՝ AAPL Apple-ի համար), որն օգտագործվում է արագ որոնման համար:"
    },
    {
      question: "Ի՞նչ է դիվիդենտը:",
      answer: "Դիվիդենտը ընկերության շահույթի այն մասն է, որը վճարվում է բաժնետոմսեր տիրապետողներին՝ որպես շահաբաժին:"
    },
    {
      question: "Կարո՞ղ եմ պատվերներ տեղադրել բորսայի աշխատանքային ժամերից դուրս:",
      answer: "Այո, կարող եք տեղադրել պատվեր ցանկացած ժամի, և այն կհերթագրվի ու կկատարվի ավտոմատ՝ համապատասխան բորսայի բացվելուն պես:"
    },
    {
      question: "Ինչո՞ւ է կարևոր դիվերսիֆիկացիան:",
      answer: "Դիվերսիֆիկացիան (ներդրումների բաշխումը տարբեր ակտիվների միջև) օգնում է նվազեցնել ռիսկերը՝ պաշտպանելով ձեր պորտֆոլիոն հնարավոր վնասներից, եթե որևէ առանձին ընկերություն կամ շուկա անկում ապրի:"
    },
    {
      question: "Կարո՞ղ եմ վաճառել արժեթուղթը ցանկացած պահի:",
      answer: "Այո, բորսայի աշխատանքային ժամերին դուք կարող եք ցանկացած պահին վաճառել ձեր արժեթղթերը:"
    },
    {
      question: "Ի՞նչ արժույթներով կարող եմ ներդրումներ կատարել:",
      answer: "Ներդրումները հիմնականում կատարվում են ԱՄՆ դոլարով և այլ հիմնական արժույթներով՝ կախված ընտրված գործիքից և շուկայից:"
    },
    {
      question: "Ի՞նչ ռիսկեր ունի ներդրումը:",
      answer: "Ֆինանսական շուկաներում ներդրումները միշտ կապված են շուկայական տատանումների և գույքային արժեքի փոփոխության ռիսկերի հետ, հետևաբար նախորդ ցուցանիշները չեն երաշխավորում ապագա արդյունքներ:"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Фиолетовое субменю */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <Link 
            to="/investment-services" 
            className={`pb-1 transition ${isActive('/investment-services') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Ներդրումային ծառայություններ
          </Link>
          <Link 
            to="/bonds" 
            className={`pb-1 transition ${isActive('/bonds') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Պարտատոմսեր
          </Link>
          <Link 
            to="/custody-services" 
            className={`pb-1 transition ${isActive('/custody-services') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Պահառության ծառայություններ
          </Link>
          <Link 
            to="/investment-other-services" 
            className={`pb-1 transition ${isActive('/investment-other-services') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Արժեթղթերի շուկայի գործիքներ
          </Link>
          <Link 
            to="/evocainvest" 
            className={`pb-1 transition ${isActive('/evocainvest') || true ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            EvocaINVEST
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Хлебные крошки */}
        <div className="text-sm text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Արժեթղթեր <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">EvocaINVEST</span>
        </div>

        {/* Главный баннер */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Կատարիր ներդրումներ և ստացիր եկամուտ EvocaINVEST հավելվածով
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              EvocaINVEST հավելվածի միջոցով կարող ես կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում:
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17812682689927/780x585.png" 
              alt="EvocaINVEST Banner" 
              className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-sm"
            />
          </div>
        </div>

        {/* Соц. иконки и основное описание */}
        <div className="flex gap-6 mb-12">
          <div className="hidden sm:flex flex-col space-y-3 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">f</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">in</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">✉</a>
          </div>

          <div className="flex-1 space-y-6 text-base text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900">Apple, Tesla, Google, Amazon, թե՞ Nike։</h2>
            <p>
              EvocaINVEST-ի միջոցով դու կարող ես ներդրումներ կատարել միջազգային և տեղական կապիտալի շուկաներում։ Իսկ բրոքերային հաշիվ կարող ես բացել ընդամենը մի քանի րոպեում՝ անմիջապես <strong>EvocaTOUCH</strong> հավելվածից։
            </p>
            <p className="font-semibold text-gray-900">
              Գնիր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարիր պորտֆոլիոդ մեկ հարթակից։
            </p>

            {/* Инструменты */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-3">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Քո ներդրումային գործիքները</h3>
              <p>EvocaINVEST-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարությունը։</p>
              <ul className="list-disc list-inside space-y-2 pt-2">
                <li><strong>Բաժնետոմսեր՝</strong> ներդրումներ համաշխարհային առաջատար ընկերություններում</li>
                <li><strong>Պարտատոմսեր և եվրապարտատոմսեր՝</strong> ավելի կանխատեսելի ներդրումներ և կայուն եկամտի հնարավորություն</li>
                <li><strong>ETF-ներ՝</strong> դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով</li>
              </ul>
            </div>

            <p>
              Անկախ նրանից՝ նո՞ր ես սկսում ներդրում կատարել, թե՞ արդեն ունես փորձ, կատարում ես երկարաժամկե՞տ, թե՞ կարճաժամկետ ներդրումներ, EvocaINVEST-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար։
            </p>

            {/* 3 Шага открытия брокерского счета */}
            <div className="pt-4">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Բացիր բրոքերային հաշիվ 3 պարզ քայլով</h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <span className="text-[#6400dc] font-black text-lg">01</span>
                  <h4 className="font-bold text-lg text-gray-900 mt-1 mb-2">1. Ներբեռնիր EvocaTOUCH հավելվածը</h4>
                  <p className="text-gray-600 mb-3">Բանկային և ներդրումային գործառույթները՝ մեկ հավելվածում։ Հասանելի է iOS և Android համակարգերում։</p>
                  <div className="flex gap-4">
                    <a href="#" className="inline-block bg-[#6400dc] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-purple-800 transition">App Store</a>
                    <a href="#" className="inline-block bg-[#6400dc] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-purple-800 transition">Google Play</a>
                  </div>
                </div>

                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <span className="text-[#6400dc] font-black text-lg">02</span>
                  <h4 className="font-bold text-lg text-gray-900 mt-1 mb-2">2. Բացիր Բրոքերային հաշիվ</h4>
                  <p className="text-gray-600">Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության։</p>
                </div>

                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <span className="text-[#6400dc] font-black text-lg">03</span>
                  <h4 className="font-bold text-lg text-gray-900 mt-1 mb-2">3. Սկսիր ներդրումներ կատարել</h4>
                  <p className="text-gray-600">Փնտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆոլիոդ:</p>
                </div>
              </div>

              {/* Изображение с шагами */}
              <div className="mt-8 rounded-3xl overflow-hidden border border-gray-100 shadow-md">
                <img 
                  src="https://www.evoca.am/file_manager/other/invest%20steps%20(1).png" 
                  alt="Invest Steps" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Почему EvocaINVEST */}
            <div className="pt-6">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Ինչո՞ւ ընտրել EvocaINVEST ներդրումային հարթակը</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">24/7 պատվերներ</h4>
                  <p className="text-sm text-gray-600">Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես։</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Մրցակցային սակագներ</h4>
                  <p className="text-sm text-gray-600">Մրցակցային և թափանցիկ միջնորդավճարներ։ Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը։</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Լիմիտային և շուկայական պատվերներ</h4>
                  <p className="text-sm text-gray-600">Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային՝ գնի ճշգրտության համար։ Անհրաժեշտության դեպքում կարող ես ակնթարթորեն անցնել շուկայական պատվերի։</p>
                </div>
              </div>
            </div>

            {/* Telegram канал */}
            <div className="p-8 bg-purple-50 border border-purple-100 rounded-3xl space-y-4">
              <h3 className="text-2xl font-bold text-[#6400dc]">Զարգացրու ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ</h3>
              <p>Միանալով EvocaINVEST տելեգրամյան ալիքին՝ դու կգտնես․</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Ներդրումների մասին պարզ և հասկանալի նյութեր,</li>
                <li>Շուկայական հետազոտություններ և վերլուծություններ,</li>
                <li>Փորձագետների կարծիքներ միջազգային ներդրումային մասնագետների կողմից,</li>
                <li>Համաշխարհային ներդրումային շուկաների մասին կարևոր թարմացումներ:</li>
              </ul>
              <div className="pt-2">
                <a href="#" className="inline-block bg-[#6400dc] text-white px-6 py-3 rounded-2xl font-bold hover:bg-purple-800 transition">
                  Միացիր մեր տելեգրամյան ալիքին
                </a>
              </div>
            </div>

            {/* Контакты и предупреждение */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-bold text-gray-900">Դեռ չե՞ս օգտվում EvocaINVEST-ից</h3>
              <p>Պատրա՞ստ ես բացահայտել ներդրումների աշխարհը։ Լրացրու տվյալներդ, և մենք կապ կհաստատենք քեզ հետ կամ անմիջապես կապվիր ներդրումային բաժնի հետ․</p>
              
              <div className="flex flex-wrap gap-6 text-[#6400dc] font-bold text-lg">
                <a href="mailto:investsecurities@evoca.am" className="hover:underline">✉ investsecurities@evoca.am</a>
                <a href="tel:+37433777453" className="hover:underline">☎ +374 33 777 453</a>
              </div>

              <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-sm mt-4">
                <p className="font-bold mb-1">Կարևոր</p>
                <p>
                  EvocaINVEST-ը հնարավորություն է տալիս բացահայտել ներդրումային հնարավորությունները․ այս հարթակում և մյուս սոց․ հարթակներում ներկայացված նյութերը բացառապես տեղեկատվական նպատակի համար են։ Յուրաքանչյուր ներդրումային որոշում կայացվում է օգտատիրոջ կողմից՝ սեփական գնահատման հիման վրա։ Ներդրումները կապված են ռիսկերի հետ, հետևաբար նախորդ ցուցանիշները չեն կարող դիտվել որպես ապագա արդյունքների երաշխիք։
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Форма обратной связи: EvocaINVEST հետադարձ կապ */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-12 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">EvocaINVEST հետադարձ կապ</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1">Անուն</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange}
                  required 
                  className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#6400dc]" 
                  placeholder="Անուն"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1">Ազգանուն</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleInputChange}
                  required 
                  className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#6400dc]" 
                  placeholder="Ազգանուն"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 font-semibold mb-1">Էլ․ Հասցե</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}
                required 
                className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#6400dc]" 
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 font-semibold mb-1">Հեռախոսահամար</label>
              <div className="flex">
                <span className="p-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-xl text-sm font-semibold text-gray-700 flex items-center">+374</span>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange}
                  required 
                  className="w-full p-3 bg-white border border-gray-300 rounded-r-xl focus:outline-none focus:border-[#6400dc]" 
                  placeholder="XX XXXXXX"
                />
              </div>
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit" 
                className="w-full sm:w-auto px-10 py-3 bg-[#6400dc] text-white font-bold rounded-2xl hover:bg-purple-800 transition shadow-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* 16 Вопросов и ответов (FAQ) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
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