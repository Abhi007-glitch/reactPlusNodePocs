const express = require("express");
const ProductRouter = express.Router();

const {getAllProduct,addProduct,getProduct,updateProduct,deleteProduct} = require("../controllers/ProductController");


//ProductRouter.get("/allProduct",getAllProduct);

ProductRouter.route("/").get(getAllProduct)
                        .post(addProduct);

ProductRouter.route("/:product").get(getProduct)
                                .patch(updateProduct)
                                .delete(deleteProduct);

module.exports = ProductRouter;