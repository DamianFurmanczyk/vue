import Vue from 'vue';
import Vuex from 'vuex';

import orderForm from './modules/OrderForm';
import orderList from './modules/OrderList';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        orderForm,
        orderList
    }
});