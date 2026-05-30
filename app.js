// Verse Jersey - World Cup 2026 Core E-Commerce Script

// 1. Products Database
const PRODUCTS = [
    {
        id: 101,
        name: "Argentina Home 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.9,
        type: "National Kits",
        teamKey: "argentina",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhGL7D8vKynOY4GjKYHIFUCm-lY_XTe9tGsiz4YyN7_KgitixZh1oqk6UyPZ_WZJtGEuxWb2a49exjjnHvCk_U3PLrMbc7wYdzVd_9m5i88qOPl81tVbcRS0huNSAAW3o-OtSFZuirPEriRW_Qs8LWrSF7KUc2bQIaPEIrXnzDGCdozScJtUcI6lAWLjYIRxQXb6DfgGny-tcNrtyIxO3Ioo2J6seQ80TCaXr5owmWev5cbOLOA7IjrttxshStGUPOp7XCb6sdiQ1E",
        description: "Celebrate national glory with the official Argentina 2026 Home Player Edition kit. Constructed with lightweight, high-performance aero-weave fabric, displaying vibrant sky-blue stripes and heat-fused golden detailing.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 102,
        name: "France Away 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.8,
        type: "National Kits",
        teamKey: "france",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBegYyFXe4V5WPS7l31PQRZmd7fa0ytcaZpL1DxsMdWyFG9n06ffpDwhuoZElS10McdhgZk732P2eayG9IJzUFiMFzIuey2sgLgZTi-wl7Z6jdyUj8xuJLpu2axr3YUOXlp4zifXd2aje3KabC1gbyL3yIUCX1CoiBfPqUIDbIFBuIH_myy5CgUVkbfyuOixeQ7YXNGLIm7EGIv3WF_LGKJ6o3FkjbPiEqq85oA1oOrChih8q75TR4cK9djM8nR6yroZSpHMGKnY3gY",
        description: "Engineered for pure dominance, the France 2026 Away Player Edition jersey combines a deep navy athletic core with sleek crimson highlights. Featuring advanced sweat-wicking knit layers.",
        isCustom: false,
        inStock: true,
        sizes: ["M", "L", "XL"],
        isLimited: false
    },
    {
        id: 103,
        name: "Brazil Home 2026",
        version: "Fan Edition",
        price: 99.99,
        rating: 4.9,
        type: "National Kits",
        teamKey: "brazil",
        image: "brazil_jersey.png",
        description: "Represent the legendary Seleção with the Brazil 2026 Home Fan Edition jersey. Displays the classic bright yellow base with breathable cuffs and highly durable doubleknit weave contours.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 104,
        name: "Germany Home 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.7,
        type: "National Kits",
        teamKey: "germany",
        image: "germany_jersey.png",
        description: "Maximize precision and tactical presence in the Germany 2026 Home Player Edition jersey. Structured white base with black shoulder panel overlays and subtle flag sleeve accents.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 105,
        name: "Japan Home 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.9,
        type: "National Kits",
        teamKey: "japan",
        image: "japan_jersey.png",
        description: "Embody the spirit of the Samurai Blue in the Japan 2026 Home Player Edition jersey. Showcases deep blue textures layered with bold crimson sleeve highlights and a gold-trimmed crest.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: true
    },
    {
        id: 106,
        name: "Spain Home 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.8,
        type: "National Kits",
        teamKey: "spain",
        image: "spain_jersey.png",
        description: "Official Spain 2026 Home Player Edition jersey. Showcases vibrant red base colors and classic golden shoulder stripes.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 107,
        name: "Portugal Home 2026",
        version: "Fan Edition",
        price: 99.99,
        rating: 4.6,
        type: "National Kits",
        teamKey: "portugal",
        image: "portugal_jersey.png",
        description: "Official Portugal 2026 Home Fan Edition jersey. Showcases deep crimson textures layered with green trim outlines.",
        isCustom: false,
        inStock: true,
        sizes: ["M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 108,
        name: "Real Madrid Home 2026",
        version: "Player Edition",
        price: 159.99,
        rating: 4.9,
        type: "Club Kits",
        teamKey: "",
        image: "",
        description: "Futuristic Real Madrid 2026 Home jersey. Classic white base with gold accent striping and clean sponsorship markings.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: true
    },
    {
        id: 109,
        name: "Manchester City Away 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.7,
        type: "Club Kits",
        teamKey: "",
        image: "",
        description: "Official Manchester City 2026 Away Fan Edition jersey. Displays electric sky blue patterns on a deep obsidian base.",
        isCustom: false,
        inStock: false,
        sizes: ["S", "M", "L"],
        isLimited: false
    },
    {
        id: 110,
        name: "Argentina Retro 1986",
        version: "Retro Collection",
        price: 119.99,
        rating: 4.9,
        type: "Retro Kits",
        teamKey: "argentina",
        image: "",
        description: "Celebrate history with the remastered Argentina 1986 Home kit. Cotton-weave heavy fabric with matching embroidered crest details.",
        isCustom: false,
        inStock: true,
        sizes: ["M", "L", "XL", "2XL"],
        isLimited: true
    },
    {
        id: 111,
        name: "Germany Goalkeeper 2026",
        version: "Goalkeeper Edition",
        price: 139.99,
        rating: 4.8,
        type: "Goalkeeper Kits",
        teamKey: "germany",
        image: "",
        description: "Official Germany 2026 Goalkeeper jersey. Styled in hyper-neon lime details with breathable padded sleeves.",
        isCustom: false,
        inStock: true,
        sizes: ["L", "XL"],
        isLimited: false
    },
    {
        id: 112,
        name: "Verse Training Half-Zip",
        version: "Training Kit",
        price: 79.99,
        rating: 4.5,
        type: "Training & Lifestyle",
        teamKey: "",
        image: "",
        description: "Premium training half-zip engineered with lightweight doubleknit insulation and thumbhole sleeves.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 113,
        name: "Australia Home 2026",
        version: "Player Edition",
        price: 139.99,
        rating: 4.6,
        type: "National Kits",
        teamKey: "australia",
        image: "",
        description: "Represent the Socceroos with the official Australia 2026 Player Edition Home kit, styled in rich gold and forest green accents.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 114,
        name: "Belgium Home 2026",
        version: "Player Edition",
        price: 144.99,
        rating: 4.7,
        type: "National Kits",
        teamKey: "belgium",
        image: "belgium_jersey.png",
        description: "Engineered for the Red Devils, the Belgium 2026 Home jersey features deep crimson tones with classic golden shoulder structures.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 115,
        name: "Cameroon Home 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.5,
        type: "National Kits",
        teamKey: "cameroon",
        image: "",
        description: "Show your support for the Indomitable Lions of Cameroon. Vibrant green base with traditional red and yellow accent highlights.",
        isCustom: false,
        inStock: true,
        sizes: ["M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 116,
        name: "Canada Home 2026",
        version: "Player Edition",
        price: 139.99,
        rating: 4.6,
        type: "National Kits",
        teamKey: "canada",
        image: "",
        description: "Official Canada 2026 Player Edition Home jersey. Designed in iconic national red with contrast white trims.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 117,
        name: "Chile Home 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.5,
        type: "National Kits",
        teamKey: "chile",
        image: "",
        description: "Represent La Roja with the Chile 2026 Home Fan Edition jersey, styled in deep national red and royal blue shoulders.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 118,
        name: "Colombia Home 2026",
        version: "Player Edition",
        price: 144.99,
        rating: 4.8,
        type: "National Kits",
        teamKey: "colombia",
        image: "",
        description: "Represent Los Cafeteros with the Colombia 2026 Home jersey. Classic yellow body with patriotic blue and red side panel designs.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 119,
        name: "Costa Rica Home 2026",
        version: "Fan Edition",
        price: 89.99,
        rating: 4.4,
        type: "National Kits",
        teamKey: "costarica",
        image: "",
        description: "Support Los Ticos in the Costa Rica 2026 Home kit. Classic red base with white details and blue sleeve trim accents.",
        isCustom: false,
        inStock: true,
        sizes: ["M", "L", "XL"],
        isLimited: false
    },
    {
        id: 120,
        name: "Croatia Home 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.8,
        type: "National Kits",
        teamKey: "croatia",
        image: "croatia_jersey.png",
        description: "Iconic checkerboard style remastered. The Croatia 2026 Home jersey features bold red and white checks with ventilation weaves.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: true
    },
    {
        id: 121,
        name: "Denmark Home 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.5,
        type: "National Kits",
        teamKey: "denmark",
        image: "",
        description: "Classic Danish dynamite. Denmark 2026 Home jersey showcases a structured red base with sleek white trims.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 122,
        name: "Ecuador Home 2026",
        version: "Fan Edition",
        price: 89.99,
        rating: 4.5,
        type: "National Kits",
        teamKey: "ecuador",
        image: "",
        description: "Celebrate La Tri in the Ecuador 2026 Home Fan Edition jersey, styled in yellow with navy cuffs.",
        isCustom: false,
        inStock: true,
        sizes: ["M", "L", "XL"],
        isLimited: false
    },
    {
        id: 123,
        name: "Egypt Home 2026",
        version: "Player Edition",
        price: 139.99,
        rating: 4.7,
        type: "National Kits",
        teamKey: "egypt",
        image: "",
        description: "Show your pharaoh pride with the Egypt 2026 Home kit. Deep red body with black sleeve detailing.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 124,
        name: "England Home 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.8,
        type: "National Kits",
        teamKey: "england",
        image: "england_jersey.png",
        description: "Wear the Three Lions with pride. The official England 2026 Home Player Edition jersey features pure white with deep navy cuff styling.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 125,
        name: "Ghana Home 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.6,
        type: "National Kits",
        teamKey: "ghana",
        image: "",
        description: "Black Stars of Ghana Home kit. Traditional white base highlighted by a central black star print.",
        isCustom: false,
        inStock: true,
        sizes: ["M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 126,
        name: "Iran Home 2026",
        version: "Fan Edition",
        price: 89.99,
        rating: 4.3,
        type: "National Kits",
        teamKey: "iran",
        image: "",
        description: "Support Iran's national squad in the 2026 Home kit, featuring classic white contours with green and red details.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 127,
        name: "Italy Home 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.8,
        type: "National Kits",
        teamKey: "italy",
        image: "italy_jersey.png",
        description: "Rep the Azzurri in the Italy 2026 Home Player Edition. Sleek royal blue body with gold-fused crest structures.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 128,
        name: "Mexico Home 2026",
        version: "Player Edition",
        price: 144.99,
        rating: 4.7,
        type: "National Kits",
        teamKey: "mexico",
        image: "mexico_jersey.png",
        description: "Celebrate El Tri with the Mexico 2026 Home Player Edition. Deep green base with white sleeve highlights.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 129,
        name: "Morocco Home 2026",
        version: "Player Edition",
        price: 139.99,
        rating: 4.7,
        type: "National Kits",
        teamKey: "morocco",
        image: "",
        description: "Official Morocco 2026 Home Player Edition jersey. Rich red body panels with green shoulder detailing.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 130,
        name: "Netherlands Home 2026",
        version: "Player Edition",
        price: 149.99,
        rating: 4.8,
        type: "National Kits",
        teamKey: "netherlands",
        image: "netherlands_jersey.png",
        description: "Rep Oranje with pride. The Netherlands 2026 Home jersey features the iconic bright orange base with white collar details.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 131,
        name: "Nigeria Home 2026",
        version: "Player Edition",
        price: 144.99,
        rating: 4.9,
        type: "National Kits",
        teamKey: "nigeria",
        image: "",
        description: "Futuristic Super Eagles. Nigeria 2026 Home Player Edition showcases green and white stripe textures.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: true
    },
    {
        id: 132,
        name: "Paraguay Home 2026",
        version: "Fan Edition",
        price: 89.99,
        rating: 4.4,
        type: "National Kits",
        teamKey: "paraguay",
        image: "",
        description: "Official Paraguay 2026 Home Fan Edition jersey, styled in red and white stripes with blue collar accents.",
        isCustom: false,
        inStock: true,
        sizes: ["M", "L", "XL"],
        isLimited: false
    },
    {
        id: 133,
        name: "Peru Home 2026",
        version: "Player Edition",
        price: 139.99,
        rating: 4.6,
        type: "National Kits",
        teamKey: "peru",
        image: "",
        description: "The classic red sash remastered. Peru 2026 Home jersey features a pure white base with red details.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 134,
        name: "Poland Home 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.5,
        type: "National Kits",
        teamKey: "poland",
        image: "",
        description: "Official Poland 2026 Home Fan Edition jersey, designed in crisp national white with red cuffs.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 135,
        name: "Qatar Home 2026",
        version: "Fan Edition",
        price: 89.99,
        rating: 4.3,
        type: "National Kits",
        teamKey: "qatar",
        image: "",
        description: "Support Qatar in their 2026 Home kit. Styled in deep maroon with white cuff trims.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 136,
        name: "Saudi Arabia Home 2026",
        version: "Player Edition",
        price: 134.99,
        rating: 4.6,
        type: "National Kits",
        teamKey: "saudiarabia",
        image: "",
        description: "Official Saudi Arabia 2026 Home Player Edition jersey. Styled in deep forest green with white details.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 137,
        name: "Senegal Home 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.6,
        type: "National Kits",
        teamKey: "senegal",
        image: "",
        description: "Support the Lions of Teranga. Senegal 2026 Home jersey features a white base with green chest panel detailing.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 138,
        name: "South Korea Home 2026",
        version: "Player Edition",
        price: 144.99,
        rating: 4.7,
        type: "National Kits",
        teamKey: "southkorea",
        image: "",
        description: "Taegeuk Warriors of South Korea. Official 2026 Home Player Edition features vibrant crimson with blue accents.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 139,
        name: "Switzerland Home 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.5,
        type: "National Kits",
        teamKey: "switzerland",
        image: "",
        description: "Support the Nati in their 2026 Home kit. Classic red base with contrasting white details.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    },
    {
        id: 140,
        name: "United States Home 2026",
        version: "Player Edition",
        price: 144.99,
        rating: 4.7,
        type: "National Kits",
        teamKey: "unitedstates",
        image: "usa_jersey.png",
        description: "Official United States 2026 Home Player Edition jersey. Designed in classic white with navy shoulder structures.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 141,
        name: "Uruguay Home 2026",
        version: "Player Edition",
        price: 139.99,
        rating: 4.7,
        type: "National Kits",
        teamKey: "uruguay",
        image: "",
        description: "Official Uruguay 2026 Home Player Edition jersey. Designed in sky blue with gold and white borders.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL", "2XL"],
        isLimited: false
    },
    {
        id: 142,
        name: "Algeria Home 2026",
        version: "Fan Edition",
        price: 94.99,
        rating: 4.6,
        type: "National Kits",
        teamKey: "algeria",
        image: "",
        description: "Represent the Fennec Foxes of Algeria in their 2026 Home kit. Pure white base with green and red details.",
        isCustom: false,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isLimited: false
    }
];

// 2. State Variables
let cart = JSON.parse(localStorage.getItem("verse_cart")) || [];

// 3. Document Elements & Global Cart Bindings
document.addEventListener("DOMContentLoaded", () => {
    initGlobalCart();
    initMobileNav();
    
    // Page-specific initializers
    if (document.getElementById("trending-carousel")) {
        initHomepage();
    }
    if (document.getElementById("jersey-svg-front")) {
        initCustomizerPage();
    }
    if (document.getElementById("checkout-payment-form")) {
        initCheckoutPage();
    }
    if (document.getElementById("prod-svg-front")) {
        initProductPage();
    }
    if (document.getElementById("collection-products-grid")) {
        initCollectionPage();
    }
    if (document.getElementById("tracking-id-input")) {
        initSupportPage();
    }
    if (document.getElementById("cart-page-items-list")) {
        initCartPage();
    }
});

// Global Nav & Cart Management
function initGlobalCart() {
    const cartBtn = document.getElementById("cart-btn");
    const cartClose = document.getElementById("cart-close");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartDrawer = document.getElementById("cart-drawer");

    if (cartBtn) {
        cartBtn.addEventListener("click", () => {
            openCart();
        });
    }

    if (cartClose) {
        cartClose.addEventListener("click", closeCart);
    }
    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCart);
    }

    updateCartBadge();
    renderCartItems();
}

function openCart() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer && overlay) {
        drawer.classList.add("open");
        overlay.classList.add("open");
    }
    renderCartItems();
}

