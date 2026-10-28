import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// 1. EvocaHero block (Online ebong Mobile Banking)
export function EvocaHero() {
  return (
    <section 
      className="w-full relative font-sans overflow-hidden my-12"
      style={{
        backgroundColor: '#6400dc',
        borderTopLeftRadius: '250px',
        boxSizing: 'border-box',
        minHeight: '560px',
        padding: '90px 0 34px'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex items-center justify-between">
        
        {/* Bam pashe: Devices (Macbook & iPhone) */}
        <div className="relative flex items-center">
          
          {/* Laptop (Macbook) */}
          <div 
            className="relative bg-no-repeat bg-contain bg-center -left-20 -top-5"
            style={{
              backgroundImage: `url('https://www.evoca.am/img/macbook.png')`,
              height: '375px',
              width: '608px',
              marginTop: '14px'
            }}
          >
            <video 
              className="absolute object-cover rounded-[2px]"
              style={{
                top: '9.5%',
                left: '12.8%',
                width: '74.5%',
                height: '77.5%'
              }}
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://www.evoca.am/..." type="video/mp4" />
              Oboshyo ei browser video support kore na.
            </video>
          </div>

          {/* Phone (iPhone) */}
          <div 
            className="absolute -right-34 z-10 bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage: `url('https://www.evoca.am/img/iPhone.png')`,
              height: '316px',
              width: '207px',
              marginTop: '121px'
            }}
          >
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Evoca Mobile Screen" 
              className="absolute object-cover rounded-[20px]"
              style={{
                top: '2.7%',
                left: '5.5%',
                width: '67%',
                height: '95.5%'
              }}
            />
          </div>

        </div>

        {/* Dan pashe: Text, QR Code & App Buttons */}
        <div className="text-white max-w-lg z-10 lg:ml-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight ml-10">
            Օնլայն և մոբայլ բանկինգ
          </h2>
          <p className="text-purple-100 text-sm lg:text-base leading-relaxed mb-6 opacity-90 ml-10">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
          </p>

          <div className="text-xs text-purple-200 mb-3 font-medium ml-10">
            Ներբեռնել հավելվածը՝
          </div>

          <div className="flex items-center gap-4 ml-10">
            <div className="bg-white p-2 rounded-xl shadow-md">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am" 
                alt="QR Code" 
                className="w-20 h-20"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="App Store" 
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// 2. TestimonialsSlider block
const testimonialsData = [
  {
    id: 1,
    quote: 'Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միակ այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին՝ նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:',
    author: 'Սուսաննա Վանյան',
    role: 'Հաճախորդ',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Գերազանց սպասարկում, ընտիր ու հաճելի անձնակազմ: Ազատության մասնաճյուղի Վարչական բաժնից շատ շնորհակալ եմ վարչն ձևակերպելու առանց ավելորդ քայլերից՝ հեշտ, արագ, որակով սպասարկման..',
    author: 'Նունե Գևորգյան',
    role: 'Հաճախորդ',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Դեպի նոր իրականություն, ահա թե ուր ենք մենք շարժվում՝ ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարվա համագործակցելով՝ կարելի է ասել, որ միասին անցել ենք մեծ ճանապարհ..',
    author: 'Արամ Ադարյան',
    role: 'Indigo Branding-ի հիմնադիր',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Լավագույն նորարարական և թվային բանկ՝ լավագույն ծառայություններով և անձնակազմով։',
    author: 'Էլեն Վարդանյան',
    role: 'Հաճախորդ',
    rating: 5,
  },
  {
    id: 5,
    quote: 'Բանկ, որ իր ոճավորված շքեղ միջոցառմամբ ու աշխատանքային ճկունով բանկային ոլորտում հրավիրեց որակ և ճաշակ թելադրեց։ Evocabank-ը առաջին իսկ օրվանից ստեղծեց նորույթ և ժամանակակից։',
    author: 'Կամո Թովմասյան',
    role: 'KAMOBLOG մեդիա հարթակի հիմնադիր, influencer',
    rating: 5,
  },
];

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative px-6 sm:px-12">
        
        {/* Left Decorative Hand and Zigzag Line */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 hidden lg:flex flex-col items-center">
          <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm mb-3 p-2 animate-bounce">
            <img src="https://www.evoca.am/img/reviews/hand1.png" alt="Hand 1" className="w-full h-full object-contain" />
          </div>
          <img src="https://www.evoca.am/img/reviews/z-violet.png" alt="Violet line" className="w-10 h-auto mt-1" />
        </div>

        {/* Right Decorative Hand and Zigzag Line */}
        <div className="absolute right-0 top-1/3 -translate-y-1/2 hidden lg:flex flex-col items-center">
          <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm mb-3 p-2 animate-bounce">
            <img src="https://www.evoca.am/img/reviews/hand2.png" alt="Hand 2" className="w-full h-full object-contain" />
          </div>
          <img src="https://www.evoca.am/img/reviews/z-purple.png" alt="Purple line" className="w-10 h-auto mt-1" />
        </div>

        {/* Main Content Box */}
        <div className="text-center mx-auto max-w-2xl">
          <div className="flex justify-center space-x-1.5 mb-6 text-amber-400 text-2xl sm:text-3xl">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <div className="relative mb-8 min-h-[100px] flex items-center justify-center">
            <span className="absolute -top-4 -left-4 text-purple-600 text-4xl font-serif select-none">“</span>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed px-4">
              {currentTestimonial.quote}
            </p>
            <span className="absolute -bottom-6 -right-4 text-purple-600 text-4xl font-serif select-none">”</span>
          </div>

          <div className="mb-8">
            <h4 className="font-bold text-gray-900 text-base">{currentTestimonial.author}</h4>
            <span className="text-xs text-gray-400 font-medium">{currentTestimonial.role}</span>
          </div>

          <div className="flex justify-center items-center space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full w-3 h-3 ${
                  currentIndex === index ? 'bg-purple-900 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// 3. Main EvocaTouch Component
export default function EvocaTouch() {
  return (
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6">
          Անհատ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">EvocaTOUCH</span>
        </div>

        {/* Text ebong Social Links (Sobcheye Upore) */}
        <div className="flex gap-8 mb-12">
          {/* Social icons */}
          <div className="hidden sm:flex flex-col space-y-3 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">f</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">in</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">✉</a>
          </div>

          <div className="flex-1 space-y-6 text-base text-gray-700 leading-relaxed">
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">EvocaTOUCH</h1>

            <p>
              Շատերին թվում է՝ դժվար ու անիրական է ֆինանսական ոլորտում լինել կրեատիվ, սակայն Evocabank-ին տարիներ շարունակ հաջողվում է գտնել out of box լուծումներ և շուկային ներկայանալ նոր և ժամանակակից պրոդուկտներով[cite: 12]։
            </p>
            <p>
              Այդ գաղափարների շարքից է նոր EvocaTOUCH հավելվածը, որն առանձնանում է ժամանակակից թվային լուծումներով և հնարավորություններով[cite: 12]։
            </p>
            <p>
              EvocaTOUCH հավելվածն անվտանգ է, հարմար և նախատեսված է անմիջապես smartphone-ից մի շարք բանկային ծառայություններից օգտվելու համար[cite: 12]։ Կարևորելով հավելվածի անվտանգ օգտագործումը՝ Բանկն ապահովում է օգտատերերի մասին ինֆորմացիայի և կատարած գործարքների պաշտպանությունը՝ օգտագործելով գաղտնագրման վերջին տեխնոլոգիաները[cite: 12]։
            </p>
            <p>
              EvocaTOUCH հավելվածը կառուցված է այս պահին հայտնի ամենավերջին մոբայլ տեխնոլոգիաներով[cite: 12]։
            </p>
            <p>
              Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 appearance` Dark և Light[cite: 12]։ Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի՝ ամենակարևոր ու շատ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջին են` Քարտեր, Հաշիվներ, Վարկեր, Ավանդեր[cite: 12]։ Օգտատերերը հնարավորություն ունեն ստեղծել Template-ներ, որի շնորհիվ բանկային փոխանցումները կատարվում են ավելի արագ ու հեշտ[cite: 12]։ Հնարավոր է ծանոթանալ Բանկի նորություններին ու ամենաակտուալ պրոդուկտներին՝ թերթվող story-ների միջոցով[cite: 12]։
            </p>
            <p>
              EvocaTOUCH հավելվածը 24/7 հասանելի է իր բոլոր օգտատերերին աշխարհի ցանկացած կետից, ցանկացած ժամի[cite: 12]։
            </p>

            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-3">
              <p className="font-bold text-gray-900">
                Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը ներառում է ամենօրյա բանկային գործընթացները՝ վերացնելով ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը։ Առանց գրանցման և սպասարկման վճարի՝ օգտատերերը կարող են․
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Բացել բանկային հաշիվներ,</li>
                <li>Պատվիրել քարտ կամ բացել թվային քարտ վայրկյանների ընթացքում,</li>
                <li>Ստանալ վարկ,</li>
                <li>Ներդնել ավանդ,</li>
                <li>Կատարել փոխանցումներ հաշիվներին և քարտերին, ինչպես հայաստանյան, այնպես էլ արտերկրյա բանկերին,</li>
                <li>Կատարել բանկային փոխանցումներ և վճարումներ,</li>
                <li>Կատարել կոմունալ վճարումներ,</li>
                <li>Առցանց ստանալ ավտոմեքենաների տուգանքները և իրականացնել վճարումներ մեկ հպումով,</li>
                <li>Կատարել փոխանցումներ կոնտակտային տվյալներով,</li>
                <li>24/7 ուղղել հարցեր նամակի միջոցով։</li>
              </ul>
            </div>

            <p>
              Հավելվածի հիմնական ուժեղ կողմերից մեկն անհատականացված բանկային ծառայության տրամադրումն է։ Հաճախորդակենտրոն մոտեցման շնորհիվ՝ Բանկը հնարավորություն է տալիս օգտատերերին հավելվածը հարմարեցնել իրենց նախասիրություններին և կարիքներին։
            </p>
            <p>
              Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է ակտիվացնել կենսաչափական նույնականացումը՝ օգտագործելով մատնահետքի կամ դեմքի ճանաչման համակարգերը։ Բացի այդ, նոր հավելվածն առաջարկում է արագ և հեշտ ինտեգրում այլ ֆինանսական գործիքների հետ, ինչը թույլ է տալիս օգտատերերին կառավարել իրենց ֆինանսները մեկ հավելվածի միջոցով։
            </p>
            <p>
              EvocaTOUCH-ի միջոցով օգտատերերը կարող են 24/7 հասանելիություն ունենալ իրենց ֆինանսներին, վերահսկել իրենց դրամական միջոցները, արագ ու անվտանգ գործարքներ կատարել աշխարհի ցանկացած կետից, ցանկացած ժամի։
            </p>
            <p className="font-bold text-gray-900">
              EvocaTOUCH-ը պարզապես բանկային հավելված չէ․կարծում ենք, այն ձեզ համար դառնալու է ապրելակերպի մի մաս։
            </p>
          </div>
        </div>

        {/* Documents Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Փաստաթղթեր</h2>
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Հաճախակի բանկային ծառայությունների մատուցման պայմաններ (16.05.2024թ)</span>
            </a>
          </div>
        </div>

      </div>

      {/* EvocaHero Section */}
      <EvocaHero />

      {/* Testimonials Slider */}
      <TestimonialsSlider />

    </div>
  );
}