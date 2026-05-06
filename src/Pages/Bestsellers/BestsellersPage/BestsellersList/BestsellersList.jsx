import { useNavigate } from 'react-router-dom';
import './BestsellersList.css'
import { CartContext } from '../../../../Context/CartContext.jsx';
import { useContext } from 'react';
import { TiShoppingCart, TiEyeOutline } from 'react-icons/ti';

function BestsellersList({ product }) {
    const navigate = useNavigate()
    const imageSrc = product?.images?.[0] || product?.thumbnail || ''
    const { addToCart } = useContext(CartContext)


    return (
        <div className='bestsellers-item'>
            <h2>{product.title}</h2>
            <img src={imageSrc} alt={product.title} />
            <p className='price'>${product.price}</p>
            <div className='btn-bestsellerCard'>
                <button onClick={() => navigate(`/item/${product.id}`)} className='card-icons'>More.. <TiEyeOutline /></button>
                <button onClick={() => addToCart(product)} className='card-icons'>Add to <TiShoppingCart /></button>
            </div>

        </div>
    )
}

export default BestsellersList;