import { Text, View, StyleSheet } from "react-native"
import Folder from "./Folder";

export default function Gallery() {
    return (
        <View style={styles.gallery}>
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
        </View>
    )
}

const styles = StyleSheet.create({
    gallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // gap: '5%'
    }
});
  