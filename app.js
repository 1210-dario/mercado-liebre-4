const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

const views = path.join(__dirname,'views');
console.log(views);
app.get('/', (req, res) => {
    res.sendFile(path.join(views,'home.html'))
})

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(views,'contacto.html'))
})

app.use(express.static('public'));

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));

