'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: "Home",
        link: '/'
    },
    {
        name: "About Us",
        link: '/about'
    },
    {
        name: "Contact",
        link: '/contact'
    },
];


const Header = (props: {}): JSX.Element => {
    const [navState, setNavState] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const pathname = usePathname();

    // For Sticky Nav
    useEffect(() => {
        const scrollListener = () => {
            const scroll = document.documentElement.scrollTop;
            const bodyEl = document.querySelector('body') as HTMLBodyElement;
            if (scroll >= 100) {
                bodyEl.classList.add('scroll')
            } else {
                bodyEl.classList.remove('scroll')
            }
        }
        document.addEventListener('scroll', scrollListener);

        return () => document.removeEventListener('scroll', scrollListener);
    }, []);

    // For Dark Mode
    useEffect(() => {
        if (localStorage.getItem('darkMode') === 'enabled')
            enableDarkMode();
        else
            disableDarkMode();

    }, []);

    // Adding this so the "active" link is updated every time the pathname changes.
    useEffect(() => { }, [pathname]);

    const body = document.querySelector('body') as HTMLBodyElement;

    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        setDarkMode(true);
    };

    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', '');
        setDarkMode(false);
    };

    return <div id="navigation">
        <div aria-hidden="true" className="background-color-div">
            {/* <!--This div is used to overcome a z-index issue where the open
            #navbar-menu is on top of the #navigation. This bar places itself
            the #navbar-menu so that menu appears behind the #navigation --> */}
        </div>
        <div className="container">
            {/* <!--Logo - Get SVGs if you can.  I use fiverr to get png's turned into SVGs. Highly recommend it, worth the $20 - get a light and dark version--> */}
            <Link className="logo" aria-label="click to go to home page" href="/">
                {/* <!--Light Colored Logo, remove .dark image tag and the .light class if you don't have a dark and light version --> */}
                <img className="light" aria-hidden="true" src="/images/logo-light.svg" decoding="async" alt="logo" width="221" height="66" />

                {/* <!--Dark Colored Logo--> */}
                <img className="dark" aria-hidden="true" src="/images/logo-blue.svg" decoding="async" loading="lazy" alt="logo" width="221" height="66" />
            </Link>

            {/* <!--Main Nav--> */}
            <nav id="navbar-menu" className={navState ? 'open' : ''}>
                <ul>
                    {links.map(({ name, link }) =>
                        <li key={link}><Link className={pathname === link ? 'active' : ''} href={link}>{name}</Link></li>)}
                </ul>
            </nav>

            {/* <!--Dark Mode toggle--> */}
            <button id="dark-mode-toggle" onClick={() => {
                if (darkMode) {
                    disableDarkMode();
                } else {
                    enableDarkMode();
                }
            }}>
                {/* <!--Moon is an inline SVG so you can edit the color if needed--> */}
                <svg className="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"
                    // style={{ enableBackground: 'new 0 0 480 480' }}
                    xmlSpace="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z" /></svg>
                <img className="sun" aria-hidden="true" src="/images/sun.svg" decoding="async" alt="moon" width="15" height="15" />
            </button>

            {/* <!--Mobile Nav toggle--> */}
            <button className={`hamburger-menu ${navState ? 'clicked' : ''}`} onClick={() => setNavState(!navState)}>
                <span aria-hidden="true"></span>
            </button>
        </div>
    </div >;
};

export default Header;