import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

function getAll() {
    console.log("getAll")
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

function create(newObject) {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

function remove(id) {
    const request = axios.delete(`${baseUrl}/${id}`)
    //return request.then(response => response.data)
    return request
}

function update(newObject) {
    console.log("update...")
    const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
    //return request.then(response => response.data)
    return request
}

// eslint-disable-next-line
export default {
    getAll,
    create,
    remove,
    update,
}
