import React from 'react';
import {Line} from 'react-chartjs-2';

const Chart = () => {

    const data= {
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'confirmed',
            data:  [570,90,410],
            borderColor: 'blue',
            // backgroundColor: 'rgba(89, 0, 255, 0.904)',
            fill: true,
          },
          {
            label: 'recovered',
            data:  [250,590,620],
            borderColor: 'green',
            // backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          {
            label: 'deaths',
            data:  [700,80,200],
            borderColor: 'red',
            // backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }
        ]
      }

    // <Line 
    //         data={{
    //             labels: ['Jan', 'Feb', 'Mar'],
    //             datasets: [{
    //                 data: [20,30,40],
    //                 label: 'Infected',
    //                 borderColor: '#3333ff',
    //                 fill: true,
    //             }, {
    //                 data: [50,48,33],
    //                 label: 'Deaths',
    //                 borderColor: 'red',
    //                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
    //                 fill: true, 
    //             }],
    //         }}
    //     />
    // <Bar
    //         data={{
    //           labels: ['Infected', 'Recovered', 'Deaths'],
    //           datasets: [
    //             {
    //               label: 'People',
    //               backgroundColor: ['rgba(89, 0, 255, 0.904)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 17, 0, 0.5)'],
    //               data: [50,40,23],
    //             },
    //           ],
    //         }}
    //         options={{
    //           legend: { display: false },
    //           title: { display: true, text: `Current state in "something"` },
    //         }}
    //       />
    //     )

    return(
        <Line
            data={data}
        />
    );

}

export default Chart;