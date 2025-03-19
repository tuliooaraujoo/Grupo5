import cors from "cors";
import express, { json, static as serveStatic } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import account from "./routes/accountRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import investment from "./routes/investmentRoutes.js";
import transaction from "./routes/transactionsRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3010;

app.use(cors());
app.use(json());
app.use(express.json());

app.use("/uploads", serveStatic(join(__dirname, "uploads")));
app.use("/files", fileRoutes);
app.use("/account", account);
app.use("/transactions", transaction);
app.use('/investments', investment);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
