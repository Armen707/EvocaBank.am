import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-8 pb-4 px-4 sm:px-6 lg:px-8 font-sans text-gray-800 w-full m-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-6">
        
        {/* Column 1: Logo & Address */}
        <div className="lg:col-span-1 space-y-2">
          <div className="text-3xl font-black tracking-wider text-gray-900 flex items-center">
            evoca<span className="text-purple-700">BANK</span>
          </div>
          <div className="space-y-[6px] text-sm text-gray-700 leading-relaxed pt-1">
            <p>ք. Երևան, 0010,</p>
            <p>Հանրապետության 44/2</p>
          </div>
          <div className="space-y-[6px] text-sm text-gray-700 leading-relaxed pt-1">
            <p className="font-bold text-gray-900">Evocabank-ը վերահսկվում է</p>
            <p className="font-bold text-gray-900">Հայաստանի Հանրապետության</p>
            <p className="font-bold text-gray-900">Կենտրոնական բանկի կողմից</p>
          </div>
          <p className="text-xs text-gray-500 pt-1 font-medium">
            1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
          </p>
        </div>

        {/* Column 2: Բանկի մասին */}
        <div className="space-y-2">
          <h4 className="font-bold text-gray-900 text-base mb-2">Բանկի մասին</h4>
          <ul className="space-y-[6px] text-sm text-gray-700 font-medium">
            <li><a href="#about" className="hover:text-purple-700 transition-colors">Մեր մասին</a></li>
            <li><a href="#management" className="hover:text-purple-700 transition-colors">Ղեկավարություն</a></li>
            <li><a href="#shareholders" className="hover:text-purple-700 transition-colors">Բաժնետերեր</a></li>
            <li><a href="#reports" className="hover:text-purple-700 transition-colors">Հաշվետվություններ</a></li>
            <li><a href="#acts" className="hover:text-purple-700 transition-colors">Իրավական ակտեր</a></li>
            <li><a href="#tariffs" className="hover:text-purple-700 transition-colors">Սակագներ</a></li>
            <li><a href="#property" className="hover:text-purple-700 transition-colors">Օտարվող գույք</a></li>
            <li><a href="#builders" className="hover:text-purple-700 transition-colors">Կառուցապատողներ</a></li>
            <li><a href="#partners" className="hover:text-purple-700 transition-colors">Գործընկեր ավտոսրահներ</a></li>
            <li><a href="#archive" className="hover:text-purple-700 transition-colors">Սակագների արխիվ</a></li>
          </ul>
        </div>

        {/* Column 3: Օգտակար հղումներ */}
        <div className="space-y-2">
          <h4 className="font-bold text-gray-900 text-base mb-2">Օգտակար հղումներ</h4>
          <ul className="space-y-[6px] text-sm text-gray-700 font-medium">
            <li><a href="#rights" className="hover:text-purple-700 transition-colors">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
            <li><a href="#criteria" className="hover:text-purple-700 transition-colors">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
            <li><a href="#regulation" className="hover:text-purple-700 transition-colors">Կարգավորում</a></li>
            <li><a href="#privacy" className="hover:text-purple-700 transition-colors">Գաղտնիության քաղաքականություն</a></li>
            <li><a href="#ombudsman" className="hover:text-purple-700 transition-colors">Ֆին. հաշտարար</a></li>
            <li><a href="#aml" className="hover:text-purple-700 transition-colors">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
            <li><a href="#debtors" className="hover:text-purple-700 transition-colors">Հղումներ Բանկի քարտապանների համար</a></li>
          </ul>
        </div>

        {/* Column 4: Այլ հղումներ */}
        <div className="space-y-2">
          <h4 className="font-bold text-gray-900 text-base mb-2">Այլ հղումներ</h4>
          <ul className="space-y-[6px] text-sm text-gray-700 font-medium">
            <li><a href="#evoconline" className="hover:text-purple-700 transition-colors">EvocaONLINE</a></li>
            <li><a href="#pahatun" className="hover:text-purple-700 transition-colors">Պահատուփեր</a></li>
            <li><a href="#faq" className="hover:text-purple-700 transition-colors">Հաճախ տրվող հարցեր</a></li>
            <li><a href="#ads" className="hover:text-purple-700 transition-colors">Հայտարարություններ</a></li>
            <li><a href="#dibrary" className="hover:text-purple-700 transition-colors">Dibrary</a></li>
            <li><a href="#booklets" className="hover:text-purple-700 transition-colors">Բուլլետիններ</a></li>
            <li><a href="#contact" className="hover:text-purple-700 transition-colors">Հետադարձ կապ</a></li>
            <li><a href="#map" className="hover:text-purple-700 transition-colors">Կայքի քարտեզ</a></li>
          </ul>
        </div>

        {/* Column 5: Socials, Contact & Apps */}
        <div className="space-y-3">
          <div className="flex space-x-2.5 text-gray-700">
            <a href="#fb" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition-colors text-sm font-bold">f</a>
            <a href="#insta" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition-colors text-sm font-bold">ig</a>
            <a href="#yt" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition-colors text-sm font-bold">▶</a>
            <a href="#in" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition-colors text-sm font-bold">in</a>
          </div>

          <div className="flex flex-col space-y-2 pt-1">
            <div className="bg-black text-white px-3 py-1.5 rounded-xl flex items-center justify-center text-sm font-semibold cursor-pointer w-32">
              App Store
            </div>
            <div className="bg-black text-white px-3 py-1.5 rounded-xl flex items-center justify-center text-sm font-semibold cursor-pointer w-32">
              Google Play
            </div>
          </div>

          <div className="space-y-[6px] pt-1">
            <p className="text-sm text-purple-700 font-bold cursor-pointer hover:underline">
              Բանկի հասցեները և աշխատաժամերը
            </p>
            <p className="text-sm text-purple-700 font-bold cursor-pointer hover:underline">
              Կապ մեզ հետ
            </p>
            <p className="text-base font-extrabold text-gray-900 pt-0.5">+374 10 655555</p>
            <p className="text-sm font-extrabold text-gray-900">8444</p>
          </div>
        </div>

      </div>

      {/* Footer Bottom Note */}
      <div className="max-w-7xl mx-auto pt-3 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs text-gray-500 gap-3 mb-0">
        <p className="max-w-4xl leading-snug">
          Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության և արժանահավատության համար:
        </p>
        <div className="flex items-center space-x-2 opacity-80 self-center lg:self-auto shrink-0">
          <span className="text-xs border border-gray-300 px-1.5 py-0.5 rounded font-mono font-bold">arca</span>
          <span className="text-xs border border-gray-300 px-1.5 py-0.5 rounded font-mono font-bold">VISA</span>
          <span className="text-xs border border-gray-300 px-1.5 py-0.5 rounded font-mono font-bold">MC</span>
        </div>
      </div>
    </footer>
  );
}