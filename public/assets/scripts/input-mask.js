import Cleave from '/node_modules/cleave.js/dist/cleave-esm.min.js';

let cleave = new Cleave('.date__input-field', {
  date: true,
  delimiter: '-',
  datePattern: ['m', 'd', 'Y']
});