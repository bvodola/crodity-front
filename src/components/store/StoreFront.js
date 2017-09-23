import React from 'react';
import Radium from 'radium';

import ProductList from './ProductList';
import SearchBox from '../SearchBox';
import Avatar from '../Avatar';
import Cover from '../Cover';
import Grade from '../Grade';

/* ****** */
/* Styles */
/* ****** */
const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';

const style = {

  header: {
    backgroundColor: '#fff',
    margin: '8px 0 8px 0',
    boxShadow: '1px 1px 3px #ddd',
    borderRadius: '2px'
  },
  avatar: {
    margin: '-60px 0 0 50%',
    width: '100px',
    height: '100px',
    transform: 'translateX(-50%)',
    position: 'relative',
    float: 'left',
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
        marginTop: '-40px'
      },
      [large]: {
        width: '35%'
      }
    },
    title: {
      fontWeight: 100,
      margin: 0,
      [large]: {
        fontSize: '25px'
      }
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
    [large]: {
      width: '45%'
    },
    [largeUp]: {
      width: '40%',
      float: 'right'
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
        <div style={style.avatar}>
          <Avatar src={store.avatar} />
        </div>

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
