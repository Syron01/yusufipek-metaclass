/**
 * All copy, links and course data for the page.
 * Checkout, login and legal routes point at the live store so the redesign can
 * be dropped onto kurs.yusufipek.me without rewiring the purchase flow.
 */
export const SITE = 'https://kurs.yusufipek.me'

export const links = {
  join: `${SITE}/pricing`,
  freeLesson: `${SITE}/course`,
  login: `${SITE}/auth/signin`,
  youtube: 'https://www.youtube.com/@yusufipk',
  videos: 'https://www.youtube.com/@yusufipk/videos',
  privacy: `${SITE}/gizlilik-politikasi`,
  terms: `${SITE}/hizmet-sartlari`,
  distance: `${SITE}/mesafeli-satis-sozlesmesi`,
  refund: `${SITE}/iade-politikasi`,
  contact: 'mailto:merhaba@yusufipek.me',
}

export const price = {
  amount: '4.999',
  currency: 'â‚º',
  installment: '577',
}

export const nav = [
  { label: 'Kurs', href: '#kurs' },
  { label: 'Ä°Ã§erik', href: '#icerik' },
  { label: 'Yorumlar', href: '#yorumlar' },
  { label: 'SSS', href: '#sss' },
]

export const hero = {
  badge: 'Yusuf Ä°pek Â· ResmÃ® EÄŸitim PortalÄ± & KiÅŸisel Bio',
  eyebrow: 'YouTube Meta Class Â· 2026 ResmÃ® MÃ¼fredat',
  kicker: 'Sponsorluk & BÃ¼yÃ¼me Stratejisi',
  lines: ['Masada para', 'bÄ±rakmayÄ±n.'],
  lead:
    "Sponsor size fiyat sorduÄŸunda ne diyeceÄŸinizi bilin. KanalÄ±nÄ±z iÃ§in doÄŸru fiyat belirlemeyi, profesyonel sponsorluk paketi hazÄ±rlamayÄ± ve masaya gÃ¼venle oturmayÄ± Ã¶ÄŸrenin. 6 yÄ±llÄ±k YouTube Ã¼reticiliÄŸi ve 23 markayla yapÄ±lan 40'tan fazla sÃ¶zleÅŸmenin doÄŸrudan tecrÃ¼besi.",
  micro: 'Tek seferlik Ã¶deme Â· Ã–mÃ¼r boyu sÄ±nÄ±rsÄ±z eriÅŸim Â· Ä°lk ders tamamen Ã¼cretsiz',
  stats: [
    { label: 'Meslek Olarak', value: '6 YÄ±l', count: 6, suffix: ' YÄ±l' },
    { label: 'YouTube Abonesi', value: '230.000+', count: 230000, suffix: '+' },
    { label: 'Toplam Ä°zlenme', value: '72 Milyon+', count: 72, suffix: ' Milyon+' },
  ],
}

export const snap = {
  frames: 48,
  phases: [
    { word: 'Belirsizlik.', line: 'KanalÄ±nÄ±z bÃ¼yÃ¼rken emeÄŸinizin gerÃ§ek karÅŸÄ±lÄ±ÄŸÄ±nÄ± bilememek.' },
    { word: 'Strateji.', line: 'Net fiyat formÃ¼lÃ¼, kurumsal paketler ve saÄŸlam sÃ¶zleÅŸme.' },
    { word: 'SÃ¼rdÃ¼rÃ¼lebilirlik.', line: 'Geride sadece bÃ¼yÃ¼yen ve deÄŸer yaratan kanalÄ±nÄ±z kalÄ±r.' },
  ],
}

