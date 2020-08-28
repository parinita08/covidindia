import React, {useState, useEffect} from 'react';
import { Select, FormControl, MenuItem} from '@material-ui/core';

const StatePicker = () => {

  const [states, setStates] = useState([]);
  const [state, setState] = useState('Country');
  const [stateInfo, setStateInfo] = useState({});

  useEffect(() => {
    // The code inside this will run only once when the component loads and not aagain or when the variable changes.
    // We need to use an async funtion -> sends a request, waits, use the info that the response gives.
    const getStatesData = async () => {
      await fetch("https://api.covidindiatracker.com/state_data.json")
      .then((response) => response.json()) //gets the response in the json format
      .then((data) => {
        const states = data.map((state) => ({
            name: state.state,
          }));
        setStates(states);
      });
    };
    getStatesData(); //need to call it
  },[]);

  const onStateChange = async (event) => {
    const stateCode = event.target.value;
    console.log("WORKSS!", stateCode);
    setState(stateCode);

    const url = stateCode === 'Country' ? 'https://api.covidindiatracker.com/total.json' : `https://api.covidindiatracker.com/state_data/${stateCode}`; 

    await fetch(url)
    .then(response => response.json())
    .then( data => {
      setState(stateCode);
      setStateInfo(data); //All the data from state response
    });
  };

  console.log('State info milgaya', stateInfo);

    return(
        <FormControl className="styles.formControl">
          <Select variant="outlined" onChange={onStateChange} value={state}>
            <MenuItem value="Country">Country</MenuItem>
            {
              states.map(state => (
              <MenuItem value={state.name}>{state.name}</MenuItem>
              ))
            }  
        </Select>
        </FormControl>
    )
}

export default StatePicker;