import Vue from 'vue';
import Vuex from 'vuex';

import commissionForm from './modules/CommissionForm';
import commissionList from './modules/CommissionList';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        commissionForm,
        commissionList
    }
});