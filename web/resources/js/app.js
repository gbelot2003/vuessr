
import Vue from 'vue';

import vuetify from './vuetify';

import App from './components/App';


export default new Vue({
    el: '#app',
    vuetify,
    render: h => h(App)
});
