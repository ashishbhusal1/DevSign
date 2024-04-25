import {
  Call,
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Location,
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5,
  Menu6,
  Menu7,
  Menu8,
  MenuPlate1,
  MenuPlate2,
  MenuPlate3,
  MenuPlate4,
  Right,
  Up,
  User1,
  User2,
  User3,
  User4,
} from "../../Scripts/Images";

export const HeaderMenu = [
  { id: 1, title: "Home", link: "/", class: "a-active a-exact-active" },
  { id: 2, title: "Menu", link: "/menu", class: "" },
  { id: 3, title: "Gallery", link: "/gallery", class: "" },
  { id: 4, title: "About Us", link: "/about", class: "" },
  { id: 5, title: "Contact Us", link: "/contact", class: "" },
  { id: 6, title: "Order Online -", link: "tel:+977-9802974990", class: "" },
];
export const HeroContent = [
  {
    title:
      "Our restaurant serves healthy food from Indian and Nepalesecuisines.",
    description:
      "Our restaurant offers a distinctive blend of Nepalese, Indian, and Japanese culinary traditions with contemporary tastes and refined style.",
    alt: "Check Our Menu",
  },
];
export const StoryImages = [
  { id: 1, image: Img2 },
  { id: 2, image: Img4 },
  { id: 3, image: Img5 },
  { id: 4, image: Img8 },
];
export const StoryContent = [
  {
    title: "Our Restaurant",
    description: [
      "Our restaurant welcomes you any time of the day or night, for breakfast, lunch, or dinner. We offer a variety of delicious and healthy dishes from Nepalese and Indian cuisines in our menu. Our goal is to serve Nepalese and Indian food in Japan, with years of hard work and dedication. We strive to provide the best food and service in town and make our customers happy and satisfied.",
      " Our restaurant offers a distinctive blend of Nepalese, Indian, and Japanese culinary traditions with contemporary tastes and refined style.",
    ],
    alt: "More About us",
  },
];
export const HomeGallery = [
  { id: 1, image: Img12, class: "larger" },
  { id: 2, image: Img13, class: "larger" },
  { id: 3, image: Img10, class: "smaller" },
  { id: 4, image: Img11, class: "smaller" },
  { id: 5, image: Img9, class: "smaller" },
];
export const FaqContent = [
  {
    id: 1,
    title: "How can I make a reservation?",
    image: Up,
    description:
      "You can make a reservation online by clicking the Order Online button on our homepage, or by calling us at +81 49-256-7261. Please note that we require a credit card to secure your reservation, and we have a 24-hour cancellation policy.",
    active: true,
  },
  {
    id: 2,
    title: "Do you offer any vegetarian, vegan, or gluten-free options?",
    image: Right,
    description:
      "You can make a reservation online by clicking the Order Online button on our homepage, or by calling us at +81 49-256-7261. Please note that we require a credit card to secure your reservation, and we have a 24-hour cancellation policy.",
    active: false,
  },
  {
    id: 3,
    title: "Do you have a dress code?",
    image: Right,
    description:
      "You can make a reservation online by clicking the Order Online button on our homepage, or by calling us at +81 49-256-7261. Please note that we require a credit card to secure your reservation, and we have a 24-hour cancellation policy.",
    active: false,
  },
  {
    id: 4,
    title: "Do you offer catering or private events?",
    image: Right,
    description:
      "You can make a reservation online by clicking the Order Online button on our homepage, or by calling us at +81 49-256-7261. Please note that we require a credit card to secure your reservation, and we have a 24-hour cancellation policy.",
    active: false,
  },
];
export const OrderContent = [
  {
    title: "ORDER ONLINE",
    description:
      "No matter what the time is, day or night, whether for breakfast, lunch or dinner, we are open to serve you daily and nightly with mouthwatering and toothsome dishes with various food items in our menu.",
    alt: "Order Online",
  },
];

export const FooterMenu = [
  { id: 1, title: "Home", link: "/", class: "a-active a-exact-active" },
  { id: 2, title: "Menu", link: "/menu", class: "" },
  { id: 3, title: "Gallery", link: "/gallery", class: "" },
  { id: 4, title: "About Us", link: "/about", class: "" },
  { id: 5, title: "Contact Us", link: "/contact", class: "" },
  ,
];
export const FooterContent = [
  {
    id: 1,
    title: "Saitama ken Fujimino shi Kami-fukuoka 3-6-7 -102, Japan",
    image: Location,
  },
  {
    id: 2,
    title: "+81 49-256-7261",
    image: Call,
  },
];

