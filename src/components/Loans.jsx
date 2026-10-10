import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Loans() {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const loansData = [
    {
      id: 1,
      title: "Անգրավ սպառողական վարկ",
      desc: "Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ: Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման:",
      amountLabel: "մինչև", amountValue: "10 մլն. ֏", amountSub: "Գումար",
      termMain: "60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "19%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg",
      category: "Անգրավ սպառողական վարկեր"
    },
    {
      id: 2,
      title: "Ավտոմեքենաների ձեռքբերման նպատակով վարկ",
      desc: "Նոր ավտոմեքենա գնելու որոշում՝ ապառիկ, գնվող մեքենայի և այլն: Վայելե'ք Evocabank-ի ավտովարկավորման ճկուն ու մատչելի պայմանները:",
      amountLabel: "մինչև", amountValue: "50 մլն. ֏", amountSub: "Գումար",
      termMain: "84 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "13%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg",
      category: "Ավտոմեքենաների ձեռքբերման ֆինանսավորում"
    },
    {
      id: 3,
      title: "Գույքի գրավով ապահովված վարկ",
      desc: "Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց:",
      amountLabel: "մինչև", amountValue: "150 մլն. ֏", amountSub: "Գումար",
      hasDualTerm: true,
      term1Val: "24-180", term1Note: "անշարժ գույքի գրավադրման դեպքում", term1Unit: "ամիս",
      term2Val: "60 ամիս", term2Note: "շարժական գույքի գրավադրման դեպքում",
      rateLabel: "Սկսած", rateValue: "14%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg",
      category: "Գրավով ապահովված սպառողական վարկեր"
    },
    {
      id: 4,
      title: "Արևային կայանների ձեռք բերման վարկ EvocaPOWER",
      desc: "Քո տանն էլեկտրաէներգիա արևից: EvocaPOWER Evocabank-ի հնարավորությամբ է տալիս հնարավորություն ստանալ վարկ՝ արևային կայաններ ձեռք բերելու համար:",
      amountLabel: "", amountValue: "5 մլն. ֏", amountSub: "Գումար",
      termMain: "60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "0%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png",
      category: "Անգրավ սպառողական վարկեր"
    },
    {
      id: 5,
      title: "Տերմոս Ապահովիկ",
      desc: "Ձեռք բեր տեխնիկա անհրաժեշտ պայմաններով ու արագ՝ առանց բարդությունների: Evocabank-ը առաջարկում է ապահովիկ:",
      amountLabel: "", amountValue: "5 մլն. ֏", amountSub: "Գումար",
      termMain: "60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "0%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg",
      category: "Ապառիկ"
    },
    {
      id: 6,
      title: "Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ",
      desc: "Աշխատավարձային հաճախորդների համար՝ լրացուցիչ ճկունություն և բարձր հասանելիություն: Evocabank-ը տրամադրում է վարկ առանց ավելորդ թղթաբանության:",
      amountLabel: "", amountValue: "10 մլն. ֏", amountSub: "Գումար",
      termMain: "3-60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "15.5%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg",
      category: "Անգրավ սպառողական վարկեր"
    },
    {
      id: 7,
      title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսներով",
      desc: "Ձեռք բերիր քո երազանքների բնակարանը հիփոթեքային վարկավորման ճկուն պայմաններով:",
      amountLabel: "", amountValue: "80 մլն. ֏", amountSub: "Գումար",
      termMain: "240 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "", rateValue: "13.2%", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 8,
      title: "Action",
      desc: "Action online վարկային գիծ EvocaTOUCH հավելվածից՝ 24/7 ռեժիմով, ցանկացած վայրից:",
      amountLabel: "", amountValue: "10 մլն. ֏", amountSub: "Գումար",
      termMain: "60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "18%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg",
      category: "Օնլայն վարկեր"
    },
    {
      id: 9,
      title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքների",
      desc: "Evocabank-ը աջակցում է ԼՂ-ից բռնի տեղահանված ընտանիքներին բնակարան ձեռք բերելու հարցում:",
      amountLabel: "", amountValue: "45 մլն. ֏", amountSub: "Գումար",
      termMain: "120 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "10%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 10,
      title: "Հողամասի ձեռքբերման վարկ",
      desc: "Բնակելի կամ հասարակական նշանակության հողամասի ձեռքբերման նպատակով:",
      amountLabel: "", amountValue: "80 մլն. ֏", amountSub: "Գումար",
      termMain: "240 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "14%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png",
      category: "Գրավով ապահովված սպառողական վարկեր"
    },
    {
      id: 11,
      title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով",
      desc: "Արագացրո՛ւ քո տան նորոգման ծրագրերը Evocabank-ի վերանորոգման վարկային պայմաններով:",
      amountLabel: "", amountValue: "5 մլն. ֏", amountSub: "Գումար",
      termMain: "60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "", rateValue: "17%", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg",
      category: "Անգրավ սպառողական վարկեր"
    },
    {
      id: 12,
      title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ",
      desc: "Ձեռք բերիր քո երազանքների մեքենան Evocabank-ի լիզինգի պարզեցված և մատչելի ձևով:",
      amountLabel: "մինչև", amountValue: "50 մլն. ֏", amountSub: "Գումար",
      termMain: "24-180 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "12%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png",
      category: "Ավտոմեքենաների ձեռքբերման ֆինանսավորում"
    },
    {
      id: 13,
      title: "Անհատական վարկ «Ներդրումային»",
      desc: "Ոչ ավանդական, նոր մոտեցում քո վարկային հայտին. ընտրիր դու, ստացիր քո ուզած վարկային սահմանաչափը:",
      amountLabel: "", amountValue: "350 մլն. ֏", amountSub: "Գումար",
      termMain: "240 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "", rateValue: "15%", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png",
      category: "Գրավով ապահովված սպառողական վարկեր"
    },
    {
      id: 14,
      title: "Հեծանիվի ձեռքբերման վարկ",
      desc: "Evocabank-ը խրախուսում է առողջ ապրելակերպը՝ առաջարկելով հատուկ վարկային պայմաններ:",
      amountLabel: "", amountValue: "300,000 ֏", amountSub: "Գումար",
      termMain: "36 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "16%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png",
      category: "Ապառիկ"
    },
    {
      id: 15,
      title: "Վերանորոգման վարկ EvocaHOME",
      desc: "EvocaHOME-ի միջոցով կատարիր քո տան նորոգումները հեշտությամբ ու արագ:",
      amountLabel: "", amountValue: "10 մլն. ֏", amountSub: "Գումար",
      termMain: "60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "", rateValue: "16%", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png",
      category: "Անգրավ սպառողական վարկեր"
    },
    {
      id: 16,
      title: "Առևտրային հիփոթեքային վարկեր",
      desc: "Զարգացրո՛ւ քո բիզնեսը՝ ձեռք բերելով առևտրային տարածքներ Evocabank-ի հիփոթեքով:",
      amountLabel: "", amountValue: "120 մլն. ֏", amountSub: "Գումար",
      termMain: "240 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "7.2%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 17,
      title: "ԱԶՀ-Բ ծրագրով ձեռք բերման վարկեր",
      desc: "Evocabank-ն առաջարկում է աջակցություն հիփոթեքային շուկայում լրացուցիչ պայմաններով:",
      amountLabel: "", amountValue: "45 մլն. ֏", amountSub: "Գումար",
      termMain: "240 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "12%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 18,
      title: "ԱԶՀ-Բ ծրագրով վերանորոգման վարկեր",
      desc: "Նորոգիր քո տունը հատուկ պետական աջակցության ծրագրի շրջանակներում:",
      amountLabel: "", amountValue: "15 մլն. ֏", amountSub: "Գումար",
      termMain: "84 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "12.5%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png",
      category: "Անգրավ սպառողական վարկեր"
    },
    {
      id: 19,
      title: "Հիփոթեքային վարկ «Երիտասարդ ընտանիքներին» մատչելի",
      desc: "Գնիր ձեր առաջին բնակարանը Evocabank-ի հետ միասին՝ պետական աջակցության ծրագրով:",
      amountLabel: "", amountValue: "27 մլն. ֏", amountSub: "Գումար",
      termMain: "180 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "6.9%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 20,
      title: "Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքների",
      desc: "Աջակցություն Արցախի շրջաններից տեղահանվածներին՝ սեփական բնակարան ունենալու համար:",
      amountLabel: "մինչև", amountValue: "45 մլն. ֏", amountSub: "Գումար",
      termMain: "120 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "10%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 21,
      title: "Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին",
      desc: "Մատչելի պայմաններ վերանորոգման համար՝ Արցախից տեղահանված մեր հայրենակիցների համար:",
      amountLabel: "", amountValue: "10 մլն. ֏", amountSub: "Գումար",
      termMain: "60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "", rateValue: "13%", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 22,
      title: "«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ",
      desc: "Կրթությունը լավագույն ներդրումն է: Վճարիր ուսման վարձը Evocabank-ի ուսանողական վարկով:",
      amountLabel: "", amountValue: "4 մլն. ֏", amountSub: "Գումար",
      termMain: "120 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "", rateValue: "9%", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg",
      category: "Անգրավ սպառողական վարկեր"
    },
    {
      id: 23,
      title: "Մատչելիության ապահովման պետական աջակցության ծրագիր",
      desc: "Evocabank-ը աջակցում է քեզ ձեռք բերելու բնակարան պետական աջակցության ծրագրի ներքո:",
      amountLabel: "", amountValue: "21 մլն. ֏", amountSub: "Գումար",
      termMain: "120 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "", rateValue: "13%", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 24,
      title: "Evolution",
      desc: "Նոր հնարավորություններ և ճկունություն Բանկում: Բացահայտիր Evolution վարկը:",
      amountLabel: "", amountValue: "1 մլն. ֏", amountSub: "Գումար",
      termMain: "18 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "18%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg",
      category: "Օնլայն վարկեր"
    },
    {
      id: 25,
      title: "Հիփոթեքային վարկեր Շինհասարակություն",
      desc: "Գնիր բնակարան շինհասարակության կողմից կառուցվող շենքերում՝ հիփոթեքային պայմաններով:",
      amountLabel: "", amountValue: "25.65 մլն. ֏", amountSub: "Գումար",
      termMain: "120-240 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "11%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg",
      category: "Հիփոթեքային վարկեր"
    },
    {
      id: 26,
      title: "Ապառիկ 0% և հատուկ պայմաններով",
      desc: "Գնիր հիմա, վճարիր հետո՝ առանց հավելավճարների:",
      amountLabel: "", amountValue: "3 մլն. ֏", amountSub: "Գումար",
      termMain: "24 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "", rateValue: "0%", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg",
      category: "Ապառիկ"
    },
    {
      id: 27,
      title: "Էկո վարկեր վերականգնվող էներգիայի համար",
      desc: "Ներդրե'ք կանաչ էներգիայում և խնայե'ք ձեր միջոցները:",
      amountLabel: "", amountValue: "20 մլն. ֏", amountSub: "Գումար",
      termMain: "84 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "8%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png",
      category: "Անգրավ սպառողական վարկեր"
    },
    {
      id: 28,
      title: "Գյուղատնտեսական վարկեր",
      desc: "Աջակցություն գյուղատնտեսական ոլորտի զարգացմանը և նոր ծրագրերին:",
      amountLabel: "մինչև", amountValue: "30 մլն. ֏", amountSub: "Գումար",
      termMain: "60 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "11%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg",
      category: "Գրավով ապահովված սպառողական վարկեր"
    },
    {
      id: 29,
      title: "Բիզնես վարկեր ՓՄՁ-ների համար",
      desc: "Ֆինանսական հզոր հենարան ձեր բիզնեսի ընդլայնման և շրջանառու միջոցների համար:",
      amountLabel: "մինչև", amountValue: "200 մլն. ֏", amountSub: "Գումար",
      termMain: "120 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "10%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png",
      category: "Գրավով ապահովված սպառողական վարկեր"
    },
    {
      id: 30,
      title: "Արագ դրամական փոխանցումների վարկ",
      desc: "Արագ և անհապաղ լուծումներ ձեր ընթացիկ ֆինանսական կարիքների համար:",
      amountLabel: "", amountValue: "2 մլն. ֏", amountSub: "Գումար",
      termMain: "12 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "15%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png",
      category: "Օնլայն վարկեր"
    },
    {
      id: 31,
      title: "Ակնթարթային օնլայն վարկեր EvocaTOUCH-ով",
      desc: "Ստացեք վարկ անմիջապես ձեր հեռախոսից՝ ցանկացած պահի:",
      amountLabel: "", amountValue: "5 մլն. ֏", amountSub: "Գումար",
      termMain: "36 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "16%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png",
      category: "Օնլայն վարկեր"
    },
    {
      id: 32,
      title: "Հատուկ սպառողական վարկ գործընկերների միջոցով",
      desc: "Ձեռք բերեք ապրանքներ և ծառայություններ մեր գործընկերների ցանցում՝ հատուկ արտոնյալ պայմաններով:",
      amountLabel: "մինչև", amountValue: "7 մլն. ֏", amountSub: "Գումար",
      termMain: "48 ամիս", termSub: "Վարկի մարման ժամկետը",
      rateLabel: "սկսած", rateValue: "14%-ից", rateSub: "Տոկոսադրույք",
      image: "https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png",
      category: "Ապառիկ"
    }
  ];

  const filteredLoans = activeFilter === 'Բոլորը' 
    ? loansData 
    : loansData.filter(loan => loan.category === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen pb-16 font-sans">
      
      {/* Subheader Purple Navigation Bar */}
      <div className="bg-[#6400dc] text-white pt-6 pb-4 px-4 sm:px-6 lg:px-12 shadow-md">
        <div className="max-w-7xl mx-auto flex space-x-8 overflow-x-auto text-sm font-semibold whitespace-nowrap">
          <Link to="/loans" className="text-white border-b-2 border-white pb-2 transition-colors">Վարկեր</Link>
          <Link to="/credit-history" className="text-purple-200 hover:text-white pb-2 transition-colors">Վարկային պատմություն և սքոր</Link>
          <span className="text-purple-200 hover:text-white pb-2 cursor-pointer">Կարևոր տեղեկատվություն</span>
        </div>
      </div>

      {/* Breadcrumb & Main Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6">
        <div className="text-xs text-gray-500 mb-4 flex items-center space-x-2">
          <span>🏠</span>
          <span>/</span>
          <span>Անհատ</span>
          <span>/</span>
          <span>Վարկեր</span>
          <span>/</span>
          <span className="text-gray-800 font-medium">Վարկեր</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-8" style={{ fontFamily: "'Montserratarm-Bold', sans-serif" }}>
          Վարկեր
        </h1>

        {/* Filter Pills / Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {[
            'Բոլորը', 
            'Գրավով ապահովված սպառողական վարկեր', 
            'Անգրավ սպառողական վարկեր', 
            'Հիփոթեքային վարկեր', 
            'Ավտոմեքենաների ձեռքբերման ֆինանսավորում', 
            'Ապառիկ', 
            'Օնլայն վարկեր'
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                activeFilter === filter
                  ? 'bg-[#6400dc] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Loans Cards List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {filteredLoans.map((loan) => (
          <div 
            key={loan.id} 
            className="pb-8 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              
              {/* Left side: Larger Image */}
              <div className="w-full lg:w-4/12 shrink-0">
                <div className="w-full h-56 sm:h-60 rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
                  <img src={loan.image} alt={loan.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Middle & Right side: Title, Description & Parameters */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 w-full lg:w-8/12">
                
                {/* Text column */}
                <div className="space-y-3 w-full lg:w-5/12">
                  <h3 
                    className="text-xl sm:text-2xl font-bold leading-snug text-gray-900" 
                    style={{ fontFamily: "'Montserratarm-Bold', sans-serif" }}
                  >
                    {loan.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {loan.desc}
                  </p>
                </div>

                {/* Parameters column */}
                <div className="flex flex-wrap sm:flex-nowrap items-start gap-6 lg:gap-8 w-full lg:w-7/12">
                  
                  {/* Amount */}
                  <div className="min-w-[90px]">
                    <p className="text-[11px] text-gray-400 font-semibold mb-1">{loan.amountLabel}</p>
                    <p className="text-xl sm:text-2xl font-black text-purple-700 tracking-tight">{loan.amountValue}</p>
                    <p className="text-xs text-gray-500 mt-1">{loan.amountSub}</p>
                  </div>

                  {/* Terms */}
                  {loan.hasDualTerm ? (
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold leading-tight mb-1 max-w-[90px]">{loan.term1Note}</p>
                        <p className="text-xl sm:text-2xl font-black text-purple-700 tracking-tight">{loan.term1Val}</p>
                        <p className="text-xs text-gray-500 mt-1">{loan.term1Unit}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold leading-tight mb-1 max-w-[90px]">{loan.term2Note}</p>
                        <p className="text-xl sm:text-2xl font-black text-purple-700 tracking-tight">{loan.term2Val}</p>
                        <p className="text-xs text-gray-500 mt-1">Վարկի մարման ժամկետը</p>
                      </div>
                    </div>
                  ) : (
                    <div className="min-w-[90px]">
                      <p className="text-[11px] text-gray-400 font-semibold mb-1 opacity-0">--</p>
                      <p className="text-xl sm:text-2xl font-black text-purple-700 tracking-tight">{loan.termMain}</p>
                      <p className="text-xs text-gray-500 mt-1">{loan.termSub}</p>
                    </div>
                  )}

                  {/* Rate */}
                  <div className="min-w-[90px]">
                    <p className="text-[11px] text-gray-400 font-semibold mb-1">{loan.rateLabel || 'սկսած'}</p>
                    <p className="text-xl sm:text-2xl font-black text-purple-700 tracking-tight">{loan.rateValue}</p>
                    <p className="text-xs text-gray-500 mt-1">{loan.rateSub}</p>
                  </div>

                </div>

              </div>

            </div>

            {/* Bottom Button */}
            <div className="mt-6 flex justify-start">
              <button className="bg-purple-100 hover:bg-purple-200 text-[#6400dc] px-6 py-2.5 rounded-full text-xs font-bold transition-colors flex items-center space-x-2">
                <span>Մանրամասն</span>
                <span className="text-sm font-bold">›</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}