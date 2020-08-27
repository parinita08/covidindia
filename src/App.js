import React from 'react';
import styles from './App.module.css';
import {Cards, Chart, StatePicker} from './Components';
import DistrictPicker from './Components/DistrictPicker/DistrictPicker';
// import {fetchData} from './api';
// import DistrictPicker from './Components/DistrictPicker/DistrictPicker';

class App extends React.Component {
  
render() {
    // const {data} =this.state;
    return (
      <div className={styles.container}>
         <Cards />
         <StatePicker />
         <DistrictPicker />
         <Chart />
      </div>
    );
  }
}

export default App;