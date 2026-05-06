import './Category.css'
import CategoryList from './CategoryList/CategoryList';
import Navigation from '../../Components/Navigation/Navigation.jsx';

function Category() {
    return (
        <div className="category-page">
            <Navigation />
            <CategoryList />
        </div>

    );
}

export default Category;