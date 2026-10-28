import React from 'react';

export default function EvocaIssuanceAndService({ setActiveTab }) {
  return (
    <div className="bg-white min-h-screen text-gray-800" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Top Header Nav */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <button 
            onClick={() => setActiveTab('cards')} 
            className="pb-1 cursor-pointer opacity-80 hover:opacity-100 transition"
          >
            Քարտեր
          </button>
          <button 
            onClick={() => setActiveTab('issuance')} 
            className="pb-1 cursor-pointer border-b-2 border-white font-bold transition"
          >
            Քարտերի տրամադրում և սպասարկում
          </button>
          <button 
            onClick={() => setActiveTab('social')} 
            className="pb-1 cursor-pointer opacity-80 hover:opacity-100 transition"
          >
            Սոցիալական ապահովության վճարային քարտեր
          </button>
          <button 
            onClick={() => setActiveTab('benefits')} 
            className="pb-1 cursor-pointer opacity-80 hover:opacity-100 transition"
          >
            Evoca Benefits
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="text-sm text-gray-400 mb-2">
          Անհատ <span className="mx-1">&gt;</span> Քարտեր <span className="mx-1">&gt;</span> <span className="text-gray-600 font-semibold">Քարտերի տրամադրում և սպասարկում</span>
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 mb-6">Քարտերի տրամադրում և սպասարկում</h1>

        {/* Content Box */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <p className="text-base text-gray-600 leading-relaxed">
            Evocabank-ն առաջարկում է բանկային քարտերի արագ և հարմարավետ տրամադրման ու սպասարկման պայմաններ: Դուք կարող եք պատվիրել քարտ առցանց կամ այցելել բանկի մասնաճյուղեր:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ color: '#6400dc' }}>Արագ տրամադրում</h3>
              <p className="text-sm text-gray-600">Պատվիրեք քարտը EvocaTOUCH հավելվածով և ստացեք այն կարճ ժամանակում:</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ color: '#6400dc' }}>Անվտանգ սպասարկում</h3>
              <p className="text-sm text-gray-600">24/7 հասանելիություն և բարձր անվտանգության ստանդարտներ ձեր միջոցների համար:</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}