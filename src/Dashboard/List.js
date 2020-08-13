import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: "100%",
        textAlign: "center"
    }
});

export default function ItemList () {
    
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <table className={classes.root} >
                <tr>
                    <th>Zone</th>
                    <th>Produit</th>
                    <th>Surface Total (m²)</th> 
                    <th>Surface Exploitée(m²)</th>
                    <th>Semis</th>
                    <th>Prevision récolte</th>
                </tr>

                <tr>
                    <td>Parcelle 1</td>
                    <td>Salade</td>
                    <td>5000</td>
                    <td>3250</td>
                    <td>22/08/2020</td>
                    <td>12/12/2020</td>
                </tr>
                <tr>
                    <td>Parcelle 1</td>
                    <td>Salade</td>
                    <td>5000</td>
                    <td>3250</td>
                    <td>22/08/2020</td>
                    <td>12/12/2020</td>
                </tr>
                <tr>
                    <td>Parcelle 1</td>
                    <td>Salade</td>
                    <td>5000</td>
                    <td>3250</td>
                    <td>22/08/2020</td>
                    <td>12/12/2020</td>
                </tr>
                <tr>
                    <td>Parcelle 1</td>
                    <td>Salade</td>
                    <td>5000</td>
                    <td>3250</td>
                    <td>22/08/2020</td>
                    <td>12/12/2020</td>
                </tr>
                <tr>
                    <td>Parcelle 1</td>
                    <td>Salade</td>
                    <td>5000</td>
                    <td>3250</td>
                    <td>22/08/2020</td>
                    <td>12/12/2020</td>
                </tr>

                
            </table>
        </Grid>
    )
}