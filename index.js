/*
import 'intl';
import 'intl/locale-data/jsonp/en';
import React from 'react';
import './shim.js';
import App from './App';
import { Sentry } from 'react-native-sentry';
import { AppRegistry } from 'react-native';
import WalletMigrate from './screen/wallets/walletMigrate';
import { name as appName } from './app.json';
/** @type {AppStorage} */
/*
const BlueApp = require('./BlueApp');
if (process.env.NODE_ENV !== 'development') {
  Sentry.config('https://23377936131848ca8003448a893cb622@sentry.io/1295736').install();
}

if (!Error.captureStackTrace) {
  // captureStackTrace is only available when debugging
  Error.captureStackTrace = () => {};
}

class BlueAppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMigratingData: true };
  }

  async setIsMigratingData() {
    await BlueApp.startAndDecrypt();
    this.setState({ isMigratingData: false });
  }

  render() {
    return this.state.isMigratingData ? <WalletMigrate onComplete={() => this.setIsMigratingData()} /> : <App />;
  }
}

AppRegistry.registerComponent(appName, () => BlueAppComponent);
*/

import { name as appName } from './app.json';

import React from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import CallBitcoinWallet from './BitcoinApp';
import CallEthereumWallet from './ethereum/EthereumApp';

class BitcoinScreen extends React.Component {
  render() {
    return (<CallBitcoinWallet />);
  }
}

class EthereumScreen extends React.Component {
  render() {
    return (<CallEthereumWallet />);
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Select" onPress={() => this.props.navigation.navigate('Select')} />
      </View>
    );
  }
}

class SelectScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Selection Screen</Text>
        <Button title="Go to BITCOIN" 
          onPress={() => this.props.navigation.push('Bitcoin')} />
        <Button
          title="Go to ETHEREUM"
          onPress={() => this.props.navigation.navigate('Ethereum')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Ethereum: {
      screen: EthereumScreen,
    },
    Bitcoin: {
      screen: BitcoinScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Select: {
      screen: SelectScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent(appName, () => App);
