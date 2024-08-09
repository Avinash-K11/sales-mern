import './about.css';
import logo from '../../images/Premier_Foods-Logo.png';
import map from '../../images/inline_image_preview.avif';

export default function About() {
    return (
        <div className="about-container">
            <img className="logo" src={logo} alt="Premier-Foods-Logo"/>

            <div className='content1'>
                <h3>Our Objective</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime doloribus, <br />culpa distinctio itaque possimus excepturi voluptates cupiditate nulla a iste <br />pariatur at hic animi est? Quod molestiae unde quo?             
                </p>
            </div>

            <div className='content2'>
                <h3>Our Presence</h3>
                <img className="logo" src={map} alt="Premier-Foods-Logo"/>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime doloribus, <br />culpa distinctio itaque possimus excepturi voluptates cupiditate nulla a iste <br />pariatur at hic animi est? Quod molestiae unde quo?
                </p>
            </div>
            
        </div>
    );
}