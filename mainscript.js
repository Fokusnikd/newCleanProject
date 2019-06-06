
const home = Vue.component("home", {
  template: `<h1>home</h1>`
});
const houses = Vue.component("houses", {
  template: `<h1>houses</h1>`
});

const userTable = Vue.component("user-table",{
template: `<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Имя</th>
    <th scope="col">Фамилия</th>
    <th scope="col">Username</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</table>`
});

const routes = [
    { path: "/home", component: home },
  { path: "/suppliers", component: userTable },
  { path: "/houses", component: houses }
];


const router = new VueRouter({
  routes 
});

const app = new Vue({
  router
}).$mount("#app");
