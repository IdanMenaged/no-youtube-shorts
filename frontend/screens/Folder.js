import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { useState, useEffect } from 'react'
import { getFolder } from '../util/local-storage';
import cache from '../util/cache';
import { search } from '../util/youtube';
import Navbar from '../components/Navbar';

const edit = require('../assets/edit.png')

export default function Folder({ navigation, route }) {
    const [data, setData] = useState(null)
    const [searchResults, setSearchResults] = useState(null)

    useEffect(() => {
        getFolder(route.params.id).then(data => {
            setData(data)
            search('hello world').then(results => {
                setSearchResults(results)
                if (!results.error) {
                    cache.set(route.params.id, results)
                    cache.getAll().then((results) => console.log(results))
                }
            })
        })
    }, [])

    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.editContainer}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('EditChannels', { id: route.params.id })}
                >
                    <Image source={edit} style={styles.editImage} />
                </TouchableWithoutFeedback>
            </View>
            <Text style={styles.text}>{JSON.stringify(searchResults)}</Text>
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
    },
    editImage: {
        width: 40,
        resizeMode: 'contain'
    },
    editContainer: {
        alignSelf: 'flex-end',
        marginRight: '5%'
    },
});
