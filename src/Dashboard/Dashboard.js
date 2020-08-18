import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Timeline from './Contribution';
import Lines from './Lines';
import Product from './Product';
import Cards from './Cards'
import Grid from '@material-ui/core/Grid';
import ItemList from './List';

//side bar list icone
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

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



export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography  variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Accueil', 'Mes Parcelles', 'Ajouté', 'Aide'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                  {index === 0 && <HomeRoundedIcon /> }
                  {index === 1 && <ListAltRoundedIcon /> }
                  {index === 2 && <PostAddRoundedIcon /> }
                  {index === 3 && <HelpOutlineRoundedIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <HomeRoundedIcon/> : <HomeRoundedIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content} style={{justify: "center"}}>
        <div className={classes.toolbar} />

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
        
            
        
      </main>
    </div>
  );
}