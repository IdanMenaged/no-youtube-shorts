import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Text } from "react-native"

export default function Add() {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Name' style={[styles.text, styles.textInput]} />
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
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text: {
        width: '60%',
        height: '10%',
        textAlign: 'center',
        borderRadius: 25,
        marginTop: '25%',
        fontFamily: 'Ubuntu',
        fontSize: 24
    },
    textInput: {
        backgroundColor: '#D9D9D9'
    },
    submit: {
        height: '100%', // centers it vertically
    },
    submitContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        width: '60%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20%'
    }
});
  