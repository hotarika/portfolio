import '@scss/app.scss';
import Vue from 'vue/dist/vue.esm.js';

// *******************************
// Vue
// *******************************
// common
Vue.component('header-component', require('./common/header.vue').default);
Vue.component('footer-component', require('./common/footer.vue').default);
Vue.component('head-component', require('./common/head.vue').default);

// components
Vue.component('portfolio-component', require('./components/portfolioComponent.vue').default);
Vue.component('portfolio-section', require('./components/portfolioSection.vue').default);
Vue.component('others-products-section', require('./components/othersProductsSection.vue').default);
Vue.component('learning-section', require('./components/learningSection.vue').default);
Vue.component('learning-component', require('./components/learningComponent.vue').default);

new Vue({
   el: '#app'
});
