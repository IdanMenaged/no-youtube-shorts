import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Toolbar from '../components/Toolbar';

export default function Home() {
  return (
      <View style={styles.container}>
        <Navbar />
        <Toolbar />
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
