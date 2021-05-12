"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
const react_1 = __importDefault(require("react"));
const Hello = ({ name }) => {
    if (!name) {
        name = 'Mundo';
    }
    return (react_1.default.createElement("h1", null,
        "\u00A1\u00A1Hola ",
        name,
        "!!"));
};
exports.Hello = Hello;
