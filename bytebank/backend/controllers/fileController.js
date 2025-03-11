import { unlink } from "fs";
import { join } from "path";
import multer, { diskStorage } from "multer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = diskStorage({
  destination: join(__dirname, "../uploads"),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado" });
  }
  const fileUrl = `http://localhost:3001/uploads/${req.file.filename}`;
  res.json({ fileUrl });
};

export const deleteFile = (req, res) => {
  const { filename } = req.body;

  if (!filename) {
    return res.status(400).json({ error: "Nome do arquivo não fornecido" });
  }

  const filePath = join(__dirname, "../uploads", filename);

  unlink(filePath, (err) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao excluir o arquivo", details: err.message });
    }
    res.status(200).json({ message: "Arquivo excluído com sucesso" });
  });
};

export const uploadMiddleware = upload.single("file");
