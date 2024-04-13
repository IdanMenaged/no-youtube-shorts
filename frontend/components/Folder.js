import { Text, View, StyleSheet, Image } from "react-native"

placeholderImage = require('../assets/placeholder.jpg')

export default function Folder({ name }) {
    return (
        <View style={styles.folder}>
            <Image source={placeholderImage} style={styles.image} />
            <Text style={styles.text} numberOfLines={1}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        alignSelf: 'center',
        width: '100%',
        fontFamily: 'Ubuntu'
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    folder: {
        width: '33%',
        padding: '5%'
    }
});
  