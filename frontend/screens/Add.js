import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Text, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react'

photoInput = require('../assets/photo-input.png')

export default function Add() {
    const [photo, setPhoto] = useState(null)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TouchableWithoutFeedback onPress={pickImage}>
                    <Image source={photo ? { uri: photo } : photoInput} style={styles.photoInput} />
                </TouchableWithoutFeedback>
                <TextInput placeholder='Name' style={[styles.text, styles.textInput]} />
            </View>
            <TouchableWithoutFeedback>
                <View style={styles.submitContainer}>
                    <Text style={[styles.text, styles.submit]}>Submit</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: ' center',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        width: '600%',
        height: '10%',
        textAlign: 'center',
        borderRadius: 25,
        fontFamily: 'Ubuntu',
        fontSize: 24
    },
    textInput: {
        backgroundColor: '#D9D9D9',
        width: '60%',
        height: '15%'
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
        marginBottom: '20%'
    },
    photoInput: {
        marginTop: '25%',
        width: 200,
        height: 200
    },
    form: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    }
});
  