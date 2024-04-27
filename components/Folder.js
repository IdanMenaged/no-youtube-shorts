import { View, StyleSheet, Image, TextInput, Pressable } from "react-native"
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import * as ImagePicker from 'expo-image-picker';
import { deleteFolder, updateFolder } from "../util/local-storage";
import cache from '../util/cache'
import { useState } from "react";

const placeholderImage = require('../assets/photo-input.png')
const more = require('../assets/more.png')

export default function Folder({ _data, updateFolders, navigation }) {
    const [data, setData] = useState(_data)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const icon = result.assets[0].uri
            const newData = { ...data }
            newData.icon = icon
            updateFolder(data.id, newData)
            setData(newData)
        }
    }

    return (
        <View style={styles.folder}>
            <Pressable
                onPress={() => navigation.navigate('Folder', { id: data.id })}
                onLongPress={() => pickImage().then(() => console.log('new image'))}
            >
                <Image source={(data.icon !== null ? { uri: data.icon } : placeholderImage)} style={styles.image} />
            </Pressable>
            <View style={styles.textRow}>
                <TextInput
                    style={styles.text}
                    numberOfLines={1}
                    onSubmitEditing={(event) => {
                        const name = event.nativeEvent.text
                        const newData = { ...data }
                        newData.name = name
                        updateFolder(data.id, newData)
                    }}
                >
                    {data.name}
                </TextInput>
                <Menu>
                    <MenuTrigger>
                        <Image source={more} />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption text='Delete' style={styles.text} onSelect={() => {
                            deleteFolder(data.id)
                            cache.remove(data.id)
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