export const story = {
  eyebrow: '01 â€” Neden bu kurs',
  quote:
    'Ä°lk videomda kamera aÃ§Ä±m yanlÄ±ÅŸtÄ± ve Ä±ÅŸÄ±ÄŸÄ± hiÃ§ dÃ¼ÅŸÃ¼nmemiÅŸtim. O zaman fark etmedim, iyi bir video Ã§ektiÄŸimi sanÄ±yordum.',
  notes: [
    {
      title: 'Bedeli kendim Ã¶dedim.',
      body:
        "DÃ¶rt sene kurgumu kendim yaptÄ±m. BÃ¼tÃ§em yoktu, kurgucu tutamazdÄ±m. Åimdi dÃ¶nÃ¼p bakÄ±nca iyi ki de Ã¶yle olmuÅŸ diyorum. Bir kurgucunun iÅŸini bilip bilmediÄŸini artÄ±k bakar bakmaz anlÄ±yorum. Bu kursta anlattÄ±ÄŸÄ±m ÅŸeylerin Ã§oÄŸu, o dÃ¶nemde Ã¶dediÄŸim bedelin karÅŸÄ±lÄ±ÄŸÄ±.",
    },
    {
      title: 'KurallarÄ± bilmek yetmiyor.',
      body:
        "Peki bu kursu alÄ±nca izlenmeye baÅŸlar mÄ±sÄ±nÄ±z? Sadece izleyip kapatÄ±rsanÄ±z hayÄ±r. Benim anlattÄ±ÄŸÄ±m ÅŸey oyunun kurallarÄ±. KurallarÄ± bilmek tek baÅŸÄ±na yetmiyor, video Ã§ekmeniz gerekiyor. Ben altÄ± yÄ±lda 1.000'den fazla video Ã§ektim; kendi videolarÄ±nÄ±zda deneyip sonuÃ§larÄ±na bakmak size kalÄ±yor.",
    },
  ],
  signature: 'Yusuf Ä°pek',
  role: '6 YÄ±ldÄ±r YouTube Ä°Ã§erik Ãœreticisi',
}

export const proof = [
  { count: 23, suffix: '', label: 'markayla Ã¼cretli iÅŸ birliÄŸi' },
  { count: 40, suffix: '+', label: "imzalanmÄ±ÅŸ sponsorluk sÃ¶zleÅŸmesi" },
  { count: 48, suffix: '', label: 'ders, 8 modÃ¼lde' },
  { count: 1000, suffix: '+', label: 'yayÄ±nlanmÄ±ÅŸ video' },
]

export type Lesson = string
export type Module = {
  no: string
  title: string
  lessons: Lesson[]
  featured?: boolean
}

export const modules: Module[] = [
  {
    no: '1',
    title: 'BaÅŸlamadan Ã–nce',
    lessons: ['Bu Kursu Bitirmeyeceksiniz (Ä°statistik BÃ¶yle Diyor)'],
  },
  {
    no: '2',
    title: 'SÄ±fÄ±rdan Kanal Kurulumu',
    lessons: [
      'Ne HakkÄ±nda Video Ã‡ekeceÄŸim?',
      'Hangi EkipmanÄ± AlmanÄ±za Gerek Yok?',
      'Video Fikirleriniz NasÄ±l TÃ¼kenmez?',
      'Hangi Programlara Para Vermelisiniz?',
      'Tek OturuÅŸta Birden Fazla Video Ã‡ekmek',
      'DoÄŸru Bilinen YanlÄ±ÅŸlar',
    ],
  },
  {
    no: '3',
    title: "YouTube'da Ä°zlenmeyi Belirleyen Åeyler",
    lessons: [
      'Videonuz Ä°zlenmiyorsa Sebebi BÃ¼yÃ¼k Ä°htimalle Fikir',
      'Ä°nsanlar Neden TÄ±klar?',
      'Ä°lk 30 Saniyede Ä°zleyiciyi NasÄ±l TutarsÄ±nÄ±z?',
      'Ä°zleyiciyi Videoda Tutan Scriptler Yazma',
      'Ä°zleyiciye Video Ä°zlediÄŸini Unutturan Kurgu',
      'Ã–neri Sistemi NasÄ±l Ã‡alÄ±ÅŸÄ±r?',
      'Shorts Ã‡ekmeli miyim?',
      'Ã‡aylak HatalarÄ±',
    ],
  },
  {
    no: '4',
    title: "YouTube'dan Para KazanmanÄ±n YollarÄ±",
    lessons: [
      'Ä°zlenmeden KazanÄ±lan Para (AdSense)',
      'AsÄ±l Para Sponsorlarda',
      'SatÄ±ÅŸ OrtaklÄ±ÄŸÄ± DeÄŸer mi?',
      'KatÄ±l ÃœyeliÄŸi Ä°ÅŸe YarÄ±yor mu?',
      'CanlÄ± YayÄ±ndan Para Kazanmak',
      'BildiÄŸiniz Åeyi ÃœrÃ¼ne Ã‡evirmek',
      'Merch GerÃ§ekten Para KazandÄ±rÄ±yor mu?',
    ],
  },
  {
    no: '5',
    title: 'Sponsorluk Bulmak, PazarlÄ±k Etmek, SÃ¶zleÅŸme Yapmak',
    featured: true,
    lessons: [
      'Videonuza KaÃ§ Para Ä°steyeceksiniz?',
      'MarkanÄ±n BÃ¼tÃ§esini NasÄ±l Ã–ÄŸrenirsiniz?',
      'Markaya GÃ¶ndereceÄŸiniz Sunumu HazÄ±rlamak',
      'SponsorlarÄ± NasÄ±l Takip Ediyorum?',
      'Sizi Koruyacak SÃ¶zleÅŸme OluÅŸturma',
      'Sponsor Kaybettiren Hatalar',
      'Sponsor Size Neden Tekrar Gelir?',
      'AracÄ± Kurumlar DeÄŸer mi?',
      'Sponsor GerÃ§ek Mi?',
    ],
  },
  {
    no: '6',
    title: 'YouTube Verilerini DoÄŸru Okumak',
    lessons: ["Analytics'te Neye BakacaksÄ±nÄ±z?"],
  },
  {
    no: '7',
    title: 'KullandÄ±ÄŸÄ±m AraÃ§lar ve Ä°ÅŸ AkÄ±ÅŸÄ±m',
    lessons: [
      "Gemini'yi Ä°ÅŸimde NasÄ±l KullanÄ±yorum?",
      'KapaÄŸÄ± YayÄ±nlamadan Ã–nce Test Etmek',
      'Video AÃ§Ä±klamalarÄ±nÄ± Tek Yerden DÃ¼zenlemek',
      'Trendleri Algoritmaya Kalmadan Takip Etmek',
      "YayÄ±n Takvimimi Notion'da NasÄ±l Kuruyorum?",
      'Fikirlerimi Nerede Biriktiriyorum?',
      'Stok Video ve Grafikleri Nereden Buluyorum?',
      'MÃ¼zik ve Ses Efektlerini Nereden Buluyorum?',
      'Yapay Zekayla Kapak FotoÄŸrafÄ± Ãœretmek',
      'Kapak FotoÄŸraflarÄ±mÄ± NasÄ±l Ãœretiyorum? (V2)',
    ],
  },
  {
    no: '8',
    title: "YouTube'da Uzun Vadeli Oyun",
    lessons: [
      'LinÃ§ YediÄŸinizde Ne YapacaksÄ±nÄ±z?',
      'Ä°ÅŸi NasÄ±l Devredersiniz?',
      'YarÄ±n KanalÄ±nÄ±z Kapansa Ne Olur?',
      'Ä°zleyici Sizi NasÄ±l Buluyor?',
      'Telif ve Strike YediÄŸinizde Ne Olur?',
      'YouTuber Vergi Ã–der mi?',
    ],
  },
]

