import "./footer.css"
import logo from '../../images/Premier_Foods-Logo.png';
import playImg from '../../images/Google_Play_Store.webp';
import appImg from '../../images/apple-app-store.jpg';

const Footer = () => (
    <div className="footer">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download App</h3>
                <p>Download App for Android and IOS Phone</p>
                <div className="app-logo">
                    <img src={playImg} alt="Google_Play_Store" />
                    <img src={appImg} alt="apple-app-store" />
                </div>
            </div>

            <div className="footer-col-2">
                <img src={logo} alt="Premier_Foods-Logo" />
                <p>
                    More ways to shop: Find a retailer near you. or call +91 7111 000 888
                </p>
            </div>

            <div className="footer-col-3">
                <h3>Useful Links</h3>
                <ul>
                    <li>
                        <a href="https://www.coupondunia.in/">Coupons</a>
                    </li>
                    <li>
                        <a href="https://doublehorse.in/blogs/blogs">Blog Post</a>
                    </li>
                    <li>
                        <a href="https://doublehorse.in/policies/refund-policy">Return Policy</a>
                    </li>
                    <li>
                        <a href="https://doublehorse.in/pages/main-faqs">Join Affiliate</a>
                    </li>
                </ul>
            </div>

            <div className="footer-col-3">
                <h3>Follow Us</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/?lang=en-in">Twitter Or X</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/accounts/login/">Instagram</a>
                    </li>
                    <li>
                        <a href="http://in.youtube.com/">Youtube</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copyright">
            Copyright © 2024 Premier Foods Inc. All rights reserved.
        </p>
    </div>
);

export default Footer;