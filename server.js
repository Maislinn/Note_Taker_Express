//Adding Server.JS
// Requiring packages 
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

//Assign a port 
const PORT = process.env.PORT || 3001;


//Middleware for parsing JSON and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

