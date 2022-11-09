const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require('./api/users/router');
const PORT = process.env.PORT;

app.use(express.json())
app.use('/api/users', userRouter);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});