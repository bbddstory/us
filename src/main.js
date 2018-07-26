import Vue from 'vue'
import VueRouter from "vue-router";


import App from './App.vue'
import VueMaterial from 'vue-material';
import VueMasonry from 'vue-masonry-css';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import './css/roboto.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueMasonry);

const routes = [
  // { path: '/login', component: Bar },
  { path: '/main', component: App },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
