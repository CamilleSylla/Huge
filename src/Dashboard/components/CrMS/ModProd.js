import React from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

//animation
import Fade from 'react-reveal/Fade';

//data
import item from '../../GlobalData';

const useStyles = theme => ({
    root: {
      marginLeft: 50,
    },
    container: {
        display: 'inline-flex',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      addContainer: {
          width: '100%',
      }
  }
);




class ModProd extends React.Component {

    state = {
        create: {
            name: '',
            produit: '',
            total: '',
            utilise: '',
            semi: '',
            recolte: '',
        },
        modify: {
            render: item.production,
            name: '',
            total: '',
        },
        hide: "0",
    }

    onParChange = (event) => {
        this.state.modify.name = event.target.value;
        this.state.hide = "1";
        console.log(this.state.modify.name)
        console.log(this.state.hide)
      }
    
    onStartDateChange = (event) => {
        this.state.create.total = event.target.value;
        console.log(this.state.create.total)
      }
    
    onEndDateChange = (event) => {
        this.state.create.recolte = event.target.value;
        console.log(this.state.create.recolte)
      }

    onProduitChange = (event) => {
        this.state.create.produit = event.target.value;
        console.log(this.state.create.produit)
      }

    onUtiliseChange = (event) => {
        this.state.create.utilise = event.target.value;
        console.log(this.state.create.utilise)
      }

    

    render () {
        
        const data = this.state.modify.render;
        const {classes} = this.props;
        const userval = this.state.modify.name;


        console.log(item.production.parcelle)
        console.log(this.state.modify.name);
        console.log(this.state.modify.render)
        
        if (this.state.modify.name === this.state.modify.render.parcelle){
            const x = data.filter(name => name.parcelle === this.state.modify.name);
            const y = [...x];
            console.log(y)
        }
        return (
            <Grid>
                <Grid container justify="center">
                    <FormControl style={{minWidth: 200}}>
                        <InputLabel htmlFor="data" >Mes Parcelles</InputLabel>
                            <Select  labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={this.onParChange}
                            value={data.parcelle}
                            >
                            {data.map((item) => (
                            <MenuItem key={item.parcelle} value={item.parcelle} >
                            {item.parcelle}
                            </MenuItem>
                                    )
                                )
                            }
                            </Select>
                    </FormControl>
                </Grid>
                <Grid>

                </Grid>
                <Grid className={classes.addContainer} container>
                    <Grid>
                        <TextField id="standard-basic" 
                        label="Produit" 
                        onChange={this.onProduitChange}
                        />
                    </Grid>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Semi"
                            type="date"
                            defaultValue={new Date ()}
                            onChange={this.onStartDateChange}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Recolte"
                            type="date"
                            defaultValue={new Date ()}
                            onChange={this.onStartDateChange}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                    <Grid>
                        <TextField id="standard-basic" 
                        label="Espace Utilise (m²)" 
                        onChange={this.onUtiliseChange}
                        type="number"
                        />
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Button className={classes.btn} variant="contained" color="primary">
                        <AddCircleOutlineIcon/>
                        Ajouter
                    </Button>
                </Grid>
            </Grid>
            
        )
    }
}

export default withStyles(useStyles)(ModProd);