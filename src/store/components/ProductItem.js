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
      borderTop: '3px solid rgb(204, 204, 204)',
      padding: '8px'
    },
    title: {
      fontSize: '14px',
      margin: '0'
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
      <CardMedia>
        <img src={props.product.image} alt="" />
      </CardMedia>

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
