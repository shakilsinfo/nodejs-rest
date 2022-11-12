const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const userRouter = require('./api/users/router');
const authRouter = require('./api/auth/authRouter');

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/login', authRouter);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});