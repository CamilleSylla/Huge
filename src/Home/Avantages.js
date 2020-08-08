import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';



import salade from '../assets/salade.jpg';


const useStyles = makeStyles({
  root: {
    
  },
  inlineElement: {
    display: 'inline-flex',
    height: 350,
    width: '100%',
    maxHeight: 350
    
  },

  Box1: {
    background: 'black',
    width: '50%',
    backgroundImage: `url(${salade})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  imageBox: {
    width: '100%',

  },
  Box2: {
    background: '#004A27',
    width: '50%',
    color: 'white',
  },
  Typo: {
    float: 'right',
    marginRight: 75,
    marginTop: 50,
    marginLeft: 50,
    textAlign: 'justify'
  },
  
});

export default function Avantages() {
  const classes = useStyles();

  return (
      <Grid className={classes.inlineElement} container justify="center">
          <Box className={classes.Box1}>
          <CardMedia className={classes.imageBox}
                    component="img"
                    repeat="no-repeat"
                    title="Contemplative Reptile"
                    />
          </Box>
          <Box className={classes.Box2}>
            <Typography className={classes.Typo} gutterBottom  variant="h3" component="h2">
                        La Promesse de Huge
            </Typography>
            <Typography className={classes.Typo} gutterBottom  variant="subtitle1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nulla rutrum mollis facilisis. Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit. In ac velit elit. Quisque odio ligula,
              congue non tincidunt vel, ultrices sit amet elit.
               Duis lacinia felis at tellus aliquam convallis.
             Vestibulum viverra nibh et lectus iaculis varius.
            </Typography>
          </Box>
      </Grid>
    );
}