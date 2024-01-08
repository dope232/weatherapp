import React, { useState } from 'react';

function Highlights({ stats }) {

  const isDarkMode = stats.isDay === 0;
  const [isMetric, setIsMetric] = useState(true);
  let Darkmodecolor = isDarkMode ? 'text-000000' : 'text-ffffff';

  const convertWindSpeed = (mph) => {
    
    return (mph * 1.60934).toFixed(2);
  };

  const convertDistance = (miles) => {
    
    return (miles * 1.60934).toFixed(2);
  };

  const toggleUnit = () => {
    setIsMetric(!isMetric);
  };

  return (
    <div className={` p-2 text-${isDarkMode ? 'black' : 'white'} flex flex-col justify-start items-center scale-100 hover:scale-110 transition-transform duration-300 ease-in-out `}>
      <h2 className={`text-sm mt-2`} onClick={toggleUnit} style={{cursor: 'pointer'}}>
        {stats.title}
      </h2>
      <div className="mt-2" onClick={toggleUnit} style={{cursor: 'pointer'}}>
        {" "}
        <span className={`text-4xl font-bold`}>
          {isMetric ? 
            (stats.title === 'Wind Status' ? convertWindSpeed(stats.value) : 
            (stats.title === 'Visibility' ? convertDistance(stats.value) : stats.value)) 
            : stats.value
          }
        </span>
        <span className={"text-2xl"}>
          {isMetric ? (stats.unit === 'mph' ? 'km/h' : (stats.unit === 'miles' ? 'km' : stats.unit)) : stats.unit}
        </span>
      </div>
      {stats.direction ? (
        <div className="flex mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${Darkmodecolor}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          <div className={`text-${isDarkMode ? 'black' : 'white'} ms-2 `}>{stats.direction}</div>
        </div>
      ) : null}

      {stats.title === "Humidity" ? (
        <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}

export default Highlights;