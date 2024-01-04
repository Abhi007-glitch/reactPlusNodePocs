import React from 'react'

function ProductList({ products }) {
  return (
    <table>
        <thead>
            <tr>
            
                <th>Product Name</th>
                <th>Price</th>
                <th>ExpiryDate Date</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index) => (
                <tr key={index}>
               
                    <td>{product.pname}</td>
                    <td>{product.price}</td>
                    <td>{product.expiryDate}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
}

export default ProductList