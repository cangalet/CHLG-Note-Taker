const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();

// variables for routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// initialize server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});