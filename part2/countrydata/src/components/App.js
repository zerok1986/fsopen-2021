import { useEffect, useState } from 'react'
import axios from 'axios'
import { List } from './List'
import { Filter } from './Filter'
import { Details } from './Details'

function App() {
  const [countries, setCountries] = useState([])
  const [filterText, setFilterText] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [detailsClicked, setDetailsClicked] = useState(false)

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data)
    })
  }, [])

  let countriesToShow = showAll
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterText)
      )

  const handleFilter = (e) => {
    setShowAll(false)
    detailsClicked
      ? setFilterText(countriesToShow[0].name.common)
      : setFilterText(e.target.value.toLowerCase())
  }

  const handleClick = (country) => {
    setDetailsClicked(true)
    countriesToShow[0] = country
  }

  return (
    <div className="App">
      <Filter filterText={filterText} handleFilter={handleFilter} />
      {countriesToShow.length !== 250 && countriesToShow.length >= 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countriesToShow.length === 1 || detailsClicked ? (
        <Details country={countriesToShow[0]} />
      ) : (
        countriesToShow.map((country) => {
          return (
            <List
              key={country.name.official}
              country={country}
              handleClick={handleClick}
            />
          )
        })
      )}
    </div>
  )
}

export default App
