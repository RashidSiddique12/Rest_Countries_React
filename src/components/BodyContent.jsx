import { useState, useEffect } from "react";
import Country from "./Country";
import "./style.css";
import { PropagateLoader } from "react-spinners";

function BodyContent() {
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filterInput, setFilterInput] = useState("Filter by Region");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region"
    )
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const regionArr = countries.reduce((acc, country) => {
    if (!acc.includes(country.region)) {
      acc.push(country.region);
    }
    return acc;
  }, []);

  const filterCountries = countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const countryRegion = country.region;
    return (
      countryName.includes(userInput.toLowerCase().trim()) &&
      (countryRegion === filterInput || filterInput === "Filter by Region")
    );
  });

  return (
    <div className="bodyContent">
      <section className="box">
        <div className="find">
          <form>
            <input
              type="text"
              value={userInput}
              id="search"
              className="searchWhite"
              placeholder="Search for a country..."
              onChange={(e) => setUserInput(e.target.value)}
            />
          </form>
          <div className="dropdown">
            <select
              className="dropdown-menu"
              id="dropdown"
              onChange={(e) => setFilterInput(e.target.value)}
            >
              <option className="dropdown-item">Filter by Region</option>
              {regionArr.map((region) => (
                // eslint-disable-next-line react/jsx-key
                <option className="dropdown-item">{region}</option>
              ))}
            </select>
          </div>
        </div>
        {loading === true ? (
          <Country filterCountries={filterCountries} />
        ) : (
          <div className="handler">
            <PropagateLoader  size={25} />
          </div>
        )}
      </section>
    </div>
  );
}

export default BodyContent;
