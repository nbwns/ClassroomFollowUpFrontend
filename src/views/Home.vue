<template>
  <div class="home" >
      <Followup v-for="item in filteredFollowups" :key="item.id" :data="item" @suppress="suppress($event)" @update="update($event)" />
  </div>
</template>

<script>
// @ is an alias to /src
import Followup from '@/components/Followup.vue'

export default {
  name: 'home',
  data() {
    return {
      followups: [
          {
            id: 1,
            date: "2019-01-24T15:04:04+0000",
            training: "Front-end developer",
            trainer: "Olivier Céréssia",
            description: "Tout se passe bien"
          },
          {
            id: 2,
            date: "2019-01-25T15:04:04+0000",
            training: "Front-end developer",
            trainer: "Nicolas Bauwens",
            description: "Un peu de mal en JavaScript"
          }
      ],
      trainer: null,
      training: null,
      filteredFollowups: []
    }
  },
  components: {
    Followup
  },
  methods: {
    initialize(){
      this.trainer = this.$route.query.trainer
      this.training = this.$route.query.training
      this.filteredFollowups = this.followups;
      console.log(this.trainer, this.training, this.filteredFollowups)
      if(this.trainer){
        this.filteredFollowups = this.filteredFollowups.filter(item => item.trainer === this.trainer)
        console.log(this.filteredFollowups)
      }

      if(this.training){
        this.filteredFollowups = this.filteredFollowups.filter(item => item.training === this.training)
      }
    },
    suppress(followup){
      alert("delete " + followup)
    },
    update(followup){
      alert("update " + followup)
    }
  },
  created() {
    this.initialize()
  },
  watch: {
    //on doit "observer" le changement de route et rafraichir le composant
    '$route' () {
      this.initialize()
    }
  }
}
</script>
