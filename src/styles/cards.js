import glamorous from 'glamorous';
import { Config } from './config';

const SCard = glamorous.div((props) => ({
  maxWidth: '100%',
  position: 'relative',
  backgroundColor: props.variant === 'smallCard' ? Config.colors.bg.white : Config.colors.bg.transparent,
  float: props.variant === 'smallCard' ? 'left' : 'none',
  width: props.variant === 'smallCard' ? '32%' : '100%',
  marginRight: props.variant === 'smallCard' ? '2%' : 0,
  marginBottom: props.variant === 'smallCard' ? '2%' : 0,
  boxShadow: props.variant === 'smallCard' ? Config.shadows.lightBottomShadow : 'none',
  ':nth-child(3n)': {
    marginRight: 0
  }
}));

const SCardImage = glamorous.div((props) => ({
  minHeight: '25vh',
  backgroundImage: `url(${props.bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  maxWidth: '100%'
}));

const SCardLogo = glamorous.div((props) => ({
  position: 'absolute',
  bottom: '0',
  left: '0',
  transform: 'translate(20%,40%)',
  backgroundImage: `url(${props.bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  width: props.variant === 'smallCard' ? '25%' : 100,
  height: props.variant === 'smallCard' ? '35%' : 100,
  borderRadius: props.variant === 'smallCard' ? '50%' : 0
}));

const SCardButton = glamorous.a((props) => ({
  textDecoration: 'none',
  display: 'inline-block',
  backgroundColor: props.bg === 'primary' ? '#3B3434' : '#eee',
  padding: (props.variant === 'medium') ? '5px 13px' : '8px 15px',
  color: props.bg === 'primary' ? '#fff' : '#999',
  float: props.pull ? props.pull : 'none',
  width: props.type === 'block' ? '100%' : 'auto',
  position: 'absolute',
  bottom: '0',
  right: '0',
  transform: 'translate(-40%,-90%)'
}));

export {SCard, SCardImage, SCardLogo, SCardButton};
