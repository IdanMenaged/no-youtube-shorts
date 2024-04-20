import { Text, View, StyleSheet, Image } from "react-native"

const placeholderImage = require('../assets/photo-input.png')

export default function Folder({ data }) {
    return (
        <View style={styles.folder}>
            <Image source={(data.icon !== null ? { uri: data.icon } : placeholderImage)} style={styles.image} />
            <Text style={styles.text} numberOfLines={1}>{data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        alignSelf: 'center',
        width: '100%',
        fontFamily: 'Ubuntu',
        textAlign: 'center'
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
