<template>
  <div class="home" >
      <Followup v-for="item in filteredFollowups" :key="item.id" :data="item" @suppress="suppress($event)" @update="update($event)" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Followup from '@/components/Followup.vue'

export default {
  name: 'home',
  data() {
    return {
      followups: [],
      trainer: null,
      training: null
    }
  },
  components: {
    Followup
  },
  computed: {
    filteredFollowups(){
         let filtered = this.followups;
         if(this.trainer)
          filtered = filtered.filter(item => item.Trainer === this.trainer)
         
         if(this.training)
          filtered = filtered.filter(item => item.Training === this.training)

        return filtered
    }
  },
  methods: {
    suppress(followup){
      axios.delete('http://bf-classroomfollowup.azurewebsites.net/api/followups/'+ followup)
      .then(response => {
        console.log(response.data)
        this.followups.splice(this.followups.findIndex(f => f.ID === followup), 1)
      })
    },
    update(followup){
      axios.put('http://bf-classroomfollowup.azurewebsites.net/api/followups/'+ followup.ID, followup)
      .then(response => {
          console.log(response.data)
      })
    }
  },
  created() {
    axios.get('http://bf-classroomfollowup.azurewebsites.net/api/followups')
    .then(response => {
        this.followups = response.data
    })
  },
  watch: {
    //on doit "observer" le changement de route et rafraichir le composant
    '$route' () {
      this.trainer = this.$route.query.Trainer
      this.training = this.$route.query.Training
    }
  }
}
</script>
