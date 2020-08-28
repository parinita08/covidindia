import React from 'react';
import styles from './App.module.css';
import {Card, CardContent} from '@material-ui/core';
import {Cards, Chart, StatePicker} from './Components';
import DistrictPicker from './Components/DistrictPicker/DistrictPicker';
import BarChart from './Components/Chart/BarChart';

class App extends React.Component {
  
render() {
    // const {data} =this.state;
    return (
      <div className={styles.container}>

          <div className={styles.leftside}>
            <div class={styles.header}>
              <h2>Covid Tracer - India</h2>
              <Cards />
              <StatePicker />
              <DistrictPicker />
            </div>
          
          <Chart />
          <BarChart />
          </div>

          <Card className={styles.rightside}>
            <CardContent>
              <h3>Live cases by State</h3>
              <h3>Live cases in the Country</h3>
              {/* table */}
            </CardContent>
          </Card>
      </div>
    );
  }
}

export default App;