import glamorous from 'glamorous';
import {Config} from './config';

const Row = glamorous.div((props) => {
  return ({
    margin: props.type === 'container' ? '0 auto' : '0',
    maxWidth: props.type === 'container' ? 1280 : 'none',
    width: props.type === 'container' ? '100%' : 'auto',
    position: props.relative === true ? 'relative' : 'static',
    '::after': {
      content: '""',
      clear: 'both',
      display: 'table'
    }
  });
});

const Col = glamorous.div((props) => {
  props.s = (props.s) ? props.s : Config.gridSize;
  props.m = (props.m) ? props.m : props.s;
  props.l = (props.l) ? props.l : props.m;
  props.offsetS = (props.offsetS) ? props.offsetS : 0;
  props.offsetM = (props.offsetM) ? props.offsetM : props.offsetS;
  props.offsetL = (props.offsetL) ? props.offsetL : props.offsetM;
  let tAlign = props.TAlign || 'left';
  return ({
    textAlign: tAlign,
    float: 'left',
    [Config.media.phone]: {
      width: props.s ? 100 / (Config.gridSize / props.s) + '%' : '100%',
      marginLeft: props.offsetS ? 100 / (Config.gridSize / props.offsetS) + '%' : '0',
      paddingLeft: (props.withPadding === true) ? 5 : 0,
      paddingRight: (props.withPadding === true) ? 5 : 0
    },
    [Config.media.tab]: {
      width: props.m ? 100 / (Config.gridSize / props.m) + '%' : '100%',
      marginLeft: props.offsetM ? 100 / (Config.gridSize / props.offsetM) + '%' : '0',
      paddingLeft: (props.withPadding === true) ? 5 : 0,
      paddingRight: (props.withPadding === true) ? 5 : 0
    },
    [Config.media.screen]: {
      width: props.l ? 100 / (Config.gridSize / props.l) + '%' : '100%',
      marginLeft: props.offsetL ? 100 / (Config.gridSize / props.offsetL) + '%' : '0',
      paddingLeft: (props.withPadding === true) ? 5 : 0,
      paddingRight: (props.withPadding === true) ? 5 : 0
    }
  });
});

export { Col, Row };
