import React from 'react';
import Avatar from './Avatar';

const largeUp = '@media(min-width: 1200px)';
const smallUp = '@media(min-width: 600px)';

const style = {
  container: {
    borderRadius: '2px',
    width: 'calc(33% - 8px)',
    height: '10vh',
    margin: '4px',
    overflow: 'hidden',
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '12px',
    [smallUp]: {
      width: 'calc(20% - 8px)',
      height: '15vw'
    },
    [largeUp]: {
      width: 'calc(33% - 8px)',
      height: '8vw'
    }
  },
  avatar: {
    container: {
      border: 'none',
      width: '80%',
      height: '80%',
      margin: '0px 10% 5px 10%'
    }
  }
}

const UserGallery = (props) => (
  <div>
    {props.users.map((user,i) =>(
      <div style={style.container}>
        <Avatar style={style.avatar} src={user.avatar} />
        {user.name}
      </div>
    ))}
  </div>
);

export default UserGallery;
