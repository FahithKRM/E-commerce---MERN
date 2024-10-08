import express from 'express';
import { addDress, listDress , removeDress} from '../controllers/dressController.js';
import multer from 'multer'; // image storage sys


const dressRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storage:storage});

/**
 * @swagger
 * /api/dress/add:
 *   post:
 *     summary: Add a new dress item
 *     description: Adds a new dress item to the catalog.
 *     tags:
 *       - Dress
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Dress Added
 *       500:
 *         description: Server error
 */
dressRouter.post("/add", upload.single("image"), addDress);


/**
 * @swagger
 * /api/dress/list:
 *   get:
 *     summary: List all dress items
 *     description: Returns a list of all dress items in the catalog.
 *     tags:
 *       - Dress
 *     responses:
 *       200:
 *         description: A list of dresses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dress'
 *       500:
 *         description: Server error
 */
dressRouter.get("/list", listDress);


/**
 * @swagger
 * /api/dress/remove:
 *   post:
 *     summary: Remove a dress item
 *     description: Removes a dress item from the catalog.
 *     tags:
 *       - Dress
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dress Removed
 *       500:
 *         description: Server error
 */
dressRouter.post("/remove", removeDress);


export default dressRouter;