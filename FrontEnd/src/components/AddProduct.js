import React, { useState } from 'react'

function AddProduct({AddProduct}) {
  
    //"pname": "Flag Hoisting",
    //"": "1",
    //"expiryDate": "15-08-1947"
    
    const [pname, setPname] = useState('');
    const [price, setPrice] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        AddProduct({ pname,price , expiryDate });
        setPname('');
        setPrice('');
        setExpiryDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input type="text" placeholder="Product name" value={pname} onChange={(e) => setPname(e.target.value)} />
            <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProduct;