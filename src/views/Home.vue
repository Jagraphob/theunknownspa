<template>
  <div class="home">
    <NavBar />
    <Hero />
  </div>
</template>

<script>
import NavBar from '@/components/home/NavBar.vue'
import Hero from '@/components/home/Hero.vue'

export default {
  name: 'home',
  components: {
    NavBar,
    Hero
  }
}
</script>
