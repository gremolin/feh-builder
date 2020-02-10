import { Unit } from './data.types';
import { armor, axe, blue, blueTome, bow, cavalry, closeRange, colourless, distant, flying, green, infantry, lance, red, sword } from './hardcoded';

export const fehUnits: Unit[] = [
    { name: 'Abel: The Panther', released: new Date(2017, 1, 2), move: cavalry, wpType: lance, range: closeRange, colour: blue },
    { name: 'Alfonse: Askran Duo', released: new Date(2020, 0, 1), wpType: blueTome, range: distant, colour: blue, move: infantry },
    { name: 'Alfonse: Prince of Askr', released: new Date(2017, 1, 2), wpType: sword, range: closeRange, colour: red, move: infantry },
    { name: 'Alfonse: Spring Prince', released: new Date(2018, 2, 22), wpType: axe, colour: green, move: cavalry, range: closeRange },
    { name: 'Alm: Hero of Prophecy', released: new Date(2017, 3, 14), wpType: sword, colour: red, move: infantry, range: closeRange },
    { name: 'Alm: Imperial Ascent', released: new Date(2019, 7, 16), wpType: sword, colour: red, move: infantry, range: closeRange },
    { name: 'Alm: Lovebird Duo', released: new Date(2020, 1, 6), wpType: axe, colour: green, move: infantry, range: closeRange },
    { name: 'Alm: Saint-King', released: new Date(2019, 3, 26), wpType: bow, colour: colourless, move: infantry, range: distant },
    { name: 'Altena: Luminous Rider', released: new Date(2020, 0, 19), wpType: lance, colour: blue, move: flying, range: closeRange },
    { name: 'Altina: Dawn`s Trueblade', released: new Date(2019, 10, 28), wpType: sword, colour: red, move: flying, range: closeRange },
    { name: 'Amelia: Rose of the War', released: new Date(2017, 7, 15), wpType: axe, colour: green, move: armor, range: closeRange },
    { name: 'Anna: Commander', released: new Date(2017, 1, 2), wpType: axe, colour: green, move: infantry, range: closeRange },
    { name: 'Anna: Wealth-Wisher', released: new Date(2020, 0, 1), wpType: bow, colour: red, move: infantry, range: distant }
];
