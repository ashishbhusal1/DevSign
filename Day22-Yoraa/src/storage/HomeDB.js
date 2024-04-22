import {  FaLaptop} from "react-icons/fa";

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
    // icon: FaCircleUser,
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
    // icon: FaWandMagicSparkles,
  },
];

export const ProductsCards=[{
  id:1,
  name:'Sales',
  title:'Increase company revenue up to 65%',
  content:{
    title:'Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.',
    list:[
      'Close more deals with single-page contact management',
      'Enjoy one-click caling, call scripts and voicemail automation',
      'Track stages and milestones of your deals to keep the sales process on track',
    ],
  },
  image:'./images/products/product2.png'
},
{
  id:2,
  name:'Marketing',
  title:'Marketing Automation',
  content:{
    title:'Market like the most successful companies in the world with Agile CRMs marketing automation software.',
    list:[
      'Marketing workflows with an esay drag-and-drop designer',
      'User our templates to create high converting, mobiles responsive landing pages',
      'Integrate scoail media easily into your marketing campaigns and contact views',
    ],
  },
  image:'./images/products/product2.png'
},
{
  id:3,
  name:'Service',
  title:'Help Desk Software',
  content:{
    title:'Great customer support separates decent companies from excellent companies . A positive customer support expericence is crucially important piece of customer journey',
    list:[
      ' Resolve evry issue in the shortest possible time with powerful ticketing features',
      'Categorize tickets according to the issue and riute them to the appropriate group (e.g sales or support)',
      'Enjoy at-a-glance views of important data-such as ticket priority-on your dashboard',
    ],
  },
  image:'./../images/products/product2.png'
}]
