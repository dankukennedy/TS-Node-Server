"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExample = void 0;
const getExample = (req, res) => {
    res.status(200).json({ message: "This is am example of endpoint" });
};
exports.getExample = getExample;
