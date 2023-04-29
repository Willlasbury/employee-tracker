const express = require("express");
const init = require('./features/prompts')
const cors = require("cors")


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allRoutes = require("./features/crud");
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("listening on port http://localhost:" + PORT);
})

init()