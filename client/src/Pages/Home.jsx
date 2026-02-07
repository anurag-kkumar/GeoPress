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
    <div className=" bg-black w-full min-h-screen overflow-hidden">
  
      {/* home imge  */}
   <div
  className="
    absolute
    top-28
    right-0
    w-[45%]
    h-full
    bg-no-repeat
    bg-contain
    bg-right
    opacity-80
    pointer-events-none
    z-0

    max-lg:w-[60%]
    max-md:w-[80%]
    max-md:top-40
    max-md:opacity-40
  "
  style={{
    backgroundImage:
      "url('https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/612c9d68f458c4430acfb576_globe-menu-removebg-preview.png')",
  }}
/>



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