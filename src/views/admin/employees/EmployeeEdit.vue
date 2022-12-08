<template>
    <div>        
       
        <h1>Ajouter un Employee</h1>
        <div >Edition</div>
        <form @submit.prevent="ajout">               

            <div class="formGroup">
                <label for="employee_nom">Nom</label>
                <input type="text" id="employee_nom" v-model="employee.nom"/>
            </div>
            <div class="formGroup">
                <label for="employee_description">Email</label>
                <input type="text" id="employee_description" v-model="employee.description"/>
            </div>
            <div class="formGroup">
                <label for="employee.recette">Contact</label>
                <input type="text" id="employee.recette" v-model="employee.recette"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Ajouter le employee</button>
            </div>
        </form>
    </div>
</template>

<script>
//user_id, nom, description, recette
import { employeeService } from '@/_services'
import { watch, ref } from 'vue'
export default {
    name: ' employeeEdit',
    props: ['id'],
    data(){
        return {
            employee: {
                user_id:4,
                nom: '',
                email:'',
                contact:''
            }
        }
    },
    setup(props){
        console.log(props)
        watch(props, (value, old) => {
            console.log(value.id)
          
        
        })
        return {}
    },
    
   
    methods: {
        test(){
            console.log('test')
        },
        ajout(){
            employeeService.createemployee(this.employee)
                .then(res => this.$router.push({name: 'employeeList'}))
                .catch(err => console.log(err))
        }
    },
}
</script>

<style>
    
</style>