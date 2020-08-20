import React from 'react';


import item from '../GlobalData';



class Planches extends React.Component{
    state=item;
    userXY= {
        x: '25',
        y: '0.8'
    }
    render () {
        console.log(this.state.production[0])
        const t = this.state.production[0].total;
        const x = this.userXY.x;
        const y = this.userXY.y;
        console.log(t, x ,y)
        const res = (( t /  (((x*100)*(y*100))/100)));
        console.log(res)
            return (
                <div>

                </div>
            )
        }
        
}
export default Planches;