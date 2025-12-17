import chakingStatus from '../scripts/statusCode/status';
import axios from 'axios';

// export async function getQuote(url) {
//     const response = await fetch(url, { cache: "no-store" })
//     const data = await response.json()
//     // chakingStatus({ status: data.status });

//     if(!response.ok) {
//         throw new Error(`API error: ${response.status}`)
//     }

//     if (!Array.isArray(data.results)) {
//         throw new Error('Invalid API response')
//     }
//     return data.results
// }

export async function getQuote(url) {
    try {
        const response = await axios.get(url);
        const data = response.data.results

        console.log("Succes! Data: ", data)

        return data;
    }   catch(error) {
        if(error.response) {
            console.error('HTTP error: ', error.response.status)
        } else if (error.request) {
            console.error('Network error: ', error.message)
        } else (
            console.error('Error: ', error.message)
        )
    }
}