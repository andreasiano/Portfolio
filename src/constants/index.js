import img1 from '../assets/Finance Tracker.png'
import img2 from '../assets/bailey.png'
import img3 from '../assets/Movie app.png'
import img4 from '../assets/Unity.png'
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
           title: "Unity 2D Game",
           img: img4,
           description:
             "This is a 2D game built with the Unity Game Engine using C# for game objects' behaviour",
           button: "See Repo",
           link: "https://github.com/andreasiano/2D-game",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 4,
           title: "Redux Movie App",
           img: img3,
           description:
             "Firebase Movie App built with React and Typescript provinding Movies and TvShows from TMDB API",
           button: "See Project",
           link:
             "https://movieapp-36b1a.web.app/",
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

