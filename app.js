const express = require("express");
const app = express();
const colors = require("colors");
const appRouter = require("./routes/index");
const port = process.env.PORT || 8080;
const db = require("./database");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(appRouter);
app.use("/Images", express.static("./Images"));

app.get('/', (req,res)=>{
  res.send({result: 'success'})
})

app.use("*", (req, res, next) => {
  const err = new Error("Route Not Found");
  err.statusCode = 404;
  next(err);
});

app.use(async (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(500).send("There was an upload error");
  }

  if (req.file) {
    await unlink(req.file.path);
  }
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    error: err.stack,
  });
});

db.sequelize.sync();
db.sequelize
  .authenticate()
  .then(() => console.log("Database Connected".black.bgWhite));

app.listen(port, () => {
  console.log(`server listening on port ${port}`.rainbow);
});
