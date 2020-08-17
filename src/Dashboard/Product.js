import React from 'react';
import ReactApexChart from 'react-apexcharts';
import item from './GlobalData';

function renderPercentData() {
  return item.production.map((production, i) => { 
    const {parcelle, produit, total, utilise, semi, recolte } = production

    return (
      {
        name: produit,
        data: [
          {
            x: new Date(semi).getTime(),
            y: utilise,
          },
        ]
      }
    )
   } 
  ) 
}

export default function Product() {

    const series = renderPercentData(); /*[{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }];*/
      const options = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          type: 'datetime',
        labels: {
          format: 'MM/yy'
        }
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      };

    return(
        <div>
          <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
      )
    
    };