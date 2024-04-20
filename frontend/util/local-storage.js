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

    storage.getIdsForKey('folder')
        .then(ids => {
            console.log('og', ids)
            if (ids.length === 0) {
                console.log('entered')
                ids = ['0'] // if nothing was saved yet, pretend there is something saved at 0 so that new entry is saved on 1
            }

            const id = parseInt(ids[ids.length - 1]) + 1
            console.log(id, ids)

            storage.save({
                key: 'folder',
                id: `${id}`,
                data: data,
                expires: null
            })
        })
}