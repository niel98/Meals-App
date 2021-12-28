import { StyleSheet, Text, View } from 'react-native';

import MealsNavigator from './navigation/MealsNavigator'

import AppLoadingProps from 'expo-app-loading'
import * as Font from 'expo-font'
import { useState } from 'react';

import { enableScreens } from 'react-native-screens'

enableScreens()

const fetchFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoadingProps
    startAsync={fetchFont}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)} />
  }

  return <MealsNavigator />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