function closeCart() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer && overlay) {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
    }
}

function updateCartBadge() {
    const badges = [document.getElementById("cart-badge")];
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(b => {
        if (b) b.innerText = totalQty;
    });
}

function saveCart() {
    localStorage.setItem("verse_cart", JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(item) {
    // Check if duplicate custom kit or simple item
    let existing;
    if (item.isCustom) {
        existing = cart.find(i => 
            i.id === item.id && 
            i.customName === item.customName && 
            i.customNumber === item.customNumber && 
            i.size === item.size && 
            i.team === item.team &&
            i.version === item.version
        );
    } else {
        existing = cart.find(i => i.id === item.id && i.size === (item.size || "L"));
    }

    const qtyToAdd = item.quantity || 1;
    if (existing) {
        existing.quantity += qtyToAdd;
    } else {
        item.quantity = qtyToAdd;
        cart.push(item);
    }
    saveCart();
    openCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("cart-subtotal");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-textSlate text-sm italic font-body text-center mt-8">Your cart is empty.</p>`;
        if (subtotalEl) subtotalEl.innerText = "$0.00";
        return;
    }

    let subtotal = 0;
    container.innerHTML = "";

    cart.forEach((item, index) => {
        subtotal += item.price * item.quantity;

        const cartItemHTML = `
            <div class="flex items-center gap-4 bg-secondary/30 p-3 rounded-lg border border-white/5 relative group">
                <div class="w-16 h-16 bg-secondary/80 rounded flex items-center justify-center overflow-hidden border border-white/5 flex-shrink-0">
                    ${item.image ? `<img src="${item.image}" class="w-full h-full object-contain" />` : 
                    `<svg class="w-full h-full" id="svg-cart-item-${index}" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"></svg>`}
                </div>
                <div class="flex-grow min-w-0">
                    <h4 class="font-headline font-bold text-sm uppercase text-white truncate">${item.name}</h4>
                    <p class="text-[10px] text-textSlate font-body mt-0.5">
                        ${item.isCustom ? `Name: ${item.customName} | No: ${item.customNumber} (${item.size})` : `Size: ${item.size || 'L'} (${item.version})`}
                    </p>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-xs font-headline font-black text-primary">$${item.price.toFixed(2)}</span>
                        <span class="text-[10px] text-textWhite bg-white/5 px-2 py-0.5 rounded">Qty: ${item.quantity}</span>
                    </div>
                </div>
                <button class="absolute top-2 right-2 text-white/40 hover:text-primary transition-colors cursor-pointer" onclick="removeFromCart(${index})">
                    <span class="material-symbols-outlined text-sm">delete</span>
                </button>
            </div>
        `;
        container.innerHTML += cartItemHTML;
    });

    // Draw cart drawer item SVGs
    cart.forEach((item, index) => {
        if (!item.image) {
            const svgEl = document.getElementById(`svg-cart-item-${index}`);
            if (svgEl) {
                const cfg = TEAM_CONFIGS[item.team] || {
                    baseColor: "#1C1C24",
                    accentColor: "#CCFF00",
                    badgeColor: "#CCFF00",
                    textColor: "#FFFFFF",
                    strokeColor: "transparent"
                };
                renderJerseySVGFront(cfg, svgEl);
            }
        }
    });

    if (subtotalEl) {
        subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    }
}

// Mobile Nav Toggle
function initMobileNav() {
    const toggle = document.getElementById("mobile-menu-toggle");
    const nav = document.getElementById("mobile-nav");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("hidden");
            nav.classList.toggle("flex");
        });
    }
}

// 4. Homepage Carousel & Quick Add logic
function initHomepage() {
    const prev = document.getElementById("carousel-prev");
    const next = document.getElementById("carousel-next");
    const carousel = document.getElementById("trending-carousel");

    if (prev && carousel) {
        prev.addEventListener("click", () => {
            carousel.scrollBy({ left: -320, behavior: "smooth" });
        });
    }
    if (next && carousel) {
        next.addEventListener("click", () => {
            carousel.scrollBy({ left: 320, behavior: "smooth" });
        });
    }

    // Quick add button event binding
    document.querySelectorAll(".quick-add-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            const product = PRODUCTS.find(p => p.id === id);
            if (product) {
                addToCart({
                    id: product.id,
                    name: product.name,
                    version: product.version,
                    price: product.price,
                    image: product.image,
                    size: "L", // default size
                    isCustom: false
                });
            }
        });
    });

    // Search autocomplete suggestions
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        const searchContainer = searchInput.parentElement;
        searchContainer.style.position = "relative";
        
        const suggestionsBox = document.createElement("div");
        suggestionsBox.className = "absolute top-full left-0 right-0 mt-2 bg-secondary border border-white/10 rounded-xl overflow-hidden shadow-2xl hidden z-50 max-h-60 overflow-y-auto";
        searchContainer.appendChild(suggestionsBox);

        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                suggestionsBox.classList.add("hidden");
                return;
            }

            const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.type.toLowerCase().includes(query));
            
            if (matches.length === 0) {
                suggestionsBox.innerHTML = `<div class="p-4 text-xs text-textSlate italic">No kits found</div>`;
            } else {
                suggestionsBox.innerHTML = matches.map(p => `
                    <div class="p-3 hover:bg-primary hover:text-tertiary cursor-pointer transition-colors text-xs font-headline font-bold uppercase tracking-wider flex items-center justify-between text-white" data-id="${p.id}">
                        <span>${p.name}</span>
                        <span class="text-[10px] opacity-60">${p.version}</span>
                    </div>
                `).join("");

                suggestionsBox.querySelectorAll("div[data-id]").forEach(div => {
                    div.addEventListener("click", () => {
                        const id = div.getAttribute("data-id");
                        window.location.href = `product.html?id=${id}`;
                    });
                });
            }
            suggestionsBox.classList.remove("hidden");
        });

        // Hide when clicking outside
        document.addEventListener("click", (e) => {
            if (!searchContainer.contains(e.target)) {
                suggestionsBox.classList.add("hidden");
            }
        });
    }

    // Newsletter Form Mock
    const nForm = document.getElementById("newsletter-form");
    if (nForm) {
        nForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Welcome to the Verse Club! Early access drops will be sent to your email.");
            nForm.reset();
        });
    }

}

// 5. SECURE CHECKOUT PAGE LOGIC
function initCheckoutPage() {
    const summaryContainer = document.getElementById("checkout-summary-items");
    const subtotalEl = document.getElementById("checkout-subtotal");
    const discountEl = document.getElementById("checkout-discount");
    const discountRow = document.getElementById("checkout-discount-row");
    const shippingEl = document.getElementById("checkout-shipping");
    const taxEl = document.getElementById("checkout-tax");
    const totalEl = document.getElementById("checkout-total");
    const mainForm = document.getElementById("checkout-payment-form");

    if (cart.length === 0) {
        if (summaryContainer) {
            summaryContainer.innerHTML = `
                <div class="text-center py-10 space-y-4">
                    <span class="material-symbols-outlined text-textSlate text-5xl">shopping_basket</span>
                    <p class="text-textSlate text-sm italic font-body">Your shopping cart is empty.</p>
                    <a href="collection.html" class="bg-primary text-tertiary px-6 py-2.5 rounded-lg font-headline font-black uppercase text-xs inline-block tracking-wider active:scale-95 transition-all">
                        Explore Kits
                    </a>
                </div>
            `;
        }
        return;
    }

    // Render Summary items
    if (summaryContainer) {
        summaryContainer.innerHTML = "";
        cart.forEach((item, index) => {
            let imgMarkup = "";
            if (item.image) {
                imgMarkup = `<img src="${item.image}" class="w-full h-full object-contain" />`;
            } else {
                imgMarkup = `<svg class="w-full h-full animate-[fadeIn_0.3s_ease-out]" id="svg-checkout-item-${index}" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"></svg>`;
            }
            const itemHTML = `
                <div class="flex justify-between items-center bg-secondary/20 p-3 rounded-lg border border-white/5 gap-3 animate-[fadeIn_0.3s_ease-out]">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-12 h-12 bg-secondary flex items-center justify-center border border-white/5 rounded flex-shrink-0 text-primary overflow-hidden">
                            ${imgMarkup}
                        </div>
                        <div class="min-w-0">
                            <h4 class="font-headline font-bold text-xs uppercase text-white truncate max-w-[180px]">${item.name}</h4>
                            <p class="text-[9px] text-textSlate font-body mt-0.5 uppercase tracking-wide">
                                ${item.isCustom ? `Print: ${item.customName} #${item.customNumber} (${item.size})` : `${item.version} (${item.size})`}
                            </p>
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0 font-headline">
                        <span class="text-xs font-bold text-white block">$${(item.price * item.quantity).toFixed(2)}</span>
                        <span class="text-[9px] text-textSlate font-body">Qty: ${item.quantity}</span>
                    </div>
                </div>
            `;
            summaryContainer.innerHTML += itemHTML;
        });

        // Draw checkout item SVGs
        cart.forEach((item, index) => {
            if (!item.image) {
                const svgEl = document.getElementById(`svg-checkout-item-${index}`);
                if (svgEl) {
                    const cfg = TEAM_CONFIGS[item.team] || {
                        baseColor: "#1C1C24",
                        accentColor: "#CCFF00",
                        badgeColor: "#CCFF00",
                        textColor: "#FFFFFF",
                        strokeColor: "transparent"
                    };
                    renderJerseySVGFront(cfg, svgEl);
                }
            }
        });
    }

    // Pricing calculations (read persistent coupon)
    let discountPercent = 0.00;
    if (localStorage.getItem("verse_coupon") === "VERSE10") {
        discountPercent = 0.10;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmt = subtotal * discountPercent;
    const subtotalAfterDiscount = subtotal - discountAmt;
    const shipping = subtotalAfterDiscount >= 150 ? 0.00 : 9.99;
    const tax = subtotalAfterDiscount * 0.08;
    const grandTotal = subtotalAfterDiscount + shipping + tax;

    if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    if (discountRow) {
        if (discountPercent > 0) {
            discountRow.classList.remove("hidden");
            if (discountEl) discountEl.innerText = `-$${discountAmt.toFixed(2)}`;
        } else {
            discountRow.classList.add("hidden");
        }
    }
    if (shippingEl) shippingEl.innerText = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.innerText = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.innerText = `$${grandTotal.toFixed(2)}`;

    // Payment tab toggler
    let currentPaymentMethod = "card";
    const tabCard = document.getElementById("tab-btn-card");
    const tabPaypal = document.getElementById("tab-btn-paypal");
    const tabApple = document.getElementById("tab-btn-apple");

    const panelCard = document.getElementById("payment-panel-card");
    const panelPaypal = document.getElementById("payment-panel-paypal");
    const panelApple = document.getElementById("payment-panel-apple");

    function setPaymentMethod(method) {
        currentPaymentMethod = method;
        [tabCard, tabPaypal, tabApple].forEach(btn => {
            if (btn) {
                btn.className = "py-2.5 rounded-lg text-xs font-headline font-black uppercase tracking-wider transition-all duration-300 text-center text-textSlate hover:text-white";
            }
        });
        [panelCard, panelPaypal, panelApple].forEach(panel => {
            if (panel) panel.classList.add("hidden");
        });

        if (method === "card") {
            if (tabCard) tabCard.className = "py-2.5 rounded-lg text-xs font-headline font-black uppercase tracking-wider transition-all duration-300 text-center active-tab bg-secondary text-primary border border-primary/20";
            if (panelCard) panelCard.classList.remove("hidden");
        } else if (method === "paypal") {
            if (tabPaypal) tabPaypal.className = "py-2.5 rounded-lg text-xs font-headline font-black uppercase tracking-wider transition-all duration-300 text-center active-tab bg-secondary text-primary border border-primary/20";
            if (panelPaypal) panelPaypal.classList.remove("hidden");
        } else if (method === "apple") {
            if (tabApple) tabApple.className = "py-2.5 rounded-lg text-xs font-headline font-black uppercase tracking-wider transition-all duration-300 text-center active-tab bg-secondary text-primary border border-primary/20";
            if (panelApple) panelApple.classList.remove("hidden");
        }
    }

    if (tabCard) tabCard.addEventListener("click", () => setPaymentMethod("card"));
    if (tabPaypal) tabPaypal.addEventListener("click", () => setPaymentMethod("paypal"));
    if (tabApple) tabApple.addEventListener("click", () => setPaymentMethod("apple"));

    // Validation engine logic
    const shippingInputs = [
        document.getElementById("shipping-firstname"),
        document.getElementById("shipping-lastname"),
        document.getElementById("shipping-address"),
        document.getElementById("shipping-city"),
        document.getElementById("shipping-postal"),
        document.getElementById("shipping-email")
    ];

    const cardInputs = [
        document.getElementById("card-name"),
        document.getElementById("card-number"),
        document.getElementById("card-expiry"),
        document.getElementById("card-cvc")
    ];

    function validateField(inputEl) {
        if (!inputEl) return false;
        let isValid = false;
        const val = inputEl.value.trim();

        if (inputEl.hasAttribute("required") && !val) {
            isValid = false;
        } else if (inputEl.type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(val);
        } else if (inputEl.id === "card-number") {
            const digits = val.replace(/\s/g, "");
            isValid = /^\d{16}$/.test(digits);
        } else if (inputEl.id === "card-expiry") {
            isValid = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(val);
        } else if (inputEl.id === "card-cvc") {
            isValid = /^\d{3,4}$/.test(val);
        } else {
            isValid = val.length > 0;
        }

        const checkIcon = inputEl.parentElement.querySelector(".validation-check");
        if (isValid) {
            inputEl.classList.remove("border-white/10", "border-red-500");
            inputEl.classList.add("border-primary");
            if (checkIcon) {
                checkIcon.classList.remove("opacity-0");
                checkIcon.classList.add("opacity-100");
            }
        } else {
            if (val || inputEl.dataset.touched) {
                inputEl.classList.remove("border-white/10", "border-primary");
                inputEl.classList.add("border-red-500");
            }
            if (checkIcon) {
                checkIcon.classList.add("opacity-0");
                checkIcon.classList.remove("opacity-100");
            }
        }
        return isValid;
    }

    // Bind validation triggers
    [...shippingInputs, ...cardInputs].forEach(input => {
        if (!input) return;
        input.addEventListener("input", (e) => {
            validateField(e.target);
        });
        input.addEventListener("blur", (e) => {
            e.target.dataset.touched = "true";
            validateField(e.target);
        });
    });

    // Formatting rules for Credit Card forms
    const numInput = document.getElementById("card-number");
    if (numInput) {
        numInput.addEventListener("input", (e) => {
            let cursorPosition = e.target.selectionStart;
            let originalLength = e.target.value.length;
            let value = e.target.value.replace(/\D/g, "");
            if (value.length > 16) value = value.slice(0, 16);
            let formatted = "";
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) formatted += " ";
                formatted += value[i];
            }
            e.target.value = formatted;
            let newLength = e.target.value.length;
            e.target.selectionStart = cursorPosition + (newLength - originalLength);
            e.target.selectionEnd = cursorPosition + (newLength - originalLength);
            validateField(e.target);
        });
    }

    const expiryInput = document.getElementById("card-expiry");
    if (expiryInput) {
        expiryInput.addEventListener("input", (e) => {
            let cursorPosition = e.target.selectionStart;
            let originalLength = e.target.value.length;
            let value = e.target.value.replace(/\D/g, "");
            if (value.length > 4) value = value.slice(0, 4);
            let formatted = "";
            for (let i = 0; i < value.length; i++) {
                if (i === 2) formatted += "/";
                formatted += value[i];
            }
            e.target.value = formatted;
            let newLength = e.target.value.length;
            e.target.selectionStart = cursorPosition + (newLength - originalLength);
            e.target.selectionEnd = cursorPosition + (newLength - originalLength);
            validateField(e.target);
        });
    }

    const cvcInput = document.getElementById("card-cvc");
    if (cvcInput) {
        cvcInput.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
            validateField(e.target);
        });
    }

    // Submit handler
    if (mainForm) {
        mainForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Run validations
            let isShippingValid = true;
            shippingInputs.forEach(input => {
                if (input) {
                    input.dataset.touched = "true";
                    if (!validateField(input)) isShippingValid = false;
                }
            });

            let isPaymentValid = true;
            if (currentPaymentMethod === "card") {
                cardInputs.forEach(input => {
                    if (input) {
                        input.dataset.touched = "true";
                        if (!validateField(input)) isPaymentValid = false;
                    }
                });
            }

            if (!isShippingValid) {
                const firstInvalid = shippingInputs.find(i => i && !validateField(i));
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            if (currentPaymentMethod === "card" && !isPaymentValid) {
                const firstInvalid = cardInputs.find(i => i && !validateField(i));
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            submitOrder(currentPaymentMethod === "card" ? "Credit Card" : currentPaymentMethod);
        });
    }

    // Express payment click listeners
    document.querySelectorAll(".express-pay-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const method = btn.getAttribute("data-method");
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `
                <span class="material-symbols-outlined text-base animate-spin">sync</span>
                Authorizing ${method}...
            `;
            btn.classList.add("pointer-events-none", "opacity-80");

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.remove("pointer-events-none", "opacity-80");
                submitOrder(method);
            }, 1600);
        });
    });

    // Helper to finish order transactions
    function submitOrder(methodUsed) {
        // Hide checkout grid
        document.getElementById("checkout-form-row").classList.add("hidden");
        
        // Show success screen
        const successPanel = document.getElementById("checkout-success-container");
        successPanel.classList.remove("hidden");

        // Mock Order ID
        const orderId = `VK-${Math.floor(1000 + Math.random() * 9000)}-2026`;
        const orderIdEl = document.getElementById("confirm-order-number");
        if (orderIdEl) orderIdEl.innerText = orderId;

        // Dynamic estimated arrival dates
        const arrivalDateEl = document.getElementById("success-delivery-date");
        if (arrivalDateEl) {
            const dStart = new Date();
            dStart.setDate(dStart.getDate() + 5);
            const dEnd = new Date();
            dEnd.setDate(dEnd.getDate() + 9);

            const opt = { month: "short", day: "numeric" };
            const startStr = dStart.toLocaleDateString("en-US", opt);
            const endStr = dEnd.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
            arrivalDateEl.innerText = `${startStr} - ${endStr}`;
        }

        // Clean local state & local storage
        cart = [];
        saveCart();
        localStorage.removeItem("verse_coupon");

        // Scroll to container top smoothly
        const container = document.getElementById("checkout-main-container");
        if (container) {
            container.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    // Success actions bindings
    const btnCopy = document.getElementById("btn-copy-order");
    if (btnCopy) {
        btnCopy.addEventListener("click", () => {
            const orderEl = document.getElementById("confirm-order-number");
            if (orderEl) {
                navigator.clipboard.writeText(orderEl.innerText.trim()).then(() => {
                    const originalHTML = btnCopy.innerHTML;
                    btnCopy.innerHTML = `<span class="material-symbols-outlined text-xs text-primary">check</span>`;
                    setTimeout(() => {
                        btnCopy.innerHTML = originalHTML;
                    }, 2000);
                });
            }
        });
    }

    const btnTrack = document.getElementById("btn-track-redirect");
    if (btnTrack) {
        btnTrack.addEventListener("click", () => {
            const orderEl = document.getElementById("confirm-order-number");
            if (orderEl) {
                window.location.href = `support.html?order=${orderEl.innerText.trim()}`;
            }
        });
    }
}

// 6. DYNAMIC JERSEY CUSTOMIZER PREVIEW RENDERING
// Color maps and design details for national teams
const TEAM_CONFIGS = {
    argentina: {
        name: "Argentina Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#75AADB",
        badgeColor: "#F4C430",
        textColor: "#000000",
        strokeColor: "#000000",
        stripes: true
    },
    australia: {
        name: "Australia Home 2026",
        baseColor: "#F2A900",
        accentColor: "#00843D",
        badgeColor: "#00843D",
        textColor: "#00843D",
        strokeColor: "transparent",
        stripes: false,
        cuffs: true
    },
    belgium: {
        name: "Belgium Home 2026",
        baseColor: "#A71930",
        accentColor: "#000000",
        badgeColor: "#FFCD00",
        textColor: "#FFCD00",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    brazil: {
        name: "Brazil Home 2026",
        baseColor: "#F8D117",
        accentColor: "#009B3A",
        badgeColor: "#002F6C",
        textColor: "#002F6C",
        strokeColor: "transparent",
        stripes: false,
        cuffs: true
    },
    cameroon: {
        name: "Cameroon Home 2026",
        baseColor: "#007A5E",
        accentColor: "#E31B23",
        badgeColor: "#FCD116",
        textColor: "#FFFFFF",
        strokeColor: "#FCD116",
        stripes: false,
        chestVee: true
    },
    canada: {
        name: "Canada Home 2026",
        baseColor: "#C8102E",
        accentColor: "#FFFFFF",
        badgeColor: "#FFFFFF",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    chile: {
        name: "Chile Home 2026",
        baseColor: "#D52B1E",
        accentColor: "#0039A6",
        badgeColor: "#FFFFFF",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        chestVee: true
    },
    colombia: {
        name: "Colombia Home 2026",
        baseColor: "#FCD116",
        accentColor: "#003893",
        badgeColor: "#D52B1E",
        textColor: "#003893",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    costarica: {
        name: "Costa Rica Home 2026",
        baseColor: "#C8102E",
        accentColor: "#002F6C",
        badgeColor: "#FFFFFF",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        cuffs: true
    },
    croatia: {
        name: "Croatia Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#C8102E",
        badgeColor: "#C8102E",
        textColor: "#000000",
        strokeColor: "#C8102E",
        stripes: true
    },
    denmark: {
        name: "Denmark Home 2026",
        baseColor: "#C8102E",
        accentColor: "#FFFFFF",
        badgeColor: "#FFFFFF",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    ecuador: {
        name: "Ecuador Home 2026",
        baseColor: "#FFDD00",
        accentColor: "#002F6C",
        badgeColor: "#E31D22",
        textColor: "#002F6C",
        strokeColor: "transparent",
        stripes: false,
        cuffs: true
    },
    egypt: {
        name: "Egypt Home 2026",
        baseColor: "#C8102E",
        accentColor: "#000000",
        badgeColor: "#D4AF37",
        textColor: "#FFFFFF",
        strokeColor: "#000000",
        stripes: true
    },
    england: {
        name: "England Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#0B1F3F",
        badgeColor: "#0B1F3F",
        textColor: "#0B1F3F",
        strokeColor: "transparent",
        stripes: false,
        cuffs: true
    },
    france: {
        name: "France Away 2026",
        baseColor: "#0E1E38",
        accentColor: "#E0263B",
        badgeColor: "#F4C430",
        textColor: "#FFFFFF",
        strokeColor: "#F4C430",
        stripes: false,
        chestVee: true
    },
    germany: {
        name: "Germany Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#000000",
        badgeColor: "#F4C430",
        textColor: "#000000",
        strokeColor: "transparent",
        stripes: false,
        deStripes: true
    },
    ghana: {
        name: "Ghana Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#E31B23",
        badgeColor: "#000000",
        textColor: "#000000",
        strokeColor: "transparent",
        stripes: false,
        chestVee: true
    },
    iran: {
        name: "Iran Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#239F40",
        badgeColor: "#DA251D",
        textColor: "#239F40",
        strokeColor: "#DA251D",
        stripes: true
    },
    italy: {
        name: "Italy Home 2026",
        baseColor: "#004B87",
        accentColor: "#FFFFFF",
        badgeColor: "#D4AF37",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    japan: {
        name: "Japan Home 2026",
        baseColor: "#0A1F44",
        accentColor: "#FF0024",
        badgeColor: "#F4C430",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    mexico: {
        name: "Mexico Home 2026",
        baseColor: "#006341",
        accentColor: "#FFFFFF",
        badgeColor: "#D52B1E",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        chestVee: true
    },
    morocco: {
        name: "Morocco Home 2026",
        baseColor: "#C1272D",
        accentColor: "#006233",
        badgeColor: "#D4AF37",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    netherlands: {
        name: "Netherlands Home 2026",
        baseColor: "#FF4F00",
        accentColor: "#FFFFFF",
        badgeColor: "#000000",
        textColor: "#000000",
        strokeColor: "transparent",
        stripes: false,
        cuffs: true
    },
    nigeria: {
        name: "Nigeria Home 2026",
        baseColor: "#008751",
        accentColor: "#FFFFFF",
        badgeColor: "#008751",
        textColor: "#FFFFFF",
        strokeColor: "#008751",
        stripes: true
    },
    paraguay: {
        name: "Paraguay Home 2026",
        baseColor: "#D52B1E",
        accentColor: "#FFFFFF",
        badgeColor: "#0038A8",
        textColor: "#0038A8",
        strokeColor: "#D52B1E",
        stripes: true
    },
    peru: {
        name: "Peru Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#D52B1E",
        badgeColor: "#D52B1E",
        textColor: "#D52B1E",
        strokeColor: "transparent",
        stripes: false,
        chestVee: true
    },
    poland: {
        name: "Poland Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#EB1E41",
        badgeColor: "#EB1E41",
        textColor: "#EB1E41",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    portugal: {
        name: "Portugal Home 2026",
        baseColor: "#840E26",
        accentColor: "#005F36",
        badgeColor: "#F4C430",
        textColor: "#F4C430",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    qatar: {
        name: "Qatar Home 2026",
        baseColor: "#8C1D40",
        accentColor: "#FFFFFF",
        badgeColor: "#FFFFFF",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        cuffs: true
    },
    saudiarabia: {
        name: "Saudi Arabia Home 2026",
        baseColor: "#006C35",
        accentColor: "#FFFFFF",
        badgeColor: "#FFFFFF",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    senegal: {
        name: "Senegal Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#00853F",
        badgeColor: "#FDEF42",
        textColor: "#00853F",
        strokeColor: "transparent",
        stripes: false,
        chestVee: true
    },
    southkorea: {
        name: "South Korea Home 2026",
        baseColor: "#E0115F",
        accentColor: "#0047AB",
        badgeColor: "#000000",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    spain: {
        name: "Spain Home 2026",
        baseColor: "#C60B1E",
        accentColor: "#F1BF00",
        badgeColor: "#F1BF00",
        textColor: "#F1BF00",
        strokeColor: "#840E26",
        stripes: false,
        shoulders: true
    },
    switzerland: {
        name: "Switzerland Home 2026",
        baseColor: "#D52B1E",
        accentColor: "#FFFFFF",
        badgeColor: "#FFFFFF",
        textColor: "#FFFFFF",
        strokeColor: "transparent",
        stripes: false,
        chestVee: true
    },
    unitedstates: {
        name: "United States Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#002868",
        badgeColor: "#BF0A30",
        textColor: "#002868",
        strokeColor: "transparent",
        stripes: false,
        shoulders: true
    },
    uruguay: {
        name: "Uruguay Home 2026",
        baseColor: "#43A1D5",
        accentColor: "#FFFFFF",
        badgeColor: "#FCD116",
        textColor: "#000000",
        strokeColor: "transparent",
        stripes: false,
        cuffs: true
    },
    algeria: {
        name: "Algeria Home 2026",
        baseColor: "#FFFFFF",
        accentColor: "#006633",
        badgeColor: "#D21034",
        textColor: "#006633",
        strokeColor: "#D21034",
        stripes: true
    }
};

let currentCustomizerState = {
    team: "argentina",
    edition: "player",
    customName: "MESSI",
    customNumber: "10",
    patches: ["wc"],
    size: "L",
    basePrice: 149.99
};

function initCustomizerPage() {
    const nameInput = document.getElementById("custom-name");
    const numInput = document.getElementById("custom-number");
    const frontBtn = document.getElementById("view-front-btn");
    const backBtn = document.getElementById("view-back-btn");
    const frontStage = document.getElementById("jersey-front-stage");
    const backStage = document.getElementById("jersey-back-stage");
    
    // Inputs binding
    if (nameInput) {
        nameInput.addEventListener("input", (e) => {
            currentCustomizerState.customName = e.target.value.toUpperCase().slice(0, 12);
            updatePreview();
        });
    }

    if (numInput) {
        numInput.addEventListener("input", (e) => {
            let num = parseInt(e.target.value);
            if (isNaN(num)) num = "";
            if (num > 99) num = 99;
            currentCustomizerState.customNumber = num.toString();
            updatePreview();
        });
    }

    // Toggle Front / Back View
    if (frontBtn && backBtn) {
        frontBtn.addEventListener("click", () => {
            frontBtn.className = "px-4 py-1.5 rounded-full font-headline text-xs font-bold uppercase tracking-wider text-tertiary bg-primary";
            backBtn.className = "px-4 py-1.5 rounded-full font-headline text-xs font-bold uppercase tracking-wider text-textSlate hover:text-white";
            frontStage.classList.remove("hidden");
            backStage.classList.add("hidden");
        });
        backBtn.addEventListener("click", () => {
            backBtn.className = "px-4 py-1.5 rounded-full font-headline text-xs font-bold uppercase tracking-wider text-tertiary bg-primary";
            frontBtn.className = "px-4 py-1.5 rounded-full font-headline text-xs font-bold uppercase tracking-wider text-textSlate hover:text-white";
            backStage.classList.remove("hidden");
            frontStage.classList.add("hidden");
        });
    }

    // Team selector binding
    const teamDropdown = document.getElementById("team-select-dropdown");
    if (teamDropdown) {
        teamDropdown.value = currentCustomizerState.team;
        teamDropdown.addEventListener("change", (e) => {
            currentCustomizerState.team = e.target.value;
            updatePreview();
        });
    }

    // Version/Edition radio buttons binding
    document.querySelectorAll('input[name="edition"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            currentCustomizerState.edition = e.target.value;
            updatePreview();
        });
    });

    // Size binding
    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".size-btn").forEach(b => {
                b.className = "w-10 h-10 rounded-full bg-secondary/40 border border-transparent flex items-center justify-center font-headline font-bold text-xs hover:border-primary transition-colors text-textSlate hover:text-white size-btn";
            });
            btn.className = "w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center font-headline font-bold text-xs text-tertiary neon-glow size-btn active";
            currentCustomizerState.size = btn.getAttribute("data-size");
            updatePreview();
        });
    });

    // Patches binding
    document.querySelectorAll(".patch-checkbox").forEach(box => {
        box.addEventListener("change", () => {
            let patches = [];
            if (document.getElementById("patch-wc").checked) patches.push("wc");
            if (document.getElementById("patch-gold").checked) patches.push("gold");
            currentCustomizerState.patches = patches;
            updatePreview();
        });
    });

    // Cart add binding
    const customAddBtn = document.getElementById("custom-add-to-cart");
    if (customAddBtn) {
        customAddBtn.addEventListener("click", () => {
            const config = TEAM_CONFIGS[currentCustomizerState.team];
            const finalPrice = calculatePrice();
            const customizedItem = {
                id: 200 + Object.keys(TEAM_CONFIGS).indexOf(currentCustomizerState.team), // Custom item range
                name: `${config.name} (Customized)`,
                version: currentCustomizerState.edition === "player" ? "Player Edition" : "Fan Edition",
                price: finalPrice,
                image: "", // Dynamically mock/reference SVG styles in cart
                size: currentCustomizerState.size,
                isCustom: true,
                customName: currentCustomizerState.customName || "NONE",
                customNumber: currentCustomizerState.customNumber || "00",
                team: currentCustomizerState.team
            };
            addToCart(customizedItem);
        });
    }

    updatePreview();
}

function calculatePrice() {
    let price = currentCustomizerState.basePrice;
    if (currentCustomizerState.edition === "player") price += 40.00;
    price += currentCustomizerState.patches.length * 15.00;
    return price;
}

function updatePreview() {
    const config = TEAM_CONFIGS[currentCustomizerState.team];
    if (!config) return;

    const finalPrice = calculatePrice();

    // Update Text display
    const barKitName = document.getElementById("bar-kit-name");
    const barKitDetails = document.getElementById("bar-kit-details");
    const barKitPrice = document.getElementById("bar-kit-price");

    if (barKitName) barKitName.innerText = config.name;
    if (barKitDetails) {
        const editionName = currentCustomizerState.edition === "player" ? "Player Edition" : "Fan Edition";
        const patchCount = currentCustomizerState.patches.length > 0 ? `+ ${currentCustomizerState.patches.length} Patch(es)` : "";
        barKitDetails.innerText = `${editionName} | ${currentCustomizerState.customName || 'NAME'} #${currentCustomizerState.customNumber || '00'} (${currentCustomizerState.size}) ${patchCount}`;
    }
    if (barKitPrice) barKitPrice.innerText = `$${finalPrice.toFixed(2)}`;

    // Render SVGs
    renderJerseySVGFront(config);
    renderJerseySVGBack(config);
}

// Front SVG Generator
function renderJerseySVGFront(config, svgEl = document.getElementById("jersey-svg-front")) {
    if (!svgEl) return;

    let stripesStr = "";
    if (config.stripes) {
        // Vertical Stripes pattern for Argentina
        stripesStr = `
            <g clip-path="url(#body-clip)">
                <rect x="0" y="0" width="400" height="500" fill="${config.baseColor}" />
                <rect x="60" y="0" width="55" height="500" fill="${config.accentColor}" />
                <rect x="172" y="0" width="55" height="500" fill="${config.accentColor}" />
                <rect x="285" y="0" width="55" height="500" fill="${config.accentColor}" />
            </g>
        `;
    } else if (config.chestVee) {
        // V pattern detail (France)
        stripesStr = `
            <g clip-path="url(#body-clip)">
                <rect x="0" y="0" width="400" height="500" fill="${config.baseColor}" />
                <polygon points="200,240 100,120 300,120" fill="transparent" stroke="${config.accentColor}" stroke-width="12" stroke-linecap="round" />
            </g>
        `;
    } else if (config.shoulders) {
        // Shoulder Panels (Spain, Portugal)
        stripesStr = `
            <g clip-path="url(#body-clip)">
                <rect x="0" y="0" width="400" height="500" fill="${config.baseColor}" />
                <!-- Left/Right panels -->
                <path d="M 60,80 L 120,80 L 160,180 L 120,165 Z" fill="${config.accentColor}" opacity="0.8"/>
                <path d="M 340,80 L 280,80 L 240,180 L 280,165 Z" fill="${config.accentColor}" opacity="0.8"/>
            </g>
        `;
    } else if (config.deStripes) {
        // Germany details (flag highlights on sleeves)
        stripesStr = `
            <g clip-path="url(#body-clip)">
                <rect x="0" y="0" width="400" height="500" fill="${config.baseColor}" />
                <!-- Flag stripes on sides/shoulders -->
                <path d="M 120,80 L 140,80 L 140,450 L 120,450 Z" fill="#FF0000" opacity="0.1"/>
                <path d="M 280,80 L 260,80 L 260,450 L 280,450 Z" fill="#FFCC00" opacity="0.1"/>
            </g>
        `;
    } else {
        // Solid base color
        stripesStr = `
            <g clip-path="url(#body-clip)">
                <rect x="0" y="0" width="400" height="500" fill="${config.baseColor}" />
            </g>
        `;
    }

    let sleeveCuffs = "";
    if (config.cuffs) {
        sleeveCuffs = `
            <path d="M 60,160 L 100,190" stroke="${config.accentColor}" stroke-width="15" />
            <path d="M 340,160 L 300,190" stroke="${config.accentColor}" stroke-width="15" />
        `;
    }

    // World Cup 2026 Badge sleeve overlays
    let patchesMarkup = "";
    if (currentCustomizerState.patches.includes("wc")) {
        patchesMarkup += `
            <circle cx="85" cy="165" r="10" fill="#CCFF00" />
            <text x="85" y="168" font-family="Outfit" font-size="7" font-weight="900" fill="#000" text-anchor="middle">26</text>
        `;
    }
    if (currentCustomizerState.patches.includes("gold")) {
        patchesMarkup += `
            <circle cx="200" cy="220" r="14" fill="#D4AF37" stroke="#FFF" stroke-width="1" />
            <polygon points="200,210 203,217 210,217 205,221 207,228 200,224 193,228 195,221 190,217 197,217" fill="#FFF"/>
        `;
    }

    svgEl.innerHTML = `
        <defs>
            <clipPath id="body-clip">
                <path d="M 120,80 C 140,95 260,95 280,80 L 340,160 L 300,190 L 280,165 L 280,450 L 120,450 L 120,165 L 100,190 L 60,160 Z" />
            </clipPath>
        </defs>

        <!-- Base Jersey Outline with Shadow -->
        <path d="M 120,80 C 140,95 260,95 280,80 L 340,160 L 300,190 L 280,165 L 280,450 L 120,450 L 120,165 L 100,190 L 60,160 Z" fill="${config.baseColor}" stroke="rgba(255,255,255,0.05)" stroke-width="2" />
        
        <!-- Texture Patterns/Stripes -->
        ${stripesStr}
        
        <!-- Sleeve cuffs -->
        ${sleeveCuffs}

        <!-- Collar detail -->
        <path d="M 120,80 C 140,105 260,105 280,80" fill="none" stroke="${config.accentColor}" stroke-width="10" stroke-linecap="round" />
        <path d="M 120,80 C 140,105 260,105 280,80" fill="none" stroke="${config.baseColor}" stroke-width="4" stroke-linecap="round" />

        <!-- Logo Crest on Left Chest -->
        <circle cx="160" cy="160" r="15" fill="${config.badgeColor}" stroke="#FFF" stroke-width="1" />
        <polygon points="160,150 165,160 155,160" fill="#FFF" />
        <circle cx="160" cy="165" r="4" fill="#FFF"/>

        <!-- Brand Icon (Sleek Verse mark on right chest) -->
        <path d="M 235,150 L 245,165 L 241,165 L 235,155 L 229,165 L 225,165 Z" fill="${config.accentColor}" />

        <!-- Dynamic front number -->
        <text x="200" y="300" font-family="Outfit" font-size="40" font-weight="900" fill="${config.textColor}" stroke="${config.strokeColor}" stroke-width="1" text-anchor="middle">${currentCustomizerState.customNumber || '10'}</text>

        <!-- Patches markup -->
        ${patchesMarkup}
    `;
}

// Back SVG Generator (Shows dynamic custom name & number)
function renderJerseySVGBack(config, svgEl = document.getElementById("jersey-svg-back")) {
    if (!svgEl) return;

    let stripesStr = "";
    if (config.stripes) {
        // Vertical Stripes pattern for Argentina
        stripesStr = `
            <g clip-path="url(#body-clip-back)">
                <rect x="0" y="0" width="400" height="500" fill="${config.baseColor}" />
                <rect x="60" y="0" width="55" height="500" fill="${config.accentColor}" />
                <rect x="172" y="0" width="55" height="500" fill="${config.accentColor}" />
                <rect x="285" y="0" width="55" height="500" fill="${config.accentColor}" />
            </g>
        `;
    } else if (config.shoulders) {
        stripesStr = `
            <g clip-path="url(#body-clip-back)">
                <rect x="0" y="0" width="400" height="500" fill="${config.baseColor}" />
                <path d="M 60,80 L 120,80 L 160,180 L 120,165 Z" fill="${config.accentColor}" opacity="0.8"/>
                <path d="M 340,80 L 280,80 L 240,180 L 280,165 Z" fill="${config.accentColor}" opacity="0.8"/>
            </g>
        `;
    } else {
        stripesStr = `
            <g clip-path="url(#body-clip-back)">
                <rect x="0" y="0" width="400" height="500" fill="${config.baseColor}" />
            </g>
        `;
    }

    let sleeveCuffs = "";
    if (config.cuffs) {
        sleeveCuffs = `
            <path d="M 60,160 L 100,190" stroke="${config.accentColor}" stroke-width="15" />
            <path d="M 340,160 L 300,190" stroke="${config.accentColor}" stroke-width="15" />
        `;
    }

    let patchesMarkup = "";
    if (currentCustomizerState.patches.includes("wc")) {
        // Flip sleeve patches for back view
        patchesMarkup += `
            <circle cx="315" cy="165" r="10" fill="#CCFF00" />
            <text x="315" y="168" font-family="Outfit" font-size="7" font-weight="900" fill="#000" text-anchor="middle">26</text>
        `;
    }

    svgEl.innerHTML = `
        <defs>
            <clipPath id="body-clip-back">
                <path d="M 120,80 C 140,85 260,85 280,80 L 340,160 L 300,190 L 280,165 L 280,450 L 120,450 L 120,165 L 100,190 L 60,160 Z" />
            </clipPath>
        </defs>

        <!-- Base Jersey Outline -->
        <path d="M 120,80 C 140,85 260,85 280,80 L 340,160 L 300,190 L 280,165 L 280,450 L 120,450 L 120,165 L 100,190 L 60,160 Z" fill="${config.baseColor}" stroke="rgba(255,255,255,0.05)" stroke-width="2" />
        
        <!-- Texture Patterns -->
        ${stripesStr}
        
        <!-- Sleeve cuffs -->
        ${sleeveCuffs}

        <!-- Collar back curve -->
        <path d="M 120,80 C 140,88 260,88 280,80" fill="none" stroke="${config.accentColor}" stroke-width="8" stroke-linecap="round" />

        <!-- DYNAMIC CUSTOMIZER TEXT (Name & Number) -->
        <g id="dynamic-nameset">
            <!-- Custom Name -->
            <text x="200" y="150" 
                  font-family="Outfit" 
                  font-size="24" 
                  font-weight="900" 
                  letter-spacing="4" 
                  fill="${config.textColor}" 
                  stroke="${config.strokeColor}" 
                  stroke-width="1"
                  text-anchor="middle">
                ${currentCustomizerState.customName || 'NAME'}
            </text>

            <!-- Custom Number -->
            <text x="200" y="275" 
                  font-family="Outfit" 
                  font-size="110" 
                  font-weight="900" 
                  fill="${config.textColor}" 
                  stroke="${config.strokeColor}" 
                  stroke-width="3"
                  text-anchor="middle">
                ${currentCustomizerState.customNumber || '10'}
            </text>
        </g>

        <!-- Sleeve Patches -->
        ${patchesMarkup}
    `;
}

// 7. PRODUCT DETAIL PAGE LOGIC
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id")) || 101;
    
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
    const config = TEAM_CONFIGS[product.teamKey];

    // Update customizer state to match this product's team
    if (config) {
        currentCustomizerState.team = product.teamKey;
    }
    currentCustomizerState.customName = "";
    currentCustomizerState.customNumber = "";
    currentCustomizerState.patches = [];

    // Elements mapping
    const crumbName = document.getElementById("crumb-product-name");
    const prodType = document.getElementById("prod-type-label");
    const prodTitle = document.getElementById("prod-title");
    const prodRating = document.getElementById("prod-rating");
    const prodPrice = document.getElementById("prod-price");
    const prodDesc = document.getElementById("prod-desc");

    if (crumbName) crumbName.innerText = product.name;
    if (prodType) prodType.innerText = product.type || "National Kits";
    if (prodTitle) prodTitle.innerText = product.name;
    if (prodRating) prodRating.innerText = product.rating.toFixed(1);
    if (prodPrice) prodPrice.innerText = `$${product.price.toFixed(2)}`;
    if (prodDesc) prodDesc.innerText = product.description;

    // SVG Rendering
    if (config) {
        renderJerseySVGFront(config, document.getElementById("prod-svg-front"));
        renderJerseySVGBack(config, document.getElementById("prod-svg-back"));
    }

    // View toggle front vs back
    const btnViewFront = document.getElementById("prod-view-front");
    const btnViewBack = document.getElementById("prod-view-back");
    const stageFront = document.getElementById("prod-front-stage");
    const stageBack = document.getElementById("prod-back-stage");
    const thumbFront = document.getElementById("thumb-front");
    const thumbBack = document.getElementById("thumb-back");

    function setView(view) {
        if (view === "front") {
            if (stageFront) stageFront.classList.remove("hidden");
            if (stageBack) stageBack.classList.add("hidden");
            if (btnViewFront) {
                btnViewFront.className = "px-4 py-1 rounded-full font-headline text-xs font-bold uppercase tracking-wider text-tertiary bg-primary";
            }
            if (btnViewBack) {
                btnViewBack.className = "px-4 py-1 rounded-full font-headline text-xs font-bold uppercase tracking-wider text-textSlate hover:text-white";
            }
            if (thumbFront) {
                thumbFront.classList.add("border-primary");
                thumbFront.classList.remove("border-transparent");
            }
            if (thumbBack) {
                thumbBack.classList.remove("border-primary");
                thumbBack.classList.add("border-transparent");
            }
        } else {
            if (stageFront) stageFront.classList.add("hidden");
            if (stageBack) stageBack.classList.remove("hidden");
            if (btnViewFront) {
                btnViewFront.className = "px-4 py-1 rounded-full font-headline text-xs font-bold uppercase tracking-wider text-textSlate hover:text-white";
            }
            if (btnViewBack) {
                btnViewBack.className = "px-4 py-1 rounded-full font-headline text-xs font-bold uppercase tracking-wider text-tertiary bg-primary";
            }
            if (thumbFront) {
                thumbFront.classList.remove("border-primary");
                thumbFront.classList.add("border-transparent");
            }
            if (thumbBack) {
                thumbBack.classList.add("border-primary");
                thumbBack.classList.remove("border-transparent");
            }
        }
    }

    if (btnViewFront) btnViewFront.addEventListener("click", () => setView("front"));
    if (btnViewBack) btnViewBack.addEventListener("click", () => setView("back"));
    if (thumbFront) thumbFront.addEventListener("click", () => setView("front"));
    if (thumbBack) thumbBack.addEventListener("click", () => setView("back"));

    // Zoom container interaction
    const zoomContainer = document.getElementById("prod-zoom-wrapper");
    const zoomImgs = document.querySelectorAll(".zoom-img");

    if (zoomContainer) {
        zoomContainer.addEventListener("mousemove", (e) => {
            const rect = zoomContainer.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            zoomImgs.forEach(img => {
                img.style.transformOrigin = `${x}% ${y}%`;
            });
        });
        zoomContainer.addEventListener("mouseleave", () => {
            zoomImgs.forEach(img => {
                img.style.transformOrigin = `center center`;
            });
        });
    }

    // Personalization input logic
    const prodCustomName = document.getElementById("prod-custom-name");
    const prodCustomNumber = document.getElementById("prod-custom-number");

    let pageCustomName = "";
    let pageCustomNumber = "";

    if (prodCustomName) {
        prodCustomName.addEventListener("input", (e) => {
            currentCustomizerState.customName = e.target.value.toUpperCase().slice(0, 12);
            pageCustomName = currentCustomizerState.customName;
            if (config) {
                renderJerseySVGFront(config, document.getElementById("prod-svg-front"));
                renderJerseySVGBack(config, document.getElementById("prod-svg-back"));
            }
        });
    }

    if (prodCustomNumber) {
        prodCustomNumber.addEventListener("input", (e) => {
            let num = parseInt(e.target.value);
            if (isNaN(num)) num = "";
            if (num > 99) num = 99;
            currentCustomizerState.customNumber = num.toString();
            pageCustomNumber = currentCustomizerState.customNumber;
            if (config) {
                renderJerseySVGFront(config, document.getElementById("prod-svg-front"));
                renderJerseySVGBack(config, document.getElementById("prod-svg-back"));
            }
        });
    }

    // Size Selection
    let selectedSize = "L"; // default size
    const sizePicker = document.getElementById("prod-size-picker");
    if (sizePicker) {
        const sizeButtons = sizePicker.querySelectorAll("button");
        sizeButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                sizeButtons.forEach(b => {
                    b.className = "w-11 h-11 rounded bg-secondary/40 border border-transparent flex items-center justify-center font-headline font-bold text-xs hover:border-primary transition-colors text-textSlate hover:text-white";
                });
                btn.className = "w-11 h-11 rounded bg-primary border border-primary flex items-center justify-center font-headline font-bold text-xs text-tertiary neon-glow";
                selectedSize = btn.getAttribute("data-size") || "L";
            });
        });
    }

    // Quantity Selector
    let quantityValue = 1;
    const qtyValEl = document.getElementById("prod-qty-value");
    const btnMinus = document.getElementById("prod-qty-minus");
    const btnPlus = document.getElementById("prod-qty-plus");

    if (btnMinus && qtyValEl) {
        btnMinus.addEventListener("click", () => {
            if (quantityValue > 1) {
                quantityValue--;
                qtyValEl.innerText = quantityValue;
            }
        });
    }

    if (btnPlus && qtyValEl) {
        btnPlus.addEventListener("click", () => {
            quantityValue++;
            qtyValEl.innerText = quantityValue;
        });
    }

    // Add to Cart Action
    const btnAddToCart = document.getElementById("prod-add-to-cart");
    if (btnAddToCart) {
        btnAddToCart.addEventListener("click", () => {
            const isCustomized = !!(pageCustomName || pageCustomNumber);
            const priceVal = product.price;

            const cartItem = {
                id: product.id,
                name: product.name + (isCustomized ? " (Customized)" : ""),
                version: product.version,
                price: priceVal,
                image: product.image,
                size: selectedSize,
                isCustom: isCustomized,
                customName: pageCustomName || "NONE",
                customNumber: pageCustomNumber || "00",
                team: product.teamKey,
                quantity: quantityValue
            };

            addToCart(cartItem);
        });
    }

    // Buy Now Action
    const btnBuyNow = document.getElementById("prod-buy-now");
    if (btnBuyNow) {
        btnBuyNow.addEventListener("click", () => {
            const isCustomized = !!(pageCustomName || pageCustomNumber);
            const priceVal = product.price;

            const cartItem = {
                id: product.id,
                name: product.name + (isCustomized ? " (Customized)" : ""),
                version: product.version,
                price: priceVal,
                image: product.image,
                size: selectedSize,
                isCustom: isCustomized,
                customName: pageCustomName || "NONE",
                customNumber: pageCustomNumber || "00",
                team: product.teamKey,
                quantity: quantityValue
            };

            addToCart(cartItem);
            window.location.href = "checkout.html";
        });
    }

    // Render Related Products
    const relatedContainer = document.getElementById("related-kits-grid");
    if (relatedContainer) {
        relatedContainer.innerHTML = "";
        const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
        related.forEach(p => {
            let imgMarkup = "";
            if (p.image) {
                imgMarkup = `<img src="${p.image}" class="relative z-10 w-full h-48 object-contain drop-shadow-[0_15px_30px_rgba(204,255,0,0.15)] group-hover:scale-110 transition-transform duration-500" alt="${p.name}"/>`;
            } else {
                imgMarkup = `
                    <div class="relative z-10 w-full h-48 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg class="w-full h-full" id="svg-related-${p.id}" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"></svg>
                    </div>
                `;
            }
            const cardHTML = `
                <div class="glass-card rounded-lg p-6 relative border border-white/10 hover:border-primary/50 h-[420px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer group" onclick="window.location.href='product.html?id=${p.id}'">
                    <div class="absolute top-4 left-4 z-10 flex gap-2">
                        <span class="bg-white text-tertiary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">Home</span>
                        <span class="bg-primary text-tertiary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">${p.version.split(" ")[0]}</span>
                    </div>
                    <div class="flex-grow flex items-center justify-center relative mt-6">
                        <div class="w-36 h-36 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl absolute"></div>
                        ${imgMarkup}
                    </div>
                    <div class="pt-4 border-t border-white/10 mt-auto">
                        <div class="flex justify-between items-start mb-1">
                            <h4 class="font-headline font-bold text-base uppercase tracking-tight">${p.name}</h4>
                            <div class="flex items-center gap-1 text-primary">
                                <span class="material-symbols-outlined text-xs" style="font-variation-settings: 'FILL' 1;">star</span>
                                <span class="text-xs font-bold">${p.rating.toFixed(1)}</span>
                            </div>
                        </div>
                        <p class="text-slate-gray text-[10px] font-body mb-4">${p.version}</p>
                        <div class="flex justify-between items-center">
                            <span class="font-headline font-black text-lg">$${p.price.toFixed(2)}</span>
                            <button class="bg-primary text-tertiary hover:bg-white p-2 rounded transition-colors active:scale-95 flex items-center justify-center quick-add-btn" data-id="${p.id}">
                                <span class="material-symbols-outlined text-xs font-bold">add_shopping_cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            relatedContainer.innerHTML += cardHTML;
        });

        // Draw related product SVGs
        related.forEach(p => {
            if (!p.image) {
                const svgEl = document.getElementById(`svg-related-${p.id}`);
                if (svgEl) {
                    const cfg = TEAM_CONFIGS[p.teamKey] || {
                        baseColor: "#1C1C24",
                        accentColor: "#CCFF00",
                        badgeColor: "#CCFF00",
                        textColor: "#FFFFFF",
                        strokeColor: "transparent"
                    };
                    renderJerseySVGFront(cfg, svgEl);
                }
            }
        });

        // Bind quick add buttons for related products
        relatedContainer.querySelectorAll(".quick-add-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute("data-id"));
                const p = PRODUCTS.find(prod => prod.id === id);
                if (p) {
                    addToCart({
                        id: p.id,
                        name: p.name,
                        version: p.version,
                        price: p.price,
                        image: p.image,
                        size: "L",
                        isCustom: false,
                        quantity: 1
                    });
                }
            });
        });
    }
}

// 8. COLLECTION PAGE LOGIC
function initCollectionPage() {
    let collectionFilters = {
        search: "",
        availability: [],
        teams: [],
        priceRange: "all",
        sizes: [],
        editions: [],
        sort: "featured"
    };

    // DOM selectors
    const desktopSearch = document.getElementById("desktop-search-input");
    const mobileSearch = document.getElementById("mobile-search-input");
    const sortSelector = document.getElementById("sort-selector");
    const btnReset = document.getElementById("btn-reset-filters");
    const countEl = document.getElementById("filtered-count");
    const grid = document.getElementById("collection-products-grid");

    // Mobile sidebar triggers
    const filterSidebar = document.getElementById("filter-sidebar");
    const filterBackdrop = document.getElementById("filter-backdrop");
    const mobileTrigger = document.getElementById("mobile-filter-trigger");
    const mobileClose = document.getElementById("mobile-filter-close");

    if (mobileTrigger && filterSidebar && filterBackdrop) {
        mobileTrigger.addEventListener("click", () => {
            filterSidebar.classList.add("open");
            filterBackdrop.classList.add("open");
        });
    }

    if (mobileClose && filterSidebar && filterBackdrop) {
        mobileClose.addEventListener("click", () => {
            filterSidebar.classList.remove("open");
            filterBackdrop.classList.remove("open");
        });
    }

    if (filterBackdrop && filterSidebar) {
        filterBackdrop.addEventListener("click", () => {
            filterSidebar.classList.remove("open");
            filterBackdrop.classList.remove("open");
        });
    }

    function renderCollection() {
        // 1. Filter
        let filtered = PRODUCTS.filter(p => {
            // Search text match
            if (collectionFilters.search) {
                const query = collectionFilters.search.toLowerCase();
                const nameMatch = p.name.toLowerCase().includes(query);
                const typeMatch = p.type.toLowerCase().includes(query);
                const descMatch = p.description.toLowerCase().includes(query);
                if (!nameMatch && !typeMatch && !descMatch) return false;
            }

            // Availability filters
            if (collectionFilters.availability.length > 0) {
                if (collectionFilters.availability.includes("inStock") && !p.inStock) return false;
                if (collectionFilters.availability.includes("limited") && !p.isLimited) return false;
            }

            // Team filters
            if (collectionFilters.teams.length > 0) {
                if (!p.teamKey || !collectionFilters.teams.includes(p.teamKey)) return false;
            }

            // Price range filter
            if (collectionFilters.priceRange !== "all") {
                if (collectionFilters.priceRange === "under100" && p.price >= 100) return false;
                if (collectionFilters.priceRange === "100to150" && (p.price < 100 || p.price > 150)) return false;
                if (collectionFilters.priceRange === "over150" && p.price <= 150) return false;
            }

            // Size filter
            if (collectionFilters.sizes.length > 0) {
                const sizeMatch = p.sizes && p.sizes.some(s => collectionFilters.sizes.includes(s));
                if (!sizeMatch) return false;
            }

            // Version/edition filter
            if (collectionFilters.editions.length > 0) {
                if (!collectionFilters.editions.includes(p.version)) return false;
            }

            return true;
        });

        // 2. Sort
        if (collectionFilters.sort === "priceLowHigh") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (collectionFilters.sort === "priceHighLow") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (collectionFilters.sort === "rating") {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        // 3. Update count
        if (countEl) {
            countEl.innerText = filtered.length;
        }

        // 4. Render Grid
        if (grid) {
            grid.innerHTML = "";
            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full py-16 text-center text-textSlate font-body italic text-sm">
                        No jerseys match your filters. Try resetting the filters or tweaking your search query.
                    </div>
                `;
                return;
            }

            filtered.forEach(p => {
                let imgMarkup = "";
                if (p.image) {
                    imgMarkup = `<img src="${p.image}" class="relative z-10 w-full h-48 object-contain drop-shadow-[0_15px_30px_rgba(204,255,0,0.15)] group-hover:scale-110 transition-transform duration-500" alt="${p.name}"/>`;
                } else {
                    imgMarkup = `
                        <div class="relative z-10 w-full h-48 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <svg class="w-full h-full" id="svg-prod-${p.id}" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"></svg>
                        </div>
                    `;
                }

                const badgeText = p.version.split(" ")[0];
                const isLimitedBadge = p.isLimited ? `<span class="bg-primary text-tertiary text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">LTD</span>` : "";
                const stockBadge = !p.inStock ? `<span class="bg-red-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">OUT</span>` : "";

                const cardHTML = `
                    <div class="glass-card rounded-lg p-6 relative border border-white/10 hover:border-primary/50 h-[420px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer group" onclick="window.location.href='product.html?id=${p.id}'">
                        <div class="absolute top-4 left-4 z-10 flex gap-2">
                            <span class="bg-white text-tertiary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">${badgeText}</span>
                            ${isLimitedBadge}
                            ${stockBadge}
                        </div>
                        <button class="absolute top-4 right-4 z-10 text-white/50 hover:text-primary transition-colors" onclick="event.stopPropagation();">
                            <span class="material-symbols-outlined">favorite</span>
                        </button>
                        <div class="flex-grow flex items-center justify-center relative mt-6">
                            <div class="w-36 h-36 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl absolute"></div>
                            ${imgMarkup}
                        </div>
                        <div class="pt-4 border-t border-white/10 mt-auto">
                            <div class="flex justify-between items-start mb-1">
                                <h4 class="font-headline font-bold text-base uppercase tracking-tight truncate max-w-[200px] text-white">${p.name}</h4>
                                <div class="flex items-center gap-1 text-primary">
                                    <span class="material-symbols-outlined text-xs" style="font-variation-settings: 'FILL' 1;">star</span>
                                    <span class="text-xs font-bold">${p.rating.toFixed(1)}</span>
                                </div>
                            </div>
                            <p class="text-slate-gray text-[10px] font-body mb-4">${p.version}</p>
                            <div class="flex justify-between items-center">
                                <span class="font-headline font-black text-lg text-white">$${p.price.toFixed(2)}</span>
                                ${p.inStock ? `
                                    <button class="bg-primary text-tertiary hover:bg-white p-2 rounded transition-colors active:scale-95 flex items-center justify-center quick-add-btn" data-id="${p.id}">
                                        <span class="material-symbols-outlined text-xs font-bold">add_shopping_cart</span>
                                    </button>
                                ` : `
                                    <span class="text-[9px] text-red-500 font-bold uppercase font-headline">Sold Out</span>
                                `}
                            </div>
                        </div>
                    </div>
                `;
                grid.innerHTML += cardHTML;
            });

            // Draw collection page placeholder jersey SVGs
            filtered.forEach(p => {
                if (!p.image) {
                    const svgEl = document.getElementById(`svg-prod-${p.id}`);
                    if (svgEl) {
                        const cfg = TEAM_CONFIGS[p.teamKey] || {
                            baseColor: "#1C1C24",
                            accentColor: "#CCFF00",
                            badgeColor: "#CCFF00",
                            textColor: "#FFFFFF",
                            strokeColor: "transparent"
                        };
                        renderJerseySVGFront(cfg, svgEl);
                    }
                }
            });

            // Bind click handlers for quick add
            grid.querySelectorAll(".quick-add-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const id = parseInt(btn.getAttribute("data-id"));
                    const p = PRODUCTS.find(prod => prod.id === id);
                    if (p) {
                        addToCart({
                            id: p.id,
                            name: p.name,
                            version: p.version,
                            price: p.price,
                            image: p.image,
                            size: "L",
                            isCustom: false,
                            quantity: 1
                        });
                    }
                });
            });
        }
    }

    // Input handlers
    if (desktopSearch) {
        desktopSearch.addEventListener("input", (e) => {
            collectionFilters.search = e.target.value;
            renderCollection();
        });
    }

    if (mobileSearch) {
        mobileSearch.addEventListener("input", (e) => {
            collectionFilters.search = e.target.value;
            renderCollection();
        });
    }

    if (sortSelector) {
        sortSelector.addEventListener("change", (e) => {
            collectionFilters.sort = e.target.value;
            renderCollection();
        });
    }

    // Checkbox arrays
    function bindCheckboxes(selector, filterArray) {
        document.querySelectorAll(selector).forEach(cb => {
            cb.addEventListener("change", () => {
                const val = cb.getAttribute("data-val") || cb.getAttribute("data-team") || cb.getAttribute("data-version");
                if (cb.checked) {
                    if (!filterArray.includes(val)) filterArray.push(val);
                } else {
                    const idx = filterArray.indexOf(val);
                    if (idx > -1) filterArray.splice(idx, 1);
                }
                renderCollection();
            });
        });
    }

    bindCheckboxes(".availability-checkbox", collectionFilters.availability);
    bindCheckboxes(".team-checkbox", collectionFilters.teams);
    bindCheckboxes(".edition-checkbox", collectionFilters.editions);

    // Price radio buttons
    document.querySelectorAll(".price-radio").forEach(radio => {
        radio.addEventListener("change", (e) => {
            if (radio.checked) {
                collectionFilters.priceRange = e.target.value;
                renderCollection();
            }
        });
    });

    // Size filter buttons
    const sizeButtons = document.querySelectorAll(".size-filter-btn");
    sizeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const sizeVal = btn.getAttribute("data-size");
            const idx = collectionFilters.sizes.indexOf(sizeVal);
            if (idx > -1) {
                // remove active state
                collectionFilters.sizes.splice(idx, 1);
                btn.className = "w-9 h-9 rounded bg-secondary/40 border border-transparent flex items-center justify-center font-headline font-bold text-xs hover:border-primary transition-colors text-textSlate hover:text-white size-filter-btn";
            } else {
                // add active state
                collectionFilters.sizes.push(sizeVal);
                btn.className = "w-9 h-9 rounded bg-primary border border-primary flex items-center justify-center font-headline font-bold text-xs text-tertiary neon-glow size-filter-btn active";
            }
            renderCollection();
        });
    });

    // Reset button click
    if (btnReset) {
        btnReset.addEventListener("click", () => {
            // Reset state
            collectionFilters.search = "";
            collectionFilters.availability = [];
            collectionFilters.teams = [];
            collectionFilters.priceRange = "all";
            collectionFilters.sizes = [];
            collectionFilters.editions = [];
            collectionFilters.sort = "featured";

            // Clear visual checks
            if (desktopSearch) desktopSearch.value = "";
            if (mobileSearch) mobileSearch.value = "";
            if (sortSelector) sortSelector.value = "featured";
            
            document.querySelectorAll(".availability-checkbox, .team-checkbox, .edition-checkbox").forEach(cb => cb.checked = false);
            
            const firstPriceRadio = document.querySelector('.price-radio[value="all"]');
            if (firstPriceRadio) firstPriceRadio.checked = true;

            sizeButtons.forEach(btn => {
                btn.className = "w-9 h-9 rounded bg-secondary/40 border border-transparent flex items-center justify-center font-headline font-bold text-xs hover:border-primary transition-colors text-textSlate hover:text-white size-filter-btn";
            });

            renderCollection();
        });
    }

    // Initial load
    renderCollection();
}

