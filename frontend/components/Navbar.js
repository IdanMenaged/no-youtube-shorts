import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const icon = require('../assets/icon.png');
const search = require('../assets/search.png');

export default function Navbar() {
    return (
        <View>
            <View style={styles.iconContainer}>
                <Image source={icon} style={styles.icon} />
            </View>

            <View style={styles.searchContainer}>
                <Image source={search} style={styles.searchButton} />
            </View>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'left',
      justifyContent: 'top',
    },
    icon: {
      resizeMode: 'contain',
      width: 100
    },
    iconContainer: {
      flex: 1,
      paddingTop: 75,
    },
    searchContainer: {
    }
  });
  