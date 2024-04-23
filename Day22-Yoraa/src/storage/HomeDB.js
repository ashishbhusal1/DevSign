import { FaLaptop,FaWandMagicSparkles } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import {
  Asana,
  Box,
  Circle,
  Flower,
  Hubspot,
  Intercom,
  Meet,
  Teams,
  Zendex,
  Zoom,
  Post1,
  Post2
} from "./../scripts/Images";


export const HeroContent = {
  title: "Bringing companies and customers together, anywhere",
  description:
    "An awesome & powerful tools for your business. increase business revenue with enterprise-grade links built to acquire and engage customers.",
};
export const Menu = [
  { id: 1, title: "Product", link: "#" },
  { id: 2, title: "Company", link: "#" },
  { id: 3, title: "Pricing", link: "#" },
  { id: 4, title: "About", link: "#" },
  { id: 5, title: "Resources", link: "#" },
];
export const BenefitsCards = [
  {
    id: 1,
    title: "Lead customers to happiness",
    description:
      "Yoora Support helps you provide personalized support when and where customers need it, so customers stay happy.",
    icon: FaUserCircle,
  },
  {
    id: 2,
    title: "Support your support",
    description:
      "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
    icon: FaLaptop,
  },
  {
    id: 3,
    title: "Grow without growing pains",
    description:
      "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
    icon: FaWandMagicSparkles,
  },
];

export const ProductsCards = [
  {
    id: 1,
    name: "Sales",
    title: "Increase company revenue up to 65%",
    content: {
      title:
        "Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.",
      list: [
        "Close more deals with single-page contact management",
        "Enjoy one-click caling, call scripts and voicemail automation",
        "Track stages and milestones of your deals to keep the sales process on track",
      ],
    },
    image: "./images/products/product2.png",
  },
  {
    id: 2,
    name: "Marketing",
    title: "Marketing Automation",
    content: {
      title:
        "Market like the most successful companies in the world with Agile CRMs marketing automation software.",
      list: [
        "Marketing workflows with an esay drag-and-drop designer",
        "User our templates to create high converting, mobiles responsive landing pages",
        "Integrate scoail media easily into your marketing campaigns and contact views",
      ],
    },
    image: "./images/products/product2.png",
  },
  {
    id: 3,
    name: "Service",
    title: "Help Desk Software",
    content: {
      title:
        "Great customer support separates decent companies from excellent companies . A positive customer support expericence is crucially important piece of customer journey",
      list: [
        " Resolve evry issue in the shortest possible time with powerful ticketing features",
        "Categorize tickets according to the issue and riute them to the appropriate group (e.g sales or support)",
        "Enjoy at-a-glance views of important data-such as ticket priority-on your dashboard",
      ],
    },
    image: "./../images/products/product2.png",
  },
];

export const ServiceContents = [
  {
    id: 1,
    about: "SERVICE",
    heading: "How to Deliver a Successful  Product Launch",
    date: "05 Sep 2022,",
    name: " by Joshua Nash ",
    image:Post1
  },
  {
    id: 2,
    about: "SERVICE",
    heading:
      "What Makes an Authentic Employee Profile, and Why Does it Matter?",
    date: "07 Sep 2022,",
    name: " by Joshua Nash ",
    image:Post2
  },
];
export const RevenueContent = [
  {
    id: 1,
    sale: " $2.5 M ",
    salestit: "Generate sales",
    title:
      "Using Yoora CRM is one of the best decisions weve ever made. Weve seen our annual revenue explode, and the outlook just keeps getting sunnier.",
    name: "Nellie Foster",
    post: "Founder & CEO, Foster Business Strategies",
  },
  {
    id: 2,
    sale: " 45% ",
    salestit: "Grew revenue",
    title:
      "Yoora is created for sales people. Its the kind of software that just works. I dont have to try to make it work. It already does. It is just perfect.",
    name: "Lawrence Gibbs",
    post: "Digital Marketing Director",
  },
];
export  const Integrations = {
  group1: [
    {
      id: 1,
      name: "circle",
      image: Circle,
      class: "",
    },
    {
      id: 2,
      name: "hubspot",
      image: Hubspot,
      class: "big",
    },
    {
      id: 3,
      name: "zoom",
      image: Zoom,
      class: "big",
    },
    {
      id: 4,
      name: "meet",
      image: Meet,
      class: "",
    },
    {
      id: 5,
      name: "zendex",
      image:Zendex,
      class: "big",
    }
  ],
  group2: [
    {
      id: 1,
      name: "intercom",
      image:Intercom,
      class: "big1",
    },
    {
      id: 2,
      name: "box",
      image:Box,
      class: "",
    },
    {
      id: 3,
      name: "flower",
      image:Flower,
      class: "",
    },
    {
      id: 4,
      name: "asana",
      image:Asana,
      class: "big1",
    },
    {
      id: 1,
      name: "teams",
      image:Teams,
      class: "",
    }
  ],
};
export const TestimonialsContent = [
  {
    id: 1,
    title:
      "The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to bener orcanize and xees everything on track.",
    author: "Lola Ross",
    post: "Digital Marketing Director",
  },
  {
    id: 2,
    title:
      "It has made our sales department more effective and efficient. It's easy to use and it's constantly updated. It's easy to use and it's constantly updated.",
    author: "Daisy Phelps",
    post: "Speaker and Author, Lifeiseasy",
  },
  {
    id: 3,
    title:
      "Easy to use, reasonably priced. and ensures I don't drop the ball on following up with my leads!",
    author: "Andrew Wilkins",
    post: "Managing Director,Nirma Studio",
  },
];
export const FooterMenu1 = [
  { id: 1, title: "Company", link: "#" },
  { id: 2, title: "About", link: "#" },
  { id: 3, title: "Jobs", link: "#" },
  { id: 4, title: "Blog", link: "#" },
  { id: 5, title: "Pricing", link: "#" },
  { id: 6, title: "Careers", link: "#" },
];
export const FooterMenu2 = [
  { id: 1, title: "Product", link: "#" },
  { id: 2, title: "Sales Software", link: "#" },
  { id: 3, title: "Features", link: "#" },
  { id: 4, title: "Privacy and security", link: "#" },
  { id: 5, title: "Marketplace", link: "#" },
  { id: 6, title: "Status", link: "#" },
  { id: 7, title: "API", link: "#" },
];
export const FooterMenu3= [
  { id: 1, title: "Discover", link: "#" },
  { id: 2, title: "Patner Program", link: "#" },
  { id: 3, title: "Get our newsletter", link: "#" },
  { id: 4, title: "Sales Pipeline Course", link: "#" },
  { id: 5, title: "What is CRM?", link: "#" },
  { id: 6, title: "CRM Comparision", link: "#" },
  { id: 7, title: "Resources", link: "#" },
];
export const FooterMenu4 = [
  { id: 1, title: "Help Center", link: "#" },
  { id: 2, title: "Community", link: "#" },
  { id: 3, title: "Knowledge Based", link: "#" },
  { id: 4, title: "Academy", link: "#" },
  { id: 5, title: "Support", link: "#" },
];