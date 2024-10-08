import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

/**
 * @swagger
 * /api/cart/add:
 *   post:
 *     summary: Add an item to the cart
 *     tags:
 *       - Cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               itemId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item added to cart
 *       500:
 *         description: Server error
 */
cartRouter.post("/add", authMiddleware, addToCart);

/**
 * @swagger
 * /api/cart/remove:
 *   post:
 *     summary: Remove an item from the cart
 *     tags:
 *       - Cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               itemId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item removed from cart
 *       500:
 *         description: Server error
 */
cartRouter.post("/remove", authMiddleware, removeFromCart);

/**
 * @swagger
 * /api/cart/get:
 *   post:
 *     summary: Get cart data
 *     tags:
 *       - Cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cart data retrieved
 *       500:
 *         description: Server error
 */
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;