// 9. SUPPORT & HELP CENTER LOGIC
function initSupportPage() {
    const btnTrack = document.getElementById("btn-track-order");
    const trackInput = document.getElementById("tracking-id-input");
    const formQuery = document.getElementById("support-query-form");

    if (btnTrack && trackInput) {
        btnTrack.addEventListener("click", () => {
            const code = trackInput.value.trim();
            if (!code) {
                alert("Please enter a valid order number.");
                return;
            }
            trackOrderCode(code);
        });

        // Press Enter to submit tracking
        trackInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const code = trackInput.value.trim();
                if (!code) {
                    alert("Please enter a valid order number.");
                    return;
                }
                trackOrderCode(code);
            }
        });

        // Dynamic auto-tracking from URL parameter redirects
        const urlParams = new URLSearchParams(window.location.search);
        const orderParam = urlParams.get("order");
        if (orderParam) {
            trackInput.value = orderParam.toUpperCase();
            trackOrderCode(orderParam);
        }
    }

    if (formQuery) {
        formQuery.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! A support ticket has been registered. Our crew will review your query and email you back within 12 hours.");
            formQuery.reset();
        });
    }

    function trackOrderCode(orderId) {
        const container = document.getElementById("tracking-status-container");
        const refEl = document.getElementById("tracking-order-ref");
        const carrierStatusEl = document.getElementById("tracking-carrier-status");
        const progressBar = document.getElementById("tracking-progress-bar");
        const infoNote = document.getElementById("tracking-info-note");

        if (!container) return;

        refEl.innerText = orderId.toUpperCase();
        container.classList.remove("hidden");

        // Parse digits for status
        const matches = orderId.match(/\d/g);
        const lastDigit = matches ? parseInt(matches[matches.length - 1]) : 5;

        const steps = ["placed", "processing", "printing", "shipped", "delivered"];
        
        // Reset all steps
        steps.forEach(step => {
            const stepEl = document.getElementById(`step-${step}`);
            if (!stepEl) return;
            const dot = stepEl.querySelector("div");
            const label = stepEl.querySelector("span");
            if (dot) {
                dot.className = "w-8 h-8 rounded-full bg-white/10 border border-white/20 text-textSlate flex items-center justify-center font-bold text-xs";
            }
            if (label) {
                label.className = "text-[9px] uppercase tracking-wider font-headline font-bold text-textSlate";
            }
        });

        let progressPct = 0;
        let carrierStatus = "";
        let noteText = "";
        let activeCount = 1;

        if (lastDigit <= 2) {
            progressPct = 25;
            carrierStatus = "Processing";
            noteText = "Your payment is verified and we are sourcing high-performance blanks for your jersey.";
            activeCount = 2;
        } else if (lastDigit <= 5) {
            progressPct = 50;
            carrierStatus = "Customizing Nameset";
            noteText = "Your kit is in the personalization studio. Our technician is preparing the heat-pressed nameset decals.";
            activeCount = 3;
        } else if (lastDigit <= 8) {
            progressPct = 75;
            carrierStatus = "In Transit";
            noteText = "Your customized kit is printed, packaged, and handed over to the courier. It is currently in transit.";
            activeCount = 4;
        } else {
            progressPct = 100;
            carrierStatus = "Delivered";
            noteText = "Your package was signed for and successfully delivered. We hope you love your new Verse Jersey!";
            activeCount = 5;
        }

        if (progressBar) progressBar.style.width = `${progressPct}%`;
        if (carrierStatusEl) carrierStatusEl.innerText = carrierStatus;
        if (infoNote) infoNote.innerText = noteText;

        // Apply active styling
        for (let i = 0; i < activeCount; i++) {
            const step = steps[i];
            const stepEl = document.getElementById(`step-${step}`);
            if (stepEl) {
                const dot = stepEl.querySelector("div");
                const label = stepEl.querySelector("span");
                if (dot) {
                    dot.className = "w-8 h-8 rounded-full bg-primary text-tertiary flex items-center justify-center font-bold text-xs neon-glow";
                }
                if (label) {
                    label.className = "text-[9px] uppercase tracking-wider font-headline font-bold text-white";
                }
            }
        }
    }
}

