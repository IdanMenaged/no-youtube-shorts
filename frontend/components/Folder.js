import { Text, View, StyleSheet, Image } from "react-native"
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";

const placeholderImage = require('../assets/photo-input.png')
const more = require('../assets/more.png')

export default function Folder({ data }) {
    return (
        <View style={styles.folder}>
            <Image source={(data.icon !== null ? { uri: data.icon } : placeholderImage)} style={styles.image} />
            <View style={styles.textRow}>
                <Text style={styles.text} numberOfLines={1}>{data.name}</Text>
                <Menu>
                    <MenuTrigger>
                        <Image source={more} />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption text='Delete' style={styles.text} />
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
