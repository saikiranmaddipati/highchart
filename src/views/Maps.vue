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
          <highcharts :constructor-type="'mapChart'" :options="chartOptions1"></highcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import HighchartsMapModule from 'highcharts/modules/map'
import mapData from '@highcharts/map-collection/countries/us/us-all.topo.json'

HighchartsMapModule(Highcharts)

Highcharts.maps.myMapName = mapData
const data = [
  ['us-ma', 10], ['us-wa', 10], ['us-ca', 10], ['us-or', 10],
  ['us-wi', 10], ['us-me', 10], ['us-mi', 10], ['us-nv', 10],
  ['us-nm', 10], ['us-co', 10], ['us-wy', 10], ['us-ks', 10],
  ['us-ne', 10], ['us-ok', 10], ['us-mo', 10], ['us-il', 10],
  ['us-in', 10], ['us-vt', 10], ['us-ar', 10], ['us-tx', 10],
  ['us-ri', 10], ['us-al', 10], ['us-ms', 10], ['us-nc', 10],
  ['us-va', 10], ['us-ia', 10], ['us-md', 10], ['us-de', 10],
  ['us-pa', 10], ['us-nj', 10], ['us-ny', 10], ['us-id', 10],
  ['us-sd', 10], ['us-ct', 10], ['us-nh', 10], ['us-ky', 10],
  ['us-oh', 10], ['us-tn', 70], ['us-wv', 10], ['us-dc', 10],
  ['us-la', 10], ['us-fl', 10], ['us-ga', 10], ['us-sc', 10],
  ['us-mn', 10], ['us-mt', 10], ['us-nd', 10], ['us-az', 10],
  ['us-ut', 10], ['us-hi', 10], ['us-ak', 10]
]
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
      },
      chartOptions1: {
        chart: {
          map: mapData
        },

        title: {
          text: 'Highcharts Maps basic demo'
        },

        subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-all.topo.json">United States of America</a>'
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        colorAxis: {
          min: 0
        },

        series: [{
          data: data,
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }]
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
