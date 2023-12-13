const express = require('express');
const connection = require('./db.js')
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;


const user = require("./User/user")
const bookmark = require("./Bookmark/bookmark")
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use("/user", user);
//app.use("/bookmark", bookmark);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/export', async(req, res) => {
  
  const uuid = uuidv4();
  instances = req.body;
  for (const instance of instances) {
    const { title, url } = instance;
    const query = `INSERT INTO instance (instance_hash, url, title) VALUES ("${uuid}", "${url}", "${title}")`;
    await connection.query(query);
  }
  res.status(200).json(uuid);


});

app.post('/import', async(req, res) => {
  
  uuid =String(req.body.uuid);
  const query = `SELECT url, title FROM instance WHERE instance_hash = "${uuid}"`;
  const [rows, fields] = await connection.query(query);
  res.status(200).json(rows);

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 