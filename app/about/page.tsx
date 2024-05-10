import { NextPage } from 'next';

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
                <div className="content">
                    <h2 className="title">Lorem ipsum dolor sit amet consectetur.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis dolor consectetur dolorem inventore modi tenetur ex odit, amet beatae ad, doloribus tempora quae ab nulla minus temporibus at veritatis!
                    </p>
                    <p>
                        <strong>List if you need it:</strong>
                    </p>
                    <ul>
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
                        <li>
                            <img aria-hidden="true" loading="lazy" decoding="async" src="/images/check.svg" alt="check mark" width="20" height="20" />
                            <span>List item about something</span>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe laborum nam consequuntur porro inventore odio? Quod autem alias ratione cum reiciendis qui quaerat, sequi voluptatum voluptatibus, iusto itaque sed ullam. Quis, maiores corrupti. Rerum quo laudantium vero magnam tempora!
                    </p>
                    <a className="button-solid" href="/conttact.html">Get Free Quote</a>
                </div>
                <picture className="image-box">
                    <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.jpg" />
                    <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
                    <img aria-hidden="true" loading="lazy" decoding="async" src="/images/cabinets2.jpg" alt="cabinets" width="400" height="662" />
                </picture>
            </div>
        </section>

        {/* <!-- ============================================ -->
  <!--             Final Call to Action             -->
  <!-- ============================================ --> */}

        <section id="cta">
            <div className="container">
                <h2 className="title">Get It Done <br /> With Us Today</h2>
                <p>
                    Say something catchy, informative, and encouraging to click the button to go to the contact page.  I like to add these to the bottom of all pages.
                </p>
                <a href="/contact.html" className="button-solid">Free Estimate</a>
            </div>
            <picture>
                <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.webp" />
                <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
                <img aria-hidden="true" loading="lazy" decoding="async" src="/images/cabinets2.jpg" alt="kitchen cabinets" width="1920" height="1280" />
            </picture>
        </section>

    </main>
};

export default About;