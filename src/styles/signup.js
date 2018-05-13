import glamorous from 'glamorous';
import { Config } from '../styles/config';

const FeatureBg = glamorous.div({
  backgroundImage: `url(${process.env.PUBLIC_URL}/msd.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  minHeight: 'calc(100vh - 50px)'
});

export {FeatureBg};
