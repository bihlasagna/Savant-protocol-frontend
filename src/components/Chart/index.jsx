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
  layout: {},
  plugins: {
    legend: {
      display: false,
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
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'transparent',
      borderColor: 'rgb(75, 192, 192)',
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
