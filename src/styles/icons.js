import glamorous from 'glamorous';
import { Config } from './config';

const UserIcon = glamorous.span({
  height: 40,
  width: 40,
  display: 'inline-block',
  marginTop: 5,
  backgroundImage: `url(${process.env.PUBLIC_URL}/user.png)`,
  backgroundSize: '100%',
  borderRadius: '50%'
});

const VerticalSeparator = glamorous.span({
  display: 'inline-block',
  minWidth: 1,
  height: 30,
  position: 'absolute',
  top: 10,
  left: '50%',
  backgroundColor: '#eee'
});

const ChevronIcon = glamorous.i((props) => {
  let directions = {
    left: '-45deg',
    right: '135deg',
    up: '45deg',
    down: '-135deg'
  };
  return ({
    height: 16,
    width: 16,
    color: Config.colors.text.white,
    border: `1px solid`,
    borderColor: props.color === 'white' ? Config.colors.border.white : Config.colors.border.teal,
    borderRight: 0,
    borderBottom: 0,
    transform: `rotate(${directions[props.direction]})`,
    display: 'inline-block',
    transformOrigin: 'center'
  });
});

export {UserIcon, VerticalSeparator, ChevronIcon};
