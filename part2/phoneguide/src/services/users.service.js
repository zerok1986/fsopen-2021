import axios from 'axios'
const BASE_URL = 'http://localhost:5005/api/persons'

const getAll = async () => {
  const request = axios.get(BASE_URL)
  const res = await request
  return res.data
}

const create = async (newObj) => {
  const request = axios.post(BASE_URL, newObj)
  const res = await request
  return res.data
}

const update = async (id, newObj) => {
  const request = axios.put(`${BASE_URL}/${id}`, newObj)
  const res = await request
  return res.data
}

const deleteId = async (id, newObj) => {
  const request = axios.delete(`${BASE_URL}/${id}`, newObj)
  const res = await request
  return res.data
}

const usersService = { getAll, create, update, deleteId }
export default usersService
