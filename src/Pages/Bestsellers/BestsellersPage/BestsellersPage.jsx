import './BestsellersPage.css'
import BestsellersList from "./BestsellersList/BestsellersList.jsx"
import { useState, useEffect } from 'react'
import axios from 'axios'

function BestsellersPage() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=12')
            .then(res => setProducts(res.data.products))
            .catch(err => setError('Failed to fetch bestsellers. Please try again later.'))
    }, [])

    return (
        <div className="bestsellers-page">
            <h2 className="bestsellers-page-title">Bestsellers</h2>
            <div className="bestsellers-page-items">
                {products.map((product) => <BestsellersList key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default BestsellersPage;