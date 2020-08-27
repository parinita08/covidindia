import React from 'react';
import styles from './App.module.css';
import {Cards, Chart, StatePicker} from './Components';
import DistrictPicker from './Components/DistrictPicker/DistrictPicker';
import BarChart from './Components/Chart/BarChart';

class App extends React.Component {
  
render() {
    // const {data} =this.state;
    return (
      <div className={styles.container}>
         <Cards />
         <StatePicker />
         <DistrictPicker />
         <Chart />
         <BarChart />
      </div>
    );
  }
}

export default App;