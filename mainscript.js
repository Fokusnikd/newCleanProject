const home = Vue.component("home", {
  template: `<div align="center" style="margin-top: 50px;"><img src="home.png" alt="Responsive image"></div>`
});

const suppliersEdit = Vue.component("suppliersEdit-form", {
  template: `<div align="center" style="margin-top: 50px;"><img src="home.png" alt="Responsive image"></div>`
});

// Form for make new suppliers
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
      suppliersToServer(formdata).then(router.go(-1));
    }
  }
});

// Form for make new houses
const housesForm = Vue.component("house-form", {
  data: function() {
    return {
      cityValue: "",
      addressValue: "",
      floorValue: "",
      yearValue: ""
    };
  },
  template: `<form  @submit="handlebuttonclick($event)">
    <div class="form-group">
    <label for="exampleInputCity">City</label>
    <input type="text" v-model="cityValue" class="form-control" id="exampleInputCity" placeholder="Your city">
  </div>
  <div class="form-group">
    <label for="exampleInputAddress">Adress</label>
    <input type="text" v-model="addressValue" class="form-control" id="exampleInputAddress" placeholder="Address">
  </div>
  <div class="form-group">
  <label for="exampleInputFloor">Floor</label>
  <input type="text" v-model="floorValue" class="form-control" id="exampleInputFloor" placeholder="Floor">
</div>

    <div class="form-group">
    <label for="exampleInputHouseYear">Year</label>
    <input type="text" v-model="yearValue" class="form-control" id="exampleInputHouseYear" placeholder="Year">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`,
  methods: {
    handlebuttonclick: function(e) {
      e.preventDefault();

      var formdata = {
        city: this.cityValue,
        address: this.addressValue,
        floors: this.floorValue,
        year: this.yearValue
      };
      housesToServer(formdata).then(router.go(-1));
    }
  }
});

// Table with houses
const suppliersHouses = Vue.component("suppliersHouses", {
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

// Table with suppliers
const suppliersTable = Vue.component("supplier-table", {
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
        <td><router-link :to="'/suppliers/'+supplier.id">{{supplier.first_name}}</router-link></td>
        <td>{{supplier.last_name}}</td>
        <td>{{supplier.username}}</td>
        <td><router-link :to="'/suppliers/edit/'+supplier.id">
            <button class="btn btn-outline-primary">Edit Supplier</button>
            </router-link>
        </td>
      </tr>
    </tbody>
    </table>
   <router-link to="/suppliers/add"><button class="btn btn-primary">New Supplier</button></router-link>
    </div>`
});

// Table with houses
const houseTable = Vue.component("house-table", {
  data() {
    return {
      housesFromServer: []
    };
  },
  mounted() {
    requestHousesFromServer().then(value => {
      this.housesFromServer = value;
    });
  },
  template: ` <div>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Город</th>
        <th scope="col">Адресс</th>
        <th scope="col">Этаж</th>
        <th scope="col">Год</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="house in housesFromServer">
        <td>{{house.city}}</td>
        <td>{{house.address}}</td>
        <td>{{house.floors}}</td>
        <td>{{house.year}}</td>
      </tr>
    </tbody>
    </table>
    <router-link to="/houses/add"><button class="btn btn-primary">New House</button></router-link> 
    </div>`
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
