function Aboutus() {
  return (
    <div className="pb-20 bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)] w-full h-full bg-cover bg-center">
      
      {/* ABOUT SECTION */}
      <div className="text-white flex flex-wrap justify-center md:justify-around gap-10 pt-40 px-4">

        {/* LEFT TEXT SECTION */}
        <style>
          {`
            .text-stroke {
              -webkit-text-stroke: 2px white;
              text-stroke: 2px white;
            }
          `}
        </style>

        <div className="flex flex-col gap-8 max-w-xl">
          <div className="flex items-center gap-2">
            <img
              src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C/path%3E%3C/svg%3E"
              width="12"
              height="12"
            />
            <p className="font-bold">About us</p>
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Get to Know{" "}
              <span className="text-[#D4F600]">GeoPress Tech</span>
            </h1>

            <img
              src="https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/658511472b9c762a8eb177bb_Scribble%203.svg"
              alt=""
              className="mt-3"
            />
          </div>
        </div>

        {/* RIGHT PARAGRAPH SECTION */}
        <div className="max-w-xl">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            We’re here to redefine the way people engage with news, focusing on
            awareness and fostering a safer digital culture. Our dedicated team 
            is passionate about building a platform where people and technology 
            protect communities together.
          </p>
        </div>
      </div>

      {/* STATS SECTION */}
<div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-6 md:px-20">

  {/* CARD 1 */}
  <div className="flex flex-col p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
    <h1 className="text-transparent text-stroke font-black text-6xl md:text-8xl">
      12,45+
    </h1>
    <div className="w-full h-0.5 bg-[#D4F600] my-4"></div>

    <div className="flex items-center gap-2 text-gray-300 text-lg">
      <img
        src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C/path%3E%3C/svg%3E"
        width="12"
        height="12"
      />
      incidents analyzed
    </div>
  </div>

  {/* CARD 2 */}
  <div className="flex flex-col p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
    <h1 className="text-transparent text-stroke font-black text-6xl md:text-8xl">
      3,200+
    </h1>
    <div className="w-full h-0.5 bg-[#D4F600] my-4"></div>

    <div className="flex items-center gap-2 text-gray-300 text-lg">
      <img
        src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C/path%3E%3C/svg%3E"
        width="12"
        height="12"
      />
      mapped locations
    </div>
  </div>

  {/* CARD 3 */}
  <div className="flex flex-col p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
    <h1 className="text-transparent text-stroke font-black text-6xl md:text-8xl">
      90%
    </h1>
    <div className="w-full h-0.5 bg-[#D4F600] my-4"></div>

    <div className="flex items-center gap-2 text-gray-300 text-lg">
      <img
        src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C/path%3E%3C/svg%3E"
        width="12"
        height="12"
      />
      real-time accuracy
    </div>
  </div>

</div>

    </div>
  );
}

export default Aboutus;
