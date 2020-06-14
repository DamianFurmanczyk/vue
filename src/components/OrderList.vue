<template>
  <div class="container mt-5">

    <h4 v-if="orderList.length == 0" class="text-center">Zlecenie jest puste</h4>

    <table class="table" v-if="orderList.length > 0">
      <thead class="thead-dark">
        <tr>
          <th>Pacjent</th>
          <th>Lek</th>
          <th>Oddział</th>
          <th>Data i godzina podania</th>
          <th>Ilość</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orderList" :key="order">
          <td>{{order.patient}}</td>
          <td>{{order.medicine}}</td>
          <td>{{order.ward}}</td>
          <td>{{order.dispenseDate}} {{order.dispenseHour}}</td>
          <td>{{order.quantity}}</td>
          <td><button @click="rmOrder(order.orderId)" class="btn">Usuń</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
  computed: {
    ...mapGetters({
      orderList: types.GET_ORDER
    })
  },
  methods: {
    rmOrder(orderId) {
      this.$store.commit(types.MUTATE_REMOVE_FROM_ORDER, orderId);
    }
  }
}
</script>

<style scoped>
td, th {
  text-align:center;
}
</style>
