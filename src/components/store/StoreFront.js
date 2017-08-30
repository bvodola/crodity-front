import React from 'react';
import Radium from 'radium';

import FontIcon from 'material-ui/FontIcon';

import ProductList from './ProductList';
import SearchBox from '../SearchBox';
import Avatar from '../Avatar';
import Cover from '../Cover';
import Grade from '../Grade';

/* ****** */
/* Styles */
/* ****** */
const web = '@media(min-width: 992px)';

const style = {

  header: {
    backgroundColor: '#fff',
    margin: '8px 0 8px 0',
    boxSshadow: '1px 1px 3px #ddd',
    borderRadius: '2px'
  },
  info: {
    container: {
      position: 'relative',
      float: 'left',
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Roboto',
      [web]: {
        width: '40%',
        textAlign: 'left',
        marginTop: '-55px'
      }
    },
    title: {
      fontWeight: 100,
      margin: 0
    },
    description: {
      color: '#aaa',
      fontWeight: 100,
      fontSize: '12px'
    }
  },
  search: {
    position: 'relative',
    float: 'left',
    width: '100%',
    [web]: {
      float: 'right',
      width: '40%'
    }
  }
}

/* ********* */
/* Component */
/* ********* */

const StoreFront = (props) => {
  let { store, products } = props;
  return(
    <div>
      {/* Cover */}
      <div className="row">
        <Cover src={store.cover} />
      </div>

      {/* Header */}
      <div className="row" style={style.header}>

        {/* Avatar */}
        <Avatar src={store.avatar} />

        {/* Store Info */}
        <div style={style.info.container}>
          <Grade value={store.grade} />
          <h1 style={style.info.title}>{store.title}</h1>
          <p style={style.info.description}>{store.description}</p>
        </div>

        {/* Search Box */}
        <div style={style.search}>
          <SearchBox />
        </div>

      </div>

      {/* Product List */}
      <ProductList products={products} />
    </div>
  )
}

export default Radium(StoreFront);
