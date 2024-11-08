const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post("/save-form", (req, res) => {
  const { username, email } = req.body;
  const userData = `Username = ${username} Email = ${email}`;

  fs.appendFile(
    path.join("form-data.txt"),
    `\n${userData}`,
    (err) => {
      if (err) res.send("Error saving data");
      res.send("Data Saved successfully");
    }
  );
});

app.listen(PORT, () => {
  console.log(`app running at port ${PORT}`);
});
