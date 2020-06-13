// import * as moment from 'moment'
import * as types from '../types'

// id z sekundy

const state = {
    commissionList: {
        ['123321']: {
            medicine: 'Acatar Acti-Tabs',
            dispenseHour: '8:00',
            dispenseDate: '05/07/2020',
            quantity: 5,
            ward: 'odzial a',
            patient: 'Adam Kowalski'
        }
    }
}

const getters = {
    [types.GET_COMMISSION]: state => state.commissionList
}

const mutations = {
    [types.MUTATE_ADD_TO_COMMISSION](state, addition) {
        state.commissionList[new Date.getTime()] = addition;
    },
    [types.MUTATE_ADD_TO_COMMISSION](state, updatedInfo, id) {
        state.commissionList[id] = updatedInfo;
    },
    [types.MUTATE_REMOVE_FROM_COMMISSION](state, id) {
        delete state.commissionList[id];
    }
};

export default {
    state,
    getters,
    mutations
}