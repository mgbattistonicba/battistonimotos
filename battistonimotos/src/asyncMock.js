const products = [
    { id: '1', name: 'Yamaha YZF-R3', price: 13000, category: 'Moto', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_768334-MLA47541387794_092021-F.webp',},
    {id: '2', name: 'Yamaha YZF-R6', price: 25000, category: 'Moto', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_676327-MLA44318243958_122020-F.webp',}, 
    { id: '3', name: 'Yamaha YZF-R1', price: 37000, category: 'Moto', img: 'https://http2.mlstatic.com/D_NQ_NP_978245-MLA31598309177_072019-O.webp',},
    { id: '4', name: 'Yamaha YZF-R1M', price: 41000, category: 'Moto', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_651628-MLA44366602684_122020-F.webp',}, 
]

export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },500)
    })
}


    
