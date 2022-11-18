<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <q-btn @click="goToPage()">Button</q-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    goToPage () {
      this.$router.push('/graphs')
    }
  }
}
</script>
