import React from 'react';
import AppContainer from './screens/AppContainer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistedStore } from './store';
import { useFonts } from '@expo-google-fonts/inter';
import { Rubik_500Medium } from '@expo-google-fonts/dev';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ThemeProvider from '_components/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import theme from '_theme';

console.disableYellowBox = true;

export default function App() {
  const [fontsLoaded] = useFonts({ Rubik_500Medium });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={theme.palette?.accent} size={50} />
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <NavigationContainer>
            <ThemeProvider>
              <AppContainer />
            </ThemeProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
