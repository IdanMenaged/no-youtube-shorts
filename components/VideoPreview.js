import { StyleSheet, View, Text, Button } from "react-native";
import { useState, useCallback } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function VideoPreview({ searchResult }) {
    const [playing, setPlaying] = useState(false)

    const onStateChange = useCallback(state => {
        if (state === 'ended') {
            setPlaying(false)
            console.log('video has ended')
        }
    }, [])

    return (
        <View style={styles.container}>
            <YoutubePlayer
                height={250}
                width={400}
                play={playing}
                videoId={searchResult.id.videoId}
                onChangeState={onStateChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})