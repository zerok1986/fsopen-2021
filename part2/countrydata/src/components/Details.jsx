import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const Details = ({ country }) => {
  const [weatherData, setWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const params = {
    access_key: API_KEY,
    query: `${country.capital[0]}`,
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getData = async () => {
    setIsLoading(true)
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then((res) => setWeatherData(res.data.current))
      .then(() => setIsLoading(false))
  }

  if (isLoading) return <div>... loading data </div>

  return (
    <>
      <h2>
        <strong>{country.name.common}</strong>
      </h2>
      <div>
        <p>
          capital: {country.capital[0]}
          <br />
          population: {country.population} hbts.
        </p>
      </div>
      <div>
        <h3>languages</h3>
        <ul>
          {Object.keys(country.languages).map((key) => (
            <li key={country.languages[key]}>{country.languages[key]}</li>
          ))}
        </ul>
      </div>
      <img
        src={country.flags.png}
        alt="flag of the country"
        style={{ width: '148px', border: 'black solid 1px' }}
      />
      <div>
        <h3>Weather in {country.capital[0]}</h3>
        <p>
          <strong>temperature: </strong>
          {weatherData.temperature} Celsius
        </p>
        <img src={weatherData.weather_icons[0]} alt="weather"></img>
        <p>
          <strong>wind: </strong>
          {weatherData.wind_speed} mph direction {weatherData.wind_dir}
        </p>
      </div>
    </>
  )
}
