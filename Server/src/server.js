const express = require('express');
const connection = require('./db.js')
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 