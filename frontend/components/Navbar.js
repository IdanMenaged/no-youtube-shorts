import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

const icon = require('../assets/icon.png');
const search = require('../assets/search.png');

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <Image source={icon} style={styles.icon} />
            <TouchableWithoutFeedback onPress={() => alert('search')}>
              <Image source={search} style={styles.searchButton} />
            </TouchableWithoutFeedback>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      width: '100%',
      marginTop: '15%',
      justifyContent: 'space-between'
    },
    searchButton: {
      marginTop: '5%',
      marginRight: '5%'
    }
  });
  