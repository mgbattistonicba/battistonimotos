const products = [
    { id: '1', name: 'Yamaha YZF-R3', price: 13000, category: 'Motos', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_768334-MLA47541387794_092021-F.webp',},
    {id: '2', name: 'Yamaha YZF-R6', price: 25000, category: 'Motos', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_676327-MLA44318243958_122020-F.webp',}, 
    { id: '3', name: 'Yamaha YZF-R1', price: 37000, category: 'Motos', img: 'https://http2.mlstatic.com/D_NQ_NP_978245-MLA31598309177_072019-O.webp',},
    { id: '4', name: 'Yamaha YZF-R1M', price: 41000, category: 'Motos', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_651628-MLA44366602684_122020-F.webp',}, 
    { id: '5', name: '323 ARROW C STING – Wine Yellow', price: 870, category: 'Cascos', img: 'https://www.maseramotos.com.ar/new/wp-content/uploads/2021/05/LS2103233754-1-e1624105555441.jpg',},
    { id: '6', name: '320 STREAM EVO KUB Red Black', price: 640, category: 'Cascos', img: 'https://www.maseramotos.com.ar/new/wp-content/uploads/2021/05/LS2103204432-4.jpg',},
    { id: '7', name: 'Bolso GIVI Rulo de sillín – 35 Litros', price: 170, category: 'Accesorios', img: 'https://www.maseramotos.com.ar/new/wp-content/uploads/2022/12/BCEA107B-1.jpg',},
    { id: '8', name: 'BAÚL DESMONTABLE MAC Black 46 Litros', price: 130, category: 'Accesorios', img: 'https://www.maseramotos.com.ar/new/wp-content/uploads/2022/01/MAC75030233-1.jpg',},
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


    
