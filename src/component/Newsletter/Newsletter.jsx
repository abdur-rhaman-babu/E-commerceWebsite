import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className='container'>
            <div className="newsletter">
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our newsletter and stay updated</p>
                <div className="subscriber">
                    <input type="email" placeholder='enter your email id' />
                    <div className="global_btn">
                        <a href="#">Subscribe</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;