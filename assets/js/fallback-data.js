/* P.E.T Docs - Cevrimdisi (file://) yedek veri aynasi
   OTOMATIK URETILDI - elle duzenlemeyin.
   data/*.json degistiginde: python3 tools/build-fallback.py
   Kaynak: tools/build-fallback.py
*/
window.PET_FALLBACK = {
  "docs": {
    "docs": [
      {
        "slug": "kurulum",
        "title": "Kurulum",
        "summary": "Further Engine ve P.E.T sürümlerinin Windows, Android vb. cihazlara temel kurulumu.",
        "blocks": [
          {
            "type": "heading",
            "text": "PC Kurulumu (Windows ve Linux)"
          },
          {
            "type": "paragraph",
            "text": "İndirdiğiniz oyun .zip veya .rar şeklinde gelir. Oyunu doğrudan WinRAR/7-Zip penceresinin içinden çalıştırmayın, aksi halde Temp üzerinden çalıştığından Lime hataları ve asset hataları alabilirsiniz"
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Arşivi Klasöre Çıkartın",
                "desc": "İndirdiğiniz ZIP dosyasına sağ tıklayıp Klasöre Çıkart'a basın. İşlem TAMAMEN bittikten sonra oyun klasörünü istediğiniz yere taşıyabilirsiniz"
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
                "title": "APK'yı Yükleyin ve Uygulamayı bir Kez Açın",
                "desc": "APK kurulumundan sonra oyunu açın ve ekrana gelen 'Tüm dosyalara erişim / Depolama' iznini onaylayın. Oyun gerekli klasörleri sadece bu aşamada oluşturur."
              },
              {
                "title": "Mod Klasörünü Bulun",
                "desc": "ZArchiver uygulamasında Ayarlar > Dosya Yöneticisi > 'Gizli dosyaları göster' seçeneğini açın. Ana dizindeki '.FurtherEngine/mods/' (eski P.E.T portlarında '.PsychEngine/mods/') klasörünü görebilirsiniz."
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
        "summary": "Orjinal Mod Paketlerinin indiriliş aşamaları",
        "blocks": [
          {
            "type": "heading",
            "text": "2. Arşivden İndirilen Modpack'leri Kurma (ZIP / RAR)"
          },
          {
            "type": "paragraph",
            "text": "Arşiv sekmesinden veya MediaFire/Drive üzerinden indirdiğiniz eski P.E.T modpack dosyaları içinde birden fazla mod barındırır."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Modpack Arşivini Açın",
                "desc": "İndirdiğiniz arşivin içini açtığınızda her modun kendine ait ayrı bir klasörü olduğunu göreceksiniz."
              },
              {
                "title": "Mod Klasörlerini 'mods/' Dizinine Atın",
                "desc": "Tüm modpack'i tek bir klasör halinde değil, içindeki ayrı mod klasörlerini seçerek doğrudan oyunun 'mods/' (Android'de '.FurtherEngine/mods/') klasörüne kopyalayın."
              },
              {
                "title": "Mods Menüsü (İsteğe Bağlı)",
                "desc": "Oyunu açıp Mods menüsünden oynamak istediğiniz modları açık hale getirin. Çok büyük paketlerde aynı anda tüm modları açık tutmak RAM kullanımını artırır."
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
        "title": "Virüs mü?",
        "summary": "Bazı projelerin Windows Defender ve VirusTotal üzerinde çıkan uyarıların sebebi ve sahte linklerden korunma.",
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
            "text": "2. VirusTotal'da Neden 1–3 Uyarı Görünebiliyor? (False-Positive Olayı)"
          },
          {
            "type": "paragraph",
            "text": "Haxe ve C++ (HXCPP) ile derlenen tüm Psych tabanlı motorlar, mod çalıştırabilmek için içinde Lua ve HScript yorumlayıcısı barındırır. VirusTotal'daki 70+ tarayıcıdan 1-2 tanesi (genellikle küçük yapay zeka tarayıcıları) imzasız her oyun motoruna 'AIDetectMalware' veya 'Generic.susgen' gibi yanlış pozitif (false-positive) etiketler verebilir. Ayrıca özellikle Further Engine Tamamen açık kaynaklıdır ve github-actions ile derlenir, ve tüm herkes oyunun oluşum kodlarını halihazırda inceleyebilir"
          },
          {
            "type": "paragraph",
            "text": "Kaspersky, Bitdefender, ESET, Malwarebytes ve Microsoft gibi ana antivirüs tarayıcıları 'Temiz' diyorsa dosya güvenlidir."
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
            "text": "Sadece şarkı/karakter modu olduğunu söyleyen bir klasör modunun içinden 'Setup.exe', şifreli '.rar', '.bat' veya '.scr' çıkıyorsa; MediaFire'da indirme butonuna bastığınızda açılan yan reklam sekmesinden farklı isimde bir .exe indiyse; ya da VirusTotal'da 15+ büyük antivirüs 'Stealer / Trojan' diyorsa dosyayı hemen silin. Genel bir durumda Eğer Windows Defender veya Antivirüs programınız açıksa zaten bu virüsler otomatik olarak silinir"
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
        "id": "further-engine",
        "title": "Further Engine",
        "logo": "assets/img/logos/further-engine.png",
        "category": "engine",
        "version": "v1.7.0 - ?",
        "platforms": "Windows, Android, Linux, macOS, iOS",
        "size": "270–330 MB",
        "description": "Çok stabil olmasada güçlü sistemli, Çoklu-Dil destekli, Daha fazla menüsü olan ve Mobilde ayrıcalığı olan En iyi sürüm.",
        "downloads": [
          {
            "label": "v1.7.0",
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
            "label": "Tüm Sürümler",
            "url": "https://github.com/SametGkTe/Funky-Further-Engine/releases",
            "icon": "fa-github"
          }
        ],
        "image": ""
      },
      {
        "id": "pet-v2",
        "title": "Psych Engine Türkiye V2",
        "logo": "assets/img/logos/pet-v2.png",
        "category": "engine",
        "version": "V2",
        "platforms": "Windows, Android",
        "size": "162 MB",
        "description": "Psych Engine Türkiye'nin en çok indirilen sürümlerinden biri, Arayüzü Düz Psych ve Tamamen türkçe (tr-TR.lang).",
        "downloads": [
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "platforms": {
              "windows": "https://www.mediafire.com/file/mhiydlf2g2sjfe8/Psych_Engine_V2_%2528PC%2529.zip/file",
              "android": "https://www.mediafire.com/file/jzymnfx25eofqxo/Psych_Engine_T%25C3%25BCrkiye_V2.apk/file"
            }
          }
        ],
        "image": ""
      },
      {
        "id": "pet-v1",
        "title": "Psych Engine Türkiye V1",
        "logo": "assets/img/logos/pet-v1.png",
        "category": "engine",
        "version": "V1",
        "platforms": "Android",
        "size": "235 MB",
        "description": "Psych Engine Türkiye'nin ilk test sürümü, Arayüzü ingilizce, sadece modları Türkçe yapılmaya çalışıldı (Desteği kesildi)",
        "downloads": [
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "primary": true,
            "platforms": {
              "android": "https://www.mediafire.com/file/au8wqcxs6tv9qpy/Psych+Engine+Mobile+0.7.3+[HomuHomu+Port].apk/file"
            }
          }
        ],
        "image": ""
      },
      {
        "id": "pet-online",
        "title": "Psych Engine Türkiye - Online",
        "logo": "assets/img/logos/pet-online.png",
        "category": "engine",
        "version": "Online - 0.71h",
        "platforms": "Windows, Android",
        "size": "242 MB",
        "description": "Snirozu tarafından yapılan Psych Online forkunun Türkçeleştirilmiş hali, en stabil ve optimizeli sürümlerden biridir.",
        "downloads": [
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "platforms": {
              "windows": "https://www.mediafire.com/file/bate6a83gruqgva/Psych+Engine+T%C3%BCrkiye+-+Online+V1+(PC).zip/file",
              "android": "https://www.mediafire.com/file/ec1meguhhfttlyu/Psych_Engine_T%25C3%25BCrkiye_-_Online_V1.apk/file"
            }
          }
        ],
        "image": ""
      },
      {
        "id": "pet-v2.5",
        "title": "Psych Engine Türkiye V2.5",
        "logo": "assets/img/logos/pet-v25.png",
        "category": "engine",
        "version": "V2.5",
        "platforms": "Android",
        "size": "162 MB",
        "description": "Psych Engine Türkiye'nin en iyi iptal olan sürümlerinden biri, P-Slice temelli, Türkçe arayüz (İptal Edildi).",
        "downloads": [
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "platforms": {
              "android": "https://www.mediafire.com/file/tiih8qsqlbfk0s1/%2528REUPLOAD%2529_P-Engine_T%25C3%25BCrkiye_V2.5_Release.apk/file"
            }
          }
        ],
        "image": ""
      },
      {
        "id": "further-modpack",
        "title": "Further Mod Paketi Reposu",
        "logo": "assets/img/logos/further-engine.png",
        "category": "modpack",
        "version": "v1.1.0",
        "platforms": "Windows, Android, Linux",
        "size": "6–7 GB",
        "description": "Further Engine Mod Paketinin Açık Modları, Tamamen bitene kadar buradan yayınlanacak (Canlı Modpack Sistemi).",
        "downloads": [
          {
            "label": "Github",
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
        "id": "further-engine-beta",
        "title": "Further Engine - Beta",
        "logo": "assets/img/logos/further-engine.png",
        "category": "engine",
        "version": "Beta",
        "platforms": "Android",
        "size": "343 MB",
        "description": "Further Engine'ın Beta Sürümü, çoğu özellik bozuk veya bitirilmemiş, sadece beta kullanıcıları için.",
        "downloads": [
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "primary": true,
            "platforms": {
              "android": "https://www.mediafire.com/file/tgmf245rhicm1x3/Further-Engine-Beta.apk/file"
            }
          }
        ],
        "image": ""
      },
      {
        "id": "pet-v2-beta",
        "title": "Psych Engine Türkiye V2 - Beta",
        "logo": "assets/img/logos/pet-v2-beta.png",
        "category": "engine",
        "version": "V2 - Beta",
        "platforms": "Android",
        "size": "165 MB",
        "description": "Psych Engine Türkiye V2'nin Beta Sürümü, çoğu şey bitirilmemiş şekilde, sadece beta kullanıcıların test edebilmesi için yapıldı.",
        "downloads": [
          {
            "label": "MediaFire",
            "icon": "fa-cloud-arrow-down",
            "platforms": {
              "android": "https://www.mediafire.com/file/udvqe3lypv4k98y/Psych+Engine+T%C3%BCrkiye+V2+Beta.apk/file"
            }
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
        "platforms": "Android",
        "size": "257kb",
        "description": "Further Engine için Androidde Mod Yönetebilme, Güvenli Modda başlatma, Further Güncelleme vb. sağlar",
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
        "title": "FNF-Porter Mobile",
        "logo": "assets/img/logos/fnf-porter.png",
        "category": "tool",
        "version": "v1.0.0",
        "platforms": "Android",
        "size": "200kb",
        "description": "V-slice Modlarını Psych'e, Psych Modlarını V-slice'a çevirmeye yarayan (TAMAMEN DOĞRU DEĞİL) bir tool.",
        "downloads": [
          {
            "label": "İndir (v1.0.0)",
            "icon": "fa-download",
            "primary": true,
            "platforms": [
              {
                "label": "Android (APK)",
                "sub": "Mobil v1.0.0",
                "url": "https://github.com/SametGkTe/FNF-Porter-Mobile/releases/download/v1.0.0/FNF-Porter-For-Mobile-v1.0.0.apk",
                "icon": "fa-android"
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
            "title": "Psych Engine Türkiye - İptal Fork",
            "desc": "Klasik P.E.T reposu (Devam edilmedi)",
            "url": "https://github.com/SametGkTe/Psych-Engine-Turkey",
            "icon": "fa-box-archive"
          },
          {
            "title": "Psych Extended Online Türkiye - Devam Edilmedi",
            "desc": "CNE mod uyumluluğu ve Online sunan P.E.T (Devam edilmedi)",
            "url": "https://github.com/SametGkTe/Psych-Extended-Online-Turkey",
            "icon": "fa-cubes"
          },
          {
            "title": "FNF-Porter-Mobile",
            "desc": "Modları Engine'lar arası (V-slice to Psych ve Psych to V-slice) Androidden portlama tool'u.",
            "url": "https://github.com/SametGkTe/FNF-Porter-Mobile",
            "icon": "fa-android"
          },
          {
            "title": "Further Modpack Content",
            "desc": "Further Engine'ın oyunda mod paketlerini indirmek için kullandığı repo.",
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
    "title": "Destek Ve İletişim",
    "subtitle": "Kurulum sorunları, bozuk arşiv bağlantıları veya engine hataları için doğrudan ulaşabileceğiniz hesaplar.",
    "channels": [
      {
        "id": "tiktok",
        "platform": "TikTok",
        "handle": "@sametgkte",
        "icon": "fa-tiktok",
        "description": "Orjinal yapımcı, Yeni sürüm duyuruları, mod paylaşımları ve kısa kurulum videoları burada. Yorumlardan veya DM üzerinden ulaşabilirsiniz.",
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
        "description": "Pek tavsiye edilmez, BUG'lar ve Engine çökme çözümleri için ulaşabilirsiniz.",
        "url": "",
        "openLabel": "Sunucuya Katıl",
        "copyValue": "samette111",
        "copyToast": "Discord kullanıcı adı kopyalandı: samette111"
      }
    ],
    "bugReport": {
      "title": "Further Engine GitHub (Issues)",
      "description": "Oyun içi teknik hataları, çökme kayıtlarını (crash log) veya çalışmayan arşiv linklerini doğrudan GitHub üzerinden bildirebilirsiniz.",
      "url": "https://github.com/SametGkTe/Funky-Further-Engine/issues/new/choose",
      "buttonLabel": "Hata Bildir"
    },
    "checklist": [
      {
        "title": "Cihaz ve Sürüm Bilgisi",
        "desc": "Mesaj atarken PC Windows mu yoksa Android mi kullandığınızı ve Engine sürümünü (ör. Further v1.7.0, P.E.T V2) belirtin."
      },
      {
        "title": "Ekran Görüntüsü (Screenshot) veya Hata Mesajı",
        "desc": "Aldığınız hatanın (logs/) ekran görüntüsünü göndermeniz sorunun çok daha hızlı çözülmesini sağlar."
      }
    ]
  },
  "updates": {
    "items": [
      {
        "date": "27 Ekim 2026",
        "title": "Destek sayfası eklendi :P",
        "desc": "aciklamayok.",
        "href": "#/support"
      },
      {
        "date": "26 Ekim 2026",
        "title": "Virüs ile alakalı doğru rehber yayınlandı",
        "desc": "VirusTotal Sorunları vs.",
        "href": "#/docs/virus-konulari"
      },
      {
        "date": "26 Ekim 2026",
        "title": "Arşiv Açılışı :D",
        "desc": "Website yapıldı (sanırım)",
        "href": "#/archive"
      }
    ]
  }
};
