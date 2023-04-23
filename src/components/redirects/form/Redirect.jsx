"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redirect = void 0;
const RedirectWrapper_1 = require("./RedirectWrapper");
const react_1 = __importDefault(require("react"));
const Redirect = ({ page, text }) => {
    return (<RedirectWrapper_1.RedirectWrapper>
      <p>{text}  <a href={`/${page}`}>{page}</a></p>
    </RedirectWrapper_1.RedirectWrapper>);
};
exports.Redirect = Redirect;
//Already have an account?
