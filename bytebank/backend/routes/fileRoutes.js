import express from "express";
import { uploadMiddleware, uploadFile, deleteFile } from "../controllers/fileController.js";

const router = express.Router();

router.post("/upload", uploadMiddleware, uploadFile);
router.delete("/delete-file", deleteFile);

export default router;
