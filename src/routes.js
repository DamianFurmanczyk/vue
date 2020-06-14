import OrderForm from './components/OrderForm.vue'
import OrderList from './components/OrderList.vue'

export const routes = [
    { path: '/', component: OrderForm },
    { path: '/list', component: OrderList }
];