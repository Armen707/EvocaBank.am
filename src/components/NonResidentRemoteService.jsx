import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NonResidentRemoteService() {
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
            to="/non-resident-remote-service" 
            className={`pb-1 transition ${isActive('/non-resident-remote-service') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Հաշիվներ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</span>
        </div>

        {/* Հիմնական բաններ բլոկ */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Բանկ այցելելն այլևս պարտադիր չէ։ Անգամ եթե չեք բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից և ցանկացած պահի։
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png" 
              alt="Non-resident remote service banner" 
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
            <p>
              24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն աշխարհի ցանկացած կետից, փաստաթղթերի անվճար առաքում Ձեր գտնվելու վայր․ բոլոր մանրուքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը, չշեղվեք կարևոր գործերից և, իհարկե, օգտվեք prime սպասարկումից։
            </p>
            <p>
              Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք Ձեր հաշիվը՝ առանց Բանկ այցելելու։
            </p>
            <p className="font-semibold text-gray-900">
              Մանրամասները և քայլ առ քայլ ուղեցույցը՝ ներքևում։
            </p>
          </div>
        </div>

        {/* Անհրաժեշտ տեղեկատվություն (Ակորդեոններ) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
        <div className="space-y-4 mb-12">
          
          {/* 1. Առավելություններ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('advantages')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Առավելություններ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'advantages' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'advantages' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Prime կարգավիճակ Բանկում</strong></li>
                  <li>Բացառիկ արտոնություններ, առաջնահերթ սպասարկում և ժամանակի խնայում</li>
                  <li><strong>Անհատական մենեջեր/Անձնական օգնական</strong></li>
                  <li>24/7 Աջակցություն ֆինանսական ցանկացած հարցում անմիջապես անձնական օգնականի կողմից</li>
                  <li><strong>Հեռավար սպասարկում</strong></li>
                  <li>Ծառայությունների հասանելիություն առցանց՝ աշխարհի ցանկացած կետից</li>
                  <li><strong>Փաստաթղթերի անվճար առաքում</strong></li>
                  <li>Առաքում անմիջապես Ձեր գտնվելու վայր, Ձեզ հարմար պահի՝ արագ և անվճար։</li>
                </ul>
              </div>
            )}
          </div>

          {/* 2. Ֆիզիկական անձանց հաշվի բացման պայմաններ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('fizConditions')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Ֆիզիկական անձանց հաշվի բացման պայմաններ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'fizConditions' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'fizConditions' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Հանդիսանում են ՀՀ-ում գտնվող անշարժ գույքի սեփականատեր և ունեն անշարժ գույքի նկատմամաբ սեփականության իրավունքի գրանցման վկայական</li>
                  <li>Պատրաստ են ներդնել նվազագույնը 6 ամիս ժամկետով և առնվազն 20 000 ԱՄՆ դոլար, 20 000 Եվրո, 1 500 000 ՌԴ ռուբլի և 10 000 000 ՀՀ դրամ գումարի չափով համարժեք ավանդ «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ում</li>
                  <li>ՀՀ-ում գրանցված են որպես անհատ ձեռնարկատեր և ունեն ՀՀ Արդարադատության նախարարության իրավաբանական անձանց պետական ռեգիստրի կողմից տրամադրված գրանցման վկայական</li>
                  <li>Հանդիսանում են ՀՀ-ում գրանցված իրավաբանական անձի մասնակից (բաժնետեր) հիմնավորված համապատասխան փաստաթղթերով</li>
                </ul>
              </div>
            )}
          </div>

          {/* 3. Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('fizDocs')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'fizDocs' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'fizDocs' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Անձնագիր</li>
                  <li>Միջազգային անձնագիր</li>
                  <li>Եկամուտների ծագման աղբյուրը (ֆիզիկական անձի նախորդ տարվա հարկային հայտարարագիր, անշարժ գույքի, բաժնետոմսերի կամ արժեքավոր թղթերի վաճառքի կամ վարձակալության պայմանագիր)</li>
                </ul>
              </div>
            )}
          </div>

          {/* 4. Իրավաբանական անձանց փաստաթղթերի ցանկ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('urDocs')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Իրավաբանական անձանց փաստաթղթերի ցանկ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'urDocs' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'urDocs' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Կանոնադրություն (ոչ ռեզիդենտների դեպքում` կանոնադրություն կամ դրան փոխարինող այլ փաստաթուղթ)</li>
                  <li>Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում` տվյալ երկրի պետական գրանցման մարմնի կողմից տրված վկայական և հարկային մարմիններում գրանցված փաստաթուղթ` տրված գրանցման երկրի համապատասխան մարմնի կողմից)</li>
                  <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե այն բացակայում է պետական ռեգիստրի վկայականում</li>
                  <li>Գործադիր մարմնի ղեկավարի, գլխավոր հաշվապահի անձնագրերը կամ անձը հաստատող փաստաթղթերը, ինչպես նաև քաղվածքներ պաշտոններում նշանակվելու հրամաններից, եթե ղեկավարի մասին տեղեկությունը բացակայում է պետական գրանցամատյանում գրանցման վկայականում (ոչ ռեզիդենտների դեպքում՝ գործադիր մարմնի ղեկավարի անձնագիր(ներ)ը և իրավասու մարմնի նշանակման մասին որոշումներով տրված պաշտոնները)</li>
                  <li>Հաշվետերերի անձնագրեր կամ նույնականացման քարտեր</li>
                  <li><strong>Շահառուների համար անհրաժեշտ է՝</strong>
                    <ul className="list-circle list-inside ml-4 mt-2 space-y-1">
                      <li>Եթե շահառուն ֆիզիկական անձ է, անձնագրի կամ նույնականացման քարտի պատճենները</li>
                      <li>Եթե շահառուն իրավաբանական անձ է, տվյալ փաստաթղթերի ցանկի 2-րդ, 3-րդ և 4-րդ կետերով նախատեսված փաստաթղթերի (ոչ ռեզիդենտների դեպքում՝ միայն 2-րդ և 3-րդ կետերով նախատեսված փաստաթղթերի) պատճենները տվյալ իրավաբանական անձի կողմից</li>
                      <li>Ընկերության ֆինանսական հաշվետվություններ` վերջին մեկ տարվա կտրվածքով, աուդիտորական եզրակացություն</li>
                      <li>Լիցենզիա, եթե ընկերության գործունեությունը պահանջում է։</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* 5. Սակագներ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('tariffs')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Սակագներ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'tariffs' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'tariffs' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Ֆիզիկական անձանց համար</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Հաշվի բացում՝ 50,000 դրամ</li>
                    <li>Տարեկան սպասարկում՝ 250,000 դրամ</li>
                    <li>Փակման վճար՝ 0 դրամ</li>
                    <li>Դրամական միջոցների անկանխիկ մուտքագրում հաճախորդի հաշվին` 0.5%</li>
                    <li>Հաճախորդների փոխանցումներ` 0.5%</li>
                    <li>Հաշվի տեսակներ՝ USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <p className="font-bold text-gray-900 mb-2">Իրավաբանական անձանց համար</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Հաշվի բացում՝ 100,000 դրամ</li>
                    <li>Տարեկան սպասարկում՝ 500,000 ՀՀ դրամ</li>
                    <li>Փակման վճար՝ 0 դրամ</li>
                    <li>Դրամական միջոցների անկանխիկ մուտքագրում հաճախորդի հաշվին` 0.5%</li>
                    <li>Հաճախորդների փոխանցումներ` 0.5%</li>
                    <li>Հաշվի տեսակներ՝ USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 6. Հաշվի բացման փուլեր */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('steps')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Հաշվի բացման փուլեր</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'steps' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'steps' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-4">
                <div>
                  <p className="font-bold text-gray-900">Փաստաթղթերի ուղարկում</p>
                  <p>Ուղարկեք անհրաժեշտ փաստաթղթերը հետևյալ էլ․ հասցեին՝ primeonline@evoca.am</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Առցանց նույնականացում տեսազանգով</p>
                  <p>Փաստաթղթերի ամբողջական փաթեթը ստանալուց հետո մենք կտեղեկացնենք՝ երբ և ինչպես է տեղի ունենալու անձը նույնականացնելու տեսազանգը: Տեսազանգից առաջ կարող են պահանջվել նաև այլ փաստաթղթեր։ Բանկի դրական դիրքորոշումից հետո անհրաժեշտ է այլ բանկում գործող հաշվից առնվազն 50 ԱՄՆ դոլար փոխանցում կատարել Evocabank-ում Ձեր անունով բացված հաշվին։</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Ակտիվացում</p>
                  <p>Գումարը ստանալուց հետո նոր հիշատակված հաշիվը կակտիվանա, իսկ փոխանցված գումարը հասանելի կդառնա այդ հաշվի վրա: Փոխանցման մուտքագրման մասին Դուք տեղեկություն կստանաք էլեկտրոնային եղանակով։</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Կապ մեզ հետ</p>
                  <p>Ցանկացած հարցի դեպքում կարող եք գրել օնլայն primeonline@evoca.am հասցեին կամ զանգահարել +374 33 625555 հեռախոսահամարին։</p>
                </div>
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
          </div>
        </div>

      </div>
    </div>
  );
}