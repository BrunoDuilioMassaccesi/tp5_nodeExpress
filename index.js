import express from "express";

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('bienvenido a mi servidor');
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})