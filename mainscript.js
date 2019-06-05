
const suppliers = Vue.component("suppliers", {
  template: `<h1>suppliers</h1>`
});
const houses = Vue.component("houses", {
  template: `<h1>houses</h1>`
});


const routes = [
  { path: "/suppliers", component: suppliers },
  { path: "/houses", component: houses }
];


const router = new VueRouter({
  routes 
});

const app = new Vue({
  router
}).$mount("#app");
