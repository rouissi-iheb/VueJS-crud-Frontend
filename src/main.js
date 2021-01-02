import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import KeysList from './components/KeysList'
import Home from './components/home';
import EditKey from './components/EditKey';
import AddKey from './components/AddKey';
import moment from 'moment'


Vue.use(VueRouter);
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
});
const routes = [
  {path:'/KeysList',component:KeysList},
  {path:'/',component:Home},
  {path:'/EditKey/:KeyID',component:EditKey},
  {path:'/AddKey',component:AddKey},
];

const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
