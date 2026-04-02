const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// fake database
let posts = [
    { id: 1, title: "My First Post" },
    { id: 2, title: "Learning Backend" }
];

// HOME
app.get("/", (req, res) => {
    res.send("Home Page 🔥");
});

// GET POSTS
app.get("/posts", (req, res) => {
    res.json(posts);
});

// ADD POST
app.post("/posts", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    posts.push(newPost);

    res.json(newPost);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});