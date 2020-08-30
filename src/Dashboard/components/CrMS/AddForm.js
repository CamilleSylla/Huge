import React from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = theme => ({
    root: {
      
    },

  }
);


class Add extends React.Component {

    state = {
        create: {
            name: '',
            total: '',
        }
    }

    onCreateNameChange = (event) => {
        this.state.create.name = event.target.value;
        console.log(this.state.create.name)
      }

      onCreateTotalChange = (event) => {
        this.state.create.total = event.target.value;
        console.log(this.state.create.total)
      }
    render () {
        const {classes} = this.props;
        return (
        
            <Grid className={classes.root}>
                <Grid>
                    <Typography  variant="h6" noWrap>
                        Creation de parcelle
                    </Typography>
                    <Grid>
                            <TextField id="standard-basic" 
                            label="Nom de la parcelle" 
                            onChange={this.onCreateNameChange}
                            />
                    </Grid>
                    <Grid>
                            <TextField id="standard-basic" 
                            label="Superficie total" 
                            onChange={this.onCreateTotalChange}
                            type="number"
                            />
                    </Grid>
                    <Grid>
                    <Button variant="contained" color="primary">
                        <AddCircleOutlineIcon/>
                        Ajouter
                    </Button>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default withStyles(useStyles)(Add);