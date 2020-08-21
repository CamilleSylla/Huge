import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import ParcellesLines from './parcellesProduct'
import Planches from './CalcPlanches';


//dataimport 

import item from '../GlobalData'

const useStyles = makeStyles({
    root: {
        width: "100%",
        textAlign: "center",
        marginTop: 100,
    },
    table: {
        width: 1000,
    },
    pla: {
        width: "40%",
        height: 200,
    },
    x: {
        width: "60%"
    }
});

function renderData() {
        return item.production.map((production, i) => {
            const {parcelle, produit, total, utilise, semi, recolte } = production
         
                return (
                
                    <tr>
                        <Fade left>
                            <td>{parcelle}</td>
                        </Fade>
                        <Fade right>
                            <td>{produit}</td>
                        </Fade>
                        <Fade left>
                            <td>{total}</td>
                        </Fade>
                        <Fade right>
                            <td>{utilise}</td>
                        </Fade>
                        <Fade left>
                            <td>{semi}</td>
                        </Fade>
                        <Fade right>
                            <td>{recolte}</td>
                        </Fade>
                    </tr>
                    
                ) 
            
        }); 
    };

export default function ParcellesList () {
    
    const classes = useStyles();

    const data = renderData();

    return (
        <Grid className={classes.root}  container justify="center">
            <table className={classes.table} >
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
            <ParcellesLines/>
            <Grid className={classes.pla}>
                <Planches/>
            </Grid>
            <Grid className={classes.x}>

            </Grid>
        </Grid>
    )
}