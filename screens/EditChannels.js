import { StyleSheet, TextInput, View, Image, TouchableWithoutFeedback, Text, ScrollView } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { getFolder, updateFolder } from '../util/local-storage';

const trash = require('../assets/trash.png')

export default function EditChannels({ navigation, route }) {
    const [data, setData] = useState({
        channels: []
    })

    const lastInputRef = useRef(null)

    useEffect(() => {
        getFolder(route.params.id).then(data => {
            setData(data)
        })
    })

    function handleNewInput(event) {
        const input = event.nativeEvent.text
        newData = { ...data }
        newData.channels.push(input)
        setData(newData)
        lastInputRef.current.clear()
    }

    function removeEntry(index) {
        let newData = { ...data }
        newData.channels.splice(index, 1)
        setData(newData)
    }

    function submit() {
        updateFolder(route.params.id, data).then(() => {
            navigation.navigate('Folder', { id: route.params.id })
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    {data.channels.map((channel, i) => {
                        return (
                            <View key={i} style={styles.inputContainer}>
                                <TextInput value={channel} style={styles.input} />
                                <TouchableWithoutFeedback onPress={() => removeEntry(i)}>
                                    <Image source={trash} style={styles.trashImage} />
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    })}
                    <TextInput
                        placeholder="channel or keyword"
                        style={styles.lastInput}
                        onSubmitEditing={handleNewInput}
                        ref={lastInputRef}
                    />
                </View>
                <TouchableWithoutFeedback onPress={submit}>
                    <View style={styles.submitContainer}>
                        <Text style={[styles.text, styles.submit]}>Submit</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: ' center',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Ubuntu',
        width: '60%'
    },
    trashImage: {
        width: '10%',
        resizeMode: 'contain'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '15%',
        marginLeft: '10%',
        gap: '10%',
    },
    add: {
        marginTop: '5%'
    },
    submit: {
        height: '50%', // centers it vertically
    },
    submitContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        width: '60%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20%',
        marginTop: '10%'
    },
    text: {
        width: '600%',
        height: '10%',
        textAlign: 'center',
        borderRadius: 25,
        fontFamily: 'Ubuntu',
        fontSize: 24
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    scrollView: {
        flexGrow: 1
    },
    lastInput: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Ubuntu',
        width: '55%',
        height: 125,
        marginTop: '10%'
    }
});
