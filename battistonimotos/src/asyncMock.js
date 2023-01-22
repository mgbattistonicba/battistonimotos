const products = [
    { id: '1', name: 'Yamaha R3', price: 13.000, category: 'sport', img: 'https://www.yamaha-motor.com.ar/modelo/yzf-r3#images-3',},
    {id: '2', name: 'Yamaha R6', price: 25.000, category: 'sport', img: 'https://www.yamaha-motor.com.ar/modelo/yzf-r6#images-21',}, 
    { id: '3', name: 'Yamaha R1', price: 37.000, category: 'sport', img: 'https://www.yamaha-motor.com.ar/modelo/yzf-r1#images-13',},
    { id: '4', name: 'Yamaha R1M', price: 41.000, category: 'sport', img: 'https://www.yamaha-motor.com.ar/modelo/yzf-r1m#images-9',}, 
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
        },1000000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },1000000)
    })
}


    
