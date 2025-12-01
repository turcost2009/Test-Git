//data una lista di utente e le loro relative propietà (nome, cognome, regione)
//crea un oggetto dove i campi sono i nomi delle regioni che compaiono ed il valore è il numero di volte che compaiono

const utenti =[
    {nome: "Marco", cognome: "Rossi", regione: "Veneto"},
    {nome: "Giacomo", cognome: "Verdi", regione: "Lombardia"},
    {nome: "Mattia", cognome: "Neri", regione: "Campania"},
    {nome: "Stefano", cognome: "Gialli", regione: "Veneto"},
]

const result = utenti.map(TrasformaUtente)

function TrasformaUtente(utente) {
    const {cognome, nome, regione} = utenti
    return `${utente.cognome + ',' + utente.nome + '-' + utente.regione}` 
}

console.log(result)

/*
const result = utenti.reduce(
    (acc,{regione}) => {
        if (typeof acc[regione] === "undefined"){
            return {
                ...acc,
                [regione]:1
            }
        }
    },
    {}
)

console.log(result) */