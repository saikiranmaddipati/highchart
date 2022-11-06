<template>
  <div class="q-pa-sm">
    <div class="row">
      <div class="first-user-container shadow-4">
        <font-awesome-icon :icon="['fas', 'fa-users-line']" class="logo"/>
        <h1 class="num-heading">2456</h1>
        <p class="paragraph">Total Hospitalizations</p>
      </div>
      <div class="user-container shadow-4">
        <font-awesome-icon :icon="['fas', 'fa-users-line']" class="logo"/>
        <h1 class="num-heading">423</h1>
        <p class="paragraph">Total Readmits</p>
      </div>
      <div class="user-container shadow-4">
        <font-awesome-icon :icon="['fas', 'fa-users-line']" class="logo"/>
        <h1 class="num-heading">17 %</h1>
        <p class="paragraph">Readadmission Rate</p>
      </div>
    </div>
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
        <div class="container-1">
          <h1 class="heading-1">Patients By Readmissions Count</h1>
        </div>
        <div class="row two-container">
          <div class="q-pa-md middle-container">
            <h1 class="heading-2">1 Readmission</h1>
            <p class="paragraph-1">112 (43%)</p>
          </div>
          <div class="q-pa-md middle-container">
            <h1 class="heading-2">1 Readmission</h1>
            <p class="paragraph-1">112 (43%)</p>
          </div>
        </div>
        <div class="row ">
          <div class="q-pa-md middle-container">
            <h1 class="heading-2">1 Readmission</h1>
            <p class="paragraph-1">112 (43%)</p>
          </div>
          <div class="q-pa-md middle-container">
            <h1 class="heading-2">1 Readmission</h1>
            <p class="paragraph-1">112 (43%)</p>
          </div>
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
    <div class="row q-pa-sm q-gutter-sm">
      <div class="first-container shadow-4">
        <div
          id="container"
          style="width: 100%; height: 400px"
        >
          <highcharts :options="chartOptions3"></highcharts>
        </div>
      </div>
      <div class="first-container shadow-4">
        <div id="container" style="width: 100%; height: 90vh">
          <highcharts :options="chartOptions4"></highcharts>
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
      },
      chartOptions3: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Days between Index Admission and Readmission'
        },
        xAxis: {
          categories: ['0-7 days', '8-14 days', '15-21 days', '22-30 days']
        },
        yAxis: {
          title: {
            text: '% of Readmissions'
          },
          tickInterval: 10
        },
        series: [
          {
            name: 'Days between Index Admission and Readmission',
            color: '#36078d',
            data: [32, 32, 11, 26]
          }]
      },
      chartOptions4: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Patients With Readmissions - Age'
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

<style>
.logo{
  height: 35px;
  width: 35px;
  color: #7d24d1;
}
.num-heading{
  font-size: 30px;
  font-weight: bold;
  line-height: 1rem;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #7d24d1;
}
.first-user-container{
  height: 120px;
  width: 500px;
  padding: 20px;
  text-align: center;
  margin-left: 10px;
}
.user-container{
  height: 120px;
  width: 490px;
  padding: 20px;
  text-align: center;
  margin-left: 2px;
}
.first-container {
  width: 49%;
  padding: 5px;
  height: 420px;
}
.heading-1{
  font-family: "Roboto";
  font-size: 15px;
  font-weight: bold;
  color: #7d24d1;
  line-height: 3rem;
}
.heading-2{
  font-family: "Roboto";
  font-size: 20px;
  font-weight: bold;
  color: #7d24d1;
  line-height: 1rem;
  text-align: center;
}
.paragraph{
  font-family: "Roboto";
  font-size: 15px;
  font-weight: bold;
  color: #7d24d1;
}
.container-1{
  padding: 10px;
  border-width: 10px;
}
.paragraph-1{
  font-family: "Roboto";
  color: #7d24d1;
  font-size: 15px;
  text-align: center;
}
.middle-container{
  width: 50%;
  height: 156px;
}
</style>
