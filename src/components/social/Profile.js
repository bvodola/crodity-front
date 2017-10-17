import React from 'react';
import Radium from 'radium';

import Card from 'material-ui/Card';

import Cover from '../Cover';
import Avatar from '../Avatar';
import CardTitle from '../CardTitle';
import PhotoGallery from '../PhotoGallery';
import UserGallery from '../UserGallery';

import HeaderMenu from './HeaderMenu';

// ======
// Styles
// ======
const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';
const mediumDown = '@media(max-width: 1199px)';

const style = {
  header: {
    position: 'relative',
    marginTop: '-70px',
    marginBottom: '70px',
    [mediumDown]: {
      marginTop: 0,
      marginBottom: 0
    }
  },
  avatar: {
    margin: '-60px 0 0 50%',
    width: '100px',
    height: '100px',
    transform: 'translateX(-50%)',
    position: 'absolute',
    zIndex: 1,
    [largeUp]: {
      width: '160px',
      height: '160px',
      margin: '-15px 20px 0 20px',
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
      marginTop: '55px',
      [largeUp]: {
        marginTop: '25px',
        textAlign: 'left',
        width: '40%',
        marginTop: '20px'
      },
      [large]: {
        width: '35%'
      }
    },
    title: {
      fontWeight: 100,
      color: '#000',
      margin: 0,
      [large]: {
        fontSize: '25px'
      },
      [largeUp]: {
        color: '#fff'
      }
    }
  },
  sideIcons: {
    container: {
      position: 'absolute',
      color: '#fff',
      left: '5px',
      top: '-13px',
      [largeUp]: {
        left: 'unset',
        right: '10px',
        top: '20px',
        color: '#ffca43'
      }
    },
    icon: {
      marginLeft: '10px',
      cursor: 'pointer',
      backgroundColor: '#ffca43',
      borderRadius: '100%',
      padding: '7px',
      [largeUp]: {
        backgroundColor: 'transparent'
      }
    }
  },
  infoAndIcons: {
    position: 'relative',
    float: 'left',
    width: '100%',
    height: '77px',
    [largeUp]: {
      width: 'calc(100% - 210px)',
      marginLeft: '210px'
    },
    [large]: {
      width: 'calc(100% - 150px)',
      marginLeft: '150px'
    }
  },

  mainContainer: {
    position: 'absolute',
    width: '100%',
    marginTop: '8px',
    marginBottom: '16px'
  },
  description: {
    padding: '32px',
    fontSize: '14px',
    lineHeight: '28px'
  },
  descriptionIcon: {
    fontSize: '17px',
    transform: 'translateY(15%)',
    marginRight: '10px'
  },

  cardTitle: {
    container: {
      padding: '10px',
      margin: '8px 0 0 0',
      fontSize: '20px'
    },
    icon: {
      color: '#ffca43',
      transform: 'translateY(16%)',
      marginRight: '5px'
    },
    subtitle: {
      color: '#aaa',
      fontSize: '12px',
      marginLeft: '5px'
    }
  }
}

// =========
// Component
// =========
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchor: event.currentTarget,
    });
  };

  render() {
    const { user } = this.props;

    return(
      <div>
        {/* Cover */}
        <div className="row">
          <Cover src={user.cover} />
        </div>

        <div className="row" style={style.header}>
          {/* Avatar */}
          <div style={style.avatar}>
            <Avatar src={user.avatar} />
          </div>

          <div style={style.infoAndIcons}>
            {/* Store Info */}
            <div style={style.info.container}>
              <h1 style={style.info.title}>{user.name}</h1>
            </div>

            {/* Side Icons */}
            <div style={style.sideIcons.container}>
              <span style={style.sideIcons.icon} className="material-icons">remove_red_eye</span>
              <span style={style.sideIcons.icon} className="material-icons">settings</span>
            </div>
          </div>

        </div>

        {/* Header Menu */}

        <HeaderMenu followers={user.followers} following={user.following} total_media={user.media.total} />

        <div className="row" style={style.mainContainer}>
          <div className="col l5">

            {/* Descrition Card */}
            <Card>
              <div style={style.description}>
              {user.info.work ? (<span><span style={style.descriptionIcon} className="material-icons">work</span> {user.info.work} <br/></span>) : ''}
              {user.info.school ? (<span><span style={style.descriptionIcon} className="material-icons">school</span>{user.info.school}<br/></span>): ''}
              {user.info.location ? (<span><span style={style.descriptionIcon} className="material-icons">location_on</span>{user.info.location}<br/></span>): ''}
              {user.info.relationship_status ? (<span><span style={style.descriptionIcon} className="material-icons">favorite</span>{user.info.relationship_status}<br/></span>): ''}
              {user.type ? (<span><span style={style.descriptionIcon} className="material-icons">person</span>Tipo de usuário: {user.type}</span>): ''}
              </div>
            </Card>

            {/* Photos Card */}
            <Card>
              <div>
                <CardTitle
                  icon={'insert_photo'}
                  title={'Fotos'}
                  subtitle={68}
                />
                <PhotoGallery media={user.media} />
              </div>
            </Card>

            <Card>
              <div>
                <CardTitle
                  icon={'insert_photo'}
                  title={'Seguidores'}
                  subtitle={2032}
                />
                <UserGallery users={user.friends} />
              </div>
            </Card>

          </div>
          <div className="col l7">
          </div>
        </div>

      </div>
    );
  }
}



export default Radium(Profile);
