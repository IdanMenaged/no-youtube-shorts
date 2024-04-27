import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cache from './cache';

const storage = new Storage({
    storageBackend: AsyncStorage, // react native storage
    defaultExpires: null, // never expires
})

export async function getFolders() {
    return await storage.getAllDataForKey('folder')
        .catch(err => alert(err))
        .then(data => {
            storage.getIdsForKey('folder')
                .then(ids => {
                    for (let i = 0; i < data.length; i++) {
                        data[i].id = ids[i]
                    }
                })
            return data
        })
}

export async function addFolder(name, icon, channels) {
    data = {
        name: name,
        icon: icon,
        channels: channels
    }

    storage.getIdsForKey('folder')
        .then(ids => {
            if (ids.length === 0) {
                ids = ['0'] // if nothing was saved yet, pretend there is something saved at 0 so that new entry is saved on 1
            }

            const id = parseInt(ids[ids.length - 1]) + 1

            storage.save({
                key: 'folder',
                id: `${id}`,
                data: data,
                expires: null
            })
        })
}

export async function deleteFolder(id) {
    storage.remove({
        key: 'folder',
        id: id
    })
}

export async function getFolder(id) {
    return await storage.load({
        key: 'folder',
        id: id
    })
        .then(data => data)
}

export async function updateFolder(id, data) {
    storage.save({
        key: 'folder',
        id: `${id}`,
        data: data,
        expires: null
    })

    cache.remove(id)
}