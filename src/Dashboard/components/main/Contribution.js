
  import React from 'react';
  import ReactApexChart from 'react-apexcharts';
  import moment from 'moment';

  //dataimport 

import item from '../../GlobalData'

function renderData() {
  return item.production.map((production, i) => {
      const {parcelle, produit, total, utilise, semi, recolte } = production
    
      return (
        {
          name: produit,
          data: [
            {
              x: parcelle,
              y: [
                new Date(semi).getTime(),
                new Date(recolte).getTime()
              ]
            },
          ]
        }
      )
          
      }
  ); 
};

  export default function Timeline() {
    window.moment = moment
    
    const series = renderData();
    

    const options = {
      chart: {
        height: 350,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '100%',
        
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
      stroke: {
        width: 1
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
    
  