import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Add from './screens/Add';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  // import font
  const [fontsLoaded, fontError] = useFonts({
    'Ubuntu': require('./assets/fonts/UbuntuCondensed-Regular.ttf')
  });

  if (!fontsLoaded && !fontError) {
  return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Add' component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

const theme = {
  colors: {
    card: '#000000',
    text: '#ffffff'
  }
}
