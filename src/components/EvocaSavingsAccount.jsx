import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EvocaSavingsAccount() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);

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
            to="/savings-issuance" 
            className={`pb-1 transition ${isActive('/savings-issuance') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Հաշիվների բացում և սպասարկում
          </Link>
          <Link 
            to="/savings-tariffs" 
            className={`pb-1 transition ${isActive('/savings-tariffs') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Առավելագույն մետաղական հաշիվներ
          </Link>
          <Link 
            to="/savings-features" 
            className={`pb-1 transition ${isActive('/savings-features') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Ոչ ռեզիդենտ հաճախորդների հեռավոր սպասարկում
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-base text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Հաշիվներ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Evoca խնայողական հաշիվ</span>
        </div>

        {/* Հիմնական բաններ բլոկ */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 py-8">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Evoca խնայողական հաշիվ
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Ստացիր եկամուտ՝ պարզապես գումարդ պահելով խնայողական հաշվիդ վրա։
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17906902726456/780x585.png" 
              alt="Evoca savings account" 
              className="w-full max-w-md h-auto object-contain"
              onError={(e) => {
                e.target.src = "https://www.evoca.am/images-cache/menu/1/17218011250749/780x585.jpg";
              }}
            />
          </div>
        </div>

        {/* Տեղեկատվական նկարագրություն */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
          <p>
            Գումարդ ավելանա՞, թե՞ միշտ հասանելի մնա։ Այլևս պետք չէ ընտրել։ Evoca խնայողական հաշվի միջոցով կարող ես միաժամանակ և՛ խնայել, և՛ ավելացնել գումարդ, և՛ անհրաժեշտ պահին ունենալ դրա հասանելիությունը։
          </p>
          <p>
            Պահիր գումարդ Evoca խնայողական հաշվին և ստացիր մինչև 5.09% տարեկան տոկոսային եկամտաբերություն։ Իսկ երբ գումարդ անհրաժեշտ լինի, պարզապես փոխանցիր այն Evocabank-ում գործող քո մեկ այլ հաշվին։
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-6">Ինչո՞ւ Evoca խնայողական հաշիվ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Գումարի աճ</h3>
              <p className="text-base text-gray-600">Հաշվիդ դրական մնացորդի նկատմամբ տոկոսները հաշվարկվում են ամեն օր։</p>
            </div>
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Միշտ հասանելիություն</h3>
              <p className="text-base text-gray-600">Այս պահին հարկավո՞ր է գումարդ։ Փոխանցիր այն Evocabank-ում գործող քո այլ հաշվին և օգտագործիր։</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Ոչ մի սահմանափակում</h3>
              <p className="text-base text-gray-600">Այսօր՝ մի փոքր քիչ, հաջորդ ամիս՝ ավելի շատ։ Չկա պարտադիր ժամկետ կամ համալրման նվազագույն գումար։</p>
            </div>
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Նախընտրելի արժույթ</h3>
              <p className="text-base text-gray-600">Բացիր խնայողական հաշիվ ՀՀ դրամով, ԱՄՆ դոլարով կամ եվրոյով։</p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Ինչո՞ւ սկսել գումար կուտակել հենց այսօր։</h2>
          <p className="font-semibold text-gray-800">Քանի որ՝</p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Հաշվի բացումն ու սպասարկումն անվճար են,</li>
            <li>Բացման և համալրման նվազագույն գումար չկա,</li>
            <li>Գործարքի նվազագույն չափ չկա,</li>
            <li>Խնայելու պարտադիր ժամկետ չկա,</li>
            <li>Հաշիվը կարող ես համալրել ցանկացած պահի՝ Evocabank-ում գործող քո այլ հաշվից։</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Ստացիր մինչև 5.09% տարեկան տոկոսային եկամտաբերություն</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Եկամտաբերությունը կախված է հաշվիդ մնացորդից և ընտրված արժույթից։</li>
            <li>Եթե օրվա վերջում հաշվիդ մնացորդը համապատասխանում է տվյալ արժույթի համար սահմանված նվազագույն շեմին, այդ օրվա համար հաշվարկվում է տոկոսագումար։ Նվազագույն շեմերին և այլ պայմաններին կարող ես ծանոթանալ այստեղ։</li>
            <li>Տոկոսները հաշվարկվում են ամեն օր, իսկ կուտակված տոկոսագումարը փոխանցվում է հաշվիդ յուրաքանչյուր եռամսյակի ավարտից հետո՝ հաջորդ ամսվա 1-ին օրը։</li>
          </ul>

          <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl my-6 text-base">
            <p className="leading-relaxed">
              Մեր և Ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և Ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ այստեղ:
            </p>
          </div>
        </div>

        {/* Ակորդեոններ (Անհրաժեշտ տեղեկատվություն) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
        <div className="space-y-4 mb-12">
          
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('docs')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Անհրաժեշտ փաստաթղթեր</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'docs' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'docs' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-2">
                <ul className="list-disc list-inside space-y-2">
                  <li>Հաշվի բացման էլեկտրոնային հայտ/դիմում հեռակառավարման համակարգերի միջոցով:</li>
                  <li>Մեր պահանջով այլ փաստաթղթեր:</li>
                </ul>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('limits')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Երաշխավորված ավանդների սահմանաչափերը</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'limits' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'limits' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է Ավանդների հատուցումը երաշխավորող հիմնադրամը: Եթե դուք անվճարունակ բանկում ունեք՝</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Միայն դրամային ավանդ</strong>՝ ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</li>
                  <li><strong>Միայն արտարժութային ավանդ</strong>՝ ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</li>
                  <li><strong>Դրամային ու արտարժութային ավանդներ</strong>, և դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:</li>
                  <li><strong>Դրամային ու արտարժութային բանկային ավանդներ</strong>, և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով:</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2"><strong>Ծանոթագրություն.</strong> Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ: Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում` առավելագույն սահմանաչափով։</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('service')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Խնայողական հաշիվների սպասարկում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'service' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'service' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>Ձեր հաշիվների սպասարկումը կարգավորվում է ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, մեր և ձեր միջև կնքված խնայողական հաշվի սպասարկման պայմանագրով։ Հաշիվների սպասարկումն իրականացնում են մեր գլխամասային գրասենյակը և մասնաճյուղերը։ Հաշիվները սպասարկում ենք մեր սահմանած գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման։ Ձեր հաշիվներով իրականացվող գործառնությունների դիմաց գանձում ենք համապատասխան միջնորդավճարներ՝ մեր Սակագների համաձայն։ Հաշիվների վարման սպասարկումն անվճար է։ Հաշվի չնվազող մնացորդի պահանջ սահմանված չէ։</p>
                <p><strong>Ձեր խնայողական հաշիվներով կարող եք կատարել հետևյալ գործառնությունները՝</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Հաշվի անկանխիկ համալրում՝ փոխանցում միայն Էվոկաբանկ ԲԲԸ-ում գործող ձեր այլ բանկային հաշիվներից,</li>
                  <li>Հաշվից անկանխիկ ելքագրում՝ փոխանցում միայն դեպի Էվոկաբանկ ԲԲԸ-ում գործող ձեր այլ բանկային հաշիվներ,</li>
                  <li>Բանկային ձեր բոլոր հաշիվներով կատարել արտարժույթի փոխարկում։</li>
                </ul>
                <p>Կարող եք նաև հեռակառավարել ձեր հաշիվները բանկային հեռակառավարման (online) համակարգերի միջոցով։</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('closing')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Խնայողական հաշվի պայմանագրի լուծման պայմաններ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'closing' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'closing' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-2">
                <p>Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել խնայողական հաշվի սպասարկման պայմանագիրը և ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը: Այս դեպքերում հաշվին եղած դրամական միջոցների մնացորդը ձեր ցուցումով փոխանցում ենք Էվոկաբանկ ԲԲԸ-ում գործող ձեր այլ հաշվի՝ համապատասխան գրավոր դիմումը ստանալուց ոչ ուշ, քան 7 (յոթ) օրվա ընթացքում:</p>
                <p>Կարող ենք անվիճելի կարգով դադարեցնել խնայողական հաշվի սպասարկման պայմանագիրը, եթե լինելով ֆիզիկական անձ հաճախորդ՝ վեց ամսվա ընթացքում ձեր խնայողական հաշվով գործառնություններ չեք կատարել, իսկ մնացորդը զրոյական է:</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('opening')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Խնայողական հաշվի բացման ընթացակարգը</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'opening' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'opening' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-2">
                <ul className="list-disc list-inside space-y-2">
                  <li>Հաշիվը կարող եք բացել դրամով, դոլարով և եվրոյով:</li>
                  <li>Խնայողական հաշիվները կարող եք բացել բացառապես հեռակառավարման համակարգերի միջոցով:</li>
                  <li>Ներկայացված փաստաթղթերի իսկությունն ու վավերականությունը ստուգելուց հետո ձեզ հետ կնքում ենք «Խնայողական հաշվի բացման հայտ-պայմանագիրը» և հաշիվ բացում 1 (մեկ) աշխատանքային օրվա ընթացքում:</li>
                </ul>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('other')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Հաշիվների սպասարկմանն առնչվող այլ դրույթներ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'other' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'other' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-2">
                <p>Հաշվետիրոջ ձեր իրավունքները կարող են սահմանափակվել դատարանի վճռով, դատական ակտերի հարկադիր կատարումն ապահովող մարմինների կամ հարկային մարմինների կողմից ներկայացված հայտի հիման վրա:</p>
                <p>Երաշխավորում ենք հաշվի, հաշվով գործառնությունների և ձեր մասին տեղեկությունների գաղտնիությունը:</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('notice')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Ուշադրություն</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'notice' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'notice' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-4">
                <p>Խնայողական հաշիվների սպասարկման պայմաններին կարող եք ծանոթանալ Խնայողական հաշիվներ ենթաբաժնում:</p>
                <p>Ձեր հաշվում առկա միջոցների նկատմամբ տոկոսագումարները հաշվարկվում են <strong>ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ</strong> հիման վրա: Իսկ <strong>ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ</strong> ցույց է տալիս, թե որքան եկամուտ կստանայիք Դուք, եթե Ձեր ավանդի դիմաց ստացված տոկոսագումարները վերաներդնեիք ավանդի տեսքով:</p>
                <p><strong>Տոկոսագումարների հաշվարկման բանաձևն է.</strong></p>
                <p>$APY = (1 + \\frac{r}{n})^n - 1$ կամ ընդհանուր բանաձևերն ըստ Կանոնակարգ 8/02-ի:</p>
                <p>Բանկն իրավունք ունի միակողմանի փոփոխել սույն պայմաններով սահմանված տարեկան անվանական տոկոսադրույքները՝ փոփոխությունն ուժի մեջ մտնելուց առնվազն 15 օր առաջ հաճախորդին տեղեկացնելով։</p>
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
              <span>Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Խնայողական հաշվի պայմաններ և սակագներ անվճարության 01.10.2026թ.</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}