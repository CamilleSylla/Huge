import React from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//component
import Add from './AddForm';
import Modify from './Modify';
import Delete from './Delete';
import ParTab from './parTab';
import CircPro from './CircPro';
//animation
import Fade from 'react-reveal/Fade';

const useStyles = theme => ({
    root: {
      
    },
    parcelleForm: {
        marginTop: 100,
        display: 'inline-flex',
    },
    
  }
);

class CMS extends React.Component {

    render () {
        const {classes} = this.props;
        return (
            <Fade left>
                <Grid>
                    <Grid className={classes.parcelleForm} container justify="center">
                        <Add/>
                        <Modify className={classes.formSpacing}/>
                        <Delete className={classes.formSpacing}/>
                    </Grid>
                    <Grid container justify="center">
                        <ParTab/>
                        <CircPro/>
                    </Grid>
                    
                </Grid>
            </Fade>
        )
    }
}

export default withStyles(useStyles)(CMS);