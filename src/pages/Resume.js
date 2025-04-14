import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import SoftSkills from '../components/Resume/SoftSkills';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';
import softSkills from '../data/resume/softSkills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  SoftSkills: () => <SoftSkills softSkills={softSkills} />,
  References: () => <References />,
};

const Resume = () => (
  <Main title="Resume" description="Nqobile Masombuka's Resume.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>

      {Object.entries(sections).map(([name, Section]) => (
        <section key={name} id={name.toLowerCase()}>
          {' '}
          <Section />
        </section>
      ))}
    </article>
  </Main>
);

export default Resume;
