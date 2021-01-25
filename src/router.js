import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import Register from "./views/Register.vue";
import Loginchoice from "./views/Loginchoice.vue";


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/loginchoice',
            name: 'loginchoice',
            component: Loginchoice,
            
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            props: true
        },
    ]
});