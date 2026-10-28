import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MoneyTransfers() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState('general');

  const isActive = (path) => location.pathname === path;

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Վերևի Մանուշակագույն Ենթամենյու */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <Link 
            to="/money-transfers" 
            className={`pb-1 transition ${isActive('/money-transfers') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Դրամական փոխանցումներ
          </Link>
          <Link 
            to="/payment-systems" 
            className={`pb-1 transition ${isActive('/payment-systems') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Վճարային համակարգեր
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Փոխանցումներ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Դրամական փոխանցումներ</span>
        </div>

        {/* Հիմնական բաններ բլոկ */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Դրամական փոխանցումներ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով: Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով:
            </p>
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl">
              <p className="font-bold text-base text-gray-900">
                Կարող եք գումարներ փոխանցել ինչպես ձեր հաշվից, այնպես էլ առանց հաշվի բացման:
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
              alt="Money transfers banner" 
              className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-sm"
            />
          </div>
        </div>

        {/* Սոց. նշաններ և հիմնական տեքստ */}
        <div className="flex gap-6 mb-12">
          <div className="hidden sm:flex flex-col space-y-3 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">f</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">in</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">✉</a>
          </div>

          <div className="flex-1 space-y-6 text-base text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-black text-gray-900">Ընդհանուր դրույթներ</h2>
            <p>
              Ձեր բանկային փոխանցումներն իրականացնում ենք՝ ղեկավարվելով «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի իրավական ակտերով, ՀՀ այլ իրավական ակտերով, թղթակից բանկերի հետ կնքված պայմանագրերով և սպասարկման սահմանված պայմաններով:
            </p>
            <p>
              Ձեր փոխանցումները կատարում ենք վճարման հանձնարարագրերի հիման վրա (կախված գումարի չափից, փոխանցման բնույթից և նպատակից` կարող են պահանջվել նաև այլ փաստթղթեր):
            </p>
            <p>
              Յուրաքանչյուր աշխատանքային օրվա ընթացքում՝ մինչև ժամը 15:30 ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը, իսկ ժամը 15:30-ից հետո ներկայացված վճարման հանձնարարագրերը` հաջորդ բանկային օրը: Մինչև ժամը 16:30 ներկայացված դրամով փոխանցումները (պետական և տեղական բյուջեի վճարներ, կոմունալ կամ սոցիալական այլ վճարներ) կատարման ենք ընդունում նույն բանկային օրը:
            </p>
            <p>
              Դրամով և արտարժույթով բանկային փոխանցումներ իրականացնելիս ձեզանից գանձում ենք միջնորդավճարներ՝ ըստ մեր դրույքաչափերի և սակագների: Կոմունալ վճարների սպասարկման դիմաց միջնորդավճար չենք գանձում: Միջնորդավճարները գանձվում են ՀՀ դրամով: Արտարժույթի տոկոսային հարաբերակցությամբ սահմանված միջնորդավճարները գանձվում են ՀՀ դրամով՝ հիմք ընդունելով գանձման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ վաճառքի փոխարժեքը:
            </p>
            <p>
              Մենք պարտավոր ենք տրամադրել յուրաքանչյուր փոխանցման կատարումը հավաստող փաստաթուղթ, որտեղ նշված կլինեն փոխանցման գումարը, արժույթը, միջնորդավճարի չափը և այլ մանրամասներ:
            </p>

            {/* Երկրորդ նկարը տեքստի մեջ */}
            <div className="my-6 rounded-3xl overflow-hidden shadow-md">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg" 
                alt="Bank interior service" 
                className="w-full h-auto object-cover max-h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Անհրաժեշտ տեղեկատվություն (Ակորդեոններ) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
        <div className="space-y-4 mb-12">
          
          {/* 1. Փոխանցումներ դրամով */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('dram')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Փոխանցումներ դրամով</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'dram' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'dram' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև:</li>
                  <li>Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում:</li>
                </ul>
              </div>
            )}
          </div>

          {/* 2. Արտարժութային փոխանցումներ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('currency')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Արտարժութային փոխանցումներ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'currency' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'currency' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Մենք SWIFT համակարգի անդամ ենք և ձեր արտարժութային միջազգային փոխանցումներն իրականացնում ենք այս համակարգով: Այն ապահովում է արագ և անվտանգ փոխանցումներ՝ միջազգային բանկային ստանդարտներին համապատասխան:</li>
                  <li>Փոխանցումը կատարում ենք միայն փոխանցվող գումարի և միջնորդավճարի գումարի փաստացի առկայության դեպքում:</li>
                  <li>Արտարժութային միջազգային փոխանցում իրականացնելու համար մեզ եք ներկայացնում սահմանված ձևանմուշի վճարման հանձնարարագիր (անհրաժեշտության դեպքում մեր աշխատակիցները կօգնեն լրացնել այն):</li>
                  <li>Արտարժութային միջազգային բանկային փոխանցումները, ըստ մեր սակագների, իրականացվում են OUR (ծախսերը՝ փոխանցողի հաշվին), Guaranted OUR (գումարը ստացողին հասնում է ամբողջական) և BEN (ծախսերը՝ ստացողի հաշվին) տարբերակներով:</li>
                  <li>Արտարժութային միջազգային փոխանցումները, որպես կանոն, տևում են 1-3 բանկային օր: Փոխանցումների կատարման տևողությունը կախված է այն բանկերի թվից, որոնց միջոցով կատարվում է փոխանցումը:</li>
                </ul>
              </div>
            )}
          </div>

          {/* 3. Վճարային համակարգեր */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('systems')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Վճարային համակարգեր</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'systems' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'systems' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Դրամական փոխանցումների վճարային համակարգերը հնարավորություն են տալիս շատ արագ՝ առանց բանկային հաշվի բացման, պարզեցված ընթացակարգով, ոչ առևտրային բնույթի փոխանցումներ կատարել ֆիզիկական անձանց միջև՝ դեպի աշխարհի տարբեր երկրներ:</li>
                  <li>Մեր կողմից սպասարկվող վճարային համակարգերին կարող եք ծանոթանալ այստեղ:</li>
                </ul>
              </div>
            )}
          </div>

          {/* 4. Փոխանցման պայմանների փոփոխում կամ չեղյալացում */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('cancel')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Փոխանցման պայմանների փոփոխում կամ չեղյալացում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'cancel' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'cancel' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Փոխանցումների վավերապայմանների փոփոխումը կամ փոխանցման չեղյալացումը կատարում ենք փոխանցումը նախաձեռնող անձի գրավոր դիմումի հիման վրա՝ նրանից գանձելով միջնորդավճարներ (սակագներին կարող եք ծանոթանալ Բանկային փոխանցումներ բաժնում):</li>
                  <li>Փոխանցման մեջ առկա սխալների ուղղումը, ինչպես նաև փոխանցման չեղյալացումն իրականացում ենք փոխանցող և ստացող բանկերի հնարավորության սահմաններում և ժամկետներում, սովորաբար դա կարող է տևել 2-5 բանկային օր:</li>
                  <li>Եթե փոխանցումը նախաձեռնող անձը ներկայացրել է փոխանցման չեղյալացման հայտ, սակայն ըստ հարցման՝ միջոցներն արդեն հաշվեգրված են, ապա մենք չենք կարող պատասխանատվություն կրել գումարների վերադարձի համար: Փոխանցված միջոցները ստացողին չհասնելու դեպքում`
                    <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                      <li>Փոխանցված միջոցները թղթակից բանկի կողմից վերադարձվում են փոխանցում կատարած բանկին: Դրամական միջոցների վերադարձի ժամկետները կախված են թղթակից բանկերում գործող ընթացակարգային ժամկետներից և այն բանկերի թվից, որոնց միջոցով կատարվել է փոխանցումը:</li>
                      <li>Վերադարձված դրամական միջոցները հաշվեգրում ենք փոխանցում իրականացրած անձի բանկային հաշվին, իսկ առանց բանկային հաշիվների բացման կատարված փոխանցման դեպքում՝ փոխանցման հանձնարարագրում նշված անձնագրային հիմքերով վերադարձնում ենք փոխանցում իրականացրած անձին:</li>
                    </ul>
                  </li>
                  <li>Վճարային համակարգերով իրականացված փոխանցումների (ֆիզանձանց միջև ոչ առևտրային բնույթի արագ դրամական փոխանցումներ) վավերապայմանների փոփոխման/սխալների ուղղման, կատարված փոխանցման չեղյալացման, ինչպես նաև փոխանցում ստացողի կողմից գումարի չհայտնաբերման պարագայում դրամական միջոցների հետ վերադարձի համար գործում են տվյալ համակարգերի ներքին ընթացակարգերով սահմանված պայմանները և ժամկետները:</li>
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Փաստաթղթեր */}
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-6">Փաստաթղթեր</h2>
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Անկանխիկ վճարման հանձնարարագրերով իրականացման կանոններ[cite: 4]</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.[cite: 4]</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>SWIFT Transfers (20.05.2006)[cite: 4]</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}