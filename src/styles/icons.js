import glamorous from 'glamorous';

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
  backgroundColor: '#fff'
});

export {UserIcon, VerticalSeparator};
