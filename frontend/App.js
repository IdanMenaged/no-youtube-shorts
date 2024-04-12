import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Gallery />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: ' center',
    height: '100%',
    width: '100%',
  },
});
