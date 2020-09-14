import React from 'react';
import styles from './App.module.css';
import {Card, CardContent} from '@material-ui/core';
import {Cards, Chart, StatePicker} from './Components';
import DistrictPicker from './Components/DistrictPicker/DistrictPicker';
import BarChart from './Components/Chart/BarChart';
import './api';
import './Components/Table/Table';

class App extends React.Component {
  
render() {
    // const {data} =this.state;
    return (
      <div className={styles.container}>

          <div className={styles.leftside}>
              <div class={styles.header}>
                <h2>Covid Tracer  India</h2>
                <Cards />
              </div>
              
            <StatePicker />
            {/* <DistrictPicker /> */}
            <Chart />
            <BarChart />
          </div>

          <Card className={styles.rightside}>
            <CardContent>
              <h3>Live cases by State</h3>
              {/* <Table /> */}
              <h3>Live cases in the Country</h3>
              {/* table with state wise cases */}
              <h4>Table with state wise cases</h4>
            </CardContent>
          </Card>
      </div>
    );
  }
}

export default App;