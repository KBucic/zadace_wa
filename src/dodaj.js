import lista from "./lista";

//zadatak 102
function rand(broj) {
    return Math.floor(Math.random() * broj);
  };


let dodaj = (req, res) => {
  let random = rand(101);
  lista.push(random);
  res.send(`Broj: ${parseInt(random)}`);
};

export default dodaj