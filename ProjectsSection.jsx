import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Kafene clone",
    img: "/kafene.png",
    link: "https://dashing-pothos-b6046b.netlify.app/index.html",
    git: "https://github.com/GaneshAher1997/kafene",
    about:
      "A this web Application user store Orders Products and Customer's Data  Features:SignUp/LogIn Different filters for the user's Best experience ",
    stacks: [
     // <SiReact className={styles.stackIcon} />,
      // <SiNodedotjs className={styles.stackIcon} />,
      // <SiExpress className={styles.stackIcon} />,
      // <SiMongodb className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },


  {
    name: "Shopelane clone",
    img: "/Shopelane.png",
    link: "https://melodious-elf-03eef5.netlify.app/",
    git: "https://github.com/GaneshAher1997/shoplaneFinalPoroject",
    about:
      "This is a E-Commerce web site which specializes in selling cloths and Styling Accessories The web site user buy add to cart and Easily make payment    ",
    stacks: [
     // <SiReact className={styles.stackIcon} />,
      // <SiNodedotjs className={styles.stackIcon} />,
      // <SiExpress className={styles.stackIcon} />,
      // <SiMongodb className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },



  {
    name: "Lumen5.com clone",
    img: "Lumen5.jpeg",
    link: "https://upbeat-saha-f5b7a4.netlify.app/index.html",
    git: "https://github.com/spaswan141/lumen5",
    about:
      " This is e-commerce Application for making online videos user can easily logIn and make videos .The web site user easily  Add Update and Delete video.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
 
  {
    name: "Kohls.com clone",
    img: "Kohls.jpeg",
    link: "https://bucolic-parfait-af50d8.netlify.app/",
    git: "https://github.com/GaneshAher1997/kohl-s",
    about:
    "A web application or shopping branded and newly launch cloths.Features:SignUp/LogIn page Category wise cloths. Different filters for the user's best Experience ",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  }
  
  // {
  //   name: "Contio",
  //   img: "/contio.png",
  //   link: "https://contio.netlify.app/",
  //   git: "https://github.com/chandan1499/contio",
  //   about:
  //     "Contio is an online portal where anyone can ask there doubts and anyone can become a mentor to help their peers using a built-in chat app",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiNodedotjs className={styles.stackIcon} />,
  //     <SiExpress className={styles.stackIcon} />,
  //     <SiMongodb className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },

 
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
