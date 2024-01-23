import express from 'express'
import {db} from './db.js'

const app = express()

app.get("/books", (req, res) => {
    const q = 'select * from books'
    db.query(q, (err, data) => {
        if(err) return res.status(401).json(err);
        return res.status(200).json(data);
    });
});

app.post("/books", (req, res) => {
    const q = 'Insert into books (title, description, cover) Values(?)'
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json("Book has been created!");
    })
})

app.listen(8000, ()=>{
    console.log("Listening at 8000");
})