import express from 'express';
import routes from './routes';
import dodaj from "./dodaj";
import dohvati from "./dohvati";

const app = express() // instanciranje aplikacije
const port = 9000 // port na kojem će web server slušati


app.get('/', routes.adresa)
app.get('/datum', routes.datum)
app.get('/prognoza', routes.prognoza)
app.get("/dodaj", dodaj);
app.get("/dohvati", dohvati);

app.listen(port, () => console.log(`Slušam na portu ${port}!`))

