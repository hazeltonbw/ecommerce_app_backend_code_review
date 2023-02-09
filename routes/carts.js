const {
  addProductToCartController,
  getCartsController,
  getCartByUserIdController,
  getProductsInCartController,
  updateProductsInCartController,
  deleteProductInCartController,
} = require("../controllers/carts");

const cartsRouter = require("express").Router();

module.exports = (app) => {
  app.use("/carts", cartsRouter);

  cartsRouter.get("/", getCartsController);

  cartsRouter.get("/:userId", getCartByUserIdController);

  cartsRouter.post("/:cartId", addProductToCartController);

  cartsRouter.put("/:cartId", updateProductsInCartController);

  cartsRouter.delete("/:cartId", deleteProductInCartController);  

  cartsRouter.get("/:userId/products", getProductsInCartController);
}