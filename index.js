const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express();
const db = require("./app/db_init");
const org = require('./app/routes/organization')
const port = 3000

dotenv.config()
app.use(bodyParser.json())
db.sequelize.sync();

app.get("/", async (req, res) => {

  let error
  if (!error) {
    res.send(`appid:  home page says hello!`)
  }
})

app.use('/org', org)


app.listen(port, () => console.log(`Server started on port 3000`))

module.exports = app
module.exports.port = port