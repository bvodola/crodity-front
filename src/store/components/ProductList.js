import React from 'react';
import ProductItem from './ProductItem';
import FontIcon from 'material-ui/FontIcon';

const products = [
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg'
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg'
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg'
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg'
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg'
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg'
  },
]

const ProductList = () => {
  return(
    <div className="row">
      <div style={{padding: '8px', height: '30px'}}>
        <FontIcon style={{ color: '#ddd', float: 'left', position: 'absolute'}} className='material-icons'>search</FontIcon>
        <input placeholder='Pesquisar em meus anúncios' type="text" style={{width: '100%', outline: 'none', fontSize: '16px', height: '22px', textIndent: '24px', fontFamily: 'Roboto', marginTop: '-4px'}} />
      </div>
      {products.map((product) => (
        <div className="col s6 m4">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList;
