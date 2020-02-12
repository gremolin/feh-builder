import { Unit } from './data.types';
import { armor, axe, blue, blueTome, bow, breath, cavalry, closeRange, colourless, distant, flying, green, greenTome, infantry, lance, red, redTome, staff, sword } from './hardcoded';

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
    { name: 'Anna: Wealth-Wisher', released: new Date(2020, 0, 1), wpType: bow, colour: red, move: infantry, range: distant },
    { name: 'Arden: Strong and Tough', released: new Date(2017, 9, 23), wpType: sword, colour: red, move: armor, range: closeRange },
    { name: 'Ares: Black Knight', released: new Date(2018, 4, 10), wpType: sword, colour: red, move: cavalry, range: closeRange },
    { name: 'Arthur: Hapless Hero', released: new Date(2017, 1, 2), wpType: axe, colour: green, move: infantry, range: closeRange },
    { name: 'Arvis: Emperor of Flame', released: new Date(2017, 9, 18), wpType: redTome, colour: red, move: infantry, range: distant },
    { name: 'Astram: Midia`s Hero', released: new Date(2019, 8, 23), wpType: sword, colour: red, move: infantry, range: closeRange },
    { name: 'Athena: Borderland Sword', released: new Date(2017, 5, 14), wpType: sword, colour: red, move: infantry, range: closeRange },
    { name: 'Aversa: Dark One', released: new Date(2018, 9, 25), wpType: redTome, colour: red, move: flying, range: distant },
    { name: 'Ayra: Astra`s Wielder', released: new Date(2017, 9, 19), wpType: sword, colour: red, move: infantry, range: closeRange },
    { name: 'Azama: Carefree Monk', released: new Date(2017, 1, 2), wpType: staff, colour: colourless, move: infantry, range: distant },
    { name: 'Azura: Celebratory Spirit', released: new Date(2017, 11, 31), wpType: axe, colour: green, move: flying, range: closeRange },
    { name: 'Azura: Lady of Ballads', released: new Date(2017, 8, 29), wpType: axe, colour: green, move: infantry, range: closeRange },
    { name: 'Azura: Lady of the Lake', released: new Date(2017, 1, 2), wpType: lance, colour: blue, move: infantry, range: closeRange },
    { name: 'Azura: Vallite Songstress', released: new Date(2018, 11, 28), wpType: blueTome, colour: blue, move: flying, range: distant },
    { name: 'Azura: Young Songstress', released: new Date(2018, 10, 12), wpType: greenTome, colour: green, move: infantry, range: distant },
    { name: 'Bantu: Tiki`s Guardian', released: new Date(2019, 8, 19), wpType: breath, colour: red, move: infantry, range: closeRange }
];
