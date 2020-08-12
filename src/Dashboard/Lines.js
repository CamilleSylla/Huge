import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Lines() {
    const series = [
      {
        name: "patates",
        data: [
        {
          y: '5000',
          x:new Date('2019-06-15').getTime()
        },
        {
          y: '3000',
          x: new Date('2019-08-01').getTime(), 
        },
        {
          y: '50',
          x: new Date('2019-10-01').getTime(), 
        },
        {
          y: '2000',
          x: new Date('2019-12-01').getTime(), 
        }
      ]
    },{
      name: "choux",
      data: [
      {
        y: '2500',
        x:new Date('2019-04-15').getTime()
      },
      {
        y: '1250',
        x: new Date('2019-05-01').getTime(), 
      },
      {
        y: '4236',
        x: new Date('2019-10-01').getTime(), 
      },
      {
        y: '935',
        x: new Date('2019-11-01').getTime(), 
      }
    ]
  },
  ];
    const options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Courbes des produits utilisées',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', '#15bd70'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        type: 'datetime'
      }
    };
  
  

    return(
        <div>
          <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
      )
    
    };