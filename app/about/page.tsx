'use client';

import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const About: NextPage = (props: {}) => {
  return (
    <main id="main">
      <section id="int-hero">
        <h1 id="home-h">About Us</h1>
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/images/cabinets2-m.jpg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="/images/cabinets2.jpg"
          />
          <img
            aria-hidden="true"
            decoding="async"
            src="/images/cabinets2.jpg"
            alt="cabinets"
            width="400"
            height="662"
          />
        </picture>
      </section>

      {/* <!-- ============================================ -->
  <!--                   About                      -->
  <!-- ============================================ --> */}

      <section id="sbs">
        <div className="cs-container">
          {/* <!-- Left Image Section --> */}
          <div className="cs-left">
            <motion.picture
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="image-box cs-picture cs-picture1"
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
            {/* {% image './src/images/cabinets2.jpg', 'cabinets', 'cs-picture cs-picture1', 'lazy'%}
      {% image './src/images/construction.jpg', 'house', 'cs-picture cs-picture2', 'lazy'%} */}
          </div>
          {/* <!-- Right Content Section--> */}
          <div className="cs-right">
            <span className="cs-topper">About Us</span>
            <h2 className="cs-title">About Company Title</h2>
            <p className="cs-text">
              In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet,
              iaculis libero quis. Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent
              nonatourean olei aptent taciti sociosqu ad litora torquent per.
            </p>
            <p className="cs-text">
              In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet,
              iaculis libero quis. Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent
              nonatourean olei aptent taciti sociosqu ad litora torquent per.
            </p>
            <div className="cs-flex-group">
              <p className="cs-flex-p">
                In consequat tincidunt turpis sit amet imperdiet. Praesent Classei consequat tincidunt turpis sit amet
                imperdiet for mind.
              </p>
              <span className="cs-name">Justin Time</span>
              <span className="cs-job">CEO-Founder</span>
              <img
                className="cs-quote-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/quote-white.svg"
                alt="gavel"
                width="136"
                height="77"
              />
            </div>
            <a
              href=""
              className="button-solid"
            >
              More About Us
            </a>
          </div>
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
          <img
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
};

export default About;
