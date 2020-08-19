import React from 'react';
import Timeline from './Contribution';
import Lines from './Lines';
import Product from './Product';
import Cards from './Cards'
import Grid from '@material-ui/core/Grid';
import ItemList from './List';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    content: {
      width: '100%'
    },
    drawer: {
      width: drawerWidth,
      maxWidth: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: {
      backgroundColor: '#15bd70',
    },

    contentGrid: {
      width: '100%'
    },
    componentGrid: {
      width: 1000,
      marginTop: 100,
    },
    progressGrid:{
      display: 'inline-flex',
      width: '100%',
    },
    progress: {
      width: '25%',
    },
    itemList: {
      width: '80%',
    },
    proLineGrid: {
      width: '100%',
      display: 'inline-flex'
    },
    LinesGrid: {
      width: '50%',
    },
    productGrid: {
      width: '50%',
    },

  }
)
);

export default function Home() {
    const classes = useStyles();
    return (
        <Grid className={classes.contentGrid} container justify="center">
          <Grid className={classes.componentGrid}>

          <Cards/>
            <Grid className={classes.progressGrid} container justify="center">
              
              <Grid className={classes.itemList} >
                <ItemList/>
              </Grid>
            </Grid>

            
          <Timeline/>


            <Grid Grid className={classes.proLineGrid}>
              <Grid className={classes.LinesGrid}>
                <Lines/>
              </Grid>
              <Grid className={classes.productGrid}>
                <Product/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}
