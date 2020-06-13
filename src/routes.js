import CommissionForm from './components/CommissionForm.vue'
import CommissionList from './components/CommissionList.vue'

export const routes = [
    { path: '/', component: CommissionForm },
    { path: '/list', component: CommissionList }
];