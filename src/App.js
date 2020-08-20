import React from 'react';
import styles from './App.module.css';
import {Cards, Chart, StatePicker} from './Components';
import {fetchData} from './api';
// import DistrictPicker from './Components/DistrictPicker/DistrictPicker';

class App extends React.Component {
  state ={
    data: {},
    state: '',
  }

  handleStateChange = async (state) => {
    // fetches the data and set the state
    const fetchedData = await fetchData(state);
    this.setState({data: fetchedData, state: state});
    
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    // console.log(data.state[0].state);
  }

  render() {
    const {data, state} =this.state;
    return (
      <div className={styles.container}>
         <Cards data={ data }/>
         <StatePicker handleStateChange={this.handleStateChange}/>    
         {/* <DistrictPicker />     */}
         <Chart data={ data } state={state} />
      </div>
    );
  }
}

export default App;
