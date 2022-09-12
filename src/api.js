
export const fetchPOST = (serverAction, body, callback) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
    fetch(serverAction, requestOptions)
        .then(response => response.json())
        .then(data => callback(data))
}

//fetchGET