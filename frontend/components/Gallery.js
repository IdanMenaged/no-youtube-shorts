import { View, StyleSheet, Text } from "react-native"
import { useState, useEffect } from 'react'
import Folder from "./Folder";
import { getFolders } from "../util/local-storage";

export default function Gallery({ navigation }) {
    const [folders, setFolders] = useState([])

    function updateFolders() {
        getFolders().then((folders) => {
            setFolders(folders)
        })
    }

    useEffect(() => {
        updateFolders()

        // update when screen comes into focus
        const focusListener = navigation.addListener('focus', () => {
            updateFolders();
        })
        return focusListener
    }, [])

    return (
        JSON.stringify(folders) != '[]' ? (
            <View style={styles.gallery}>
                {folders.map((folder) => <Folder key={folder.id} data={folder} updateFolders={updateFolders} />)}
            </View>
        ) : (
            <Text style={styles.text}>No folders created yet...</Text>
        )
    )
}

const styles = StyleSheet.create({
    gallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // gap: '5%'
    },
    text: {
        color: '#ffffff'
    }
});
