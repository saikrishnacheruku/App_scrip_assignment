import React from 'react';

const ProductList = ({ products }: { products: any[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
