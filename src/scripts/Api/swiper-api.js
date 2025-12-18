import axios from 'axios';
import { showNoty } from '../Noty/noty';

// Get API

export async function getQuote(url) {
    try {
        const response = await axios.get(url);
        const data = response.data.results

        showNoty(`Loading: Succes!`, "success")

        // Return API Data

        return data;
    }   catch(error) {
        if(error.response) {
            console.error('HTTP error: ', error.response.status)
            showNoty(`HTTP error: ${error.response.status}`)
        } else if (error.request) {
            console.error('Loading: ', error.message)
            showNoty(`Loading: ${error.message}`)
        } else {
            console.error('ERROR: ', error.message)
            showNoty(`ERROR: ${error.message, error}`)
        }
    }
}