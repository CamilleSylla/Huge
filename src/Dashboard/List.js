import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const item = {
    production: [
        {
            parcelle: 'Parcelle 1',
            total: '5000', 
            utilise: '4154', 
            semi: '2020-03-22', 
            recolte: '2020-05-26', 
            produit: 'Carottes',
             id: 1
            },
        {
            parcelle: 'Parcelle 2', 
            total: '3500', 
            utilise: '1230', 
            semi: '2020-01-30', 
            recolte: '2020-04-10', 
            produit: 'Tomates', 
            id: 2
        },
        {
            parcelle: 'Parcelle 3', 
            total: '6500', 
            utilise: '4210', 
            semi: '2020-09-20', 
            recolte: '2020-12-20', 
            produit: 'Salade', 
            id: 1
        },
        {
            parcelle: 'Parcelle 1',
            total: '5000', 
            utilise: '4154', 
            semi: '2020-03-22', 
            recolte: '2020-05-26', 
            produit: 'Carottes',
             id: 1
            },
        {
            parcelle: 'Parcelle 2', 
            total: '3500', 
            utilise: '1230', 
            semi: '2020-01-30', 
            recolte: '2020-04-10', 
            produit: 'Tomates', 
            id: 2
        },
        {
            parcelle: 'Parcelle 3', 
            total: '6500', 
            utilise: '4210', 
            semi: '2020-09-20', 
            recolte: '2020-12-20', 
            produit: 'Salade', 
            id: 1
        },
    ]
}



const useStyles = makeStyles({
    root: {
        width: "100%",
        textAlign: "center"
    }
});

function renderTableData() {
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

    const data = renderTableData();

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
                    {data}
                </tbody>
                
            </table>
        </Grid>
    )
}