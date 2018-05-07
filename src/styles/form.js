import glamorous from 'glamorous';

const Button = glamorous.a((props) => ({
  textDecoration: 'none',
  display: 'inline-block',
  backgroundColor: props.bg === 'primary' ? '#3B3434' : '#eee',
  padding: (props.variant === 'medium') ? '5px 13px' : '8px 15px',
  color: props.bg === 'primary' ? '#fff' : '#999',
  float: props.pull ? props.pull : 'none',
  width: props.type === 'block' ? '100%' : 'auto'
}));

export {Button};
