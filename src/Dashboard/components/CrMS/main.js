import React from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//component
import Add from './AddForm';
import Modify from './Modify';
import Delete from './Delete';
import ParTab from './parTab';
import CircPro from './CircPro';
import AddProduct from './AddProduct';
import ModProd from './ModProd';
//animation
import Fade from 'react-reveal/Fade';

const useStyles = theme => ({
    root: {
      marginTop: 100
    },
    containerForm: {
        marginTop: 50,
        display: 'inline-flex',
    },
    circ: {
        display: 'inline-flex',
    }
    
  }
);

class CMS extends React.Component {

    render () {
        const {classes} = this.props;
        return (
            <Fade left>
                <Grid className={classes.root} container justify="center">
                    <Typography >
                        Mes Parcelles   
                    </Typography>
                </Grid>
                <Grid>
                    <Grid className={classes.containerForm} container justify="center">
                        <Add/>
                        <Modify className={classes.formSpacing}/>
                        <Delete className={classes.formSpacing}/>
                    </Grid>
                    <Grid container justify="center">
                        <ParTab/>
                        <CircPro className={classes.circ} container justify="center"/>
                    </Grid>
                </Grid>
                <Grid className={classes.root} container justify="center">
                    <Typography >
                        Mes Produits   
                    </Typography>
                </Grid>
                <Grid className={classes.containerForm} container justify="center">
                        <AddProduct/>
                        <ModProd/>
                </Grid>
            </Fade>
        )
    }
}

export default withStyles(useStyles)(CMS);