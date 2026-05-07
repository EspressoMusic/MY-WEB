(function () {

  const BENEFITS_KEY = "site-hero-benefits";
  const THEME_KEY = "site-theme-mode";

  const doc = document.documentElement;
  let currentLang = "he";

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch {
      return null;
    }
  }

  function syncThemeToggle(theme) {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;
    const dark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute(
      "aria-label",
      currentLang === "en"
        ? dark
          ? "Switch to light mode"
          : "Switch to dark mode"
        : dark
          ? "מעבר למצב בהיר"
          : "מעבר למצב חשוך"
    );
  }


  function applyTheme(theme) {
    if (theme === "dark") doc.setAttribute("data-theme", "dark");
    else doc.setAttribute("data-theme", "light");
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
    syncThemeToggle(theme);
  }

  function applyLanguage(lang) {
    const nextLang = lang === "en" ? "en" : "he";
    currentLang = nextLang;
    doc.setAttribute("data-lang", nextLang);
    doc.setAttribute("lang", nextLang);
    doc.setAttribute("dir", nextLang === "en" ? "ltr" : "rtl");
    const content = nextLang === "en"
      ? {
        pageTitle: "Picasow | Web Design, Development and Business Growth",
        lightLabel: "Light",
        darkLabel: "Dark",
        homeAria: "Home page",
        navAria: "Main navigation",
        navServices: "Services",
        navContact: "Contact",
        heroLead: "We support",
        heroPrefix: "",
        heroGrowth: "Growth",
        heroGrowthRest: "for your business",
        heroSub: "A great small site creates a big business change.",
        heroCta: "Project Estimate",
        contactCloseAria: "Close contact window",
        contactTitle: "Contact Us",
        labelName: "Name",
        labelSubject: "Subject",
        labelMessage: "Message",
        send: "Send",
        portfolioAnchor: "Gallery anchor.",
        servicesTitle: "Services",
        servicesSub: "Choose the website package that fits you",
        basic: "Starter",
        basicPrice: "2,500-4,000 ILS",
        pro: "Professional",
        proPrice: "4,500-8,000 ILS",
        premium: "Premium",
        premiumPrice: "8,000-15,000+ ILS",
        soon: "COMING SOON",
        basicDesc1: "<strong>What is a business website?</strong><br />A website that presents your business professionally and helps attract new clients.",
        basicDesc2: "<strong>Who is it for?</strong><br />Business owners and service providers who want a strong online presence.",
        proDesc1: "<strong>What is a professional website?</strong><br />A higher-level site built to generate results, not only look good.",
        proDesc2: "<strong>Who is it for?</strong><br />Businesses that want more leads, more clients, and more sales.",
        premiumDesc1: "<strong>What is a premium website?</strong><br />An advanced site with full ecommerce capabilities and automation.",
        premiumDesc2: "<strong>Who is it for?</strong><br />Businesses that want to sell online and scale 24/7.",
        want: "I want this!",
        consult: "<strong>For a consultation and full package details</strong> - we're waiting for your call (:",
        galleryTitle: "Gallery",
        gallerySub: "A few of our projects....",
        galleryAAria: "Open DARION project in a new tab",
        galleryBAria: "Open Roomie project in a new tab",
        galleryAltA: "DARION website design project",
        galleryAltB: "Roomie product showcase website project",
        miniAria: "Price notice",
        footerNote: "Prices do not include hosting, domain, or special add-ons - full details are provided in the call.",
        policy: "Accessibility & Policy",
        languageBtn: "עברית",
        a11yFabAria: "Open accessibility tools",
        chatFabAria: "Open chat",
        chatCloseAria: "Close chat window",
        botAlt: "Picasow support bot",
        chatTitle: "How can I help you today?",
        a11yCloseAria: "Close accessibility window",
        a11yTitle: "Website Accessibility",
        a11yIntro: "We work to make this site accessible in accordance with Israeli accessibility law and the Israeli Standard 5568 at AA level (based on WCAG 2.0/2.1).",
        a11ySummary: "Accessibility statement and policy",
        a11yP1: "<strong>Accessibility implemented:</strong> clear heading hierarchy, keyboard navigation support, improved contrast, relevant alternative text, and semantic structure for screen readers.",
        a11yP2: "<strong>Accessible service adjustments:</strong> you can contact us for information and support through alternative channels, including phone support and personal guidance.",
        a11yP3: "<strong>Physical location accessibility (if applicable):</strong> accessible parking, access route, accessible entrance, accessible restrooms and adapted service desk - subject to the active business location.",
        a11yP4: "<strong>Accessibility coordinator:</strong> Digital Accessibility Coordinator - Shilo, phone <a href=\"tel:0501234567\" dir=\"ltr\">050-123-4567</a>, email <a href=\"mailto:shilohdhd1@gmail.com\">shilohdhd1@gmail.com</a>.",
        a11yP5: "<strong>Reporting an issue:</strong> if you experience an accessibility issue, send a detailed report (page, action, issue description). We commit to checking and responding promptly.",
        a11yP6: "<strong>Known exceptions:</strong> some areas may not yet be fully accessible; we continuously improve and close remaining gaps.",
        a11yP7: "<strong>Last update date:</strong> 05/05/2026. <strong>Accessibility implementation:</strong> PICASOW team.",
        a11yFontUp: "Increase text size",
        a11yFontDown: "Decrease text size",
        a11yContrast: "High contrast",
        a11ySpacing: "Text spacing",
        a11yReset: "Reset",
        cursorLabel: "Click me",
        statusFontUp: "Text size increased.",
        statusFontDown: "Text size decreased.",
        statusContrastOn: "High contrast enabled.",
        statusContrastOff: "High contrast disabled.",
        statusSpacingOn: "Text spacing enabled.",
        statusSpacingOff: "Text spacing disabled.",
        statusReset: "All accessibility settings were reset.",
        growthOn: "Hide company benefits around the headline",
        growthOff: "Show company benefits around the headline",
        benefits: [
          "Short and precise sprints",
          "Unique designs",
          "Real partners for the journey",
          "Full transparency in every step",
          "Continuous measurement and improvement",
          "Fast delivery with no shortcuts",
          "UI/UX that increases conversions",
          "Hands-on support until launch",
          "Stable and scalable code",
          "Creative out-of-the-box thinking",
          "Precise alignment to business goals",
          "Flexible working pace"
        ]
      }
      : {
        pageTitle: "Picasow | בניית אתרים, עיצוב ופיתוח לעסקים",
        lightLabel: "אור",
        darkLabel: "חושך",
        homeAria: "דף הבית",
        navAria: "ניווט ראשי",
        navServices: "שירותים",
        navContact: "צור קשר",
        heroLead: "אנחנו תומכים",
        heroPrefix: "ב",
        heroGrowth: "צמיחה",
        heroGrowthRest: "של העסק שלך",
        heroSub: "אתר קטן טוב – שינוי גדול לעסק שלך.",
        heroCta: "הערכת הפרויקט",
        contactCloseAria: "סגירת חלון יצירת קשר",
        contactTitle: "דברו איתנו",
        labelName: "שם",
        labelSubject: "נושא הפנייה",
        labelMessage: "תוכן הפנייה",
        send: "שליחה",
        portfolioAnchor: "עוגן גלריה.",
        servicesTitle: "שירותים",
        servicesSub: "בחרו את האתר שמתאים לכם",
        basic: "מתחילים",
        basicPrice: "2,500–4,000 ש\"ח",
        pro: "מקצועי",
        proPrice: "4,500–8,000 ש\"ח",
        premium: "פרימיום",
        premiumPrice: "8,000–15,000+ ש\"ח",
        soon: "בקרוב",
        basicDesc1: "<strong>מה זה אתר תדמית?</strong><br />אתר שמציג את העסק שלך בצורה מקצועית ומטרתו להביא לקוחות חדשים ולבנות אמון.",
        basicDesc2: "<strong>למי זה מתאים?</strong><br />לעסקים, נותני שירות ובעלי מקצוע שרוצים נוכחות מקצועית ברשת ולהגדיל פניות.",
        proDesc1: "<strong>מה זה אתר מקצועי?</strong><br />אתר ברמה גבוהה שמיועד לא רק להציג את העסק, אלא גם לייצר תוצאות — יותר פניות, יותר לקוחות ויותר מכירות.",
        proDesc2: "<strong>למי זה מתאים?</strong><br />לעסקים שרוצים לבלוט, לגדול ולהפוך את האתר לכלי שיווק ומכירה אמיתי.",
        premiumDesc1: "<strong>מה זה אתר פרימיום?</strong><br />אתר מתקדם עם מערכת רכישות מלאה, שמאפשר למכור מוצרים או שירותים אונליין בצורה מקצועית ואוטומטית.",
        premiumDesc2: "<strong>למי זה מתאים?</strong><br />לעסקים שרוצים למכור אונליין, להגדיל הכנסות ולעבוד בצורה אוטומטית 24/7.",
        want: "אני רוצה!",
        consult: "<strong>לשיחת ייעוץ וקבלת פרטים על כל חבילה</strong> - מחכים לך בטלפון (:",
        galleryTitle: "גלריה",
        gallerySub: "קצת מהפרוייקטים שלנו....",
        galleryAAria: "פתיחת פרויקט DARION בחלון חדש",
        galleryBAria: "פתיחת פרויקט Roomie בחלון חדש",
        galleryAltA: "פרויקט עיצוב אתר DARION",
        galleryAltB: "פרויקט אתר Roomie לתצוגת מוצר",
        miniAria: "הערת מחיר",
        footerNote: "המחירים אינם כוללים עלויות אחסון, דומיין ותוספות מיוחדות – פירוט מלא יינתן בשיחת הטלפון.",
        policy: "תקנון ומדיניות",
        languageBtn: "English",
        a11yFabAria: "פתיחת כלי נגישות",
        chatFabAria: "פתיחת צ'אט",
        chatCloseAria: "סגירת חלונית צ'אט",
        botAlt: "בוט התמיכה של Picasow",
        chatTitle: "איך אוכל לעזור לך היום?",
        a11yCloseAria: "סגירת חלון נגישות",
        a11yTitle: "נגישות האתר",
        a11yIntro: "אנו פועלים להנגשת האתר בהתאם להוראות חוק שוויון זכויות לאנשים עם מוגבלות, תשנ\"ח-1998, תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע\"ג-2013, ובהתאם לתקן הישראלי ת\"י 5568 ברמת AA (המבוסס על WCAG 2.0/2.1).",
        a11ySummary: "תקנון והצהרת נגישות",
        a11yP1: "<strong>מה בוצע באתר:</strong> היררכיית כותרות ברורה, תמיכה בניווט מקלדת, ניגודיות משופרת, טקסטים חלופיים לאלמנטים רלוונטיים, ומבנה סמנטי מותאם לקוראי מסך.",
        a11yP2: "<strong>התאמות שירות נגיש:</strong> ניתן לפנות אלינו לקבלת מידע ו/או סיוע בערוצים חלופיים, כולל סיוע טלפוני והכוונה אישית.",
        a11yP3: "<strong>נגישות בנכס פיזי (ככל שקיים קבלת קהל):</strong> חניה נגישה, רצף גישה, כניסה נגישה, שירותים נגישים ועמדת שירות מותאמת — בכפוף למיקום הפעיל של העסק.",
        a11yP4: "<strong>רכז/ת נגישות:</strong> רכז נגישות דיגיטלית — שילה, טלפון <a href=\"tel:0501234567\" dir=\"ltr\">050-123-4567</a>, דוא\"ל <a href=\"mailto:shilohdhd1@gmail.com\">shilohdhd1@gmail.com</a>.",
        a11yP5: "<strong>דיווח על תקלה:</strong> במקרה של קושי נגישות, ניתן לשלוח פנייה מפורטת (עמוד, פעולה, תיאור הבעיה). אנו מתחייבים לבדיקה ומתן מענה בהקדם.",
        a11yP6: "<strong>חריגים ידועים:</strong> ייתכנו חלקים שטרם הונגשו במלואם; אנו עובדים לשיפור רציף ולהשלמת הפערים.",
        a11yP7: "<strong>תאריך עדכון:</strong> 05/05/2026. <strong>גורם מיישם נגישות:</strong> צוות PICASOW.",
        a11yFontUp: "הגדלת כתב",
        a11yFontDown: "הקטנת כתב",
        a11yContrast: "ניגודיות גבוהה",
        a11ySpacing: "ריווח טקסט",
        a11yReset: "איפוס",
        cursorLabel: "תלחץ עליי",
        statusFontUp: "הכתב הוגדל.",
        statusFontDown: "הכתב הוקטן.",
        statusContrastOn: "ניגודיות גבוהה הופעלה.",
        statusContrastOff: "ניגודיות גבוהה בוטלה.",
        statusSpacingOn: "ריווח טקסט הופעל.",
        statusSpacingOff: "ריווח טקסט בוטל.",
        statusReset: "כל הגדרות הנגישות אופסו.",
        growthOn: "הסתרת יתרונות החברה סביב הכותרת",
        growthOff: "הצגת יתרונות החברה סביב הכותרת",
        benefits: [
          "ספרינטים קצרים ומדויקים",
          "עיצובים יחודיים",
          "שותפים אמיתיים לדרך",
          "שקיפות מלאה בכל צעד",
          "מדידה ושיפור מתמיד",
          "ביצוע מהיר בלי קיצורי דרך",
          "UI/UX שמעלה המרות",
          "ליווי צמוד עד השקה",
          "קוד יציב וסקיילבילי",
          "יצירתיות וחשביה מחוץ לקופסא",
          "חיבור מדויק למטרות העסק",
          "גמישות בקצב העבודה"
        ]
      };

    document.title = content.pageTitle;
    const themeTopLabel = document.querySelector(".theme-toggle__label--top");
    const themeBottomLabel = document.querySelector(".theme-toggle__label--bottom");
    if (themeTopLabel) themeTopLabel.textContent = content.lightLabel;
    if (themeBottomLabel) themeBottomLabel.textContent = content.darkLabel;
    const homeSection = document.querySelector(".hero");
    if (homeSection) homeSection.setAttribute("aria-label", content.homeAria);
    const nav = document.querySelector(".hero__nav");
    if (nav) nav.setAttribute("aria-label", content.navAria);
    const navLinks = document.querySelectorAll(".hero__nav a");
    if (navLinks[0]) navLinks[0].textContent = content.navServices;
    if (navLinks[1]) navLinks[1].textContent = content.navContact;

    const firstLine = document.querySelector(".hero__line");
    if (firstLine && firstLine.firstChild) firstLine.firstChild.textContent = `${content.heroLead} `;
    const growthEm = document.querySelector(".hero__growth-em");
    if (growthEm) growthEm.textContent = content.heroGrowth;
    const growthRest = document.querySelector(".hero__growth-rest");
    if (growthRest) growthRest.textContent = content.heroGrowthRest;
    const growthPrefix = document.querySelector(".hero__bet");
    if (growthPrefix) growthPrefix.textContent = content.heroPrefix;

    const heroSub = document.querySelector(".hero__sub");
    if (heroSub) heroSub.textContent = content.heroSub;
    const heroCta = document.querySelector(".hero__btn-primary");
    if (heroCta) heroCta.textContent = content.heroCta;
    const contactTitle = document.getElementById("contactTitle");
    if (contactTitle) contactTitle.textContent = content.contactTitle;
    const contactClose = document.querySelector(".contact-modal__close");
    if (contactClose) contactClose.setAttribute("aria-label", content.contactCloseAria);
    const portfolio = document.getElementById("portfolio");
    if (portfolio) portfolio.textContent = content.portfolioAnchor;
    const demandHeading = document.getElementById("demand-heading");
    if (demandHeading) demandHeading.textContent = content.servicesTitle;
    const servicesSub = document.querySelector("#development-pricing .section-header__sub");
    if (servicesSub) servicesSub.textContent = content.servicesSub;
    const plansHeading = document.getElementById("plans-heading");
    if (plansHeading) plansHeading.textContent = content.galleryTitle;
    const plansSub = document.querySelector("#saas-plans .section-header__sub");
    if (plansSub) plansSub.textContent = content.gallerySub;
    const galleryA = document.querySelector(".gallery-item--a");
    const galleryB = document.querySelector(".gallery-item--b");
    if (galleryA) galleryA.setAttribute("aria-label", content.galleryAAria);
    if (galleryB) galleryB.setAttribute("aria-label", content.galleryBAria);
    const galleryAImg = document.querySelector(".gallery-item--a img");
    const galleryBImg = document.querySelector(".gallery-item--b img");
    if (galleryAImg) galleryAImg.alt = content.galleryAltA;
    if (galleryBImg) galleryBImg.alt = content.galleryAltB;
    const miniSection = document.querySelector(".mini-game");
    if (miniSection) miniSection.setAttribute("aria-label", content.miniAria);
    const miniText = document.querySelector(".mini-game__head p");
    if (miniText) miniText.textContent = content.footerNote;
    const policyBtn = document.getElementById("accessibilityInlineTrigger");
    if (policyBtn) policyBtn.textContent = content.policy;
    const a11yFab = document.getElementById("accessibilityTrigger");
    if (a11yFab) a11yFab.setAttribute("aria-label", content.a11yFabAria);
    const languageBtn = document.getElementById("languageToggle");
    if (languageBtn) languageBtn.textContent = content.languageBtn;
    const chatFab = document.getElementById("chatTrigger");
    if (chatFab) chatFab.setAttribute("aria-label", content.chatFabAria);
    const chatClose = document.querySelector(".chat-modal__close");
    if (chatClose) chatClose.setAttribute("aria-label", content.chatCloseAria);
    const botImage = document.querySelector(".chat-modal__bot img");
    if (botImage) botImage.alt = content.botAlt;
    const chatTitle = document.getElementById("chatTitle");
    if (chatTitle) chatTitle.textContent = content.chatTitle;
    const comingSoon = document.querySelector(".pricing-card__coming-soon");
    if (comingSoon) comingSoon.textContent = content.soon;
    const taglines = document.querySelectorAll(".pricing-card__tagline");
    if (taglines[0]) taglines[0].textContent = content.basicPrice;
    if (taglines[1]) taglines[1].textContent = content.proPrice;
    if (taglines[2]) taglines[2].textContent = content.premiumPrice;

    const labels = document.querySelectorAll(".contact-modal__label");
    if (labels[0] && labels[0].firstChild) labels[0].firstChild.textContent = `${content.labelName} `;
    if (labels[1] && labels[1].firstChild) labels[1].firstChild.textContent = `${content.labelSubject} `;
    if (labels[2] && labels[2].firstChild) labels[2].firstChild.textContent = `${content.labelMessage} `;
    const sendBtn = document.querySelector(".contact-modal__send");
    if (sendBtn) sendBtn.textContent = content.send;

    const badges = document.querySelectorAll(".pricing-card__badge");
    if (badges[0]) badges[0].textContent = content.basic;
    if (badges[1]) badges[1].textContent = content.pro;
    if (badges[2]) badges[2].textContent = content.premium;
    const lists = document.querySelectorAll(".pricing-card__list");
    if (lists[0]) lists[0].innerHTML = `<p>${content.basicDesc1}</p><p>${content.basicDesc2}</p>`;
    if (lists[1]) lists[1].innerHTML = `<p>${content.proDesc1}</p><p>${content.proDesc2}</p>`;
    if (lists[2]) lists[2].innerHTML = `<p>${content.premiumDesc1}</p><p>${content.premiumDesc2}</p>`;
    const ctaButtons = document.querySelectorAll(".cards--demand .btn");
    if (ctaButtons[0]) ctaButtons[0].textContent = content.want;
    if (ctaButtons[1]) ctaButtons[1].textContent = content.want;
    if (ctaButtons[2]) ctaButtons[2].textContent = content.want;
    if (ctaButtons[0]) ctaButtons[0].setAttribute("data-package-name", nextLang === "en" ? "Starter Website" : "אתר תדמית");
    if (ctaButtons[1]) ctaButtons[1].setAttribute("data-package-name", nextLang === "en" ? "Professional Website" : "אתר מקצועי");
    if (ctaButtons[2]) ctaButtons[2].setAttribute("data-package-name", nextLang === "en" ? "Premium Website" : "אתר פרימיום");
    const benefitItems = document.querySelectorAll(".hero-benefit");
    benefitItems.forEach((item, idx) => {
      if (content.benefits[idx]) item.textContent = content.benefits[idx];
    });
    const heroBenefitsRing = document.getElementById("heroBenefitsRing");
    if (heroBenefitsRing) {
      heroBenefitsRing.setAttribute("lang", nextLang);
      heroBenefitsRing.setAttribute("dir", nextLang === "en" ? "ltr" : "rtl");
    }

    const guaranteeLink = document.querySelector(".guarantee__link");
    if (guaranteeLink) {
      guaranteeLink.innerHTML = content.consult;
      guaranteeLink.href = nextLang === "en"
        ? "https://wa.me/972586122187?text=Hello%2C%20I%20want%20a%20consultation."
        : "https://wa.me/972586122187?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5%20%D7%91%D7%A0%D7%95%D7%A9%D7%90";
    }
    const a11yTitle = document.getElementById("a11yTitle");
    if (a11yTitle) a11yTitle.textContent = content.a11yTitle;
    const a11yClose = document.querySelector(".a11y-modal__close");
    if (a11yClose) a11yClose.setAttribute("aria-label", content.a11yCloseAria);
    const a11yIntro = document.querySelector(".a11y-modal__text");
    if (a11yIntro) a11yIntro.textContent = content.a11yIntro;
    const a11ySummary = document.querySelector(".a11y-modal__details summary");
    if (a11ySummary) a11ySummary.textContent = content.a11ySummary;
    const a11yParagraphs = document.querySelectorAll(".a11y-modal__details p");
    if (a11yParagraphs[0]) a11yParagraphs[0].innerHTML = content.a11yP1;
    if (a11yParagraphs[1]) a11yParagraphs[1].innerHTML = content.a11yP2;
    if (a11yParagraphs[2]) a11yParagraphs[2].innerHTML = content.a11yP3;
    if (a11yParagraphs[3]) a11yParagraphs[3].innerHTML = content.a11yP4;
    if (a11yParagraphs[4]) a11yParagraphs[4].innerHTML = content.a11yP5;
    if (a11yParagraphs[5]) a11yParagraphs[5].innerHTML = content.a11yP6;
    if (a11yParagraphs[6]) a11yParagraphs[6].innerHTML = content.a11yP7;
    const a11yFontUpBtn = document.querySelector('[data-a11y-action="font-up"]');
    const a11yFontDownBtn = document.querySelector('[data-a11y-action="font-down"]');
    const a11yContrastBtn = document.querySelector('[data-a11y-action="contrast"]');
    const a11ySpacingBtn = document.querySelector('[data-a11y-action="spacing"]');
    const a11yResetBtn = document.querySelector('[data-a11y-action="reset"]');
    if (a11yFontUpBtn) a11yFontUpBtn.textContent = content.a11yFontUp;
    if (a11yFontDownBtn) a11yFontDownBtn.textContent = content.a11yFontDown;
    if (a11yContrastBtn) a11yContrastBtn.textContent = content.a11yContrast;
    if (a11ySpacingBtn) a11ySpacingBtn.textContent = content.a11ySpacing;
    if (a11yResetBtn) a11yResetBtn.textContent = content.a11yReset;
    const cursorLabel = document.querySelector(".cursor-dot__label");
    if (cursorLabel) cursorLabel.textContent = content.cursorLabel;

    const benefitsToggle = document.getElementById("heroBenefitsToggle");
    if (benefitsToggle) {
      const active = doc.getAttribute("data-benefits") === "true";
      benefitsToggle.setAttribute("aria-label", active ? content.growthOn : content.growthOff);
    }

    syncThemeToggle(doc.getAttribute("data-theme") || "light");
  }



  function getStoredBenefits() {

    try {

      return localStorage.getItem(BENEFITS_KEY);

    } catch {

      return null;

    }

  }



  function syncBenefitsUi(active) {

    const toggle = document.getElementById("heroBenefitsToggle");

    const ring = document.getElementById("heroBenefitsRing");

    if (toggle) {

      toggle.setAttribute("aria-pressed", String(active));

      toggle.setAttribute(

        "aria-label",

        currentLang === "en"
          ? active
            ? "Hide company benefits around the headline"
            : "Show company benefits around the headline"
          : active
            ? "הסתרת יתרונות החברה סביב הכותרת"
            : "הצגת יתרונות החברה סביב הכותרת"

      );

    }

    if (ring) {

      ring.setAttribute("aria-hidden", String(!active));

    }

  }



  function applyBenefits(active) {

    if (active) {

      doc.setAttribute("data-benefits", "true");

    } else {

      doc.removeAttribute("data-benefits");

    }

    try {

      localStorage.setItem(BENEFITS_KEY, active ? "on" : "off");

    } catch {

      /* ignore */

    }

    syncBenefitsUi(active);

  }



  function initBenefits() {

    const stored = getStoredBenefits();

    applyBenefits(stored === "on");

  }



  const toggle = document.getElementById("heroBenefitsToggle");
  const themeToggle = document.getElementById("themeToggle");
  const languageToggle = document.getElementById("languageToggle");

  if (toggle) {

    toggle.addEventListener("click", () => {

      const active = doc.getAttribute("data-benefits") === "true";

      applyBenefits(!active);

    });

  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = doc.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "he" ? "en" : "he");
    });
  }



  applyLanguage("he");
  initBenefits();
  applyTheme(getStoredTheme() === "dark" ? "dark" : "light");

  const contactModal = document.getElementById("contactModal");
  const contactTriggers = document.querySelectorAll("[data-contact-open]");
  const closeModalEls = document.querySelectorAll("[data-close-modal]");
  const CONTACT_EMAIL = "shilohdhd1@gmail.com";
  const contactForm = document.getElementById("contactForm");
  const contactName = document.getElementById("contactName");
  const contactSubject = document.getElementById("contactSubject");
  const contactMessage = document.getElementById("contactMessage");

  function setModalOpen(open) {
    if (!contactModal) return;
    contactModal.classList.toggle("is-open", open);
    contactModal.setAttribute("aria-hidden", String(!open));
  }

  if (contactTriggers.length) {
    contactTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        setModalOpen(true);
      });
    });
  }

  if (contactModal) {
    closeModalEls.forEach((el) => {
      el.addEventListener("click", () => setModalOpen(false));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setModalOpen(false);
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = contactName?.value?.trim() || "";
      const subject = contactSubject?.value?.trim() || (currentLang === "en" ? "Website inquiry" : "פנייה מהאתר");
      const message = contactMessage?.value?.trim() || "";
      const fullSubject = encodeURIComponent(`${subject} - ${name || (currentLang === "en" ? "No name" : "ללא שם")}`);
      const body = encodeURIComponent(
        currentLang === "en"
          ? `Name: ${name}\n\nMessage:\n${message}`
          : `שם: ${name}\n\nתוכן הפנייה:\n${message}`
      );
      window.open(`mailto:${CONTACT_EMAIL}?subject=${fullSubject}&body=${body}`, "_blank");
      setModalOpen(false);
      contactForm.reset();
    });
  }

  const packageButtons = document.querySelectorAll("[data-package-name]");
  if (packageButtons.length) {
    packageButtons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const packageName = btn.getAttribute("data-package-name");
        const text = encodeURIComponent(
          currentLang === "en"
            ? `Hi, I want the ${packageName}. Please send me details.`
            : `היי, אני רוצה את ${packageName}. אשמח לפרטים.`
        );
        window.open(`https://wa.me/972586122187?text=${text}`, "_blank", "noopener,noreferrer");
      });
    });
  }

  const chatModal = document.getElementById("chatModal");
  const chatTrigger = document.getElementById("chatTrigger");
  const chatCloseEls = document.querySelectorAll("[data-close-chat]");

  function setChatModalOpen(open) {
    if (!chatModal) return;
    chatModal.classList.toggle("is-open", open);
    chatModal.setAttribute("aria-hidden", String(!open));
  }

  if (chatTrigger && chatModal) {
    chatTrigger.addEventListener("click", () => setChatModalOpen(true));
    chatCloseEls.forEach((el) => {
      el.addEventListener("click", () => setChatModalOpen(false));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setChatModalOpen(false);
    });
  }

  const a11yModal = document.getElementById("accessibilityModal");
  const a11yTrigger = document.getElementById("accessibilityTrigger");
  const a11yInlineTrigger = document.getElementById("accessibilityInlineTrigger");
  const a11yCloseEls = document.querySelectorAll("[data-close-a11y]");
  const a11yActions = document.querySelectorAll("[data-a11y-action]");
  const a11yStatus = document.getElementById("a11yStatus");

  function setA11yModalOpen(open) {
    if (!a11yModal) return;
    a11yModal.classList.toggle("is-open", open);
    a11yModal.setAttribute("aria-hidden", String(!open));
  }

  function cycleFontSize(step) {
    const current = doc.getAttribute("data-a11y-font");
    if (step > 0) {
      doc.setAttribute("data-a11y-font", current === "lg" ? "xl" : "lg");
      return;
    }
    if (current === "xl") {
      doc.setAttribute("data-a11y-font", "lg");
      return;
    }
    doc.removeAttribute("data-a11y-font");
  }

  function updateA11yStatus(text) {
    if (!a11yStatus) return;
    a11yStatus.textContent = text;
  }

  function resetA11ySettings() {
    doc.removeAttribute("data-a11y-font");
    doc.removeAttribute("data-a11y-contrast");
    doc.removeAttribute("data-a11y-spacing");
  }

  if ((a11yTrigger || a11yInlineTrigger) && a11yModal) {
    resetA11ySettings();
    if (a11yTrigger) a11yTrigger.addEventListener("click", () => setA11yModalOpen(true));
    if (a11yInlineTrigger) a11yInlineTrigger.addEventListener("click", () => setA11yModalOpen(true));
    a11yCloseEls.forEach((el) => {
      el.addEventListener("click", () => setA11yModalOpen(false));
    });
    a11yActions.forEach((actionBtn) => {
      actionBtn.addEventListener("click", () => {
        const action = actionBtn.getAttribute("data-a11y-action");
        if (action === "font-up") {
          cycleFontSize(1);
          updateA11yStatus(currentLang === "en" ? "Text size increased." : "הכתב הוגדל.");
        }
        if (action === "font-down") {
          cycleFontSize(-1);
          updateA11yStatus(currentLang === "en" ? "Text size decreased." : "הכתב הוקטן.");
        }
        if (action === "contrast") {
          const active = doc.getAttribute("data-a11y-contrast") === "true";
          if (active) doc.removeAttribute("data-a11y-contrast");
          else doc.setAttribute("data-a11y-contrast", "true");
          updateA11yStatus(
            currentLang === "en"
              ? active
                ? "High contrast disabled."
                : "High contrast enabled."
              : active
                ? "ניגודיות גבוהה בוטלה."
                : "ניגודיות גבוהה הופעלה."
          );
        }
        if (action === "spacing") {
          const active = doc.getAttribute("data-a11y-spacing") === "true";
          if (active) doc.removeAttribute("data-a11y-spacing");
          else doc.setAttribute("data-a11y-spacing", "true");
          updateA11yStatus(
            currentLang === "en"
              ? active
                ? "Text spacing disabled."
                : "Text spacing enabled."
              : active
                ? "ריווח טקסט בוטל."
                : "ריווח טקסט הופעל."
          );
        }
        if (action === "reset") {
          resetA11ySettings();
          updateA11yStatus(currentLang === "en" ? "All accessibility settings were reset." : "כל הגדרות הנגישות אופסו.");
        }
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setA11yModalOpen(false);
    });
  }

  const revealEls = document.querySelectorAll(".reveal");

  const cardEls = document.querySelectorAll("[data-card]");
  const scrollPopEls = document.querySelectorAll(
    ".hero__eyebrow, .hero__sub, .hero__cta-row, .section-header, .gallery-item, .guarantee, .mini-game, .mini-game__head"
  );

  const cursorDot = document.getElementById("cursorDot");
  const clickableSelector =
    "a, button, [role='button'], input[type='button'], input[type='submit'], .btn, .growth-toggle, .hero-benefit, summary";

  if (cursorDot && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const moveCursor = (event) => {
      cursorDot.style.left = `${event.clientX}px`;
      cursorDot.style.top = `${event.clientY}px`;
    };

    const setCursorActive = (active) => {
      cursorDot.classList.toggle("is-active", active);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", (event) => {
      const clickable = event.target.closest(clickableSelector);
      setCursorActive(Boolean(clickable));
    });
    document.addEventListener("mouseout", (event) => {
      const leavingClickable = event.target.closest(clickableSelector);
      if (!leavingClickable) return;
      const entering = event.relatedTarget && event.relatedTarget.closest(clickableSelector);
      if (!entering) setCursorActive(false);
    });
  }



  if (!("IntersectionObserver" in window)) {

    revealEls.forEach((el) => el.classList.add("is-visible"));

    cardEls.forEach((el) => el.classList.add("is-visible"));
    scrollPopEls.forEach((el) => el.classList.add("is-visible"));

    return;

  }



  const revealObserver = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        revealObserver.unobserve(entry.target);

      });

    },

    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }

  );



  revealEls.forEach((el) => revealObserver.observe(el));



  const cardObserver = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        cardObserver.unobserve(entry.target);

      });

    },

    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }

  );



  cardEls.forEach((el) => cardObserver.observe(el));

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        scrollObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );

  scrollPopEls.forEach((el) => {
    el.classList.add("scroll-pop");
    scrollObserver.observe(el);
  });

})();

