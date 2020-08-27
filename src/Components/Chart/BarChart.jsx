import React from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const BarChart = () => {

    const data= {
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'confirmed',
            data:  [570,90,410],
            borderColor: 'blue',
            backgroundColor: 'rgba(89, 0, 255, 0.904)',
            fill: true,
          },
          {
            label: 'recovered',
            data:  [250,590,620],
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          {
            label: 'deaths',
            data:  [700,80,200],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }
        ]
      }

      return(
        <div className={styles.container}>
          <Bar
              data={data}
          />
        </div>
      );
}

export default BarChart;