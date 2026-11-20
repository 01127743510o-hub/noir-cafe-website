document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    ar: {
      navHome:"الرئيسية", navAbout:"من نحن", navMenu:"القائمة", navGallery:"معرض الصور", navWhy:"لماذا نحن", navContact:"تواصل معنا",
      heroEyebrow:"قهوة مختصة منذ 2018", heroTitle:"لحظتك الخاصة<br><em>تبدأ بالقهوة</em>", heroCopy:"نكهات مُتقنة، أجواء هادئة، وتجربة تُصنع لتبقى في الذاكرة.", heroMenu:"استكشف القائمة", heroStory:"حكايتنا",
      years:"سنوات من الشغف", aboutEyebrow:"حكايتنا", aboutTitle:"نتقن فن القهوة، ونصنع أجواءً لها طابعها الخاص", aboutCopy:"في NOIR نؤمن بأن القهوة ليست مشروبًا فحسب، بل تجربة تبدأ من لحظة الاختيار وتنتهي بصنع ذكرى. نختار حبوبنا بعناية من محاصيل مميزة، ونحمّصها ونحضّرها بخبرة عالية تبرز نكهاتها الطبيعية في كل كوب. صممنا مساحتنا لتجمع بين الدفء والأناقة والهدوء، لتكون المكان المثالي للعمل واللقاءات الهادئة أو الاستمتاع بلحظة لنفسك وسط أجواء لا تشبه غيرها.", founder:"المؤسسون",
      menuEyebrow:"اختياراتنا المميزة", menuTitle:"القائمة", menuCopy:"مكونات مختارة بعناية وتحضيرات يدوية، من القهوة الكلاسيكية إلى الحلويات الطازجة.",
      espresso:"إسبريسو كلاسيك", espressoDesc:"قهوة مركّزة بنكهات الشوكولاتة الداكنة", cappuccino:"كابتشينو نوير", cappuccinoDesc:"إسبريسو وحليب مخملي ورغوة متوازنة", spanishLatte:"سبانيش لاتيه", spanishDesc:"كريمة ناعمة بلمسة حلاوة مدروسة", croissant:"كرواسون زبدة", croissantDesc:"كرواسون فرنسي هش ومخبوز طازجًا", cheesecake:"تشيز كيك التوت", cheesecakeDesc:"جبن كريمي وتوت طازج وصلصة نباتية", coldbrew:"كولد برو نوير", coldbrewDesc:"قهوة باردة منقوعة 18 ساعة وتقدم مع الثلج", mocha:"موكا الشوكولاتة", mochaDesc:"مزيج متوازن من الإسبريسو والشوكولاتة الداكنة والحليب المبخر، وبطبقة رقيقة من الرغوة الكريمية.", americano:"آيس أمريكانو", americanoDesc:"إسبريسو مخفف بالماء البارد ويقدم مع مكعبات الثلج؛ نكهة قهوة واضحة وقوام خفيف ومنعش.", hotChocolate:"هوت شوكليت فاخر", hotChocolateDesc:"مشروب دافئ مخملي من الشوكولاتة الداكنة والحليب، يعلوه قليل من الكريمة المخفوقة الخفيفة.", tiramisu:"تيراميسو", tiramisuDesc:"حلوى إيطالية كلاسيكية بطبقات من البسكويت المنقوع بالقهوة، كريم الماسكاربوني الناعم والكاكاو ولمسة مرّة متوازنة.", brownie:"براوني الشوكولاتة", brownieDesc:"براوني داكن غني بقوام طري في الوسط وحواف مقرمشة، مصنوع بالشوكولاتة ومغطى بصوص شوكولاتة ناعم.", pancakes:"بان كيك بالعسل", pancakesDesc:"بان كيك طازج بتلات هشة، عسل طبيعي سائـل وجوز مقرمش ولمسة من الفواكه الموسمية.",
      galleryEyebrow:"لحظاتنا", galleryTitle:"من قلب الكافيه",
      whyEyebrow:"لماذا NOIR؟", whyTitle:"تفاصيل صغيرة تصنع تجربة كاملة", why1Title:"حبوب مختارة", why1Copy:"نختار المحاصيل الموسمية من مزارع موثوقة حول العالم.", why2Title:"تحضير متقن", why2Copy:"كل كوب يُحضّر بعناية وبإيقاع يحافظ على نكهته الأصلية.", why3Title:"مساحة تدعو للبقاء", why3Copy:"تصميم دافئ وموسيقى هادئة لكل لقاء أو لحظة فردية.",
      contactEyebrow:"نراك قريبًا", contactTitle:"اجعل لحظتك القادمة<br>أكثر دفئًا", contactCopy:"نفتتح أبوابنا يوميًا من 8 صباحًا وحتى 12 ليلاً", whatsapp:"تواصل عبر واتساب", footerCopy:"قهوة • لحظات • تجربة"
    },
    en: {
      navHome:"Home", navAbout:"About", navMenu:"Menu", navGallery:"Gallery", navWhy:"Why Us", navContact:"Contact",
      heroEyebrow:"Specialty coffee since 2018", heroTitle:"Your special moment<br><em>starts with coffee</em>", heroCopy:"Refined flavors, quiet surroundings, and an experience made to stay with you.", heroMenu:"Explore the Menu", heroStory:"Our Story",
      years:"years of passion", aboutEyebrow:"Our Story", aboutTitle:"We master the art of coffee and create a space of our own", aboutCopy:"At NOIR, we believe coffee is more than a drink. It is an experience that begins with careful selection and ends with a lasting memory. We choose distinctive beans from exceptional crops, then roast and prepare them with expertise that brings out their natural character in every cup. Our space combines warmth, elegance, and calm to create the perfect setting for work, meaningful conversations, or a quiet moment of your own.", founder:"Founders",
      menuEyebrow:"Our favorites", menuTitle:"Menu", menuCopy:"Carefully chosen ingredients and handcrafted preparations, from classic coffee to fresh pastries.",
      espresso:"Classic Espresso", espressoDesc:"Bold espresso with dark chocolate notes", cappuccino:"NOIR Cappuccino", cappuccinoDesc:"Espresso, silky milk, and balanced foam", spanishLatte:"Spanish Latte", spanishDesc:"Soft cream with a measured touch of sweetness", croissant:"Butter Croissant", croissantDesc:"Flaky French pastry baked fresh", cheesecake:"Berry Cheesecake", cheesecakeDesc:"Creamy cheese, fresh berries, and berry sauce", coldbrew:"NOIR Cold Brew", coldbrewDesc:"18-hour cold extraction served over ice", mocha:"Chocolate Mocha", mochaDesc:"A balanced blend of espresso, dark chocolate, and steamed milk, topped with silky foam.", americano:"Iced Americano", americanoDesc:"Espresso diluted with cold water and served over ice for a crisp, clean, refreshing coffee flavor.", hotChocolate:"Premium Hot Chocolate", hotChocolateDesc:"A warm, velvety drink made with premium dark chocolate and milk, finished with light whipped cream.", tiramisu:"Tiramisu", tiramisuDesc:"Classic Italian dessert with coffee-soaked biscuits, silky mascarpone cream, cocoa, and a balanced bittersweet finish.", brownie:"Chocolate Brownie", brownieDesc:"A rich, dense brownie baked with dark chocolate, crisp edges, a fudgy center, and smooth chocolate sauce.", pancakes:"Honey Pancakes", pancakesDesc:"Fresh fluffy pancakes, natural warm honey, crunchy walnuts, and a touch of seasonal fruit.",
      galleryEyebrow:"Our Moments", galleryTitle:"Inside the Café",
      whyEyebrow:"Why NOIR?", whyTitle:"Small details create a complete experience", why1Title:"Selected Beans", why1Copy:"We choose seasonal crops from trusted farms around the world.", why2Title:"Precise Craft", why2Copy:"Every cup is prepared with care to preserve its original character.", why3Title:"A Place to Stay", why3Copy:"Warm design and calm music for every meeting or quiet moment.",
      contactEyebrow:"See you soon", contactTitle:"Make your next moment<br>warmer", contactCopy:"Open every day from 8 AM until 12 AM", whatsapp:"Contact on WhatsApp", footerCopy:"Coffee • Moments • Experience"
    }
  };

  const languageButton = document.getElementById("language-toggle");
  const menuButton = document.getElementById("menu-toggle");
  const navigation = document.getElementById("nav-links");
  let language = localStorage.getItem("noir-language") || "ar";
  if (!translations[language]) language = "ar";

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[language][key]) element.innerHTML = translations[language][key];
    });
    languageButton.textContent = language === "ar" ? "EN" : "AR";
    languageButton.setAttribute("aria-label", language === "ar" ? "Switch to English" : "التبديل إلى العربية");
    document.title = language === "ar" ? "نوير كافيه | NOIR CAFÉ" : "NOIR CAFÉ";
    localStorage.setItem("noir-language", language);
  }

  languageButton.addEventListener("click", () => applyLanguage(language === "ar" ? "en" : "ar"));

  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));

  document.querySelectorAll('a[href="#home"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigation.classList.remove("open");
      menuButton.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroVideo.pause();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  const sections = [...document.querySelectorAll("main section[id], header[id]")];
  const navLinks = [...navigation.querySelectorAll("a")];
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-30% 0px -55%", threshold: [0, .25, .5] });
  sections.forEach((section) => sectionObserver.observe(section));

  applyLanguage(language);
});
