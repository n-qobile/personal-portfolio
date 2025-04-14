// src/components/Resume/SoftSkills.js

import React from 'react';
import PropTypes from 'prop-types';

const SoftSkills = ({ softSkills }) => (
  <section>
    <h3>Soft Skills</h3>
    <ul>
      {softSkills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </section>
);

SoftSkills.propTypes = {
  softSkills: PropTypes.arrayOf(PropTypes.string).isRequired, // Just an array of strings
};

export default SoftSkills;
