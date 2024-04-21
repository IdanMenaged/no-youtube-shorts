import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react'
import { getFolder } from '../util/local-storage';
import Navbar from '../components/Navbar';

export default function Folder({ navigation, route }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        getFolder(route.params.id).then(data => {
            setData(data)
        })
    })

    return (
        <View style={styles.container}>
            <Navbar />
            <Text style={styles.text}>{JSON.stringify(data)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: ' center',
        height: '100%',
        width: '100%',
    },
    text: {
        color: '#ffffff'
    }
});
