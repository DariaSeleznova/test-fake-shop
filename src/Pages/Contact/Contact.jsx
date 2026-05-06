import './Contact.css'
import { NavLink } from 'react-router-dom'
import Navigation from '../../Components/Navigation/Navigation.jsx'
import ContactInfo from './ContactInfo/ContactInfo.jsx'

function Contact() {
    return (
        <div className="contact-container">
            <Navigation />
            <ContactInfo />
        </div>
    )
}

export default Contact