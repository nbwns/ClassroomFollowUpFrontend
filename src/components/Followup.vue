<template>
    <div class="followup">
        <div class="followup__detail">
            <h2>
                <router-link :to="{path: '', query: {Trainer: data.Trainer}}">{{data.Trainer}}</router-link>
                pour 
                <router-link :to="{path: '', query: {Training: data.Training}}">{{data.Training}}</router-link>
                </h2>
            <small>Le {{data.Date | formatDate("DD/MM/YYYY HH:mm")}}</small>
            <p @click="editing = true" v-if="!editing">
                {{data.Description}}
            </p>
            <textarea v-if="editing" v-model="data.Description"></textarea>
        </div>
        <div class="followup__options" v-if="!editing">
            <a title="Supprimer" @click.prevent.stop="$emit('suppress', data.ID)">🗑️</a>&nbsp;<a title="Modifier" @click="editing = true" >🖊️</a>
        </div>
        <div class="followup__options" v-if="editing">
            <a title="Sauver" @click="save(data)" >💾</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data(){
        return {
            editing: false
        }
    },
    methods:{
        save(f){
            this.editing = false
            this.$emit("update", f)
        }
    }
}
</script>

<style lang="scss">
.followup{
    display:  flex;
    flex-direction: row;
    .followup__detail {
        background-color: #f4f4f4;
        padding: 25px;
        margin: 10px;
        border-radius: 20px;
        width: 380px;
        small {
            font-size: 0.85rem;
            color: #848484;
        }

        p{
            font-size: 1.1rem;
        }
    }
    .followup__options{
        display:  flex;    
        align-items: center;
        a{
            cursor: pointer;
        }
    }
}
</style>
