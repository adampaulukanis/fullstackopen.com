import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

function getAll() {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

function create(newObject) {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

function remove(id) {
    axios.delete(`${baseUrl}/${id}`)
    return getAll()
}

// eslint-disable-next-line
export default {
    getAll,
    create,
    remove,
}
