import React from 'react';
import Radium from 'radium';

const web = '@media(min-width: 992px)';

const style = {
  container: {
    marginTop: '-8px',
    width: '100%',
    overflow: 'hidden',
    height: '40vw',
    position: 'relative',
    [web]: {
      height: '30vw',
      marginTop: '0',
    }
  },
  image: {
    width: '100%',
    position: 'absolute',
    left: '-9999px',
    right: '-9999px',
    top: '-9999px',
    bottom: '-9999px',
    margin: 'auto'
  }
}

const Cover = (props) => (
  <div style={style.container}>
    <img style={style.image} src={props.src} alt=""/>
  </div>
);

export default Radium(Cover);
