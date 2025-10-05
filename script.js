/* ------- Language translations (extend as needed) ------- */
const translations = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", products: "Products", updates: "Updates" },
    main: { newOne: "New One", newSignal: "New Signal Toothpaste 2025", tagline: "LEMON+CHARCOAL Bright smiles", shopNow: "Shop Now", trendingTitle: "Our Trending Products" },
    about: {
      title: "About Us",
      paras: [
        "Signal is one of the world’s most trusted toothpaste brands, owned by Unilever, a global leader in personal care and consumer goods.",
        "The early years of Signal focused on fluoride-based toothpaste, which played a vital role in preventing cavities and strengthening enamel.",
        "Beyond offering quality toothpaste, Signal has been recognized for its community-driven initiatives.",
        "In recent years, Signal has also embraced sustainability and innovation.",
        "Today, Signal operates in multiple countries, serving millions of customers."
      ],
      mission: "👉 “To create healthier, brighter smiles for generations to come.”"
    },
    footer: { address: "Unilever Sri Lanka \n258 M. Vincent Perera Mawatha, \nColombo 01400, Sri Lanka", supportTitle: "Support", companyTitle: "Company", subscribeTitle: "Subscribe", endText: "© 2025 Copyright Signal. All Rights Reserved. Designed By Farhath Mana." }
  },

  si: {
    nav: { home: "මුල් පිටුව", about: "අපි ගැන", services: "සේවා", products: "නිෂ්පාදන", updates: "අලුත් දේවල්" },
    main: { newOne: "නව එක", newSignal: "නව සයිග්නල් පස්ටා 2025", tagline: "ලෙමන් + කර්බන් දීප්තිමත් සිනහව", shopNow: "දැන් මිලදී ගන්න", trendingTitle: "අපේ ජනප්‍රිය නිෂ්පාදන" },
    about: {
      title: "අපි ගැන",
      paras: [
        "සිග්නල් යනු ලොව විශ්වාසදායී දන්ත මල්මයන්ගෙන් එකකි, Unilever ආයතනයට අයත් වේ.",
        "සිග්නල් ආරම්භක කාලයේදී ෆ්ලුරයිඩ් පදනම් වූ දන්ත මල්ම මූලික වශයෙන් කෙරුණි.",
        "ගුණාත්මක දන්ත මල්ම ලබා දීමෙන් ඉක්මවා, සයිග්නල් ප්‍රජා බලවත් වැඩසටහන් තුළට සම්බන්ධ වී තිබේ.",
        "නැවතත්, සයිග්නල් පරිසර හිතකාමී නවෝත්පාදන ප්‍රවර්ධනය කරයි.",
        "අද, සයිග්නල් බහු රටවල සේවය කරයි."
      ],
      mission: "👉 “පරම්පරාවන් සඳහා සෞඛ්‍ය සම්පන්න, දීප්තිමත් සිනහවන් සෑදීම.”"
    },
    footer: { address: "Unilever ශ්‍රී ලංකා \n258 M. Vincent Perera Mawatha, \nකොළඹ 01400, ශ්‍රී ලංකාව", supportTitle: "සහාය", companyTitle: "සමාගම", subscribeTitle: "දැන් ලියාපදිංචි වන්න", endText: "© 2025 Copyright Signal. All Rights Reserved. Designed By Farhath Mana." }
  },

  ta: {
    nav: { home: "முகப்பு", about: "எங்களை பற்றி", services: "சேவைகள்", products: "தயாரிப்புகள்", updates: "புதுப்பிப்புகள்" },
    main: { newOne: "புதிய ஒன்று", newSignal: "புதிய சிக்னல் பற்பசை 2025", tagline: "எலுமிச்சை + கரியமிளகு புன்னகை", shopNow: "இப்போது வாங்க", trendingTitle: "எங்கள் பிரபலமான தயாரிப்புகள்" },
    about: {
      title: "எங்களை பற்றி",
      paras: [
        "சிக்னல் உலகின் மிகவும் நம்பிக்கையുള്ള பற்பசை பிராண்டுகளில் ஒன்றாகும், Unilever நிறுவனத்தின் உட்பட்டது.",
        "ஆரம்பகாலங்களில் புளோரைடு அடிப்படையிலான பற்பசைகள் முக்கிய பங்கு வகித்தன.",
        "தரமான பற்பசை வழங்குவதோடு சமூக திட்டங்களிலும் சிக்னல் ஈடுபட்டுள்ளது.",
        "சமீப ஆண்டுகளில் சிக்னல் நிலைத்தன்மை மற்றும் புதுமையை ஏற்றுக்கொண்டுள்ளது.",
        "இன்று, சிக்னல் பல நாடுகளில் செயல்படுகிறது."
      ],
      mission: "👉 “தலைமுறைகளுக்காக ஆரோக்கியமான, பிரகாசமான புன்னகைகளை உருவாக்க.”"
    },
    footer: { address: "Unilever இலங்கை \n258 M. Vincent Perera Mawatha, \nகொழும்பு 01400, இலங்கை", supportTitle: "ஆதரவு", companyTitle: "நிறுமம்", subscribeTitle: "சந்தா செய்", endText: "© 2025 Copyright Signal. All Rights Reserved. Designed By Farhath Mana." }
  }
};

