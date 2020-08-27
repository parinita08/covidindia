import React from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

const StatePicker = () => {

    return(
        <FormControl className="styles.formControl">
          <NativeSelect >
            <option values="state">States</option>
              
          </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;