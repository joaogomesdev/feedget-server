import cors from "cors";
import express from "express";
import { routes } from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(routes);
app.listen(process.env.PORT || 3333, () => {
  console.log("Server running on port 3333");
});
