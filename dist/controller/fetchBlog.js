"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogFetchRouter = express_1.default.Router();
const Article = require("../models/article.model");
const fetchBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("controller accessed");
    try {
        const articles = Article.find({});
        console.log(articles);
        res.sendStatus(200).sendFile("SUCCESS");
    }
    catch (e) {
        res.sendStatus(500);
    }
});
module.exports = fetchBlog;