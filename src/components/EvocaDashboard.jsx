import React from 'react';

export default function EvocaDashboard() {
  return (
    <div className="min-h-screen font-sans">
      
      {/* Մանուշակագույն մեծ բլոկը */}
      <div 
        className="relative w-full overflow-hidden text-white"
        style={{
          backgroundColor: '#6400dc',
          borderTopLeftRadius: '390px',
          minHeight: '760px',
          padding: '80px 60px 100px 60px',
          width: '100%'
        }}
      >
        
        {/* Ֆոնային անիմացիոն մասնիկներ */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-32 w-4 h-4 bg-yellow-300 rounded-sm animate-particle-float opacity-90"></div>
          <div className="absolute top-12 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-particle-float opacity-80"></div>
          <div className="absolute bottom-10 left-10 w-5 h-5 bg-purple-300 rotate-45 animate-particle-float opacity-70"></div>
        </div>

        {/* Վերնագիրը */}
        <div className="mb-6 text-left md:ml-80">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md">
            Լավագույնը Evocabank-ից
          </h1>
        </div>

        {/* Հիմնական հատված */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto relative">
          
          {/* Ձախ կողմ՝ Ավելի մեծացված արձանը */}
          <div className="flex-shrink-0 z-20 flex justify-center lg:justify-start -mr-16 lg:-mr-24">
            <img 
              src="https://www.evoca.am/img/statue-1.png" 
              alt="Evocabank Statue" 
              className="w-80 md:w-[440px] h-auto animate-statue-float drop-shadow-2xl"
            />
          </div>

          {/* Աջ կողմ՝ Քարտերի ցանցը (իջեցված է ներքև 60-90px և ձախից հեռավորությունը փոքրացված) */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 w-full z-10 mt-12 md:mt-20 lg:pl-4">
            
            {/* Քարտ 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-800 border border-purple-100 hover:shadow-2xl transition-all">
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
                Թվային քարտեր
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Evoca Digital քարտ</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:
              </p>
            </div>

            {/* Քարտ 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-800 border border-purple-100 hover:shadow-2xl transition-all">
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
                Նվեր քարտեր
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Evoca Gift Card</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոսը: Քարտը հարմար է բոլոր առիթների համար:
              </p>
            </div>

            {/* Քարտ 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-800 border border-purple-100 hover:shadow-2xl transition-all">
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
                Նոր հավելված
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">EvocaTOUCH 2</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:
              </p>
            </div>

            {/* Քարտ 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-800 border border-purple-100 hover:shadow-2xl transition-all">
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
                Օնլայն վճարումներ
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Արագ online վճարումներ</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով պարզ և արագ: Այն հասանելի է 24/7:
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}