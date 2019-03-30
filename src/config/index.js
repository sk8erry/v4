module.exports = {
  siteTitle: 'Ricky Yang',
  siteDescription:
    'Ricky Yang is student based in Irvine, CA specialized in web development and IoT programming.',
  siteKeywords:
    'Brittany Chiang, Brittany, Chiang, bchiang7, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Ricky Yang',
  location: 'Irvine, CA',
  email: 'ruiqiy6@uci.edu',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/sk8erry/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ricky-yang-587475147/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/stzyangruiqi/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/omniyang',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
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

  twitterHandle: '@omniyang',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

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
