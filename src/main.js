import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import VueExpandableImage from 'vue-expandable-image';
import router from './router';

import App from './App.vue';

Vue.use(VueCarousel);
Vue.use(VueExpandableImage);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
