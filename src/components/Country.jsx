import { useContext } from 'react';
import notFound from '../assets/location-not-found.svg';
import PropTypes from "prop-types";
import { ThemeContext } from '../context/Theme';
import { Link } from 'react-router-dom';

function Country({ filterCountries }) {
  // Prop types validation
  Country.propTypes = {
    filterCountries: PropTypes.array.isRequired,
  };
  const {elementMode} = useContext(ThemeContext);
  console.log(elementMode);
  return (
    <>
      {filterCountries.length > 0 ? (
        <div className="countries">
          {filterCountries.map(
            ({ name, flags, population, region,subregion, capital, area,tld }, index) => (
              <div className={`countryBox ${elementMode}`} key={index}>
                <Link to={`/detail/${tld}`}  key={index} style={{textDecoration:"none",color: 'inherit'}}>
                <img src={flags.png} alt={`Flag of ${name.common}`} />
                <div className="databox">
                  <h4>{name.common}</h4>
                  <p>
                    <span>Population: </span>
                    {population.toLocaleString()}
                  </p>
                  <p>
                    <span>Region: </span>
                    {region}
                  </p>
                  {/* <p>
                    <span>SubRegion: </span>
                    {subregion}
                  </p> */}
                  <p>
                    <span>Capital: </span>
                    {capital}
                  </p>
                  {/* <p>
                    <span>Area: </span>
                    {area.toLocaleString()}
                  </p> */}
                </div>
              </Link>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="handler">
          <img src={notFound} alt="" />
          <p>No such countries found!!</p>
        </div>
      )}
    </>
  );
}

export default Country;