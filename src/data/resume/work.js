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
    name: 'E-Commerce Site',
    position: 'MongoDB, Express, React, Node.js, Stripe, Redis',
    url: '#ecommerce-site',
    startDate: 'January 2025',
    endDate: 'January 2025',
    summary:
      'Developed a complete e-commerce web application using the MERN stack, implementing a responsive UI and robust backend features for user and admin experiences.',
    highlights: [
      ' Product and category management with CRUD functionality.',
      ' Stripe integration for secure checkout and payments.',
      ' JWT-based user authentication with refresh/access tokens.',
      ' Admin dashboard with real-time sales analytics and coupon management.',
      ' Redis caching for performance optimization.',
      ' Built with TailwindCSS and deployed on modern hosting platforms.',
    ],
  },
  {
    name: 'Real-Time Chat App',
    position: 'MongoDB, Express, React, Node.js, Socket.IO, Cloudinary',
    url: '#chatty',
    startDate: 'November 2024',
    endDate: 'November 2024',
    summary:
      'Built a real-time chat app using the MERN stack and Socket.IO, with features for user customization, media uploads, and secure messaging.',
    highlights: [
      ' Real-time messaging with Socket.IO and online user status.',
      ' Cloudinary integration for image uploads.',
      ' Theme switching and profile photo customization.',
      ' Secure login/signup using JWT authentication.',
      ' Zustand for global state management.',
      ' Fully deployed with client-server separation.',
    ],
  },
  {
    name: 'Home Budget App',
    position: 'React, React Router DOM, LocalStorage',
    url: '#homebudget',
    startDate: 'September 2024',
    endDate: 'September 2024',
    summary:
      'Created a single-page budgeting app using React, featuring dynamic navigation and persistent data storage for easy financial tracking.',
    highlights: [
      ' React Router DOM used for smooth navigation.',
      ' LocalStorage integration for saving user data.',
      ' Protected routes and error handling.',
      ' Emphasis on simplicity, clarity, and UX.',
    ],
  },
  {
    name: 'Meditative Breathing App',
    position: 'HTML, CSS, JavaScript',
    url: '#meditative',
    startDate: 'August 2024',
    endDate: 'August 2024',
    summary:
      'Developed a vanilla JavaScript app to guide users through customizable breathing sessions, with relaxing sounds and minimal distractions.',
    highlights: [
      ' Timed inhale-hold-exhale cycles with visual animations.',
      ' Background sound options with play/pause control.',
      ' Session customization for user preference.',
      ' Focused on calm UX and mobile-friendly layout.',
    ],
  },
  {
    name: '2048 Game Clone',
    position: 'HTML, CSS, JavaScript',
    url: '#game',
    startDate: 'July 2024',
    endDate: 'July 2024',
    summary:
      'Cloned the popular 2048 game using JavaScript, with smooth animations, score tracking, and full gameplay logic.',
    highlights: [
      ' Complete logic for tile merging, score updates, and win/lose states.',
      ' Handled CSS animations and dynamic class management in JavaScript.',
      ' Intermediate-level complexity and problem-solving.',
      ' Responsive and playable on desktop and mobile.',
    ],
  },
  {
    name: 'Speech-Language Pathologist',
    position: 'Speech-Language Pathologist',
    url: '',
    startDate: '2022-01-01',
    endDate: '',
    summary:
      'As a Speech-Language Pathologist in a government hospital, I provided assessment, evaluation, management and treatment services to patients across diverse age groups. I developed individualized treatment plans and worked collaboratively with multidisciplinary teams to improve communication and swallowing outcomes for patients. This experience honed my problem-solving, documentation, and stakeholder communication skills, all of which support my work in tech today.',
    highlights: [
      'Worked in high-pressure, resource-limited environments while delivering quality care.',
      'Maintained detailed case notes and managed clinical documentation efficiently.',
      'Collaborated with audiologists, doctors, occupational therapists, and nurses to coordinate holistic patient care.',
      'Used evidence-based tools to evaluate communication and cognitive-linguistic challenges.',
      'Built rapport with patients and families from various linguistic and cultural backgrounds.',
    ],
  },
];

export default work;
