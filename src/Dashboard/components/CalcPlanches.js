import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import item from '../GlobalData';

const useStyles = theme =>({
    root: {
        width: "100%",
        textAlign: "center",
    },
});

class Planches extends React.Component{
    state=item;
    userXY= {
        x: '',
        y: ''
    };
    onLargeurChange = (event) => {
        this.userXY.x = event.target.value;
        console.log(this.userXY.x)
      }
    onLongueurChange = (event) => {
        this.userXY.y = event.target.value;
        console.log(this.userXY.y)
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
                <Grid>
                    <TextField id="standard-basic" label="Longueur" onChange={this.onLongueurChange} />
                    <TextField id="standard-basic" label="Largeur" onChange={this.onLargeurChange} />
                    {res}
                </Grid>
            )
        }
        
}
export default withStyles(useStyles)(Planches);