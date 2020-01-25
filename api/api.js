var cors = require("cors");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://umerhashimqureshi:uxC9Km0eLvGbugSG@blogsite-tigjx.mongodb.net/blogsite",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected to Database."));

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  authorURL: String,
  igURL: String
});

const postModel = mongoose.model("posts", postSchema);

app.get("/showAll", (req, res) => {
  postModel.find((err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.send(posts);
    }
  });
});

app.post("/newPost", (req, res) => {
  var nPost = new postModel({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    authorURL: req.body.authorURL,
    igURL: req.body.igURL
  });
  nPost.save();
  console.log(nPost);
});

app.delete("/delete/:ID", (req, res) => {
  postModel.findByIdAndDelete({ _id: req.params.ID }, function(err) {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      console.log("Successfully removed");
    }
  });
});

app.listen(4000, () => {
  console.log("Backend Server is running at 4000...");
});
