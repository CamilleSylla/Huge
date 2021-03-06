import React from 'react';
import ReactApexChart from 'react-apexcharts';
import item  from  './GlobalData';

function renderPercentData() {
  return item.production.map((production, i) => {
      const {semi, recolte } = production
      
      let percent = []

      let start = new Date(semi), end = new Date(recolte), today = new Date ();
      let q = Math.round(today-start);
      let d = Math.round(end-start);

      let division = Math.round((q/d)*100); 

      if (division < 100 && division > 0) {
        percent.push(division)
      }
      return (
        percent
      )
        
      
      
          
      }
  ); 
};
function renderLabelData() {
  return item.production.map((production, i) => {
      const {parcelle, produit, total, utilise, semi, recolte } = production
      
        return (
          [produit, parcelle]
        )
      
      
          
      }
  ); 
};

class Progress extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: renderPercentData(),
        options: {
            
          chart: {
            height: 50,
            type: 'radialBar',
            
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              },
            }
          },
          labels: renderLabelData(),
        },
      
      
      };
    }

  

    render() {
      return (
        


  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} />
</div>



      );
    }
  }
export default Progress;
