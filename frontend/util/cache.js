import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';

export const cache = new Cache({
    namespace: 'youtube-search-results',
    policy: {
        stdTTL: 86400 // 86400 seconds => 1 day
    },
    backend: AsyncStorage
})