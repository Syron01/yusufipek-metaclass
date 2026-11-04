# Asset store

Bu klasör, sitenin tek görsel kaynağı. Her dosya elle üretildi, lisansı projeye ait.

## portrait/
| Dosya | Boyut | Kullanım |
| --- | --- | --- |
| `yusuf-portrait@2x.webp` | 1100 × 1272 | Hero, 2x ekranlar |
| `yusuf-portrait.webp` | 700 × 809 | Hero, 1x / mobil |
| `yusuf-avatar.webp` | 480 × 480 | Hikâye imzası, kapanış, menü |

Kaynak: `Confident Bearded Man Cutout.png` (şeffaf kesim). Uygulanan işlem: %58 doygunluk,
hafif sıcak gölge degradesi, alt uçta sayfaya karışan alfa geçişi. Yeniden üretmek için
`.freebuff/build_assets.py` çalıştırılabilir.

## youtube/
Kanalın son yüklenen üç videosunun 1280 × 720 kapak görseli. Dosya adı = video kimliği.
Kartlar tıklanınca `youtube-nocookie.com` üzerinden oynatılır; sayfa açılışında üçüncü
taraf isteği yapılmaz.

## brand/
- `favicon.svg` — 64 × 64, koyu zemin + ince halka + dolu play üçgeni.
- `apple-touch-icon.png` — 180 × 180.
- `play.svg` — 1.4px kontur, 48 × 48.
- `youtube.svg` — 1.3px kontur, 24 × 24.

Arayüzdeki ikonların tamamı `src/components/Icons.tsx` içinde React bileşeni olarak durur
(tek renk, `currentColor`, 1.3–1.4px kontur).

## texture/
- `grain.png` — 220 × 220, düşük alfalı film greni. `body::after` katmanında %20 opaklıkla,
  `soft-light` karışımla kullanılıyor.

## Kök
- `public/og.jpg` — 1200 × 630 paylaşım kartı; portre, sıcak ışık ve başlık.
