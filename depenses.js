const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA
// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte);
// TODO : calculez le total, le budget restant et budgetRespected.
const alimentation = Number(alimentationTexte);
const loisirs = Number(loisirsTexte);
const total = transport + alimentation + loisirs;
const budgetRestant = budget - total;
const budgetRespected = budgetRestant >= 0;

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Rapport de dépenses à compléter pour ${nom}.`);
console.log(`Total des dépenses : ${total} FCFA`);
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected}`);
