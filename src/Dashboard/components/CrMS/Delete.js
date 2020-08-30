import React from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

//data
import item from '../../GlobalData';

const useStyles = theme => ({
    root: {
        marginLeft: 50,
      },

  }
);

function renderData() {
    return item.production.map((production, i) => {
        const {parcelle, produit, total, utilise, semi, recolte } = production
        const db = { parcelle, total }    
        return (db)
        
    }); 
};


class Delete extends React.Component {

    state = {
        create: {
            name: '',
            total: '',
        },
        modify: {
            render: renderData(),
            name: '',
            total: '',
        }
    }

      onCreateTotalChange = (event) => {
        this.state.modify.total = event.target.value;
        console.log(this.state.modify.total)
      }
      onParChange = (event) => {
        this.state.create.name = event.target.value;
        console.log(this.state.create.name)
      }

    render () {
        const {classes} = this.props;
        const data = this.state.modify.render;
        return (
        
            <Grid className={classes.root}>
                <Typography  variant="h6" noWrap>
                        Modification de Parcelle
                </Typography>
                <Grid>
                <FormControl style={{minWidth: 200}}>
                    <InputLabel htmlFor="data" >Selectionner une parcelle</InputLabel>
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
                    <Button variant="contained" color="primary">
                        <DeleteIcon/>
                        supprimer
                    </Button>
                </Grid>
            </Grid>

        )
    }
}

export default withStyles(useStyles)(Delete);