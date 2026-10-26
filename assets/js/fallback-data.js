/* P.E.T Docs — Çevrimdışı (file://) yedek veri aynası */
window.PET_FALLBACK = {
  "docs": {
    "docs": [
      {
        "slug": "kurulum",
        "title": "Kurulum",
        "summary": "Further Engine ve P.E.T sürümlerinin PC (Windows/Linux) ve Android cihazlara temel kurulumu.",
        "blocks": [
          {
            "type": "heading",
            "text": "PC Kurulumu (Windows & Linux)"
          },
          {
            "type": "paragraph",
            "text": "İndirdiğiniz motor dosyası .zip veya .rar arşiv formatında gelir. Oyunu doğrudan WinRAR/7-Zip penceresinin içinden çalıştırmayın; aksi halde ses ve görsel dosyaları okunamadığı için oyun hata verir."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Arşivi Klasöre Çıkartın",
                "desc": "İndirdiğiniz ZIP dosyasına sağ tıklayıp masaüstünde veya oyun diskinizde boş bir klasöre çıkartın."
              },
              {
                "title": "Oyunu Başlatın",
                "desc": "Klasörün içindeki FurtherEngine.exe (eski P.E.T sürümlerinde PsychEngine.exe) dosyasına çift tıklayarak oyunu açın."
              }
            ]
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/kurulum-pc.png",
            "caption": "ZIP'ten klasöre çıkartılmış oyun dosyaları"
          },
          {
            "type": "heading",
            "text": "Android Kurulumu (.APK)"
          },
          {
            "type": "paragraph",
            "text": "Mobil sürümlerde modların ve kayıt dosyalarının çalışabilmesi için ilk açılışta depolama izninin verilmesi gerekir."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "APK'yı Yükleyin ve Bir Kez Açın",
                "desc": "APK kurulumundan sonra oyunu açın ve ekrana gelen 'Tüm dosyalara erişim / Depolama' iznini onaylayın. Oyun gerekli klasörleri bu aşamada oluşturur."
              },
              {
                "title": "Mod Klasörünü Bulun",
                "desc": "ZArchiver uygulamasında Ayarlar > Dosya Listesi > 'Gizli dosyaları göster' seçeneğini açın. Ana dizindeki '.further/mods/' (eski P.E.T portlarında 'PsychEngine/mods/') klasörünü görebilirsiniz."
              }
            ]
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/kurulum-android.png",
            "caption": "ZArchiver üzerinde gizli dosyaları gösterme ve .further/mods dizini"
          }
        ]
      },
      {
        "slug": "modpack-kurulumu",
        "title": "Modpack Kurulumu",
        "summary": "Oyun içi Modpack tarayıcısı ve arşivden indirilen toplu mod paketlerinin kurulum adımları.",
        "blocks": [
          {
            "type": "heading",
            "text": "1. Oyun İçi Modpack Menüsü (Further Engine)"
          },
          {
            "type": "paragraph",
            "text": "Further Engine'in güncel sürümlerinde harici dosya uğraşına gerek kalmadan doğrudan oyun içinden paket indirebilirsiniz. Ana menüden Mods > Modpacks bölümüne girip istediğiniz paketi seçmeniz yeterlidir."
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/modpack-oyun-ici.png",
            "caption": "Oyun içi Modpacks tarayıcısı"
          },
          {
            "type": "heading",
            "text": "2. Arşivden İndirilen Modpack'leri Kurma (ZIP / RAR)"
          },
          {
            "type": "paragraph",
            "text": "Arşiv sekmesinden veya MediaFire/Drive üzerinden indirdiğiniz eski P.E.T modpack dosyaları içinde birden fazla mod klasörü barındırır."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Modpack Arşivini Açın",
                "desc": "İndirdiğiniz arşivin içini açtığınızda her modun kendine ait ayrı bir klasörü olduğunu göreceksiniz."
              },
              {
                "title": "Alt Klasörleri 'mods/' Dizinine Atın",
                "desc": "Tüm modpack'i tek bir üst klasör halinde değil, içindeki ayrı mod klasörlerini seçerek doğrudan oyunun 'mods/' (Android'de '.further/mods/') klasörüne kopyalayın."
              },
              {
                "title": "Mods Menüsünden Kontrol Edin",
                "desc": "Oyunu açıp Mods menüsünden oynamak istediğiniz modları açık konuma getirin. Çok büyük paketlerde aynı anda tüm modları açık tutmak RAM kullanımını artırabilir."
              }
            ]
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/modpack-klasor.png",
            "caption": "Modpack içindeki mod klasörlerinin mods/ dizinine aktarılması"
          },
          {
            "type": "callout",
            "variant": "info",
            "title": "Further Tool ile Kolay Yönetim",
            "text": "Yüzlerce mod içeren paketlerde oyun açılmadan önce hangi modların aktif olacağını seçmek için masaüstünde Further Tool aracını kullanabilirsiniz."
          }
        ]
      },
      {
        "slug": "diger-mod-kurulumlari",
        "title": "Diğer Mod Kurulumları",
        "summary": "Standart klasör modları, iç içe klasör hatası, kendi .exe dosyasıyla gelen modlar ve eski sürüm uyumluluğu.",
        "blocks": [
          {
            "type": "heading",
            "text": "Standart Klasör Modları (mods/ Sistemi)"
          },
          {
            "type": "paragraph",
            "text": "GameBanana veya topluluktan indirdiğiniz Psych / Further uyumlu modları oyunun 'mods/' klasörüne atıp ana menüdeki MODS kısmından aktif etmeniz yeterlidir."
          },
          {
            "type": "callout",
            "variant": "warning",
            "title": "Mod Oyunda Görünmüyorsa: Çift Klasör Hatası",
            "text": "ZIP'ten çıkarırken 'mods/ModAdi/ModAdi/pack.json' şeklinde iç içe iki klasör oluşursa oyun modu okuyamaz. Klasöre girdiğinizde pack.json, data/ veya songs/ klasörleri doğrudan görünmelidir ('mods/ModAdi/pack.json')."
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/mod-klasor-yapisi.png",
            "caption": "Doğru ve yanlış mod klasör yapısı"
          },
          {
            "type": "heading",
            "text": "Kendi .exe Dosyasıyla İnen Bağımsız Modlar"
          },
          {
            "type": "paragraph",
            "text": "Bazı büyük veya eski modlar sadece klasör olarak değil, kendi özel motoruyla (PsychEngine.exe veya Funkin.exe) tam oyun halinde iner. Bu modları doğrudan 'mods/' klasörüne atmayın; kendi klasöründe ayrı bir oyun olarak çalıştırın."
          },
          {
            "type": "heading",
            "text": "Eski 0.6.x, CNE ve Mobil Port Modları"
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Eski Lua Modları Hata Verirse",
                "desc": "Çok eski Psych 0.6.x scriptleriyle yazılmış bir mod güncel motorda sorun çıkarırsa Arşiv sekmesinden 'Psych Engine Türkiye v0.6.3' sürümünü kullanabilirsiniz."
              },
              {
                "title": "Codename Engine (CNE) Modları",
                "desc": "CNE yapısına göre hazırlanmış paketler için Arşiv sekmesindeki 'Psych Extended Online Türkiye' sürümü uyumluluk sunar."
              },
              {
                "title": "PC Modları Android'de Çöküyorsa",
                "desc": "Android büyük/küçük harf farkına ve boşluklu dosya isimlerine ('Resim 1.PNG' gibi) duyarlıdır. Açılmayan PC modlarını FNF-Porter-Mobile aracıyla mobil uyumlu hale getirebilirsiniz."
              }
            ]
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/diger-mod-port.png",
            "caption": "Farklı türdeki mod yapıları veya port aracı görünümü"
          }
        ]
      },
      {
        "slug": "virus-konulari",
        "title": "Virüs Konuları",
        "summary": "Windows SmartScreen, Windows Defender ve VirusTotal üzerinde çıkan uyarıların sebebi ve sahte linklerden korunma.",
        "blocks": [
          {
            "type": "heading",
            "text": "1. Windows SmartScreen Uyarısı Neden Çıkar?"
          },
          {
            "type": "paragraph",
            "text": "P.E.T ve Further Engine açık kaynaklı ve tamamen ücretsiz projelerdir. Microsoft'un tanıdığı ticari dijital imza sertifikaları yıllık yüzlerce dolar ücretli olduğu için bağımsız FNF motorları imzasız olarak derlenir. Bu yüzden ilk açılışta 'Windows kişisel bilgisayarınızı korudu' ekranı çıkması normaldir; bu bir virüs tespiti değildir."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Kaynağı Doğrulayın",
                "desc": "Dosyayı resmi Further Engine sitesinden, P.E.T Docs arşivinden veya github.com/SametGkTe adresinden indirdiğinizden emin olun."
              },
              {
                "title": "Ek Bilgi > Yine de Çalıştır",
                "desc": "Penceredeki 'Ek bilgi' yazısına tıklayıp açılan 'Yine de çalıştır' butonuna basın. Sonraki girişlerde bu ekran tekrar çıkmaz."
              }
            ]
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/virus-smartscreen.png",
            "caption": "Windows SmartScreen ekranında 'Ek bilgi' ve 'Yine de çalıştır' adımı"
          },
          {
            "type": "heading",
            "text": "2. VirusTotal'da Neden 1–3 Uyarı Görünebiliyor? (False-Positive)"
          },
          {
            "type": "paragraph",
            "text": "Haxe ve C++ (HXCPP) ile derlenen tüm Psych tabanlı motorlar, mod çalıştırabilmek için içinde Lua ve HScript yorumlayıcısı barındırır. VirusTotal'daki 70+ tarayıcıdan 1-2 tanesi (genellikle küçük sezgisel/yapay zeka motorları) imzasız her oyun motoruna 'AIDetectMalware' veya 'Generic.susgen' gibi yanlış pozitif (false-positive) etiketler verebilir."
          },
          {
            "type": "paragraph",
            "text": "Kaspersky, Bitdefender, ESET, Malwarebytes ve Microsoft gibi ana antivirüs motorları 'Temiz' diyorsa dosya güvenlidir. Ayrıca kaynak kodlarımız GitHub üzerinde herkese açıktır."
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/virus-virustotal.png",
            "caption": "VirusTotal üzerinde yanlış pozitif görünümü"
          },
          {
            "type": "heading",
            "text": "3. Gerçek Tehlikeyi ve Sahte Linkleri Nasıl Anlarsınız?"
          },
          {
            "type": "callout",
            "variant": "danger",
            "title": "Şu Durumlarda Dosyayı Kesinlikle Açmayın",
            "text": "Sadece şarkı/karakter modu olduğunu söyleyen bir klasör modunun içinden 'Setup.exe', şifreli '.rar', '.bat' veya '.scr' çıkıyorsa; MediaFire'da indirme butonuna bastığınızda açılan yan reklam sekmesinden farklı isimde bir .exe indiyse; ya da VirusTotal'da 15+ büyük antivirüs 'Stealer / Trojan' diyorsa dosyayı hemen silin."
          },
          {
            "type": "screenshot",
            "src": "assets/img/docs/virus-sahte-link.png",
            "caption": "Güvenli mod dosyaları ile şüpheli dosyaların karşılaştırması"
          }
        ]
      }
    ]
  },
  "archive": {
    "categories": [
      {
        "id": "engine",
        "label": "Engine Arşivi"
      },
      {
        "id": "modpack",
        "label": "Modpack'ler"
      },
      {
        "id": "tool",
        "label": "Araçlar"
      }
    ],
    "items": [
      {
        "id": "pet-classic-063",
        "title": "Psych Engine Türkiye",
        "logo": "assets/img/logos/psych-engine-tr.png",
        "category": "engine",
        "version": "v0.6.3h",
        "platforms": "Windows, Android",
        "size": "198 MB",
        "description": "Mind Games altyapılı ve Türkçe menülü klasik P.E.T sürümü. Eski 0.6.x Lua modlarıyla uyumludur.",
        "downloads": [
          {
            "label": "Google Drive",
            "icon": "fa-google-drive",
            "primary": true,
            "platforms": {
              "windows": "",
              "android": ""
            }
          },
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "platforms": {
              "windows": "",
              "android": ""
            }
          },
          {
            "label": "Kaynak Kodu",
            "url": "https://github.com/SametGkTe/Psych-Engine-Turkey",
            "icon": "fa-github"
          }
        ],
        "image": ""
      },
      {
        "id": "pet-extended-online",
        "title": "Psych Extended Online Türkiye",
        "logo": "assets/img/logos/psych-extended-tr.png",
        "category": "engine",
        "version": "v1.2",
        "platforms": "Windows, Android",
        "size": "264 MB",
        "description": "Codename Engine (CNE) mod uyumluluğu ve genişletilmiş modlama desteği içeren P.E.T fork'u.",
        "downloads": [
          {
            "label": "Google Drive",
            "icon": "fa-google-drive",
            "primary": true,
            "platforms": {
              "windows": "",
              "android": ""
            }
          },
          {
            "label": "Kaynak Kodu",
            "url": "https://github.com/SametGkTe/Psych-Extended-Online-Turkey",
            "icon": "fa-github"
          }
        ],
        "image": ""
      },
      {
        "id": "pet-legacy-073",
        "title": "Psych Engine Türkiye (0.7.3 Geçiş Sürümü)",
        "logo": "assets/img/logos/pet-073.png",
        "category": "engine",
        "version": "v0.7.3",
        "platforms": "Windows, Android",
        "size": "242 MB",
        "description": "Further Engine markasına geçilmeden önceki son 0.7.3 tabanlı P.E.T sürümü.",
        "downloads": [
          {
            "label": "Google Drive",
            "icon": "fa-google-drive",
            "primary": true,
            "platforms": {
              "windows": "",
              "android": ""
            }
          },
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "platforms": {
              "windows": "",
              "android": ""
            }
          }
        ],
        "image": ""
      },
      {
        "id": "further-old-releases",
        "title": "Further Engine Sürüm Arşivi",
        "logo": "assets/img/logos/further-engine.png",
        "category": "engine",
        "version": "v1.0 – v1.7.0",
        "platforms": "Windows, Android, Linux, macOS, iOS",
        "size": "270–330 MB",
        "description": "Further Engine'in güncel ve geçmiş derlemeleri. Platform seçerek doğrudan istediğiniz cihaz sürümünü indirebilirsiniz.",
        "downloads": [
          {
            "label": "v1.7.0 İndir",
            "icon": "fa-download",
            "primary": true,
            "platforms": {
              "windows": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.7.0/Further-Engine-Windows-x86_64.zip",
              "android": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.7.0/Further-Engine-Android.apk",
              "linux": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.7.0/Further-Engine-Linux-x86_64.zip",
              "macos": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.7.0/Further-Engine-MacOS-arm64.zip",
              "ios": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.7.0/Further-Engine-IOS.ipa"
            }
          },
          {
            "label": "v1.6.2 (Eski)",
            "icon": "fa-box-archive",
            "platforms": {
              "windows": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.6.2/Further-Engine-Windows-x86_64.zip",
              "android": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.6.2/Further-Engine-Android.apk",
              "linux": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.6.2/Further-Engine-Linux-x86_64.zip",
              "macos": "https://github.com/SametGkTe/Funky-Further-Engine/releases/download/1.6.2/Further-Engine-MacOS-arm64.zip"
            }
          },
          {
            "label": "Tüm Sürümler",
            "url": "https://github.com/SametGkTe/Funky-Further-Engine/releases",
            "icon": "fa-github"
          }
        ],
        "image": ""
      },
      {
        "id": "further-modpack",
        "title": "Further Modpack (300+ Mod)",
        "logo": "assets/img/logos/further-modpack.png",
        "category": "modpack",
        "version": "v1.1.0",
        "platforms": "Windows, Android, Linux",
        "size": "6–7 GB",
        "description": "Oyun içi Modpack tarayıcısında da yer alan kapsamlı mod koleksiyonu.",
        "downloads": [
          {
            "label": "Google Drive",
            "icon": "fa-google-drive",
            "primary": true,
            "platforms": {
              "windows": "",
              "android": ""
            }
          },
          {
            "label": "Paket Deposu",
            "url": "https://github.com/SametGkTe/Further-Modpack-Content",
            "icon": "fa-github"
          },
          {
            "label": "Kurulum Rehberi",
            "url": "#/docs/modpack-kurulumu",
            "icon": "fa-book-open"
          }
        ],
        "image": ""
      },
      {
        "id": "pet-eski-modpack",
        "title": "P.E.T Klasik Modpack (Silinen Paket)",
        "logo": "assets/img/logos/pet-modpack.png",
        "category": "modpack",
        "version": "Arşiv",
        "platforms": "Windows, Android",
        "size": "3.8 GB",
        "description": "Psych Engine Türkiye döneminde paylaşılan klasik mod derlemesi. Platform linklerini archive.json dosyasından ekleyebilirsiniz.",
        "downloads": [
          {
            "label": "Google Drive",
            "icon": "fa-google-drive",
            "primary": true,
            "platforms": {
              "windows": "",
              "android": ""
            }
          },
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "platforms": [
              {
                "label": "Windows (PC Paketi)",
                "sub": "ZIP · Masaüstü",
                "url": "",
                "icon": "fa-windows"
              },
              {
                "label": "Android (Mobil Paketi)",
                "sub": "ZIP / .further Uyumlu",
                "url": "",
                "icon": "fa-android"
              }
            ]
          }
        ],
        "image": ""
      },
      {
        "id": "gktetok",
        "title": "GkteTok",
        "logo": "assets/img/logos/gktetok.png",
        "category": "modpack",
        "version": "v1.0",
        "platforms": "Windows, Android",
        "size": "95 MB",
        "description": "Further ekosistemi için hazırlanan topluluk mod paketi.",
        "downloads": [
          {
            "label": "Google Drive",
            "icon": "fa-google-drive",
            "primary": true,
            "platforms": {
              "windows": "",
              "android": ""
            }
          },
          {
            "label": "GitHub",
            "url": "https://github.com/SametGkTe/GkteTok",
            "icon": "fa-github"
          }
        ],
        "image": ""
      },
      {
        "id": "further-tool",
        "title": "Further Tool",
        "logo": "assets/img/logos/further-tool.png",
        "category": "tool",
        "version": "v1.4.1",
        "platforms": "Android, Windows",
        "size": "Hafif Araç",
        "description": "Siyah-beyaz mod yöneticisi, oyun güncelleme kontrolü ve yardımcı araç.",
        "downloads": [
          {
            "label": "İndir (v1.4.1)",
            "icon": "fa-download",
            "primary": true,
            "platforms": [
              {
                "label": "Android (Release APK)",
                "sub": "Standart Kurulum · v1.4.1",
                "url": "https://github.com/SametGkTe/Further-Tool/releases/download/v1.4.1/Further-Tool-v1.4.1-release.apk",
                "icon": "fa-android"
              },
              {
                "label": "Windows (Masaüstü)",
                "sub": "Yakında / Depo Üzerinden",
                "url": "https://github.com/SametGkTe/Further-Tool/releases",
                "icon": "fa-windows"
              }
            ]
          },
          {
            "label": "Kaynak Kodu",
            "url": "https://github.com/SametGkTe/Further-Tool",
            "icon": "fa-github"
          }
        ],
        "image": ""
      },
      {
        "id": "fnf-porter-mobile",
        "title": "FNF-Porter-Mobile",
        "logo": "assets/img/logos/fnf-porter.png",
        "category": "tool",
        "version": "v1.0.0",
        "platforms": "Android, Windows, Linux",
        "size": "Açık Kaynak",
        "description": "PC modlarını diğer motorlara ve mobil sürümlere uyarlamayı kolaylaştıran araç.",
        "downloads": [
          {
            "label": "İndir (v1.0.0)",
            "icon": "fa-download",
            "primary": true,
            "platforms": [
              {
                "label": "Android (APK)",
                "sub": "Doğrudan Mobil Kurulum · v1.0.0",
                "url": "https://github.com/SametGkTe/FNF-Porter-Mobile/releases/download/v1.0.0/FNF-Porter-For-Mobile-v1.0.0.apk",
                "icon": "fa-android"
              },
              {
                "label": "Windows / Linux (PC)",
                "sub": "Python Aracı & Kaynak Kodu",
                "url": "https://github.com/SametGkTe/FNF-Porter-Mobile",
                "icon": "fa-windows"
              }
            ]
          },
          {
            "label": "Tüm Sürümler",
            "url": "https://github.com/SametGkTe/FNF-Porter-Mobile/releases",
            "icon": "fa-github"
          }
        ],
        "image": ""
      }
    ]
  },
  "links": {
    "groups": [
      {
        "title": "Ana Projeler",
        "items": [
          {
            "title": "Further Engine Ana Sitesi",
            "desc": "Güncel sürüm indirmeleri, global sıralama (Leaderboard) ve modpack vitrini.",
            "url": "https://further-engine.github.io/",
            "icon": "fa-globe"
          },
          {
            "title": "Funky-Further-Engine (GitHub)",
            "desc": "Kaynak kodu, tüm sürümler (Releases) ve sürüm notları.",
            "url": "https://github.com/SametGkTe/Funky-Further-Engine",
            "icon": "fa-github"
          },
          {
            "title": "Further Tool",
            "desc": "Resmi masaüstü mod yöneticisi ve hızlı başlatıcı.",
            "url": "https://github.com/SametGkTe/Further-Tool",
            "icon": "fa-wrench"
          }
        ]
      },
      {
        "title": "P.E.T Arşiv Depoları & Araçlar",
        "items": [
          {
            "title": "Psych Engine Türkiye",
            "desc": "Klasik P.E.T kaynak kodu deposu.",
            "url": "https://github.com/SametGkTe/Psych-Engine-Turkey",
            "icon": "fa-box-archive"
          },
          {
            "title": "Psych Extended Online Türkiye",
            "desc": "CNE mod uyumluluğu sunan genişletilmiş P.E.T sürümü.",
            "url": "https://github.com/SametGkTe/Psych-Extended-Online-Turkey",
            "icon": "fa-cubes"
          },
          {
            "title": "FNF-Porter-Mobile",
            "desc": "Modları motorlar arası ve mobil cihazlara portlama aracı.",
            "url": "https://github.com/SametGkTe/FNF-Porter-Mobile",
            "icon": "fa-android"
          },
          {
            "title": "Further Modpack Content",
            "desc": "Oyun içi modpack tarayıcısının kullandığı paket deposu.",
            "url": "https://github.com/SametGkTe/Further-Modpack-Content",
            "icon": "fa-folder-open"
          }
        ]
      },
      {
        "title": "Geliştirici & Sosyal Hesaplar",
        "items": [
          {
            "title": "TikTok (@sametgkte)",
            "desc": "Resmi TikTok hesabı — yeni sürüm videoları ve duyurular.",
            "url": "https://www.tiktok.com/@sametgkte",
            "icon": "fa-tiktok"
          },
          {
            "title": "Modlama Rehberi (MODDING_TR.md)",
            "desc": "Lua, HScript ve klasör yapısı hakkında teknik geliştirici notları.",
            "url": "https://github.com/SametGkTe/Funky-Further-Engine/blob/main/docs/MODDING_TR.md",
            "icon": "fa-book-open"
          },
          {
            "title": "Hata Bildirimi (GitHub Issues)",
            "desc": "Oyun hataları veya kırık arşiv linklerini bildirmek için.",
            "url": "https://github.com/SametGkTe/Funky-Further-Engine/issues/new/choose",
            "icon": "fa-bug"
          },
          {
            "title": "SametGkTe Bağlantıları",
            "desc": "Tüm sosyal medya ve duyuru adresleri.",
            "url": "https://linktr.ee/skysamet",
            "icon": "fa-users"
          }
        ]
      }
    ]
  },
  "support": {
    "title": "Destek & İletişim",
    "subtitle": "Kurulum sorunları, kırık arşiv bağlantıları veya motor hataları için doğrudan ulaşabileceğiniz hesaplar.",
    "channels": [
      {
        "id": "tiktok",
        "platform": "TikTok",
        "handle": "@sametgkte",
        "icon": "fa-tiktok",
        "description": "Yeni sürüm duyuruları, mod paylaşımları ve kısa kurulum videoları. Yorumlardan veya mesaj üzerinden ulaşabilirsiniz.",
        "url": "https://www.tiktok.com/@sametgkte",
        "openLabel": "TikTok'ta Aç",
        "copyValue": "@sametgkte",
        "copyToast": "TikTok kullanıcı adı kopyalandı: @sametgkte"
      },
      {
        "id": "discord",
        "platform": "Discord",
        "handle": "samette111",
        "icon": "fa-discord",
        "description": "Kurulum hatası, çökme sorunu veya arşivde aradığınız eski bir P.E.T sürümü için arkadaş ekleyip yazabilirsiniz.",
        "url": "",
        "openLabel": "Sunucuya Katıl",
        "copyValue": "samette111",
        "copyToast": "Discord kullanıcı adı kopyalandı: samette111"
      }
    ],
    "bugReport": {
      "title": "GitHub Hata Bildirimi (Issues)",
      "description": "Oyun içi teknik hataları, çökme kayıtlarını (crash log) veya çalışmayan arşiv linklerini doğrudan GitHub üzerinden bildirebilirsiniz.",
      "url": "https://github.com/SametGkTe/Funky-Further-Engine/issues/new/choose",
      "buttonLabel": "Hata Bildir"
    },
    "checklist": [
      {
        "title": "Cihaz ve Sürüm Bilgisi",
        "desc": "Mesaj yazarken PC (Windows/Linux) mi yoksa Android mi kullandığınızı ve motor sürümünü (ör. Further v1.7, P.E.T 0.6.3h) belirtin."
      },
      {
        "title": "Ekran Görüntüsü veya Hata Metni",
        "desc": "Aldığınız hatanın veya mods/ klasör yapısının ekran görüntüsünü göndermeniz sorunun çok daha hızlı çözülmesini sağlar."
      },
      {
        "title": "Sık Yaşanan Sorunlar İçin Rehberler",
        "desc": "SmartScreen uyarısı, modların listede görünmemesi veya Android .further klasörü için önce Dokümanlar sayfasına göz atabilirsiniz."
      }
    ]
  },
  "updates": {
    "items": [
      {
        "date": "Ekim 2026",
        "title": "Destek sayfası ve çoklu indirme seçenekleri eklendi",
        "desc": "Arşiv kartlarına platform/yedek indirme bağlantıları ile TikTok (@sametgkte) ve Discord (samette111) destek kanalları eklendi.",
        "href": "#/support"
      },
      {
        "date": "Ekim 2026",
        "title": "Virüs ve SmartScreen rehberi yayınlandı",
        "desc": "Windows SmartScreen uyarısı, VirusTotal yanlış pozitif sonuçları ve şüpheli mod kontrolü açıklandı.",
        "href": "#/docs/virus-konulari"
      },
      {
        "date": "Ekim 2026",
        "title": "P.E.T eski sürüm ve modpack arşivi açıldı",
        "desc": "Psych Engine Türkiye 0.6.3h, Extended Online ve yardımcı port araçları arşive eklendi.",
        "href": "#/archive"
      }
    ]
  }
};
