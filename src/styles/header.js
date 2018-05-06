import glamorous from 'glamorous';

const BHeader = glamorous.header({
  backgroundColor: '#222',
  color: 'white',
  '::after': {
    content: '""',
    clear: 'both',
    display: 'table'
  }
});

const Logo = glamorous.div((props) => ({
  width: 150,
  height: 50,
  backgroundImage: `url(${props.bg})`,
  backgroundSize: '90%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
})
);

const HeaderList = glamorous.ul({
  fontFamily: `'Oswald', sans-serif`,
  listStyle: 'none',
  float: 'right',
  ' li': {
    float: 'left',
    textAlign: 'center',
    lineHeight: '50px',
    minWidth: 40,
    height: 50,
    position: 'relative'
  },
  ' li .fa': {
    lineHeight: '50px'
  },
  ' li a': {
    textDecoration: 'none',
    margin: '0 20px',
    ':first-child': {
      marginLeft: 0
    }
  }
});

export { BHeader, Logo, HeaderList };
