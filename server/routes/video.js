import express from "express";
import { getallvideo, uploadvideo, incrementViewCount } from "../controllers/video.js";
import upload from "../filehelper/filehelper.js";

const routes = express.Router();

routes.post("/upload", upload.single("file"), uploadvideo);
routes.get("/getall", getallvideo);
routes.post("/views", incrementViewCount);
export default routes;