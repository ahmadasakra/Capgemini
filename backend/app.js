const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(bodyParser.json());

// Register routes
routes(app);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

const port = 3333;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
