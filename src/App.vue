<template>
  <div id="app">
    <!--Header-->
    <navbar v-for="notification in navNotifcations" :notification="notification" :key="notification.id" />
    <!--Breadcrumb and Income Section-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-8">
          <BreadCrumb/>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="row">
            <Generalinfo v-for="info in general_info" :generalInfo="info" :key="info.id" />
          </div>
        </div>
      </div>
    </div>
    <!-- Company Section -->
    <div class="container">
      <div class="row">
        <Company v-for="company in company_information" :company="company" :key="company.id" />
      </div>
    </div>
    <!-- End Company Section -->
    <div class="row mt-4"></div>
    <!-- User Section and Testimonials -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-8">
          <div class="employee-section">
            <div class="row">
              <div class="col-md-12">
                <h2>Employee <span>List</span></h2>
              </div>
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table employee-table">
                    <thead>
                      <tr>
                        <th scope="col">User</th>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Status</th>
                        <th scope="col">Performace</th>
                      </tr>
                    </thead>
                    <tbody>
                      <EmployeeList v-for="employee in employeeList" :employee="employee" :key="employee.id" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-12 col-lg-4">
          <Quotes v-for="quote in quotes" :quote="quote" :key="quote.id" />
        </div>
      </div>
    </div>
    <!-- User Section and Testimonials -->
  </div>
</template>

<script>
  import VueCircle from "vue2-circle-progress";
  import Quotes from "./components/Quotes.vue"
  import Company from "./components/Company.vue"
  import Generalinfo from "./components/Generalinfo.vue"
  import navbar from "./components/navbar.vue"
  import BreadCrumb from "./components/BreadCrumbs.vue"
  import EmployeeList from "./components/EmployeeList.vue"
  import axios from 'axios'
  
  
  export default {
    name: "app",
    components: {
      VueCircle,
      Quotes,
      Company,
      Generalinfo,
      navbar,
      BreadCrumb,
      EmployeeList
    },
    data() {
      return {
        general_info: [],
        employeeList: [],
        navNotifcations: [],
        quotes: [],
        company_information: [],
      };
    },
    methods: {},
    mounted() {
      axios.get(`/data.json`)
        .then(response => {
          this.employeeList = response.data.employeeList
          this.general_info = response.data.general_info
          this.quotes = response.data.quotes
          this.company_information = response.data.companyInfo
          this.navNotifcations = response.data.navNotification
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  
  };
</script>

<style lang="scss">
  .employee-table {
    text-align: center;
  }
  
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: white;
  }
  
  .employee-section {
    background: white;
    padding: 10px;
    h2 {
      font-size: 20px;
      font-weight: bold;
      span {
        color: grey;
        font-weight: 172;
      }
    }
  }
</style>
