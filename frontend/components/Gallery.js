import { View, StyleSheet, Text, FlatList, Image } from "react-native"
import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Folder from "./Folder";
import { getFolders, addFolder } from "../util/local-storage";

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
        JSON.stringify(folders) != '[]' ? <Folder data={folders[0]} /> : <Text style={styles.text}>No folders created yet...</Text>
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
  