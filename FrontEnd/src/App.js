import React, { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
    
    const fetchData = async()=>{
        const res= await axios.get("http://localhost:4000/product");
      
        if (res.data!=null)
        {
            setProducts(res.data);
        }
    }
    useEffect(()=>{
       fetchData();
    },[]);

    const addProduct = async(product) => {

        const res = await axios.post("http://localhost:4000/product",product);
       
        setProducts([...products, res.data]);
        
    };
    

    return (
        <div>
            <AddProduct AddProduct={addProduct} />
            <ProductList products={products} />
        </div>
    );
};

export default App;