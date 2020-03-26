const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

app.post('/users', (req,res)=>{
    const body = req.body;
    console.log(body);
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Lucas Lima'
    })
})
app.listen(3333);