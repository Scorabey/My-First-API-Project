export default function chakingStatus(error) {
    if(error.status !== 429) {
        console.log('API Working!')
    } else {
        throw new Error('API Status: 429, too many request!')
    }
}