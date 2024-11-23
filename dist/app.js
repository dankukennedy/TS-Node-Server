"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const example_route_1 = __importDefault(require("./routes/example.route"));
const app = (0, express_1.default)();
const PORT = 3000;
//Middleware
app.use(express_1.default.json());
//Routes
app.get("/", (req, res) => {
    res.status(200).send("Welcome to TypeScript Node Server");
});
//Error Handling Middleware
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send("Something went wrong!");
});
//Start the server
app.listen(PORT, () => {
    console.log(`Sever is running on http://localhost:${PORT}`);
});
//Routing
app.use("api", example_route_1.default);
