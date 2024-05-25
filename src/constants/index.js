import img1 from '../assets/kitsune.png'
import img2 from '../assets/bailey.png'
import img3 from '../assets/Travel vibes.png'
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
           title: "Kitsune's Veil",
           img: img1,
           description:
             "Kitsune's Veil is a personal project born from a deep-seated passion for East Asian cultures.",
           button: "See Case Study",
           link: "https://www.figma.com/file/K6fpi5nE9pmCCJ1qjWzi0V/Kitsune's-Veil?type=design&node-id=552%3A5&mode=design&t=U6K8DK10f4iVwOgy-1",
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
             "CRIF is a global company specialized on microtransactions, I helped them to develop one of their digital product...",
           button: "See Project",
           link: "https://crif.com/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 4,
           title: "Travel Vibes",
           img: img3,
           description:
             "Travel Vibes is a mobile companion designed to ignite wanderlust and fuel adventures",
           button: "See Case Study",
           link:
             "https://www.figma.com/file/bohhBEUAqAzkZO6bV7XcxC/Travel-Mobile-App?type=design&node-id=512%3A19&mode=design&t=pkqywCcFrmQFpAXm-1",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 5,
           title: "ST Web Portal",
           img: img6,
           description:
             "ST Microeletronics is a global company specialized on semiconductors, I helped them build their web portal by using React and Redux..",
           button: "See Project",
           link: "https://www.st.com/content/st_com/en.html",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 6,
           title: "Skeam Game Hub",
           img: img5,
           description:
             "Skeam GameHub is an ReactJs Web App that gets its data from the RAWG API. ",
           button: "See Web App",
           link: "https://skeam-app.vercel.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
       ];

