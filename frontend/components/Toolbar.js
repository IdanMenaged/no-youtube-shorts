import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

add = require('../assets/add.png');

export default function Toolbar({ navigation }) {
    return (
        <View style={styles.toolbar}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Add')}>
                <Image source={add} style={styles.image} />
            </TouchableWithoutFeedback>
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
  