const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const port = process.env.PORT || 3000;

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Vera Hunt Catering",
    name: " Darrell Smith",
    link0: "/",
    link1: "/",
    link2: "/about",
    link3: "/contact"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Vera Hunt Catering",
    name: " Darrell Smith",
    link0: "/",
    link1: "/",
    link2: "/about",
    link3: "/contact",

    title2: "V's Homemade",

    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa, deserunt error a praesentium, assumenda corporis hic animi aperiam exercitationem, facere ex laboriosam. Praesentium non vero aperiam ipsa, odit veritatis!",

    title3: "What The Clients Are Saying",

    paragraph2:
      "Tyra: I love your lemon cake it's my favorite desert.",

    paragraph3:
      "Jane: I really enjoy all your desserts and you make them so moist and delicious."
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Vera Hunt Catering",
    name: " Darrell Smith",
    link0: "/",
    link1: "/",
    link2: "/about",
    link3: "/contact"
  });
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
