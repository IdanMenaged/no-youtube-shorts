import { StyleSheet, TextInput, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { getFolder } from '../util/local-storage';

const trash = require('../assets/trash.png')
const add = require('../assets/add.png')

export default function EditChannels({ navigation, route }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        getFolder(route.params.id).then(data => {
            setData(data)
        })
    })

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="channel or keyword" style={styles.input} />
                <Image source={trash} style={styles.trashImage} />
            </View>
            <Image source={add} style={styles.add} />
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
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Ubuntu',
        width: '50%'
    },
    trashImage: {
        width: '10%',
        resizeMode: 'contain'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '25%',
        gap: '10%',
    },
    add: {
        marginTop: '5%'
    }
});
