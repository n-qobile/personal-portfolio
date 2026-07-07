/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'eJuuZ',
    position: 'Lead Fullstack Developer',
    url: 'work placement',
    startDate: '2026-02-01',
    endDate: '',
    summary:
      'Promoted from Fullstack Developer Intern to Lead Fullstack Developer in recognition of technical contribution, ownership and leadership within the development team. ',
    highlights: [
      'Lead daily standup meetings and coordinated communication between development team and management. ',
      'Coordinate development tasks, monitor project progress and support team members throughout the software development lifecycle. ',
      'Develop and maintain fullstack web applications using React, Node.js, Express.js and MongoDB. ',
      'Build and maintain the company`s website, implementing new features and improvements. ',
      'Collaborate on software development using Git and GitHub, including pull request reviews and team workflows. ',
      'Design and integrate REST APIs while troubleshooting and resolving application issues to improve performance and reliability. ',
    ],
  },
  {
    name: 'Project Y',
    position: '',
    url: '',
    startDate: '2025-10-01',
    endDate: '',
    summary:
      'Completing rigorous full-stack development training focused on building production-ready applications with modern technologies, including cloud computing, AI/LLM integration, data engineering and DevOps practices. ',
    highlights: [
      'Developed multiple full-stack applications using JavaScript ecosystem, Python/Fast API, PostgreSQL and cloud deployment strategies every week. ',
      'Collaborated with peers on team projects using Agile methodologies and Git workflows. ',
      'Gained hands-on experience with AWS, Azure, Docker, CI/CD Pipelines, and modern deployment best practices. ',
    ],
  },

  {
    name: 'Stroke Data Lake',
    position:
      'AWS (Terraform, S3, Glue, Athena), SQL, GitHub pages, Python Plotly. ',
    url: '',
    startDate: '2026-02-02',
    endDate: '2026-02-28',
    summary:
      'Built a cloud-based data lake for storing and analysing healthcare datasets using AWS. ',
    highlights: [
      'Designed secure data ingestion and storage workflows following AWS architecture best practices. ',
      'Implemented scalable cloud storage to support efficient data management and analysis.',
    ],
  },

  {
    name: 'IRIS',
    position:
      'AWS (S3, Rekognition, Lambda, Cloudfront, Gateway, DynamoDB, CloudWatch), React, Custom CSS, Fetch API, AWS CLI, GitHub Actions. ',
    url: '',
    startDate: '2026-01-01',
    endDate: '2026-01-31',
    summary:
      'Built an AI-powered image intelligence platform using AWS cloud services for image analysis and processing. ',
    highlights: [
      'Designed a scalable cloud architecture integrating AI capabilities with secure cloud storage and application delivery. ',
      'Applied AWS best practices for cloud deployment and infrastructure management ',
    ],
  },

  {
    name: 'PrepCheck',
    position:
      'React 18, Framer Motion, Recharts, Axios, Node.js, Express.js, Multer, pdf-parse, Mammoth, Google Gemini 2.0 Flash, Docker, Kubermetes, Docker Hub. ',
    url: '',
    startDate: '2025-11-17',
    endDate: '2025-11-21',
    summary:
      'Built an AI-powered work readiness screener providing personalised CV analysis and personalised recommendations. ',
    highlights: [
      ' Integrated Gemini API to generate dynamic CV analysis, personalised recommendation, and a real-time chatbot (PrepPal). ',
    ],
  },

  {
    name: 'MuseMotion',
    position:
      'Kaggle Datasets, SQL, MySQL, Pandas, Microsoft Azure, Streamlit. ',
    url: '',
    startDate: '2025-11-03',
    endDate: '2025-11-07',
    summary:
      'Built a comprehensive data engineering platform that processes, analyses and visualises insights from electric vehicle datasets. ',
    highlights: [
      'Automates data ingestion, transformation and cloud-based storage. ',
    ],
  },

  {
    name: 'MuseMind',
    position:
      'Express.js, Node.js, CORS, dotenv, Gemini API, JavaScript, CSS, HTML. ',
    url: '',
    startDate: '2025-10-13',
    endDate: '2025-10-17',
    summary:
      'Built an AI-powered poem generator that utilises Google Gemini API for intelligent, contextual poem creation. ',
    highlights: [
      ' Real-time poem generation with beautiful themed UI and responsive design. ',
    ],
  },

  {
    name: 'Streamify (Video Calling & Chat App) ',
    position:
      'MongoDB, Express, React, Node.js, Zustand, TailwindCSS, Stream API',
    url: '',
    startDate: '2025-05-01',
    endDate: '2025-05-31',
    summary:
      'Developed a realtime video calling and messaging platform designed for language exchange. Features include chat with reactions, group calls, theme customisation, and screen sharing. ',
    highlights: [
      ' Built a secure, real-time platform for 1-on-1 and group video calling, live chat with reactions, typing indicators, screen sharing, and 32 unique UI themes. ',
    ],
  },

  {
    name: 'Task Manager App',
    position: 'MongoDB, Express, React, Node.js, Redux Toolkit, TailwindCSS',
    url: '',
    startDate: '2025-03-01',
    endDate: '2025-03-31',
    summary:
      'Built a full-stack task management application with user authentication, task tracking, and admin management features, optimised for collaboration and efficiency. ',
    highlights: [
      ' Developed a task management app with role-based auth, dynamic filtering, file uploads, and Firebase storage. ',
    ],
  },
];

export default work;
