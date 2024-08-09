import './contact.css';

const Contact = () => {

    return(
        <>
        <div className='maintext'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsam recusandae quos dignissimos autem ab quo totam aut, quia repellat assumenda corrupti magnam quae distinctio voluptatem accusamus natus eligendi veniam.
        </div>
    
        <h3 className='title'>Contact</h3>

        <div className='contact-container'>
            <form >
                <label for="fname">First Name</label>
                <input type='text' name='fname' className='content' placeholder='first name' required />

                <label for="lname">Last Name</label>
                <input type='text' name='lname' className='content' placeholder='last name' />

                <label for="subject">Subject</label>
                <input type='subject' name='subject' className='content' placeholder='issue/suggestion' required />

                <label for="email">Email</label>
                <input type='email' name='email' className='content' placeholder='name@example.com' required />

                <label for="country">Country</label>
                <select name="country" id="country" className='content'>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="China">China</option>
                    <option value="Australia">Australia</option>
                </select>

                <label for="message">Message</label>
                <textarea name='message' id='message' className='content' cols='30' rows='10' placeholder='issue/suggestion'> </textarea>

                <button type="submit" className='submit-btn' >Submit</button>

            </form>

            <div className='map'>
                <iframe title='pinned_location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.113494800261!2d76.10606117490259!3d10.41255988971495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f35d634bd445%3A0x9979751b3295dd4d!2sY%20Mall!5e0!3m2!1sen!2sin!4v1713961117717!5m2!1sen!2sin' width='100%' height='450' allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade'> </iframe>
            </div>

        </div>
        </>
    );
    
};

export default Contact;