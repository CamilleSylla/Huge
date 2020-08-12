
  import React from 'react';
  import ReactApexChart from 'react-apexcharts';
  import moment from 'moment';


  export default function Timeline() {
    window.moment = moment

    const series = [
      {
        name: 'Patates',
        data: [
          {
            x: 'Parcelle 1',
            y: [
              new Date('2019-01-01').getTime(),
              new Date('2019-06-15').getTime()
            ]
          },
          {
            x: 'Parcelle 2',
            y: [
              new Date('2019-02-08').getTime(),
              new Date('2019-03-11').getTime()
            ]
          },
          {
            x: 'Parcelle 3',
            y: [
              new Date('2019-06-11').getTime(),
              new Date('2019-08-16').getTime()
            ]
          }
        ]
      },

      {
        name: 'Laitue',
        data: [
          {
            x: 'Parcelle 1',
            y: [
              new Date('2019-05-05').getTime(),
              new Date('2019-11-08').getTime()
            ]
          },
          {
            x: 'Parcelle 2',
            y: [
              new Date('2019-07-08').getTime(),
              new Date('2019-09-11').getTime()
            ]
          },
          {
            x: 'Parcelle 3',
            y: [
              new Date('2019-08-11').getTime(),
              new Date('2019-09-16').getTime()
            ]
          }
        ]
      },
    ];


    const options = {
      chart: {
        height: 350,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          var a = moment(val[0])
          var b = moment(val[1])
          var diff = b.diff(a, 'weeks')
          return diff + (diff > 1 ? ' semaines' : ' weeks')
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'MM/yy'
        }
    },
      legend: {
        position: 'bottom'
      }
    };

    return(
      <div>
        <ReactApexChart options={options} series={series} type="rangeBar" height={350} />
      </div>
    )
  
  };
    
  