const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(port, () => {
    console.log('Server activo')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});
