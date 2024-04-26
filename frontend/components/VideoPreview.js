import { StyleSheet, View, Text, Button } from "react-native";
import { useState, useCallback } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function VideoPreview({ searchResult }) {
    const [playing, setPlaying] = useState(false)

    function decodeTitle(title) {
        return title.replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    }

    const onStateChange = useCallback(state => {
        if (state === 'ended') {
            setPlaying(false)
            console.log('video has ended')
        }
    }, [])

    const togglePlaying = useCallback(() => {
        setPlaying(prev => !prev)
    }, [])

    return (
        <View style={styles.container}>
            {/* <Image
                source={{ uri: searchResult.snippet.thumbnails.default.url }}
                style={styles.icon}
            /> */}
            <YoutubePlayer
                height={300}
                play={playing}
                videoId='cTQrl-1KE7U'
                onChangeState={onStateChange}
            />
            <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
            <Text style={styles.text}>{decodeTitle(searchResult.snippet.title)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    },
    icon: {
        width: 200,
        height: 200,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})