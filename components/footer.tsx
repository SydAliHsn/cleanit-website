import React from 'react';

import Link from 'next/link';

const Footer = (props: {}): JSX.Element => {
    return <footer id="footer">
        <div className="container">
            <div className="left-section">
                <Link className="logo" href="/"><img loading="lazy" decoding="async" src="/images/logo-light.svg" alt="logo" width="264" height="78" /></Link>
                <p>
                    Extra content if you need it, if not you can delete this whole p tag. I usually do.
                </p>
            </div>
            <div className="right-section">
                <div className="lists">
                    <ul>
                        <li><h2>Information</h2></li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        {/* <li><Link href="/projects">Projects</Link></li> */}
                        {/* <li><Link href="/testimonials">Reviews</Link></li> */}
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <ul>
                        <li><h2>Services</h2></li>
                        <li>Service1</li>
                        <li>Service2</li>
                        <li>Service4</li>
                        <li>Service5</li>
                    </ul>
                    <ul>
                        <li><h2>Contact</h2></li>
                        <li><Link href="/contact">First Address Line<br />Qatar CO 80206</Link></li>
                        <li><Link href="tel:555-779-4407">T: (555) 779-4407</Link></li>
                        <li><Link href="mailto:email@email.com">Email Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="credit">
            <span>Designed and Hand Coded by</span>
            <Link href="https://syyed.me" target="_blank" rel="noopener"> Syyed.me </Link>
            <span className="copyright">_ Copyright 2024 - Present</span></div>
    </footer>
};

export default Footer;