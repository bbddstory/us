import Vue from "vue";
import App from "../components/App.vue";

Vue.config.productionTip = false;

import VueMaterial from 'vue-material';
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueMasonry from 'vue-masonry-css';

Vue.use(VueMaterial);
Vue.use(VueMasonry);
// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)

new Vue({
    el: '#app-root',
    render: h => h(App),
    // components: { App },
    // template: '<App/>',
})