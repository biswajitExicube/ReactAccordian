import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/component/common';
import LibraryList from './src/component/LibraryList';

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/


class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex:1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>      
    );
  }
}

const styles = {
  
};

export default App;