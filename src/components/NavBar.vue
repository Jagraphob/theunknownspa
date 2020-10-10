<template>
  <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h1>LK</h1>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
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
        </b-navbar-item>
      </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isSignIn: false
    }
  },
  methods: {
    login () {
      this.$gAuth.signIn().then((user) => {
        this.$store.commit('signInUser', user.getBasicProfile())
        this.isSignIn = this.$gAuth.isAuthorized
      })
    },
    logout () {
      console.log("doSignout")
      this.$gAuth.signOut().then(() => {
        this.isSignIn = this.$gAuth.isAuthorized
      })
    }
  },
  computed: {
    avatarUrl () {
      return this.$store.state.user.dL
    }
  }
}
</script>
