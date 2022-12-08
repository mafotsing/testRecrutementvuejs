/** Import des modules nécessaires */
import Axios from './caller.service'


let getAllEmployee = () => {
    return Axios.get('/employees')
}

let getEmployee = (uid) => {
    return Axios.get('/employees/'+uid)
}

let updateEmployee = (employee) => {
    return Axios.patch('/employees/'+employee.id, employee)
}

let createEmployee = (employee) => {
    return Axios.put('/employees', employee)
}

let deleteEmployee = (uid) => {
    return Axios.delete('/employees/'+uid)
}

export const employeeService = {
    getAllEmployee,
    getEmployee,
    updateEmployee,
    createEmployee,
    deleteEmployee,
}