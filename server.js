const express = require("express");
const app = express();

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

// POST NEW POST
app.post("/posts", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    posts.push(newPost);

    res.json({
        message: "Post added 🔥",
        post: newPost
    });
});

// EASY TEST ROUTE (no Thunder needed)
app.get("/add", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: "Post from browser 🔥"
    };

    posts.push(newPost);

    res.send("Post added!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});