export const InternalHeroContent = [
  {
    class:"iheroimage meta-menu",
    title: "Explore the Flavors of Nepal and India with Our Lunchtime Menu",
    description:
      "Our brief menu features some of the most popular Nepali dishes, prepared with a blend of Nepali and Indian Kitchen-style flavors. Enjoy our lunchtime selection of dishes, crafted by our experienced chefs.",
  },
];

export const MenuContent = [
  {
    key: "1",
    class: "wrapper imiwraper",
    title: "Appetizer",
    heading: [
      "蒸し餃子6P Momo x6",
      "ポテトフライ French Fries",
      "ピリ辛チキン焼きそば/Chicken Chow Mein",
    ],
    paragraph: [
      "ネパール家庭料理 ネパールの餃子です Nepal home recipe, Nepal-style gyoza dumplings.",
      "ポテトフライ French Fries",
      "ネパール家庭料理 タンドリーチキン入ったのスパイシー焼きそばです。 Nepal home recipe, spicy yakisoba with tandoori chicken.",
    ],
    image: MenuPlate1,
  },
  {
    key: "2",
    class: "wrapper imiwraper imiwrapright",
    title: "Tandoori",
    heading: [
      "タンドリーチキン Tandoori Chicken",
      "骨なしタンドリー Chicken Tikka",
      "スパイシーつくね Seekh Kebab",
    ],
    paragraph: [
      "骨有り鶏もも肉をスパイスに一晩漬け込み釜で焼き上げました。 Chicken thighs on the bone marinated overnight in spices and grilled in our oven.",
      "食べやすい骨の無い 鶏もも肉をスパイスに一晩漬け込み釜で焼き上げました。 Easy to eat, boneless chicken marinated overnight in spices and grilled in our oven.",
      "鶏挽肉をスパイスと混ぜ合わせてつくねのように仕上げてあります。 Minced chicken & spices mixed in meatballs.",
    ],
    image: MenuPlate2,
  },
  {
    key: "3",
    class: "wrapper imiwraper",
    title: "Appetizer",
    heading: [
      "蒸し餃子6P Momo x6",
      "ポテトフライ French Fries",
      "ピリ辛チキン焼きそば/Chicken Chow Mein",
    ],
    paragraph: [
      "ネパール家庭料理 ネパールの餃子です Nepal home recipe, Nepal-style gyoza dumplings.",
      "ポテトフライ French Fries",
      "ネパール家庭料理 タンドリーチキン入ったのスパイシー焼きそばです。 Nepal home recipe, spicy yakisoba with tandoori chicken.",
    ],
    image: MenuPlate3,
  },
  {
    key: "4",
    class: "wrapper imiwraper imiwrapright",
    title: "Tandoori",
    heading: [
      "タンドリーチキン Tandoori Chicken",
      "骨なしタンドリー Chicken Tikka",
      "スパイシーつくね Seekh Kebab",
    ],
    paragraph: [
      "骨有り鶏もも肉をスパイスに一晩漬け込み釜で焼き上げました。 Chicken thighs on the bone marinated overnight in spices and grilled in our oven.",
      "食べやすい骨の無い 鶏もも肉をスパイスに一晩漬け込み釜で焼き上げました。 Easy to eat, boneless chicken marinated overnight in spices and grilled in our oven.",
      "鶏挽肉をスパイスと混ぜ合わせてつくねのように仕上げてあります。 Minced chicken & spices mixed in meatballs.",
    ],
    image: MenuPlate4,
  },
];
export const MenuGallery = [
  { id: 1, image: Menu1 },
  { id: 2, image: Menu2 },
  { id: 3, image: Menu3 },
  { id: 4, image: Menu4 },
  { id: 5, image: Menu5 },
  { id: 6, image: Menu6 },
  { id: 7, image: Menu7 },
  { id: 8, image: Menu8 },
];
export const GalleryContent = [
  {
    title:
      " We came all the way from Nepal to start a small business in Japan, with a vision of offering our customers a unique and delicious food experience. We opened Matimahal Restaurant & Bar, where we have enjoyed serving our wonderful customers with the help of our staff, chefs, and supporters. We are committed to working and serving with passion as always.",
    description:
      " Below you can see some pictures of our Matimahal Restaurant family and a glimpse of our restaurant.",
  },
];
export const GalleryImage = [
  { id: 1, image: Img1 },
  { id: 2, image: Img2 },
  { id: 3, image: Img3 },
  { id: 4, image: Img4 },
  { id: 5, image: Img5 },
  { id: 6, image: Img6 },
  { id: 7, image: Img7 },
  { id: 8, image: Img8 },
  { id: 9, image: Img9 },
  { id: 10, image: Img10 },
  { id: 11, image: Img11 },
  { id: 12, image: Img12 },
];
export const InternalHeroContent1 = [
  {
    class:"iheroimage meta-gallery",
    title: "Matimahal Restaurant & Bar Gallery",
    description:
      "Welcome to our gallery, where you can see the photos of our restaurant, our dishes, and our happy customers. Browse through our gallery and get a glimpse of the cozy atmosphere, the mouthwatering food, and the friendly service that await you at our restaurant.",
  },
];
export const InternalHeroContent2 = [
  {
    class:"iheroimage meta-about",
    title: "We have over 10+ years of experience",
    description:
      "We wanted to create a place where people can enjoy the authentic flavors of these two countries, as well as the fusion of their culinary traditions. Our chefs have years of experience in preparing Nepali and Indian dishes, using fresh ingredients and spices.",
  },
];
export const AboutContent = [
  "Situated in Saitama ken Fujimino shi Kami-fukuoka 3-6-7 -102, Japan - Matimahal serves Japanese contemporary cuisine with Indian and Nepalese influences. Matimahal serves mouthwatering & appetizing menus and lives up to a well-earned reputation as a destination restaurant.",
  "Matimahal Restaurant was established with the goal of serving Nepalese and Indian cuisine in Japan. We look forward to providing healthy meals in town with wonderful service and putting a lifelong grin on our clients' faces, based on our years of expertise and hardship.",
  "Our menu features foods that our chef himself has selected. We have 'Tandoori Chicken' that is very soft, juicy, moist, and amazingly delicious. We also offer 'Seekh Kabab', which are soft and succulent kababs seasoned with ginger, garlic, green chili pepper, powdered chili, garam masala, lemon juice, cilantro, and mint leaves. Our 'Chicken Malai' is simply the best, coated in a wet rub of yogurt, hot spices, and fresh herbs.",
  "As a result, our menu expands to also include dishes such as Dumplings, Spare Ribs, Spring Rolls, Dim Sum, Noodles, and more.",
];
export const RevContent = [
  {
    title: "We value our customers feedback!",
    description:
      "Read what our customers have to say about our food, service, and atmosphere. Your opinion matters to us and helps us improve our restaurant.",
  },
];
export const Rev1 = [
  {
    id: 1,
    image: User1,
    title: "December 2023",
    description:
      "長崎県で一番人気なお店だった、ナン又カレーも美味しいかったし、スタッフも優しかった、又行きたい.",
  },
  {
    id: 2,
    image: User2,
    title: "February 2023",
    description:
      "Pretty busy around lunchtime. But the food is excellent. Indian people owning the place and cooking. So that's a good sign always. Waitress spoke japanese and English.",
  },
];
export const Rev2 = [
  {
    id: 1,
    image: User3,
    title: "August 2023",
    description:
      "What delicious and inexpensive food! It’s super close to the Peace park too. It’s a great choice.",
  },
  {
    id: 2,
    image: User4,
    title: "September 2023",
    description:
      "カレーとナンが美味しいです。ランチに比べディナーは高い方。ビリヤニは美味しくないです。オーナー変わって味落ちた。日本語は上手じゃないのではっきり繰り返して意思を伝えることが大事",
  },
];
export const InternalHeroContent3 = [
  {
    class:"iheroimage meta-contact",
    title:
      "You can contact us via email, phone number or social medias as provided",
    description:
      "If you have any enquiries regarding feedback, media, and general questions you can fill-up the online form below.",
  },
];
export const Contact = [
  {
    paragraph: [
      "We came all the way from Nepal to start a small business in Japan,with a vision of offering our customers a unique and delicious food experience. We opened Matimahal Restaurant &amp; Bar, where we have enjoyed serving our wonderful customers with the help of our staff, chefs, and supporters. We are committed to working and serving with passion as always.",
      "You can contact us via email, phone number or social medias as provided. If you have any enquiries regarding feedback, media, and general questions you can fill-up the online form below.",
    ],
  },
];
export const ContactInfo = [
  {
    heading: "Matimahal",
    class:"matimahal",
    paragraphs: [
      "Saitama ken Fujimino shi",
      "Kami-fukuoka 3-6-7 -102, Japan",
      "Postal 356-0004",
    ],
  },
  {
    heading: "Hours",
    class:"hours",
    paragraphs: [
      "Sunday — Saturday: 11 AM — 3 PM",
      "Sunday — Saturday: 5 PM - 10 PM",
    ],
  },
  {
    heading: "Contact Us",
    class:"contact",
    paragraphs: ["+81 49-256-7261"],
  },
];
