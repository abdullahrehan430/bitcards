import {useState} from 'react';
import {httpGet} from '../../../axios/axiosUtilis';
import {
  WalletDataInterface,
  ChartData,
} from '../../screens/WalletScreen/utilis';

const useWalletData = () => {
  const chrtDummy: ChartData = {
    labels: ['0:00', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00'],
    datasets: [
      {
        data: [0, 0, 0, 0, 0],
      },
    ],
  };
  const [loading, SetLoading] = useState(false);
  const [walletData, SetWalletData] = useState<WalletDataInterface>();
  const [oneMonthData, setOneMonth] = useState(chrtDummy);
  const [oneyearData, setOneYear] = useState(chrtDummy);
  const [oneWeekData, setOneWeek] = useState(chrtDummy);
  const [oneDayData, setOneDay] = useState(chrtDummy);
  const [oneHourData, setOneHour] = useState(chrtDummy);
  const [chartData, setchart] = useState(chrtDummy);

  const getWalletGraph = async () => {
    SetLoading(true);
    try {
      const res = await httpGet(
        'wallet-statement-graph?platform=-100&currency=-100&type=monthly',
      );
      const chrt = {
        labels: res.labels,
        datasets: [
          {
            data: res.data,
          },
        ],
      };
      // const dayChrt = {
      //   labels: res.labels.slice(0, 5),
      //   datasets: [
      //     {
      //       data: res.data.slice(0, 5),
      //     },
      //   ],
      // };
      // const hourChrt = {
      //   labels: res.labels.slice(10, 15),
      //   datasets: [
      //     {
      //       data: res.data.slice(10, 15),
      //     },
      //   ],
      // };
      // const monthChart = {
      //   labels: res.labels.slice(60, 65),
      //   datasets: [
      //     {
      //       data: res.data.slice(60, 65),
      //     },
      //   ],
      // };
      // const yearChart = {
      //   labels: res.labels.slice(30, 35),
      //   datasets: [
      //     {
      //       data: res.data.slice(30, 35),
      //     },
      //   ],
      // };
      // const weekChrt = {
      //   labels: res.labels.slice(50, 55),
      //   datasets: [
      //     {
      //       data: res.data.slice(50, 55),
      //     },
      //   ],
      // };
      SetLoading(false);
      setchart(chrt);
      // setOneDay(dayChrt);
      // setOneWeek(weekChrt);
      // setOneYear(yearChart);
      // setOneMonth(monthChart);
      // setOneHour(hourChrt);
    } catch (error) {
      SetLoading(false);
    }
  };
  const getStatementReport = async () => {
    try {
      const res = await httpGet(
        'wallet-statement-report?start=&length=-1&platform=&currency=BTC&daterange=',
      );
      SetWalletData(res.data);
      SetLoading(false);
    } catch (error) {
      //  console.log(error);
      SetLoading(false);
    }
  };

  return {
    loading,
    getWalletGraph,
    chartData,
    getStatementReport,
    walletData,
    oneDayData,
    oneHourData,
    oneWeekData,
    oneyearData,
    oneMonthData,
  };
};

export default useWalletData;
