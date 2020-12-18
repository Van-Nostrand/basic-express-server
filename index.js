const compression = require('compression');
const express = require('express');
const https = require('https');
const app = express();
const path = require("path");
const fs = require('fs');
const PORT = 3000;

app.use(compression());
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
