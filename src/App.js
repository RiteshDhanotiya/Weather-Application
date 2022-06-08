import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e0f779bc4b73739dbc9fcdad6f1ebc3e`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="gir">
        <div className="box">
          <h2>Check the weather States</h2>
          <br />
          <div className="inputData">
            <input
              type="search"
              value={search}
              className="inputFeild"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          {!city ? (
            <p className="errorMsg">No data found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fa fa-street-view"></i>
                  {search}
                </h2>
                <h1 className="temp">{city.temp}cel</h1>
                <h3 className="tempmin_max">
                  Min: {city.temp_min}cel | Max: {city.temp_max}cel{" "}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
