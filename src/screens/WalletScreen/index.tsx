/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  ScrollView,
  Dimensions,
  Animated,
  Pressable,
  RefreshControl,
  Alert,
} from 'react-native';
import WalletHeader from './WalletHeader';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';
import styles from './styles';
import {BitCoinTabIcon} from '../../config/svgs';
// import {LineChart} from 'react-native-chart-kit';
import WalletDetailPopup from './WalletDetail';
import {horizontalBoxData, ChartData, WalletProps, chartData} from './utilis';
import WalletData from './WalletData';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {LogBox} from 'react-native';
import LoadingIndicator from '../../components/loadingIndicator';
// import SwipeGesture from '../../components/swipe-gesture';
import useWalletData from '../../hooks/useWalletData';
const WalletScreen: React.FC<WalletProps> = (props: WalletProps) => {
  const {navigation, route} = props;
  const view1 = React.createRef();
  const view2 = React.createRef();
  const [showOverView, setShowOverView] = useState<boolean>(true);
  const [showWallte, setShowWallet] = useState<boolean>(false);
  const [showPopUp, setShowUp] = useState<boolean>(false);
  const [sendStatus, setSendStatus] = useState<string>('');
  const [highLight, setHighLight] = useState<number>();
  const [walletAmount, setWalletAmount] = useState<string>('');
  const [graphType, setGraphType] = useState<string>('1m');
  const [progressTime, setProgressTime] = useState(0);
  // Define a initial value for chart
  const animationValue = React.useRef(new Animated.Value(0)).current;
  const [newChartVal, setNewChartVal] = useState();
  const [timeOfTransaction, setTimeOfTransaction] = useState<string>('');
  const [oneMonthbgColor, setMothBgColor] = useState<string>('#0463D3');
  const [oneMonthColor, setOneMothColor] = useState<string>('#ffffff');
  const [oneYearbgColor, setYearBgColor] = useState<string>('#D8D8D8');
  const [oneYearColor, setOneYearColor] = useState<string>('#000000');
  const [oneWeekbgColor, setWeekBgColor] = useState<string>('#D8D8D8');
  const [oneWeekColor, setOneWeekColor] = useState<string>('#000000');
  const [oneHourbgColor, setHourBgColor] = useState<string>('#D8D8D8');
  const [oneHourColor, setOneHourColor] = useState<string>('#000000');
  const [oneDaybgColor, setDayBgColor] = useState<string>('#D8D8D8');
  const [oneDayColor, setOneDayColor] = useState<string>('#000000');

  const ini = [
    {value: 0},
    {value: 20},
    {value: 30},
    {value: 50},
    {value: 90},
    {value: 110},
  ];
  const [lineData, setLineData] = useState(ini);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const currentBtc = 0.000454233;
  const {
    loading,
    getWalletGraph,
    getStatementReport,
    chartData,
    walletData,
    oneDayData,
    oneHourData,
    oneMonthData,
    oneyearData,
    oneWeekData,
  } = useWalletData();
  const goBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    console.log(lineData);
  }, [lineData]);
  // useEffect(() => {
  //   if (graphType === '1m') {
  //     setNewChartVal(oneMonthData);
  //   }
  // }, [oneMonthData]);
  function btcInUsd(amount: any) {
    let converted = (amount * 36543.2).toFixed(2);
    return converted;
  }
  const changeGraphType = (type: string) => {
    setGraphType(type);
    switch (type) {
      case '1h': {
        setOneHourColor('#ffffff');
        setHourBgColor('#0463D3');
        setOneMothColor('#000000');
        setMothBgColor('#D8D8D8');
        setOneYearColor('#000000');
        setYearBgColor('#D8D8D8');
        setOneWeekColor('#000000');
        setWeekBgColor('#D8D8D8');
        setOneDayColor('#000000');
        setDayBgColor('#D8D8D8');
        setLineData([
          {value: 0},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
        ]);
        break;
      }
      case '1y': {
        setOneHourColor('#000000');
        setHourBgColor('#D8D8D8');
        setOneMothColor('#000000');
        setMothBgColor('#D8D8D8');
        setOneYearColor('#ffffff');
        setYearBgColor('#0463D3');
        setOneWeekColor('#000000');
        setWeekBgColor('#D8D8D8');
        setOneDayColor('#000000');
        setDayBgColor('#D8D8D8');
        setLineData([
          {value: 0},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
        ]);
        break;
      }
      case '1m': {
        setOneHourColor('#000000');
        setHourBgColor('#D8D8D8');
        setOneMothColor('#ffffff');
        setMothBgColor('#0463D3');
        setOneYearColor('#000000');
        setYearBgColor('#D8D8D8');
        setOneWeekColor('#000000');
        setWeekBgColor('#D8D8D8');
        setOneDayColor('#000000');
        setDayBgColor('#D8D8D8');
        setLineData([
          {value: 0},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
        ]);
        break;
      }
      case '1w': {
        setOneHourColor('#000000');
        setHourBgColor('#D8D8D8');
        setOneMothColor('#000000');
        setMothBgColor('#D8D8D8');
        setOneYearColor('#000000');
        setYearBgColor('#D8D8D8');
        setOneWeekColor('#ffffff');
        setWeekBgColor('#0463D3');
        setOneDayColor('#000000');
        setDayBgColor('#D8D8D8');
        setLineData([
          {value: 0},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
        ]);
        break;
      }
      case '1d': {
        setOneHourColor('#000000');
        setHourBgColor('#D8D8D8');
        setOneMothColor('#000000');
        setMothBgColor('#D8D8D8');
        setOneYearColor('#000000');
        setYearBgColor('#D8D8D8');
        setOneWeekColor('#000000');
        setWeekBgColor('#d8d8d8');
        setOneDayColor('#ffffff');
        setDayBgColor('#0463D3');
        setLineData([
          {value: 0},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
          {value: Math.floor(Math.random() * 100) + 1},
        ]);
        break;
      }
      default: {
        //  console.log('Undeteceted action');
      }
    }
  };
  useEffect(() => {
    if (route.params !== undefined) {
      showWalletTab();
    }
    getWalletGraph();
    getStatementReport();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs([
      '"rgba(119, 181, 254, 0.45)3" is not a valid color or brush',
    ]);
  }, []);
  useEffect(() => {
    if (refreshing === true) {
      getWalletGraph();
      getStatementReport();
      setRefreshing(false);
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      LogBox.ignoreLogs([
        '"rgba(119, 181, 254, 0.45)3" is not a valid color or brush',
      ]);
    }
  }, [refreshing]);
  // const chartConfig = {
  //   backgroundColor: 'white',
  //   backgroundGradientFrom: 'white',
  //   backgroundGradientTo: 'white',
  //   fillShadowGradient: '#77B5FE73',
  //   height: '5000',
  //   fillShadowGradientOpacity: 1,
  //   backgroundGradientFromOpacity: 1,
  //   decimalPlaces: 5,
  //   propsForLabels: {
  //     fontSize: 10,
  //   },
  //   color: () => 'rgba(119, 181, 254, 0.45)3',
  //   labelColor: () => 'black',
  //   propsForBackgroundLines: {
  //     strokeWidth: 0,
  //   },
  // };

  const showWalletTab = () => {
    setShowOverView(false);
    setShowWallet(true);
  };
  const showOverViewTab = () => {
    setShowOverView(true);
    setShowWallet(false);
  };
  const openDetailModal = (
    index: any,
    status: any,
    amount: any,
    dateTime: any,
  ) => {
    setShowUp(true);
    setHighLight(index);
    setSendStatus(status);
    setWalletAmount(amount);
    setTimeOfTransaction(dateTime);
  };
  // const onSwipePerformed = (action: any) => {
  //   /// action : 'left' for left swipe
  //   /// action : 'right' for right swipe
  //   /// action : 'up' for up swipe
  //   /// action : 'down' for down swipe

  //   switch (action) {
  //     case 'left': {
  //       showWalletTab();
  //       break;
  //     }
  //     case 'right': {
  //       showOverViewTab();
  //       break;
  //     }
  //     case 'up': {
  //       break;
  //     }
  //     case 'down': {
  //       break;
  //     }
  //     default: {
  //       console.log('Undeteceted action');
  //     }
  //   }
  // };
  const renderHorizontalBox = ({item}: any) => (
    <View style={styles.bitCoinPriceWrapper}>
      <View style={{flexDirection: 'row', paddingLeft: 5}}>
        <BitCoinTabIcon />
        <Text
          style={{
            color: '#495057',
            fontWeight: '600',
            fontFamily: 'Poppins-Medium',
          }}>
          {' '}
          {item.boxTitle} {'\n'} {item.boxTitle2nd}
        </Text>
      </View>
      <View style={styles.priceBoxViewStyle}>
        <Text style={styles.priceBoxTextSyle}>{item.boxPrice} BTC</Text>
        <Text
          style={{
            fontSize: 12,
            color: 'lightgrey',
            fontFamily: 'Poppins-Medium',
          }}>
          ≈ USD {btcInUsd(item.boxPrice)}
        </Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <WalletHeader
        showOverViewTab={showOverViewTab}
        showWalletTab={showWalletTab}
        showOverView={showOverView}
        showWallte={showWallte}
        onPressBack={goBack}
      />
      {!loading ? (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
              //  tintColor="#F8852D"
            />
          }>
          {/* <SwipeGesture onSwipePerformed={onSwipePerformed}> */}
          {showOverView ? (
            <View>
              <View style={styles.priceViewWrapper}>
                <Text style={styles.priceViewTextStyle}>
                  {currentBtc} BTC
                  <Text style={{color: 'lightgrey'}}>
                    {' '}
                    ≈ USD {btcInUsd(currentBtc)}{' '}
                  </Text>
                </Text>
                <Text>in the last 24 hours</Text>
              </View>
              <View style={styles.priceBoxFlatlist}>
                <FlatList
                  data={horizontalBoxData}
                  renderItem={renderHorizontalBox}
                  horizontal={true}
                />
              </View>
              <View style={styles.chartTypeWrapper}>
                <Pressable
                  style={{
                    ...styles.chartDataView,
                    backgroundColor: oneHourbgColor,
                  }}
                  onPress={() => changeGraphType('1h')}>
                  <Text style={{...styles.chartTypeText, color: oneHourColor}}>
                    1h
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.chartDataView,
                    backgroundColor: oneYearbgColor,
                  }}
                  onPress={() => changeGraphType('1y')}>
                  <Text style={{...styles.chartTypeText, color: oneYearColor}}>
                    1y
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.chartDataView,
                    backgroundColor: oneMonthbgColor,
                  }}
                  onPress={() => changeGraphType('1m')}>
                  <Text style={{...styles.chartTypeText, color: oneMonthColor}}>
                    1m
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.chartDataView,
                    backgroundColor: oneWeekbgColor,
                  }}
                  onPress={() => changeGraphType('1w')}>
                  <Text style={{...styles.chartTypeText, color: oneWeekColor}}>
                    1w
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.chartDataView,
                    backgroundColor: oneDaybgColor,
                  }}
                  onPress={() => changeGraphType('1d')}>
                  <Text style={{...styles.chartTypeText, color: oneDayColor}}>
                    1d
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  //paddingTop: 20,
                  // backgroundColor: 'white',
                  paddingLeft: 10,
                  paddingVertical: 45,

                  backgroundColor: 'white',
                }}>
                <LineChart
                  pressEnabled={false}
                  data={lineData}
                  areaChart
                  isAnimated
                  curved
                  height={250}
                  //  startFillColor="#77B5FE73"
                  startFillColor={'#77B5FE73'}
                  endFillColor={'#77B5FE73'}
                  thickness={1}
                  disableScroll
                  startOpacity={1}
                  endOpacity={1}
                  initialSpacing={0}
                  hideYAxisText
                  hideRules
                  color="#77B5FE73"
                  hideDataPoints
                  hideAxesAndRules={true}
                  width={Dimensions.get('window').width + 30}
                  animationDuration={2000}
                  animateOnDataChange
                  onDataChangeAnimationDuration={2000}
                />
                {/* <LineChart
                  withHorizontalLabels={true}
                  withDots={false}
                  withInnerLines={false}
                  withOuterLines={false}
                  data={chartData}
                  width={Dimensions.get('window').width + 30}
                  height={240}
                  chartConfig={chartConfig}
                  bezier
                  style={styles.chartStyle}
                /> */}
              </View>
            </View>
          ) : (
            <View>
              <View style={{...styles.priceViewWrapper, paddingBottom: 37}}>
                <Text style={styles.walletBalaceViewStyle}>
                  Wallet balance:
                  <Text style={{color: '#0463D3'}}> 0.00031958 BTC</Text>
                </Text>
                <Text style={{fontSize: 12, paddingRight: 16, paddingTop: 2}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Term of Service and Privacy Policy
                </Text>
              </View>
              <WalletData
                listViewItems={walletData}
                openDetailModal={(index, status, amount, datetime) =>
                  openDetailModal(index, status, amount, datetime)
                }
                highLight={highLight}
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={showPopUp}>
                <WalletDetailPopup
                  walletAmount={walletAmount}
                  onValueChange={setShowUp}
                  currentStatus={sendStatus}
                  dateTime={timeOfTransaction}
                />
              </Modal>
            </View>
          )}
          {/* </SwipeGesture> */}
        </ScrollView>
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
};

export default WalletScreen;
