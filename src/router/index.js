import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import RoomsPage from "../pages/RoomsPage.vue";
import RoomDetailsPage from "../pages/RoomDetailsPage.vue";
import BookingPage from "../pages/BookingPage.vue";
import ContactPage from "../pages/ContactPage.vue";

const Home = { path: '/', component: HomePage }

const routes = [
    Home,
    { path: "/:catchAll(.*)", component: NotFoundPage},
    { path: '/', component: HomePage },
    { path: '/rooms', component: RoomsPage },
    { path: '/rooms/:roomId', component: RoomDetailsPage, props: true },
    { path: '/booking', component: BookingPage },
    { path: '/contact', component: ContactPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router