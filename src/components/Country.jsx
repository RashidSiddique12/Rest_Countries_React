import "./style.css";

function Country({ filterCountries }) {
  return (
    <>
      {filterCountries.length > 0 ? (
        <div className="countries">
          {filterCountries.map((country, index) => (
            <div className="countryBox" key={index}>
              <img src={country.flags.png} alt="" />
              <div className="databox">
                <h4>{country.name.common}</h4>
                <p>
                  <span>Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
            </div>
          ))}
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
