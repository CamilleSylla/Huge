import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import item from '../GlobalData';

const useStyles = theme =>({
    root: {
        width: "100%",
        textAlign: "center",
    },
    formControl: {
        width: "100%"
      },
      selectEmpty: {
      },
});

function renderData() {
    return item.production.map((production, i) => {
        const {parcelle, produit, total, utilise, semi, recolte } = production
     
            return (
            <MenuItem value={total}>{parcelle}</MenuItem>
                
            ) 
        
    }); 
};

class Planches extends React.Component{
    state ={
        show : "false",
        userXY: {
            t: '',
            x: '',
            y: ''
        },
      }

    parc=item;
    
    
    showRes;
    onLargeurChange = (event) => {
        this.state.userXY.x = event.target.value;
        console.log(this.state.userXY.x)
      }
    onLongueurChange = (event) => {
        this.state.userXY.y = event.target.value;
        console.log(this.state.userXY.y)
      }
      onParChange = (event) => {
        this.state.userXY.t = event.target.value;
        console.log(this.state.userXY.y)
      }

    render () {
        let lol;
        if (this.state.show === "true") {
        const t = this.state.userXY.t;
        const x = this.state.userXY.x;
        const y = this.state.userXY.y;
        const res = (t / (x * y));
        lol = res;
        console.log(lol)      
        }
        
        const classes = useStyles();
        const data = renderData();
            return (
                <Grid>
                    <Typography>Calculer le nombre de planches maximum d'une parcelle</Typography>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Mes Parcelles</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={this.onParChange}
                        >{data}
                        </Select>
                    </FormControl>
                    <br/>
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