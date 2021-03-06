import glamorous from 'glamorous';
import { Config } from './config';

const DetailsWrapper =glamorous.div({
  backgroundColor: '#FAFAFA',
  height: 'calc( 100vh - 50px )',
  overflow: 'hidden',
  boxShadow: Config.shadows.light,
  [Config.media.phone]: {
    height: 'auto'
  },
  [Config.media.tab]: {
    height: 'calc( 100vh - 50px )'
  }

});

const BodyWrapper = glamorous.div({
  height: 'calc( 100vh - 50px )',
  width: '100%',
  backgroundColor: '#f1f1f1',
  overflow: 'hidden'
});

export {DetailsWrapper, BodyWrapper};
