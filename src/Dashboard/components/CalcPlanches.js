import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import item from '../GlobalData';

const useStyles = theme =>({
    root: {
        width: "100%",
        textAlign: "center",
    },
});
let planches;
let lol;


class Planches extends React.Component{
    state ={
        show : "false"
      }

    parc=item;
    userXY= {
        x: '',
        y: ''
    };
    
    showRes;
    onLargeurChange = (event) => {
        this.userXY.x = event.target.value;
        console.log(this.userXY.x)
      }
    onLongueurChange = (event) => {
        this.userXY.y = event.target.value;
        console.log(this.userXY.y)
      }
      
      
      
      
      

    render () {
        let lol;
        if (this.state.show === "true") {
    
        const t = this.parc.production[0].total;
        const x = this.userXY.x;
        const y = this.userXY.y;
        const res = (( t /  (((x*100)*(y*100))/100)));
        lol = res;
        console.log(lol)      
        }
        
        
        
            return (
                <Grid>
                    <TextField id="standard-basic" label="Longueur" onChange={this.onLongueurChange} />
                    <TextField id="standard-basic" label="Largeur" onChange={this.onLargeurChange} />
                    <Button variant="contained" color="primary" onClick={() => {this.setState({show: "true"}); 
                         console.log(this.state.show);
                         }}>
                    Primary
                    </Button>
            {lol}
                </Grid>
            )
        }
        
}
export default withStyles(useStyles)(Planches);