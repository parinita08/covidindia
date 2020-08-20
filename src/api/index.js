import axios from 'axios';

const url='https://api.covidindiatracker.com/state_data.json';

export const fetchData = async () => {
    try {
        // let ret = await axios.get(url);
        // ret = JSON.parse(ret);

        // return  ret;
        // console.log(ret)
        // console.log(await axios.get(url))
        const { data :{active, confirmed, deaths, recovered, districtData }  } = await axios.get(url);

        return {active, confirmed, deaths, recovered, districtData, }
        
       console.log(active);
        // console.log(data[0].state)
        // return data
    } catch (error) {
        
    }
};

    export const fetchState = async () => {
        try {
          const {data: {state}} = await axios.get(`${url}/state`);  
    
          return states.map((state) => state.name);
        } catch (error) {
          return error;
        }
    }