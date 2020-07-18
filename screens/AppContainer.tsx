import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from './Main/Screen1';
import Screen2 from './Main/Screen2';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="screen1" component={Screen1} />
      <Stack.Screen name="screen2" component={Screen2} />
    </Stack.Navigator>
  );
};
