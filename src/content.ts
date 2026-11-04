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
  currency: '₺',
  installment: '577',
}

export const nav = [
  { label: 'Kurs', href: '#kurs' },
  { label: 'İçerik', href: '#icerik' },
  { label: 'Yorumlar', href: '#yorumlar' },
  { label: 'SSS', href: '#sss' },
]

export const hero = {
  badge: 'Yusuf İpek · Resmî Eğitim Portalı & Kişisel Bio',
  eyebrow: 'YouTube Meta Class · 2026 Resmî Müfredat',
  kicker: 'Sponsorluk & Büyüme Stratejisi',
  lines: ['Masada para', 'bırakmayın.'],
  lead:
    "Sponsor size fiyat sorduğunda ne diyeceğinizi bilin. Kanalınız için doğru fiyat belirlemeyi, profesyonel sponsorluk paketi hazırlamayı ve masaya güvenle oturmayı öğrenin. 6 yıllık YouTube üreticiliği ve 23 markayla yapılan 40'tan fazla sözleşmenin doğrudan tecrübesi.",
  micro: 'Tek seferlik ödeme · Ömür boyu sınırsız erişim · İlk ders tamamen ücretsiz',
  stats: [
    { label: 'Meslek Olarak', value: '6 Yıl', count: 6, suffix: ' Yıl' },
    { label: 'YouTube Abonesi', value: '230.000+', count: 230000, suffix: '+' },
    { label: 'Toplam İzlenme', value: '72 Milyon+', count: 72, suffix: ' Milyon+' },
  ],
}

export const snap = {
  frames: 48,
  phases: [
    { word: 'Belirsizlik.', line: 'Kanalınız büyürken emeğinizin gerçek karşılığını bilememek.' },
    { word: 'Strateji.', line: 'Net fiyat formülü, kurumsal paketler ve sağlam sözleşme.' },
    { word: 'Sürdürülebilirlik.', line: 'Geride sadece büyüyen ve değer yaratan kanalınız kalır.' },
  ],
}

export const story = {
  eyebrow: '01 — Neden bu kurs',
  quote:
    'İlk videomda kamera açım yanlıştı ve ışığı hiç düşünmemiştim. O zaman fark etmedim, iyi bir video çektiğimi sanıyordum.',
  notes: [
    {
      title: 'Bedeli kendim ödedim.',
      body:
        "Dört sene kurgumu kendim yaptım. Bütçem yoktu, kurgucu tutamazdım. Şimdi dönüp bakınca iyi ki de öyle olmuş diyorum. Bir kurgucunun işini bilip bilmediğini artık bakar bakmaz anlıyorum. Bu kursta anlattığım şeylerin çoğu, o dönemde ödediğim bedelin karşılığı.",
    },
    {
      title: 'Kuralları bilmek yetmiyor.',
      body:
        "Peki bu kursu alınca izlenmeye başlar mısınız? Sadece izleyip kapatırsanız hayır. Benim anlattığım şey oyunun kuralları. Kuralları bilmek tek başına yetmiyor, video çekmeniz gerekiyor. Ben altı yılda 1.000'den fazla video çektim; kendi videolarınızda deneyip sonuçlarına bakmak size kalıyor.",
    },
  ],
  signature: 'Yusuf İpek',
  role: '6 Yıldır YouTube İçerik Üreticisi',
}

