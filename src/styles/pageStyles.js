import glamorous from 'glamorous';
import { Config } from './config';

const DetailsWrapper =glamorous.div({
  backgroundColor: '#FAFAFA',
  height: 'calc( 100vh - 50px )',
  overflow: 'hidden',
  boxShadow: Config.shadows.light
});

export {DetailsWrapper};
