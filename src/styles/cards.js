import glamorous from 'glamorous';

const SCard = glamorous.div({
  maxWidth: '100%',
  position: 'relative'
});

const SCardImage = glamorous.img({
  maxWidth: '100%'
});

const SCardLogo = glamorous.img({
  maxWidth: '100px',
  position: 'absolute',
  bottom: '0',
  left: '0',
  transform: 'translate(20%,40%)',
  width: 100,
  height: 100
});

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
