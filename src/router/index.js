const Home = () => import('../views/Home-page.vue');
const About = () => import('../views/About-page.vue');
const Portfolio = () => import('../views/Portfolio-page.vue');
const Maps = () => import('../views/Map-page.vue');
const Contacts = () => import('../views/Contacts-page.vue');

const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/portfolio', component: Portfolio},
    { path: '/map', component: Maps},
    { path: '/contacts', component: Contacts},
]

export default routes;