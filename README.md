# YouTube Meta Class — Yusuf İpek

Kurs satış sayfasının yeniden tasarımı. Koyu, sıcak ışıklı ve editoryal bir tema; gerçek
portre, gerçek ders içeriği ve gerçek öğrenci yorumları.

## Çalıştırma

```bash
bun install
bun run dev      # http://127.0.0.1:5173
bun run build    # tsc + vite build
```

## Yapı

- `src/content.ts` — bütün metinler, linkler, modüller, fiyat. İçerik değişikliği burada.
- `src/styles/global.css` — tasarım sistemi, bölümler ve kırılımlar.
- `src/App.tsx` — Lenis + GSAP ScrollTrigger koreografisi.
- `src/components/` — bölümler ve `Icons.tsx` ikon seti.
- `public/assets/` — görsel varlık deposu; envanter `ASSETS.md` içinde.

Satın alma, giriş ve yasal bağlantılar `src/content.ts` içindeki `links` nesnesinden
yönetilir ve mevcut mağaza rotalarına (`/pricing`, `/course`, `/auth/signin`) gider.

## Hareket

Sistemde "animasyonları azalt" açıksa sayfa erişilebilirlik gereği sakin modda açılır.
Tam koreografiyi görmek için adrese `?motion=full`, sakin modu zorlamak için
`?motion=reduce` eklenebilir.

## Varlıklar

Portre, kesim fotoğraftan üretildi (sıcak gölge degradesi, alt geçiş). Yeniden üretmek için
`.freebuff/build_assets.py`. YouTube kapakları kanalın son videolarından indirildi; kart
tıklanana kadar üçüncü taraf isteği yapılmaz.
