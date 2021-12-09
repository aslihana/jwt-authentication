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
	const refreshToken = req.body.token
})

app.get('/login', (req, res) => {
	//Authenticate the user

	const username = req.body.username
	const user = { name: username }

	const accessToken = generateAccessToken(user);
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

	res.json({ accessToken: accessToken, refreshToken: refreshToken})
})

function generateAccessToken(user) {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m'})

}

/*function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	if(token == null) return res.sendStatus(401)

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
		  if(err) return res.sendStatus(403)
		  	req.user = user 
		  next()
		})
	
} */

app.listen(4000);
