import Axios from 'axios';
        var config = {
            method: 'get',
            url: 'https://api.covidindiatracker.com/state_data.json',
            headers: {
            }
        };

        Axios(config)
            .then(function (response) {
             console.log(JSON.stringify(response.data));//response.data gives the data
            })
            .catch(function (error) {
                console.log(error);
            });