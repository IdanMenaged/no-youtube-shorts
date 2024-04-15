import { View, StyleSheet, Text, FlatList, Image } from "react-native"
import { useState, useEffect } from 'react'
import Folder from "./Folder";
import { getFolders, addFolder } from "../util/local-storage";

export default function Gallery() {
    const [folders, setFolders] = useState()

    useEffect(() => {
        getFolders().then((folders) => {
            setFolders(folders)
        })
    }, [])

    return (
        JSON.stringify(folders) != '[]' ? <Text style={styles.text}>{JSON.stringify(folders)}</Text> : <Text style={styles.text}>No folders created yet...</Text>
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
  