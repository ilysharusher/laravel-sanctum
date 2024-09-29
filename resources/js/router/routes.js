const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../Pages/Home.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../Pages/Auth/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../Pages/Auth/Login.vue')
    },
    {
        path: '/logout',
        name: 'logout',
    }
];

export default routes;