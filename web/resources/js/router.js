import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./components/pages/HomePage.vue";
//import Login from "./components/authentication/Login.vue";
//import Register from "./components/authentication/Register.vue";
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
    ]
});

export default router
