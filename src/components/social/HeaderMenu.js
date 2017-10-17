import React from 'react';
import Radium from 'radium';
import Menu from './Menu';


const smallDown = '@media(max-width: 599px)';
const mediumDown = '@media(max-width: 1199px)';
const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';

const cardLayout = {
  backgroundColor: '#fff',
  boxShadow: '1px 1px 3px #ddd',
  borderRadius: '2px',
  fontFamily: 'Roboto'
}
const style = {
  container: {
    ...cardLayout,
    margin: '-70px 0 0 0',
    paddingRight: '10px',
    height: '54px',
    [mediumDown]: {
      paddingTop: '100px',
      height: 'auto',
      textAlign: 'center'
    }
  },
  item: {
    verticalAlign: 'top',
    height: '30px',
    padding: '10px 20px',
    display: 'inline-block',
    fontFamily: 'Roboto',
    fontSize: '14px',
    textDecoration: 'none',
    color: '#ffca43',
    textTransform: 'uppercase',
    textAlign: 'center',
    [smallDown]: {
      padding: '10px 5px',
      fontSize: '12px',
    },
    [large]: {
      marginRight: '10px'
    },
    [largeUp]: {
      marginTop: '7px',
      marginRight: '7px',
      marginBottom: '0px',
      padding: '10px 20px',
      textAlign: 'left',
      fontSize: '14px',
      height: 'auto'
    }
  },
  activeItem: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    backgroundColor: '#f6f6f6',
    boxShadow: '0px 13px #f6f6f6, inset 2px 2px 2px #eee'
  },
  firstItem: {
    marginLeft: '0',
    [largeUp]: {
      marginLeft: '210px',
      marginTop: '7px',
      marginRight: '7px',
      marginBottom: '0px',
      padding: '10px 20px',
      textAlign: 'left',
      fontSize: '14px',
      height: 'auto'
    },
    [large]: {
      marginLeft: '120px'
    }
  },
  itemNumber: {
    color: '#666',
    display: 'block',
    [largeUp]: {
      marginLeft: '3px',
      display: 'inline-block'
    }
  }
}

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick(ev) {
    ev.preventDefault();

    this.setState({
      open: true,
      anchor: ev.currentTarget
    });
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
    console.log('handleRequestClose');
  }

  render() {
    const { followers, following, total_media } = this.props
    return(
      <div className="row" style={style.container}>
        <a style={{...style.item, ...style.activeItem, ...style.firstItem}} href="#">Perfil</a>
        <a style={style.item} href="#">Seguidores <span style={style.itemNumber}>{followers}</span></a>
        <a style={style.item} href="#">Seguindo  <span style={style.itemNumber}>{following}</span></a>
        <a style={style.item} href="#">Fotos <span style={style.itemNumber}>{total_media}</span></a>
        <a style={style.item} href="#" onClick={(ev) => this.handleClick(ev)} >Mais</a>
        <Menu style={{cursor: 'pointer'}} open={this.state.open} anchor={this.state.anchor} onRequestClose={() => this.handleRequestClose()} />
      </div>
    );
  }
}

export default Radium(HeaderMenu);
