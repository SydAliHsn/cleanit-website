import { NextPage } from 'next';

const Page: NextPage = (props: {}) => {
    return <main id="main">

        <section id="int-hero">
            <h1 id="home-h">Contact Us</h1>
            <picture>
                <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.jpg" />
                <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
                <img aria-hidden="true" loading="lazy" decoding="async" src="/images/cabinets2.jpg" alt="" width="400" height="662" />
            </picture>
        </section>

        <section id="form">
            <div className="left-section">
                <h2 className="title">Send a Message</h2>
                <p>If you have any questions or concerns please feel free to reach out to us.  We respond to every call and email.</p>
                <form id="contact" name="Contact Form2" method="post" data-netlify="true">
                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input id="name" aria-label="name" className="input1" name="name" placeholder="Full Name" type="text" tabIndex={1} required />
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" aria-label="email" className="input1 right" name="email" placeholder="Email Address" type="email" tabIndex={2} required />
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" aria-label="phone number" className="input1" name="phone" placeholder="Phone Number" type="tel" tabIndex={3} required />
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="location">Location</label>
                        <input id="location" aria-label="location" className="input1 right" name="location" placeholder="Your Location" type="text" tabIndex={4} required />
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="how">How did you hear about us</label>
                        <input id="how" aria-label="how did you hear about us" name="hear" placeholder="How Did You Hear About Us" type="text" tabIndex={5} required />
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group textarea">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" aria-label="write your message" name="message" placeholder="Tell us about what you need help with" tabIndex={6} required></textarea>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <p className="form-submit">
                        <button name="submit" type="submit" id="contact-submit" className="button-solid" data-submit="...Sending">Submit</button>
                    </p>
                </form>
            </div>
            <div className="contact-right">
                <div className="info-group">
                    <span className="heading">Location</span>
                    <span className="info">Denver, CO</span>
                </div>
                <div className="info-group">
                    <span className="heading">Phone</span>
                    <a className="info" href="tel:555-779-4407">(555) 779-4407</a>
                </div>
                <div className="info-group">
                    <span className="heading">Email</span>
                    <a className="info" href="mailto:email@email.com">Click to Email</a>
                </div>
                <div className="info-group">
                    <span className="heading">Hours</span>
                    <span className="info last">Mon to Fri: 8am to 6pm</span>
                </div>
            </div>
        </section>

    </main>
};

export default Page;