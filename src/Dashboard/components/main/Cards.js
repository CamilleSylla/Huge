import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

import item from '../../GlobalData'

const useStyles = makeStyles({
    root: {
        display: 'inline-flex',
    },
    allCards: {
        width: '25%'
    },
    
  });

function renderPercentData() {
    return item.production.map((production, i) => {
        const {semi, recolte } = production
        
        let percent = 0;
  
        let start = new Date(semi), end = new Date(recolte), today = new Date ();
        let q = Math.round(today-start);
        let d = Math.round(end-start);
  
        let division = Math.round((q/d)*100); 
  
        if (division < 100 && division > 0) {
          percent = division;
        }
        return (
          percent
          )
        }
    ); 
  };

export default function Cards() {

const classes = useStyles();

    return (
        <Grid className={classes.root} container justify="center">
            <Grid className={classes.allCards}>
                <Card>
                    <WbSunnyIcon/>
                </Card>
            </Grid>
            <Grid className={classes.allCards}>
                <Card>
                    <AccessTimeIcon/>
                </Card>
            </Grid>
            <Grid className={classes.allCards}>
                <Card>
                    <AccountBalanceIcon/>
                </Card>
            </Grid>
            <Grid className={classes.allCards}>
                <Card>
                    <AccessibilityIcon/>
                </Card>
            </Grid>
        </Grid>
    )
}