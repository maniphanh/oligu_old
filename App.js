/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import configureStore from './store';
import LoginPage from './pages/clients/login/loginPage';
import {useSelector} from 'react-redux';

const store = configureStore();

const style = {flex: 1, alignItems: 'center', justifyContent: 'center'};

const HomeScreen = ({navigation}) => {
  const status = useSelector((state) => state.login.status);

  return (
    <View style={style}>
      <Text>Home Screen</Text>
      <Text>{status}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <LoginPage />
    </View>
  );
};

function DetailsScreen() {
  return (
    <View style={style}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
