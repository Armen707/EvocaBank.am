import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PaymentSystems() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const systems = [
    {
      name: "MONEYTUN",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png",
      text: "MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակը Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովումն է՝ հիմնված տասնամյակների փորձի վրա: Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը։",
      phone: "+374 10 27 72 85",
      schedule: [
        "Երկուշաբթի-ուրբաթ 10:00-17:30",
        "Շաբաթ 10:00-14:00",
        "Կիրակի 10:00-13:00"
      ]
    },
    {
      name: "RIA",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png",
      text: "Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով։ Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանած սակագների։",
      phone: "+374 94 23 59 00",
      schedule: [
        "երկուշաբթի-ուրբաթ, 09:00-18:00 (Երևանի ժամանակով)",
        "Հաճախորդների աջակցության լեզուներ՝ ռուսերեն, անգլերեն"
      ]
    },
    {
      name: "UBPAY",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png",
      text: "UBPay – ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար: Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ։",
      phone: "+374 43 00 49 35"
    },
    {
      name: "INTELEXPRESS",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png",
      text: "Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, եվրոպական երկրներ և այլն)։ Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանած սակագների։",
      phone: "+995 32 2 49 25 25"
    },
    {
      name: "STAK",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png",
      text: "«ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակը ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է։\n\nՀամակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և, ինչպես նաև եվրոյով։",
      details: "Գործում է 170 երկրի ավելի քան 125,000 կետերում: Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար: Միջնորդավճարը գանձվում է ըստ MoneyGram-ի սահմանած սանդղակի."
    },
    {
      name: "MoneyGram",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png",
      text: "MoneyGram դրամական փոխանցումների համակարգ։",
      phone: "1-800-926-9400"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Վերևի Մանուշակագույն Ենթամենյու */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <Link 
            to="/transfers/money-transfers" 
            className={`pb-1 transition ${isActive('/transfers/money-transfers') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Դրամական փոխանցումներ
          </Link>
          <Link 
            to="/transfers/payment-systems" 
            className={`pb-1 transition ${isActive('/transfers/payment-systems') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Վճարային համակարգեր
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Փոխանցումներ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Վճարային համակարգեր</span>
        </div>

        <h1 className="text-4xl font-black text-gray-900 mb-10 tracking-tight">
          Վճարային համակարգեր
        </h1>

        {/* Քարտերի Ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((sys, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Մեծացրած լոգոյի բլոկ */}
                <div className="h-28 flex items-center justify-center mb-6 bg-gray-50/50 rounded-2xl p-4 border border-gray-50 group-hover:border-purple-100 transition">
                  <img src={sys.logo} alt={sys.name} className="max-h-20 max-w-[200px] object-contain" />
                </div>
                
                {/* Հիմնական տեքստ */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 whitespace-pre-line">
                  {sys.text}
                </p>

                {/* Լրացուցիչ մանրամասներ */}
                {sys.details && (
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {sys.details}
                  </p>
                )}
              </div>

              {/* Ստորին կոնտակտային տվյալներ */}
              <div className="border-t border-gray-100 pt-5 mt-auto">
                {sys.phone && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Հաճախորդների սպասարկում</p>
                    <a href={`tel:${sys.phone}`} className="text-[#6400dc] font-bold text-lg hover:underline inline-block">
                      {sys.phone}
                    </a>
                  </div>
                )}
                
                {sys.schedule && (
                  <div className="mt-3 text-sm text-gray-600 space-y-1 bg-gray-50 p-3 rounded-xl">
                    <p className="font-bold text-gray-700 text-xs uppercase tracking-wider mb-1">Աշխատանքային գրաֆիկ՝</p>
                    {sys.schedule.map((item, idx) => (
                      <p key={idx} className="text-xs text-gray-600 leading-normal">{item}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}