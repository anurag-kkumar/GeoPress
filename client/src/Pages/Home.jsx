import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import { useState } from "react";
import Menu from "../Components/Menu";
import Aboutus from "../Components/Aboutus";
import Catogories from "../Components/Catogories";
import Feature from "../Components/Feature";
import CaseStudy from "../Components/CaseStudy";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
function Home() {

  const[ismenuopen,setismenuopen]=useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="relative bg-[url(https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/ss.jpg)] w-full h-full overflow-hidden max-md:bg-[url(https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-25%20190020.png)]">
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav ismenuopen={ismenuopen} setismenuopen={setismenuopen}
         setLoggedIn={setLoggedIn} 
        />
      </div>

      <div className=""> 
        <Hero />
      </div>

      {ismenuopen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
          <Menu setismenuopen={setismenuopen} />
        </div>
      )}

      <Aboutus ></Aboutus>
      <Catogories></Catogories>
      <Feature></Feature>
      <CaseStudy></CaseStudy>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
   
  )
}

export default Home;