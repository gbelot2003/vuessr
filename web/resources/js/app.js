
import Vue from 'vue';
import vuetify from './vuetify';
import App from './components/App';
import router from './router';
import store from './states/store';

Vue.config.productionTip = false

export default new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
