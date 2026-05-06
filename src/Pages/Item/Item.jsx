import axios from 'axios'
import './Item.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext.jsx'
import { TiArrowBackOutline, TiShoppingCart } from 'react-icons/ti'


function Item() {
    let [item, setItem] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => setItem(res.data))
            .catch(err => console.error(err));
    }, [id])

    return (
        <div className='item'>
            <button onClick={() => navigate(-1)} className='card-icons'><TiArrowBackOutline /> </button>
            <img src={item.images?.[0]} alt={item.title} />
            <div className='item__content'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <div className='btn-item'>
                    <button onClick={() => addToCart(item)} className='card-icons'>Add to Cart  <TiShoppingCart /></button>
                </div>

            </div>

        </div>
    )
}
export default Item;