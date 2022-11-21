<template>
  <div class="q-pa-sm">
    <div class="q-gutter-y-md" style="max-width: 1900px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          @click="getRouteTab(tab)"
        >
          <q-tab
            name="ResourceUtilizationstratification"
            label="Resource Utilization - stratification"
          />
          <q-tab name="CareDensityQuantile" label="Care Density Quantile" />
          <q-tab name="CareCoordinationRisk" label="Care Coordination Risk" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="ResourceUtilizationstratification">
            <rs-tab />
          </q-tab-panel>

          <q-tab-panel name="CareDensityQuantile">
            <div id="container" style="width: 100%; height: 400px">
              <highcharts :options="chartOptions11"></highcharts>
            </div>
          </q-tab-panel>

          <q-tab-panel name="CareCoordinationRisk">
            <div id="container" style="width: 100%; height: 400px">
              <highcharts :options="chartOptions12"></highcharts>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <div class="q-pa-sm">
      <div class="q-gutter-y-md" style="max-width: 1900px">
        <q-card>
          <q-tabs
            v-model="tab1"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
          >
            <q-tab
              name="Inpatient Hospitalization Count"
              label="Inpatient Hospitalization Count"
            />
            <q-tab name="Emergency Visit Count" label="Emergency Visit Count" />
            <q-tab
              name="OutPatient Visit Count"
              label="OutPatient Visit Count"
            />
            <q-tab
              name="Major Service Visit Count"
              label="Major Service Visit Count"
            />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab1" animated>
            <q-tab-panel name="Inpatient Hospitalization Count">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions2"></highcharts>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Emergency Visit Count">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions3"></highcharts>
              </div>
            </q-tab-panel>

            <q-tab-panel name="OutPatient Visit Count">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions4"></highcharts>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Major Service Visit Count">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions5"></highcharts>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
    <div class="q-pa-sm">
      <div class="q-gutter-y-md" style="max-width: 1900px">
        <q-card>
          <q-tabs
            v-model="tab2"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
          >
            <q-tab
              name="Unique Provider Count"
              label="Unique Provider Count"
            />
            <q-tab name="Specialty Provider Count" label="Specialty Provider Count" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab2" animated>
            <q-tab-panel name="Unique Provider Count">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions6"></highcharts>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Specialty Provider Count">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions7"></highcharts>
              </div>
            </q-tab-panel>

          </q-tab-panels>
        </q-card>
      </div>
    </div>
    <div class="q-pa-sm">
      <div class="q-gutter-y-md" style="max-width: 1900px">
        <q-card>
          <q-tabs
            v-model="tab3"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
          >
            <q-tab
              name="Unplanned Inpatient Hospitalizations"
              label="Unplanned Inpatient Hospitalizations"
            />
            <q-tab name="30 Day Readmissions Count" label="30 Days Readmissions Count" />
            <q-tab name="30 Day Unplanned Readmissions Count" label="30 Day Unplanned Readmissions Count" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab3" animated>
            <q-tab-panel name="Unplanned Inpatient Hospitalizations">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions8"></highcharts>
              </div>
            </q-tab-panel>

            <q-tab-panel name="30 Day Readmissions Count">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions9"></highcharts>
              </div>
            </q-tab-panel>

            <q-tab-panel name="30 Day Unplanned Readmissions Count">
              <div id="container" style="width: 100%; height: 400px">
                <highcharts :options="chartOptions10"></highcharts>
              </div>
            </q-tab-panel>

          </q-tab-panels>
        </q-card>
      </div>
    </div>
    <TablePop :isOpenIHCDialogBox="isOpenIHCDialogBox"
              v-on:closeDialogBox="closeDialogBox"
              :isopenUPCDialogBox="isopenUPCDialogBox" />
  </div>
</template>

