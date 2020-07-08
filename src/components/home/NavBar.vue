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
            <b-button type="is-dark" tag="router-link" to="/login" outlined>Login</b-button>
            <b-button type="is-dark" tag="router-link" to="/register" outlined>Register</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
