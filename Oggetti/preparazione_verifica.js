// Esercizio 1
// Dato un array di oggetti che rappresentano prodotti:
const prodotti = [
  { nome: 'Laptop', prezzo: 800, disponibile: true },
  { nome: 'Mouse', prezzo: 25, disponibile: false },
  { nome: 'Monitor', prezzo: 200, disponibile: true },
  { nome: 'Tastiera', prezzo: 100, disponibile: true },
  { nome: 'Cuffie', prezzo: 50, disponibile: false },
  { nome: 'Webcam', prezzo: 70, disponibile: true },
  { nome: 'Hard Disk', prezzo: 150, disponibile: true },
  { nome: 'Chiavetta USB', prezzo: 20, disponibile: false },
  { nome: 'Altoparlanti', prezzo: 120, disponibile: true },
];

const prodottiDisponibili = prodotti.filter(prodotto => prodotto.disponibile === true)
//console.log(prodottiDisponibili)

// Utilizzare le funzioni degli array per trovare tutti i prodotti disponibili e registrarli in un nuovo array

// Esercizio 2
// Dato un array di oggetti che rappresentano studenti:
const studenti = [
  { nome: 'Marco', eta: 16, media: 7.4 },
  { nome: 'Laura', eta: 15, media: 8.1 },
  { nome: 'Paolo', eta: 16, media: 6.8 },
  { nome: 'Giulia', eta: 15, media: 9.0 },
  { nome: 'Luca', eta: 17, media: 5.5 },
  { nome: 'Sara', eta: 16, media: 7.9 },
  { nome: 'Matteo', eta: 15, media: 6.2 },
  { nome: 'Alice', eta: 17, media: 8.5 },
  { nome: 'Francesca', eta: 16, media: 7.0 },
  { nome: 'Davide', eta: 15, media: 9.3 },
  { nome: 'Elena', eta: 16, media: 6.7 },
];

const studentiBravi = studenti.filter(studente => studente.media > 7.5 && studente.media < 9)
//console.log(studentiBravi)

// Utilizzare le funzioni degli array per creare un nuovo array contenente solo gli studenti che hanno la media maggiore di 7.5 e minore di 9.0

// Esercizio 3
// Dato un array di oggetti che rappresentano ordini:
const ordini = [
  {
    id: 1,
    cliente: 'Mario',
    importoAlCliente: 150,
    costoPezzi: 50,
    categoria: 'elettronica',
  },
  {
    id: 2,
    cliente: 'Luigi',
    importoAlCliente: 80,
    costoPezzi: 25,
    categoria: 'libri',
  },
  {
    id: 3,
    cliente: 'Mario',
    importoAlCliente: 200,
    costoPezzi: 100,
    categoria: 'elettronica',
  },
  {
    id: 4,
    cliente: 'Anna',
    importoAlCliente: 120,
    costoPezzi: 60,
    categoria: 'cancelleria',
  },
  {
    id: 5,
    cliente: 'Luigi',
    importoAlCliente: 300,
    costoPezzi: 150,
    categoria: 'elettronica',
  },
  {
    id: 6,
    cliente: 'Anna',
    importoAlCliente: 90,
    costoPezzi: 30,
    categoria: 'libri',
  },
  {
    id: 7,
    cliente: 'Mario',
    importoAlCliente: 50,
    costoPezzi: 20,
    categoria: 'cancelleria',
  },
];

const guadagni = ordini.reduce((totale, prezzo) => totale + prezzo.importoAlCliente, 0)
//console.log(guadagni)
// Utilizzare le funzioni degli array per calcolare il totale dei guadagni

