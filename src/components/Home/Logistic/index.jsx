function Logistic() {
    return (
      <div className="mt-20 flex flex-col lg:flex-row m-auto gap-10 lg:gap-40 w-full lg:w-[60%] p-5 lg:p-10">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full object-contain"
            src="https://jaipurgolden.in/wp-content/uploads/2017/09/map.png.webp"
            alt="Map"
          />
        </div>
        <div className="w-full text-start lg:text-left">
          <div className="border-4 border-yellow-400 w-1/2 lg:mx-0"></div>
            <h1 className="text-2xl md:text-4xl font-semibold mt-5">
                FIND YOUR LOGISTICS LOCATIONS
            </h1>
          <p className="mt-5 text-sm md:text-base">
            We offer a National Logistics with our offers and distribution
            facilities, staffed by dedicated teams of experts.
          </p>
          <button className="mt-10 p-2 px-5 bg-yellow-400 text-sm md:text-base">
            FIND JDL LOCATION NEAR YOU
          </button>
        </div>
      </div>
    );
  }
  
  export default Logistic;
  