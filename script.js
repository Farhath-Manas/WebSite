// Translation dictionary
const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        products: "Products",
        updates: "Updates",
        shopNow: "Shop Now",
        trendingTitle: "Our Trending Products",
        newOne: "New One",
        newSignal: "New Signal Toothpaste 2025",
        tagline: "LEMON+CHARCOAL Bright smiles",
        footerCompany: "Unilever Sri Lanka \n258 M. Vincent Perera Mawatha, \nColombo 01400, Sri Lanka"
    },
    si: {
        home: "මුල් පිටුව",
        about: "අපි ගැන",
        services: "සේවා",
        products: "නිෂ්පාදන",
        updates: "අලුත් දේවල්",
        shopNow: "දැන් මිලදී ගන්න",
        trendingTitle: "අපේ ජනප්‍රිය නිෂ්පාදන",
        newOne: "නව එක",
        newSignal: "නව සයිග්නල් පස්ටා 2025",
        tagline: "ලෙමන් + කර්බන් දීප්තිමත් සිනහව",
        footerCompany: "Unilever ශ්‍රී ලංකා \n258 M. Vincent Perera Mawatha, \nකොළඹ 01400, ශ්‍රී ලංකාව"
    },
    ta: {
        home: "முகப்பு",
        about: "எங்களை பற்றி",
        services: "சேவைகள்",
        products: "தயாரிப்புகள்",
        updates: "புதுப்பிப்புகள்",
        shopNow: "இப்போது வாங்க",
        trendingTitle: "எங்கள் பிரபலமான தயாரிப்புகள்",
        newOne: "புதிய ஒன்று",
        newSignal: "புதிய சிக்னல் பற்பசை 2025",
        tagline: "எலுமிச்சை + கரியமிளகு புன்னகை",
        footerCompany: "Unilever இலங்கை \n258 M. Vincent Perera Mawatha, \nகொழும்பு 01400, இலங்கை"
    }
};

// Function to change language
function changeLanguage(lang) {
    document.querySelector('a[href="./index.html"]').textContent = translations[lang].home;
    document.querySelector('a[href="./about.html"]').textContent = translations[lang].about;
    document.querySelector('a[href="./services.html"]').textContent = translations[lang].services;
    document.querySelector('a[href="./products.html"]').textContent = translations[lang].products;
    document.querySelector('a[href="./updates.html"]').textContent = translations[lang].updates;

    document.querySelector(".main-text h5").textContent = translations[lang].newOne;
    document.querySelector(".main-text h1").textContent = translations[lang].newSignal;
    document.querySelector(".main-text p").textContent = translations[lang].tagline;
    document.querySelector(".main-btn").textContent = translations[lang].shopNow;

    document.querySelector(".center-text h2").textContent = translations[lang].trendingTitle;

    document.querySelector(".first-info p").textContent = translations[lang].footerCompany;
}

// Attach click events to custom dropdown links
document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        document.querySelector('.dropdown-btn').textContent = this.textContent;
        changeLanguage(lang);
    });
});

// Initialize default language
changeLanguage('en');


const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
