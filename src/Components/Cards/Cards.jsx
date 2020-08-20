import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, active, deaths, recovered} }) => {
    // console.log(props);
    if (!confirmed) {
        return 'Loading...';
      }

    return(
        <div className={styles.container}>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                        <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        {/* <Typography color="textSecondary">STATE</Typography> */}
                        <Typography variant="body2">Some crap</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                        <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">STATE</Typography>
                        <Typography variant="body2">Some crap</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant='h5'>
                        <CountUp
                                start={0}
                                end={active.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        {/* <Typography color="textSecondary">STATE</Typography> */}
                        <Typography variant="body2">Some crap</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        {/* <Typography color="textSecondary">STATE</Typography> */}
                        <Typography variant="body2">Some crap</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );

}

export default Cards;