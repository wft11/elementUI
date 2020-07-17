import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Input = () =>
    import ("../views/lianxi/Input.vue")
const Practice = () =>
    import ("../views/lianxi/Practice.vue")
const Message = () =>
    import ("../views/message/Message.vue")
const Order = () =>
    import ("../views/order/Order.vue")
const Home = () =>
    import ("../views/home/Home.vue")
const Users = () =>
    import ("../views/users/Users.vue")

const routes = [
    { path: "/input", name: "input", component: Input },
    { path: "/practice", name: "practice", component: Practice },
    { path: "/message", name: "message", component: Message },
    { path: "/order", name: "order", component: Order },
    { path: "/home", name: "home", component: Home },
    { path: "/users", name: "users", component: Users }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router