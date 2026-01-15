import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";

const CaseStudy = () => {
  const swiperRef = useRef(null);

  const slides = [
    { name: "Information Overload", info: "Citizens are bombarded ...", img: "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Gemini_Generated_Image_q5b6u9q5b6u9q5b6.png?updatedAt=1762833273200" },
    { name: "No Geographic Context", info: "News articles rarely include ...", img: "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Gemini_Generated_Image_q9r4poq9r4poq9r4.png?updatedAt=1762833263209" },
    { name: "Slow Emergency Response", info: "During crises, every second counts ...", img: "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Gemini_Generated_Image_xbos3jxbos3jxbos.png?updatedAt=1762833227509" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white pb-5 bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)]">

      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0 w-[90%] md:w-[80%] mx-auto py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left uppercase">
          The <span className="text-[#E0FF00]">Problem</span> We Solve
        </h1>

        <p className="text-center md:text-left max-w-md text-gray-300">
          Traditional news lacks geographic context. When emergencies strike,
          finding relevant local information is slow, scattered, and frustrating.
        </p>
      </div>

      <div className="w-[80%] h-0.5 bg-[#E0FF00] mx-auto my-7"></div>

      {/* Swiper */}
      <div className="w-full max-w-[1200px] px-4">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          grabCursor
          centeredSlides
          spaceBetween={30}
          speed={800}
          pagination={{ clickable: true }}
          modules={[Pagination, Mousewheel]}
          className="rounded-xl"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1.1 },
            1024: { slidesPerView: 1.4 },
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row bg-[url(./assets/homepage-bg.webp)] h-auto md:h-[400px] rounded-xl overflow-hidden">

                {/* Text */}
                <div className="flex flex-col justify-center w-full md:w-1/2 p-6">
                  <h1 className="text-2xl md:text-3xl font-bold mb-3">{slide.name}</h1>
                  <p className="text-sm md:text-base text-gray-200 mb-5">{slide.info}</p>

                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-[#E0FF00] hover:text-black transition">
                    Read Case Study
                  </button>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <img src={slide.img} alt={slide.name} className="w-full h-60 md:h-full object-cover" />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mt-10 flex-wrap justify-center">
        <button
          className="bg-[#E0FF00] px-6 py-2 rounded-md text-black font-semibold hover:bg-amber-400 transition-all"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          Prev
        </button>
        <button
          className="bg-[#E0FF00] px-6 py-2 rounded-md text-black font-semibold hover:bg-amber-400 transition-all"
          onClick={() => swiperRef.current?.slideNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CaseStudy;
