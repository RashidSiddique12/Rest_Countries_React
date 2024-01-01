import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTheme from "../context/Theme";
import "./countryDetails.css";

function CountryDetails() {
  const { id } = useParams();
  const {elementMode} = useTheme();
  const [country, setCountry] = useState();
  console.log(id);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {

        console.log(res.find((data)=>(data.tld[0] === id)))
        setCountry(res.find((data)=>(data.tld[0] === id)));
        // console.log(res[0].name.nativeName.eng.common);
      });
  }, []);
  return (
    <div className="detailBox">
      <Link to="/">
      {/* <span><i className="fa-thin fa-arrow-left fa-xl"></i> </span> */}
        <button className={`btn ${elementMode}`}> 
       <span><i className="fa-solid fa-arrow-left-long fa-lg"></i></span> Back</button>
      </Link>
      {country && (
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
                <p><span>Native Name: </span>{country.name.nativeName[((Object.keys(country.name.nativeName))[0])].common}</p>
                <p><span>Population: </span>{country.population.toLocaleString()}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>SubRegion: </span>{country.subregion}</p>
                <p><span>Capital: </span>{country.capital}</p>
                </div>
                <div className="box3">
                <p><span>Top Level Domain: </span>{country.tld}</p>
                    <p><span>Currencies: </span>{country.currencies[(Object.keys(country.currencies))[0]].name}</p>
                    <p><span>Languages: </span>{Object.keys(country.languages).map((lan)=>{
                      // eslint-disable-next-line react/jsx-key
                      return <>{country.languages[lan]+" "}</>
                    })}</p>
                </div>
            </div>
            <div className="bondries box2">
            <h5>Borders Countries: </h5> 
                {country.borders && (country.borders).map((border)=>(
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
