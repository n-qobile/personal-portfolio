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
    name: 'Project Y',
    position:
      '',
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
    name: 'PrepCheck',
    position:
      'React 18, Framer Motion, Recharts, Axios, Node.js, Express.js, Multer, pdf-parse, Mammoth, Google Gemini 2.0 Flash. ',
    url: '',
    startDate: '2025-11-17',
    endDate: '2025-11-21',
    summary:
      'Build an AI-powered work readiness screener providing personalised CV analysis and personalised recommendations. ',
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
