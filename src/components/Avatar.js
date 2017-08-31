import React from 'react';
import Radium from 'radium';

const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';

const style = {
  container: {
    margin: '-60px 0 0 50%',
    width: '100px',
    height: '100px',
    transform: 'translateX(-50%)',
    position: 'relative',
    float: 'left',
    overflow: 'hidden',
    borderRadius: '100%',
    border: '5px solid #eee',
    [largeUp]: {
      width: '140px',
      height: '140px',
      margin: '-80px 20px 0 20px',
      transform: 'translateX(0)',
    },
    [large]: {
      width: '100px',
      height: '100px',
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

const Avatar = (props) => (
  <div style={style.container}>
    <img style={style.image} src={props.src} alt={props.alt} />
  </div>
);

export default Radium(Avatar);
