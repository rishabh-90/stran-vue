import {Line} from "vue-chartjs"
export default {
    extends: Line,
    props:{
      chartdata: {
          type: Object,
          default: null
        }
  },
    mounted () {
      this.renderChart(this.chartdata, 
      {
        responsive: true, 
        maintainAspectRatio: false,
        legend: {
          display: false
      },
      scales: {
          yAxes: [{
              ticks: {
                  display: false
              },
              gridLines: {
                  display: false,
                  drawBorder: false
              }
          }],
          xAxes: [{
              ticks: {
                  display: false
              },
              gridLines: {
                  display: false,
                  drawBorder: false
              }
          }]
      },

      }
      )
    }
  }