const express = require('express');
const app = express();

app.use(express.json());

const carros = [
    {
        modelo: "S10",
        marca:"Chevrolet"
    },
    {
        modelo: "Cruze",
        marca:"Chevrolet"
    }
]

app.get('/carros', async (req, res) => {
    res.json(carros)
});

app.post('/carros', async (req, res) => {
    const {modelo, marca} = req.body;

    carros.push({modelo, marca});
    res.json(carros)
});

app.listen(3001);