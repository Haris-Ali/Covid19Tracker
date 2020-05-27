import React, { Component } from 'react';

import DrawerScreens from './screens/Screens'
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerScreens />
      </NavigationContainer>
    )
  }
}