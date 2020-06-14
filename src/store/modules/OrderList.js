import * as types from '../types'

const state = {
    orderList: []
}

const getters = {
    [types.GET_ORDER]: state => state.orderList
}

const mutations = {
    [types.MUTATE_ADD_TO_ORDER](state, addition) {
        if (addition.quantity < 1) return alert('Nieprawidłowe dane');

        const orderId = `${addition.patient}_${addition.medicine}_${addition.dispenseHour}_${addition.ward}_${addition.dispenseDate}`.replace(/ /g, "_")

        // eslint-disable-next-line
        let stateBranchForTheAddition = state.orderList[orderId];
        const similarRecord = state.orderList.find(el => el.orderId == orderId);

        if (similarRecord) {
            const numValueQuantityPresent = parseInt(similarRecord.quantity);
            similarRecord.quantity = numValueQuantityPresent + +addition.quantity;
        } else {
            state.orderList.push({...addition, orderId });
        }
    },
    [types.MUTATE_REMOVE_FROM_ORDER](state, orderId) {
        const toRemove = state.orderList.find(el => el.orderId == orderId);
        state.orderList = state.orderList.filter(el => el != toRemove);
    }
};

export default {
    state,
    getters,
    mutations
}