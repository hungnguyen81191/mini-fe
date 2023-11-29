import { isAuthenticated } from "@/middleware/checkAuth";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/pagenotfound",
        component: () => ("../views/404page.vue")
    },
    {
        path: "/",
        component: () => import("../views/Dashboard.vue"),
    },
    {
        path: "/login",
        component: () => import("../views/Login.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next)=>{
    if(!isAuthenticated() && to.path !== '/login'){
        next('/login')
    }else {
        next();
    }
});

export default router;