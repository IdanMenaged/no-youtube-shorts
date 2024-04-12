import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navbar from './components/Navbar';

const icon = require('./assets/icon.png');
const search = require('./assets/search.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#000000',
    alignItems: 'left',
    justifyContent: 'top',
    height: '100%',
    width: '100%'
  },
});
