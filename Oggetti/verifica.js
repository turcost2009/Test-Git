// Esercizio 1

const corsi = [
  { titolo: 'JavaScript Base', ore: 20, iscritti: 120 },
  { titolo: 'React Avanzato', ore: 35, iscritti: 80 },
  { titolo: 'Python per principianti', ore: 25, iscritti: 150 },
  { titolo: 'Machine Learning', ore: 50, iscritti: 60 },
  { titolo: 'HTML & CSS', ore: 15, iscritti: 200 },
];

filtredCorsi = corsi.filter(corso => corso.iscritti > 100 && corso.ore >= 20 )

console.log("__________________________________________________________________________________________ \n \n Esercizio 1 \n")
console.log(filtredCorsi)



// Esercizio 2

const recensioni = [
  { utente: 'Anna', stelle: 5, commento: 'Fantastica!' },
  { utente: 'Luca', stelle: 3, commento: 'Carina ma migliorabile' },
  { utente: 'Sara', stelle: 4, commento: 'Molto utile' },
  { utente: 'Marco', stelle: 2, commento: 'Troppi bug' },
  { utente: 'Elisa', stelle: 4, commento: 'Bella interfaccia!' },
  { utente: 'Paolo', stelle: 5, commento: 'La uso ogni giorno!' },
];

mediaRecensioni= recensioni.reduce((last, current) => last + current.stelle, 0) / recensioni.length
recensioniNegative = recensioni.filter(recensione => recensione.stelle < mediaRecensioni)

console.log("__________________________________________________________________________________________ \n \n Esercizio 2 \n")
console.log("la media è: ", mediaRecensioni.toPrecision(3))
console.log(recensioniNegative)



// Esercizio 3

const dipendenti = [
  { nome: 'Giulia', stipendio: 1800, bonus: 200, erogato: 2, reparto: 'vendite' },
  { nome: 'Matteo', stipendio: 2200, bonus: 300,  erogato: 5, reparto: 'sviluppo' },
  { nome: 'Sara', stipendio: 1900, bonus: 150, erogato: 3, reparto: 'assistenza' },
  { nome: 'Luca', stipendio: 2500, bonus: 400, erogato: 1, reparto: 'sviluppo' },
  { nome: 'Elena', stipendio: 1600, bonus: 100, erogato: 6, reparto: 'vendite' },
];

dipendentiv2 = dipendenti.map(dipendente => {
    return {
        ...dipendente,
        stipendioAnnuale : dipendente.stipendio * 12 + dipendente.bonus * dipendente.erogato
    }
})

console.log("__________________________________________________________________________________________ \n \n  Esercizio 3 \n")
console.log(dipendentiv2)