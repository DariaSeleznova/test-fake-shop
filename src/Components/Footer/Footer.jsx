import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h3>Fake Store - it`s a simulation of an Online Store.</h3>
            <p>Used <a href="https://dummyjson.com/" target="_blank" rel="noopener noreferrer">Fake Store API</a> for product data.</p>
            <p className="footer-text">© 2026 Fake store. Daria Seleznova</p>
        </footer>
    );
}

export default Footer;