// 10. CART PAGE LOGIC
function initCartPage() {
    let cartDiscountPercent = 0.00;
    if (localStorage.getItem("verse_coupon") === "VERSE10") {
        cartDiscountPercent = 0.10;
    }
    
    const container = document.getElementById("cart-page-items-list");
    const subtotalEl = document.getElementById("cart-page-subtotal");
    const discountEl = document.getElementById("cart-page-discount");
    const discountRow = document.getElementById("cart-page-discount-row");
    const shippingEl = document.getElementById("cart-page-shipping");
    const taxEl = document.getElementById("cart-page-tax");
    const totalEl = document.getElementById("cart-page-total");
    
    const couponInput = document.getElementById("coupon-code-input");
    const applyCouponBtn = document.getElementById("btn-apply-coupon");
    const checkoutBtn = document.getElementById("btn-cart-checkout");

    if (discountRow) {
        if (cartDiscountPercent > 0) {
            discountRow.classList.remove("hidden");
        } else {
            discountRow.classList.add("hidden");
        }
    }
    if (couponInput && cartDiscountPercent > 0) {
        couponInput.value = "VERSE10";
    }

    function renderCartPageItems() {
        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = `
                <div class="glass-card rounded-2xl p-12 border border-white/5 bg-secondary/10 text-center space-y-6">
                    <span class="material-symbols-outlined text-textSlate text-6xl block">shopping_cart_off</span>
                    <h3 class="font-headline font-black uppercase text-xl text-white">Your cart is empty</h3>
                    <p class="text-textSlate text-xs font-body max-w-sm mx-auto leading-relaxed">
                        You have not added any premium jerseys to your selection yet. Explore our collections to start customization.
                    </p>
                    <a href="collection.html" class="bg-primary text-tertiary px-8 py-3.5 rounded-xl font-headline font-black italic uppercase tracking-wider inline-block text-sm active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                        Browse Jerseys
                    </a>
                </div>
            `;
            if (subtotalEl) subtotalEl.innerText = "$0.00";
            if (discountEl) discountEl.innerText = "-$0.00";
            if (shippingEl) shippingEl.innerText = "$0.00";
            if (taxEl) taxEl.innerText = "$0.00";
            if (totalEl) totalEl.innerText = "$0.00";
            if (checkoutBtn) {
                checkoutBtn.classList.add("opacity-50", "pointer-events-none");
            }
            return;
        }

        if (checkoutBtn) {
            checkoutBtn.classList.remove("opacity-50", "pointer-events-none");
        }

        container.innerHTML = "";
        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemPriceTally = item.price * item.quantity;
            subtotal += itemPriceTally;

            // Image markup
            let imgMarkup = "";
            if (item.image) {
                imgMarkup = `<img src="${item.image}" class="w-full h-full object-contain" />`;
            } else {
                imgMarkup = `<svg class="w-full h-full" id="svg-cart-page-item-${index}" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"></svg>`;
            }

            const itemHTML = `
                <div class="glass-card rounded-xl p-5 border border-white/5 bg-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <!-- Left: Item details -->
                    <div class="flex items-center gap-4 w-full sm:w-auto">
                        <div class="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center border border-white/5 overflow-hidden flex-shrink-0">
                            ${imgMarkup}
                        </div>
                        <div class="min-w-0">
                            <h4 class="font-headline font-bold text-sm uppercase text-white truncate max-w-[240px]">${item.name}</h4>
                            <p class="text-[10px] text-textSlate font-body mt-0.5 uppercase tracking-wider">
                                ${item.isCustom ? `Personalized Name: ${item.customName} | No: ${item.customNumber}` : `${item.version}`}
                            </p>
                            <p class="text-[10px] text-primary font-body uppercase font-bold mt-1">Size: ${item.size || 'L'}</p>
                        </div>
                    </div>

                    <!-- Center: Stepper & Price -->
                    <div class="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                        <!-- Stepper -->
                        <div class="flex items-center bg-secondary border border-white/10 rounded-lg p-1">
                            <button class="w-8 h-8 flex items-center justify-center text-textSlate hover:text-white active:scale-90 transition-all font-bold btn-page-qty-minus" data-index="${index}">-</button>
                            <span class="w-6 text-center text-xs font-headline font-bold text-white">${item.quantity}</span>
                            <button class="w-8 h-8 flex items-center justify-center text-textSlate hover:text-white active:scale-90 transition-all font-bold btn-page-qty-plus" data-index="${index}">+</button>
                        </div>

                        <!-- Price -->
                        <div class="text-right min-w-[70px]">
                            <span class="font-headline font-black text-sm text-white block">$${itemPriceTally.toFixed(2)}</span>
                            <span class="text-[9px] text-textSlate font-body block mt-0.5">$${item.price.toFixed(2)} each</span>
                        </div>

                        <!-- Delete -->
                        <button class="text-textSlate/60 hover:text-primary transition-colors cursor-pointer btn-page-delete" data-index="${index}">
                            <span class="material-symbols-outlined text-sm">delete</span>
                        </button>
                    </div>
                </div>
            `;
            container.innerHTML += itemHTML;
        });

        // Draw cart item SVGs
        cart.forEach((item, index) => {
            if (!item.image) {
                const svgEl = document.getElementById(`svg-cart-page-item-${index}`);
                if (svgEl) {
                    const cfg = TEAM_CONFIGS[item.team] || {
                        baseColor: "#1C1C24",
                        accentColor: "#CCFF00",
                        badgeColor: "#CCFF00",
                        textColor: "#FFFFFF",
                        strokeColor: "transparent"
                    };
                    renderJerseySVGFront(cfg, svgEl);
                }
            }
        });

        // Pricing calculations
        const discountAmount = subtotal * cartDiscountPercent;
        const subtotalAfterDiscount = subtotal - discountAmount;
        const shipping = subtotalAfterDiscount >= 150 ? 0.00 : 9.99;
        const tax = subtotalAfterDiscount * 0.08;
        const grandTotal = subtotalAfterDiscount + shipping + tax;

        if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
        if (discountEl) discountEl.innerText = `-$${discountAmount.toFixed(2)}`;
        if (shippingEl) shippingEl.innerText = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
        if (taxEl) taxEl.innerText = `$${tax.toFixed(2)}`;
        if (totalEl) totalEl.innerText = `$${grandTotal.toFixed(2)}`;

        // Bind events
        container.querySelectorAll(".btn-page-qty-minus").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (cart[idx].quantity > 1) {
                    cart[idx].quantity--;
                    saveCart();
                    renderCartPageItems();
                    renderCartItems(); // Sync drawer
                }
            });
        });

        container.querySelectorAll(".btn-page-qty-plus").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                cart[idx].quantity++;
                saveCart();
                renderCartPageItems();
                renderCartItems(); // Sync drawer
            });
        });

        container.querySelectorAll(".btn-page-delete").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                cart.splice(idx, 1);
                saveCart();
                renderCartPageItems();
                renderCartItems(); // Sync drawer
            });
        });
    }

    // Coupon logic
    if (applyCouponBtn && couponInput) {
        applyCouponBtn.addEventListener("click", () => {
            const val = couponInput.value.trim().toUpperCase();
            if (val === "VERSE10") {
                cartDiscountPercent = 0.10;
                localStorage.setItem("verse_coupon", "VERSE10"); // Persist coupon state
                if (discountRow) discountRow.classList.remove("hidden");
                alert("Coupon code VERSE10 successfully applied! 10% discount subtracted from your order subtotal.");
                renderCartPageItems();
            } else {
                alert("Invalid coupon code.");
            }
        });
    }

    // Suggestions grid
    const suggestionsGrid = document.getElementById("cart-page-suggestions");
    if (suggestionsGrid) {
        suggestionsGrid.innerHTML = "";
        
        // Take first 4 items from PRODUCTS
        const suggs = PRODUCTS.slice(0, 4);
        suggs.forEach(p => {
            let imgMarkup = "";
            if (p.image) {
                imgMarkup = `<img src="${p.image}" class="relative z-10 w-full h-40 object-contain drop-shadow-[0_15px_30px_rgba(204,255,0,0.15)] group-hover:scale-110 transition-transform duration-500" alt="${p.name}"/>`;
            } else {
                imgMarkup = `
                    <div class="relative z-10 w-full h-40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg class="w-full h-full" id="svg-sugg-${p.id}" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"></svg>
                    </div>
                `;
            }

            const cardHTML = `
                <div class="glass-card rounded-lg p-5 relative border border-white/10 hover:border-primary/50 h-[360px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer group" onclick="window.location.href='product.html?id=${p.id}'">
                    <div class="absolute top-4 left-4 z-10">
                        <span class="bg-white text-tertiary text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">${p.version.split(" ")[0]}</span>
                    </div>
                    <div class="flex-grow flex items-center justify-center relative mt-4">
                        <div class="w-28 h-28 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl absolute"></div>
                        ${imgMarkup}
                    </div>
                    <div class="pt-4 border-t border-white/10 mt-auto">
                        <h4 class="font-headline font-bold text-xs uppercase tracking-tight truncate text-white mb-2">${p.name}</h4>
                        <div class="flex justify-between items-center">
                            <span class="font-headline font-black text-sm text-white">$${p.price.toFixed(2)}</span>
                            <button class="bg-primary text-tertiary hover:bg-white p-2 rounded transition-colors active:scale-95 flex items-center justify-center quick-add-btn" data-id="${p.id}">
                                <span class="material-symbols-outlined text-xs font-bold">add_shopping_cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            suggestionsGrid.innerHTML += cardHTML;
        });

        // Draw cart page suggestion SVGs
        suggs.forEach(p => {
            if (!p.image) {
                const svgEl = document.getElementById(`svg-sugg-${p.id}`);
                if (svgEl) {
                    const cfg = TEAM_CONFIGS[p.teamKey] || {
                        baseColor: "#1C1C24",
                        accentColor: "#CCFF00",
                        badgeColor: "#CCFF00",
                        textColor: "#FFFFFF",
                        strokeColor: "transparent"
                    };
                    renderJerseySVGFront(cfg, svgEl);
                }
            }
        });

        // Bind quick add buttons for recommendations
        suggestionsGrid.querySelectorAll(".quick-add-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute("data-id"));
                const p = PRODUCTS.find(prod => prod.id === id);
                if (p) {
                    addToCart({
                        id: p.id,
                        name: p.name,
                        version: p.version,
                        price: p.price,
                        image: p.image,
                        size: "L",
                        isCustom: false,
                        quantity: 1
                    });
                    renderCartPageItems();
                }
            });
        });
    }

    renderCartPageItems();
}
