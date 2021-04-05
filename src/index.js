import express from 'express';
import routes from './routes';
import dodaj from "./dodaj";
import dohvati from "./dohvati";

const app = express() // instanciranje aplikacije
const port = 9000 // port na kojem će web server slušati

//zadatak 101
app.get('/', routes.adresa) 
app.get('/datum', routes.datum)
app.get('/prognoza', routes.prognoza)
//zadatak 102
app.get("/dodaj", dodaj);
app.get("/dohvati", dohvati);
//zadatak104
app.get('/studenti', routes.studenti)
app.get('/studenti/first', routes.studenti_first)
app.get('/studenti/last', routes.studenti_last)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))

