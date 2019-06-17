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