export const sponsor = {
  eyebrow: '03 â€” Kursun kalbi',
  count: '09',
  title: 'Sponsorla sadece fiyatÄ± deÄŸil, iÅŸin kapsamÄ±nÄ± da konuÅŸun.',
  body:
    "Bir marka sizinle Ã§alÄ±ÅŸmak istediÄŸinde hangi sorularÄ± sormalÄ±sÄ±nÄ±z? BÃ¼tÃ§esini nasÄ±l Ã¶ÄŸrenirsiniz? Teklifinize neleri dahil eder, bunlarÄ± nasÄ±l fiyatlandÄ±rÄ±rsÄ±nÄ±z? Sponsorluk bÃ¶lÃ¼mÃ¼ndeki 9 derste fiyat belirlemeyi, paket oluÅŸturmayÄ± ve pazarlÄ±ÄŸÄ± Ã¶ÄŸrenin. GÃ¶rÃ¼ÅŸmeye ne isteyeceÄŸinizi ve karÅŸÄ±lÄ±ÄŸÄ±nda ne sunacaÄŸÄ±nÄ±zÄ± bilerek girin.",
  cta: 'Sponsorluk bÃ¶lÃ¼mÃ¼nÃ¼ aÃ§',
}

export const fit = {
  eyebrow: '04 â€” Kime gÃ¶re',
  yes: [
    'Video yayÄ±nlÄ±yor ama neden izlenmediÄŸini anlamakta zorlanÄ±yorsanÄ±z.',
    'Ä°zlenmelerinizi sponsorluk gelirine dÃ¶nÃ¼ÅŸtÃ¼rmek istiyorsanÄ±z.',
    'Kendi yÃ¼zÃ¼nÃ¼zle, kendi sesinizle iÃ§erik Ã¼retmek istiyorsanÄ±z.',
    'DÃ¼zenli Ã¼retmeye ve Ã¶ÄŸrendiklerinizi videolarÄ±nÄ±zda denemeye hazÄ±rsanÄ±z.',
    'SonuÃ§lar yavaÅŸ geldiÄŸinde de devam etmeyi gÃ¶ze alÄ±yorsanÄ±z.',
  ],
  no: [
    'Dersleri izlemeye ve uygulamaya zaman ayÄ±rmayacaksanÄ±z.',
    'BirkaÃ§ video yayÄ±nlayÄ±p sonuÃ§ alamayÄ±nca bÄ±rakacaksanÄ±z.',
    'DÃ¼zenli video Ã¼retmeye hazÄ±r deÄŸilseniz.',
    "KanalÄ±nÄ±zÄ± emek vermeden, tamamen otomasyonla bÃ¼yÃ¼tmek istiyorsanÄ±z.",
    'Kursu bitirince bir ay iÃ§inde para kazanmayÄ± bekliyorsanÄ±z.',
  ],
}