/* ------- Helpers & element updates ------- */
function setTextIfExists(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return false;
  // preserve line breaks for elements like footer address
  if (el.tagName.toLowerCase() === 'p' && text.includes('\n')) {
    el.innerHTML = text.split('\n').map(s => escapeHtml(s)).join('<br>');
  } else {
    el.textContent = text;
  }
  return true;
}
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* Main language update function: attempts sensible fallbacks if IDs are missing */
function changeLanguage(lang) {
  const t = translations[lang] || translations.en;
  // nav
  setTextIfExists('a[href="./index.html"]', t.nav.home);
  setTextIfExists('a[href="./about.html"]', t.nav.about);
  setTextIfExists('a[href="./services.html"]', t.nav.services);
  setTextIfExists('a[href="./products.html"]', t.nav.products);
  setTextIfExists('a[href="./updates.html"]', t.nav.updates);

  // main hero
  setTextIfExists('.main-text h5', t.main.newOne);
  setTextIfExists('.main-text h1', t.main.newSignal);
  setTextIfExists('.main-text p', t.main.tagline);
  setTextIfExists('.main-btn', t.main.shopNow);
  setTextIfExists('.center-text h2', t.main.trendingTitle);

  // about: title
  const aboutTitle = document.getElementById('about-title') || document.querySelector('.about-info .dsc h1');
  if (aboutTitle) aboutTitle.textContent = t.about.title;

  // about paragraphs: try IDs first, else fill .about-info .dsc p sequentially
  const parasById = ['about-p1','about-p2','about-p3','about-p4','about-p5'].map(id => document.getElementById(id));
  if (parasById.every(Boolean)) {
    parasById.forEach((el, i) => el.textContent = t.about.paras[i] || '');
  } else {
    const pEls = document.querySelectorAll('.about-info .dsc p');
    for (let i=0;i<Math.min(pEls.length, t.about.paras.length); i++){
      pEls[i].textContent = t.about.paras[i];
    }
    // mission: prefer element with id 'about-mission' else last paragraph
    const missionEl = document.getElementById('about-mission') || document.querySelector('.about-info .dsc p:last-of-type');
    if (missionEl) missionEl.textContent = t.about.mission;
  }

  // footer
  setTextIfExists('.first-info p', t.footer.address);
  setTextIfExists('.second-info h4', t.footer.supportTitle);
  setTextIfExists('.third-info h4', t.footer.companyTitle);
  setTextIfExists('.forth-info h4', t.footer.subscribeTitle);
  setTextIfExists('.end-text p', t.footer.endText);

  // accessibility: set document language
  document.documentElement.lang = lang;
}

/* ------- Dropdown behavior, persistence, ARIA, keyboard ------- */
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.language-dropdown');
  if (!dropdown) return;
  const btn = dropdown.querySelector('.dropdown-btn');
  const content = dropdown.querySelector('.dropdown-content');
  const links = content ? Array.from(content.querySelectorAll('a[data-lang]')) : [];

  // set ARIA
  btn.setAttribute('aria-haspopup','true');
  btn.setAttribute('aria-expanded','false');

  // toggle open/close
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      // focus first option for keyboard users
      const first = links[0];
      if (first) first.focus();
    }
  });

  // click outside closes
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }
  });

  // keyboard: Esc closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      btn.focus();
    }
  });

  // selection and keyboard activation
  links.forEach(link => {
    link.tabIndex = 0;
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      const lang = link.getAttribute('data-lang');
      btn.textContent = link.textContent; // show "🇱🇰 සිංහල" etc.
      changeLanguage(lang);
      localStorage.setItem('siteLang', lang);
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      btn.focus();
    });
    link.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        link.click();
      }
    });
  });

  // initialize from saved preference or default
  const saved = localStorage.getItem('siteLang') || 'en';
  const matching = links.find(a => a.dataset.lang === saved);
  if (matching) btn.textContent = matching.textContent;
  changeLanguage(saved);
});


//  Sticky header
const header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky", window.scrollY > 0);
    });
}

//  Menu toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };
}