// Dato un array di oggetti che rappresentano transazioni:
const transazioni = [
  {
    id: 1,
    tipo: 'entrata',
    importo: 1000,
    categoria: 'stipendio',
    data: '2025-01-15',
  },
  {
    id: 2,
    tipo: 'uscita',
    importo: 45,
    categoria: 'spesa',
    data: '2025-01-16',
  },
  {
    id: 3,
    tipo: 'uscita',
    importo: 500,
    categoria: 'affitto',
    data: '2025-01-01',
  },
  {
    id: 4,
    tipo: 'entrata',
    importo: 50,
    categoria: 'vendita',
    data: '2025-01-20',
  },
  {
    id: 5,
    tipo: 'uscita',
    importo: 100,
    categoria: 'spesa',
    data: '2025-01-18',
  },
  {
    id: 6,
    tipo: 'entrata',
    importo: 200,
    categoria: 'regalo',
    data: '2025-01-10',
  },
  {
    id: 7,
    tipo: 'uscita',
    importo: 150,
    categoria: 'spesa',
    data: '2025-01-12',
  },
  {
    id: 8,
    tipo: 'entrata',
    importo: 300,
    categoria: 'vendita',
    data: '2025-01-22',
  },
  {
    id: 9,
    tipo: 'entrata',
    importo: 1590,
    categoria: 'stipendio',
    data: '2025-02-15',
  },
  {
    id: 10,
    tipo: 'uscita',
    importo: 600,
    categoria: 'affitto',
    data: '2025-02-01',
  },
];
// Creare una serie di funzioni (pure):
// 1. filterByType -> filtra le transazioni per tipo
// 2. calcTotal -> calcola il totale degli importi tenendo conto del tipo (entrate segno +, uscite segno -)
// 3. groupByCategory -> raggruppa le spese per categoria e forma un array di transazioni
// 4. sortByDate -> ordina le transazioni per data ||| HINT: new Date(transazione1.data) > new Date(transazione2.data) => true | false
// 5. lastTransaction -> trova l'ultima transazione inserita nel sistema tramite id
// 6. transactionsSummary -> crea un oggetto che riassume il numero di entrate uscite e il loro rispettivo totale { numEntrate: X, numUscite: Y, totaleEntrate: Z, totaleUscite: W }
// 7. transactionsReport -> crea un oggetto che riassume le transazioni raggruppate per tipo { entrate: [...], uscite: [...] }


function filterByType(transactions, type) {
  return transactions.filter(transazione => transazione.tipo===type)
}

function calcTotal(transactions) {
  return transactions.reduce((totale, movimento) => movimento.tipo==='entrata' ? totale + movimento.importo : totale - movimento.importo, 0) 
}

function groupByCategory(transactions) {
  return filtred = [...transactions.filter(transazione => transazione.categoria =='affitto'), 
                    ...transactions.filter(transazione => transazione.categoria =='spesa'),
                   ]
}

function sortByDate(transactions) {
  return transactions.sort((a, b) => new Date(a.data) - new Date(b.data))
}

function lastTransaction(transactions) {
  return transactions.reduce((lastID, currentID) => (currentID.id > lastID.id ? currentID : lastID))
}

function transactionsSummary(transactions) {
  return summary = [
    {
    numEntrate: [...transactions].reduce((last, current) => current.tipo==='entrata' ? last + 1 : last + 0, 0), 
    numUscite: [...transactions].reduce((last, current) => current.tipo==='uscita' ? last + 1 : last + 0, 0),
    totaleEntrate: [...transactions].reduce((last, current) => current.tipo==='entrata' ? last + current.importo : last + 0, 0),
    totaleUscite: [...transactions].reduce((last, current) => current.tipo==='uscita' ? last + current.importo : last + 0, 0)
    }
  ]
}

function transactionsReport(transactions) {
  return report = [
    {
    Entrate: [...transactions].filter(transazione => transazione.tipo==='entrata'), 
    Uscite: [...transactions].filter(transazione => transazione.tipo==='uscita'),
    }
  ]
}

console.log('filtro per tipo entrate: ', filterByType(transazioni, 'entrata'));
console.log('filtro per tipo uscite: ', filterByType(transazioni, 'uscita'));
console.log("")
console.log('calcolo totale: ', calcTotal(transazioni));
console.log("")
console.log('raggruppo per categoria: ', groupByCategory(transazioni));
console.log("")
console.log('ordino per data: ', sortByDate(transazioni));
console.log("")
console.log('id ultima transazione: ', lastTransaction(transazioni));
console.log("")
console.log('riepilogo transazioni: ', transactionsSummary(transazioni));
console.log("")
console.log('report transazioni: ', transactionsReport(transazioni));
console.log("")