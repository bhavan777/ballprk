import glamorous from 'glamorous';
import {Config} from './config';

const Button = glamorous.a((props) => ({
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: Config.fontSizes.small,
  fontWeight: (props.bg === 'primary-gradient') ? Config.fontWeights.lt : Config.fontWeights.sbd,
  position: (props.hasIcon) ? 'relative' : 'initial',
  backgroundColor: (props.bg) ? Config.colors[props.bg] : Config.colors.bg.light1,
  padding: (props.variant === 'medium') ? '5px 13px' : '15px 15px',
  color: (props.bg === 'primary' || props.bg === 'secondary' || props.bg === 'primary-gradient') ? Config.colors.text.white : Config.colors.text.light,
  float: props.pull ? props.pull : 'none',
  width: props.type === 'block' ? '100%' : 'auto',
  border: props.bordered === true ? `thin solid ${Config.colors.border.dark2}` : 0,
  paddingLeft: props.hasIcon === true ? 20 : 15,
  background: (props.bg === 'primary-gradient') ? `linear-gradient(left, ${Config.colors.bg.teal} 0%,${Config.colors.bg.lightBlue} 100%)` : (props.bg) ? Config.colors[props.bg] : Config.colors.bg.light1,
  ' i': {
    position: 'relative',
    left: -10,
    '.stick-left': {
      position: 'absolute',
      left: 15
    }
  }
}));

const Input = glamorous.input((props) => {
  return ({
    width: '100%',
    height: 50,
    border: (props.variant === 'light') ? `thin solid ${Config.colors.border.light}` : `thin solid ${Config.colors.border.teal}`,
    lineHeight: '50px',
    paddingLeft: props.isFocused === true ? 15 : 50,
    boxShadow: (props.isFocused === true) ? Config.shadows.light : '',
    fontSize: (props.variant === 'formInput') ? Config.fontSizes.small : Config.fontSizes.h5,
    color: Config.colors.text.dark,
    backgroundColor: 'inherit',
    display: props.hide === true ? 'none' : 'initial',
    fontWeight: Config.fontWeights.sbd,
    transition: 'all 0.3s linear',
    outline: 0,
    '::placeholder': {
      fontSize: (props.variant === 'formInput') ? Config.fontSizes.small : Config.fontSizes.h5,
      colors: Config.colors.text.light1,
      fontWeight: Config.fontWeights.lt
    }
  });
});

const SearchWrapper = glamorous.div((props) => {
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

const FormWrapper = glamorous.div({
  width: '100%',
  backgroundColor: Config.colors.bg.light1,
  minHeight: 'calc(100vh - 50px)'
});

const FormHeading = glamorous.h1({
  fontSize: Config.fontSizes.h1,
  fontFamily: Config.fonts.oswald,
  fontWeight: Config.fontWeights.sbd,
  textTransform: 'uppercase',
  color: Config.colors.text.dark2
});

const FormTagline = glamorous.p({
  fontSize: Config.fontSizes.small,
  fontFamily: Config.fonts.sourceSans,
  color: Config.colors.text.dark,
  fontWeight: Config.fontWeights.rg
});

const InputWrapper = glamorous.div((props) => ({
  paddingLeft: 15,
  paddingRight: 15,
  position: 'relative',
  color: Config.colors.text.teal,
  borderLeft: (props.leftBordered === true) ? `2px solid` : 0,
  borderColor: (props.leftBordered === true) ? Config.colors.border.teal : Config.colors.border.transparent,
  ' input': {
    paddingLeft: 15
  }
}));

const InputLabel = glamorous.label({
  color: 'inherit',
  fontSize: Config.fontSizes.small,
  fontWeight: Config.fontWeights.bd,
  textTransform: 'capitalize',
  lineHeight: 2,
  textAlign: 'left',
  display: 'block'
});

export {Button, Input, SearchWrapper, FormWrapper, FormHeading, FormTagline, InputWrapper, InputLabel};
