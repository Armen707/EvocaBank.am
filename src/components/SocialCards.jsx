import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SocialCards() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Վերևի Մանուշակագույն Ենթամենյու */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <Link 
            to="/cards" 
            className={`pb-1 transition ${isActive('/cards') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Քարտեր
          </Link>
          <Link 
            to="/issuance" 
            className={`pb-1 transition ${isActive('/issuance') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Քարտերի տրամադրում և սպասարկում
          </Link>
          <Link 
            to="/social-cards" 
            className={`pb-1 transition ${isActive('/social-cards') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Սոցիալական ապահովության վճարային քարտեր
          </Link>
          <Link 
            to="/benefits" 
            className={`pb-1 transition ${isActive('/benefits') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Evoca Benefits
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-base text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Քարտեր <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Սոցիալական ապահովության վճարային քարտեր</span>
        </div>

        {/* Հիմնական բաններ բլոկ */}
        <div className="bg-[#cbb2fe] rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="p-8 sm:p-12 md:w-1/2 text-gray-900">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              Սոցիալական ապահովության վճարային քարտեր
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-800">
              Կենսաթոշակառուներին առաջարկում ենք ARCA կենսաթոշակային վճարային քարտեր՝ միայն կենսաթոշակների գումարների սպասարկման նպատակով։ Քարտերը տրամադրում ենք Սոցիալական ապահովության պետական ծառայության հետ 2011թ. հունվարի 21-ին կնքած պայմանագրի համաձայն։
            </p>
          </div>
          <div className="md:w-1/2 h-full flex items-end justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17218011250749/780x585.jpg" 
              alt="Social Cards" 
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>
        </div>

        {/* Տեղեկատվական և պայմանների տեքստեր (Մեծացված) */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
          <p>Քարտերը տրամադրում և սպասարկում ենք մեր կողմից հաստատված Կենսաթոշակային քարտերի տրամադրման և սպասարկման սակագների համաձայն:</p>
          <p>Քարտերի ստացման դիմում կարող եք ներկայացնել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ:</p>
          <p>Վճարային քարտերի տրամադրմանը, սպասարկմանը և օգտագործմանը վերաբերող մանրամասն տեղեկատվությանը կարող եք ծանոթանալ այստեղ:</p>
          
          <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl">
            <h4 className="font-bold text-xl text-gray-900 mb-3">Ծանոթագրություն</h4>
            <p className="text-base sm:text-lg">
              <strong>Կենսաթոշակառու</strong>` անձ, ում կենսաթոշակը վճարվում է անկանխիկ եղանակով, Բանկում բացված բանկային հաշվին փոխանցելու միջոցով: <strong>Կենսաթոշակ</strong>` կենսաթոշակի, պատվովճարի, դրամական օգնության և սոցիալական ապահովության այլ ծրագրերով նախատեսված դրամական վճարների գումարը:
            </p>
          </div>
        </div>

        {/* Ստատիկ բաժիններ (Մեծացված տառատեսակներով) */}
        <div className="space-y-8">
          
          {/* 1. Վճարային քարտերով կատարվող գործառնություններ */}
          <div className="border border-gray-200 rounded-3xl p-8 bg-white shadow-sm space-y-4">
            <h3 className="font-extrabold text-2xl text-gray-900">Վճարային քարտերով կատարվող գործառնություններ</h3>
            <p className="font-bold text-lg text-gray-800">Վճարային քարտերով կարող եք՝</p>
            <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
              <li>Կանխիկացնել Ձեր քարտային հաշվին առկա միջոցները բանկոմատներից (ATM) և կանխիկացման կետերից (POS տերմինալներից):</li>
              <li>Կատարել անկանխիկ վճարումներ առևտրի և սպասարկման կետերում (ապրանքների կամ ծառայությունների դիմաց՝ խանութներում, ռեստորաններում, հյուրանոցներում և սպասարկման այլ կետերում):</li>
              <li>Կատարել կոմունալ վճարումներ՝ բանկոմատների միջոցով կամ օնլայն (www.arca.am-ում գրանցելով վիրտուալ քարտ):</li>
              <li>Օնլայն գործարքներ կատարել (վճարումներ, գնումներ):</li>
              <li>Քարտից քարտ գումար փոխանցել՝ բանկոմատների միջոցով կամ օնլայն:</li>
              <li>Մեր online բանկինգ ծառայությունից օգտվելու պարագայում դուք հնարավորություն կունենաք առանց մեզ այցելելու կատարել դրամական միջոցների համալրում (ընթացիկ հաշվից՝ քարտային հաշիվ) և անմիջապես տնօրինել այդ գումարները՝ ձեր քարտի միջոցով:</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              <strong>Նշում.</strong> Քարտային հաշվով կատարվող դրամական շարժը վերահսկելու նպատակով ակտիվացնում ենք SMS-տեղեկացում ծառայությունը (դուք կարող եք դիմում գրել և հրաժարվել SMS տեղեկացումների ծառայությունից): Օնլայն վճարումներ իրականացնելիս կարող եք օգտվել 3D Secure ծառայությունից:
            </p>
          </div>

          {/* 2. Օգտակար տեղեկատվություն */}
          <div className="border border-gray-200 rounded-3xl p-8 bg-white shadow-sm space-y-4">
            <h3 className="font-extrabold text-2xl text-gray-900">Օգտակար տեղեկատվություն</h3>
            <p className="font-bold text-lg text-gray-800">Քարտային վճարումներ կատարելիս անհրաժեշտ է հիշել`</p>
            <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
              <li>Քարտերով կարող եք վճարումներ կատարել այն առևտրի ու սպասարկման կետերում, որտեղ փակցված է տվյալ քարտային համակարգի լոգոտիպը:</li>
              <li>Քարտով վճարում կատարելիս՝ մինչև անդորրագիրը ստորագրելը, հավաստիացե՛ք, որ անդորրագրում նշված գումարը համապատասխանում է ձեր գործարքի գումարին:</li>
              <li>Քարտով վճարելիս մի՛շտ պահեք քարտը ձեր տեսադաշտում:</li>
              <li>Եթե հրաժարվում եք գնումից, ապա պահանջե՛ք չեղյալ համարել (VOID) ձեր վճարումը և պահե՛ք համապատասխան անդորրագիրը մինչև հերթական քաղվածքի ստացումը՝ համոզվելու, որ հաշվից գանձում չի կատարվել:</li>
            </ul>
          </div>

          {/* 3. Զգուշացում */}
          <div className="border border-gray-200 rounded-3xl p-8 bg-white shadow-sm space-y-4">
            <h3 className="font-extrabold text-2xl text-gray-900">Զգուշացում</h3>
            <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
              <li>Ապահովե՛ք ձեր PIN ծածկագրի գաղտնիությունը: PIN ծածկագրով կատարված բոլոր գործառնությունների պատասխանատվությունը կրում եք դուք:</li>
              <li>Քարտի կորստի կամ գողության դեպքում անմիջապես զանգահարե՛ք մեզ (+374 10) 605555 կամ Արմենիան Քարդ (+374 10) 592222 հեռախոսահամարներով:</li>
              <li>Քարտի կորստի կամ գողության մասին ՄԵԶ տեղեկացնելու հետաձգումը կարող է հանգեցնել ձեր քարտով այլ անձանց կողմից գործարքների կատարմանը:</li>
              <li>Դուք պատասխանատվություն եք կրում քարտով կատարված բոլոր գործառնությունների համար մինչև այն պահը, երբ տեղեկացնում եք մեզ կորստի կամ գողության պատճառով քարտի գործողությունը դադարեցնելու անհրաժեշտության մասին:</li>
            </ul>
          </div>

        </div>

        {/* Փաստաթղթեր */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Փաստաթղթեր</h2>
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}