import React from 'react';
import Radium from 'radium';

const style = {
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '100%',
    border: '5px solid #eee',
    position: 'relative',
    float: 'left'
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

const Avatar = (props) => {
  let { container, image } = props.style || {};
  let containerStyle = { ...style.container, ...container };
  let imageStyle = { ...style.image, ...image };

  return(
    <div style={containerStyle}>
      <img style={imageStyle} src={props.src} alt={props.alt} />
    </div>
  );
};

export default Radium(Avatar);
