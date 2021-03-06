const Config = {
  media: {
    phone: '@media only screen and (min-width: 320px)',
    tab: '@media only screen and (min-width: 768px)',
    screen: '@media only screen and (min-width: 1024px)'
  },
  gridSize: 12,
  fontSizes: {
    h1: '2.48rem',
    h2: '2.0736rem',
    h3: '1.728rem',
    h4: '1.44rem',
    h5: '1.2rem',
    h6: '1rem',
    small: '0.833rem'
  },
  fonts: {
    sourceSans: `'Source Sans Pro', sans-serif`,
    oswald: `'Oswald', sans-serif`
  },
  radii: {
    sm: 2,
    rg: 3,
    lg: 5,
    xl: 10,
    circle: '50%'
  },
  fontWeights: {
    lt: 200,
    rg: 300,
    sbd: 400,
    bd: 600
  },
  colors: {
    primary: '#3B3434',
    secondary: '#954039',
    text: {
      dark3: '#222',
      dark2: '#333',
      dark1: '#555',
      dark: '#666',
      light: '#777',
      light1: '#999',
      light2: '#aaa',
      light3: '#ccc',
      white: '#ffffff',
      link: '#1173B9',
      linkHover: '#117399',
      teal: '#395961',
      lightBlue: '#434647'
    },
    bg: {
      white: '#ffffff',
      light1: '#fafafa',
      light2: '#eeeeee',
      light3: '#dddddd',
      dark: '#292929',
      dark1: '#222222',
      transparent: 'transparent',
      teal: '#395961',
      lightBlue: '#434647'
    },
    border: {
      dark2: '#999',
      dark1: '#aaa',
      dark: '#bbb',
      light: '#ccc',
      light1: '#ddd',
      light2: '#eee',
      teal: '#395961',
      lightBlue: '#434647',
      transparent: 'transparent',
      white: '#ffffff'
    }
  },
  shadows: {
    light: '0px 1px 3px 0px rgba(0,0,0,0.2)',
    lightBottomShadow: '0px 1px 1px 0px rgba(0,0,0,0.1)',
    inputShadow: '1px 1px 3px 1px rgba(58,89,96,0.3),-1px 1px 3px 1px rgba(58,89,96,0.3)'
  }
};

export {Config};
