import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nqobile Masombuka</h2>
        <p>
          <a href="mailto:nqobilemasombuka77@gmail.com">
            nqobilemasombuka77@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p className="brand-statement">
        Software engineer building modern fullstack 
        applications with JavaScript while expanding expertise 
        in Cloud Engineering.
      </p>
      <p>
        Hi, I&apos;m Nqobile. I&apos;m a Software Engineer passionate about
        building meaningful digital experiences. Currently expanding expertise 
        in Cloud Engineering. 
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Nqobile Masombuka</p>
    </section>
  </section>
);

export default SideBar;
