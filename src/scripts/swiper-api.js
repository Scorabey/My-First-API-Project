import chakingStatus from '../scripts/statusCode/status';

export async function getQuote(url) {
    const response = await fetch(url, { cache: "no-store" })
    const data = await response.json()
    // chakingStatus({ status: data.status });

    if(!response.ok) {
        throw new Error(`API error: ${response.status}`)
    }

    if (!Array.isArray(data.results)) {
        throw new Error('Invalid API response')
    }
    return data.results
}