import express from "express";
import dotenv from "dotenv";
import path from "path";
import router from "./routes/submit_form.js";
// cors();
dotenv.config();
const app = express();
const __dirname = path.resolve();
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
app.listen(process.env.PORT || 5000, () =>
  console.log(`Server run on port ${process.env.PORT || 5000}`)
);
