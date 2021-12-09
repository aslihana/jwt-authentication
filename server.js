require('dotenv').config() 

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
{
	username: 'Kyle',
	title: 'Post1'
}
,{
	username: 'Jim',
	title: 'Post 2'
}
]


app.get('/posts', authenticateToken, (req, res) => {
	res.json(posts.filter(post => post.username === req.user.name));
})



app.listen(3000);