export const proof = [
  { count: 23, suffix: '', label: 'markayla ücretli iş birliği' },
  { count: 40, suffix: '+', label: "imzalanmış sponsorluk sözleşmesi" },
  { count: 48, suffix: '', label: 'ders, 8 modülde' },
  { count: 1000, suffix: '+', label: 'yayınlanmış video' },
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
    title: 'Başlamadan Önce',
    lessons: ['Bu Kursu Bitirmeyeceksiniz (İstatistik Böyle Diyor)'],
  },
  {
    no: '2',
    title: 'Sıfırdan Kanal Kurulumu',
    lessons: [
      'Ne Hakkında Video Çekeceğim?',
      'Hangi Ekipmanı Almanıza Gerek Yok?',
      'Video Fikirleriniz Nasıl Tükenmez?',
      'Hangi Programlara Para Vermelisiniz?',
      'Tek Oturuşta Birden Fazla Video Çekmek',
      'Doğru Bilinen Yanlışlar',
    ],
  },
  {
    no: '3',
    title: "YouTube'da İzlenmeyi Belirleyen Şeyler",
    lessons: [
      'Videonuz İzlenmiyorsa Sebebi Büyük İhtimalle Fikir',
      'İnsanlar Neden Tıklar?',
      'İlk 30 Saniyede İzleyiciyi Nasıl Tutarsınız?',
      'İzleyiciyi Videoda Tutan Scriptler Yazma',
      'İzleyiciye Video İzlediğini Unutturan Kurgu',
      'Öneri Sistemi Nasıl Çalışır?',
      'Shorts Çekmeli miyim?',
      'Çaylak Hataları',
    ],
  },
  {
    no: '4',
    title: "YouTube'dan Para Kazanmanın Yolları",
    lessons: [
      'İzlenmeden Kazanılan Para (AdSense)',
      'Asıl Para Sponsorlarda',
      'Satış Ortaklığı Değer mi?',
      'Katıl Üyeliği İşe Yarıyor mu?',
      'Canlı Yayından Para Kazanmak',
      'Bildiğiniz Şeyi Ürüne Çevirmek',
      'Merch Gerçekten Para Kazandırıyor mu?',
    ],
  },
  {
    no: '5',
    title: 'Sponsorluk Bulmak, Pazarlık Etmek, Sözleşme Yapmak',
    featured: true,
    lessons: [
      'Videonuza Kaç Para İsteyeceksiniz?',
      'Markanın Bütçesini Nasıl Öğrenirsiniz?',
      'Markaya Göndereceğiniz Sunumu Hazırlamak',
      'Sponsorları Nasıl Takip Ediyorum?',
      'Sizi Koruyacak Sözleşme Oluşturma',
      'Sponsor Kaybettiren Hatalar',
      'Sponsor Size Neden Tekrar Gelir?',
      'Aracı Kurumlar Değer mi?',
      'Sponsor Gerçek Mi?',
    ],
  },
  {
    no: '6',
    title: 'YouTube Verilerini Doğru Okumak',
    lessons: ["Analytics'te Neye Bakacaksınız?"],
  },
  {
    no: '7',
    title: 'Kullandığım Araçlar ve İş Akışım',
    lessons: [
      "Gemini'yi İşimde Nasıl Kullanıyorum?",
      'Kapağı Yayınlamadan Önce Test Etmek',
      'Video Açıklamalarını Tek Yerden Düzenlemek',
      'Trendleri Algoritmaya Kalmadan Takip Etmek',
      "Yayın Takvimimi Notion'da Nasıl Kuruyorum?",
      'Fikirlerimi Nerede Biriktiriyorum?',
      'Stok Video ve Grafikleri Nereden Buluyorum?',
      'Müzik ve Ses Efektlerini Nereden Buluyorum?',
      'Yapay Zekayla Kapak Fotoğrafı Üretmek',
      'Kapak Fotoğraflarımı Nasıl Üretiyorum? (V2)',
    ],
  },
  {
    no: '8',
    title: "YouTube'da Uzun Vadeli Oyun",
    lessons: [
      'Linç Yediğinizde Ne Yapacaksınız?',
      'İşi Nasıl Devredersiniz?',
      'Yarın Kanalınız Kapansa Ne Olur?',
      'İzleyici Sizi Nasıl Buluyor?',
      'Telif ve Strike Yediğinizde Ne Olur?',
      'YouTuber Vergi Öder mi?',
    ],
  },
]

export const sponsor = {
  eyebrow: '03 — Kursun kalbi',
  count: '09',
  title: 'Sponsorla sadece fiyatı değil, işin kapsamını da konuşun.',
  body:
    "Bir marka sizinle çalışmak istediğinde hangi soruları sormalısınız? Bütçesini nasıl öğrenirsiniz? Teklifinize neleri dahil eder, bunları nasıl fiyatlandırırsınız? Sponsorluk bölümündeki 9 derste fiyat belirlemeyi, paket oluşturmayı ve pazarlığı öğrenin. Görüşmeye ne isteyeceğinizi ve karşılığında ne sunacağınızı bilerek girin.",
  cta: 'Sponsorluk bölümünü aç',
}

export const fit = {
  eyebrow: '04 — Kime göre',
  yes: [
    'Video yayınlıyor ama neden izlenmediğini anlamakta zorlanıyorsanız.',
    'İzlenmelerinizi sponsorluk gelirine dönüştürmek istiyorsanız.',
    'Kendi yüzünüzle, kendi sesinizle içerik üretmek istiyorsanız.',
    'Düzenli üretmeye ve öğrendiklerinizi videolarınızda denemeye hazırsanız.',
    'Sonuçlar yavaş geldiğinde de devam etmeyi göze alıyorsanız.',
  ],
  no: [
    'Dersleri izlemeye ve uygulamaya zaman ayırmayacaksanız.',
    'Birkaç video yayınlayıp sonuç alamayınca bırakacaksanız.',
    'Düzenli video üretmeye hazır değilseniz.',
    "Kanalınızı emek vermeden, tamamen otomasyonla büyütmek istiyorsanız.",
    'Kursu bitirince bir ay içinde para kazanmayı bekliyorsanız.',
  ],
}

