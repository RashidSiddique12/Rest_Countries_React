import "./style.css";
import PropTypes from "prop-types";

function Country({ filterCountries }) {
  // Prop types validation
  Country.propTypes = {
    filterCountries: PropTypes.array.isRequired,
  };
  return (
    <>
      {filterCountries.length > 0 ? (
        <div className="countries">
          {filterCountries.map(
            ({ name, flags, population, region, capital }, index) => (
              <div className="countryBox" key={index}>
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
                  <p>
                    <span>Capital: </span>
                    {capital}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="handler">
          <p>This Country is not in the lists</p>
        </div>
      )}
    </>
  );
}

export default Country;
