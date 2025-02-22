'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main id="main">
      <section id="hero">
        <div className="hero-content">
          <div className="heroText">
            <h1 id="home-h">Delivering Quality Supplies for Superior Healthcare</h1>
            <p>
              Talk about the other services they do with keywords and locations where they serve. Try to make this 2-3
              lines tall.
            </p>
            <Link
              className="button-solid"
              href="/contact"
              target="_blank"
              rel="noopener"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/images/medico-bg-sm.jpg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="/images/medico-bg.jpg"
          />
          <Image
            aria-hidden="true"
            decoding="async"
            src="/images/medico-bg.jpg"
            alt="new home"
            width="600"
            height="600"
          />
        </picture>
      </section>

      <Services />

      {/* <!-- ============================================ -->
            <!--                   About                      -->
            <!-- ============================================ --> */}

      <section
        id="sidebyside"
        className="sidebyside"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="content"
          >
            <h2 className="title">Safest and reliable cleaning for all your needs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis dolor consectetur dolorem
              inventore modi tenetur ex odit, amet beatae ad, doloribus tempora quae ab nulla minus temporibus at
              veritatis!
            </p>
            <p>
              <strong>A list if you need it:</strong>
            </p>
            <ul>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something, this one is going to two lines so you can see what it looks like</span>
              </li>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe laborum nam consequuntur porro
              inventore odio? Quod autem alias ratione cum reiciendis qui quaerat, sequi voluptatum voluptatibus, iusto
              itaque sed ullam. Quis, maiores corrupti. Rerum quo laudantium vero magnam tempora!
            </p>
            <Link
              className="button-solid"
              href="/about"
            >
              More About Us
            </Link>
          </motion.div>
          <motion.picture
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="image-box"
          >
            <source
              media="(max-width: 600px)"
              srcSet="/images/cabinets2-m.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="/images/cabinets2.jpg"
            />
            <Image
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="/images/cabinets2.jpg"
              alt="cabinets"
              width="400"
              height="662"
            />
          </motion.picture>
        </div>
      </section>

      <section id="sidebyside-reverse">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="content"
          >
            <h2 className="title">Extra content, maybe talk about a main service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis dolor consectetur dolorem
              inventore modi tenetur ex odit, amet beatae ad, doloribus tempora quae ab nulla minus temporibus at
              veritatis!
            </p>
            <p>
              <strong>A list if you need it:</strong>
            </p>
            <ul>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
              <li>
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="/images/check.svg"
                  alt="check mark"
                  width="20"
                  height="20"
                />
                <span>List item about something</span>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe laborum nam consequuntur porro
              inventore odio? Quod autem alias ratione cum reiciendis qui quaerat, sequi voluptatum voluptatibus, iusto
              itaque sed ullam. Quis, maiores corrupti. Rerum quo laudantium vero magnam tempora!
            </p>
            <Link
              className="button-solid"
              href="/contact"
            >
              Get Free Quote
            </Link>
          </motion.div>
          <motion.picture
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="image-box"
          >
            <source
              media="(max-width: 600px)"
              srcSet="/images/cabinets2-m.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="/images/cabinets2.jpg"
            />
            <Image
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="/images/cabinets2.jpg"
              alt="cabinets"
              width="400"
              height="662"
            />
          </motion.picture>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        id="cta"
      >
        <div className="container">
          <h2 className="title">
            Get It Done <br /> With Us Today
          </h2>
          <p>
            Say something catchy, informative, and encouraging to click the button to go to the contact page. I like to
            add these to the bottom of all pages.
          </p>
          <Link
            href="/contact"
            className="button-solid"
          >
            Get an Estimate Now
          </Link>
        </div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/images/cabinets2-m.webp"
          />
          <source
            media="(min-width: 601px)"
            srcSet="/images/cabinets2.jpg"
          />
          <Image
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src="/images/cabinets2.jpg"
            alt="kitchen cabinets"
            width="1920"
            height="1280"
          />
        </picture>
      </motion.section>
    </main>
  );
}
