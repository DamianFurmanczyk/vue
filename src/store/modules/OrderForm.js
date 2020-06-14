import * as types from '../types';
import orderOptions from './data/orderOptions';

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    console.log(local.toJSON().slice(0, 10))
    return local.toJSON().slice(0, 10);
});

const state = {
    orderOptions,
    orderFormState: {
        medicine: orderOptions.medicines[0],
        dispenseHour: orderOptions.dispenseHours[0],
        ward: orderOptions.wards[0],
        patient: '',
        dispenseDate: new Date().toDateInputValue(),
        quantity: 1
    }
}

const getters = {
    [types.GET_ORDER_OPTIONS]: state => state.orderOptions,
    [types.GET_ORDER_FORM_STATE]: state => state.orderFormState
};

const mutations = {
    [types.MUTATE_UPDATE_ORDER_FORM_STATE](state, newState) {
        state.orderFormState = newState;
    }
};


export default {
    state,
    getters,
    mutations
}