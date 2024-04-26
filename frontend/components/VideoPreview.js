import { StyleSheet, View, Text, Image } from "react-native";

export default function VideoPreview({ searchResult }) {
    function decodeTitle(title) {
        return title.replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: searchResult.snippet.thumbnails.default.url }}
                style={styles.icon}
            />
            <Text style={styles.text}>{decodeTitle(searchResult.snippet.title)}</Text>
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