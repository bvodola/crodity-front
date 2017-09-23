import React from 'react';
import Radium from 'radium';

import Cover from '../Cover';
import Avatar from '../Avatar';

/* ****** */
/* Styles */
/* ****** */
const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';
const cardLayout = {
  backgroundColor: '#fff',
  boxShadow: '1px 1px 3px #ddd',
  borderRadius: '2px',
  fontFamily: 'Roboto'
}

const style = {
  headerMenu: {
    container: {
      margin: '-70px 0 0 0',
      ...cardLayout,
      paddingRight: '10px',
      height: '54px'
    },
    item: {
      margin: '7px 40px 7px 0',
      padding: '10px 20px',
      display: 'inline-block',
      fontFamily: 'Roboto',
      fontSize: '14px',
      textDecoration: 'none',
      color: '#ffca43',
      textTransform: 'uppercase'
    },
    activeItem: {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      backgroundColor: '#f6f6f6',
      boxShadow: '0px 13px #f6f6f6, inset 2px 2px 2px #eee'
    }
  },
  avatar: {
    margin: '-60px 0 0 50%',
    width: '100px',
    height: '100px',
    transform: 'translateX(-50%)',
    position: 'relative',
    float: 'left',
    [largeUp]: {
      width: '160px',
      height: '160px',
      margin: '-80px 20px 0 20px',
      transform: 'translateX(0)',
    },
    [large]: {
      width: '100px',
      height: '100px',
    }
  },
  info: {
    container: {
      position: 'relative',
      float: 'left',
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Roboto',
      marginTop: '25px',
      [largeUp]: {
        textAlign: 'left',
        width: '40%',
        marginTop: '-55px'
      },
      [large]: {
        width: '35%'
      }
    },
    title: {
      fontWeight: 100,
      color: '#fff',
      margin: 0,
      [large]: {
        fontSize: '25px'
      }
    }
  },
  description: {
    fontWeight: 100,
    fontSize: '12px',
    ...cardLayout
  }
}

const Profile = () => (
  <div>
    {/* Cover */}
    <div className="row">
      <Cover src='https://static.pexels.com/photos/20974/pexels-photo.jpg' />
    </div>

    <div className="row">

      {/* Avatar */}
      <div style={style.avatar}>
        <Avatar src='https://i.pinimg.com/originals/fc/03/f6/fc03f6900db30feae108d558690ca748.jpg' />
      </div>

      {/* Store Info */}
      <div style={style.info.container}>
        <h1 style={style.info.title}>Sofia Vergara</h1>
      </div>

    </div>

    {/* Header Menu */}
    <div className="row" style={style.headerMenu.container}>
      <a style={{...style.headerMenu.item, ...style.headerMenu.activeItem}} href="#">Perfil</a>
      <a style={style.headerMenu.item} href="#">Followers</a>
      <a style={style.headerMenu.item} href="#">Follows</a>
      <a style={style.headerMenu.item} href="#">Fotos</a>
      <a style={style.headerMenu.item} href="#">Mais</a>
    </div>

    <div className="row">
      <div className="col l5">
        <div style={style.description}>
          Fotógrafa profissional<br/>
          Universidade das Américas<br/>
          São Paulo - SP<br/>
          Solteira<br/>
          Tipo de usuário: Premium
        </div>
      </div>
      <div className="col l7">

      </div>
    </div>

  </div>
);

export default Radium(Profile);
