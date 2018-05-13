import glamorous from 'glamorous';
import {Config} from '../styles/config';
const DropDownWrapper = glamorous.div((props) => ({
  width: '100%',
  paddingLeft: props.noPadding === true ? 0 : 15,
  paddingRight: props.noPadding === true ? 0 : 15,
  borderCollapse: 'collapse',
  color: Config.colors.text.teal,
  position: 'relative',
  outline: 0,
  borderLeft: (props.leftBordered === true) ? `2px solid` : 0,
  borderColor: (props.leftBordered === true) ? Config.colors.border.teal : Config.colors.border.transparent,
  ' .stick-right': {
    position: 'absolute',
    right: (props.hasLabel === undefined) ? 12 : 30,
    top: (props.hasLabel === undefined) ? 20 : 45,
    height: 10,
    width: 10
  }
})
);
const DropDownLabel = glamorous.input({
  color: Config.colors.text.dark,
  lineHeight: '50px',
  height: 50,
  backgroundColor: Config.colors.bg.transparent,
  paddingLeft: 15,
  fontWeight: Config.fontWeights.lt,
  fontSize: Config.fontSizes.h6,
  border: `1px solid ${Config.colors.border.teal}`,
  display: 'inline-block',
  width: '100%',
  '::selection': {
    backgroundColor: Config.colors.bg.transparent
  }
});

const DropDownList = glamorous.ul((props) => ({
  listStyle: 'none',
  zIndex: 1,
  maxHeight: props.isOpen === true ? 192 : 0,
  overflow: 'auto',
  position: 'absolute',
  top: (props.hasLabel === undefined) ? 50 : 76,
  width: props.noPadding === true ? '100%' : 'calc(100% - 30px)',
  lineHeight: 3,
  backgroundColor: Config.colors.bg.light1,
  boxShadow: Config.shadows.inputShadow,
  transition: 'all 0.1s linear',
  opacity: props.isOpen === true ? 1 : 0,
  ' li': {
    paddingLeft: 15,
    cursor: 'pointer',
    boxShadow: Config.shadows.lightBottomShadow,
    color: Config.colors.text.dark1,
    fontWeight: Config.fontWeights.lt,
    transition: 'all 0.1s linear',
    ':hover': {
      transition: 'all 0.1s linear',
      color: Config.colors.text.white,
      backgroundColor: Config.colors.bg.teal
    },
    '.active': {
      transition: 'all 0.1s linear',
      color: Config.colors.text.white,
      backgroundColor: Config.colors.bg.teal
    }
  }
}));

export {DropDownWrapper, DropDownLabel, DropDownList};
