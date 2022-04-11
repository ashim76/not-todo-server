const { application } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

//api end points
app.get("/api/v1/", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});
// app.get("/api/v2/")

app.use("/", (req, res) => {
  //   const person = {
  //     Fname: "Ashim",
  //     Lname: "Poudel",
  //   };
  res.json({ message: "You have reached to the api of not to do application" });
});

app.listen(PORT, (erro) => {
  erro
    ? console.log(error)
    : console.log(`server is running http://localhost:${PORT}`);
});
