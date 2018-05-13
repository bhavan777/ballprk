import glamorous from 'glamorous';
import {Config} from '../styles/config';

const BHeader = glamorous.header({
  color: 'white',
  width: '100%',
  '::after': {
    content: '""',
    clear: 'both',
    display: 'table'
  },
  [Config.media.phone]: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    minHeight: 50
  },
  [Config.media.tab]: {
    position: 'static'
  },
  [Config.media.screen]: {
    position: 'static',
    height: 50
  }
},
(props) => ({
  background: props.variant === 'gradient' ? `linear-gradient(left,${Config.colors.bg.dark1} 0%,${Config.colors.bg.dark} 100%)` : Config.colors.bg.dark
}));

const Logo = glamorous.div((props) => ({
  width: 150,
  height: 50,
  backgroundImage: `url(${props.bg})`,
  backgroundSize: '90%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  [Config.media.phone]: {
    margin: '0 auto',
    marginBottom: -15
  },
  [Config.media.tab]: {
    margin: '0'
  }
})
);

const HeaderList = glamorous.ul((props) => ({
  fontFamily: `'Oswald', sans-serif`,
  listStyle: 'none',
  color: '#aaa',
  letterSpacing: 1.5,
  fontSize: Config.fontSizes.h6,
  fontWeight: Config.fontWeights.lt,
  marginRight: 15,
  ' li': {
    float: 'left',
    lineHeight: '50px',
    position: 'relative'
  },
  ' li i': {
    lineHeight: '50px',
    minHeight: 50
  },
  ' li a': {
    textDecoration: 'none',
    margin: '0 20px',
    ':first-child': {
      marginLeft: 0
    },
    '.active': {
      color: '#fff',
      fontWeight: 300
    }
  },
  [Config.media.phone]: {
    maxHeight: (props.isOpen === true) ? 999 : 0,
    overflow: 'hidden',
    float: 'none',
    width: '100%',
    marginTop: (props.isOpen === true) ? 10 : 0,
    borderTop: (props.isOpen === true) ? `thin solid ${Config.colors.border.light2}` : 0,
    ' li': {
      float: 'none',
      paddingLeft: 20
    },
    ' li i': {
      minWidth: 0,
      marginRight: 10
    }
  },
  [Config.media.tab]: {
    maxHeight: 50,
    float: 'right',
    width: 'auto',
    ' li': {
      textAlign: 'center',
      paddingLeft: 0,
      float: 'left'
    },
    ' li i': {
      minWidth: 50,
      marginRight: 0
    }
  }
}));

export { BHeader, Logo, HeaderList };
