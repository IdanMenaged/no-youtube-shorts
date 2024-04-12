import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default storage = new Storage({
    storageBackend: AsyncStorage, // react native storage
    defaultExpires: null, // never expires
})