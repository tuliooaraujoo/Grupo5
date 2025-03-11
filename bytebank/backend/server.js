import  express, { json } from "express";
import { static as serveStatic } from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fileRoutes from "./routes/fileRoutes.js";
import account from "./routes/accountRoutes.js"
import transaction from "./routes/transactionsRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(json());
app.use(express.json());

app.use("/uploads", serveStatic(join(__dirname, "uploads")));
app.use("/api/files", fileRoutes);
app.use("/account", account);
app.use("/transactions", transaction);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
