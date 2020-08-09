import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Space from  '../assets/Space.jpg';

//animation
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    marginRight: 20,
    marginTop: -50,
    marginBottom: 100,
    backgroundColor: '#507C5C',
    color: 'white',
  },
  inlineElement: {
    display: 'inline-flex',
    
  },

});

export default function Cards() {
  const classes = useStyles();

  return (
      <Grid className={classes.inlineElement} container justify="center">
            
            <Fade left>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        src={Space}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Cart 1
                        </Typography>
                        <Typography variant="body2" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
            </Fade>
            

            <Fade top>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        src={Space}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Cart 2
                        </Typography>
                        <Typography variant="body2"  component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
            </Fade>
            

            <Fade right>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        src={Space}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Cart 3
                        </Typography>
                        <Typography variant="body2"  component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
            </Fade>
            

          </Grid>           
  );
}
