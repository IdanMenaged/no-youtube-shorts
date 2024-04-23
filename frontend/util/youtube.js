import { YOUTUBE_DATA_API_KEY } from '@env'

export async function search(keyword) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_DATA_API_KEY}&type=video&part=snippet&q=${keyword}`
    const res = await fetch(url)
    const data = await res.json()
    return await data
}

// when running the file manually
// search('hello world').then(data => {
//     console.log(data)
// })