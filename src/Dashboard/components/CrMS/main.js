import React from 'react';
import Grid from '@material-ui/core/Grid';

//component
import Add from './AddForm';

//animation
import Fade from 'react-reveal/Fade';



class CMS extends React.Component {

    render () {

        return (
            <Fade left>
                <Grid>
                    <Grid>
                        <Add/>
                    </Grid>
                </Grid>
            </Fade>
        )
    }
}

export default CMS;