import { StyleSheet, View, Image } from 'react-native';

add = require('../assets/add.png');

export default function Toolbar() {
    return (
        <View style={styles.toolbar}>
            <Image source={add} style={styles.image}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    toolbar: {
        alignSelf: 'flex-end',
        marginRight: '5%'
    },
    image: {
        width: 50,
        height: 50
    }
  });
  