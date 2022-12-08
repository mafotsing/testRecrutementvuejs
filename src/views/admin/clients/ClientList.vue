<template>
    <div>        
        <h1>Liste des Clients</h1>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>prenom</th>
                    <th>Contact</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr v-for="(client, index) in clients" :key="client.id">
                    <td><span class="del_btn" @click="del(index)">X</span></td>
                    <td>{{ client.id }}</td>
                    <td class="edit" @click="goEdit(client.id)">{{ client.nom }}</td>
                    <td>{{Email }}</td>
                    <td>{{ Contact }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { clientService } from '@/_services'
export default {
    name: 'ClientIndex',
    data(){
        return {
            clients: []
        }
    },
    methods: {
        goEdit(uid){
            this.$router.push({name: 'clientEdit', params:{id:uid}})
        },
        del(index){
            clientlService.deleteclientl(this.clientls[index].id)
                .then(res => this.clientls.splice(index, 1))
                .catch(err => console.log(err))
        }
    },
   
}
</script>

<style>
    
</style>