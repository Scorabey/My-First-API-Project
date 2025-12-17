import axios from "axios";

export async function getQuote(url) {
    try {
        const response = await axios.get(url);
        const data = response.data.results

        console.log("Succes! Data: ", data)
        console.log("Request status: ", response.status)

        return data;
    }   catch(error) {
        if(error.response) {
            console.error('HTTP error: ', error.response.status)
            return error.response.status
        } else if (error.request) {
            console.error('Network error: ', error.message)
            return error.message
        } else (
            console.error('Error: ', error.message)
        )
    }
}
