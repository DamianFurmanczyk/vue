<template>
  <div class="hello mainContent show">

    siema

    {{JSON.stringify(commission)}}

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
  computed: {
    ...mapGetters({
      commission: types.GET_COMMISSION_OPTIONS
    })
  }
}
</script>

<style scoped>
</style>
