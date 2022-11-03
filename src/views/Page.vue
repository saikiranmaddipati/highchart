<template>
  <div>
    <div class="row q-pa-sm q-gutter-sm">
      <div class="first-container shadow-4">
        <div
          id="container"
          style="width: 100%; height: 400px"
        >
          <highcharts :options="chartOptions"></highcharts>
        </div>
      </div>
      <div class="first-container shadow-4">
        <div id="container" style="width: 100%; height: 90vh">
          <highcharts :options="chartOptions1"></highcharts>
        </div>
      </div>
    </div>
    <div class="row q-pa-sm q-gutter-sm">
      <div class="first-container shadow-4">
        <div
          id="container"
          style="width: 100%; height: 400px"
        >
          <highcharts :options="chartOptions2"></highcharts>
        </div>
      </div>
      <div class="first-container shadow-4">
        <div id="container" style="width: 100%; height: 90vh">
          <highcharts :options="chartOptions1"></highcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(Highcharts)

export default {
  name: 'Page',
  data () {
    return {
      chartOptions: {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Readmissions Rate'
        },
        xAxis: {
          categories: [
            'Dec-19',
            'Jan-20',
            'Feb-20',
            'Mar-20',
            'Apr-20',
            'May-20',
            'Jun-20',
            'Jul-20',
            'Aug-20',
            'Sep-20',
            'Oct-20',
            'Nov-20'
          ]
        },
        yAxis: {
          title: {
            text: 'Readmissions Rate'
          },
          gridLineWidth: 1
        },
        series: [
          {
            name: 'Readmissions Rate',
            color: '#0d32dc',
            data: [23, 36, 26, 44, 36, 39, 38, 24, 36, 45, 46, 30]
          }
        ]
      },
      chartOptions1: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Patients With Readmissions By Gender'
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
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [
          {
            name: 'Male',
            name1: 'Female',
            name2: 'Others',
            data: [
              {
                name: 'Male',
                y: 54.3
              },
              {
                name: 'Female',
                y: 45.39
              },
              {
                name: 'Other',
                y: 0.31
              }
            ]
          }
        ]
      },
      chartOptions2: {
        chart: {
          renderTo: 'container',
          type: 'column'
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          title: {
            text: 'Fruit Number'
          },
          tickInterval: 1
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          },
          tickInterval: 1
        },
        series: [{
          name: 'Jane',
          data: [1, 0, 4]
        }, {
          name: 'John',
          data: [5, 7, 3]
        }]
      }
    }
  }
}
</script>

<style>
.first-container {
  width: 49%;
  padding: 5px;
  height: 420px;
}
</style>
