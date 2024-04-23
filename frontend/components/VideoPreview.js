import { StyleSheet, Text } from "react-native";

export default function VideoPreview({ searchResult }) {
    return (
        <Text style={styles.text}>{searchResult.snippet.title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    }
})