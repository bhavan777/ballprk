import glamorous from 'glamorous';
import {Config} from './config';

const Space = glamorous.div(
  (props) => {
    props.mlS = (props.mlS !== undefined) ? props.mlS : 0;
    props.mlM = (props.mlM !== undefined) ? props.mlM : props.mlS;
    props.mlL = (props.mlL !== undefined) ? props.mlL : props.mlM;

    props.mrS = (props.mrS !== undefined) ? props.mrS : 0;
    props.mrM = (props.mrM !== undefined) ? props.mrM : props.mrS;
    props.mrL = (props.mrL !== undefined) ? props.mrL : props.mrM;

    props.mtS = (props.mtS !== undefined) ? props.mtS : 0;
    props.mtM = (props.mtM !== undefined) ? props.mtM : props.mtS;
    props.mtL = (props.mtL !== undefined) ? props.mtL : props.mtM;

    props.mbS = (props.mbS !== undefined) ? props.mbS : 0;
    props.mbM = (props.mbM !== undefined) ? props.mbM : props.mbS;
    props.mbL = (props.mbL !== undefined) ? props.mbL : props.mbM;

    props.plS = (props.plS !== undefined) ? props.plS : 0;
    props.plM = (props.plM !== undefined) ? props.plM : props.plS;
    props.plL = (props.plL !== undefined) ? props.plL : props.plM;

    props.prS = (props.prS !== undefined) ? props.prS : 0;
    props.prM = (props.prM !== undefined) ? props.prM : props.prS;
    props.prL = (props.prL !== undefined) ? props.prL : props.prM;

    props.ptS = (props.ptS !== undefined) ? props.ptS : 0;
    props.ptM = (props.ptM !== undefined) ? props.ptM : props.ptS;
    props.ptL = (props.ptL !== undefined) ? props.ptL : props.ptM;

    props.pbS = (props.pbS !== undefined) ? props.pbS : 0;
    props.pbM = (props.pbM !== undefined) ? props.pbM : props.pbS;
    props.pbL = (props.pbL !== undefined) ? props.pbL : props.pbM;

    return ({
      [Config.media.phone]: {
        marginLeft: (props.mlS) ? props.mlS : 0,
        marginRight: (props.mrS) ? props.mrS : 0,
        marginTop: (props.mtS) ? props.mtS : 0,
        marginBottom: (props.mbS) ? props.mbS : 0,
        paddingLeft: (props.plS) ? props.plS : 0,
        paddingRight: (props.prS) ? props.prS : 0,
        paddingTop: (props.ptS) ? props.ptS : 0,
        paddingBottom: (props.pbS) ? props.pbS : 0,
        maxHeight: (props.sSrollable) ? (props.maxHeight || 'none') : 'initial',
        overflow: (props.sSrollable) ? 'scroll' : 'initial'
      },
      [Config.media.tab]: {
        marginLeft: (props.mlM) ? props.mlM : 0,
        marginRight: (props.mrM) ? props.mrM : 0,
        marginTop: (props.mtM) ? props.mtM : 0,
        marginBottom: (props.mbM) ? props.mbM : 0,
        paddingLeft: (props.plM) ? props.plM : 0,
        paddingRight: (props.prM) ? props.prM : 0,
        paddingTop: (props.ptM) ? props.ptM : 0,
        paddingBottom: (props.pbM) ? props.pbM : 0,
        maxHeight: props.maxHeight || 'none',
        overflow: props.scollable ? 'scroll' : 'initial'
      },
      [Config.media.screen]: {
        marginLeft: (props.mlL) ? props.mlL : 0,
        marginRight: (props.mrL) ? props.mrL : 0,
        marginTop: (props.mtL) ? props.mtL : 0,
        marginBottom: (props.mbL) ? props.mbL : 0,
        paddingLeft: (props.plL) ? props.plL : 0,
        paddingRight: (props.prL) ? props.prL : 0,
        paddingTop: (props.ptL) ? props.ptL : 0,
        paddingBottom: (props.pbL) ? props.pbL : 0,
        maxHeight: props.maxHeight || 'none',
        overflow: props.scollable ? 'scroll' : 'initial'
      }
    });
  });

const MediaSpecificElement = glamorous.div((props) => ({
  [Config.media.phone]: {
    lineHeight: 0,
    display: props.hideS === true ? 'none' : (props.type === 'inline') ? 'inline' : 'block'
  },
  [Config.media.tab]: {
    lineHeight: 0,
    display: props.hideM === true ? 'none' : (props.type === 'inline') ? 'inline' : 'block'
  },
  [Config.media.screen]: {
    lineHeight: 0,
    display: props.hideL === true ? 'none' : (props.type === 'inline') ? 'inline' : 'block'
  }
}));

export {Space, MediaSpecificElement};
