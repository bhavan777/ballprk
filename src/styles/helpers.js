import glamorous from 'glamorous';
import {Config} from './config';

const Space = glamorous.div(
  (props) => {
    props.mlS = (props.mlS) ? props.mlS : 0;
    props.mlM = (props.mlM) ? props.mlM : props.mlS;
    props.mlL = (props.mlL) ? props.mlL : props.mlM;

    props.mrS = (props.mrS) ? props.mrS : 0;
    props.mrM = (props.mrM) ? props.mrM : props.mrS;
    props.mrL = (props.mrL) ? props.mrL : props.mrM;

    props.mtS = (props.mtS) ? props.mtS : 0;
    props.mtM = (props.mtM) ? props.mtM : props.mtS;
    props.mtL = (props.mtL) ? props.mtL : props.mtM;

    props.mbS = (props.mbS) ? props.mbS : 0;
    props.mbM = (props.mbM) ? props.mbM : props.mbS;
    props.mbL = (props.mbL) ? props.mbL : props.mbM;

    props.plS = (props.plS) ? props.plS : 0;
    props.plM = (props.plM) ? props.plM : props.plS;
    props.plL = (props.plL) ? props.plL : props.plM;

    props.prS = (props.prS) ? props.prS : 0;
    props.prM = (props.prM) ? props.prM : props.prS;
    props.prL = (props.prL) ? props.prL : props.prM;

    props.ptS = (props.ptS) ? props.ptS : 0;
    props.ptM = (props.ptM) ? props.ptM : props.ptS;
    props.ptL = (props.ptL) ? props.ptL : props.ptM;

    props.pbS = (props.pbS) ? props.pbS : 0;
    props.pbM = (props.pbM) ? props.pbM : props.pbS;
    props.pbL = (props.pbL) ? props.pbL : props.pbM;

    return ({
      maxHeight: props.maxHeight || 'auto',
      overflow: props.scollable ? 'scroll' : 'auto',
      [Config.media.phone]: {
        marginLeft: (props.mlS) ? props.mlS : 0,
        marginRight: (props.mrS) ? props.mrS : 0,
        marginTop: (props.mtS) ? props.mtS : 0,
        marginBottom: (props.mbS) ? props.mbS : 0,
        paddingLeft: (props.plS) ? props.plS : 0,
        paddingRight: (props.prS) ? props.prS : 0,
        paddingTop: (props.ptS) ? props.ptS : 0,
        paddingBottom: (props.pbS) ? props.pbS : 0
      },
      [Config.media.tab]: {
        marginLeft: (props.mlM) ? props.mlM : 0,
        marginRight: (props.mrM) ? props.mrM : 0,
        marginTop: (props.mtM) ? props.mtM : 0,
        marginBottom: (props.mbM) ? props.mbM : 0,
        paddingLeft: (props.plM) ? props.plM : 0,
        paddingRight: (props.prM) ? props.prM : 0,
        paddingTop: (props.ptM) ? props.ptM : 0,
        paddingBottom: (props.pbM) ? props.pbM : 0
      },
      [Config.media.screen]: {
        marginLeft: (props.mlL) ? props.mlL : 0,
        marginRight: (props.mrL) ? props.mrL : 0,
        marginTop: (props.mtL) ? props.mtL : 0,
        marginBottom: (props.mbL) ? props.mbL : 0,
        paddingLeft: (props.plL) ? props.plL : 0,
        paddingRight: (props.prL) ? props.prL : 0,
        paddingTop: (props.ptL) ? props.ptL : 0,
        paddingBottom: (props.pbL) ? props.pbL : 0
      }
    })
  });

export {Space};
