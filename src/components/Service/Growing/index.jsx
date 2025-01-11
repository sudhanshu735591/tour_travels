import { useEffect, useState } from "react";
function Growing() {
  const counters = [
    { target: 110, label: "cities", suffix: "+" },
    { target: 10121, label: "Trucks", suffix: "+" },
    { target: 5000, label: "Happy Customers & Counting", suffix: "+" },
    { target: 124562, label: "Trips Completed", suffix: "+" },
  ];
  const [currentValues, setCurrentValues] = useState(
    counters.map(() => 0) 
  );
  useEffect(() => {
    const intervals = counters.map((counter, index) => {
      const increment = Math.ceil(counter.target / 100); 
      return setInterval(() => {
        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = Math.min(
            newValues[index] + increment,
            counter.target
          ); 
          return newValues;
        });
      }, 20); 
    });
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [counters]);
  return (
    <div className="text-black pt-10">
      <h1 className="lg:text-5xl text-xl text-center">We Are Growing Big Each Passing Day</h1>
      <div className="flex text-4xl lg:mt-10 flex-wrap lg:flex-nowrap lg:p-20 gap-20 justify-around w-[80%] m-auto">
        {counters.map((counter, index) => (
          <div key={index} className="">
            <h1 className="font-bold text-blue-900">
              {currentValues[index]}
              {counter.suffix}
            </h1>
            <p className="text-xl text-start">{counter.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Growing;