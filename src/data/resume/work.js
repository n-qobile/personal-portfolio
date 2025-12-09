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
    name: 'Streamify- Video Calling & Chat App',
    position:
      'MongoDB, Express, React, Node.js, Zustand, TailwindCSS, Stream API',
    url: '',
    startDate: 'May 2025',
    endDate: 'May 2025',
    summary:
      'Developed a realtime video calling and messaging platform designed for language exchange. Features include chat with reactions, group calls, theme customization, and screen sharing.',
    highlights: [
      ' Real-time messaging with typing indicators, reactions, and online status via Stream API.',
      ' 1-on-1 and group video calls with screen sharing and session recording capabilities.',
      ' Secure JWT-based authentication and protected routes for user data security.',
      ' Global state managed with Zustand and efficient data fetching via TanStack Query.',
      ' 32 customizable themes for a dynamic and inclusive user experience.',
      ' Responsive UI built with Vite and TailwindCSS for speed and accessibility.',
      ' End-to-end error handling on both frontend and backend for production readiness.',
      ' Deployed as a full-stack MERN application on Render.',
    ],
  },

  {
    name: 'Task Manager App',
    position: 'MongoDB, Express, React, Node.js, Redux Toolkit, TailwindCSS',
    url: '',
    startDate: 'March 2025',
    endDate: 'March 2025',
    summary:
      'Built a full-stack task management application with user authentication, task tracking, and admin management features, optimized for collaboration and efficiency.',
    highlights: [
      ' Role-based user authentication and authorization using JWT and cookies.',
      ' Task assignment, priority setting, and status updates with real-time UI refresh.',
      ' Comment/chat feature on individual tasks for team communication.',
      ' Upload and manage task assets such as images.',
      ' Admin dashboard with user control and task management capabilities.',
      ' Frontend built with Vite, TailwindCSS, and Headless UI for modern UX.',
      ' Fully deployed with client-server separation.',
    ],
  },

  {
    name: 'E-Commerce Site',
    position: 'MongoDB, Express, React, Node.js, Stripe, Redis',
    url: '',
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
    url: '',
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
    url: '',
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
    url: '',
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
    url: '',
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
];

export default work;
