const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Fake database
let posts = [
    { id: 1, title: "My First Post" },
    { id: 2, title: "Learning Backend" }
];

// Home route
app.get("/", (req, res) => {
    res.send("Backend is working 🔥");
});

// Get all posts
app.get("/posts", (req, res) => {
    res.json(posts);
});

// Add new post
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

// Port setup
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});