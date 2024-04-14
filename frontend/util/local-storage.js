import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    storageBackend: AsyncStorage, // react native storage
    defaultExpires: null, // never expires
})

export async function getFolders() {
    return await storage.getAllDataForKey('folder').then(folders => folders)
}