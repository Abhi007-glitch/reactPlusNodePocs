const connection = require("../model/dbConnection");

const addProduct =async(req,res)=>{
   const data= req.body;
   const {pid,pname,qty,price}= data;
  await connection.query("insert into product values (?,?,?,?)",[pid,pname,qty,price],(err,data,fields)=>{
    if (!err)
    {
      res.status(201).json({result:"added product successfully!!"});
    }
    else 
    {
      res.status(501).json({result:"Internal server error, failed to add product !!"})
    }
  })
    
}

const getProduct =async(req,res)=>{
 
   await connection.query("select * from product where pid=?",[req.params.product],(err,data,fields)=>{
  if (!err)
  {
    console.log(`Product  : ${data}`);
   res.status(200).json({Productist:data});
  }
  else
  {
    console.log(err);
    res.status(500).send(error.message);
  }
    });
 
 
}

const getAllProduct = async (req,res)=>{
  
  try {
    const productList = await connection.query("select * from product");
  if (productList)
  {
    res.status(200).json({Productist:productList});
  }
  } catch (error) {
    console.log(error);
    res.status(500).json({"result":error.message});
  } 
}

const updateProduct = (req,res )=>{

}

const deleteProduct = (req,res)=>{

}

module.exports ={getAllProduct,addProduct,getProduct,updateProduct,deleteProduct};