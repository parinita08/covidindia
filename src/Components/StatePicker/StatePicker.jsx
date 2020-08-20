import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

// const StatePicker = () => {
//     return(
//         <h1>StatePicker</h1>
//     );

// }

import {fetchState} from '../../api';

const StatePicker = ({handleStateChange}) => {

    const [fetchedState, setFetchedState] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedState(await fetchState());
        }

        fetchAPI();
    }, [setFetchedState]);

    return(
        <FormControl className="styles.formControl">
          <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
            <option values="state">State</option>
              {fetchedState.map((state, i) => <option key={i} value={state}>{state}</option>)}
          </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;