'use client';

import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About: NextPage = (props: {}) => {
    return <main id="main" >
        <section id="int-hero">
            <h1 id="home-h">About Us</h1>
            <picture>
                <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.jpg" />
                <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
                <img aria-hidden="true" decoding="async" src="/images/cabinets2.jpg" alt="cabinets" width="400" height="662" />
            </picture>
        </section>

        {/* <!-- ============================================ -->
  <!--                   About                      -->
  <!-- ============================================ --> */}

        <section id="sidebyside" className="sidebyside">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="content">
                    <h2 className="title">Safest and reliable cleaning for all your needs</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis dolor consectetur dolorem inventore modi tenetur ex odit, amet beatae ad, doloribus tempora quae ab nulla minus temporibus at veritatis!
                    </p>
                    <p>
                        <strong>Why choose us:</strong>
                    </p>
                    <ul>
                        <li>
                            <img aria-hidden="true" loading="lazy" decoding="async" src="/images/check.svg" alt="check mark" width="20" height="20" />
                            <span>List item about something, this one is going to two lines so you can see what it looks like</span>
                        </li>
                        <li>
                            <img aria-hidden="true" loading="lazy" decoding="async" src="/images/check.svg" alt="check mark" width="20" height="20" />
                            <span>List item about something</span>
                        </li>
                        <li>
                            <img aria-hidden="true" loading="lazy" decoding="async" src="/images/check.svg" alt="check mark" width="20" height="20" />
                            <span>List item about something</span>
                        </li>
                        <li>
                            <img aria-hidden="true" loading="lazy" decoding="async" src="/images/check.svg" alt="check mark" width="20" height="20" />
                            <span>List item about something</span>
                        </li>
                        <li>
                            <img aria-hidden="true" loading="lazy" decoding="async" src="/images/check.svg" alt="check mark" width="20" height="20" />
                            <span>List item about something</span>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe laborum nam consequuntur porro inventore odio? Quod autem alias ratione cum reiciendis qui quaerat, sequi voluptatum voluptatibus, iusto itaque sed ullam. Quis, maiores corrupti. Rerum quo laudantium vero magnam tempora!
                    </p>
                    <Link className="button-solid" href="/about">Book Appointment</Link>
                </motion.div>
                <motion.picture
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="image-box">
                    <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.jpg" />
                    <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
                    <img aria-hidden="true" loading="lazy" decoding="async" src="/images/cabinets2.jpg" alt="cabinets" width="400" height="662" />
                </motion.picture>
            </div>
        </section>

        {/* <!-- ============================================ -->
  <!--             Final Call to Action             -->
  <!-- ============================================ --> */}
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            id="cta">
            <div className="container">
                <h2 className="title">Get It Done <br /> With Us Today</h2>
                <p>
                    Say something catchy, informative, and encouraging to click the button to go to the contact page.  I like to add these to the bottom of all pages.
                </p>
                <Link href="/contact" className="button-solid">Get an Estimate Now</Link>
            </div>
            <picture>
                <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.webp" />
                <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
                <img aria-hidden="true" loading="lazy" decoding="async" src="/images/cabinets2.jpg" alt="kitchen cabinets" width="1920" height="1280" />
            </picture>
        </motion.section>

    </main>
};

export default About;