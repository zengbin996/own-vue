import { createApp } from 'vue';
import App from './App.vue';

// language
import i18n from './lang/index';

//css style
import './assets/common.css';
import './index.css';

//iconfont
import './assets/font/iconfont.js';

//router
import router from './router/index';

//store
import store from './store/index';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);
app.mount('#app');
