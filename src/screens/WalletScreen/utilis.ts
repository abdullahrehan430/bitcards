import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type WalletNavigationProp = StackNavigationProp<ParamListBase, 'Dashboard'>;
export interface WalletProps {
  route: any;
  navigation: WalletNavigationProp;
}

export interface WalletDataInterface {
  amount: string;
  datetime: string;
  type: string;
}
interface Datasets {
  data: number[];
}
export interface ChartData {
  labels: string[];
  datasets: Datasets[];
}
export const horizontalBoxData = [
  {
    boxTitle: 'Current',
    boxTitle2nd: 'BTC Price',
    boxPrice: '0.000454233',
    currenyUnit: '≈ USD 0.00 ',
  },
  {
    boxTitle: 'BTC',
    boxTitle2nd: 'Balance',
    boxPrice: '0.000319588',
    currenyUnit: '≈ USD 0.00 ',
  },
  {
    boxTitle: 'BTC',
    boxPrice: '0.000123423',
    boxTitle2nd: 'Balance',
    currenyUnit: '≈ USD 0.00 ',
  },
];
export const listViewItems = [
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Sent BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Sent BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Sent BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Sent BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Sent BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Recieved BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Recieved BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Recieved BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Recieved BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Recieved BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Recieved BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Recieved BTC',
  },
  {
    amount: '0.00012323',
    datetime: '22-2-22:10:Am',
    type: 'Recieved BTC',
  },
];
export const chartData = {
  labels: ['1:00:AM', '2:00:AM', '3:00:AM', '4:00:AM', '5:00:AM'],
  datasets: [
    {
      data: [2, 4, 6, 8, 10],
    },
  ],
};
