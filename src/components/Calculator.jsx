import React, { useState } from 'react';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState('loan'); // 'loan' կամ 'deposit'

  // Վարկային հաշվիչի վիճակը (state)
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanRate, setLoanRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [repaymentType, setRepaymentType] = useState('annuity'); // 'annuity' կամ 'differential'
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ավանդային հաշվիչի վիճակը (state)
  const [depositAmount, setDepositAmount] = useState(0);
  const [depositRate, setDepositRate] = useState(0);
  const [depositTerm, setDepositTerm] = useState(0);

  return (
    <div className="w-full py-16 px-4 flex justify-center items-center font-sans mt-30">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-8 border border-gray-100">
        
        {/* Վերնագիր */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Հաշվիչներ</h2>

        {/* Ներդիրներ (Tabs) */}
        <div className="flex gap-8 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('loan')}
            className={`pb-3 font-semibold text-sm transition-all relative ${
              activeTab === 'loan' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Վարկ
          </button>
          <button
            onClick={() => setActiveTab('deposit')}
            className={`pb-3 font-semibold text-sm transition-all relative ${
              activeTab === 'deposit' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Ավանդ
          </button>
        </div>

        {/* ----------------- ՎԱՐԿԱՅԻՆ ՀԱՇՎԻՉ ----------------- */}
        {activeTab === 'loan' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Վարկի գումար */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 font-medium">Վարկի գումար</span>
                  <span className="text-lg font-bold text-gray-900">
                    {loanAmount.toLocaleString()} <span className="text-xs font-normal text-gray-500">դրամ</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-purple-700 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>0</span>
                  <span>50 000 000</span>
                </div>
              </div>

              {/* Վարկի ժամկետ */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 font-medium">Ժամկետ</span>
                  <span className="text-lg font-bold text-gray-900">
                    {loanTerm} <span className="text-xs font-normal text-gray-500">ամիս</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="1200"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full accent-purple-700 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>1 ամիս</span>
                  <span>1200 ամիս</span>
                </div>
              </div>

              {/* Տարեկան տոկոսադրույք */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 font-medium">Տարեկան տոկոսադրույք</span>
                  <span className="text-lg font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                    {loanRate} %
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="36"
                  value={loanRate}
                  onChange={(e) => setLoanRate(Number(e.target.value))}
                  className="w-full accent-purple-700 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>1 %</span>
                  <span>36 %</span>
                </div>
              </div>

              {/* Մարման տեսակ */}
              <div className="flex flex-col justify-center">
                <span className="text-xs text-gray-500 font-medium mb-3">Մարման ձև</span>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-800">
                    <input
                      type="radio"
                      name="repayment"
                      checked={repaymentType === 'annuity'}
                      onChange={() => setRepaymentType('annuity')}
                      className="accent-purple-700 w-4 h-4"
                    />
                     Զսպանակաձև
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-800">
                    <input
                      type="radio"
                      name="repayment"
                      checked={repaymentType === 'differential'}
                      onChange={() => setRepaymentType('differential')}
                      className="accent-purple-700 w-4 h-4"
                    />
                    Անուիտետ
                  </label>
                </div>
              </div>

            </div>

            {/* Ստորին հատված և Հաշվել կոճակ */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-100 gap-4">
              <p className="text-[11px] text-gray-400 max-w-lg leading-relaxed">
                Բոլոր հաշվարկները կրում են մոտավոր բույն և չեն հանդիսանում հրապարակային առաջարկ:
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer"
              >
                Հաշվել
              </button>
            </div>
          </div>
        )}

        {/* ----------------- ԱՎԱՆԴԱՅԻՆ ՀԱՇՎԻՉ ----------------- */}
        {activeTab === 'deposit' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Ավանդի գումար */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 font-medium">Ավանդի գումար</span>
                  <span className="text-lg font-bold text-gray-900">
                    {depositAmount.toLocaleString()} <span className="text-xs font-normal text-gray-500">դրամ</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000000"
                  step="10000"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(Number(e.target.value))}
                  className="w-full accent-purple-700 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>0</span>
                  <span>50 000 000</span>
                </div>
              </div>

              {/* Ավանդի ժամկետ */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 font-medium">Ավանդի ժամկետ</span>
                  <span className="text-lg font-bold text-gray-900">
                    {depositTerm} <span className="text-xs font-normal text-gray-500">օր</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="1095"
                  value={depositTerm}
                  onChange={(e) => setDepositTerm(Number(e.target.value))}
                  className="w-full accent-purple-700 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>1 օր</span>
                  <span>1095 օր</span>
                </div>
              </div>

              {/* Տոկոսադրույք */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 font-medium">Տարեկան տոկոսադրույք</span>
                  <span className="text-lg font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                    {depositRate} %
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="36"
                  value={depositRate}
                  onChange={(e) => setDepositRate(Number(e.target.value))}
                  className="w-full accent-purple-700 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>1 %</span>
                  <span>36 %</span>
                </div>
              </div>

            </div>

            {/* Ստորին հատված */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <p className="text-[11px] text-gray-400 max-w-lg leading-relaxed">
                Բոլոր հաշվարկները կրում են մոտավոր բույն և ᵸեն հանդիսանում հրապարակային առաջարկ:
              </p>
            </div>
          </div>
        )}

      </div>

      {/* ----------------- ԱՐԴՅՈՒՆՔՆԵՐԻ ՄՈԴԱԼ ՊԱՏՈՒՀԱՆ (MODAL) ----------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative animate-fadeIn">
            
            {/* Փակելու կոճակ (X) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-800 mb-6">Վարկային հաշվի արդյունքներ</h3>

            {/* Վերևի տեղեկատվական վահանակ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl mb-6 border border-gray-100">
              <div>
                <span className="text-[11px] text-gray-400 block mb-1">Գումար</span>
                <span className="text-sm font-bold text-gray-800">{loanAmount.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block mb-1">Տոկոսադրույք</span>
                <span className="text-sm font-bold text-gray-800">{loanRate}%</span>
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block mb-1">Ժամկետ</span>
                <span className="text-sm font-bold text-gray-800">{loanTerm} ամիս</span>
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block mb-1">Ընդ. վճարվելիք գումար</span>
                <span className="text-sm font-bold text-gray-800">{(loanAmount * 1.15).toLocaleString()}</span>
              </div>
            </div>

            {/* Աղյուսակ */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-400 text-xs">
                    <th className="pb-3 font-medium">Ամիս</th>
                    <th className="pb-3 font-medium">Վարկի տոկոսագումար</th>
                    <th className="pb-3 font-medium">Վարկի մայր գումարի մարում</th>
                    <th className="pb-3 font-medium text-right">Վարկի ամսական վճար</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">1</td>
                    <td className="py-3">{(loanAmount * 0.03).toLocaleString()}</td>
                    <td className="py-3">{loanAmount.toLocaleString()}</td>
                    <td className="py-3 text-right font-bold text-purple-700">{(loanAmount * 0.035).toLocaleString()}</td>
                  </tr>
                  <tr className="font-bold bg-gray-50/50">
                    <td className="py-3">Ընդամենը</td>
                    <td className="py-3">{(loanAmount * 0.03).toLocaleString()}</td>
                    <td className="py-3">{loanAmount.toLocaleString()}</td>
                    <td className="py-3 text-right text-purple-700">{(loanAmount * 0.035).toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}