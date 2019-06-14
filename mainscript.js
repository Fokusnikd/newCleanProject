const home = Vue.component("home", {
  template: "<h1>It's Home</h1>"
});

const suppliersForm = Vue.component("sup-form", {
  data: function() {
    return {
      nameValue: "",
      surNameValue: "",
      mailValue: "",
      userNameValue: ""
    };
  },
  template: `<form  @submit="handlebuttonclick($event)">
    <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text" v-model="nameValue" class="form-control" id="exampleInputName" placeholder="Your name">
  </div>
  <div class="form-group">
    <label for="exampleInputSurName">Surname</label>
    <input type="text" v-model="surNameValue" class="form-control" id="exampleInputSurName" placeholder="Your surname">
  </div>
  <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="text" v-model ="mailValue" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
    <label for="exampleInputUserName">UserName</label>
    <input type="text" v-model="userNameValue" class="form-control" id="exampleInputUserName" placeholder="Enter your nickname">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`,
  methods: {
    handlebuttonclick: function(e) {
      e.preventDefault();

      var formdata = {
        first_name: this.nameValue,
        last_name: this.surNameValue,
        email: this.mailValue,
        username: this.userNameValue
      };
      suppliersToServer(formdata).then(
        router.go(-1)
      );
    }
  }
});

const houses = Vue.component("houses", {
  data() {
    return {
      suppliersHouses: []
    };
  },
  mounted() {
    requestHousesForSupplierFromServer(this.$route.params.userId).then(
      value => {
        this.suppliersHouses = value;
      }
    );
  },
  template: ` <div>
  <table class="table">
<thead>
  <tr>
    <th scope="col">Город</th>
    <th scope="col">Адрес</th>
    <th scope="col">Этажность</th>
    <th scope="col">Год</th>
  </tr>
</thead>
<tbody>
  <tr  v-for="house in suppliersHouses">
    <td>{{house.city}}</td>
    <td>{{house.address}}</td>
    <td>{{house.floors}}</td>
    <td>{{house.year}}</td>
  </tr>
</tbody>
</table>
<router-link to="/suppliers/add">Перейти к suppliers</router-link>
</div>`
});

const userTable = Vue.component("user-table", {
  data() {
    return {
      suppliersFromServer: []
    };
  },
  mounted() {
    requestSuppliersFromServer().then(value => {
      this.suppliersFromServer = value;
    });
  },
  template: ` <div>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Фамилия</th>
        <th scope="col">Username</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="supplier in suppliersFromServer">
        <td><router-link :to="'/houses/'+supplier.id">{{supplier.first_name}}</router-link></td>
        <td>{{supplier.last_name}}</td>
        <td>{{supplier.username}}</td>
      </tr>
    </tbody>
    </table>
   <button><router-link to="/suppliers/add">Table</router-link></button> 
    </div>`
});

const tables = Vue.component("tables", {
  template: `<h1>houses</h1>`
});

const routes = [
  { path: "/home", component: home },
  { path: "/tables", component: tables },
  { path: "/suppliers", component: userTable },
  { path: "/suppliers/add", component: suppliersForm },
  { path: "/houses/:userId", component: houses }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount("#app");
