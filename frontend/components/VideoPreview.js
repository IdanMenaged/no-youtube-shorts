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
                height={200}
                width={300}
                play={playing}
                videoId={searchResult.id.videoId}
                onChangeState={onStateChange}
            />
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