const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bootstrap',
    competency: 3,
    category: ['Web Development', 'Frameworks'],
  },
  { title: 'VSCode', competency: 5, category: ['Tools'] },
  { title: 'CodeSandbox', competency: 3, category: ['Tools'] },
  { title: 'Netlify', competency: 4, category: ['Tools', 'Deployment'] },
  { title: 'Render', competency: 4, category: ['Tools', 'Deployment'] },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Socket.IO',
    competency: 3,
    category: ['Web Development', 'Libraries'],
  },
  {
    title: 'Redis',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },

  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'API Integration',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'FastAPI',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'UI/UX Design',
    competency: 3,
    category: ['Web Development', 'Design'],
  },
  {
    title: 'API Integration',
    competency: 3,
    category: ['Web Development', 'APIs'],
  },
  {
    title: 'CI/CD',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Testing (Jest/Mocha)',
    competency: 2,
    category: ['Tools', 'Testing'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
