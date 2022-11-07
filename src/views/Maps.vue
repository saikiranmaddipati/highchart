<template>
  <div class="q-pa-md text-center">
    <div class="shadow-4">
      <h1 class="heading-2">By Age</h1>
      <hr />
      <div>
        <div id="container" style="width: 100%; height: 400px">
          <highcharts :options="chartOptions"></highcharts>
        </div>
      </div>
    </div>
    <div class="shadow-4">
      <h1 class="heading-2">By Age</h1>
      <hr />
      <div>
        <div id="container" style="width: 100%; height: 400px">
          <highcharts :constructor-type="'mapChart'" :options="chartOptions"></highcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
import stockInit from 'highcharts/modules/stock'

stockInit(Highcharts)
exportingInit(Highcharts)

export default {
  name: 'Maps',
  data () {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Attributed Lives'
        },
        subtitle: {
          text: '(By Age)'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b> ({point.percentage:.1f} %)'
            }
          }
        },
        series: [
          {
            data: [
              {
                name: 'unknown',
                y: 0
              },
              {
                name: 'below 18',
                y: 5
              },
              {
                name: '19-30',
                y: 32
              },
              {
                name: '31-40',
                y: 11
              },
              {
                name: '41-50',
                y: 32
              },
              {
                name: '51-65',
                y: 11
              },
              {
                name: 'above 65',
                y: 11
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.heading-2{
    font-family: "Roboto";
    font-size: 10px;
    color: green;
    font-weight: bold;
    line-height: 1rem;
}
</style>
