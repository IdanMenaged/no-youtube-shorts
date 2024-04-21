import { StyleSheet, View, Text } from 'react-native';
import Navbar from '../components/Navbar';

export default function Folder({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Navbar />
            <Text style={styles.text}>{route.params.id}</Text>
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
    }
});
