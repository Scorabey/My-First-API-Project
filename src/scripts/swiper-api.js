import axios from 'axios';
import Noty from 'noty';
import '../../node_modules/noty/lib/noty.css';

export async function getQuote(url) {
    try {
        const response = await axios.get(url);
        const data = response.data.results

        new Noty({
            text: `Loading: Succes!`,
            type: 'success',
            layout: 'topCenter',
            timeout: 1000,
        }).show();

        return data;
    }   catch(error) {
        if(error.response) {
            console.error('HTTP error: ', error.response.status)
            new Noty({
                text: `HTTP error: ${error.response.status}`,
                type: 'warning',
                layout: 'topCenter'
            }).show();
        } else if (error.request) {
            console.error('Loading: ', error.message)
            new Noty({
                text: `Network error: ${error.message}`,
                type: 'warning',
                layout: 'topCenter'
            }).show();
        } else (
            console.error('Error: ', error.message)
        )
    }
}