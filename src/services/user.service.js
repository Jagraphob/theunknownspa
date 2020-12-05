const UserService = {
  login (gAuth, store) {
    gAuth.signIn().then((user) => {
      store.commit('signInUser', user.getBasicProfile())
    })
  },
  logout (gAuth) {
    gAuth.signOut().then(() => {
    })
  }
}

export default UserService
