import React from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

//data
import item from '../../GlobalData';

//animation
import Fade from 'react-reveal/Fade';

const useStyles = theme => ({
    root: {
        width: "50%",
        textAlign: "center",
        marginTop: 50,
    },
  }
);

function renderData() {
    return item.production.map((production, i) => {
        const {parcelle, produit, total, utilise, semi, recolte } = production
        while (i <= 10) {
            return (
            
                <tr>
                    <Fade left>
                        <td>{parcelle}</td>
                    </Fade>
                    <Fade right>
                        <td>{total}</td>
                    </Fade>
                    <Fade left>
                        <td><DeleteIcon/></td>
                    </Fade>
                </tr>
                
            ) 
        }
    }); 
};

class ParTab extends React.Component {

    render () {
        const {classes} = this.props;
        const data = renderData();
        return (
            <Grid container justify="center">
                <table className={classes.root} >
                    <tbody>
                    <tr>
                        <td>Nom</td>
                        <td>Surface total</td>
                    </tr>
                    {/* Dynamic table*/}
                        {data}
                    </tbody>
                </table>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(ParTab)