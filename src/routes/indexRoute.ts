import { createRouter,  createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../views/Dashboard.vue")
    },
    {
        path: "/login",
        component: () => import("../views/Login.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next)=>{
    if(to.path !== '/login')next({path: '/login'})
    else next();
});

export default router;