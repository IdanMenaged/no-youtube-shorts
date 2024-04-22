import { StyleSheet, TextInput, View, Image, TouchableWithoutFeedback, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { getFolder } from '../util/local-storage';

const trash = require('../assets/trash.png')

export default function EditChannels({ navigation, route }) {
    const [data, setData] = useState({
        channels: []
    })

    useEffect(() => {
        getFolder(route.params.id).then(data => {
            setData(data)
        })
    })

    return (
        <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    {data.channels.map(channel => {
                        return (
                            <View style={styles.inputContainer}>
                                <TextInput placeholder={channel} style={styles.input} />
                                <Image source={trash} style={styles.trashImage} />
                            </View>
                        )
                    })}
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="channel or keyword" style={styles.input} />
                        <Image source={trash} style={styles.trashImage} />
                    </View>
                </View>
                <TouchableWithoutFeedback>
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
    },
    scrollView: {
        flexGrow: 1
    }
});
