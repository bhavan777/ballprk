import glamorous from 'glamorous';
import {Config} from './config';

const Button = glamorous.a((props) => ({
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: Config.fontSizes.small,
  backgroundColor: (props.bg) ? Config.colors[props.bg] : Config.colors.bg.light1,
  padding: (props.variant === 'medium') ? '5px 13px' : '8px 15px',
  color: (props.bg === 'primary' || props.bg === 'secondary') ? Config.colors.text.white : Config.colors.text.light,
  float: props.pull ? props.pull : 'none',
  width: props.type === 'block' ? '100%' : 'auto',
  border: props.bordered === true ? `thin solid ${Config.colors.border.dark2}` : 0,
  paddingLeft: props.hasIcon === true ? 20 : 15,
  ' i': {
    position: 'relative',
    left: -10
  }
}));

const Input = glamorous.input((props) => {
  return ({
    width: '100%',
    height: 50,
    border: `thin solid ${Config.colors.border.light}`,
    lineHeight: '50px',
    paddingLeft: props.isFocused === true ? 15 : 50,
    boxShadow: (props.isFocused === true) ? Config.shadows.light : '',
    fontSize: Config.fontSizes.h5,
    color: Config.colors.text.dark,
    backgroundColor: 'inherit',
    fontWeight: Config.fontWeights.sbd,
    transition: 'all 0.3s linear',
    outline: 0,
    '::placeholder': {
      fontSize: Config.fontSizes.h5,
      colors: Config.colors.text.light1,
      fontWeight: Config.fontWeights.lt
    }
  });
});

const InputWrapper = glamorous.div((props) => {
  return ({
    width: '100%',
    position: 'relative',
    backgroundColor: (props.focused === true) ? Config.colors.bg.white : Config.colors.bg.transparent,
    color: Config.colors.text.light1,
    ' i': {
      position: 'absolute',
      left: 15,
      top: 0,
      lineHeight: '50px',
      transition: 'all 0.3s linear',
      opacity: props.focused === true ? 0 : 1
    }
  });
});

export {Button, Input, InputWrapper};
