import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    storageBackend: AsyncStorage, // react native storage
    defaultExpires: null, // never expires
})

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

    const lastId = storage.getIdsForKey('folder').then(ids => {
        return parseInt(ids[ids.length - 1])
    })
    const id = lastId + 1;

    storage.save({
        key: 'folder',
        id: `${id}`,
        data: data,
        expires: null
    })
}