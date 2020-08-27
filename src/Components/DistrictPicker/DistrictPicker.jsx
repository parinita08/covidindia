import React from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

const DistrictPicker = () => {
    return(
        <FormControl className="styles.formControl">
          <NativeSelect >
            <option values="state">Districts</option>
              
          </NativeSelect>
        </FormControl>
    );

}

export default DistrictPicker;