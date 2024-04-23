import { StyleSheet, View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import { useState, useEffect } from 'react'
import { getFolder } from '../util/local-storage';
import cache from '../util/cache';
import { search } from '../util/youtube';
import Navbar from '../components/Navbar';
import VideoPreview from '../components/VideoPreview';

const edit = require('../assets/edit.png')

export default function Folder({ navigation, route }) {
    const [data, setData] = useState(null)
    const [searchResults, setSearchResults] = useState(null)

    useEffect(() => {
        getFolder(route.params.id).then(async (data) => {
            setData(data)
            const inCache = await cache.get(route.params.id)
            if (inCache) {
                console.log('in cache')
                setSearchResults(inCache)
            } else {
                console.log('searching...')
                const results = []
                data.channels.forEach(async channel => {
                    let result = await search(channel)
                    result = result.items
                    result.forEach(vid => results.push(vid))
                    results.push(result)
                    setSearchResults(results) // FIX: prob triggers multiple renders. for now its fast enough and isn't too much of a problem
                    if (!results.error) {
                        cache.set(route.params.id, results)
                    }
                })
            }
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
            {searchResults ? <VideoPreview searchResult={searchResults[0]} /> : <Text style={styles.text}>no videos</Text>}
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
    editImage: {
        width: 40,
        resizeMode: 'contain'
    },
    editContainer: {
        alignSelf: 'flex-end',
        marginRight: '5%'
    },
    text: {
        color: '#ffffff'
    }
});
