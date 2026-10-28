import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function IssuanceAndService() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState('');

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
        
        {/* Breadcrumb & Title */}
        <div className="text-sm text-gray-400 mb-2">
          Անհատ <span className="mx-1">&gt;</span> Քարտեր <span className="mx-1">&gt;</span> <span className="text-gray-600 font-semibold">Քարտերի տրամադրում և սպասարկում</span>
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 mb-8">Քարտերի տրամադրում և սպասարկում</h1>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-wide uppercase">Անհրաժեշտ տեղեկատվություն</h2>

        {/* Accordion List (15 բաժին) */}
        <div className="space-y-4">
          
          {/* 1. Քարտի տրամադրում և ակտիվացում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('issuance')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Քարտի տրամադրում և ակտիվացում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'issuance' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'issuance' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <ol className="list-decimal list-inside space-y-3">
                  <li>Բանկը հաճախորդներին տրամադրում է Հաշվարկային կամ Վարկային` «ArCa» լոկալ, «Visa», «Mastercard» և «UnionPay» միջազգային վճարային համակարգերի քարտեր:</li>
                  <li>Քարտային հաշիվները բացվում և վարվում են ՀՀ դրամով, ԱՄՆ դոլարով, ԵՎՌՈ-ով և ՌԴ ռուբլով:</li>
                  <li>Արագ փոխանցման համակարգերով ստացված գումարներ հաճախորդի կարգադրությամբ կարող են հաշվեգրվել նաև հաճախորդի Բանկում ունեցած այլ Քարտային հաշվին:</li>
                  <li>Բանկը դիմումի համաձայն Քարտապանի կողմից լիազորված անձանց կարող է տրամադրել Լրացուցիչ քարտեր: Քարտային հաշիվը տնօրինում է հիմնական Քարտի Քարտապանը: Հիմնական Քարտի Քարտապանը պատասխանատվություն է կրում տրամադրված բոլոր Լրացուցիչ Քարտերով իրականացված գործարքների համար: Լրացուցիչ քարտը կարող է տրամադրվել անմիջականորեն այն օգտագործողին միայն հիմնական Քարտապանի նախապես ներկայացված գրավոր համաձայնության դեպքում:</li>
                  <li>Բանկը Քարտապանի Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվեգրում է տոկոսագումարներ, տոկոսադրույքի չափը սահմանվում է Բանկի սակագներով:</li>
                  <li>Վճարային Քարտը Քարտապանին է տրամադրվում Բանկի գլխամասային գրասենյակում, մասնաճյուղերում, ինչպես նաև առաքման միջոցով` Վճարային քարտի ստացման դիմումը ներկայացնելուն հաջորդող 7 (յոթ) աշխատանքային օրվա ընթացքում:</li>
                  <li>Քարտապանը Վճարային քարտը ստանալիս պետք է ներկայացնի անձը հաստատող այն փաստաթուղթը, որով դիմել է քարտի համար (անձնագիր կամ նույնականացման քարտ):</li>
                  <li>Բանկը Քարտապանին Վճարային Քարտը կարող է տրամադրել PIN ծածկագրով կամ առանց PIN ծածկագրի: Վճարային Քարտը և PIN ծածկագիրը Քարտապանին տրամադրվում են առանձին փակ ծրարներով: Վճարային Քարտը առանց PIN ծածկագրի տրամադրման դեպքում քարտի ակտիվացումը և Հաճախորդի կողմից PIN ծածկագրի սահմանումը կատարվում է Հաճախորդի համար Բանկում գրանցված հեռախոսահամարին ստացված OTP գաղտնաբառի միջոցով:</li>
                  <li>Քարտը և PIN ծածկագիրը ստանալուն պես Քարտապանը պետք է ստուգի ծրարի փակ և անվնաս լինելը, քարտի և PIN-ծածկագրի առկայությունը ծրարում, համապատասխանությունը քարտի պատվիրման հայտին, ինչպես նաև քարտի վրա նշված տվյալների ճշտությունը: Անհամապատասխանությունների դեպքում Քարտապանը պետք է անմիջապես տեղեկացնի Բանկին:</li>
                  <li>Վճարային Քարտը ստանալուն պես Քարտապանը պարտավոր է անմիջապես ստորագրել Վճարային Քարտի հակառակ կողմի վրա ստորագրության համար նախատեսված մասում: Վճարային Քարտի հակառակ կողմում ստորագրության բացակայությունը կամ դրա անհամապատասխանությունը օրինական հիմք է քարտի սպասարկումը մերժելու և այն առգրավելու համար:</li>
                  <li>Բանկի կողմից Վճարային Քարտերը տրամադրվում են մինչև 5 (հինգ) տարի ժամկետով:</li>
                  <li>Հաճախորդի ներկայացրած դիմումի հիման վրա Բանկը կարող է վարկավորել Հաճախորդի Քարտային հաշիվը` վերջինիս հետ կնքելով համապատասխան վարկային սահմանաչափի տրամադրման պայմանագիր:</li>
                  <li>Եթե Հաճախորդը Վճարային քարտը պատվիրելուց հետո 30 օրացուցային օրվա ընթացքում չի դիմում Բանկ Վճարային քարտը ստանալու համար, ապա Բանկը կարող է ոչնչացնել Վճարային քարտը` փակելով քարտային հաշիվը, և չվերադարձնել գանձված միջնորդավճարները:</li>
                </ol>
              </div>
            )}
          </div>

          {/* 2. Վճարային քարտի վճարներ և գանձումներ */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('fees')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Վճարային քարտի վճարներ և գանձումներ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'fees' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'fees' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <ol className="list-decimal list-inside space-y-3">
                  <li>Քարտապանը վճարում է Բանկին Վճարային Քարտի սպասարկման հետ կապված Բանկի սակագներով սահմանված միջնորդավճարներ, եթե Բանկի և Քարտապանի միջև այլ համաձայնություն չի կայացվել:</li>
                  <li>Վճարային Քարտի սպասարկման միջնորդավճարի առաջին վճարումը Քարտապանը կատարում է քարտը պատվիրելիս, իսկ հաջորդ վճարումները՝ Բանկի սակագներով սահմանված պարբերականությամբ՝ կանխավճարային կարգով: Վճարային Քարտի գործողությունը վաղաժամկետ դադարելու դեպքում գանձված սպասարկման վճարը չի վերադարձվում:</li>
                  <li>Վճարային Քարտի սպասարկման միջնորդավճարի գծով չմարված պարտավորության դեպքում մինչև Հաճախորդի կողմից պարտավորության լրիվ մարումը Բանկի կողմից Վճարային քարտը բլոկավորվում է:</li>
                  <li>Վճարային Քարտով գործարքների իրականացման, ինչպես նաև Բանկի կողմից Վճարային Քարտի սպասարկման հետ կապված վճարների գանձման արդյունքում քարտի վճարային սահմանաչափը գերազանցելու դեպքում Քարտային հաշվին ձևավորվում է Գերածախս: Բանկի սակագներով կարող է սահմանվել Գերածախսի գծով տուժանք: Բանկին վճարման ենթակա Գերածախսի գումարները Քարտապանը պարտավոր է մարել անմիջապես:</li>
                  <li>Բանկի սակագներով Վճարային Քարտի համար սահմանված միջնորդավճարները և Վճարային Քարտի սպասարկման հետ կապված այլ վճարները՝ ներառյալ Քարտային հաշվին ձևավորված Գերածախսը, պարտավորությունները կազմող գումարները Բանկի կողմից գանձվում են անակցեպտ եղանակով՝ առանց Քարտապանի հանձնարարականի: Գանձումն առաջնահերթ կատարվում է Քարտային հաշվից, իսկ Քարտային հաշվին միջոցների բացակայության դեպքում, Քարտապանի՝ Բանկում ունեցած այլ հաշիվներից: Ընդ որում, Քարտապանը պարտավոր է ապահովել համապատասխան դրամական միջոցների առկայությունը իր բանկային հաշիվ(ներ)ին:</li>
                  <li>Չեղարկված գործարքի գումարը առևտրի/սպասարկման կետի կողմից վերադարձվելուց հետո Բանկը մուտքագրում է Քարտային հաշվին՝ նվազեցնելով չեղարկման համար պահումները (առկայության դեպքում): Անկախ չեղարկված գործարքի գումարի վերադարձման հանգամանքից և ժամկետից՝ Քարտապանը պետք է Բանկին վճարի կատարված գործարքի արդյունքում Բանկի նկատմամբ ձևավորված պարտավորությունները:</li>
                  <li>Բանկը պատասխանատվություն չի կրում առևտրի/սպասարկման կետի կողմից մատուցված որևէ ծառայության դիմաց գանձված և Քարտապանի Քարտային հաշվից ելքագրված վճարի համար:</li>
                </ol>
              </div>
            )}
          </div>

          {/* 3. Վճարային Քարտի օգտագործման, պահպանման և անվտանգության կանոնները */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('security')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Վճարային Քարտի օգտագործման, պահպանման և անվտանգության կանոնները</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'security' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'security' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <ol className="list-decimal list-inside space-y-3">
                  <li>Նախքան Վճարային Քարտն օգտագործելը Քարտապանը պարտավոր է ստուգել տվյալ քարտը սպասարկող սարքի կամ սարքավորման միջոցով Վճարային Քարտով իրականացվող գործարքների տեսակները (կանխիկի տրամադրում, կանխիկի մուտքագրում, վճարումներ և այլն), ինչպես նաև Վճարային Քարտը սպասարկող վճարահաշվարկային համակարգերով (ArCa, MasteCard, VISA և այլն) սպասարկելու հնարավորությունը:</li>
                  <li>Վճարային Քարտի, PIN ծածկագրի, CVV/CVC կոդի և Բանկի կողմից տրամադրված գաղտնաբառի օգտագործման հետ կապված ամբողջ ռիսկը կրում է Քարտապանը:</li>
                  <li>PIN ծածկագիրը Քարտապանը պետք է պահպանի գաղտնի և այն հասանելի չդարձնի այլ անձանց: Բանկը պատասխանատվություն չի կրում Քարտապանի կողմից իր PIN ծածկագիրը երրորդ անձանց հասանելի դառնալու հետևանքով Վճարային Քարտի ոչ օրինական և Քարտապանի կողմից չարտոնված օգտագործման համար:</li>
                  <li>Քարտապանը կարող է իր հայեցողությամբ փոխել PIN ծածկագիրը` համապատասխան հնարավորությամբ բանկոմատի միջոցով: PIN ծածկագրի փոփոխման համար անհրաժեշտ է մուտքագրել գործող PIN ծածկագիրը և նոր PIN ծածկագիրը:</li>
                  <li>Քարտապանն իրավունք չունի փոխանցել Վճարային Քարտը, հայտնել PIN ծածկագիրը, CVV/CVC կոդը, գաղտնաբառը այլ անձանց: Քարտապանը պարտավոր է ձեռնարկել միջոցներ, որպեսզի Վճարային Քարտը, PIN-կոդը, CVV/CVC կոդը, գաղտնաբառը, քարտի վրա նշված տեղեկատվությունը տեսանելի կամ այլ կերպ հասանելի չլինեն այլ անձանց:</li>
                  <li>Արգելվում է գրել PIN ծածկագիրը Վճարային Քարտի վրա, ինչպես նաև Վճարային Քարտը և PIN ծածկագիրը պահել միասին:</li>
                  <li>Վճարային Քարտը օգտագործելիս PIN ծածկագիրը անհրաժեշտ է հավաքել այնպես, որ տեսանելի չլինի այլ անձանց համար և չտեսագրվի որևէ տեսաձայնագրող սարքի միջոցով:</li>
                  <li>Վճարային Քարտով գործարքների իրականացման ժամանակ Քարտապանը պետք է մուտքագրի PIN ծածկագիրը, եթե գործարքի կատարման համար օգտագործվող սարքավորման միջոցով տվյալ տեսակի քարտով գործարքի իրականացման համար պահանջվում է PIN ծածկագրի մուտքագրում: PIN ծածկագրի մուտքագրումն անհրաժեշտ է նաև NFC վճարումների ժամանակ` առանց PIN ծածկագրի մուտքագրման շեմի գերազանցման դեպքում:</li>
                  <li>Ինտերնետ միջավայրում (վիրտուալ առևտրի կետերում) քարտով գործարքների իրականացման ժամանակ PIN ծածկագրի փոխարեն կարող է պահանջվել CVV/CVC կոդի մուտքագրում:</li>
                  <li>Արգելվում է ինտերնետ միջավայրում (վիրտուալ առևտրի կետերում) մուտքագրել (հայտնել) PIN ծածկագիրը: PIN ծածկագիրը հայտնելու դեպքում անհրաժեշտ է անմիջապես դադարեցնել գործարքը, տեղեկացնել Բանկին և բլոկավորել քարտը:</li>
                  <li>Ինտերնետ միջավայրում քարտով գործարք կատարելիս Քարտապանը պետք է նախապատվություն տա ապահով վճարում նախատեսող կայքերին (secure-payment website): Առցանց խաղատները, բուքմեյքերական գրասենյակները համարվում են առավել ռիսկային:</li>
                  <li>Քարտապանը պետք է առավել ուշադիր լինի այն գործարքների մասով, որոնք իրականացվում են ժամանցի և նմանատիպ այլ վայրերում: Խորհուրդ է տրվում Վճարային Քարտը չվստահել այլ անձանց և թույլ չտալ Վճարային Քարտի օգտագործումը Քարտապանի տեսադաշտից դուրս:</li>
                  <li>Չի կարելի օգտվել այն բանկոմատներից, կանխիկացման և առևտրի/սպասարկման կետերից և սարքավորումներից, որոնք Քարտապանի կարծիքով վստահելի չեն կամ կասկած են առաջացնում, ինչպես նաև, եթե դրանց քարտ ընթերցող սարքին, ստեղնաշարին կամ կանխիկի տրամադրման պատուհանին միացված են լրացուցիչ սարքավորումներ, հաղորդալարեր, կպչուն ժապավեններ և այլ կասկածելի իրեր:</li>
                  <li>Սույն պայմաններով սահմանված կանոնների և պահանջների խախտումով Վճարային Քարտով կատարված գործարքների, ինչպես նաև քարտի, PIN-ծածկագրի, գաղտնաբառի, Վճարային քարտի վրա նշված տեղեկատվության (Վճարային քարտի համար, CVV/CVC կոդ, վավերության ժամկետ), OTP գաղտնաբառի օգտագործման, երրորդ անձանց տրամադրման կամ հայտնի դառնալու հետևանքով Քարտապանի կրած վնասների համար Բանկը որևէ պատասխանատվություն չի կրում:</li>
                </ol>
              </div>
            )}
          </div>

          {/* 4. Վճարային Քարտի օգտագործումը */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('usage')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Վճարային Քարտի օգտագործումը</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'usage' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'usage' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Վճարային Քարտով իրականացվում են հաշվի համալրման, կանխիկացման, անկանխիկ վճարումների և փոխանցումների գործարքներ։</p>
              </div>
            )}
          </div>

          {/* 5. Արտարժույթով արտահայտված գործառնությունների կատարում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('fx')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Արտարժույթով արտահայտված գործառնությունների կատարում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'fx' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'fx' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Արտարժույթով գործարքների դեպքում կատարվում են փոխարկումներ Բանկի կողմից սահմանված փոխարժեքներով։</p>
              </div>
            )}
          </div>

          {/* 6. Վճարային Քարտի առգրավում/բռնագանձում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('confiscation')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Վճարային Քարտի առգրավում/բռնագանձում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'confiscation' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'confiscation' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Սխալ PIN հավաքելու կամ այլ խախտումների դեպքում քարտը կարող է առգրավվել կամ բռնագանձվել Բանկի կողմից։</p>
              </div>
            )}
          </div>

          {/* 7. Վճարային Քարտի բլոկավորում/ապաբլոկավորում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('blocking')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Վճարային Քարտի բլոկավորում/ապաբլոկավորում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'blocking' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'blocking' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Քարտի կորստի կամ գողության դեպքում անհրաժեշտ է անհապաղ բլոկավորել այն զանգահարելով Բանկ կամ EvocaTouch հավելվածի միջոցով։</p>
              </div>
            )}
          </div>

          {/* 8. Վճարային Քարտի վերաթողարկում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('reissue')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Վճարային Քարտի վերաթողարկում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'reissue' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'reissue' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Ժամկետը լրանալիս կամ կորստի դեպքում քարտը կարող է վերաթողարկվել դիմումի համաձայն։</p>
              </div>
            )}
          </div>

          {/* 9. Քարտային գործառնությունների բողոքարկում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('dispute')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Քարտային գործառնությունների բողոքարկում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'dispute' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'dispute' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Քարտապանը կարող է բողոքարկել գործարքները քաղվածքը ստանալուց հետո 30 օրվա ընթացքում։</p>
              </div>
            )}
          </div>

          {/* 10. Քարտային հաշվի վերաբերյալ տեղեկատվության և քաղվածքի տրամադրում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('statement')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Քարտային հաշվի վերաբերյալ տեղեկատվության և քաղվածքի տրամադրում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'statement' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'statement' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Բանկը տրամադրում է քաղվածքներ և տեղեկատվություն հեռախոսազանգերի կամ էլեկտրոնային եղանակով։</p>
              </div>
            )}
          </div>

          {/* 11. Վճարային Քարտի փակում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('closing')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Վճարային Քարտի փակում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'closing' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'closing' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Քարտի փակումն իրականացվում է դիմումի հիման վրա, որից հետո քարտը վերադարձվում է Բանկ։</p>
              </div>
            )}
          </div>

          {/* 12. Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('fatca')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'fatca' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'fatca' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Բանկն իրավասու է պահանջել լրացուցիչ տեղեկատվություն և ինքնահայտարարագրեր FATCA պահանջներին համապատասխան։</p>
              </div>
            )}
          </div>

          {/* 13. Քարտային գործառնությունների մոնիտորինգ և անվտանգություն */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('monitoring')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Քարտային գործառնությունների մոնիտորինգ և անվտանգություն</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'monitoring' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'monitoring' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Բանկն իրականացնում է մոնիտորինգ հնարավոր զեղծարարությունները բացահայտելու և կանխարգելելու համար։</p>
              </div>
            )}
          </div>

          {/* 14. Քարտի թոքենացում և մոբայլ (NFC) վճարումներ */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('nfc')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Քարտի թոքենացում և մոբայլ (NFC) վճարումներ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'nfc' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'nfc' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>Հնարավորություն է տալիս կցել քարտը Apple Pay կամ Google Pay համակարգերին և կատարել անհպում վճարումներ։</p>
              </div>
            )}
          </div>

          {/* 15. Հնարավոր խարդախություններից խուսափելու համար */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('fraud')}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left font-bold text-lg text-gray-900"
            >
              <span>Հնարավոր խարդախություններից խուսափելու համար</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'fraud' ? '▲' : '▼'}</span>
            </button>
            
            {openSection === 'fraud' && (
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-sm text-gray-700 space-y-3 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Մի՛ տեղադրեք Ձեր քարտի տվյալները կասկածելի կայքերում: Օգտվե՛ք https:// գրառումով անվտանգ կայքերից:</li>
                  <li>Մի՛ տրամադրեք այլ անձանց Ձեր անձնական կամ քարտի տվյալները (ներառյալ PIN-կոդը):</li>
                  <li>Երբեք մի՛ պատասխանեք կասկածելի SMS հաղորդագրություններին և հարցերի դեպքում զանգահարեք Բանկի շուրջօրյա կենտրոն (010-605555):</li>
                </ul>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}