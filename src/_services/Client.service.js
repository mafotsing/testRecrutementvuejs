/** Import des modules nécessaires */
import Axios from './caller.service'


let getAllClient = () => {
    return Axios.get('/client')
}

let getClient = (uid) => {
    return Axios.get('/client/'+uid)
}

let updateClient = (client) => {
    return Axios.patch('/client/'+client.id, client)
}

let createClient = (client) => {
    return Axios.put('/client', client)
}

let deleteClient = (uid) => {
    return Axios.delete('/client/'+uid)
}

export const clientervice = {
    getAllClient,
    getClient,
    updateClient,
    createClient,
    deleteClient,
}