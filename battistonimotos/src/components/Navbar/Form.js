import React from 'react'
import { getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'


function Form() {
  const { cart } = React.useContext(CartContext)

  const [data, setData] = React.useState()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: data,
      items: cart,
    };
}

    const db = getFirestore()


  return (
  
          <div className='checkout'>
            <p className='total-price'>
              Porfavor complete el formulario, para terminar  con su operacion.
            </p>

            <form onSubmit={handleSubmit}>
              <input  
                type="text" 
                name='name' 
                placeholder='Ingrese su nombre'
                onChange={handleChange}
              />
              
              <input 
                type="email" 
                email='email' 
                placeholder='Ingrese su Email'
                onChange={handleChange}
              />
                
              <input 
                type="phone" 
                phone='phone' 
                placeholder='Ingrese su Telefono'
                onChange={handleChange}
              />   
            </form>
          </div>
  )
}

export default Form