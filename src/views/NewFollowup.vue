<template>
    <form @submit.prevent="post">
        <div>
            <label for="training">Formation</label>
            <input type="text" name="training" id="training" placeholder="Nom de la formation" v-model="Training">
        </div>
        <div>
            <label for="trainer">Formateur</label>
            <input type="text" name="trainer" id="trainer" placeholder="Nom du formateur" v-model="Trainer">
        </div>
        <div>
            <label for="date">Date du suivi</label>
            <input type="date" name="date" id="date" v-model="FollowupDate">
        </div>
        <div>
            <label for="description">Descriptif du suivi</label>
            <textarea id="description" name="description" placeholder="Que faut-il préciser ?" v-model="Description"></textarea>
        </div>
        <div>
            <button type="submit">Ajouter</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            Training: null,
            Trainer: null,
            FollowupDate: null,
            Description: null
        }
    },
    methods:{
        post(){
            axios.post('http://bf-classroomfollowup.azurewebsites.net/api/followups',
                {
                    Trainer: this.Trainer,
                    Training: this.Training,
                    Date: this.FollowupDate,
                    Description: this.Description
                }
            )
            .then(response => {
                console.log(response.data)
                this.$router.push('/')
            })
        }
    }
}
</script>

<style>
    form {
        width: 500px;
        margin:150px auto;
        background: #fff;
        position: relative;
        padding:50px 50px 50px;
    }
    
    label {
        display: block;
        margin-bottom:5px;
    }

    input, textarea, select {
        outline:none;
        border:1px solid lightgray;
        padding:10px;
        border-radius:3px;
        width: 100%;
        transition:.3s all ease-in-out;
    }

    textarea {
        height: 150px;
        resize:vertical;
    }

    input[type="submit"], input[type="reset"] {
        cursor:pointer;
    }
</style>
