import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native"
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { deleteFolder } from "../util/local-storage";

const placeholderImage = require('../assets/photo-input.png')
const more = require('../assets/more.png')

export default function Folder({ data, updateFolders, navigation }) {
    return (
        <View style={styles.folder}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Folder', { id: data.id })}>
                <Image source={(data.icon !== null ? { uri: data.icon } : placeholderImage)} style={styles.image} />
            </TouchableWithoutFeedback>
            <View style={styles.textRow}>
                <Text style={styles.text} numberOfLines={1}>{data.name}</Text>
                <Menu>
                    <MenuTrigger>
                        <Image source={more} />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption text='Delete' style={styles.text} onSelect={() => {
                            deleteFolder(data.id)
                            updateFolders()
                        }} />
                    </MenuOptions>
                </Menu>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        alignSelf: 'center',
        width: '60%',
        fontFamily: 'Ubuntu',
        textAlign: 'center',
        marginLeft: '20%'
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    folder: {
        width: '33%',
        padding: '5%'
    },
    textRow: {
        flexDirection: 'row',
    },
    more: {
        width: 20
    }
});
