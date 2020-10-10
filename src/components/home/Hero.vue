<template>
  <section class="hero is-light is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
           <h1 class="title">LK</h1>
           <h2 class="subtitle">System</h2>
           <p>{{test}}</p>
           <button @click="increment">PUSH</button>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'Hero',
  data () {
    return {
      test: 1
    }
  },
  methods: {
    increment () {
      console.log("method")
      this.test = this.test + 1
    }
  }


}
</script>
