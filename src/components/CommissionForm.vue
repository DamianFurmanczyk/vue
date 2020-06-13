<template>

<main class="container mainContent">

<form class="row">
    {{JSON.stringify(commissionOptions)}}

    <select class="form-control">
  <option>Default select</option>
</select>

<div class="col-10 col-md-5 offset-1 mt-2">
  <div class="form-group">
    <label for="medicine">Lek:</label>
    <select type="text" class="form-control" id="medicine">
      <option>Default select</option>
    </select>
  </div>
</div>

<div class="col-10 col-md-5 offset-1 offset-md-0 mt-2">
      <div class="form-group">
    <label for="quantity">Ilość:</label>
    <input type="number" class="form-control" id="quantity">
  </div>
</div>

<div class="col-10 col-md-5 offset-1 mt-2">
  <div class="form-group">
    <label for="patient">Pacjent:</label>
    <select type="text" class="form-control" id="patient">
      <option>Default select</option>
    </select>
  </div>
</div>

<div class="col-10 col-md-5 offset-1 offset-md-0 mt-2">
    <div class="form-group">
    <label for="ward">Oddział:</label>
    <select type="text" class="form-control" id="ward">
      <option>Default select</option>
    </select>
  </div>
</div>

<div class="col-10 col-md-5 offset-1 mt-2">
  <div class="form-group">
    <label for="dispenseDate">Data podania:</label>
    <input type="date" class="form-control" id="dispenseDate">
  </div>
</div>

<div class="col-10 col-md-5 offset-1 offset-md-0 mt-2">
  <div class="form-group">
    <label for="dispenseHour">Godzina podania:</label>
    <input type="time" class="form-control" id="dispenseHour">
  </div>
</div>

<div class="col-10 offset-1 mt-3">
  <button type="submit" class="btn btn-success pull-right">Sign in</button>
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
      commissionOptions: types.GET_COMMISSION_OPTIONS
    })
  }
}

</script>

<style scoped>
  .pull-right {
    float: right;
  }
</style>
