const express = require("express");
const fs = require("fs");
const app = express();
const port = 5001;
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:5173','https://www.google.com'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.post("/saveData", (req, res) => {
  const data = req.body;
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error saving data" });
    } else {
      res.json({ message: "Data saved successfully" });
    }
  });
});
app.get("/getData", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error retrieving data" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
