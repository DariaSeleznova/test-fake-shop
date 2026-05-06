import './Navigation.css'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Navigation() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="navigation">
            <div className='category-link'>
                {categories.map((category) => (
                    <NavLink
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Navigation;