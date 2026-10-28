import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function UnallocatedMetalAccounts() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState('terms');

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
            to="/savings-account" 
            className={`pb-1 transition ${isActive('/savings-account') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Evoca խնայողական հաշիվ
          </Link>
          <Link 
            to="/account-opening-service" 
            className={`pb-1 transition ${isActive('/account-opening-service') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Հաշիվների բացում և սպասարկում
          </Link>
          <Link 
            to="/unallocated-metal-accounts" 
            className={`pb-1 transition ${isActive('/unallocated-metal-accounts') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Առարկայազուրկ մետաղական հաշիվներ
          </Link>
          <Link 
            to="/non-resident-service" 
            className={`pb-1 transition ${isActive('/non-resident-service') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Ոչ ռեզիդենտ հաճախորդների հետագա սպասարկում
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Հաշիվներ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Առարկայազուրկ մետաղական հաշիվներ</span>
        </div>

        {/* Հիմնական բաններ բլոկ */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Առարկայազուրկ մետաղական հաշիվներ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png" 
              alt="Unallocated metal accounts banner" 
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
            <h2 className="text-3xl font-black text-gray-900 mb-4">Հիմնական պայմաններ</h2>
            
            <ul className="list-disc list-inside space-y-3">
              <li>Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն 999.9 հարգի ոսկով, առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած 31 գրամից (ոսկու գնանշումը կատարվում է գրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից:</li>
              <li>Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով` ՀՀ Կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային) արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝ 0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է 31.10348 գրամի):</li>
              <li>Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին իրավական ակտերով:</li>
            </ul>

            <p className="font-semibold text-gray-900">Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները՝</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>հաշվի համալրում՝ բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով,</li>
              <li>հաշվի ելքագրում՝ հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով:</li>
            </ul>

            <p>Մետաղական հաշիվները կարող են գրավադրվել:</p>

            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-2">
              <p className="font-bold text-lg text-gray-900">Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Դիմում՝ մեր ձևանմուշի համաձայն:</li>
                <li>Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:</li>
                <li>Մեր պահանջով այլ փաստաթղթեր:</li>
              </ul>
            </div>

            <p>
              Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին կարող եք ծանոթանալ այստեղ:
            </p>

            <p>
              Evocabank-ում նաև կարող եք ձեռք բերել ոսկու գրավով վարկեր՝ ամենահարմար պայմաններով։ Ոսկու գրավով վարկը տրամադրվում է ոսկյա իրերի գրավադրմամբ անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:
            </p>

            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-900">
              <p><strong>Ուշադրություն.</strong> Ավանդների հատուցումը երաշխավորող հիմնադրամը չի հատուցում մետաղական հաշիվները:</p>
            </div>
          </div>
        </div>

        {/* Փաստաթղթեր */}
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-6">Փաստաթղթեր</h2>
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 09.06.26</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}