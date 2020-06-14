<template>

<main class="container mt-5">

<form class="row">

<div class="col-10 col-md-5 offset-1 mt-2">
  <div class="form-group">
    <label for="patient">Imię, nazwisko oraz pesel pacjenta:</label>
    <input v-model="orderFormState.patient" type="text" class="form-control" id="patient">
  </div>
</div>

<div class="col-10 col-md-5 offset-1  offset-md-0 mt-2">
  <div class="form-group">
    <label for="medicine">Lek:</label>
    <select v-model="orderFormState.medicine" class="form-control" id="medicine">
        <option v-for="medicine in orderOptions.medicines" v-bind:key="medicine"> {{medicine}} </option>
    </select>
  </div>
</div>

<div class="col-10 col-md-5 offset-1 mt-2">
      <div class="form-group">
    <label for="quantity">Ilość:</label>
    <input required v-model="orderFormState.quantity" type="number" class="form-control" id="quantity">
  </div>
</div>

<div class="col-10 col-md-5 offset-1 offset-md-0 mt-2">
    <div class="form-group">
    <label for="ward">Oddział:</label>
    <select v-model="orderFormState.ward" class="form-control" id="ward">
        <option v-for="ward in orderOptions.wards" v-bind:key="ward"> {{ward}} </option>
    </select>
  </div>
</div>

<div class="col-10 col-md-5 offset-1 mt-2">
  <div class="form-group">
    <label for="dispenseDate">Data podania:</label>
    <input v-model="orderFormState.dispenseDate" type="date" class="form-control" id="dispenseDate">
  </div>
</div>

<div class="col-10 col-md-5 offset-1 offset-md-0 mt-2">
  <div class="form-group">
    <label for="dispenseHour">Godzina podania:</label>
      <select v-model="orderFormState.dispenseHour"  class="form-control" id="dispenseHour">
        <option v-for="dispenseHour in orderOptions.dispenseHours" v-bind:key="dispenseHour"> {{dispenseHour}} </option>
    </select>
  </div>
</div>

<div class="col-10 offset-1 mt-3">
  <button @click.prevent="submit" type="submit" class="btn btn-success pull-right">Dodaj</button>
</div>

</form>

</main>

</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
  computed: {
    ...mapGetters({
      orderOptions: types.GET_ORDER_OPTIONS,
      orderFormState: types.GET_ORDER_FORM_STATE
    })
  },
  methods: {
    submit() {
      this.$store.commit(types.MUTATE_ADD_TO_ORDER, this.orderFormState);
    }
  }
}

</script>

<style scoped>
  .pull-right {
    float: right;
  }
</style>
