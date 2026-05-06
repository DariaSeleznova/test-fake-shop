import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import './CategoryList.css'
import { CartContext } from "../../../Context/CartContext.jsx";
import { TiEyeOutline, TiShoppingCart } from "react-icons/ti";

const normalizeCategoryValue = (value) =>
    String(value || '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');

function CategoryList() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { addToCart } = useContext(CartContext);

    const normalizedSlug = normalizeCategoryValue(slug || '');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `https://dummyjson.com/products/category/${encodeURIComponent(normalizedSlug)}`
                );
                const categoryProducts = response.data?.products || [];

                setProducts(categoryProducts);
                if (categoryProducts.length === 0) {
                    setError('No products found in this category.');
                }
            } catch (err) {
                setProducts([]);
                setError('Failed to load products for this category.');
            } finally {
                setIsLoading(false);
            }
        };

        if (!normalizedSlug) {
            setProducts([]);
            setError('No category selected.');
            return;
        }

        setIsLoading(true);
        setError('');

        fetchProducts();
    }, [normalizedSlug]);

    return (
        <div className="category-cards">
            <h2>{normalizedSlug}</h2>
            <div className="category-cards-list">
                {isLoading && <p>Loading products...</p>}
                {error && <p>{error}</p>}
                {!isLoading && !error && products.length === 0 && (
                    <p>No products found in this category.</p>
                )}

                {products.map(product => (
                    <div key={product.id} className="category-card">
                        <h2>{product.title}</h2>
                        <img src={product.thumbnail} alt={product.title} />
                        <p className="price">${product.price}</p>
                        <div className="btn-category-item">
                            <button onClick={() => navigate(`/item/${product.id}`)} className='card-icons'>More.. <TiEyeOutline /></button>
                            <button onClick={() => addToCart(product)} className='card-icons'>Add to <TiShoppingCart /></button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CategoryList;