import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import item from '../../GlobalData';
import CircPro from './Occupation';

function renderBar() {
    return item.production.map((production, i) => {
        const {parcelle, produit, total, utilise, semi, recolte } = production
        let q = new Date () - new Date (semi);
        let d = new Date (recolte)- new Date (semi);
        let r = Math.round((q/d)*100)
        console.log(r)
        if (r <=100 && r >= 0) {
            return (
                <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                        <LinearProgress variant="determinate" value={r} />
                    </Box>
                    <Box minWidth={35}>
                        <Typography variant="body2" color="textSecondary">
                            {`${Math.round(r,)}%`}
                        </Typography>
                    </Box>
                    </Box>
            ) 
        }  
    }); 
};
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function ProBar() {
  const classes = useStyles();
  const state = {
      progress: renderBar(),
  }

  

  return (
    <div className={classes.root}>
      {state.progress}
      <CircPro/>
    </div>
  );
}

