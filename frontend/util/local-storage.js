import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    storageBackend: AsyncStorage, // react native storage
    defaultExpires: null, // never expires
})
lastId = 0;

export async function getFolders() {
    return await storage.getAllDataForKey('folder')
    .catch(err => alert(err))
}

export async function addFolder(name, icon, channels) {
    data = {
        name: name,
        icon: icon,
        channels: channels
    }

    lastId++;

    storage.save({
        key: 'folder',
        id: `${lastId}`,
        data: data,
        expires: null
    })
}