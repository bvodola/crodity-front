import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products}) => (
  <div className="row">
    {products.map((product) => (
      <div className="col s6 m4">
        <ProductItem product={product} />
      </div>
    ))}
  </div>
);

export default ProductList
