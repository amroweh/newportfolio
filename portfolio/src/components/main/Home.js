import Showcase from "./Showcase";
import showcaseImage from "../../Assets/Images/pp_square.png"
import Projects from "./Projects";
import Testimony from "./Testimony";
import testimonyImage from "../../Assets/Images/testimonySquare.jpg"
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
        <Showcase showcaseImage={showcaseImage}/>
        <Projects />
        <Testimony testimonyImage={testimonyImage} />
        <Contact />
    </div>    
  )
}

export default Home
