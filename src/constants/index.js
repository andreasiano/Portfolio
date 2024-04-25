import img1 from '../assets/kitsune.png'
import img2 from '../assets/bailey.png'
import img3 from '../assets/Travel vibes.png'
import img4 from '../assets/Sorrentino.png'
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
             "Bailey World is a digital haven meticulously curated for lovers of science fiction literature.",
           button: "See Web App",
           link:
             "https://bailey-world.vercel.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 3,
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
           id: 4,
           title: "Photography Portfolio",
           img: img4,
           description:
             "The Photography Showcase is a digital gallery meticulously crafted to showcase the beauty and artistry of visual storytelling",
           button: "See Project",
           link: "https://sorrentinoportfolio.netlify.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
       ];

