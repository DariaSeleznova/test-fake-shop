import './ContactInfo.css'

function ContactInfo() {
    return (
        <div className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions or need assistance, please feel free to contact us:</p>
            <ul>
                <li>Email: support@fakestore.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Fake Street, Faketown, FK 12345</li>
            </ul>
            <p>Our customer support team is available Monday to Friday, 9 AM to 5 PM (EST).</p>
        </div>
    )
}

export default ContactInfo