//zadatak 101
import moment from 'moment';
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


export default { datum, prognoza, adresa} // na kraju navodimo koje JS objekte treba eksportati