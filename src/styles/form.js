import glamorous from 'glamorous';
import {Config} from './config';

const Button = glamorous.a((props) => ({
  textDecoration: 'none',
  display: 'inline-block',
  backgroundColor: props.bg === 'primary' ? '#3B3434' : '#eee',
  padding: (props.variant === 'medium') ? '5px 13px' : '8px 15px',
  color: props.bg === 'primary' ? '#fff' : '#999',
  float: props.pull ? props.pull : 'none',
  width: props.type === 'block' ? '100%' : 'auto',
  border: props.bordered === true ? `thin solid ${Config.colors.border.dark2}` : 0,
  paddingLeft: props.hasIcon === true ? 20 : 0,
  ' i': {
    position: 'relative',
    left: -10
  }
}));

const Input = glamorous.input((props) => {
  return ({
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    border: 'thin solid ' + Config.colors.border.light,
    lineHeight: '50px',
    paddingLeft: 50,
    fontSize: Config.fontSizes.h4,
    colors: Config.colors.text.light2,
    fontWeight: Config.fontWeights.lt,
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
    color: Config.colors.text.light1,
    ' i': {
      position: 'absolute',
      left: 15,
      top: 0,
      lineHeight: '50px'
    }
  });
});

export {Button, Input, InputWrapper};
