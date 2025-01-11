import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            REGISTERED OFFICE
          </h2>
          <p className="text-gray-600 font-medium mb-2">
            Shree Om Express Cargo Private Limited
          </p>
          <p className="text-gray-600 mb-4">
            Shop 17-18, IInd floor, Shyam tower Sikar House Jaipur (Rajasthan)
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Phones:</span> +91 9414041310
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">GST IN:</span> 08ANWPS2214D2ZT
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">E-Mail:</span>{" "}
            customercare@jaipurgolden.in
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Website:</span>{" "}
            <a
              href="http://www.jaipurgolden.in"
              className="text-blue-500 hover:underline"
            >
              www.shreeomexpresscargo.in
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Docket No. (if any)"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
