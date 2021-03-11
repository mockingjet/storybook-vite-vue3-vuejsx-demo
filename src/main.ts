import { createApp } from 'vue';
import router from "@/router";
import store from "@/store";
import App from '@/App';

import '@/assets/styles/tailwind.sass';

createApp(App).use(router).use(store).mount('#app');
