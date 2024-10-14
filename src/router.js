import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import SingleProduct from './SingleProduct.vue'

const routes = [
  { 
    path: 
    '/',
    name: 'home', 
    component: App 
},
  { path: 
    '/products/:id', 
    name: 'single.product',
    component: SingleProduct },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router