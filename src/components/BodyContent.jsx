import { useState, useEffect } from "react";
import Country from "./Country";
import { PropagateLoader } from "react-spinners";
import Dropdown from "./Dropdown";
import useTheme from "../context/Theme";

function BodyContent() {
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filterRegion, setfilterRegion] = useState("Filter by Region");
  const [filterSubRegion, setfilterSubRegion] = useState("Filter by SubRegion");
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState();
  const { elementMode } = useTheme();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
        setLoading(false);
        // console.log(res[0])
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const regionArr = countries.reduce((acc, country) => {
    if (!acc.includes(country.region)) {
      acc.push(country.region);
    }
    return acc;
  }, []);

  const subregionArr = countries.reduce((acc, country) => {
    if (
      !acc.includes(country.subregion) &&
      country.subregion !== "" &&
      filterRegion === country.region
    ) {
      acc.push(country.subregion);
    }
    return acc;
  }, []);

  ///////Filtering countries
  const filterCountries = countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const countryRegion = country.region;
    const countrySubRegion = country.subregion;
    return (
      countryName.includes(userInput.toLowerCase().trim()) &&
      (countryRegion === filterRegion || filterRegion === "Filter by Region") &&
      (countrySubRegion === filterSubRegion ||
        filterSubRegion === "Filter by SubRegion")
    );
  });

  if (sort === "Population in Ascending") {
    filterCountries.sort((a, b) => a["population"] - b["population"]);
  } else if (sort === "Population in Descending") {
    filterCountries.sort((a, b) => b["population"] - a["population"]);
  } else if (sort === "Area in Ascending") {
    filterCountries.sort((a, b) => a["area"] - b["area"]);
  } else if (sort === "Area in Descending") {
    filterCountries.sort((a, b) => b["area"] - a["area"]);
  }

  return (
    <div className="bodyContent">
      <section className="box">
        <div className="find">
          <div>
            <form>
              <input
                type="text"
                value={userInput}
                id={elementMode}
                // className="searchWhite white"
                className={elementMode}
                placeholder="Search for a country..."
                onChange={(e) => setUserInput(e.target.value)}
              />
            </form>
          </div>
          <Dropdown
            title="Region"
            arr={regionArr}
            set={setfilterRegion}
            setfilterSubRegion={setfilterSubRegion}
          />
          <Dropdown
            title="SubRegion"
            arr={subregionArr}
            set={setfilterSubRegion}
          />
          <Dropdown
            title="Sorting"
            arr={[
              "Population in Ascending",
              "Population in Descending",
              "Area in Ascending",
              "Area in Descending",
            ]}
            set={setSort}
          />
        </div>
        {loading === true ? (
          <div className="handler">
            <PropagateLoader size={25} />
          </div>
        ) : (
          <Country filterCountries={filterCountries} />
        )}
      </section>
    </div>
  );
}

export default BodyContent;
