import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dressRouter from "./routes/dressRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

// app config
const app = express();
const PORT = process.env.PORT || 5000;


// middleware
app.use(express.json()); // req from the frontend to backend
app.use(cors());


// db connection
connectDB();

// api endpoint
app.use("/api/dress", dressRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


// swagger ui connection
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Style Hub API',
            version: '1.0.0',
            description: 'API documentation for the Style Hub Cloths E-commerce application',
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Local server',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.get('/', (req, res) => {
    res.send("Server successfully connected...");
});

app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}/api-docs`);
});