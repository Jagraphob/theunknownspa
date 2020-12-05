<template>
  <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h1>LK</h1>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <login-button />
        </b-navbar-item>
      </template>
    </b-navbar>
</template>

<script>
import LoginButton from '@/components/home/LoginButton.vue'

export default {
  name: 'NavBar',
  components: {
    LoginButton
  }
}
</script>
