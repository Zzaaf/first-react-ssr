const express = require('express');

const app = express();
const port = process.env.PORT ?? 3000;
const config = require('./config/config');
const mainRouter = require('./routes/main.route');

// Config
config(app);

// Routes
app.use('/', mainRouter);

// Listen
app.listen(port, () => {
  console.log(`*** Server started at ${port} port ***`);
});
