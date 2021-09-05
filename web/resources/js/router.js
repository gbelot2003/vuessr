import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./components/pages/HomePage.vue";
import Login from "./components/pages/Login.vue";
import Register from "./components/pages/Register.vue";
//import About from './components/pages/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HomePage,
            meta: {
                forVisitors: true
            }
        },
        {
            path: "/login",
            component: Login,
            meta: {
                forVisitors: true
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                forVisitors: true
            }
        },
    ],
    //mode: 'history'
});

export default router
