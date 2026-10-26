# P.E.T Docs

Psych Engine Türkiye (P.E.T) ve Further Engine kurulum rehberleri, virüs uyarıları açıklaması, eski sürüm/modpack arşivi, bağlantılar ve destek merkezi.

---

## 1. Arşiv Kartlarına Logo ve Çoklu İndirme Linki Ekleme

### Arşiv Logoları (`assets/img/logos/`)
Arşiv kartlarında yer tutucu logo yuvaları hazırdır. Görsellerinizi aşağıdaki isimlerle **`assets/img/logos/`** klasörüne attığınız anda yer tutucu simge gizlenir ve hem **Arşiv** sayfasında hem de **Ana Sayfa** önizlemesinde logonuz görünür:

| Arşiv Kartı | Beklenen Logo Yolu |
|---|---|
| **Psych Engine Türkiye** | `assets/img/logos/psych-engine-tr.png` |
| **Psych Extended Online Türkiye** | `assets/img/logos/psych-extended-tr.png` |
| **Psych Engine Türkiye (0.7.3)** | `assets/img/logos/pet-073.png` |
| **Further Engine Sürüm Arşivi** | `assets/img/logos/further-engine.png` |
| **Further Modpack (300+ Mod)** | `assets/img/logos/further-modpack.png` |
| **P.E.T Klasik Modpack** | `assets/img/logos/pet-modpack.png` |
| **GkteTok** | `assets/img/logos/gktetok.png` |
| **Further Tool** | `assets/img/logos/further-tool.png` |
| **FNF-Porter-Mobile** | `assets/img/logos/fnf-porter.png` |

### Çoklu İndirme & Platform Seçimi (`data/archive.json`)
Bir indirme butonuna (**Google Drive**, **MediaFire**, **İndir** vb.) basıldığında ziyaretçinin **Windows / Android / Linux** seçip her platformda **farklı bir siteye/dosyaya** yönlendirilmesi için **`"platforms"`** alanını kullanabilirsiniz:

```json
"downloads": [
  {
    "label": "Google Drive",
    "icon": "fa-google-drive",
    "primary": true,
    "platforms": {
      "windows": "https://drive.google.com/...windows-linki...",
      "android": "https://drive.google.com/...android-apk-linki..."
    }
  },
  {
    "label": "MediaFire",
    "icon": "fa-cloud-arrow-down",
    "platforms": {
      "windows": "https://www.mediafire.com/...windows...",
      "android": "https://www.mediafire.com/...android..."
    }
  },
  {
    "label": "Kaynak Kodu",
    "url": "https://github.com/SametGkTe/Psych-Engine-Turkey",
    "icon": "fa-github"
  }
]
```

- Hazır kısayol anahtarları: `windows`, `windows32`, `android`, `android32`, `linux`, `macos`, `ios` (otomatik başlık, açıklama ve ikon alır).
- Özel isim ve alt açıklama yazmak isterseniz `"platforms"` alanını dizi olarak da tanımlayabilirsiniz (`[{ "label": "Part 1 (PC)", "sub": "ZIP · 2 GB", "url": "https://...", "icon": "fa-windows" }]`).
- Platform seçimi istemediğiniz tekil linklerde doğrudan `"url": "https://..."` yazmanız yeterlidir.

---

## 2. Doküman Ekran Görüntülerini Ekleme (`assets/img/docs/`)

Görsellerinizi aşağıdaki isimlerle **`assets/img/docs/`** klasörüne attığınız anda yer tutucu kutular otomatik gizlenir ve gerçek ekran görüntüleriniz (tıklayınca büyütme özelliğiyle) görünür:

| Rehber Başlığı | Beklenen Dosya Yolu | Açıklama |
|---|---|---|
| **Kurulum** | `assets/img/docs/kurulum-pc.png` | ZIP'ten klasöre çıkartılmış oyun dosyaları |
| **Kurulum** | `assets/img/docs/kurulum-android.png` | ZArchiver gizli dosyalar ve `.further/mods` dizini |
| **Modpack Kurulumu** | `assets/img/docs/modpack-oyun-ici.png` | Oyun içi Modpacks tarayıcısı |
| **Modpack Kurulumu** | `assets/img/docs/modpack-klasor.png` | Modpack klasörlerinin `mods/` dizinine aktarılması |
| **Diğer Mod Kurulumları** | `assets/img/docs/mod-klasor-yapisi.png` | Doğru ve yanlış mod klasör yapısı |
| **Diğer Mod Kurulumları** | `assets/img/docs/diger-mod-port.png` | Farklı mod yapıları veya port aracı görünümü |
| **Virüs Konuları** | `assets/img/docs/virus-smartscreen.png` | Windows SmartScreen `Ek bilgi -> Yine de çalıştır` ekranı |
| **Virüs Konuları** | `assets/img/docs/virus-virustotal.png` | VirusTotal yanlış pozitif görünümü |
| **Virüs Konuları** | `assets/img/docs/virus-sahte-link.png` | Güvenli mod dosyaları ile şüpheli dosyalar |

> **İpucu (Alt Başlık Linki Paylaşma):** Doküman içindeki her alt başlığın yanındaki küçük bağlantı ikonuna tıklayarak doğrudan o bölüme kaydıran linki (`#/docs/virus-konulari/windows-defender-ve-smartscreen-uyarisi` gibi) kopyalayabilirsiniz.

---

## 3. Destek, Son Eklenenler ve Linkleri Düzenleme

- **`data/support.json`** — Destek sayfasındaki TikTok (`@sametgkte`), Discord (`samette111`, ileride sunucu açarsanız `"url"` alanına davet linki yazmanız yeterli) ve GitHub hata bildirimi kutularını buradan güncelleyebilirsiniz.
- **`data/updates.json`** — Ana Sayfa'daki **Son Eklenenler** kutusuna yeni duyuru veya arşiv kaydı satırı ekleyebilirsiniz.
- **`data/links.json`** — Bağlantılar sayfasındaki grupları ve linkleri buradan düzenleyebilirsiniz.
