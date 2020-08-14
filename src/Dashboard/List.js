import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//dataimport 

import item from './GlobalData'

const useStyles = makeStyles({
    root: {
        width: "100%",
        textAlign: "center"
    }
});

function renderData() {
        return item.production.map((production, i) => {
            const {parcelle, produit, total, utilise, semi, recolte } = production
            while (i <= 4) {
                return (
                
                    <tr>
                        <td>{parcelle}</td>
                        <td>{produit}</td>
                        <td>{total}</td>
                        <td>{utilise}</td>
                        <td>{semi}</td>
                        <td>{recolte}</td>
                    </tr>
                ) 
            }
        }); 
    };

export default function ItemList () {
    
    const classes = useStyles();

    const data = renderData();

    return (
        <Grid container justify="center">
            <table className={classes.root} >
                <tbody>
                <tr>
                    <td>Zone</td>
                    <td>Produit</td>
                    <td>Surface Total (m²)</td>
                    <td>Surface Utilisé (m²)</td>
                    <td>Date de Semi</td>
                    <td>Date de récolte</td>
                </tr>
                {/* Dynamic table*/}
                    {data}
                </tbody>
                
            </table>
        </Grid>
    )
}