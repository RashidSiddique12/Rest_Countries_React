import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTheme from "../context/Theme";
import "./countryDetails.css";
import ErrorImg from "../assets/404-error.svg";
import { PropagateLoader } from "react-spinners";

function CountryDetails() {
  const { id } = useParams();
  console.log(id);
  const { elementMode } = useTheme();
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCountry(res[0]);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("404! something went wrong");
      })
      .finally(() => setLoading(false));
  }, []);

  return errorMessage !== null ? (
    <div className="handler">
      <img src={ErrorImg} alt="Not found Error image" />
      <p>{errorMessage}</p>
    </div>
  ) : (
    <div className="detailBox">
      <Link to="/">
        <button className={`btn ${elementMode}`}>
          <span>
            <i className="fa-solid fa-arrow-left-long fa-lg"></i>
          </span>
          {"  "}
          Back
        </button>
      </Link>
      {loading ? (
        <div className="handler">
          <PropagateLoader size={25} color={elementMode==="white" ? "black" : "white"} />
        </div>
      ) : (
        <div className="countryDetails">
          <div className="box1">
            <img src={country.flags.png} />
          </div>
          <div className="box1">
            <div className="box2">
              <h3>{country.name.common}</h3>
            </div>
            <div className="countryNamestuff box2">
              <div className="box3">
                <p>
                  <span>Native Name: </span>
                  {
                    country.name.nativeName[
                      Object.keys(country.name.nativeName)[0]
                    ].common
                  }
                </p>
                <p>
                  <span>Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>SubRegion: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className="box3">
                <p>
                  <span>Top Level Domain: </span>
                  {country.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {country.currencies[Object.keys(country.currencies)[0]].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.keys(country.languages).map((lan) => {
                    // eslint-disable-next-line react/jsx-key
                    return <>{country.languages[lan] + " "}</>;
                  })}
                </p>
              </div>
            </div>
            <div className="bondries box2">
              <h5>Borders Countries: </h5>
              {country.borders &&
                country.borders.map((border) => (
                  // eslint-disable-next-line react/jsx-key
                  <button className={`btn ${elementMode}`}>{border}</button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
