import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    root: {
        width: 600,
        height: 300,
    },
    carousel: {
        marginTop: 50,
        backgroundColor: 'white'
    },
    Box: {
        width: '100%', 
    },
    Typo: {
        width: 'auto',
        backgroundColor: 'white',
        height: 250,
        textAlign: 'center',
    },
    Typo2: {
        width: 'auto',
        backgroundColor: 'white',
        marginTop: -120,
    },
    Typo3: {
        width: 'auto',
        backgroundColor: 'white',
       marginBottom: 50,
    },
  
  });
 
export default function Notice () {
    const classes = useStyles();
        return (
            <Grid container justify="center">
                
                    <div className={classes.root}>
                        <Carousel className={classes.carousel}>

                        <div>
                            <Box>
                                <Typography className={classes.Typo} variant="h5" component="p">
                                '' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica ''
                                </Typography>
                                <Typography className={classes.Typo2} variant="h6" component="p">
                                Nom Prénom
                                </Typography>
                                <Typography className={classes.Typo3} variant="h6" component="p">
                                Société
                                </Typography>
                            </Box>
                            
                        </div>


                        <div>
                            <Box>
                                <Typography className={classes.Typo} variant="h5" component="p">
                                '' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica ''
                                </Typography>
                                <Typography className={classes.Typo2} variant="h6" component="p">
                                Nom Prénom
                                </Typography>
                                <Typography className={classes.Typo3} variant="h6" component="p">
                                Société
                                </Typography>
                            </Box>
                            
                        </div>


                        <div>
                            <Box>
                                <Typography className={classes.Typo} variant="h5" component="p">
                                '' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica ''
                                </Typography>
                                <Typography className={classes.Typo2} variant="h6" component="p">
                                Nom Prénom
                                </Typography>
                                <Typography className={classes.Typo3} variant="h6" component="p">
                                Société
                                </Typography>
                            </Box>
                            
                        </div>

                        </Carousel>
                    </div>

            </Grid>
            
        )
    };