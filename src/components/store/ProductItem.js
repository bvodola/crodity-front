import React from 'react';
import Radium from 'radium';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ItemMenu from './ItemMenu';

const web = '@media(min-width: 992px)';

const style = {
  card: {
    marginBottom: '5px',
    position: 'relative'
  },
  product: {
    content: {
      padding: '8px'
    },
    likes: {
      color: '#ffca43',
      fontSize: '14px',
      position: 'absolute',
      top: '2px',
      right: '3px',
      zIndex: 1
    },
    media: {
      container: {
        height: '30vw',
        overflow: 'hidden',
        position: 'relative',
        [web]: {
          height: '20vw'
        }
      },
      image: {
        height: '30vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        [web]: {
          height: '20vw'
        }
      }

    },
    title: {
      fontSize: '12px',
      margin: '0',
      height: '34px'
    },
    price: {
      color: '#ffca43',
      margin: 0
    },
    menu: {
      textAlign: 'right'
    }
  },
  overlay: {
    container: {
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.3)',
      zIndex: 9999,
      padding: 0,
      position: 'absolute',
    },
    text: {
      transform: 'rotate(-31deg)',
      top: '45%',
      position: 'absolute',
      float: 'left',
      textAlign: 'center',
      zIndex: 1,
      width: '100%',
      color: 'rgba(255,255,255,0.8)',
      fontWeight: 'bold',
      fontSize: '20px',
      [web]: {
        fontSize: '30px'
      }
    }
  }
}

const ProductItem = (props) => {

  let soldOut = props.product.sold_out;

  let overlay = () => {
    return soldOut ?
    (
      <div style={style.overlay.container}>
        <span style={style.overlay.text}>ESGOTADO</span>
      </div>
    ) :
    null;
  }

  return(
    <Card style={style.card}>
      {overlay()}
      <div style={style.product.media.container}>
        <span style={style.product.likes} >{props.product.likes} &#9829;</span>
        <img src={props.product.image} alt="" style={style.product.media.image} />
      </div>

      <div style={style.product.content}>
        <div className='row'>
          <div className="col s9">
            <h2 style={style.product.title}>{props.product.title}</h2>
            <p style={style.product.price}>{props.product.price}</p>
          </div>
          <div className="col s3" style={style.product.menu}>
            <ItemMenu />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Radium(ProductItem);
