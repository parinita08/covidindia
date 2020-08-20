import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);

    return(
        <div className={styles.container}>
            <Grid container spacing={4} justify='center'>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color="textSecondary">STATE</Typography>
                        <Typography variant="body2">Some crap</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color="textSecondary">STATE</Typography>
                        <Typography variant="body2">Some crap</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color="textSecondary">STATE</Typography>
                        <Typography variant="body2">Some crap</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color="textSecondary">STATE</Typography>
                        <Typography variant="body2">Some crap</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );

}

export default Cards;