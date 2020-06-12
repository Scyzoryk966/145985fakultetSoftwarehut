const http = {
    get: (url) => fetch(url).then(resp => resp.json()),
};

export default http;
export const URL = `https://www.omdbapi.com/?apikey=549d12a`;