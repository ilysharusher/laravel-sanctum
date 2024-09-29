import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";
import {ref} from "vue";

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from) => {
    const isAuthenticated = localStorage.getItem('isAuth') === 'true';

    if (to.name !== 'login' && to.name !== 'register' && !isAuthenticated) {
        console.log('redirecting to login');

        return {name: 'login'};
    } else if ((to.name === 'login' || to.name === 'register') && isAuthenticated) {
        console.log('redirecting to home');

        return {name: 'home'};
    }

    return true;
});

export default router;