
import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import config from './config_firebase'

Vue.config.productionTip = false
let app = '';

/* congfig_firebase i egen fil */


firebase.initializeApp(config); 

firebase.auth().onAuthStateChanged(() =>{
  if (!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');

  }
});

