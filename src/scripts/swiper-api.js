import {addSwiperSlider} from './swiper-create-element';

export async function getQuote(url) {
    const response = await fetch(url)

    if(!response.ok) {
        throw new Error(`API error: ${response.status}`)
    }
    const data = await response.json()

    if (!Array.isArray(data.results)) {
        throw new Error('Invalid API response')
    }

    const array_len = data.results.length

    for(let i = 0; i < array_len; i++) {
        addSwiperSlider(
            data.results[i].artist_href,
            data.results[i].artist_name,
            data.results[i].source_url,
            data.results[i].url
        )
    }
}