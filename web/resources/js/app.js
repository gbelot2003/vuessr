
import Vue from 'vue';
import vuetify from './vuetify';
import App from './components/App';
import router from './router';

Vue.config.productionTip = false

export default new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app');
