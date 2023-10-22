import Main from "@/pages/Main.vue"
import About from "@/pages/About.vue"
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import LogIn from "@/pages/LogIn.vue";
import Support from "@/pages/Support.vue";

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/login",
        component: LogIn
    },
    {
        path: "/support",
        component: Support
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router