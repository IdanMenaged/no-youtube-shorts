import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Add from './screens/Add';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuProvider } from 'react-native-popup-menu';
import Folder from './screens/Folder';

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
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Add' component={Add} />
          <Stack.Screen name='Folder' component={Folder} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
});
