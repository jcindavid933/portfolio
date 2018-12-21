module.exports = {
  siteTitle: 'David Nam | Full Stack SDE',
  siteDescription:
    'I am a collaborative software engineer with a get-stuff-done attitude, efficient time management skills, and a strong user focus. Eager to learn new technological skills; if I do not have knowledge about something, I will learn it.',
  siteKeywords:
    'David Nam, David, Nam, jcindavid933, software engineer, full stack engineer, web developer, javascript, python, c#, pennsylvania state university, fron end engineer, back end engineer, coding dojo',
  siteUrl: 'https://www.wonsiknam.com',
  siteLanguage: 'en_US',

  name: 'David Nam',
  location: 'Woodinville, WA',
  email: 'jcindavid933@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/jcindavid933/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/david-w-nam/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/wsn_93/',
    }
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Skills',
      url: '#skills',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  headerHeight: 100,
  darkGrey: '#333f58',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
