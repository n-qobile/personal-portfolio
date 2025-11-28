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
        Full-stack developer turning ideas into impact. From healthcare to code,
        I bring empathy, creativity, and problem-solving to every project I build.
      </p>
      <p>
        Hi, I&apos;m Nqobile. I&apos;m a self-taught developer passionate about
        building meaningful digital experiences.
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