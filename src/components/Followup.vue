<template>
    <div class="followup">
        <div class="followup__detail">
            <h2>
                <router-link :to="{path: '', query: {trainer: data.trainer}}">{{data.trainer}}</router-link>
                pour 
                <router-link :to="{path: '', query: {training: data.training}}">{{data.training}}</router-link>
                </h2>
            <small>Le {{data.date | formatDate("DDD/MM/YYYY HH:mm")}}</small>
            <p @click="editing = true" v-if="!editing">
                {{data.description}}
            </p>
            <textarea v-if="editing" v-model="data.description"></textarea>
        </div>
        <div class="followup__options">
            <a @click.prevent.stop="$emit('suppress', data.id)">D</a> - <a @click.prevent.stop="$emit('update', data.id)">M</a>
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
    }
}
</style>
