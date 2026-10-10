import React from 'react';

const newsData = [
  {
    id: 1,
    title: 'Evocabank-ը TRF 2026-ի ֆինանսական գործընկեր',
    category: 'ԳԱՂԱՓԱՐԱԿԻՑՆԵՐ',
    date: '06.10.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png',
  },
  {
    id: 2,
    title: 'Evocabank-ը Armenia-UK Business Forum-ի գլխավոր գործընկեր',
    category: 'ՊԱՏՄՈՒԹՅՈՒՆՆԵՐ',
    date: '06.10.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg',
  },
  {
    id: 3,
    title: 'Evocabank-ը Ամենանորարար թվային բանկ 2026',
    category: 'ՄՐՑԱՆԱԿՆԵՐ',
    date: '02.10.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17909253326841/439x320.png',
  },
];

export default function LatestNews() {
  return (
    <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Վերջին նորությունները
          </h2>
          <button className="flex items-center text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-full transition-colors">
            Բոլոր նորությունները
            <svg
              className="w-4 h-4 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[439/320] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2 hover:text-purple-700 cursor-pointer transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Footer / Date */}
              <div className="px-5 pb-5 pt-0">
                <span className="text-xs text-gray-400 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}