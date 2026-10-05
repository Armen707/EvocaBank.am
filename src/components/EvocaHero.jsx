import React from 'react';

export default function EvocaHero() {
  return (
    <section 
      className="w-full relative font-sans overflow-hidden"
      style={{
        backgroundColor: '#6400dc',
        borderTopLeftRadius: '250px',
        boxSizing: 'border-box',
        minHeight: '560px',
        padding: '90px 0 34px'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex items-center justify-between">
        
        {/* Ձախ կողմ՝ Սարքեր (Macbook և iPhone) */}
        <div className="relative flex items-center">
          
          {/* Նոթբուք (Macbook) */}
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
              Ձեր բրաուզերը չի աջակցում տեսանյութ։
            </video>
          </div>

          {/* Հեռախոս (iPhone): Երկրորդ URL-ը (iPhone.png) որպես ֆոնային շրջանակ, իսկ առաջին URL-ը որպես էկրանի նկար */}
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

        {/* Աջ կողմ՝ Տեքստեր, QR կոդ և հավելվածների կոճակներ */}
        <div className="text-white max-w-lg z-10 lg:ml-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-29 tracking-tight ml-12">
            Օնլայն և մոբայլ բանկինգ
          </h2>
          <p className="text-purple-100 text-sm lg:text-base leading-relaxed mb-6 opacity-90 ml-12">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
          </p>

          <div className="text-xs text-purple-200 mb-3 font-medium ml-12">
            Ներբեռնել հավելվածը՝
          </div>

          <div className="flex items-center gap-4">
            {/* QR Կոդ */}
            <div className="bg-white p-2 rounded-xl shadow-md ml-12">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am" 
                alt="QR Code" 
                className="w-20 h-20"
              />
            </div>

            {/* App Store / Google Play կոճակներ */}
            <div className="flex flex-col gap-2.5 ">
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