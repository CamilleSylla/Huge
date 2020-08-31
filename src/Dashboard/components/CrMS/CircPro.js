import React from 'react';

//Material Ui
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

//Data
import item from '../../GlobalData';

function renderCirc() {
    return item.production.map((production, i) => {
        const {parcelle, produit, total, utilise, semi, recolte } = production
        
        let r = Math.round((utilise/total)*100)
        console.log(r)
        if (new Date () <= new Date (recolte) && new Date >= new Date (semi)) {
            return (
                <Grid display="inline-flex">
                    <Typography>
                        {parcelle}   
                    </Typography> 
                    <Box position="relative" display="inline-flex"> 
                      <CircularProgress variant="static" value={r} />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography variant="caption" component="div" color="textSecondary">
                            {`${Math.round(r,)}%`}
                        </Typography>
                      </Box>
                    </Box>
                </Grid>
            ) 
        }  
    }); 
}; 

export default function CircPro() {
const state = {
    progress : renderCirc(),
}

  return (
      <div>
          {state.progress}
      </div>
  );
}