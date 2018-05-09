import glamorous from 'glamorous';
import {Config} from './config';

const Button = glamorous.a((props) => ({
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: Config.fontSizes.small,
  backgroundColor: (props.bg) ? Config.colors[props.bg] : Config.colors.bg.light3,
  padding: (props.variant === 'medium') ? '5px 13px' : '8px 15px',
  color: (props.bg === 'primary' || props.bg === 'secondary') ? Config.colors.text.white : Config.colors.text.light1,
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
    border: 'thin solid ' + Config.colors.border.light,
    lineHeight: '50px',
    paddingLeft: 50,
    fontSize: Config.fontSizes.h4,
    color: Config.colors.text.light1,
    backgroundColor: 'inherit',
    fontWeight: Config.fontWeights.rg,
    transition: 'background-color 0.3s linear',
    outline: 0,
    '::placeholder': {
      fontSize: Config.fontSizes.h4,
      colors: Config.colors.text.light1,
      fontWeight: Config.fontWeights.lt
    }
  });
});

const InputWrapper = glamorous.div((props) => {
  return ({
    width: '100%',
    position: 'relative',
    backgroundColor: (props.focused === true) ? '#fff' : 'transparent',
    color: Config.colors.text.light1,
    ':focus': {
      border: 'thin solid red'
    },
    ' i': {
      position: 'absolute',
      left: 15,
      top: 0,
      lineHeight: '50px'
    }
  });
});

export {Button, Input, InputWrapper};
