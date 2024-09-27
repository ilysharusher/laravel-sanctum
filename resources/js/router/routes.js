const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import('../Pages/Auth/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../Pages/Auth/Login.vue')
    }
];

export default routes;