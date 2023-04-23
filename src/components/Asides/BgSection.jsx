"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgSection = void 0;
const react_router_dom_1 = require("react-router-dom");
const icon_link_svg_1 = __importDefault(require("/src/assets/svg/icon-link.svg"));
const BgSection_styles_1 = require("./BgSection.styles");
const react_1 = __importDefault(require("react"));
const BgSection = () => {
    let navigate = (0, react_router_dom_1.useNavigate)();
    return (<BgSection_styles_1.BgWrapper>
            <a href="https://compass.uol/en/home/" target="_blank"><img alt="logo" src={icon_link_svg_1.default}/> </a> 
        </BgSection_styles_1.BgWrapper>);
};
exports.BgSection = BgSection;
