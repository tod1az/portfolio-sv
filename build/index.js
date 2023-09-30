"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.get('/ping', (_, res) => {
    console.log('Ping');
    return res.json({ message: 'pong' });
});
app.listen(PORT, () => {
    console.log(`Listening on PORT ${3001}`);
});
