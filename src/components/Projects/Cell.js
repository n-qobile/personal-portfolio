import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      {data.isCapstone && (
        <div className="capstone-badge">
          <span>🎓 Bootcamp Capstone</span>
        </div>
      )}
      <header>
        <h3>
          <a href={data.liveLink || data.githubLink}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format('MMMM, YYYY')}
        </time>
      </header>
      <a href={data.liveLink || data.githubLink} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
        
        {/* Tech Stack */}
        {data.tools && data.tools.length > 0 && (
          <div className="tech-stack">
            {data.tools.map((tool) => (
              <span key={tool} className="tech-badge">
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="project-links">
          {data.githubLink && (
            <a
              href={data.githubLink}
              className="button small"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {data.liveLink && (
            <a
              href={data.liveLink}
              className="button small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    githubLink: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string),
    isCapstone: PropTypes.bool,
  }).isRequired,
};

export default Cell;