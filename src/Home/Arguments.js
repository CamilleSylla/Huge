import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';


//Image import
import contract from '../assets/Icon/contract.png';
import sitemap from '../assets/Icon/sitemap.png';
import target from '../assets/Icon/target.png';
import growth from '../assets/Icon/growth-1.png';

const useStyles = makeStyles({
  root: {
    height: 350,
    display: 'inline-flex',
    
  },
  Title: {
      marginBottom: 20,
      width: '100%',
      textAlign: 'center',
      color: '#15bd70',
  },
  TitleP: {
    marginBottom: 50,
    width: '50%',
    color: '#15bd70',
    textAlign: 'center'
},
  allBox: {
      width: 250,
      marginRight: 10,
  },
  imgBox: {
    width:'20%',
    marginTop: '5%',
  },

  typoTitleBox: {
    marginTop: '5%',
    textAlign: 'center',
    color: '#15bd70'
  },
  typoParBox: {
    margin: '5%',
    textAlign: 'justify',
    color: '#15bd70'
  },

});

export default function Arguments() {
  const classes = useStyles();

  return (
      <Grid container justify="center">

          
            <Typography className={classes.Title} variant="h4" component="h6" >
                    Pourquoi Huge ?
              </Typography>
              
            <Typography className={classes.TitleP} variant="subtitle1" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
              </Typography>
         
          <Fade>
            <Grid  className={classes.root} container justify="center">
            <Box className={classes.allBox} >
              <Grid container justify="center">
                <Box className={classes.imgBox} component="img"  src={contract} ></Box>
              </Grid>
              <Typography className={classes.typoTitleBox} variant="h4" component="h6">
                Argument 1
              </Typography>
              <Typography className={classes.typoParBox} variant="subtitle1" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
              </Typography>
            </Box>


            <Box className={classes.allBox} >
              <Grid container justify="center">
                <Box className={classes.imgBox} component="img"  src={target} ></Box>
              </Grid>
              <Typography className={classes.typoTitleBox} variant="h4" component="h6">
                Argument 2
              </Typography>
              <Typography className={classes.typoParBox} variant="subtitle1" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
              </Typography>
            </Box>

            <Box className={classes.allBox} >
              <Grid container justify="center">
                <Box className={classes.imgBox} component="img"  src={sitemap} ></Box>
              </Grid>
              <Typography className={classes.typoTitleBox} variant="h4" component="h6">
                Argument 3
              </Typography>
              <Typography className={classes.typoParBox} variant="subtitle1" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
              </Typography>
            </Box>

            <Box className={classes.allBox} >
              <Grid container justify="center">
                <Box className={classes.imgBox} component="img"  src={growth} ></Box>
              </Grid>
              <Typography className={classes.typoTitleBox} variant="h4" component="h6">
                Argument 4
              </Typography>
              <Typography className={classes.typoParBox} variant="subtitle1" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
              </Typography>
            </Box>

              
            </Grid>
          </Fade>
          
          
      </Grid>
      
    );
}