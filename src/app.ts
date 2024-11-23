import { error } from "console";
import express, { Application,Request, Response, NextFunction } from "express";
import  exampleRoute  from "./routes/example.route";

const app:Application = express();
const PORT = 3000;

//Middleware
app.use(express.json());


//Routes
app.get("/", (req:Request, res:Response)=>{
 res.status(200).send("Welcome to TypeScript Node Server");
});

//Error Handling Middleware
app.use((error:Error, req:Request, res:Response, next:NextFunction)=>{
    console.error(error.stack);
    res.status(500).send("Something went wrong!");
});

//Start the server
app.listen(PORT,()=>{
    console.log(`Sever is running on http://localhost:${PORT}`);
});

//Routing
app.use("api",exampleRoute);