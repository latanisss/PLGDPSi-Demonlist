import routes from './routes.js';

const savedTheme = localStorage.getItem('dark');

export const store = Vue.reactive({
    dark: savedTheme === null ? true : JSON.parse(savedTheme),
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
        document.documentElement.dataset.theme = this.dark ? 'dark' : 'light';
    },
});

document.documentElement.dataset.theme = store.dark ? 'dark' : 'light';

const app = Vue.createApp({
    data: () => ({ store }),
});
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);

app.mount('#app');
