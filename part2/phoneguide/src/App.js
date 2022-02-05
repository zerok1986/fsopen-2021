import React, { useState, useEffect } from 'react'
import './App.css'
import { Filter } from './components/Filter'
import { NewUserForm } from './components/NewUserForm'
import { Title } from './components/Title'
import { UserCard } from './components/UserCard'
import { Notification } from './components/Notification'
import usersService from './services/users.service'

const App = () => {
  const [users, setUsers] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [notificationMessage, setMessage] = useState(null)
  const [isErrorMessage, setIsErrorMessage] = useState(false)

  useEffect(() => {
    usersService.getAll().then((initialUsers) => setUsers(initialUsers))
  }, [])

  const usersToShow = showAll
    ? users
    : users.filter((user) => user.name.toLowerCase().includes(filterText))

  const addUser = (e) => {
    e.preventDefault()
    const userCard = {
      id: Date.now(),
      name: newName,
      number: newNumber,
    }

    if (
      users.some((user) => user.name === newName && user.number !== newNumber)
    ) {
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
      const user = users.find((user) => user.name === newName)
      const id = user.id
      const updatedUser = { ...user, number: newNumber }
      usersService
        .update(id, updatedUser)
        .then(() => {
          usersService.getAll().then((initialUsers) => setUsers(initialUsers))
        })
        .catch((err) => {
          setIsErrorMessage(true)
          setMessage(`${err.response.data.error}`)
          setTimeout(() => {
            setMessage(null)
            setIsErrorMessage(false)
          }, 3500)
        })
      setMessage(`${newName} successfully updated to phonebook`)
      setTimeout(() => {
        setMessage(null)
      }, 3500)
    } else if (
      users.some((user) => user.name === newName && user.number === newNumber)
    ) {
      window.alert(
        `${newName} is already added with to phonebook with this exact info`
      )
    } else {
      usersService
        .create(userCard)
        .then((returnedUser) => {
          setUsers(users.concat(returnedUser))
          setNewName('')
          setNewNumber('')
          setShowAll(true)
          setMessage(`${newName} successfully added to phonebook`)
          setTimeout(() => {
            setMessage(null)
          }, 3500)
        })
        .catch((err) => {
          setIsErrorMessage(true)
          setMessage(`${err.response.data.error}`)
          setTimeout(() => {
            setMessage(null)
            setIsErrorMessage(false)
          }, 3500)
        })
    }
  }

  const deleteUserById = (id) => {
    const user = users.find((user) => user.id === id)
    window.confirm(`Delete ${user.name} ?`) &&
      usersService.deleteId(id, user).then(() => {
        usersService.getAll().then((initialUsers) => setUsers(initialUsers))
      })
    setMessage(`${user.name} successfully deleted from phonebook`)
    setTimeout(() => {
      setMessage(null)
    }, 3500)
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
      <Title text={'Phonebook FS App'} />
      <Notification
        message={notificationMessage}
        errorMessage={isErrorMessage}
      />
      <Filter filterText={filterText} handleFilter={handleFilter} />
      <Title text={'add a new contact'} />
      <NewUserForm
        addUser={addUser}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
      />
      <Title text={'Numbers'} />
      {usersToShow?.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={() => deleteUserById(user.id)}
        />
      ))}
    </div>
  )
}

export default App
