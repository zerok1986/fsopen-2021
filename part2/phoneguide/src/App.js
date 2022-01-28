import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter } from './components/Filter'
import { NewUserForm } from './components/NewUserForm'
import { Title } from './components/Title'
import { UserCard } from './components/UserCard'

const App = () => {
  const [users, setUsers] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5005/users').then((res) => {
      setUsers(res.data)
    })
  }, [])

  const usersToShow = showAll
    ? users
    : users.filter((user) => user.name.toLowerCase().includes(filterText))

  const addUser = (e) => {
    e.preventDefault()
    const userCard = {
      id: users.length + 1,
      name: newName,
      number: newNumber,
    }

    if (
      users.some((user) => user.name === newName || user.number === newNumber)
    ) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setUsers(users.concat(userCard))
      setNewName('')
      setNewNumber('')
      setShowAll(true)
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setFilterText(e.target.value.toLowerCase())
    setShowAll(!usersToShow)
  }

  return (
    <div>
      <Title text={'Phonebook'} />
      <Filter filterText={filterText} handleFilter={handleFilter} />
      <Title text={'add a new'} />
      <NewUserForm
        addUser={addUser}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
      />
      <Title text={'Numbers'} />
      {usersToShow.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default App
