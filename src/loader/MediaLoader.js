export default function(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err);
        })
}
