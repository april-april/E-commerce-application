const create = (params, credentials, product) => {
    return fetch('/api/products/by/'+ params.shopId, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: product
        })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}

const read = (params) => {
    return fetch('/api/products/' + params.productId, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const listByShop = (params) => {
    return fetch('/api/products/by/'+params.shopId, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

const listLatest = () => {
    return fetch('/api/products/latest', {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

export {
    create, 
    listByShop, 
    read,
    listLatest
}