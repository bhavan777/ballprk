const Config = {
  media:
  {
    phone: '@media only screen and (min-width: 320px)',
    tab: '@media only screen and (min-width: 768px)',
    screen: '@media only screen and (min-width: 1024px)'
  },
  gridSize: 12,
  fontSizes: {
    h1: '3rem',
    h2: '2.5rem',
    h3: '2rem',
    h4: '1.5rem',
    h5: '1.15rem',
    h6: '1rem',
    small: '0.75rem'
  },
  fontWeights: {
    lt: 200,
    rg: 300,
    sbd: 400,
    bd: 600
  },
  colors: {
    text: {
      dark3: '#222',
      dark2: '#333',
      dark1: '#555',
      dark: '#666',
      light: '#777',
      light1: '#999',
      light2: '#aaa',
      light3: '#ccc',
      link: '#1173B9',
      linkHover: '#117399'
    },
    bg: {
      white: '#ffffff',
      transparent: 'transparent'
    },
    border: {
      dark2: '#999',
      dark1: '#aaa',
      dark: '#bbb',
      light: '#ccc',
      light1: '#ddd',
      light2: '#eee'
    }
  },
  shadows: {
    light: '0px 1px 3px 0px rgba(0,0,0,0.2)',
    lightBottomShadow: '0px 1px 1px 0px rgba(0,0,0,0.1)'
  }
};

export {Config};
