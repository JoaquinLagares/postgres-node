const express = require("express");
const app = express();
const path = require("node:path");
const usersRouter = require("./routes/usersRoutes");

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", usersRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});