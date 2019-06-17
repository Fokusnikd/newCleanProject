const home = Vue.component("home", {
  template: `<div align="center" style="margin-top: 50px;"><img src="home.png" alt="Responsive image"></div>`
});

// Место, где описываются руты
const routes = [
  { path: "/home", component: home },
  { path: "/houses", component: houseTable },
  { path: "/houses/add", component: housesForm },
  { path: "/suppliers", component: suppliersTable },
  { path: "/suppliers/add", component: suppliersForm },
  { path: "/suppliers/edit/:userId", component: suppliersEdit },
  { path: "/suppliers/:userId", component: suppliersHouses }
];

const router = new VueRouter({
  routes
});

// Экземпляр Vue
const app = new Vue({
  router
}).$mount("#app");