<script>
import TablePop from '../components/TablePop.vue'
import RsTab from '../components/RsTab.vue'
export default {
  components: {
    TablePop,
    RsTab
  },
  data () {
    return {
      isOpenIHCDialogBox: false,
      isopenUPCDialogBox: false,
      tab: 'ResourceUtilizationstratification',
      tab1: 'Inpatient Hospitalization Count',
      tab2: 'Unique Provider Count',
      tab3: 'Unplanned Inpatient Hospitalizations',
      tabName: '',
      chartOptions2: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Inpatient Hospitalization Count'
        },
        xAxis: {
          categories: ['0', '1', '2', '3', '4', '5']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 5000,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: 'Inpatient Hospitalization Count',
            color: '#36078d',
            data: [13675, 540, 95, 22, 3, 1],
            point: {
              events: {
                click: () => {
                  this.openDialogBox()
                }
              }
            }
          }
        ]
      },
      chartOptions3: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Emergency Visit Count'
        },
        xAxis: {
          categories: ['0', '1', '2', '3', '4+']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 2500,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: 'Emergency Visit Count',
            color: '#36078d',
            data: [12736, 1306, 203, 55, 36]
          }
        ]
      },
      chartOptions4: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'OutPatient Visit Count'
        },
        xAxis: {
          categories: ['0', '1-10', '11-20', '21-40', '40+']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 2000,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: 'OutPatient Visit Count',
            color: '#36078d',
            data: [2341, 7671, 2345, 1464, 515]
          }
        ]
      },
      chartOptions5: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Major Service Visit Count'
        },
        xAxis: {
          categories: ['Major Procedure Performed', 'skilled Nursing Services', 'Cancer Treatment', 'Dialysis Service']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 100,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: 'Major Service Visit Count',
            color: '#36078d',
            data: [485, 218, 104, 10]
          }
        ]
      },
      chartOptions6: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Unique Provider Count'
        },
        xAxis: {
          categories: ['0', '1', '2', '3', '4', '5+']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 1000,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: 'Unique Provider Count',
            color: '#36078d',
            data: [3451, 4418, 3001, 1761, 880, 825],
            point: {
              events: {
                click: () => {
                  this.openDialogBoxUpc()
                }
              }
            }
          }
        ]
      },
      chartOptions7: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Unique Specialty Provider Count'
        },
        xAxis: {
          categories: ['0', '1', '2', '3', '4', '5']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 2000,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: 'Specialty Provider Count',
            color: '#36078d',
            data: [3451, 6470, 2808, 1057, 354, 196]
          }
        ]
      },
      chartOptions8: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Unplanned Inpatient Hospitalizations'
        },
        xAxis: {
          categories: ['0', '1', '2', '3', '4']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 100,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: 'Unplanned Inpatient Hospitalizations',
            color: '#36078d',
            data: [366, 40, 14, 1, 1]
          }
        ]
      },
      chartOptions9: {
        chart: {
          type: 'column'
        },
        title: {
          text: '30 Day Readmissions Count'
        },
        xAxis: {
          categories: ['1', '2', '4']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 20,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: '30 Day Readmissions Count',
            color: '#36078d',
            data: [57, 6, 1]
          }
        ]
      },
      chartOptions10: {
        chart: {
          type: 'column'
        },
        title: {
          text: '30 Day Unplanned Readmissions Count'
        },
        xAxis: {
          categories: ['1', '2', '3']
        },
        yAxis: {
          title: {
            text: 'Patient Count'
          },
          tickInterval: 10,
          stackLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
              fontWeight: 'bold',
              color: 'black'
            }
          }
        },
        series: [
          {
            name: '30 Day Unplanned Readmissions Count',
            color: '#36078d',
            data: [28, 2, 1]
          }
        ]
      },
      chartOptions11: {
        chart: {
          renderTo: 'container',
          type: 'pie'
        },
        title: {
          text: 'Care Density Quantile'
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
                name: 'Low',
                y: 48.0,
                color: '#093fbd'
              },
              {
                name: 'Mid',
                y: 36.0,
                color: '#205be6'
              },
              {
                name: 'Top',
                y: 16.0,
                color: '#386eeb'
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
      },
      chartOptions12: {
        chart: {
          renderTo: 'container',
          type: 'pie'
        },
        title: {
          text: 'Care Coordination Risk'
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
                name: 'Will possibly expericence coordination issues',
                y: 3.0,
                color: '#093fbd'
              },
              {
                name: 'Will likely experience coordination issues',
                y: 96.0,
                color: '#205be6'
              },
              {
                name: 'Unlikely to experience coordination issues',
                y: 1.0,
                color: '#386eeb'
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
  },
  methods: {
    openDialogBox () {
      this.isOpenIHCDialogBox = true
    },
    closeDialogBox () {
      this.isOpenIHCDialogBox = false
      this.isopenUPCDialogBox = false
    },
    openDialogBoxUpc () {
      this.isopenUPCDialogBox = true
    },
    getRouteTab (tab) {
      this.$router.push({ query: { tab: tab } })
    },
    getRoute () {
      if (!this.$route.fullPath.includes('?')) {
        this.tab = 'ResourceUtilizationstratification'
      } else {
        this.tab = this.$route.query.tab
      }
    }
  },
  watch: {
    $route () {
      this.getRoute()
    }
  },
  mounted () {
    window.onload = () => {
      console.log(this.$route.query.tab)
      this.tab = this.$route.query.tab ? this.$route.query.tab : 'ResourceUtilizationstratification'
    }
  }
}
</script>

<style scoped>
.title-headings {
  font-family: "Roboto";
  font-size: 15px;
  font-weight: bold;
  color: lightgray;
}
</style>