export const testimonials = [
  {
    quote:
      'Kurs gerÃ§ekten emek verilerek Ã§ekilmiÅŸ, detaylÄ± araÅŸtÄ±rma yapÄ±lmÄ±ÅŸ ve tecrÃ¼be aktarÄ±mÄ± yapÄ±lÄ±yor. Daha Ã¶nceden izlediÄŸim YouTube eÄŸitimlerinden farklÄ± olarak birÃ§ok Ã¶rneÄŸi anlÄ±k olarak yapÄ±p anlatÄ±yor. ParasÄ±nÄ± hakediyor kesinlikle.',
    name: 'Muhammed Arslan',
  },
  {
    quote:
      'GerÃ§ekten Ã§ok gÃ¼zel bir eÄŸitim. EÄŸitimin yanÄ± sÄ±ra mail ile sorduÄŸum sorulara anÄ±nda cevap vermen eÄŸitimin deÄŸerini 10x arttÄ±rÄ±yor. EÄŸitimi bir kere Ã§ekip koymak kolay, asÄ±l zor olan bu ÅŸekilde sÃ¼rekli destek de verebilmek.',
    name: 'Mustafa Dikmen',
  },
  {
    quote:
      "YavaÅŸ yavaÅŸ, sindire sindire izledim ve bitirdim. Pek Ã§ok konu sadelikle ve anlaÅŸÄ±lÄ±r ÅŸekilde anlatÄ±lÄ±yor. Kesinlikle sonuÃ§ odaklÄ±. Uzun saatli bir kurs illÃ¼zyonundan Ã§ok, YouTube'a baÅŸlamayÄ± dÃ¼ÅŸÃ¼nen veya yolun baÅŸÄ±nda olan herkese neyin nasÄ±l yapÄ±lmasÄ± gerektiÄŸini anlatan bilgi dolu bir iÃ§erik.",
    name: 'Ã–mer YÃ¶rÃ¼koÄŸlu',
  },
  {
    quote:
      'Ä°lk dersi bitirdim. Ä°lk dersten satÄ±n alanlarÄ± dÃ¼ÅŸÃ¼nÃ¼p "lÃ¼tfen kursu bitirin ve uygulayÄ±n" diye bu kadar Ä±srarla dile getirilen bir kursa denk gelmemiÅŸtim. Sunum ve ses kalitesi de Ã§ok iyi. AnlatÄ±lan bilgilerin kalitesine diyecek yok.',
    name: 'Oktay',
  },
]

export const channel = {
  eyebrow: '06 â€” Kanal',
  title: 'Kanaldan son videolar.',
  body:
    "AltÄ± yÄ±ldÄ±r video Ã¼retiyorum, kanalda 1.000'den fazla video var. Bu kurs, o videolarÄ±n nasÄ±l ortaya Ã§Ä±ktÄ±ÄŸÄ±nÄ±n cevabÄ±: fikirden kapaÄŸa, kurgudan sponsor gÃ¶rÃ¼ÅŸmesine kadar.",
  handle: '@yusufipk',
  stats: ['230.000+ abone', '72 milyon+ izlenme', "1.000'den fazla video"],
  videos: [
    {
      id: 'xYyuaYXUpdU',
      title: 'Linux Adam Ã–LDÃœ(!) â€” Ä°zleyicilerime SesleniÅŸ',
      date: '3 KasÄ±m 2026',
      thumb: 'https://i.ytimg.com/vi/xYyuaYXUpdU/hqdefault.jpg',
    },
    {
      id: 'zyudLHxtAeg',
      title: 'Sadece Reklam GÃ¶rerek Hacklenebilir Misiniz?',
      date: '2 KasÄ±m 2026',
      thumb: 'https://i.ytimg.com/vi/zyudLHxtAeg/hqdefault.jpg',
    },
    {
      id: 'K5incXt-UuI',
      title: 'Google Yapay Zeka SÄ±ralamasÄ±nda Birinci Oldu',
      date: '1 KasÄ±m 2026',
      thumb: 'https://i.ytimg.com/vi/K5incXt-UuI/hqdefault.jpg',
    },
  ],
}

