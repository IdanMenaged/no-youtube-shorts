import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
      {/* <Home /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
