import React from 'react';
import ProductCard from './ProductCard';



function ProductGrid({ products,showFilter }) {
  return (
    <div className={`row ${showFilter ? 'row-cols-2 row-cols-md-3' : 'row-cols-2 row-cols-md-4'} g-4`}>
      {products.map((product, index) => (
          <ProductCard
          key={index}
            image={product.image}
            title={product.name}
            status={product.status}
            isOutOfStock={product.isOutOfStock}
            price={product.price}
          />
      ))}
    </div>
   
  );
}

export default ProductGrid;