export const pricing = {
  eyebrow: '07 â€” KatÄ±lÄ±m',
  title: 'Kursun tamamÄ±. Tek Ã¶deme.',
  intro:
    'Tek bir sponsorluk gÃ¶rÃ¼ÅŸmesinde masada bÄ±raktÄ±ÄŸÄ±nÄ±z fark, kursun bedelinden fazla olabilir.',
  features: [
    '8 modÃ¼l, 48 dersin tamamÄ±',
    'Sponsorluk Ã¼zerine 9 ders',
    'Notion sponsor CRM ÅŸablonu',
    'HazÄ±r sponsorluk sÃ¶zleÅŸmesi',
    'MarkalarÄ± ikna eden sunum formÃ¼lÃ¼',
    'Gemini prompt kÃ¼tÃ¼phanesi',
    'F/P ekipman listesi',
    'Ã–mÃ¼r boyu eriÅŸim',
  ],
  note: 'EriÅŸim, Ã¶deme sonrasÄ± hesabÄ±nÄ±za anÄ±nda tanÄ±mlanÄ±r.',
  legal:
    "SatÄ±n alarak Hizmet ÅartlarÄ±, Mesafeli SatÄ±ÅŸ SÃ¶zleÅŸmesi, Gizlilik PolitikasÄ± ve Ä°ade PolitikasÄ±'nÄ± kabul etmiÅŸ olursunuz.",
}

export const faq = {
  eyebrow: '08 â€” Sorular',
  title: 'Sorular.',
  items: [
    {
      q: 'KaÃ§ abonem olursa sponsor bulabilirim?',
      a: "Abone sayÄ±sÄ± tek baÅŸÄ±na bir eÅŸik deÄŸil. Markalar kime, ne kadar sÃ¼re ve hangi kitleye ulaÅŸtÄ±ÄŸÄ±nÄ±za bakÄ±yor. Sponsorluk bÃ¶lÃ¼mÃ¼nde markanÄ±n bÃ¼tÃ§esini nasÄ±l Ã¶ÄŸreneceÄŸinizi, teklifi nasÄ±l kuracaÄŸÄ±nÄ±zÄ± ve hangi durumda 'hayÄ±r' demeniz gerektiÄŸini anlatÄ±yorum.",
    },
    {
      q: 'Ne kadar sÃ¼rede sonuÃ§ alÄ±rÄ±m?',
      a: 'Kurs kendi hÄ±zÄ±nÄ±zda ilerleyen 48 dersten oluÅŸuyor. SonuÃ§, dersleri uygulayÄ±p video yayÄ±nlamanÄ±za baÄŸlÄ±. Kimse size bir tarih garantisi veremez; ilk ders Ã¼cretsiz, nasÄ±l Ã§alÄ±ÅŸtÄ±ÄŸÄ±nÄ± gÃ¶rÃ¼p kendiniz karar verin.',
    },
    {
      q: 'Kameram iyi deÄŸil, yine de iÅŸe yarar mÄ±?',
      a: "Kursun â€œHangi EkipmanÄ± AlmanÄ±za Gerek Yok?â€ dersi tam olarak bunun iÃ§in var. Ä°yi video pahalÄ± bir kameradan Ã¶nce fikir, Ä±ÅŸÄ±k ve kurgudan geliyor. Elinizdeki telefonla baÅŸlayabilirsiniz.",
    },
    {
      q: 'SatÄ±n aldÄ±ktan sonra eriÅŸim nasÄ±l oluyor?',
      a: 'Ã–deme sonrasÄ± eriÅŸim hesabÄ±nÄ±za anÄ±nda tanÄ±mlanÄ±r. TÃ¼m modÃ¼ller ve bonus ÅŸablonlar Ã¶mÃ¼r boyu aÃ§Ä±k kalÄ±r; dilediÄŸiniz zaman, kendi hÄ±zÄ±nÄ±zda ilerlersiniz.',
    },
  ],
}

