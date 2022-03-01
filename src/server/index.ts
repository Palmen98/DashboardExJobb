import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config()

const app: Application = express();
const port = 3001 || process.env.DEPLOY_URL;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

app.get('api/distance-measure', 
async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
        message: req.body
        })
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occurred: ${error.message}`);
}