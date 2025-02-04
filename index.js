const compression = require('compression');
const express = require('express');
const app = express();
const path = require("path");

app.use(compression());
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`app running`);
});
