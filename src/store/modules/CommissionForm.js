import * as types from '../types';

const state = {
    commissionOptions: {
        medicines: [
            'Acatar Acti-Tabs', 'Contrahist', 'Flixonase', 'Lorafast', 'Buderhin', 'Antidol 15'
        ],
        dispenseHours: ['8:00', '15:00', '22:00'],
        ward: ['odzial a', 'odzial b', 'odzial c', 'odzial d'],
        patients: [
            'Adam Kowalski', 'Joanna Kowalska', 'Elon Kowalski', 'Leon Kowalski'
        ]
    }
}

const getters = {
    [types.GET_COMMISSION_OPTIONS]: state => state.commissionOptions
};


export default {
    state,
    getters
}