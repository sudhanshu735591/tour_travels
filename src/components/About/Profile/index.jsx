import React, { useState } from "react";
const VisionAndMission = () => {
  const [text, setText] = useState("Company Profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:block w-full sm:w-1/4 bg-white shadow-md`}
      >
        <ul className="space-y-4 text-gray-600 text-lg font-medium p-8">
          <li
            onClick={(e) => {
              setText(e.target.innerText);
              setIsSidebarOpen(false);
            }}
            className={`${
              text === "Company Profile" &&
              "border-l-4 border-yellow-500 pl-2 text-black font-bold"
            }`}
          >
            Company Profile
          </li>
          <li
            onClick={(e) => {
              setText(e.target.innerText);
              setIsSidebarOpen(false);
            }}
            className={`${
              text === "Success Story" &&
              "border-l-4 border-yellow-500 pl-2 text-black font-bold"
            }`}
          >
            Success Story
          </li>
          <li
            onClick={(e) => {
              setText(e.target.innerText);
              setIsSidebarOpen(false);
            }}
            className={`${
              text === "Vision and Mission" &&
              "border-l-4 border-yellow-500 pl-2 text-black font-bold"
            }`}
          >
            Vision and Mission
          </li>
          <li
            onClick={(e) => {
              setText(e.target.innerText);
              setIsSidebarOpen(false);
            }}
            className={`${
              text === "Group Companies" &&
              "border-l-4 border-yellow-500 pl-2 text-black font-bold"
            }`}
          >
            Group Companies
          </li>
        </ul>
      </aside>
      {/* Dropdown Button for Small Screens */}
      <button
        className="sm:hidden bg-yellow-500 text-white px-4 py-2 m-4 rounded-md self-start"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Menu" : `${text}`}
      </button>
      {/* Main Content */}
      <main className="flex-1 p-8 bg-white">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="inline-block border-l-8 border-yellow-500 h-6 mr-2"></span>
            {text}
          </h1>
          {text === "Company Profile" && (
            <div>
              <p className="text-gray-700 leading-8 mb-4">
                Goods transport in India has become more specialized than ever
                before. With technology changing the way business is done, we at
                Jaipur Golden too have introduced new concepts and products for
                taking on the new challenges and demands and meeting the
                expectations of our customers. With the economy opening up, and
                foreign companies doing more business in India, Jaipur Golden is
                all geared up to meet new challenges.
              </p>
              <p className="text-gray-700 leading-8 mb-4">
                The Company had a humble beginning in 1948 from a small khokha
                in Lahori Gate, Delhi, and has now transformed into a leading
                transport company in India having a network of 350 branches
                across the country, With 300 associates spread all over the
                country, we endeavor to serve our customers with unparalleled
                speed, safety, and service, which is also the motto of our
                company. Once your shipment arrives at any of our terminals, it
                becomes our responsibility to deliver it to the destination
                within the guaranteed time.
              </p>
              <p className="text-gray-700 leading-8">
                The history of the company dates back to pre-partition days.
                Before partition, Shri S. Makhan Singh, Shri Tulsi Dass Khanna,
                Shri Sardari Lal Bahri, and Shri Murari Lal Bahri, were running
                the fleet of buses in Sargodha (now in Pakistan). After
                partition, they shifted to India and started afresh their
                transportation business in the year 1948 from Lahori Gate, Delhi
                as a small venture with 2 trucks. The hard work, determination,
                and endeavors of the founding fathers soon bore fruit and
                established the name of Jaipur Golden as one of the most trusted
                names in the transportation business.
              </p>
            </div>
          )}
           {text === "Success Story" && (
            <div>
              <p className="text-gray-700 leading-8 mb-4">
                The extensive network of the company today covers 300 associates
                and 350 branches across the country. More than 1000 all-weather
                vehicles and extensive network of hubs and warehouses covering
                more than 3 million square feet, keep the goods extremely safe
                and secure. Operating 24×7, 365 days a year, we serve a customer
                base across different domains in India. At a turnover of more
                than 400 crores, we endeavour to serve our customers with speed,
                safety and quality services that are above par.{" "}
              </p>
              <p className="text-gray-700 leading-8 mb-4">
                We are committed to doing whatever it takes to deliver. Each one
                of us takes the responsibility of our own work, our teams and of
                the area of the organization we are accountable for.{" "}
              </p>
              <p className="text-gray-700 leading-8">
                Our customers are at the helm of our existence at Jaipur Golden.
                We are an agile and proactive organization, responsive to the
                present and future needs of our customers. Ensuring Customer
                Satisfaction is the reason for our many decades of success in
                the transportation business.{" "}
              </p>
              <p className="text-gray-700 leading-8">
                Changing times and requirements have meant that a consignment
                never leaves our system till the final delivery is made at the
                door of the customer. The competitive environment has created
                the need for faster, efficient and high-end transportation
                solutions. Once your shipment arrives at any one of our
                terminals, it becomes our responsibility to carry it, along with
                your trust, to the final destination within the guaranteed time.
                We closely monitor the movement with assurance in meeting the
                commitment. The creditability and safety have created our brand
                as one of the most reliable Transport Company in India.
              </p>
            </div>
          )}
          {text === "Vision and Mission" && (
            <div>
              <p className="text-gray-700 leading-8 mb-4">
                To emerge as the front-runner and bell-weather Transport company
                with a proven commitment to redefine excellence in every facet
                of the business. We strive to develop and maintain a world-class
                infrastructure through high-quality professional service and
                best ethical practices in the industry. We are committed to
                recognize and reward our people to ensure employee satisfaction,
                which will in turn drive consumer loyalty leading to sustainable
                profit growth and improved company value.
              </p>
              <p className="text-gray-700 leading-8 mb-4">
                Our special emphasis is on becoming the undisputed leader in the
                country by providing uncompromising logistics solutions to our
                esteemed clients. Bridging the gap between 'Indian and
                International practices and standards' is high on our priority
                list.
              </p>
              <p className="text-gray-700 leading-8">
                As reliable partners to our clients, we offer tailor-made and
                innovative transport solutions across the frontiers. The
                exceptionally high-quality and reliability of our services will
                create lasting values for our clients, employees, shareholders
                and also the industry.
              </p>
              <p className="text-gray-700 leading-8">
                We want to be the best logistics service provider where complete
                customer satisfaction is our prime objective. We strive to meet
                and often exceed the expectations of our clients. Our highly
                competent and reliable solutions are aimed at forging
                long-lasting partnerships with our customers. We value our
                manpower and train them to work with team spirit.
              </p>
            </div>
          )}

          {text === "Group Companies" && (
            <div>
              <p className="text-gray-700 leading-8 mb-4">
                Like the tree of Life, Jaipur Golden Group of Companies is
                strongly rooted in a tradition of customer satisfaction,
                allowing us to grow exponentially, spreading our branches to
                cover a magnitude of our customers' needs.
              </p>
              <p className="text-gray-700 leading-8 mb-4">
                Be it door delivery, collections, on time deliveries or any
                other specific needs, Jaipur Golden keeps in place a customer's
                smiling face. At Jaipur Golden, we are ready to help whenever
                required.
              </p>
              <p className="text-gray-700 leading-8">
                We welcome you to the use of our services and the experience of
                safety and speed that we at Jaipur Golden specialize in. With
                Jaipur Golden, you are assured that your goods are as safe as if
                you were taking them there yourself. We feel proud in serving
                our customers.
              </p>
              <p className="text-gray-700 leading-8">
                We want to be the best logistics service provider where complete
                customer satisfaction is our prime objective. We strive to meet
                and often exceed the expectations of our clients. Our highly
                competent and reliable solutions are aimed at forging
                long-lasting partnerships with our customers. We value our
                manpower and train them to work with team spirit.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export default VisionAndMission;