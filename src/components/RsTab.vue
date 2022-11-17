<template>
  <div>
    <div id="container" style="width: 100%; height: 400px">
      <highcharts :options="chartOptions1"></highcharts>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RsTab',
  data () {
    return {
      chartOptions1: {
        chart: {
          renderTo: 'container',
          type: 'pie'
        },
        title: {
          text: 'Resource Utilization - stratification'
        },
        yAxis: {
          title: {
            text: 'Total percent market share'
          }
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
            name: 'Browsers',
            data: [
              {
                name: 'No or Only Invalid Dx',
                y: 12.0,
                color: '#093fbd'
              },
              {
                name: 'Healthy Users',
                y: 15.0,
                color: '#205be6'
              },
              {
                name: 'Low',
                y: 20.0,
                color: '#386eeb'
              },
              {
                name: 'Moderate',
                y: 40.0,
                color: '#5180ed'
              },
              {
                name: 'High',
                y: 9.0,
                color: '#779cf2'
              },
              {
                name: 'Very High',
                y: 4.0,
                color: '#94b2f7'
              }
            ],
            size: '80%',
            innerSize: '50%',
            dataLabels: {
              enabled: true
            },
            dataSorting: {
              enabled: true,
              matchByName: true
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>
