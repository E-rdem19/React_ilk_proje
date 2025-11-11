# React İlk Proje

Kısa Açıklama
Bu depo, React ile yapılmış öğretici ve başlangıç seviyesinde bir proje örneğidir. Amaç, React bileşen yapısını, temel state yönetimini ve proje dizin yapısını göstermek; hızlıca bir uygulama başlatmak isteyenler için hazır bir iskelet sunmaktır.

Özellikler
- Fonksiyonel React bileşenleri (Hooks ile)
- useState / useEffect örnekleri
- Basit sayfa yapısı (isteğe bağlı router)
- Örnek yeniden kullanılabilir bileşenler
- Hazır NPM/Yarn scriptleri

Ön Koşullar
- Node.js (LTS önerilir, örn. >= 14)
- npm veya yarn
- Git (depo ile çalışmak için)

Kurulum (Yerel)
1. Depoyu klonlayın
```bash
git clone https://github.com/E-rdem19/React_ilk_proje.git
cd React_ilk_proje
```
2. Bağımlılıkları yükleyin
```bash
# npm kullananlar
npm install

# veya yarn kullananlar
yarn install
```

Çalıştırma (Geliştirme)
```bash
# npm
npm start

# veya yarn
yarn start
```
Tarayıcı otomatik olarak http://localhost:3000 adresinde açılacaktır (create-react-app yapılandırmasına göre).

Üretim İçin Derleme
```bash
# npm
npm run build

# veya yarn
yarn build
```
Build sonucu `build/` klasöründe oluşur ve statik sunuculara deploy edilebilir.

Mevcut Script'ler
- start — Geliştirme sunucusunu başlatır
- build — Üretim için paketler
- test — (Varsa) testleri çalıştırır
- lint — (Varsa) kod kalitesi kontrolleri

Proje Yapısı (Örnek)
- public/           — Statik dosyalar (index.html vb.)
- src/
  - components/     — Tekrar kullanılabilir küçük bileşenler
  - pages/          — Uygulama sayfaları
  - hooks/          — Özel hook'lar (varsa)
  - styles/         — Ortak CSS / SCSS dosyaları
  - App.js          — Uygulama kök bileşeni
  - index.js        — React kök dosyası
- README.md         — Bu dosya
- package.json      — Bağımlılıklar ve script'ler

Örnek Bileşen (Kısa)
```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Sayac: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Sayac: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Arttır</button>
    </div>
  );
}

export default Counter;
```

Testler
Eğer bu projede test altyapısı varsa (Jest, React Testing Library vb.), çalıştırmak için:
```bash
# npm
npm test

# veya yarn
yarn test
```

Kodlama Standartları ve Lint
Proje ESLint / Prettier gibi araçlarla yapılandırıldıysa, ilgili script'leri package.json içinde bulabilirsiniz. Kod yazarken proje kurallarına uymaya çalışın.

Deploy / Yayınlama
- Basit olarak build edilmiş dosyalarınızı (build/) bir statik sunucuya veya Netlify, Vercel gibi hizmetlere göndererek yayınlayabilirsiniz.
- Vercel/Netlify için repository'yi bağlayıp build komutunu (npm run build) ve build dizinini (build) belirtmeniz yeterlidir.

Katkıda Bulunma
Katkılara açığız. Basit adımlar:
1. Repoyu fork'layın
2. Yeni bir branch açın: git checkout -b feature/isminiz
3. Değişiklik yapın
4. Commit edin: git commit -m "Açıklayıcı mesaj"
5. Branch'i push edin ve pull request açın

Kod katkıları yaparken:
- Açıklayıcı commit mesajları kullanın
- Gerekirse test ekleyin
- Büyük değişiklikler için önce issue açıp tartışın

Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için LICENSE dosyasına bakın.

İletişim
Herhangi bir soru veya geri bildirim için GitHub profilim üzerinden iletişime geçebilirsiniz: https://github.com/E-rdem19

Notlar
- README'yi proje içeriğine göre özelleştirin; örneğin özel bağımlılıklar, ek komutlar veya proje yapılandırması varsa bunları ekleyin.
- Eğer projede router (react-router) veya state yönetimi kütüphanesi (Redux, Zustand vb.) varsa, bu kısımları de README'ye eklemek iyi olur.
