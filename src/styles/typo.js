import glamorous from 'glamorous';
import {Config} from './config';


const Text = glamorous.p((props) => ({
  color: props['clr-variant'] ? Config.colors.text[props['clr-variant']] : Config.colors.text.dark,
  fontFamily: `'Source Sans Pro', sans-serif`,
  fontWeight: Config.fontWeights[props.weight] || Config.fontWeights.rg,
  fontSize: Config.fontSizes[props.variant] || '1rem',
  textAlign: props.tAlign || 'inherit'
}));

const Link = glamorous.a((props) => ({
  textDecoration: 'none',
  transition: 'color 0.2s linear',
  color: Config.colors.text.link,
  cursor: 'pointer',
  fontSize: Config.fontSizes[props.variant] || '1rem',
  ':hover': {
    color: Config.colors.text.linkHover
  }
}));

export {Text, Link};
