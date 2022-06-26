<template>
  <h1>Events for {{ user }}</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['fetchEvents'])
  },
  created() {
    this.fetchEvents().catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    ...mapState(['events', 'user'])
    // events() {
    //   return this.$store.state.events
    // }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
