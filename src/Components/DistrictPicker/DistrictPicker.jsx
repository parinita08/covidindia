import React, {useState, useEffect} from 'react';
import { Select, FormControl, MenuItem} from '@material-ui/core';

const DistrictPicker = () => {

  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState('Country');

  useEffect(() => {
    // The code inside this will run only once when the component loads and not aagain or when the variable changes.
    // We need to use an async funtion -> sends a request, waits, use the info that the response gives.
    const getDistrictsData = async () => {
      await fetch("https://api.covidindiatracker.com/state_data.json")
      .then((response) => response.json()) //gets the response in the json format
      .then((data) => {
        const districts = data.map((district) => ({
          // this dosnt work yet : need to know how to fetch district data
            name: district.districtData.name, 
            value: district.districtData.name,
          }));
        setDistricts(districts);
      });
    };
    getDistrictsData(); //need to call it
  },[]);

    const onDistrictChange = async (event) => {
    const districtCode = event.target.value;
    console.log("WORKSS!", districtCode);
    setDistrict(districtCode);
  };

    return(
      <FormControl className="styles.formControl">
      <Select variant="outlined" onChange={onDistrictChange} value={district}>
        <MenuItem value="State">State</MenuItem>
        {
          districts.map(district => (
          <MenuItem value={district.value}>{district.name}</MenuItem>
          ))
        }  
    </Select>
    </FormControl>
    );

}

export default DistrictPicker;