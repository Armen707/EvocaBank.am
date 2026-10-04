import React, { useEffect } from 'react';
import { database } from '../lib/firebase';
import { ref, set } from 'firebase/database';

// Բոլոր 22 քարտերի տվյալները
const initialCardsData = {
  card1: {
    title: "Visa Infinite",
    subtitle: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտն հենց հիմա",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png",
    bgColor: "#dadada",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card2: {
    title: "Հիփոթեքային վարկեր Evocabank-ում",
    subtitle: "Ձեռք բեր քո երազանքի բնակարանը՝ ամենահարմար պայմաններով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png",
    bgColor: "#6539aa",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/loans"
  },
  card3: {
    title: "UnionPay Gold",
    subtitle: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png",
    bgColor: "#000000",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card4: {
    title: "Օնլայն ավանդ EvocaTOUCH-ով",
    subtitle: "Դի՛ր ավանդ Evocabank-ում՝ բարձր տոկոսադրույքներով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg",
    bgColor: "#27292b",
    buttonText: "Ծանոթանալ պայմաններին",
    buttonLink: "/deposits"
  },
  card5: {
    title: "Evoca Travel Card",
    subtitle: "Այս քարտն իր առավելություններով կդառնա քո ճամփորդական ընկերը",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png",
    bgColor: "#000000",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card6: {
    title: "Evoca Աշխատավարձային նախագիծ",
    subtitle: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "#E4DFFF",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/salary"
  },
  card7: {
    title: "Կարճ հեռախոսահամար՝ 8444",
    subtitle: "Բարի գալուստ, Evocabank: Մենք սպասում ենք ձեր զանգին...",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png",
    bgColor: "#b6a44f",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/touch"
  },
  card8: {
    title: "Visa Vision",
    subtitle: "Ձեռք բեր Visa Vision քարտն քո նախընտրած գույնով ու ոճով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "#FFDCFB",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card9: {
    title: "Mastercard Standard",
    subtitle: "Վայելիր ամենօրյա վճարումների հարմարավետությունը Mastercard-ով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "#27292b",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card10: {
    title: "Visa Gold",
    subtitle: "Ընդգծիր քո կարգավիճակը Visa Gold քարտով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png",
    bgColor: "#b6a44f",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card11: {
    title: "Ապառիկ Տեղում",
    subtitle: "Գնիր հենց հիմա, վճարիր հետո՝ ճկուն պայմաններով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png",
    bgColor: "#6539aa",
    buttonText: "Մանրամասն",
    buttonLink: "/loans"
  },
  card12: {
    title: "Բիզնես Վարկեր",
    subtitle: "Զարգացրու քո բզնեսը Evocabank-ի աջակցությամբ",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png",
    bgColor: "#000000",
    buttonText: "Դիմել հիմա",
    buttonLink: "/business"
  },
  card13: {
    title: "Evoca Digital",
    subtitle: "Ամբողջովին թվային բանկային ծառայություններ քո հեռախոսում",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg",
    bgColor: "#E4DFFF",
    buttonText: "Ներբեռնել",
    buttonLink: "/touch"
  },
  card14: {
    title: "Սպառողական Վարկեր",
    subtitle: "Արագ և առանց ավելորդ թղթաբանության",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png",
    bgColor: "#dadada",
    buttonText: "Ստանալ վարկ",
    buttonLink: "/loans"
  },
  card15: {
    title: "Ավանդներ բարձր տոկոսով",
    subtitle: "Վստահիր քո խնայողությունները Evocabank-ին",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png",
    bgColor: "#FFDCFB",
    buttonText: "Բացել ավանդ",
    buttonLink: "/deposits"
  },
  card16: {
    title: "ArCa Classic",
    subtitle: "Ազգային վճարային համակարգի հուսալի քարտ",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "#000000",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card17: {
    title: "Mastercard Platinum",
    subtitle: "Բացառիր սահմանափակումները Mastercard Platinum-ի հետ",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png",
    bgColor: "#dadada",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card18: {
    title: "Ավտովարկ",
    subtitle: "Նստիր քո երազանքի մեքենայի ղեկին արագ և շահավետ",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png",
    bgColor: "#6539aa",
    buttonText: "Հաշվել ավտովարկը",
    buttonLink: "/loans"
  },
  card19: {
    title: "Visa Platinum",
    subtitle: "Ավելին քան պարզապես բանկային քարտ",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png",
    bgColor: "#b6a44f",
    buttonText: "Իմանալ ավելին",
    buttonLink: "/cards"
  },
  card20: {
    title: "Money Transfer",
    subtitle: "Արագ դրամական փոխանցումներ ամբողջ աշխարհով",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg",
    bgColor: "#27292b",
    buttonText: "Փոխանցել",
    buttonLink: "/transfers"
  },
  card21: {
    title: "Student Card",
    subtitle: "Հատուկ առաջարկներ ուսանողների համար",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png",
    bgColor: "#E4DFFF",
    buttonText: "Ստանալ քարտ",
    buttonLink: "/cards"
  },
  card22: {
    title: "Evoca Բարեգործություն",
    subtitle: "Միասին կերտենք բարիք և ժպիտներ",
    imageUrl: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "#FFDCFB",
    buttonText: "Մասնակցել",
    buttonLink: "/charity"
  }
};

export default function EvocaRealtime() {
  useEffect(() => {
    // Ուղարկում է տվյալները ուղղակիորեն 'cards' հանգույցում (node)
    const cardsRef = ref(database, 'cards');
    
    set(cardsRef, initialCardsData)
      .then(() => {
        console.log("Բոլոր 22 քարտերը հաջողությամբ փոխանցվեցին Firebase Realtime Database-ի 'cards' բաժին!");
      })
      .catch((error) => {
        console.error("Սխալ Firebase-ում գրելիս:", error);
      });
  }, []);

  return null;
}