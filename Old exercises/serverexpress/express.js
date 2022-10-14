"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var app = (0, express_1.default)();
app.get("/", function (request, response) {
    response.send("Up and running");
});
var port = 3000;
app.listen(port, function () {
    console.log("[server]: server is running at http://localhost:".concat(port));
});
