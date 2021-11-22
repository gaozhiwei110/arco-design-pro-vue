import { createApp } from 'vue';

import ArcoVue from '@arco-design/web-vue';

import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import globalComponents from '@/components/index';

import router from './router';

import store, { key } from './store';
import i18n from './locale';
import './mock';

import App from './App.vue';

import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

app.use(router);
app.use(store, key);
app.use(i18n);
app.use(globalComponents);

// app.config.globalProperties.echarts = echarts;

app.mount('#app');
