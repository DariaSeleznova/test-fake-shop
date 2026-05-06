import BestsellersPage from "./BestsellersPage/BestsellersPage";
import './Bestsellers.css';
import Navigation from '../../Components/Navigation/Navigation.jsx';

function Bestsellers() {
    return (
        <div className="bestsellers">
            <Navigation />
            <BestsellersPage />
        </div>

    )
}

export default Bestsellers;