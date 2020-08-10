import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Fade from 'react-reveal/Fade';

import profile from '../../assets/profile.jpg'


const useStyles = makeStyles((theme) => ({
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
        color: '#15bd70',
        paddingTop: 30,
    },
    Typo2: {
        width: 'auto',
        backgroundColor: 'white',
        marginTop: -100,
        color: '#15bd70',
    },
    Typo3: {
        width: 'auto',
        backgroundColor: 'white',
       marginBottom: 30,
       color: '#15bd70',
    },
    imgGrid: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
    }, 
    avaXL: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
  }));
 
export default function Notice () {
    const classes = useStyles();
        return (
            <Grid container justify="center">
                
                    <div className={classes.root}>

                        <Fade>
                            <Carousel   className={classes.carousel} 
                                        autoPlay 
                                        infiniteLoop
                                        showArrows={false}
                                        showStatus={false}
                            >

                            <div>
                                <Box>
                                    <Grid className={classes.imgGrid} container justify="center">
                                        <Avatar alt="Remy Sharp" src={profile} className={classes.avaXL}  />
                                    </Grid>
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
                                    <Grid className={classes.imgGrid} container justify="center">
                                        <Avatar alt="Remy Sharp" src={profile} className={classes.avaXL}  />
                                    </Grid>
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
                                    <Grid className={classes.imgGrid} container justify="center">
                                        <Avatar alt="Remy Sharp" src={profile} className={classes.avaXL}  />
                                    </Grid>
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
                        </Fade>
                        

                    </div>

            </Grid>
            
        )
    };