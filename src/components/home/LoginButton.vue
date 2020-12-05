<template>
  <div class="buttons">
    <b-button type="is-dark" @click="login" v-if="!isSignIn" outlined>Login</b-button>
    <b-dropdown aria-role="list">
      <figure class="image is-32x32" v-if="isSignIn">
        <img class="is-rounded" :src="avatarUrl">
      </figure>
    </b-dropdown>
    <figure class="image is-32x32" v-if="isSignIn">
      <img class="is-rounded" :src="avatarUrl">
    </figure>
  </div>
</template>

<script>
import UserService from '@/services/user.service.js'

export default {
  name: 'LoginButton',
  methods: {
    login () {
      UserService.login(this.$gAuth, this.$store)
    }
  },
  computed: {
    isSignIn() {
      return this.$store.state.user.isSignIn
    },
    avatarUrl () {
      return this.$store.state.user.userinfo.JJ
    }
  },
}
</script>
