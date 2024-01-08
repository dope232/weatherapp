import  { useEffect, useState } from "react";
import Temperature from "./components/Temperature";
import Highlights from "./components/Highlights";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=6f54e74c955a4939877183849232512&q=${city}&aqi=no;`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);
  const isDarkMode = weatherData && weatherData.current.is_day === 0;
  
  return (
    <>
    {/* Center title  */}
    <header>
    <div>
      <h1 className={`text-center font-serif text-4xl font-bold text-${isDarkMode ? 'white' : 'black-200'} bg-${isDarkMode ? 'slate-600' : 'a7c7f2'}  scale-100 hover:scale-110 transition-transform duration-300 ease-in-out`}>
       SIMPLE WEATHER APP 
      </h1>
    

    </div>
    </header>
    <div className={`bg-${isDarkMode ? 'slate-600' : 'a7c7f2'} h-screen flex justify-center items-start`}>
      <div className="w-1/5 h-1/3 mt-40">
        {weatherData && (
          <Temperature
            setCity={setCity}
            stats={{
              temp: weatherData.current.temp_c,
              condition: weatherData.current.condition.text,
              isDay: weatherData.current.is_day,
              location: weatherData.location.name,
              time: weatherData.location.localtime,
            }}
          />
        )}
      </div>
      <div className="w-1/3 h-1/3 mt-40 p-10 grid grid-cols-2 gap-6 clas">
        <h1 className={`${isDarkMode ? 'text-white' : 'text-black-200'} text-2xl col-span-2 scale-100 hover:scale-110 transition-transform duration-300 ease-in-out`}>
          Todays Highlights
        </h1>
        {weatherData && (
          <>
            <Highlights
              stats={{
                title: "Wind Status",
                value: weatherData.current.wind_mph,
                unit: "mph",
                direction: weatherData.current.wind_dir,
              }}
            />
            <Highlights
              stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: "%",
              }}
            />
            <Highlights
              stats={{
                title: "Visibility",
                value: weatherData.current.vis_miles,
                unit: "miles",
              }}
            />
            <Highlights
              stats={{
                title: "Air Pressure",
                value: weatherData.current.pressure_mb,
                unit: "mb",
              }}
            />
          </>
        )}
      </div>
    </div>
    <footer>
      Made by <a href="www.github.com/dope232">Dope232 </a> with ❤️ inspired by <a href="https://www.frontendmentor.io/challenges/weather-app-javascript-material-ui-DOHbnvhJ">Frontend Mentor</a> and Geek24
    </footer>
    </>
  );
}

export default App;