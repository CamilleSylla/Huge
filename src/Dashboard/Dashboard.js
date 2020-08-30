import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import Home from './components/main/Home'
import ParcellesList from './components/Parcelles/parcelles'
import CMS from './components/CrMS/main'

//side bar list icone
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import StorageIcon from '@material-ui/icons/Storage';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

// animation

import Fade from 'react-reveal/Fade';


const drawerWidth = 240;

const useStyles = theme => ({
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
;



class Dashboard extends React.Component{

  state ={
    whichComponentToShow : "Home"
  }
  

render(){


let manage;
if (this.state.whichComponentToShow === "Home") {
  manage = <Fade left><Home/></Fade>
} else if (this.state.whichComponentToShow === "Parcelles") {
  manage = <ParcellesList/>
}else if (this.state.whichComponentToShow === "cms") {
  manage = <CMS/>
}

const {classes} = this.props;

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
          <Button onClick={() => {
                  this.setState({whichComponentToShow: "Home"}); console.log(this.state)
                  }}>
            <HomeRoundedIcon/>
             Accueil
             </Button>
             <Button onClick={() => {
                  this.setState({whichComponentToShow: "Parcelles"}); console.log(this.state)
                  }}>
            <ListAltRoundedIcon/>
             Mes Parcelles
             </Button>
             <Button onClick={() => {
                  this.setState({whichComponentToShow: "cms"}); console.log(this.state)
                  }}>
            <StorageIcon/>
             Crée/Modifier/Supprimé
             </Button>
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
          <div>
            {manage}
          </div>
      </main>
    </div>
  );
}
}
 export default withStyles(useStyles)(Dashboard);
  