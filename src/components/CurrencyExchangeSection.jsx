import React, { useState } from 'react';

export default function CurrencyExchangeSection() {
  const [activeTab, setActiveTab] = useState('cash'); // 'cash', 'nonCash', 'gold'
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('AMD');
  const [toCurrency, setToCurrency] = useState('USD');

  // Complete rates data with flags
  const allRates = [
    { code: 'USD', name: 'ԱՄՆ դոլար', buy: 360, sell: 363.5, flag: '🇺🇸' },
    { code: 'EUR', name: 'Եվրո', buy: 400, sell: 411, flag: '🇪🇺' },
    { code: 'RUB', name: 'ՌԴ ռուբլի', buy: 4.17, sell: 4.25, flag: '🇷🇺' },
    { code: 'GBP', name: 'Բրիտանական ֆունկ ստեռլինգ', buy: 471, sell: 488, flag: '🇬🇧' },
    { code: 'CHF', name: 'Շվեյցարական ֆրանկ', buy: 423, sell: 442, flag: '🇨🇭' },
    { code: 'CNY', name: 'Չինական յուան', buy: 53, sell: 56, flag: '🇨🇳' },
    { code: 'AED', name: 'ԱՄԷ դիրհամ', buy: 97, sell: 101, flag: '🇦🇪' },
    { code: 'JPY', name: 'Ճապոնական իեն', buy: 2.27, sell: 2.38, flag: '🇯🇵' },
    { code: 'KZT', name: 'Ղազախական տենգե', buy: 0.8, sell: 0.85, flag: '🇰🇿' },
    { code: 'BYN', name: 'Բելառուսական ռուբլի', buy: 117, sell: 125, flag: '🇧🇾' },
  ];

  // Rates data for Gold
  const goldRates = [
    { sample: '375', price: '17,500' },
    { sample: '500', price: '23,300' },
    { sample: '583', price: '27,200' },
    { sample: '750', price: '35,000' },
    { sample: '875', price: '40,900' },
    { sample: '900', price: '42,000' },
    { sample: '958', price: '44,700' },
    { sample: '999', price: '46,700' },
  ];

  // Filter rates based on active tab
  // For 'cash', show up to CHF. For 'nonCash', show all.
  const displayedRates = activeTab === 'cash' 
    ? allRates.slice(0, 5) // USD, EUR, RUB, GBP, CHF
    : allRates;

  // Helper function to get rate for calculator
  const getRate = (curr, type) => {
    if (curr === 'AMD') return 1;
    const found = allRates.find((r) => r.code === curr);
    if (!found) return 1;
    return type === 'buy' ? found.buy : found.sell;
  };

  // Calculate result
  const calculateResult = () => {
    const numAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    if (fromCurrency === toCurrency) return numAmount.toFixed(2);

    if (fromCurrency === 'AMD') {
      const rate = getRate(toCurrency, 'sell');
      return (numAmount / rate).toFixed(2);
    } else if (toCurrency === 'AMD') {
      const rate = getRate(fromCurrency, 'buy');
      return (numAmount * rate).toFixed(2);
    } else {
      const rateFrom = getRate(fromCurrency, 'buy');
      const rateTo = getRate(toCurrency, 'sell');
      const inAmd = numAmount * rateFrom;
      return (inAmd / rateTo).toFixed(2);
    }
  };

  return (
    <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
        
        {/* Info Text */}
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-8">
          20,000 ԱՄՆ դոլարից ավել (կամ դրան համարժեք այլ արտարժույթի) փոխանակման դեպքում գործարքը հաստատվում է Բանկի հաջողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել համապատասխան փաստաթուղթ[cite: 3]։
        </p>

        {/* Tabs & Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-gray-100 pb-6">
          <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-2 lg:pb-0">
            <button
              onClick={() => setActiveTab('cash')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'cash'
                  ? 'bg-purple-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Կանխիկ
            </button>
            <button
              onClick={() => setActiveTab('nonCash')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'nonCash'
                  ? 'bg-purple-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Անկանխիկ
            </button>
            <button
              onClick={() => setActiveTab('gold')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'gold'
                  ? 'bg-purple-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Ոսկու փոխարժեք
            </button>
          </div>

          <div className="text-xs text-gray-400 font-medium self-end lg:self-center">
            Թարմացված է՝ 10.10.2026[cite: 3]
          </div>
        </div>

        {/* Main Content Grid: Rates Table + Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Table */}
          <div className="lg:col-span-7 overflow-x-auto">
            {activeTab !== 'gold' ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase font-semibold">
                    <th className="py-3 px-4">{activeTab === 'cash' ? 'Կանխիկ' : 'Անկանխիկ'}</th>
                    <th className="py-3 px-4">Առք</th>
                    <th className="py-3 px-4">Վաճառք</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {displayedRates.map((item) => (
                    <tr key={item.code} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4 flex items-center space-x-3">
                        <span className="text-xl">{item.flag}</span>
                        <div>
                          <span className="font-bold text-gray-900">{item.code}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-gray-800">{item.buy.toFixed(2)}</td>
                      <td className="py-4 px-4 font-semibold text-gray-800">{item.sell.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase font-semibold">
                    <th className="py-3 px-4">Հարգ</th>
                    <th className="py-3 px-4">Սակագին (Արժեքը ՀՀ Դրամով 1 գրամի համար)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {goldRates.map((item) => (
                    <tr key={item.sample} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-gray-900">{item.sample}</td>
                      <td className="py-4 px-4 font-semibold text-gray-800">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'cash' && (
              <div className="mt-4">
                <button 
                  onClick={() => setActiveTab('nonCash')} 
                  className="text-xs text-purple-700 font-semibold hover:underline flex items-center bg-transparent border-none cursor-pointer p-0"
                >
                  Այլ արտարժույթներ <span className="ml-1">↓</span>
                </button>
              </div>
            )}
          </div>

          {/* Calculator Box */}
          <div className="lg:col-span-5 bg-purple-50/30 border border-purple-100/60 rounded-2xl p-6">
            <div className="space-y-4">
              {/* Input Group */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Ունեմ</label>
                <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-purple-600 transition-colors">
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 text-gray-900 font-bold focus:outline-none bg-transparent"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="bg-gray-50 border-l border-gray-200 text-sm font-semibold text-gray-700 px-3 py-3 focus:outline-none cursor-pointer"
                  >
                    <option value="AMD">AMD</option>
                    {allRates.map((r) => (
                      <option key={r.code} value={r.code}>{r.code}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Converted Group */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Կստանամ</label>
                <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-purple-600 transition-colors">
                  <div className="w-full px-4 py-3 text-gray-900 font-bold flex items-center">
                    {calculateResult()}
                  </div>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="bg-gray-50 border-l border-gray-200 text-sm font-semibold text-gray-700 px-3 py-3 focus:outline-none cursor-pointer"
                  >
                    {allRates.map((r) => (
                      <option key={r.code} value={r.code}>{r.code}</option>
                    ))}
                    <option value="AMD">AMD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}