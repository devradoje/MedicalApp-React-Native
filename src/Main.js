import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Splash from './components/welcome/Splash';
import Login from './components/login/Login';
import Welcome from './components/welcome/Welcome';
import Mode from './components/welcome/Mode';
import Information from './components/information/Information';
import Days from './components/information/Days';
import InfoCorrect from './components/information/InfoCorrect';
import InfoIncorrect from './components/information/InfoIncorrect';
import GoodAnswer from './components/question/GoodAnswer';
import BadAnswer from './components/question/BadAnswer';
import HtaInspection from './components/inspection/HtaInspection';
import SaltStartScreen from './components/salt/SaltStartScreen';
import SaltInspection from './components/salt/SaltInspection';
import SaltBravo from './components/salt/SaltBravo';
import SaltAttention from './components/salt/SaltAttention';
import MeasureAccept from './components/measure/MeasureAccept';
import MeasureHome from './components/measure/MeasureHome';
import StartMeasure from './components/measure/StartMeasure';
import MeasureDisplay from './components/measure/MeasureDisplay';
import TimerScreen from './components/measure/TimerScreen';
import MeasureSync from './components/measure/MeasureSync';
import MeasureGood from './components/measure/MeasureGood';
import MeasureBad from './components/measure/MeasureBad';
import InspectionFinish from './components/inspection/InspectionFinish';
import ManualMeasure from './components/measure/ManualMeasure';
import Quiz from './components/question/Quiz';
import SeveralMeasure from './components/measure/SeveralMeasure';

const createStackNavigators = () => {
  return createStackNavigator({
      Splash: {
          screen: Splash
      },
      Login: {
          screen: Login
      },
      Welcome: {
          screen: Welcome
      },
      Home: {
          screen: Welcome
      },
      Mode: {
          screen: Mode
      },
      Information: {
          screen: Information
      },
      Days: {
          screen: Days
      },
      InfoCorrect: {
          screen: InfoCorrect
      },
      InfoIncorrect: {
          screen: InfoIncorrect
      },
      Quiz: {
          screen: Quiz
      },
      GoodAnswer: {
          screen: GoodAnswer
      },
      BadAnswer: {
          screen: BadAnswer
      },
      HtaInspection: {
          screen: HtaInspection
      },
      SaltStartScreen: {
          screen: SaltStartScreen
      },
      SaltInspection: {
          screen: SaltInspection
      },
      SaltBravo: {
          screen: SaltBravo
      },
      SaltAttention: {
          screen: SaltAttention
      },
      MeasureAccept: {
          screen: MeasureAccept
      },
      MeasureHome: {
          screen: MeasureHome
      },
      StartMeasure: {
          screen: StartMeasure
      },
      MeasureDisplay: {
          screen: MeasureDisplay
      },
      TimerScreen: {
          screen: TimerScreen
      },
      SeveralMeasure: {
          screen: SeveralMeasure
      },
      MeasureSync: {
          screen: MeasureSync
      },
      MeasureGood: {
          screen: MeasureGood
      },
      MeasureBad: {
          screen: MeasureBad
      },
      InspectionFinish: {
          screen: InspectionFinish
      },
      ManualMeasure: {
          screen: ManualMeasure
      },
  }, {
      initialRouteName: 'Splash',
      headerMode: 'none'
  });
}

export default class Main extends Component {
  render() {
      const Navigator = createStackNavigators();
      return (<Navigator/>);
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });