<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vue-med</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">1</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/list">2</router-link>
      </li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
