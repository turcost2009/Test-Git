const studenti = [
  { nome: 'Anna', cognome: 'Bianchi', voti: [6, 10, 5, 4, 8, 7] },
  { nome: 'Luca', cognome: 'Verdi', voti: [8, 9, 7, 6, 10, 9] },
  { nome: 'Sara', cognome: 'Neri', voti: [5, 6, 4, 7, 8, 6] },
  { nome: 'Marco', cognome: 'Gialli', voti: [10, 9, 10, 10, 9, 10] },
  { nome: 'Elena', cognome: 'Blu', voti: [6, 5, 7, 3, 6, 5] },
];

// Esercizio 1: Calcola la media dei voti per ogni studente e aggiungi una nuova proprietà "media" all'oggetto studente.
// Utilizza solamente i metodi degli array (es. .map(), .reduce(), ecc.) senza usare cicli for o while.
// Scrivi funzioni pure (senza effetti collaterali).


const mediaVoti = studenti.map(studente => {
  const sommaVoti = studente.voti.reduce((acc, voto) => acc + voto, 0);
  const media = sommaVoti / studente.voti.length;
  return {
    nome: studente.nome,
    cognome: studente.cognome,
    voti: studente.voti,
    media: Number(media.toFixed(2))
  };
});


console.log(mediaVoti);

console.log("---")

function compare(a,b) {
  if (a.media > b.media) {
      return 1;
    }
 
 
  if (a.media < b.media) {
    return -1;
  }
  if (a.media === b.media) {
    return 0;
  }
}

const sorted = [...mediaVoti].sort(compare)

console.log(sorted)