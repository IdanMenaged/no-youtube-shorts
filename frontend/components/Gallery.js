import { View, StyleSheet } from "react-native"
import Folder from "./Folder";

export default function Gallery() {
    return (
        <View style={styles.gallery}>
            <Folder name={'placeholder 1'} />
            <Folder name={'placeholder 2'} />
            <Folder name={'placeholder 3'} />
            <Folder name={'placeholder 4'} />
            <Folder name={'placeholder 5'} />
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
  