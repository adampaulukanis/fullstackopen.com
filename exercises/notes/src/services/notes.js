import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    console.log("services/notes getAll()")
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    console.log("services/notes create()", newObject)
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    console.log("services/notes update()", id, newObject)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

// eslint-disable-next-line
export default {
    getAll,
    create,
    update
}
