const home = Vue.component("home", {
  template: `<h1>home</h1>`
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
  template: `<form>
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
  <button type="submit" @click="handlebuttonclick($event)" class="btn btn-primary">Submit</button>
  </form>`,
  methods: {
    handlebuttonclick: function(e) {
      e.preventDefault();

      var formdata = {
        name: this.nameValue,
        surname: this.surNameValue,
        mail: this.mailValue,
        username: this.userNameValue
      };

      this.$emit("new-sup", formdata);
    }
  }
});

const houses = Vue.component("houses", {
  template: `<h1>houses</h1>`
});

const userTable = Vue.component("user-table", {
  template: `<div>
  <table class="table">
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
</table>
<router-link to="/suppliers/add">Перейти к suppliers</router-link>
</div>`
});

const routes = [
  { path: "/home", component: home },
  { path: "/suppliers", component: userTable },
  { path: "/suppliers/add", component: suppliersForm },
  { path: "/houses", component: houses }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount("#app");
