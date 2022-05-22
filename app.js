const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Working in AWS now! Testing the CodePipeline with Review Stage! Updating at 2202'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
