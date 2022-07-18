import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-ui
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')