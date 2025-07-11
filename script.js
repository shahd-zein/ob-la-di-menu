
const menuData = {
    Hot_Drinks: [
      { name_en: "Hot Chocolate", name_ar: "هوت شوكليت", price: 25 },
      {
        name_en: "Hot Chocolate Marshmello",
        name_ar: "هوت شوكليت مارشميلو",
        price: 30,
      },
      { name_en: "Hot Oreo", name_ar: "هوت اوريو", price: 30 },
      {
        name_en: "Hot Oreo Marshmello",
        name_ar: "هوت اوريو مارشميلو",
        price: 35,
      },
      {
        name_en: "Hot Chocolate Sudanese",
        name_ar: "هوت شوكليت سوداني",
        price: 25,
      },
      { name_en: "Hot Sidar", name_ar: "هوت سيدر", price: 25 },
      { name_en: "Sahlap Nuts", name_ar: "سحلب مكسرات", price: 35 },
      { name_en: "Sahlap Fruit", name_ar: "سحلب فواكه", price: 40 },
      { name_en: "Sahlap Chocolate", name_ar: "سحلب شكولاته", price: 30 },
      { name_en: "Sahlap Oreo", name_ar: "سحلب اوريو", price: 35 },
      { name_en: "Homs El Sham", name_ar: "حمص الشام", price: 25 },
      { name_en: "Cinnamon Milk", name_ar: "قرفة بالحليب", price: 25 },
      { name_en: "Cinnamon Nutella", name_ar: "قرفه بالنوتيلا", price: 30 },
      { name_en: "Tea", name_ar: "شاي", price: 12 },
      { name_en: "Tea Flavors", name_ar: "شاي نكهات", price: 17 },
      { name_en: "Herbal Cocktail", name_ar: "كوكتيل اعشاب", price: 25 },
      { name_en: "Hot Lemon", name_ar: "ليمون ساخن", price: 12 },
      { name_en: "Espresso S", name_ar: "اسبرسو S", price: 20 },
      { name_en: "Espresso D", name_ar: "اسبرسو D", price: 25 },
      { name_en: "Cappuccino", name_ar: "كابتشينو", price: 30 },
      { name_en: "Latte", name_ar: "لاتيه", price: 30 },
      { name_en: "Mocha", name_ar: "موكا", price: 32 },
      { name_en: "Macchiato S", name_ar: "ميكاتو S", price: 30 },
      { name_en: "Macchiato D", name_ar: "ميكاتو D", price: 35 },
      { name_en: "White Mocha", name_ar: "وايت موكا", price: 30 },
      { name_en: "American Coffee", name_ar: "اميركان كوفي", price: 30 },
      { name_en: "Nescafe", name_ar: "نيسكافيه", price: 35 },
      { name_en: "Ristretto", name_ar: "ريسترتو", price: 25 },
      { name_en: "Turkish Coffee S", name_ar: "قهوة تركي S", price: 15 },
      { name_en: "Turkish Coffee D", name_ar: "قهوة تركي D", price: 20 },
      { name_en: "French Coffee", name_ar: "قهوة فرنساوي", price: 30 },
      { name_en: "Hazelnut Coffee", name_ar: "قهوة بندق", price: 25 },
      { name_en: "Nutella Coffee", name_ar: "قهوة نوتيلا", price: 25 },
    ],
    Smoothies: [
      { name_en: "Mango Smoothie", name_ar: "سموزي مانجو", price: 35 },
      { name_en: "Guava Smoothie", name_ar: "سموزي جوافه", price: 35 },
      { name_en: "Orange Smoothie", name_ar: "سموزي برتقال", price: 35 },
      { name_en: "Strawberry Smoothie", name_ar: "فراوله سموزي", price: 35 },
      { name_en: "Watermelon Smoothie", name_ar: "سموزي بطيخ", price: 35 },
      {
        name_en: "Lemon Mint Smoothie",
        name_ar: "سموزي ليمون بالنعناع",
        price: 35,
      },
      { name_en: "Kiwi Smoothie", name_ar: "سموزي كيوي", price: 35 },
      {
        name_en: "Watermelon Mint Smoothie",
        name_ar: "سموزي بطيخ بالنعناع",
        price: 35,
      },
      { name_en: "Blue berry Smoothie", name_ar: "سموزي بلوبيري", price: 35 },
      {
        name_en: "Passion fruit Smoothie",
        name_ar: "سموزي بلوباشون",
        price: 35,
      },
      { name_en: "Pineapple Smoothie", name_ar: "سموزي اناناس", price: 35 },
    ],
    Fresh_juice: [
      { name_en: "Mango", name_ar: "مانجو", price: 32 },
      { name_en: "Guava", name_ar: "جوافة", price: 30 },
      { name_en: "Orange", name_ar: "برتقال", price: 30 },
      { name_en: "Strawberry", name_ar: "فراولة", price: 30 },
      { name_en: "Watermelon", name_ar: "بطيخ", price: 30 },
      { name_en: "Kiwi", name_ar: "كيوي", price: 30 },
      { name_en: "Avocado", name_ar: "أفوكادو", price: 32 },
      { name_en: "Banana with Milk", name_ar: "موز باللبن", price: 32 },
      { name_en: "Lemon", name_ar: "ليمون", price: 30 },
      { name_en: "Lemon Mint", name_ar: "ليمون بالنعناع", price: 28 },
      { name_en: "Watermelon mint", name_ar: "بطيخ بالنعناع", price: 32 },
      { name_en: "Guava Mint", name_ar: "جوافة بالنعناع", price: 32 },
      { name_en: "Yogurt with Honey", name_ar: "زبادي بالعسل", price: 25 },
      { name_en: "Fruit Yogurt", name_ar: "زبادي فواكه", price: 30 },
    ],
    milk_shake: [
      { name_en: "Vanilla", name_ar: "فانيلا", price: 30 },
      { name_en: "Chocolate", name_ar: "شوكليت", price: 32 },
      { name_en: "Caramel", name_ar: "كاراميل", price: 32 },
      { name_en: "Strawberry", name_ar: "فراوله", price: 32 },
      { name_en: "Mango", name_ar: "مانجو", price: 32 },
      { name_en: "Blue berry", name_ar: "بلوبيري", price: 32 },
      { name_en: "Oreo", name_ar: "اوريو", price: 32 },
      { name_en: "KitKat", name_ar: "كيتكات", price: 32 },
      { name_en: "Snickers", name_ar: "سنيكرز", price: 32 },
      { name_en: "Lotus", name_ar: "لوتس", price: 32 },
      { name_en: "Nutella", name_ar: "نوتيلا", price: 32 },

    ],
    frappes: [
      { name_en: "Caramel Frappe", name_ar: "فراپيه كراميل", price: 30 },
      { name_en: "Chocolate Frappe", name_ar: "فراپيه شوكولاتة", price: 30 },
      { name_en: "Oreo Frappe", name_ar: "فراپيه أوريو", price: 35 },
      { name_en: "Mocha Frappe", name_ar: "فراپيه موكا", price: 35 },
      { name_en: "Maltesers Frappe", name_ar: "فراپيه مالتيزرز", price: 35 },
      { name_en: "Snickers Frappe", name_ar: "فراپيه سنيكرز", price: 40 },
      { name_en: "Kit Kat Frappe", name_ar: "فراپيه كيت كات", price: 40 },
      {
        name_en: "Peanut Butter Frappe",
        name_ar: "فراپيه زبدة فول سوداني",
        price: 40,
      },
    ],
    desserts: [
      { name_en: "Molten Cake", name_ar: "مولتن كيك", price: 40 },
      { name_en: "Molten Cake Lotus", name_ar: "مولتن كيك لوتس", price: 45 },
      { name_en: "Cheese Cake", name_ar: "تشيز كيك", price: 30 },
      { name_en: "Chocolate Cake", name_ar: "كيكة شوكولاتة", price: 30 },
      { name_en: "Brownies Cake", name_ar: "براونيز", price: 30 },
      { name_en: "Red Velvet", name_ar: "ريد فلفت", price: 30 },
      { name_en: "Nutella Jar", name_ar: " نوتيلا جار", price: 45 },
      {
        name_en: "Ob La Di Ice Cream",
        name_ar: "ob la di ايسكريم",
        price: 30,
      },
      { name_en: "Fruit Salad", name_ar: "سلطة فواكه", price: 35 },
      { name_en: "Fruit Salad Ice", name_ar: "سلطة فواكه مثلجة", price: 40 },
    ],
    breakfast: [
      { name_en: "Croissant", name_ar: "كرواسون", price: 10 },
      { name_en: "Croissant Cheese", name_ar: "كرواسون جبنه", price: 15 },
      { name_en: "Croissant Beef", name_ar: "كرواسون لحمه", price: 20 },
    ],
    sandwiches: [
      { name_en: "Burger", name_ar: "برجر", price: 48 },
      { name_en: "Kofta", name_ar: "كفتة", price: 45 },
      { name_en: "Pane", name_ar: "بانيه", price: 30 },
      { name_en: "Strips", name_ar: "ستريبس", price: 35 },
      { name_en: "Crispy", name_ar: "كرسبي", price: 35 },
      { name_en: "Potatos", name_ar: "بطاطس", price: 15 },
    ],
    chocolate: [
      { name_en: "Kit Kat", name_ar: "كيت كات", price: 15 },
      { name_en: "Snickers", name_ar: "سنيكرز", price: 15 },
      { name_en: "Moro", name_ar: "مورو", price: 15 },
      { name_en: "Mars", name_ar: "مارس", price: 15 },
      { name_en: "Galaxy", name_ar: "جالكسي", price: 15 },
      { name_en: "Ferrero", name_ar: "فيريرو", price: 30 },
    ],
    cocktails: [
      { name_en: "Mango Banana", name_ar: "مانجو بالموز", price: null },
      { name_en: "Blue Passion", name_ar: "بلو باشن", price: null },
      { name_en: "Electric Soda", name_ar: "إلكتريك صودا", price: null },
      { name_en: "Pina Colada", name_ar: "بينا كولادا", price: null },
      { name_en: "Sun Shine", name_ar: "صن شاين", price: null },
      { name_en: "Florida", name_ar: "فلوريدا", price: null },
    ],
    Soft_Drinks: [
      { name_en: "Water", name_ar: "مياه", price: 7 },
      { name_en: "Soft Drinks", name_ar: "مشروبات غازية", price: 15 },
      { name_en: "Schweppes Gold", name_ar: "شويبس جولد", price: 18 },
      { name_en: "Fayrouz", name_ar: "فيروز", price: 18 },
      { name_en: "Red Bull", name_ar: "ريد بول", price: 40 },
      { name_en: "Power Horse", name_ar: "باور هورس", price: 35 },
      { name_en: "Freez", name_ar: "فريز", price: 35 },
      { name_en: "Cherry Cola", name_ar: "شيري كولا", price: 25 },
      { name_en: "Mehtio 7 Up", name_ar: "مهيتيو 7 أب", price: 25 },
      { name_en: "Mehtio Red Bull", name_ar: "مهيتيو ريد بول", price: 45 },
    ],
    ice: [
      { name_en: "Ice Latte", name_ar: "آيس لاتيه", price: 35 },
      { name_en: "Ice Mocha", name_ar: "آيس موكا", price: 38 },
      { name_en: "Ice Chocolate", name_ar: "آيس شوكولاتة", price: 30 },
      { name_en: "Ice Tea", name_ar: "آيس تي", price: 25 },
    ],
    addOns: [
      { name_en: "Whipped Cream", name_ar: "كريمة مخفوقة", price: 5 },
      { name_en: "Nutella", name_ar: "نوتيلا", price: 10 },
      { name_en: "Sauce", name_ar: "صوص", price: 5 },
      { name_en: "Milk", name_ar: "حليب", price: 5 },
      { name_en: "Nuts", name_ar: "مكسرات", price: 10 },
      { name_en: "Ice Cream", name_ar: "آيس كريم", price: 7 },
      { name_en: "Lotus", name_ar: "لوتس", price: 7 },
      { name_en: "Lemon", name_ar: "ليمون", price: 3 },
    ]
  };

const menuContainer = document.getElementById("menu-container");

Object.entries(menuData).forEach(([sectionName, items]) => {
  const section = document.createElement("div");
  section.classList.add("menu-section");

  const title = document.createElement("h2");
  title.classList.add("section-title");
  title.textContent = sectionName.replaceAll("_", " ");
  section.appendChild(title);

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("item-name");
    nameSpan.textContent = item.name_ar;

    const priceSpan = document.createElement("span");
    priceSpan.classList.add("item-price");
    priceSpan.textContent = item.price ? `${item.price} جنيه` : "-";

    itemDiv.appendChild(nameSpan);
    itemDiv.appendChild(priceSpan);
    section.appendChild(itemDiv);
  });

  menuContainer.appendChild(section);
});
