import { StyleSheet, View, Text, Image } from "react-native";

export default function VideoPreview({ searchResult }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: searchResult.snippet.thumbnails.default.url }}
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
        width: 200,
        height: 200,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})