import { StyleSheet, View, TouchableWithoutFeedback, Image, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react'
import { getFolder } from '../util/local-storage';
import cache from '../util/cache';
import { search } from '../util/youtube';
import { shuffleArray } from '../util/general'
import Navbar from '../components/Navbar';
import VideoPreview from '../components/VideoPreview';

const edit = require('../assets/edit.png')

export default function Folder({ navigation, route }) {
    const [searchResults, setSearchResults] = useState([])

    const onLoad = () => {
        getFolder(route.params.id).then(async (data) => {
            const inCache = await cache.get(route.params.id)
            if (inCache) {
                setSearchResults(inCache)
            } else {
                console.log('searching...')

                const searchPromises = data.channels.map(channel => search(channel))
                Promise.all(searchPromises).then(_searchResults => {
                    const results = []
                    _searchResults.forEach(result => {
                        result.items.forEach(vid => {
                            results.push(vid)
                        })
                    })

                    shuffleArray(results) // otherwise they appear in the order channels were given

                    setSearchResults(results)
                    cache.set(route.params.id, results)
                })
            }
        })
    }

    useEffect(() => {
        onLoad()

        navigation.addListener('focus', () => onLoad())
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container} bounces={false}>
            <Navbar />
            <View style={styles.editContainer}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('EditChannels', { id: route.params.id })}
                >
                    <Image source={edit} style={styles.editImage} />
                </TouchableWithoutFeedback>
            </View>
            {searchResults.length !== 0 ? searchResults.map(result => <VideoPreview
                searchResult={result}
                key={result.id.videoId}
            />) : <Text style={styles.text}>no videos</Text>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: ' center',
        flexGrow: 1
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
