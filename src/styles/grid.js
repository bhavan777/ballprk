import glamorous from 'glamorous';
import {Config} from './config';

const Container = glamorous.div({
  margin: '0 auto',
  maxWidth: 1280,
  width: '100%',
  '::after': {
    content: '""',
    clear: 'both',
    display: 'table'
  }
});

const Col = glamorous.div((props) => {
  let sSize = Number(props.s) || Config.gridSize;
  let sWidth = (sSize / Config.gridSize) * 100 + '%';
  return ({
    float: props.align,
    [Config.media.phone]: {
      width: sWidth
    }
  });
});
export { Container, Col };
