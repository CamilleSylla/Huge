import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';



import template from '../assets/template.jpg';


const useStyles = makeStyles({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  inlineElement: {
    display: 'inline-flex',
    height: 350,
    width: '100%',
    maxHeight: 350,
    
  },

  Box2: {
    background: 'white',
    width: '50%',
    backgroundImage: `url(${template})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  imageBox: {
    width: '100%',

  },
  Box1: {
    background: 'white',
    width: '50%',
    color: '#507C5C',
  },
  Typo: {
    float: 'left',
    marginRight: 75,
    marginLeft: 50,
    marginTop: 25,
    textAlign: 'justify'
  },
  Btn: {
    color: '#507C5C',
    borderColor: '#507C5C !important',
    float: 'right',
    marginRight: 75,
    marginTop: 10,
  },
  
});

export default function Avantages() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.inlineElement}  container justify="center">
          


          <Box className={classes.Box1}>
            <Typography className={classes.Typo} gutterBottom  variant="h3" component="h2">
                        Découvrir
            </Typography>
            <Typography className={classes.Typo} gutterBottom  variant="subtitle1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nulla rutrum mollis facilisis. Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit. In ac velit elit. Quisque odio ligula,
              congue non tincidunt vel, ultrices sit amet elit.
               Duis lacinia felis at tellus aliquam convallis.
             Vestibulum viverra nibh et lectus iaculis varius.
            </Typography>
            <Button variant="outlined" className={classes.Btn}>Default</Button>
          </Box>



          <Box className={classes.Box2}>
          
          </Box>

      </Grid>
    </Grid>
      
    );
}