const express = require('express');
const app = express();
const userRouter = require('./routes/users');
app.get('/', (req, res) => {
  res.send("API is working");
})
app.use('/users', userRouter);
const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port}.`);
