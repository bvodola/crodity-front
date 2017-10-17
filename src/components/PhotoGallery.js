import React from 'react';
import Radium from 'radium';

const largeUp = '@media(min-width: 1200px)';
const smallUp = '@media(min-width: 600px)';

const style = {
  imageContainer: {
    margin: '4px',
    borderRadius: '2px',
    overflow: 'hidden',
    display: 'inline-block',
    width: 'calc(33% - 8px)',
    height: '8vh',
    [smallUp]: {
      width: 'calc(20% - 8px)',
      height: '15vw'
    },
    [largeUp]: {
      width: 'calc(33% - 8px)',
      height: '8vw'
    }
  },
  image: {
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    height: '12vh'
  }
}

const PhotoGallery = (props) => (
  <div>
    {props.media.files.map((file,i) =>(
      <div style={style.imageContainer}>
        <img style={style.image} src={file.src} alt={file.alt || ''} />
      </div>
    ))}
  </div>
);

export default Radium(PhotoGallery);
