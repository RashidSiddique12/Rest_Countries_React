import "./style.css";


function Country({filterCountries}) {
    
  return (
    <div className="countries">
          {filterCountries &&
          // eslint-disable-next-line react/prop-types
          filterCountries.map((country, index) => (
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
  )
}

export default Country
