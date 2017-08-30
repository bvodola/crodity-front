import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ItemMenu from './ItemMenu';

const style = {
  card: {
    marginBottom: '5px'
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
        position: 'relative'
      },
      image: {
        height: '30vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)'
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
  }
}

const ProductItem = (props) => {
  return(
    <Card style={style.card}>
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

export default ProductItem;
