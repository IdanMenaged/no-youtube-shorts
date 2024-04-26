import { StyleSheet, View, Text, Image } from "react-native";

export default function VideoPreview({ searchResult }) {
    console.log(searchResult.snippet.thumbnails.default.url)

    return (
        <View>
            <Image
                source={{ uri: searchResult.snippet.thumbnails.default.url }}
                // source={require('../assets/icon.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>{searchResult.snippet.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    },
    icon: {
        // width: 10000,
        // height: 10000,
        // resizeMode: 'contain',
        backgroundColor: '#ffffff'
    }
})