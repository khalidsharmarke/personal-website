const express = require('express');
const app = express();
const PORT = 8800;

app.use('/', express.static('static'));

app.use('/:endpoint', (req, res) => res.redirect('/'))

app.listen(PORT, () => console.log(`running on port ${PORT}`));