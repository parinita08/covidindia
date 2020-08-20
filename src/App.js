import React from 'react';
import styles from './App.module.css';
import {Cards, Chart, StatePicker} from './Components';
import {fetchData} from './api';
import DistrictPicker from './Components/DistrictPicker/DistrictPicker';

class App extends React.Component {
  state ={
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data:fetchedData});
    // console.log(data.state[0].state);
  }

  render() {
    const {data} =this.state;
    return (
      <div className={styles.container}>
         <Cards data={data}/>
         <StatePicker />    
         <DistrictPicker />    
         <Chart />
      </div>
    );
  }
}

export default App;
