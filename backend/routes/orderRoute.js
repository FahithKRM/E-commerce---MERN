import express from "express";
import authMiddleware from "../middleware/auth.js";
import { listOrders, verifyOrder, placeOrder, updateStatus, userOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

/**
 * @swagger
 * /api/order/place:
 *   post:
 *     summary: Place a new order
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     price:
 *                       type: number
 *                     quantity:
 *                       type: number
 *               amount:
 *                 type: number
 *               address:
 *                 type: object
 *                 properties:
 *                   firstname:
 *                     type: string
 *                   lastname:
 *                     type: string
 *                   email:
 *                     type: string
 *                   street:
 *                     type: string
 *                   city:
 *                     type: string
 *                   district:
 *                     type: string
 *                   zipcode:
 *                     type: string
 *                   country:
 *                     type: string
 *                   phone:
 *                     type: string
 *     responses:
 *       200:
 *         description: Order placed
 *       500:
 *         description: Server error
 */
orderRouter.post("/place", authMiddleware, placeOrder);



/**
 * @swagger
 * /api/order/verify:
 *   post:
 *     summary: Verify an order payment
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               success:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order payment verified
 *       500:
 *         description: Server error
 */
orderRouter.post("/verify", verifyOrder);



/**
 * @swagger
 * /api/order/userorders:
 *   post:
 *     summary: Get orders of a user
 *     tags:
 *       - Orders
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
 *         description: User orders
 *       500:
 *         description: Server error
 */
orderRouter.post("/userorders", authMiddleware, userOrders);



/**
 * @swagger
 * /api/order/list:
 *   get:
 *     summary: List all orders
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: A list of orders
 *       500:
 *         description: Server error
 */
orderRouter.get("/list", listOrders);



/**
 * @swagger
 * /api/order/status:
 *   post:
 *     summary: Update order status
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order status updated
 *       500:
 *         description: Server error
 */
orderRouter.post("/status", updateStatus);


export default orderRouter;
