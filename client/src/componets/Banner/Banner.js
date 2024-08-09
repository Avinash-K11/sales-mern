import "./banner.css";
import banner_img from '../../images/independence-day-sale-poster-indian-flags-blue-background.avif';

const Banner = () => (
    <div className="banner-container">
        <div className="text-container">
            <h1>
                THE INDEPENCE DAY SALE
                <br />
                is now Back!
            </h1>
            <p>
                Get your favourite item\s at an unbelieveable price and win many cool suprise <br />
                Chritmas Discounts available from all gadgets from 299 only.
            </p>

            <button className="btn">
                <a href="/products"> Explore Now </a> 
            </button>
        </div>
        <img src={banner_img} alt="banner_image"       className="bannner-image"/>
    </div>
);

export default Banner;