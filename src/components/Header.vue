<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vue app</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Dodaj pozycję do zlecenia</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/list">Podgląd zlecenia</router-link>
      </li>
    </ul>
</nav>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      orderList: types.GET_ORDER
    })
  },
}
</script>

<style scoped>
</style>
