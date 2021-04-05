//zadatak 101
import moment from 'moment';
import  data from './studenti.json'
const vrijeme = moment().format('DD.MM.YYYY HH:mm');

var riječ = new Array();
  riječ[0]="sunčano";
  riječ[1]="kišovito";
  riječ[2]="oblačno";

let datum = (req,res) => res.send(`Datum i vrijeme: ${vrijeme}`)
let prognoza = (req,res) => {
    const rand= [Math.floor(Math.random() * riječ.length)]; 
    res.send(`Danas će biti ${riječ[rand]}.`)}
let adresa = (req,res) => res.send (`Na adresi localhost:9000/datum nalazi se datum i vrijeme a na adresi localhost:9000/prognoza nalazi se random prognoza.`)

//zadatak104
let studenti = (req, res) => res.send(data.studenti)
let studenti_first = (req, res) => res.send(data.studenti[0])
let studenti_last = (req, res) => res.send(data.studenti[data.studenti.length - 1])


export default { datum, prognoza, adresa,studenti, studenti_first, studenti_last} // na kraju navodimo koje JS objekte treba eksportati