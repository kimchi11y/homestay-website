import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const Home = { path: '/', component: HomePage }

const routes = [
    Home,
    { path: "/:catchAll(.*)", component: NotFoundPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router