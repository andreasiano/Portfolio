import img1 from '../assets/Finance Tracker.png'
import img2 from '../assets/bailey.png'
import img3 from '../assets/shopping_cart.png'
import img4 from '../assets/CRIF.png'
import img5 from '../assets/Game Hub.png'
import img6 from '../assets/ST.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export const navLinks = [
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const imgData = [
         {
           id: 1,
           title: "Context API Finance Tracker",
           img: img1,
           description:
             "A Context API React App to track expenses.",
           button: "See Project",
           link: "https://finance-tracker-brown.vercel.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 2,
           title: "Bailey World",
           img: img2,
           description:
             "Bailey World is a ReactJs Vite Web Application built with Context API Provider.",
           button: "See Web App",
           link:
             "https://bailey-world.vercel.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 3,
           title: "CRIF Portal",
           img: img4,
           description:
             "CRIF is a global company specialized on microtransactions, I helped them to develop one of their digital products...",
           button: "See Web Portal",
           link: "https://crif.com/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 4,
           title: "Redux Toolkit Project",
           img: img3,
           description:
             "A Redux Toolkit shopping Cart with various functionalities ",
           button: "See Project",
           link:
             "https://redux-shopping-cart-wine-five.vercel.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 5,
           title: "ST Web Portal",
           img: img6,
           description:
             "ST Microeletronics is a global company specialized on semiconductors, I helped them build their web portal by using ReactJs and Redux..",
           button: "See Web Portal",
           link: "https://www.st.com/content/st_com/en.html",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 6,
           title: "Skeam Game Hub",
           img: img5,
           description:
             "Skeam GameHub is an ReactJs Web Application that gets its data from the RAWG API. ",
           button: "See Web App",
           link: "https://skeam-app.vercel.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
       ];

