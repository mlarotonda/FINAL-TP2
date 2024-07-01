import express from "express";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.use((req, res) => {
  res.status(400).send("Endpoint Not Found");
});

app.listen(8080, () => {
  console.log(`🚀 ~ app.listen ~ http://localhost:8080`);
});
