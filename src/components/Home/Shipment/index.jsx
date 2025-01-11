function Shipment() {
  return (
    <div className="relative">
      <img
        src="https://jaipurgolden.in/wp-content/uploads/2017/09/Jaipur-Golden-Slider-Img.jpg"
        alt=""
        className="w-full h-[50vh] lg:h-auto object-cover"
      />
      <div className="absolute text-center top-10 md:top-20 text-white w-full">
        <h1 className="text-2xl md:text-4xl font-bold">
          Transferring Round The Clock - <br />
          Round The Year, Across India
        </h1>
        <p className="mt-3 md:mt-5 text-sm md:text-base">
          Leading transport company in India
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center mt-5 md:mt-10 text-black">
          <button className="bg-yellow-400 py-2 px-5 md:py-2 md:px-10 rounded">
            Find a location
          </button>
          <button className="bg-yellow-400 py-2 px-5 md:py-2 md:px-10 rounded">
            Track Shipment
          </button>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-[60%] mx-auto rounded justify-center gap-5 lg:gap-10 mt-10 lg:mt-20 shadow-xl bg-white text-black p-5 lg:p-10">
          <div className="w-full lg:w-80 text-start">
            <h1 className="text-xl md:text-3xl font-bold">
              TRACK YOUR SHIPMENT
            </h1>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-row items-center gap-5 lg:gap-5">
              <h1 className="text-lg lg:text-2xl">Enter your:</h1>
              <div className="flex items-center gap-3">
                <input type="radio" name="shipmentType" id="waybill" />
                <label htmlFor="waybill" className="text-sm lg:text-xl">
                  Way bill
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="shipmentType" id="refNo" />
                <label htmlFor="refNo" className="text-sm lg:text-xl">
                  Ref no
                </label>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              <input
                className="border shadow-xl rounded focus:outline-none px-2 py-1 w-full lg:w-auto"
                type="text"
                placeholder="Enter shipment number"
              />
              <button className="bg-yellow-400 w-full p-2 lg:w-[40%] lg:py-2 lg:px-5 lg:py-2 lg:px-10 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipment;
