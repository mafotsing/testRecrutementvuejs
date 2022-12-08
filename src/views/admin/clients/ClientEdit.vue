<template>
    <div>        
       
        <h1>Ajouter un client</h1>
        <div >Edition</div>
        <form @submit.prevent="ajout">               

            <div class="formGroup">
                <label for="client_nom">Nom</label>
                <input type="text" id="client_nom" v-model="client.nom"/>
            </div>
            <div class="formGroup">
                <label for="client_description">Prenom</label>
                <input type="text" id="client_description" v-model="client.description"/>
            </div>
            <div class="formGroup">
                <label for="client.recette">Contact</label>
                <input type="text" id="client.recette" v-model="client.recette"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Ajouter le client</button>
            </div>
        </form>
    </div>
</template>

<script>
//user_id, nom, description, recette
import { clientService } from '@/_services'
import { watch, ref } from 'vue'
export default {
    name: ' clientEdit',
    props: ['id'],
    data(){
        return {
            client: {
                user_id:4,
                nom: '',
                prenom:'',
                contact:''
            }
        }
    },
    setup(props){
        console.log(props)
        let roger = ref(false)
        watch(props, (value, old) => {
            console.log(value.id)
            roger.value = true
        
        })
        return {roger}
    },
    
    methods: {
        test(){
            console.log('test')
        },
        ajout(){
            clientService.createclient(this.client)
                .then(res => this.$router.push({name: 'clientList'}))
                .catch(err => console.log(err))
        }
    },
}
</script>

<style>
    
</style>