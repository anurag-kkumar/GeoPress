import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="text-white pt-20 pb-24 md:pt-72 md:pb-52">
      
      {/* HERO TEXT */}
      <div className="max-w-250 px-4 m-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase leading-tight">
          Empowering Safety with WITH
        </h1>

        <div className="bg-[#D4F600] inline-block px-4 mt-4">
          <span className="text-black text-4xl md:text-6xl lg:text-8xl font-bold">
            TECHNOLOGY
          </span>
        </div>
      </div>

      {/* ANIMATED LINE */}
      <div className="w-1 h-17.5 md:h-22.5 mt-20 m-auto mb-6">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: [0, 100, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="h-1 bg-[#D4F600] rounded-full"
        />
      </div>

      {/* NEWS + CERTIFICATIONS */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 px-4">

        {/* Text Block */}
        <div className="text-xl md:text-2xl font-bold flex flex-col gap-1 text-center md:text-left uppercase bg-[#0000004a] max-md:bg-transparent">
  <span>Certified by</span>
  <p>Trusted News Sources</p>
</div>


        {/* Logos */}
        <div className="flex gap-6 md:gap-10 items-center bg-[#0000004a] max-md:bg-transparent">
          
          {/* Dainik Bhaskar */}
          <div className="flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/dyp7q5hzjq/Screenshot%202025-11-08%20132122.png?updatedAt=1762588414408"
              alt=""
              className="w-12.5 md:w-13.75"
            />
            <p className="text-center text-sm md:text-base">Dainik Bhaskar</p>
          </div>

          {/* TOI */}
          <div className="flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/dyp7q5hzjq/Screenshot%202025-11-08%20132054.png?updatedAt=1762588414132"
              alt=""
              className="w-16.25 md:w-18.75"
            />
            <p className="text-center text-sm md:text-base">TOI</p>
          </div>

          {/* BBC */}
          <div className="flex flex-col items-center">
            <img
              src="https://i0.wp.com/hindupost.in/wp-content/uploads/2023/02/bbc-logo-red-0.jpeg?resize=696%2C464&ssl=1"
              alt=""
              className="w-16.25 md:w-18.75 rounded"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