export const testimonials = [
  {
    quote:
      'Kurs gerçekten emek verilerek çekilmiş, detaylı araştırma yapılmış ve tecrübe aktarımı yapılıyor. Daha önceden izlediğim YouTube eğitimlerinden farklı olarak birçok örneği anlık olarak yapıp anlatıyor. Parasını hakediyor kesinlikle.',
    name: 'Muhammed Arslan',
  },
  {
    quote:
      'Gerçekten çok güzel bir eğitim. Eğitimin yanı sıra mail ile sorduğum sorulara anında cevap vermen eğitimin değerini 10x arttırıyor. Eğitimi bir kere çekip koymak kolay, asıl zor olan bu şekilde sürekli destek de verebilmek.',
    name: 'Mustafa Dikmen',
  },
  {
    quote:
      "Yavaş yavaş, sindire sindire izledim ve bitirdim. Pek çok konu sadelikle ve anlaşılır şekilde anlatılıyor. Kesinlikle sonuç odaklı. Uzun saatli bir kurs illüzyonundan çok, YouTube'a başlamayı düşünen veya yolun başında olan herkese neyin nasıl yapılması gerektiğini anlatan bilgi dolu bir içerik.",
    name: 'Ömer Yörükoğlu',
  },
  {
    quote:
      'İlk dersi bitirdim. İlk dersten satın alanları düşünüp "lütfen kursu bitirin ve uygulayın" diye bu kadar ısrarla dile getirilen bir kursa denk gelmemiştim. Sunum ve ses kalitesi de çok iyi. Anlatılan bilgilerin kalitesine diyecek yok.',
    name: 'Oktay',
  },
]

export const channel = {
  eyebrow: '06 — Kanal',
  title: 'Kanaldan son videolar.',
  body:
    "Altı yıldır video üretiyorum, kanalda 1.000'den fazla video var. Bu kurs, o videoların nasıl ortaya çıktığının cevabı: fikirden kapağa, kurgudan sponsor görüşmesine kadar.",
  handle: '@yusufipk',
  stats: ['230.000+ abone', '72 milyon+ izlenme', "1.000'den fazla video"],
  videos: [
    {
      id: 'xYyuaYXUpdU',
      title: 'Linux Adam ÖLDÜ(!) — İzleyicilerime Sesleniş',
      date: '3 Kasım 2026',
      thumb: 'https://i.ytimg.com/vi/xYyuaYXUpdU/hqdefault.jpg',
    },
    {
      id: 'zyudLHxtAeg',
      title: 'Sadece Reklam Görerek Hacklenebilir Misiniz?',
      date: '2 Kasım 2026',
      thumb: 'https://i.ytimg.com/vi/zyudLHxtAeg/hqdefault.jpg',
    },
    {
      id: 'K5incXt-UuI',
      title: 'Google Yapay Zeka Sıralamasında Birinci Oldu',
      date: '1 Kasım 2026',
      thumb: 'https://i.ytimg.com/vi/K5incXt-UuI/hqdefault.jpg',
    },
  ],
}

export const pricing = {
  eyebrow: '07 — Katılım',
  title: 'Kursun tamamı. Tek ödeme.',
  intro:
    'Tek bir sponsorluk görüşmesinde masada bıraktığınız fark, kursun bedelinden fazla olabilir.',
  features: [
    '8 modül, 48 dersin tamamı',
    'Sponsorluk üzerine 9 ders',
    'Notion sponsor CRM şablonu',
    'Hazır sponsorluk sözleşmesi',
    'Markaları ikna eden sunum formülü',
    'Gemini prompt kütüphanesi',
    'F/P ekipman listesi',
    'Ömür boyu erişim',
  ],
  note: 'Erişim, ödeme sonrası hesabınıza anında tanımlanır.',
  legal:
    "Satın alarak Hizmet Şartları, Mesafeli Satış Sözleşmesi, Gizlilik Politikası ve İade Politikası'nı kabul etmiş olursunuz.",
}

export const faq = {
  eyebrow: '08 — Sorular',
  title: 'Sorular.',
  items: [
    {
      q: 'Kaç abonem olursa sponsor bulabilirim?',
      a: "Abone sayısı tek başına bir eşik değil. Markalar kime, ne kadar süre ve hangi kitleye ulaştığınıza bakıyor. Sponsorluk bölümünde markanın bütçesini nasıl öğreneceğinizi, teklifi nasıl kuracağınızı ve hangi durumda 'hayır' demeniz gerektiğini anlatıyorum.",
    },
    {
      q: 'Ne kadar sürede sonuç alırım?',
      a: 'Kurs kendi hızınızda ilerleyen 48 dersten oluşuyor. Sonuç, dersleri uygulayıp video yayınlamanıza bağlı. Kimse size bir tarih garantisi veremez; ilk ders ücretsiz, nasıl çalıştığını görüp kendiniz karar verin.',
    },
    {
      q: 'Kameram iyi değil, yine de işe yarar mı?',
      a: "Kursun “Hangi Ekipmanı Almanıza Gerek Yok?” dersi tam olarak bunun için var. İyi video pahalı bir kameradan önce fikir, ışık ve kurgudan geliyor. Elinizdeki telefonla başlayabilirsiniz.",
    },
    {
      q: 'Satın aldıktan sonra erişim nasıl oluyor?',
      a: 'Ödeme sonrası erişim hesabınıza anında tanımlanır. Tüm modüller ve bonus şablonlar ömür boyu açık kalır; dilediğiniz zaman, kendi hızınızda ilerlersiniz.',
    },
  ],
}