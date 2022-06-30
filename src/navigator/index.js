// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../page/home';
import Detail from '../page/detail';
import Movie from '../page/movie';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'themoviedb.org'}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen
          options={{title: 'Movies'}}
          name="Movie"
          component={Movie}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
