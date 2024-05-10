import Image from "next/image";

export default function Home() {
  return (
    <main id="main" >
      <section id="hero">
        <div className="hero-content">
          <div className="heroText">
            <h1 id="home-h">The Most Convenient Cleaning Services in Qatar</h1>
            <p>
              Talk about the other services they do with keywords and locations where they serve.  Try to make this 2-3 lines tall.
            </p>
            <a className="button-solid" href="/contact.html" target="_blank" rel="noopener">
              Main Call To Action
            </a>
          </div>
        </div>
        <picture>
          <source media="(max-width: 600px)" srcSet="/images/landing-m.webp" />
          <source media="(min-width: 601px)" srcSet="/images/landing.jpg" />
          <img aria-hidden="true" decoding="async" src="/images/landing.jpg" alt="new home" width="275" height="132" />
        </picture>
      </section>

      <section id="services" className="services">
        {/* <!-- Get Icons From flaticon.com --> */}
        <div className="card">
          <picture>
            <img aria-hidden="true" decoding="async" src="/images/service1.svg" alt="appliance" width="48" height="48" />
          </picture>
          <h2>Service 1</h2>
          <p>
            Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences.
          </p>
        </div>
        <div className="card">
          <picture>
            <img aria-hidden="true" decoding="async" src="/images/service2.svg" alt="appliance" width="48" height="48" />
          </picture>
          <h2>Service 2</h2>
          <p>
            Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences.
          </p>
        </div>
        <div className="card">
          <picture>
            <img aria-hidden="true" decoding="async" src="/images/service3.svg" alt="appliance" width="48" height="48" />
          </picture>
          <h2>Service 3</h2>
          <p>
            Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences.
          </p>
        </div>
      </section>

      {/* <!-- ============================================ -->
            <!--                   About                      -->
            <!-- ============================================ --> */}

      <section id="sidebyside" className="sidebyside">
        <div className="container">
          <div className="content">
            <h2 className="title">Safest and reliable cleaning for all your needs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis dolor consectetur dolorem inventore modi tenetur ex odit, amet beatae ad, doloribus tempora quae ab nulla minus temporibus at veritatis!
            </p>
            <p>
              <strong>A list if you need it:</strong>
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
            <a className="button-solid" href="/about.html">More About Us</a>
          </div>
          <picture className="image-box">
            <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.jpg" />
            <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
            <img aria-hidden="true" loading="lazy" decoding="async" src="/images/cabinets2.jpg" alt="cabinets" width="400" height="662" />
          </picture>
        </div>
      </section>

      <section id="sidebyside-reverse">
        <div className="container">
          <div className="content">
            <h2 className="title">Extra content, maybe talk about a main service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis dolor consectetur dolorem inventore modi tenetur ex odit, amet beatae ad, doloribus tempora quae ab nulla minus temporibus at veritatis!
            </p>
            <p>
              <strong>A list if you need it:</strong>
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
            <a className="button-solid" href="/contact.html">Get Free Quote</a>
          </div>
          <picture className="image-box">
            <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.jpg" />
            <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
            <img aria-hidden="true" loading="lazy" decoding="async" src="/images/cabinets2.jpg" alt="cabinets" width="400" height="662" />
          </picture>
        </div>
      </section>


      <section id="cta">
        <div className="container">
          <h2 className="title">Get It Done <br /> With Us Today</h2>
          <p>
            Say something catchy, informative, and encouraging to click the button to go to the contact page.  I like to add these to the bottom of all pages.
          </p>
          <a href="/contact.html" className="button-solid">Get an Estimate Now</a>
        </div>
        <picture>
          <source media="(max-width: 600px)" srcSet="/images/cabinets2-m.webp" />
          <source media="(min-width: 601px)" srcSet="/images/cabinets2.jpg" />
          <img aria-hidden="true" loading="lazy" decoding="async" src="/images/cabinets2.jpg" alt="kitchen cabinets" width="1920" height="1280" />
        </picture>
      </section>
    </main>
  );
}
