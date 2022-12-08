<template>
    <div>        
        <h1>Liste des Employee ({{ comptage }})</h1>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Contact</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in employees" :key="employee.id">
                    <td><span class="del_btn" @click="del(index)">X</span></td>
                    <td>{{ employee.id }}</td>
                    <td class="edit" @click="goEdit(employee.id)">{{ employee.nom }}</td>
                    <td>{{Email }}</td>
                    <td>{{ Contact }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { employeeService } from '@/_services'
export default {
    name: 'EmployeeIndex',
    data(){
        return {
            employees: []
        }
    },
    methods: {
        goEdit(uid){
            this.$router.push({name: 'employeeEdit', params:{id:uid}})
        },
        del(index){
            employeelService.deleteemployeel(this.employeels[index].id)
                .then(res => this.employeels.splice(index, 1))
                .catch(err => console.log(err))
        }
    },
   
}
</script>

<style>
    
</style>