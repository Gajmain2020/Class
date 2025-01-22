import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Todos from "./components/Todos";

function App() {
  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState([]);

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function onButton1Click() {
    console.log("button 1 was clicked");
  }

  function onButton3Click() {
    console.log("button 3 was clicked");
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleAddTodo() {
    // [] todo=> bartan dhona hai => ['bartan dhona hai']
    // ['bartan dhona hai'] todo=>hagna hai => ['bartan dhona hai', "hagna hai"]
    if (todo.trim() != "") {
      setAllTodo((allTodo) => [todo, ...allTodo]);
      setTodo("");
    }
  }

  function handleDelete(index) {
    setAllTodo((allTodo) => allTodo.filter((_, i) => i !== index));

    //use filter => alltodo => alltod->index agar wo passed wale index dono same nai hai to usko store karna hai
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  async function fetchWeather() {
    setLoading(true);
    setWeatherData(null);
    setError(null);

    try {
      const response = await fetch("http://api.openweathermap.org/");
      if (!response.ok) {
        throw new Error(
          "Failed to fetch weather data. Please check the city name."
        );
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="bg-red-200 ">
        <Button clickHandle={onButton1Click} title="button 1" />
        <Button
          clickHandle={() => alert("button 2 was clicked")}
          title="button 2"
        />
        <Button clickHandle={onButton3Click} title="button 3" />
      </div>

      {/* Tod Application */}
      <div className="bg-pink-400 px-20 py-10">
        <div className="font-semibold font-2xl">TODO APP</div>
        {/* input field */}
        <div className="flex gap-4">
          <input
            value={todo}
            type="text"
            className="border bg-green-200 rounded px-2 py-0.5"
            placeholder="Write your todo here."
            onChange={handleChange}
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-300 px-2 rounded hover:bg-blue-500 transition"
          >
            ADD
          </button>
        </div>

        {/* To show todos */}
        <Todos deleteFunction={handleDelete} todos={allTodo} />
      </div>

      {/* Weather Application */}
      <div className="bg-yellow-300 px-20 py-10 mt-10">
        <div className="text-2xl font-semibold mb-4">Weather app</div>
        <div className="flex gap-4 mb-4">
          <input
            value={city}
            type="text"
            className="border bg-white rounded px-4 py-1"
            placeholder="Enter city name"
            onChange={handleCityChange}
          />
          <button
            onClick={fetchWeather}
            disabled={loading || city.trim() === ""}
            className={`${
              loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-700"
            } text-white px-4 py-1 rounded transition`}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>
        {error && <div className="text-red-600 font-semibold">{error}</div>}
        {weatherData && (
          <div className="bd-white p-4 rounded shadow-md">
            <div className="font-semibold text-lg">
              Weather in {weatherData.name}
            </div>
            <div>Temperature: {weatherData.main.temp}°C</div>
            <div>Condition: {weatherData.weather[0].description}</div>
            <div>Humidity: {weatherData.main.humidity}%</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

// parent (APP.jsx is parent) -> child(s) -> child(s)

// Homework ->
// make this todo a bit stylish
// make above handleDelete function to be operating

// from slides =>
// make weather app
// requirements
// input field to search the city
// search button
// if any error happens in api call for weather forecast give them error
// if you get the data then show the data
// brain stormer=> fetch => time => when api do not send anything till then the search should be disabled (ChatGPT allowed)
