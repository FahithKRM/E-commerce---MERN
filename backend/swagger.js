import swaggerJsdoc from 'swagger-jsdoc';
import { version } from 'mongoose';

// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Your API Title',
//       version: '1.0.0',
//       description: 'API documentation',
//     },
//     servers: [
//       {
//         url: 'http://localhost:5000',
//       },
//     ],
//   },
//   apis: ['./routes/*.js'], 
// };

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Style Hub Api Doc",
            version: "0.1",
            description: "This is a simple StyleHub API application made with Express and document with Swagger",
            contact: {
                name: "Style Hub",
                url: "http://localhost:5173",
            },
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
module.exports = specs;
