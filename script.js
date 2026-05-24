(function () {

  const BENEFITS_KEY = "site-hero-benefits";
  const THEME_KEY = "site-theme-mode";
  const PHONE_DISPLAY = "058-612-2187";
  const PHONE_HREF = "tel:+972586122187";

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
        navTrust: "Benefits",
        navGallery: "Projects",
        navReviews: "Reviews",
        navFaq: "FAQ",
        navQuote: "Get a quote",
        navContact: "Contact",
        heroHeadline: "Professional Website for Your Business — More Leads and Clients",
        heroOffer: "Free digital presence check for your business",
        promoEnded: "Offer ended for this month",
        heroWaCta: "Get a quote on WhatsApp",
        heroAuditCta: "Free digital presence check",
        heroLead: "We support",
        heroPrefix: "",
        heroGrowth: "Growth",
        heroGrowthRest: "for your business",
        heroSub: "Free digital presence check for your business",
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
        basicPrice: "Business website for 2,000 ILS",
        pro: "Professional",
        proPrice: "Professional website for 5,500 ILS",
        premium: "Premium",
        premiumPrice: "8,000-15,000+ ILS",
        soon: "COMING SOON",
        basicDesc1: `
          <p>Includes first year of hosting and domain as a <strong>free gift</strong>.</p>
          <p>From the second year: only 790 ILS per year.</p>
          <div class="pricing-card__accordion">
            <button type="button" class="pricing-card__accordion-trigger" aria-expanded="false"><strong>What is it and who is it for?</strong></button>
            <div class="pricing-card__accordion-content" aria-hidden="true">
              <p>A clean, clear website that presents your business, services, and contact details professionally.</p>
              <p>Perfect for small businesses and independent professionals who want trusted online presence and more client inquiries.</p>
            </div>
          </div>
        `,
        basicDesc2: "",
        proDesc1: `
          <p>Includes first year of hosting and domain as a <strong>free gift</strong>.</p>
          <p>From the second year: only 990 ILS per year.</p>
          <div class="pricing-card__accordion">
            <button type="button" class="pricing-card__accordion-trigger" aria-expanded="false"><strong>What is it and who is it for?</strong></button>
            <div class="pricing-card__accordion-content" aria-hidden="true">
              <p>A higher-level website built not only to present your business, but also to generate results: more leads, more clients, and more sales.</p>
              <p>Ideal for businesses that want to stand out, grow, and turn their website into a real marketing and sales channel.</p>
            </div>
          </div>
        `,
        proDesc2: "",
        premiumDesc1: "<strong>What is a premium website?</strong><br />An advanced site with full ecommerce capabilities and automation.",
        premiumDesc2: "<strong>Who is it for?</strong><br />Businesses that want to sell online and scale 24/7.",
        want: "I want this!",
        consult: "<strong>For a consultation and full package details</strong> - we're waiting for your call (:",
        galleryTitle: "Projects We Built",
        gallerySub: "Real website examples for businesses in Israel",
        galleryAAria: "Open DARION project in a new tab",
        galleryBAria: "Open Roomie project in a new tab",
        galleryCAria: "Open lawyer website project in a new tab",
        galleryDAria: "Open Brew Haven coffee shop website project in a new tab",
        galleryEAria: "Open Calmy travel website project in a new tab",
        galleryAltA: "DARION website design project",
        galleryAltB: "Roomie product showcase website project",
        galleryAltC: "Lawyer website project",
        galleryAltD: "Brew Haven coffee shop website project",
        galleryAltE: "Calmy travel website project",
        testimonialsTitle: "Client Testimonials",
        testimonialsSub: "What clients say about working with us",
        reviewsTitle: "Excited Client Reactions",
        reviewsSub: "What real clients shared after getting their new website",
        miniAria: "Price notice",
        footerNote: "Prices do not include hosting, domain, or special add-ons - full details are provided in the call.",
        policy: "Accessibility & Policy",
        languageBtn: "עב",
        a11yFabAria: "Open accessibility tools",
        chatFabAria: "Send a WhatsApp message",
        chatCloseAria: "Close chat window",
        botAlt: "Picasow support bot",
        chatTitle: "How can I help you today?",
        a11yCloseAria: "Close accessibility window",
        a11yTitle: "Website Accessibility",
        a11yLegalHtml: `
          <h1>Accessibility Statement</h1>
          <p>At Picasow, we are committed to making our website and digital services accessible to all users, including people with disabilities.</p>
          <p>This website is built with continuous effort to provide a clear, usable, and accessible experience.</p>
          <h2>Accessibility Adjustments Implemented</h2>
          <ul>
            <li>Mobile and tablet responsive support</li>
            <li>Clear and simple site navigation structure</li>
            <li>Logical heading hierarchy and content flow</li>
            <li>Readable text and baseline contrast support</li>
            <li>Basic keyboard navigation support</li>
            <li>Ongoing ALT text additions for images and visual content</li>
          </ul>
          <p>Despite our efforts, some areas may not yet be fully accessible. We continue improving accessibility on an ongoing basis.</p>
          <h2>Accessibility Contact</h2>
          <p>If you encounter any accessibility issue, please contact us at:</p>
          <p><strong>shilohdhd1@gmail.com</strong></p>
          <p>Last updated: 07/05/2026</p>
          <hr>
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. This policy explains how information may be collected and used.</p>
          <h2>Information Collection</h2>
          <p>The website may collect basic information submitted voluntarily by users, such as name, email, phone number, or other details provided through forms.</p>
          <h2>Use of Information</h2>
          <p>Information may be used for contacting users, providing services, improving user experience, operating the website, and delivering relevant updates.</p>
          <h2>Data Security</h2>
          <p>We apply reasonable measures to protect information, but no online transmission can be guaranteed as absolutely secure.</p>
          <h2>Third-Party Services</h2>
          <p>The website may include links or services from third parties. Their use is subject to those third parties' own policies.</p>
          <h2>Contact</h2>
          <p>For privacy questions, contact: <strong>shilohdhd1@gmail.com</strong></p>
          <hr>
          <h1>Terms of Use</h1>
          <p>Using this website constitutes full agreement to these terms.</p>
          <h2>Website Usage</h2>
          <p>You may not use the website, its content, or services for unlawful purposes.</p>
          <h2>Intellectual Property</h2>
          <p>All content, design, logos, images, code, and materials on this website belong to Picasow and may not be copied or used without prior written permission.</p>
          <h2>Limitation of Liability</h2>
          <p>The website and services are provided "AS IS". We do not guarantee the website will be free of errors, interruptions, or inaccuracies.</p>
          <p>Use of the website and services is at your own responsibility.</p>
          <p>Website management shall not be liable for any direct or indirect damage, data loss, loss of profits, or other damage resulting from website use or reliance on its content.</p>
          <h2>Changes</h2>
          <p>Website management may update, change, or remove content, services, or terms at any time without prior notice.</p>
          <h2>Jurisdiction</h2>
          <p>Use of this website is governed by the laws of the State of Israel.</p>
          <p>Exclusive jurisdiction for any dispute is the competent courts in Israel.</p>
          <h2>Contact</h2>
          <p>For any question, contact: <strong>shilohdhd1@gmail.com</strong></p>
        `,
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
        a11yBw: "Black & white mode",
        a11yLinks: "Highlight links",
        a11yReadableFont: "Readable font",
        a11yStopMotion: "Stop animations",
        a11yKeyboardNav: "Keyboard navigation",
        a11yStatement: "Accessibility statement",
        a11yReset: "Reset",
        cursorLabel: "Click me",
        statusFontUp: "Text size increased.",
        statusFontDown: "Text size decreased.",
        statusContrastOn: "High contrast enabled.",
        statusContrastOff: "High contrast disabled.",
        statusBwOn: "Black & white mode enabled.",
        statusBwOff: "Black & white mode disabled.",
        statusLinksOn: "Link highlighting enabled.",
        statusLinksOff: "Link highlighting disabled.",
        statusReadableFontOn: "Readable font enabled.",
        statusReadableFontOff: "Readable font disabled.",
        statusStopMotionOn: "Animations stopped.",
        statusStopMotionOff: "Animations resumed.",
        statusKeyboardNavOn: "Keyboard navigation mode enabled.",
        statusKeyboardNavOff: "Keyboard navigation mode disabled.",
        statusStatement: "Scrolled to accessibility statement.",
        statusReset: "All accessibility settings were reset.",
        growthOn: "Hide company benefits around the headline",
        growthOff: "Show company benefits around the headline",
        clickHere: "Click here",
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
        pageTitle: "בניית אתרים לעסקים | פיקסו",
        lightLabel: "אור",
        darkLabel: "חושך",
        homeAria: "דף הבית",
        navAria: "ניווט ראשי",
        navServices: "שירותים",
        navTrust: "יתרונות",
        navGallery: "פרויקטים",
        navReviews: "המלצות",
        navFaq: "שאלות",
        navQuote: "הצעת מחיר",
        navContact: "צור קשר",
        heroHeadline: "בניית אתר מקצועי לעסק שלך — לקבלת יותר פניות ולקוחות",
        heroOffer: "בדיקת נוכחות דיגיטלית חינם לעסק שלך",
        promoEnded: "המבצע הסתיים לחודש זה",
        heroWaCta: "לקבלת הצעת מחיר בוואטסאפ",
        heroAuditCta: "בדיקת נוכחות דיגיטלית חינם",
        heroLead: "אנחנו תומכים",
        heroPrefix: "ב",
        heroGrowth: "צמיחה",
        heroGrowthRest: "של העסק שלך",
        heroSub: "בדיקת נוכחות דיגיטלית חינם לעסק שלך",
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
        basicPrice: "אתר תדמית ב־2,000 ₪",
        pro: "מקצועי",
        proPrice: "אתר מקצועי ב־5,500 ₪",
        premium: "פרימיום",
        premiumPrice: "8,000–15,000+ ש\"ח",
        soon: "בקרוב",
        basicDesc1: `
          <p>כולל שנה ראשונה של אחסון ודומיין <strong>במתנה</strong>.</p>
          <p>מהשנה השנייה: 790 ₪ לשנה בלבד.</p>
          <div class="pricing-card__accordion">
            <button type="button" class="pricing-card__accordion-trigger" aria-expanded="false"><strong>מה זה ולמי זה מתאים?</strong></button>
            <div class="pricing-card__accordion-content" aria-hidden="true">
              <p>אתר נקי וברור שמציג את העסק, השירותים ופרטי יצירת הקשר בצורה מקצועית.</p>
              <p>מתאים לעסקים קטנים ובעלי מקצוע שרוצים נוכחות אמינה באינטרנט ויותר פניות מלקוחות.</p>
            </div>
          </div>
        `,
        basicDesc2: "",
        proDesc1: `
          <p>כולל שנה ראשונה של אחסון ודומיין <strong>במתנה</strong>.</p>
          <p>מהשנה השנייה: 990 ₪ לשנה בלבד.</p>
          <div class="pricing-card__accordion">
            <button type="button" class="pricing-card__accordion-trigger" aria-expanded="false"><strong>מה זה ולמי זה מתאים?</strong></button>
            <div class="pricing-card__accordion-content" aria-hidden="true">
              <p>אתר ברמה גבוהה שמיועד לא רק להציג את העסק, אלא גם לייצר תוצאות — יותר פניות, יותר לקוחות ויותר מכירות.</p>
              <p>מתאים לעסקים שרוצים לבלוט, לגדול ולהפוך את האתר לכלי שיווק ומכירה אמיתי.</p>
            </div>
          </div>
        `,
        proDesc2: "",
        premiumDesc1: "<strong>מה זה אתר פרימיום?</strong><br />אתר מתקדם עם מערכת רכישות מלאה, שמאפשר למכור מוצרים או שירותים אונליין בצורה מקצועית ואוטומטית.",
        premiumDesc2: "<strong>למי זה מתאים?</strong><br />לעסקים שרוצים למכור אונליין, להגדיל הכנסות ולעבוד בצורה אוטומטית 24/7.",
        want: "אני רוצה!",
        consult: "<strong>לשיחת ייעוץ וקבלת פרטים על כל חבילה</strong> - מחכים לך בטלפון (:",
        galleryTitle: "פרויקטים שבנינו",
        gallerySub: "דוגמאות לאתרים אמיתיים לעסקים בישראל",
        galleryAAria: "פתיחת פרויקט DARION בחלון חדש",
        galleryBAria: "פתיחת פרויקט Roomie בחלון חדש",
        galleryCAria: "פתיחת פרויקט אתר לעורך דין בחלון חדש",
        galleryDAria: "פתיחת פרויקט אתר בית קפה Brew Haven בחלון חדש",
        galleryEAria: "פתיחת פרויקט אתר נסיעות Calmy בחלון חדש",
        galleryAltA: "פרויקט עיצוב אתר DARION",
        galleryAltB: "פרויקט אתר Roomie לתצוגת מוצר",
        galleryAltC: "פרויקט אתר לעורך דין",
        galleryAltD: "פרויקט אתר בית קפה Brew Haven",
        galleryAltE: "פרויקט אתר נסיעות Calmy",
        testimonialsTitle: "המלצות מלקוחות",
        testimonialsSub: "מה לקוחות אומרים על העבודה איתנו",
        reviewsTitle: "תגובות של התלהבות",
        reviewsSub: "מה שאנשים אמיתיים סיפרו אחרי שקיבלו אתר חדש",
        miniAria: "הערת מחיר",
        footerNote: "המחירים אינם כוללים עלויות אחסון, דומיין ותוספות מיוחדות – פירוט מלא יינתן בשיחת הטלפון.",
        policy: "תקנון ומדיניות",
        languageBtn: "EN",
        a11yFabAria: "פתיחת כלי נגישות",
        chatFabAria: "שליחת הודעה בוואטסאפ",
        chatCloseAria: "סגירת חלונית צ'אט",
        botAlt: "בוט התמיכה של Picasow",
        chatTitle: "איך אוכל לעזור לך היום?",
        a11yCloseAria: "סגירת חלון נגישות",
        a11yTitle: "נגישות האתר",
        a11yLegalHtml: `
          <h1>הצהרת נגישות</h1>
          <p>אנו ב־Picasow רואים חשיבות רבה בהנגשת האתר והשירותים הדיגיטליים לכלל המשתמשים, כולל אנשים עם מוגבלויות.</p>
          <p>האתר נבנה תוך מאמץ לספק חוויית שימוש נוחה, ברורה ונגישה ככל האפשר, בהתאם לעקרונות הנגישות המקובלים.</p>
          <h2>התאמות נגישות שבוצעו באתר</h2>
          <ul>
            <li>התאמה למובייל וטאבלטים</li>
            <li>מבנה אתר ברור ונוח לניווט</li>
            <li>שימוש בכותרות ומבנה תוכן מסודר</li>
            <li>טקסטים קריאים וניגודיות בסיסית</li>
            <li>אפשרות שימוש בסיסית באמצעות מקלדת</li>
            <li>מאמץ להוספת תיאורי ALT לתמונות ותכנים חזותיים</li>
          </ul>
          <p>למרות המאמצים להנגיש את כלל חלקי האתר, ייתכן שחלקים מסוימים עדיין אינם נגישים באופן מלא. אנו ממשיכים לפעול לשיפור הנגישות באופן שוטף.</p>
          <h2>פנייה בנושא נגישות</h2>
          <p>אם נתקלתם בבעיה או בקושי בנושא נגישות באתר, ניתן ליצור קשר באמצעות כתובת האימייל:</p>
          <p><strong>shilohdhd1@gmail.com</strong></p>
          <p>תאריך עדכון אחרון: 07/05/2026</p>
          <hr>
          <h1>מדיניות פרטיות</h1>
          <p>הפרטיות של משתמשי האתר חשובה לנו. מסמך זה מסביר כיצד נאסף ונעשה שימוש במידע באתר.</p>
          <h2>איסוף מידע</h2>
          <p>ייתכן שהאתר אוסף מידע בסיסי שהמשתמש מוסר מרצונו, לרבות שם, כתובת אימייל, מספר טלפון או כל מידע אחר הנשלח דרך טפסים באתר.</p>
          <h2>שימוש במידע</h2>
          <p>המידע עשוי לשמש לצורך יצירת קשר עם המשתמש, מתן שירות, שיפור חוויית המשתמש, תפעול האתר, שליחת הצעות או מידע רלוונטי ושיפור השירותים המוצעים באתר.</p>
          <h2>אבטחת מידע</h2>
          <p>נעשים מאמצים סבירים לשמור על המידע בצורה מאובטחת, אך אין אפשרות להבטיח אבטחה מוחלטת של מידע המועבר דרך האינטרנט.</p>
          <h2>שימוש באתרי צד שלישי</h2>
          <p>ייתכן שהאתר יכלול קישורים, שירותים או כלים חיצוניים של צדדים שלישיים. השימוש בהם כפוף למדיניות של אותם גורמים בלבד.</p>
          <h2>יצירת קשר</h2>
          <p>לכל שאלה בנושא פרטיות ניתן ליצור קשר: <strong>shilohdhd1@gmail.com</strong></p>
          <hr>
          <h1>תנאי שימוש</h1>
          <p>השימוש באתר מהווה הסכמה מלאה לתנאים המפורטים להלן.</p>
          <h2>שימוש באתר</h2>
          <p>אין לעשות שימוש בלתי חוקי באתר, בתכניו או בשירותים המוצעים בו.</p>
          <h2>קניין רוחני</h2>
          <p>כלל התכנים, העיצובים, הלוגואים, התמונות, הקוד והחומרים באתר שייכים ל־Picasow ואין להעתיק, לשכפל או להשתמש בהם ללא אישור מראש ובכתב.</p>
          <h2>הגבלת אחריות</h2>
          <p>המידע והשירותים באתר ניתנים כפי שהם (AS IS). הנהלת האתר אינה מתחייבת כי האתר יהיה נקי מתקלות, שגיאות, הפרעות או אי־דיוקים.</p>
          <p>השימוש באתר ובשירותים המוצעים בו נעשה באחריות המשתמש בלבד.</p>
          <p>הנהלת האתר לא תישא באחריות לכל נזק ישיר או עקיף, אובדן מידע, אובדן רווחים או כל נזק אחר שייגרם כתוצאה מהשימוש באתר או מהסתמכות על המידע המופיע בו.</p>
          <h2>שינויים באתר</h2>
          <p>הנהלת האתר רשאית לעדכן, לשנות או להסיר תכנים, שירותים או תנאים בכל עת וללא הודעה מוקדמת.</p>
          <h2>דין וסמכות שיפוט</h2>
          <p>השימוש באתר כפוף לדיני מדינת ישראל בלבד.</p>
          <p>סמכות השיפוט הבלעדית בכל מחלוקת תהיה בבתי המשפט המוסמכים בישראל.</p>
          <h2>יצירת קשר</h2>
          <p>לכל שאלה ניתן ליצור קשר: <strong>shilohdhd1@gmail.com</strong></p>
        `,
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
        a11yBw: "מצב שחור־לבן",
        a11yLinks: "הדגשת קישורים",
        a11yReadableFont: "פונט קריא",
        a11yStopMotion: "עצירת אנימציות",
        a11yKeyboardNav: "ניווט מקלדת",
        a11yStatement: "הצהרת נגישות",
        a11yReset: "איפוס",
        cursorLabel: "תלחץ עליי",
        statusFontUp: "הכתב הוגדל.",
        statusFontDown: "הכתב הוקטן.",
        statusContrastOn: "ניגודיות גבוהה הופעלה.",
        statusContrastOff: "ניגודיות גבוהה בוטלה.",
        statusBwOn: "מצב שחור־לבן הופעל.",
        statusBwOff: "מצב שחור־לבן בוטל.",
        statusLinksOn: "הדגשת קישורים הופעלה.",
        statusLinksOff: "הדגשת קישורים בוטלה.",
        statusReadableFontOn: "פונט קריא הופעל.",
        statusReadableFontOff: "פונט קריא בוטל.",
        statusStopMotionOn: "אנימציות נעצרו.",
        statusStopMotionOff: "אנימציות הופעלו מחדש.",
        statusKeyboardNavOn: "מצב ניווט מקלדת הופעל.",
        statusKeyboardNavOff: "מצב ניווט מקלדת בוטל.",
        statusStatement: "גלילה להצהרת הנגישות בוצעה.",
        statusReset: "כל הגדרות הנגישות אופסו.",
        growthOn: "הסתרת יתרונות החברה סביב הכותרת",
        growthOff: "הצגת יתרונות החברה סביב הכותרת",
        clickHere: "לחץ כאן",
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
    if (navLinks[0]) navLinks[0].textContent = content.navTrust || "יתרונות";
    if (navLinks[1]) navLinks[1].textContent = content.navGallery;
    if (navLinks[2]) navLinks[2].textContent = content.navReviews;
    if (navLinks[3]) navLinks[3].textContent = content.navFaq || "שאלות";
    if (navLinks[4]) navLinks[4].textContent = content.navQuote;

    const heroPrimary = document.querySelector(".hero__headline--primary");
    if (heroPrimary) heroPrimary.textContent = content.heroHeadline;
    const heroOffer = document.querySelector(".hero__offer");
    if (heroOffer) heroOffer.textContent = content.heroOffer || content.heroSub;
    const heroWaText = document.querySelector(".hero__btn--wa-hero .hero__btn-text");
    if (heroWaText) heroWaText.textContent = content.heroWaCta;
    const heroAuditBtn = document.querySelector(".hero__cta-secondary .hero__btn--quote");
    if (heroAuditBtn) heroAuditBtn.textContent = content.heroAuditCta;
    const brandText = document.getElementById("brandText");
    if (brandText) brandText.textContent = nextLang === "en" ? "PICASOW" : "\u05e4\u05d9\u05e7\u05d0\u05e1\u05d5";

    const firstLine = document.querySelector(".hero__line");
    if (firstLine && firstLine.firstChild) firstLine.firstChild.textContent = `${content.heroLead} `;
    const growthEm = document.querySelector(".hero__growth-em");
    if (growthEm) growthEm.textContent = content.heroGrowth;
    const growthRest = document.querySelector(".hero__growth-rest");
    if (growthRest) growthRest.textContent = content.heroGrowthRest;
    const growthPrefix = document.querySelector(".hero__bet");
    if (growthPrefix) growthPrefix.textContent = content.heroPrefix;

    const heroSub = document.querySelector(".hero__sub:not(.hero__offer)");
    if (heroSub) heroSub.textContent = content.heroSub;
    const heroCta = document.querySelector(".hero__btn-primary:not(.hero__btn-primary--ghost)");
    if (heroCta) heroCta.textContent = content.heroCta;
    const heroCtaGhost = document.querySelector(".hero__btn-primary--ghost");
    if (heroCtaGhost) heroCtaGhost.textContent = content.heroCta;

    document.querySelectorAll("#trust [data-he][data-en], #faq [data-he][data-en], .hero-portfolio [data-he][data-en], .hero-promo [data-he][data-en], .hero__click-hint-label[data-he][data-en], .hero__cta-row [data-he][data-en], .section-leads [data-he][data-en], .chat-fab__label[data-he][data-en], #gallery .section-header [data-he][data-en]").forEach((el) => {
      const value = nextLang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-he");
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll(".hero__btn--phone").forEach((link) => {
      link.setAttribute("aria-label", nextLang === "en" ? `Call ${PHONE_DISPLAY}` : `התקשרו ל־${PHONE_DISPLAY}`);
    });

    document.querySelectorAll("[data-wa-he][data-wa-en]").forEach((el) => {
      const href = nextLang === "en" ? el.getAttribute("data-wa-en") : el.getAttribute("data-wa-he");
      if (href) {
        el.setAttribute("href", href);
        if (el.tagName === "A" && !el.getAttribute("target")) {
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener noreferrer");
        }
      }
    });
    updatePromoCountdown({
      promoEnded: nextLang === "en" ? "Offer ended for this month" : "המבצע הסתיים לחודש זה",
    });
    const contactTitle = document.getElementById("contactTitle");
    if (contactTitle) contactTitle.textContent = content.contactTitle;
    const contactClose = document.querySelector(".contact-modal__close");
    if (contactClose) contactClose.setAttribute("aria-label", content.contactCloseAria);
    const portfolio = document.getElementById("portfolio");
    if (portfolio) portfolio.textContent = content.portfolioAnchor;
    const demandHeading = document.getElementById("demand-heading");
    if (demandHeading) demandHeading.textContent = content.servicesTitle;
    const servicesSub = document.querySelector("#services .section-header__sub");
    if (servicesSub) servicesSub.textContent = content.servicesSub;
    const plansHeading = document.getElementById("plans-heading");
    if (plansHeading) plansHeading.textContent = content.galleryTitle;
    const plansSub = document.querySelector("#gallery .section-header__sub");
    if (plansSub) plansSub.textContent = content.gallerySub;
    const galleryA = document.querySelector(".gallery-item--a");
    const galleryB = document.querySelector(".gallery-item--b");
    const galleryC = document.querySelector(".gallery-item--c");
    const galleryD = document.querySelector(".gallery-item--d");
    const galleryE = document.querySelector(".gallery-item--e");
    if (galleryA) galleryA.setAttribute("aria-label", content.galleryAAria);
    if (galleryB) galleryB.setAttribute("aria-label", content.galleryBAria);
    if (galleryC) galleryC.setAttribute("aria-label", content.galleryCAria);
    if (galleryD) galleryD.setAttribute("aria-label", content.galleryDAria);
    if (galleryE) galleryE.setAttribute("aria-label", content.galleryEAria);
    const galleryAImg = document.querySelector(".gallery-item--a img");
    const galleryBImg = document.querySelector(".gallery-item--b img");
    const galleryCImg = document.querySelector(".gallery-item--c img");
    const galleryDImg = document.querySelector(".gallery-item--d img");
    const galleryEImg = document.querySelector(".gallery-item--e img");
    if (galleryAImg) galleryAImg.alt = content.galleryAltA;
    if (galleryBImg) galleryBImg.alt = content.galleryAltB;
    if (galleryCImg) galleryCImg.alt = content.galleryAltC;
    if (galleryDImg) galleryDImg.alt = content.galleryAltD;
    if (galleryEImg) galleryEImg.alt = content.galleryAltE;
    const testimonialsHeading = document.getElementById("testimonials-heading");
    if (testimonialsHeading) testimonialsHeading.textContent = content.testimonialsTitle;
    const testimonialsSub = document.querySelector(".section--testimonials .section-header__sub");
    if (testimonialsSub) testimonialsSub.textContent = content.testimonialsSub;
    const reviewsHeading = document.getElementById("reviews-heading");
    if (reviewsHeading) reviewsHeading.textContent = content.reviewsTitle;
    const reviewsSub = document.querySelector(".section--reviews .section-header__sub");
    if (reviewsSub) reviewsSub.textContent = content.reviewsSub;
    const testimonialTexts = document.querySelectorAll(".testimonial-card__text");
    testimonialTexts.forEach((item) => {
      const nextText = nextLang === "en" ? item.getAttribute("data-en") : item.getAttribute("data-he");
      if (nextText) item.textContent = nextText;
    });
    const clientReviewText = document.querySelector(".client-review-card .testimonial-card__text");
    if (clientReviewText) {
      const nextText = nextLang === "en" ? clientReviewText.getAttribute("data-en") : clientReviewText.getAttribute("data-he");
      if (nextText) clientReviewText.textContent = nextText;
    }
    const reviewName = document.querySelector(".client-review-card .testimonial-card__name");
    if (reviewName) {
      const nextName = nextLang === "en" ? reviewName.getAttribute("data-en") : reviewName.getAttribute("data-he");
      if (nextName) reviewName.textContent = nextName;
    }
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
    document.querySelectorAll("#services [data-he][data-en]").forEach((el) => {
      const value = nextLang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-he");
      if (value != null) el.textContent = value;
    });
    const premiumTagline = document.querySelector(".pricing-card--enterprise .pricing-card__tagline");
    if (premiumTagline) premiumTagline.textContent = content.premiumPrice;

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
    if (lists[0]) lists[0].innerHTML = content.basicDesc1;
    if (lists[1]) lists[1].innerHTML = content.proDesc1;
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
    const legalContentEl = document.getElementById("a11yLegalContent");
    if (legalContentEl) legalContentEl.innerHTML = content.a11yLegalHtml;
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
    const a11yBwBtn = document.querySelector('[data-a11y-action="bw"]');
    const a11yLinksBtn = document.querySelector('[data-a11y-action="links"]');
    const a11yReadableFontBtn = document.querySelector('[data-a11y-action="readable-font"]');
    const a11yStopMotionBtn = document.querySelector('[data-a11y-action="stop-motion"]');
    const a11yKeyboardNavBtn = document.querySelector('[data-a11y-action="keyboard-nav"]');
    const a11yStatementBtn = document.querySelector('[data-a11y-action="statement"]');
    const a11yResetBtn = document.querySelector('[data-a11y-action="reset"]');
    if (a11yFontUpBtn) a11yFontUpBtn.textContent = content.a11yFontUp;
    if (a11yFontDownBtn) a11yFontDownBtn.textContent = content.a11yFontDown;
    if (a11yContrastBtn) a11yContrastBtn.textContent = content.a11yContrast;
    if (a11yBwBtn) a11yBwBtn.textContent = content.a11yBw;
    if (a11yLinksBtn) a11yLinksBtn.textContent = content.a11yLinks;
    if (a11yReadableFontBtn) a11yReadableFontBtn.textContent = content.a11yReadableFont;
    if (a11yStopMotionBtn) a11yStopMotionBtn.textContent = content.a11yStopMotion;
    if (a11yKeyboardNavBtn) a11yKeyboardNavBtn.textContent = content.a11yKeyboardNav;
    if (a11yStatementBtn) a11yStatementBtn.textContent = content.a11yStatement;
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
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
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



  function getPromoMonthEnd() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
  }

  function padCountdown(value) {
    return String(Math.max(0, value)).padStart(2, "0");
  }

  function updatePromoCountdown(contentOverride) {
    const root = document.getElementById("heroPromoCountdown");
    if (!root) return;
    const content = contentOverride || (currentLang === "en" ? { promoEnded: "Offer ended for this month" } : { promoEnded: "המבצע הסתיים לחודש זה" });
    const label = root.querySelector(".hero-promo__timer-label");
    const unitEls = {
      days: root.querySelector('[data-promo-unit="days"]'),
      hours: root.querySelector('[data-promo-unit="hours"]'),
      minutes: root.querySelector('[data-promo-unit="minutes"]'),
      seconds: root.querySelector('[data-promo-unit="seconds"]'),
    };
    const remainingMs = getPromoMonthEnd().getTime() - Date.now();

    if (remainingMs <= 0) {
      root.classList.add("is-ended");
      if (label) label.textContent = content.promoEnded || "המבצע הסתיים לחודש זה";
      return;
    }

    root.classList.remove("is-ended");
    if (label) {
      const labelText = currentLang === "en" ? label.getAttribute("data-en") : label.getAttribute("data-he");
      if (labelText) label.textContent = labelText;
    }

    const totalSeconds = Math.floor(remainingMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (unitEls.days) unitEls.days.textContent = padCountdown(days);
    if (unitEls.hours) unitEls.hours.textContent = padCountdown(hours);
    if (unitEls.minutes) unitEls.minutes.textContent = padCountdown(minutes);
    if (unitEls.seconds) unitEls.seconds.textContent = padCountdown(seconds);
  }

  function initPromoCountdown() {
    updatePromoCountdown();
    window.setInterval(() => updatePromoCountdown(), 1000);
  }

  function dialPhone() {
    window.location.href = PHONE_HREF;
  }

  function initLeadButtons() {
    document.querySelectorAll('a[href="#contact"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.getElementById("contact");
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        const firstField = document.getElementById("quoteName");
        if (firstField) {
          window.setTimeout(() => firstField.focus({ preventScroll: true }), 450);
        }
      });
    });

    document.querySelectorAll(".hero__btn--phone").forEach((link) => {
      link.setAttribute("href", PHONE_HREF);
      link.setAttribute("aria-label", currentLang === "en" ? `Call ${PHONE_DISPLAY}` : `התקשרו ל־${PHONE_DISPLAY}`);
      link.addEventListener("click", (event) => {
        event.preventDefault();
        dialPhone();
      });
    });

    document.querySelectorAll("a[href^='tel:']:not(.hero__btn--phone)").forEach((link) => {
      link.setAttribute("href", PHONE_HREF);
    });

    function openExternalUrl(url) {
      if (!url) return;
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) window.location.href = url;
    }

    document.querySelectorAll(".hero__btn--wa, [data-wa-he][data-wa-en]").forEach((link) => {
      if (link.tagName !== "A") return;
      if (!link.getAttribute("target")) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
      link.addEventListener("click", (event) => {
        const href =
          (currentLang === "en" ? link.getAttribute("data-wa-en") : link.getAttribute("data-wa-he")) ||
          link.getAttribute("href");
        if (!href || !href.includes("wa.me")) return;
        if (location.protocol === "file:") {
          event.preventDefault();
          openExternalUrl(href);
        }
      });
    });
  }

  applyLanguage("he");
  initBenefits();
  initPromoCountdown();
  initLeadButtons();
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

  const chatTrigger = document.getElementById("chatTrigger");
  if (chatTrigger && chatTrigger.tagName === "BUTTON") {
    chatTrigger.addEventListener("click", () => {
      const text = encodeURIComponent(
        currentLang === "en" ? "Hi, I want to get more details." : "שלום, אני רוצה לקבל פרטים נוספים."
      );
      window.open(`https://wa.me/972586122187?text=${text}`, "_blank", "noopener,noreferrer");
    });
  }

  const a11yModal = document.getElementById("accessibilityModal");
  const a11yTrigger = document.getElementById("accessibilityTrigger");
  const a11yInlineTrigger = document.getElementById("accessibilityInlineTrigger");
  const a11yCloseEls = document.querySelectorAll("[data-close-a11y]");
  const a11yActions = document.querySelectorAll("[data-a11y-action]");
  const a11yStatus = document.getElementById("a11yStatus");
  const a11yPanel = document.querySelector(".a11y-modal__panel");
  const a11yLegalContent = document.getElementById("a11yLegalContent");

  function setA11yModalOpen(open) {
    if (!a11yModal) return;
    a11yModal.classList.toggle("is-open", open);
    a11yModal.setAttribute("aria-hidden", String(!open));
  }

  function focusLegalStatement() {
    if (!a11yPanel || !a11yLegalContent) return;
    const targetTop = Math.max(0, a11yLegalContent.offsetTop - 14);
    a11yPanel.scrollTo({ top: targetTop, behavior: "smooth" });
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
    doc.removeAttribute("data-a11y-bw");
    doc.removeAttribute("data-a11y-links");
    doc.removeAttribute("data-a11y-readable");
    doc.removeAttribute("data-a11y-stop-motion");
    doc.removeAttribute("data-a11y-keyboard-nav");
  }

  if ((a11yTrigger || a11yInlineTrigger) && a11yModal) {
    resetA11ySettings();
    if (a11yTrigger) a11yTrigger.addEventListener("click", () => setA11yModalOpen(true));
    if (a11yInlineTrigger) {
      a11yInlineTrigger.addEventListener("click", () => {
        setA11yModalOpen(true);
        focusLegalStatement();
      });
    }
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
        if (action === "bw") {
          const active = doc.getAttribute("data-a11y-bw") === "true";
          if (active) doc.removeAttribute("data-a11y-bw");
          else doc.setAttribute("data-a11y-bw", "true");
          updateA11yStatus(
            currentLang === "en"
              ? active
                ? "Black & white mode disabled."
                : "Black & white mode enabled."
              : active
                ? "מצב שחור־לבן בוטל."
                : "מצב שחור־לבן הופעל."
          );
        }
        if (action === "links") {
          const active = doc.getAttribute("data-a11y-links") === "true";
          if (active) doc.removeAttribute("data-a11y-links");
          else doc.setAttribute("data-a11y-links", "true");
          updateA11yStatus(
            currentLang === "en"
              ? active
                ? "Link highlighting disabled."
                : "Link highlighting enabled."
              : active
                ? "הדגשת קישורים בוטלה."
                : "הדגשת קישורים הופעלה."
          );
        }
        if (action === "readable-font") {
          const active = doc.getAttribute("data-a11y-readable") === "true";
          if (active) doc.removeAttribute("data-a11y-readable");
          else doc.setAttribute("data-a11y-readable", "true");
          updateA11yStatus(
            currentLang === "en"
              ? active
                ? "Readable font disabled."
                : "Readable font enabled."
              : active
                ? "פונט קריא בוטל."
                : "פונט קריא הופעל."
          );
        }
        if (action === "stop-motion") {
          const active = doc.getAttribute("data-a11y-stop-motion") === "true";
          if (active) doc.removeAttribute("data-a11y-stop-motion");
          else doc.setAttribute("data-a11y-stop-motion", "true");
          updateA11yStatus(
            currentLang === "en"
              ? active
                ? "Animations resumed."
                : "Animations stopped."
              : active
                ? "אנימציות הופעלו מחדש."
                : "אנימציות נעצרו."
          );
        }
        if (action === "keyboard-nav") {
          const active = doc.getAttribute("data-a11y-keyboard-nav") === "true";
          if (active) doc.removeAttribute("data-a11y-keyboard-nav");
          else doc.setAttribute("data-a11y-keyboard-nav", "true");
          updateA11yStatus(
            currentLang === "en"
              ? active
                ? "Keyboard navigation mode disabled."
                : "Keyboard navigation mode enabled."
              : active
                ? "מצב ניווט מקלדת בוטל."
                : "מצב ניווט מקלדת הופעל."
          );
        }
        if (action === "statement") {
          focusLegalStatement();
          updateA11yStatus(currentLang === "en" ? "Scrolled to accessibility statement." : "גלילה להצהרת הנגישות בוצעה.");
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
    ".hero__eyebrow, .hero__sub, .hero-promo, .hero__cta-row, .hero-portfolio, .section-header, .gallery-item, .guarantee, .trust-grid, .section-leads, .faq-list, .mini-game, .mini-game__head"
  );

  const cursorDot = document.getElementById("cursorDot");
  const clickableSelector =
    "a, button, [role='button'], input[type='button'], input[type='submit'], .btn, .growth-toggle, .hero-benefit, summary";

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".pricing-card__accordion-trigger");
    if (!trigger) return;
    const accordion = trigger.closest(".pricing-card__accordion");
    const content = accordion?.querySelector(".pricing-card__accordion-content");
    if (!accordion || !content) return;
    const isOpen = accordion.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
    content.setAttribute("aria-hidden", String(!isOpen));
  });

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

  const quoteForm = document.getElementById("quoteForm");
  const quoteName = document.getElementById("quoteName");
  const quotePhone = document.getElementById("quotePhone");
  const quotePackageField = document.getElementById("quotePackageField");
  const quoteChoicesField = document.getElementById("quoteChoices");
  const quoteSection = document.getElementById("contact");
  const SUCCESS_PAGE_URL = "/success.html";
  const WEB3FORMS_URL = "https://api.web3forms.com/submit";
  // כתובת Web App מ-Google Apps Script (ראה google-apps-script/quote-sms-webhook.gs + Twilio)
  const QUOTE_SMS_WEBHOOK_URL = "";

  function applyQuoteLang(lang) {
    const nextLang = lang === "en" ? "en" : "he";
    const scopes = [quoteSection].filter(Boolean);
    scopes.forEach((scope) => {
      scope.querySelectorAll("[data-he][data-en]").forEach((el) => {
        const value = nextLang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-he");
        if (value != null) el.textContent = value;
      });
      scope.querySelectorAll("[data-he-placeholder][data-en-placeholder]").forEach((el) => {
        const value = nextLang === "en" ? el.getAttribute("data-en-placeholder") : el.getAttribute("data-he-placeholder");
        if (value != null) el.setAttribute("placeholder", value);
      });
    });
  }

  applyQuoteLang(currentLang);
  const quoteLangBtn = document.getElementById("languageToggle");
  if (quoteLangBtn) {
    quoteLangBtn.addEventListener("click", () => {
      applyQuoteLang(currentLang);
    });
  }

  function setFieldError(field, hasError) {
    if (!field) return;
    field.classList.toggle("is-invalid", hasError);
    const errEl = document.querySelector('[data-error-for="' + field.id + '"]');
    if (errEl) errEl.classList.toggle("is-visible", hasError);
  }

  function setChoicesError(hasError) {
    if (quoteChoicesField) quoteChoicesField.classList.toggle("is-invalid", hasError);
    const errEl = document.querySelector('[data-error-for="quoteChoices"]');
    if (errEl) errEl.classList.toggle("is-visible", hasError);
  }

  function validateQuoteForm() {
    let valid = true;
    const name = (quoteName?.value || "").trim();
    if (name.length < 2) { setFieldError(quoteName, true); valid = false; } else setFieldError(quoteName, false);
    const rawPhone = (quotePhone?.value || "").replace(/[\s\-().]/g, "");
    const phoneOk = /^0\d{8,9}$/.test(rawPhone) || /^\+?972\d{8,9}$/.test(rawPhone);
    if (!phoneOk) { setFieldError(quotePhone, true); valid = false; } else setFieldError(quotePhone, false);
    const chosen = quoteForm ? quoteForm.querySelector('input[name="package"]:checked') : null;
    if (!chosen) { setChoicesError(true); valid = false; } else setChoicesError(false);
    return valid;
  }

  function getPackageLabel(pkg) {
    const isPro = pkg === "pro";
    return isPro
      ? (currentLang === "en" ? "Professional website" : "אתר מקצועי")
      : (currentLang === "en" ? "Brand website" : "אתר תדמית");
  }

  function submitQuoteViaWeb3Forms(name, phone, packageText) {
    if (!quoteForm) return Promise.resolve(false);
    const formData = new FormData(quoteForm);
    formData.set("name", name);
    formData.set("phone", phone);
    formData.set("package", packageText);
    formData.set(
      "message",
      "שם: " + name + "\nטלפון: " + phone + "\nחבילה: " + packageText
    );
    return fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
      .then(({ ok, data }) => Boolean(ok && data && data.success))
      .catch(() => false);
  }

  function notifySmsViaWebhook(name, phone, packageText) {
    if (!QUOTE_SMS_WEBHOOK_URL) return Promise.resolve(false);
    const url = new URL(QUOTE_SMS_WEBHOOK_URL);
    url.searchParams.set("name", name);
    url.searchParams.set("phone", phone);
    url.searchParams.set("package", packageText);
    return fetch(url.toString(), { method: "GET", cache: "no-store" })
      .then((res) => res.json())
      .then((data) => Boolean(data && data.ok))
      .catch(() => false);
  }

  function deliverQuoteLead(name, phone, packageText) {
    return Promise.all([
      submitQuoteViaWeb3Forms(name, phone, packageText),
      notifySmsViaWebhook(name, phone, packageText),
    ]).then(([emailOk, smsOk]) => ({ emailOk, smsOk }));
  }

  function goToSuccessPage(success) {
    try {
      sessionStorage.setItem("picasow_lang", currentLang === "en" ? "en" : "he");
    } catch (_) { /* ignore */ }
    const suffix = success ? "" : "?error=1";
    window.location.href = SUCCESS_PAGE_URL + suffix;
  }

  if (quoteForm) {
    [quoteName, quotePhone].forEach((el) => {
      if (el) el.addEventListener("input", () => setFieldError(el, false));
    });
    quoteForm.querySelectorAll('input[name="package"]').forEach((radio) => {
      radio.addEventListener("change", () => setChoicesError(false));
    });

    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!validateQuoteForm()) return;
      const name = quoteName.value.trim();
      const phone = quotePhone.value.trim();
      const pkg = (quoteForm.querySelector('input[name="package"]:checked') || {}).value;
      const packageText = getPackageLabel(pkg);
      if (quotePackageField) quotePackageField.value = packageText;
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      deliverQuoteLead(name, phone, packageText).then(({ emailOk, smsOk }) => {
        goToSuccessPage(emailOk || smsOk);
      });
    });
  }

})();

