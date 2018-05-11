import glamorous from 'glamorous';
import {Config} from './config';

const NavWrapper = glamorous.ul((props) => ({
  listStyle: 'none',
  backgroundColor: '#fefefe',
  margin: '0 auto',
  textAlign: 'center',
  fontFamily: `'Oswald', sans-serif`,
  fontSize: Config.fontSizes.h5,
  lineHeight: '40px',
  boxShadow: Config.shadows.lightBottomShadow,
  ' li': {
    display: 'inline-block',
    textTransform: 'uppercase',
    padding: '0 5px',
    cursor: 'pointer',
    transition: 'color 0.3s linear',
    [Config.media.phone]: {
      margin: '0 5px'
    },
    [Config.media.tab]: {
      margin: '0 20px'
    },
    ':hover': {
      transition: 'color 0.3s linear',
      color: Config.colors.text.dark2
    }
  }
}));

const NavListItem = glamorous.li((props) => ({
  fontWeight: (props.isActive) ? Config.fontWeights.sbd : Config.fontWeights.lt,
  color: (props.isActive) ? Config.colors.text.dark2 : Config.colors.text.light1,
  borderBottom: (props.isActive) ? '3px solid #333' : '0',
  ':hover': {
    fontWeight: Config.fontWeights.sbd
  }
}));

const ActionGroup = glamorous.div({
  backgroundColor: 'transparent',
  border: `thin solid ${Config.colors.border.dark}`,
  padding: '7px 10px',
  ' a': {
    marginRight: 10,
    ':last-child': {
      marginRight: 0
    }

  }
});

export {NavWrapper, NavListItem, ActionGroup};
