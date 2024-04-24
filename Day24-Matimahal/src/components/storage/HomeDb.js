import {
  Call,
  Img10,
  Img11,
  Img12,
  Img13,
  Img2,
  Img4,
  Img5,
  Img8,
  Img9,
  Location,
  Right,
  Up,
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
