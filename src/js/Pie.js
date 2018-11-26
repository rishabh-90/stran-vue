import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,
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
        tooltips: {
            enabled: false
          },
          legend: {
            display: false  // <- the important part
          },
    })
    }
  }
  