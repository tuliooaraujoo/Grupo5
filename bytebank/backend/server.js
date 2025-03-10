import express, { json } from "express";
import { static as serveStatic } from "express";
import multer, { diskStorage } from "multer";
import { join } from "path";
import cors from "cors";
import { unlink } from "fs";

const app = express();
const PORT = 3001;

// Middleware para permitir requisições do frontend
app.use(cors());
app.use(json());

// Configuração do armazenamento do Multer
const storage = diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Servir arquivos estáticos da pasta uploads
app.use("/uploads", serveStatic("uploads"));

// Rota para upload de arquivo
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado" });
  }
  const fileUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
  res.json({ fileUrl });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Rota para excluir um arquivo da pasta uploads
app.delete("/delete-file", (req, res) => {
  const { filename } = req.body;

  if (!filename) {
    return res.status(400).json({ error: "Nome do arquivo não fornecido" });
  }

  const filePath = join(__dirname, "uploads", filename);

  unlink(filePath, (err) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao excluir o arquivo" });
    }
    res.status(200).json({ message: "Arquivo excluído com sucesso" });
  });
});
