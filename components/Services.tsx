import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Modal } from 'react-responsive-modal';
import Link from 'next/link';

type Rates = {
    title: string;
    values: string[];
};

const Services = (props: {}): JSX.Element => {
    return <section id="services" className="services">
        {/* <!-- Get Icons From flaticon.com --> */}
        {servicesOffered.map(({ title, description, img, rates }, i) =>
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <ServiceCard
                    title={title} description={description} img={img} rates={rates} />
            </motion.div>)
        }

    </section>
};

const ServiceCard = ({ title, description, img, rates }: {
    title: string, description: string, img: string,
    rates?: Rates[]
}):
    JSX.Element => {
    const [open, setOpen] = useState(false);

    return <>
        <div
            tabIndex={0}
            className="card"
            style={{ cursor: 'pointer', marginBottom: '2.5em' }}
            onClick={() => setOpen(true)}
        >
            <picture>
                <Image aria-hidden="true" decoding="async" src={img} alt={title} width="48" height="48" />
            </picture>
            <h2>{title}</h2>
            <p>
                {description?.split(' ').slice(0, 26).join(' ')}
                <span className='read-more'>Read more...</span>
            </p>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} center
            classNames={{ modal: 'modal service-modal', overlay: 'overlay', closeButton: 'close-btn' }}>
            <h2
                style={{ textAlign: 'center', marginTop: '0.5em' }}
            >{title}</h2>
            <p style={{ paddingTop: '1em' }}>
                {description}
            </p>

            {rates?.map(({ title, values }) => <div key={title} style={{ marginLeft: '9%', marginTop: '1em' }}>
                <p style={{ fontWeight: 'bold' }}>
                    {title}
                </p>
                <ul style={{ marginLeft: '9%' }}>
                    {values.map((value, i) => <li key={i}>{value}</li>)}
                </ul>
            </div>)}

            <div className='btn-container'>
                <button
                    onClick={() => setOpen(false)}
                    className="button-solid" style={{
                        background: '#fcd303'
                    }}>Close
                </button>

                <Link className='button-solid'
                    href="/contact"
                >Book Now</Link>
            </div>
        </Modal >

    </ >
}

const servicesOffered = [
    {
        title: 'Hourly Cleaning',
        description: 'At Cleanit, we understand that every home has unique cleaning needs. Our flexible hourly cleaning service allows you to customize the tasks based on your priorities and budget. Whether you need a quick tidying up or a thorough deep clean, our professional and friendly team is here to help!',
        img: "/images/service1.svg",
        rates: [{
            title: 'Rates',
            values: ['30 QR per hour (without materials), minimun 4 hours',
                '35 QR per hour (with materials provided)']
        }]
    }, {
        title: 'Car Wash',
        description: 'Trust Cleanit to maintain your car\'s appearance and hygiene with our professional and efficient car wash services. We offer both deep wash and detail clean options to suit your needs',
        img: "/images/car-wash-white.svg",
        rates: [{
            title: 'Deep Wash',
            values: ['89 QR for a sedan, 109 QR for an SUV. This service includes a thorough inside and outside clean, ensuring your car shines']
        }, {
            title: 'Detail Clean',
            values: ['350 QR for a sedan, 450 QR for an SUV. Our detail cleaning service provides an extensive and meticulous clean, covering every inch of your vehicle for a pristine finish.']
        }]
    }, {
        title: 'Mattress Cleaning',
        description: 'Ensure a healthier sleep environment with Cleanit\'s professional mattress cleaning services. We offer anti-allergy and anti-bacterial steam cleaning to remove dust mites, allergens, and bacteria. ',
        rates: [{
            title: 'Choose from our flexible rates:',
            values: [
                'Single mattress: 100 QR',
                'Queen mattress: 150 QR',
                'King mattress: 200 QR',
                '*Prices are per side, ensuring a thorough clean every time'
            ]
        }],
        img: "/images/mattress-cleaning-white.svg",
    },
    {
        title: 'Sofa Cleaning',
        description: 'Revitalize your living space with Cleanit\'s expert sofa cleaning services. Our team uses advanced cleaning techniques to remove dirt, stains, and allergens, giving your sofa a fresh, like-new appearance. Priced at 50 QR per seat, our service ensures a deep and effective clean, enhancing the comfort and longevity of your furniture',
        img: "/images/sofa-cleaning-white.svg",
    },
    {
        title: 'Curtain Cleaning',
        description: 'Restore the beauty and freshness of your curtains with Cleanit\'s professional dry cleaning service. We meticulously clean each pair of curtains to remove dust, allergens, and stains, enhancing the ambiance of your home. Our service ensures your curtains look and feel like new, preserving their quality and longevity',
        img: "/images/curtain-cleaning-white.svg",
        rates: [{ title: 'Rates:', values: ['75 per piece', '125 per pair'] }]
    },
];

export default Services;