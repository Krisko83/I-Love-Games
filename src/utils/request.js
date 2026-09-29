export default async function request(path = '/', method = 'GET', data = null, opts = {}) {

    const options = {
        headers: {
            apikey: import.meta.env.VITE_API_KEY
        },
        ...opts
    }

    if (data) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (method !== 'GET') {
        options.method = method;
    }
 

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (response.status === 204) {
        return null
    }

    if(response.status === 201) {
        return null
    }

    return response.json()
};