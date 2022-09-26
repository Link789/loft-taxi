export const fetchPost = (address, body) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
    return fetch(address, requestOptions)
        .then(response => response.json())
}

export const fetchGet = (address, token) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }
    const fullUrl = token? address + `?token=${token}` : address
    return fetch(fullUrl, requestOptions)
        .then(response => response.json())
}

export const fetchGetRoute = (address, addressFrom, addressTo) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }
    const fullUrl = addressFrom? address + `?address1=${addressFrom}&address2=${addressTo}` : address
    return fetch(fullUrl, requestOptions)
        .then(response => response.json())
}
