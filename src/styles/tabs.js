import glamorous from 'glamorous';
import {Config} from '../styles/config';

const TabsWrapper = glamorous.div({
  width: '100%',
  paddingLeft: 15,
  paddingRight: 15
});
const TabGroup = glamorous.div({
  '::after': {
    content: '""',
    clear: 'both',
    display: 'table'
  }
});
const Tab = glamorous.div({
  display: 'inline-block',
  minWidth: '33.33%',
  minHeight: 50,
  position: 'relative',
  border: `thin solid ${Config.colors.border.teal}`,
  borderRight: 0,
  ':last-child': {
    borderRight: `thin solid ${Config.colors.border.teal}`
  },
  ' input': {
    width: 0
  },
  ' label': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    lineHeight: '50px',
    cursor: 'pointer',
    textAlign: 'center',
    top: 0,
    left: 0,
    fontWeight: Config.fontWeights.lt,
    background: Config.colors.bg.white,
    transition: 'all 0.2s linear'
  },
  ' input:checked + label': {
    color: Config.colors.text.white,
    background: `linear-gradient(left,${Config.colors.bg.teal} 0%,${Config.colors.bg.lightBlue} 100%)`,
    transition: 'all 0.2s linear'
  }
});
const TabRelatedInputGroup = glamorous.div({
  width: '100%',
  ' input': {
    paddingLeft: 15,
    marginTop: 10
  }
});
export {TabsWrapper, TabGroup, Tab, TabRelatedInputGroup};
