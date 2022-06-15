import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
// import faker from 'faker';

import './index.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => [180, 121, 551, 456, 125, 635, 447]),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'transparent',
    },
  ],
};
const Chart = () => {
  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
