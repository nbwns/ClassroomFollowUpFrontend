<template>
  <div class="home">
      <Followup v-for="item in followups" :key="item.id" :data="item" />
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
      ]
    }
  },
  components: {
    Followup
  }
}
</script>
