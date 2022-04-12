import { apiKey, apiURL } from './config';

async function request(url) {
    const endpoint = `${apiURL}/${url}&apiKey=${apiKey}`;
    const config = {
        method: 'GET'
    }
    try {
        const result = await fetch(endpoint, config);

        const data = result.json();

        return data;
    }
    catch (err) {
        return {
            error: err.message
        }
    }

}

export default request;