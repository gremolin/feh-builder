import { UnitSkills } from './data.types';

export const unitSkills: UnitSkills[] = [
    {
        key: 'Blank',
        wps: [
            { key: 'Lance', level: 1 },
            { key: 'Lance', level: 2 }
        ],
        specials: [
            { key: 'Vestments', level: 3 },
            { key: 'Vestments', level: 4 }
        ],
        aSkills: [
            { key: 'HoP', subKey: '1', level: 3 },
            { key: 'HoP', subKey: '2', level: 4 },
            { key: 'HoP', subKey: '3', level: 5 }
        ],
        bSkills: [
            { key: 'Swordo', subKey: '1', level: 1 },
            { key: 'Swordo', subKey: '2', level: 2 },
            { key: 'Swordo', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Oath', subKey: '1', level: 1 },
            { key: 'Oath', subKey: '2', level: 2 },
            { key: 'Oath', subKey: '3', level: 3 }
        ]
    },
    {
        key: 'Abel: The Panther',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Brave Lance', level: 3 },
            { key: 'Brave Lance+', level: 5 },
            { key: 'Panther Lance', level: 5 }
        ],
        specials: [
            { key: 'Holy Vestments', level: 3 },
            { key: 'Aegis', level: 4 }
        ],
        aSkills: [
            { key: 'HP', subKey: '1', level: 3 },
            { key: 'HP', subKey: '2', level: 4 },
            { key: 'HP', subKey: '3', level: 5 }
        ],
        bSkills: [
            { key: 'Swordbreaker', subKey: '1', level: 1 },
            { key: 'Swordbreaker', subKey: '2', level: 2 },
            { key: 'Swordbreaker', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Alfonse: Askran Duo',
        wps: [
            { key: 'Light', level: 1 },
            { key: 'Ellight', level: 2 },
            { key: 'Shine', level: 4 },
            { key: 'Imbued Koma', level: 5 }
        ],
        specials: [
            { key: 'Glowing Ember', level: 3 },
            { key: 'Bonfire', level: 4 },
            { key: 'Open the Future', level: 5 }
        ],
        aSkills: [{ key: 'Close Counter', level: 5 }],
        bSkills: [
            { key: 'Special Spiral', subKey: '1', level: 3 },
            { key: 'Special Spiral', subKey: '2', level: 4 },
            { key: 'Special Spiral', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Def/Res Oath', subKey: '1', level: 1 },
            { key: 'Def/Res Oath', subKey: '2', level: 2 },
            { key: 'Def/Res Oath', subKey: '3', level: 3 }
        ]
    },
    {
        key: 'Alfonse: Prince of Askr',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Silver Sword', level: 3 },
            { key: 'Fólkvangr', level: 5 }
        ],
        specials: [
            { key: 'Daylight', level: 2 },
            { key: 'Sol', level: 4 }
        ],
        aSkills: [
            { key: 'Death Blow', subKey: '1', level: 1 },
            { key: 'Death Blow', subKey: '2', level: 2 },
            { key: 'Death Blow', subKey: '3', level: 3 }
        ],
        cSkills: [
            { key: 'Spur Atk', subKey: '1', level: 3 },
            { key: 'Spur Atk', subKey: '2', level: 4 },
            { key: 'Spur Atk', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Alfonse: Spring Prince',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Giant Spoon', level: 3 },
            { key: 'Giant Spoon+', level: 5 }
        ],
        specials: [
            { key: 'Daylight', level: 3 },
            { key: 'Noontime', level: 4 }
        ],
        aSkills: [
            { key: 'Death Blow', subKey: '1', level: 1 },
            { key: 'Sturdy Blow', subKey: '1', level: 2 },
            { key: 'Sturdy Blow', subKey: '2', level: 4 }
        ],
        cSkills: [
            { key: 'Def Smoke', subKey: '1', level: 3 },
            { key: 'Def Smoke', subKey: '2', level: 4 },
            { key: 'Def Smoke', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Alm: Hero of Prophecy',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Silver Sword', level: 3 },
            { key: 'Falchion', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Draconic Aura', level: 4 }
        ],
        aSkills: [
            { key: 'Attack', subKey: '1', level: 1 },
            { key: 'Attack', subKey: '1', level: 2 },
            { key: 'Attack', subKey: '2', level: 4 }
        ],
        cSkills: [
            { key: 'Windsweep', subKey: '1', level: 3 },
            { key: 'Windsweep', subKey: '2', level: 4 },
            { key: 'Windsweep', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Alm: Imperial Ascent',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Silver Sword', level: 3 },
            { key: 'Dracofalchion', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Draconic Aura', level: 4 }
        ],
        bSkills: [
            { key: 'Chill Def', subKey: '1', level: 1 },
            { key: 'Chill Def', subKey: '1', level: 2 },
            { key: 'Chill Def', subKey: '2', level: 4 }
        ],
        cSkills: [
            { key: 'Threaten Atk', subKey: '1', level: 2 },
            { key: 'Threat. Atk/Spd', subKey: '1', level: 3 },
            { key: 'Threat. Atk/Spd', subKey: '2', level: 4 },
            { key: 'Threat. Atk/Spd', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Alm: Lovebird Duo',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Silver Axe', level: 3 },
            { key: 'Scepter of Love', level: 5 }
        ],
        specials: [
            { key: 'New Moon', level: 3 },
            { key: 'Moonbow', level: 4 },
            { key: 'Lunar Flash', level: 5 }
        ],
        aSkills: [
            { key: 'Bonus Doubler', subKey: '1', level: 3 },
            { key: 'Bonus Doubler', subKey: '2', level: 4 },
            { key: 'Bonus Doubler', subKey: '3', level: 5 }
        ],
        bSkills: [
            { key: 'Lull Atk/Spd', subKey: '1', level: 3 },
            { key: 'Lull Atk/Spd', subKey: '2', level: 4 },
            { key: 'Lull Atk/Spd', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Rouse Spd/Res', subKey: '1', level: 1 },
            { key: 'Rouse Spd/Res', subKey: '2', level: 2 },
            { key: 'Rouse Spd/Res', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Alm: Saint-King',
        wps: [
            { key: 'Iron Bow', level: 1 },
            { key: 'Steel Bow', level: 2 },
            { key: 'Silver Bow', level: 3 },
            { key: 'Luna Arc', level: 5 }
        ],
        specials: [
            { key: 'New Moon', level: 3 },
            { key: 'Moonbow', level: 4 },
            { key: 'Lunar Flash', level: 5 }
        ],
        aSkills: [
            { key: 'Darting Blow', subKey: '1', level: 2 },
            { key: 'Darting Blow', subKey: '2', level: 3 },
            { key: 'Darting Blow', subKey: '3', level: 4 },
            { key: 'Darting Blow', subKey: '4', level: 5 }
        ],
        bSkills: [
            { key: 'Null Follow-Up', subKey: '1', level: 3 },
            { key: 'Null Follow-Up', subKey: '2', level: 4 },
            { key: 'Null Follow-Up', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Odd Atk Wave', subKey: '1', level: 1 },
            { key: 'Odd Atk Wave', subKey: '2', level: 2 },
            { key: 'Odd Atk Wave', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Altena: Luminous Rider',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Silver Lance', level: 3 },
            { key: 'Earthly Gáe Bolg', level: 5 }
        ],
        specials: [
            { key: 'Retribution', level: 3 },
            { key: 'Reprisal', level: 4 }
        ],
        aSkills: [
            { key: 'Steady Stance', subKey: '1', level: 1 },
            { key: 'Sturdy Stance', subKey: '1', level: 2 },
            { key: 'Sturdy Stance', subKey: '2', level: 4 }
        ],
        bSkills: [
            { key: 'Brash Assault', subKey: '1', level: 3 },
            { key: 'Brash Assault', subKey: '2', level: 4 },
            { key: 'Brash Assault', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Altina: Dawn`s Trueblade',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Silver Sword', level: 3 },
            { key: 'Ragnell·Alondite', level: 5 }
        ],
        specials: [
            { key: 'Chilling Wind', level: 3 },
            { key: 'Iceberg', level: 4 },
            { key: 'Twin Blades', level: 5 }
        ],
        aSkills: [{ key: 'Ashera`s Chosen', subKey: '1', level: 5 }],
        bSkills: [
            { key: 'Vantage', subKey: '1', level: 1 },
            { key: 'Vantage', subKey: '2', level: 2 },
            { key: 'Vantage', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Atk/Def Oath', subKey: '1', level: 3 },
            { key: 'Atk/Def Oath', subKey: '2', level: 4 },
            { key: 'Atk/Def Oath', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Amelia: Rose of the War',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Slaying Axe', level: 3 },
            { key: 'Slaying Axe+', level: 5 },
            { key: 'Grado Poleax', level: 5 }
        ],
        specials: [
            { key: 'Holy Vestments', level: 3 },
            { key: 'Sacred Cowl', level: 4 }
        ],
        aSkills: [
            { key: 'Earth Boost', subKey: '1', level: 1 },
            { key: 'Earth Boost', subKey: '2', level: 2 },
            { key: 'Earth Boost', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Armor March', subKey: '1', level: 3 },
            { key: 'Armor March', subKey: '2', level: 4 },
            { key: 'Armor March', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Anna: Commander',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Silver Axe', level: 3 },
            { key: 'Nóatún', level: 5 }
        ],
        specials: [
            { key: 'Night Sky', level: 3 },
            { key: 'Astra', level: 4 }
        ],
        aSkills: [
            { key: 'Earth Boost', subKey: '1', level: 1 },
            { key: 'Earth Boost', subKey: '2', level: 2 },
            { key: 'Earth Boost', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Vantage', subKey: '1', level: 3 },
            { key: 'Vantage', subKey: '2', level: 4 },
            { key: 'Vantage', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Spur Res', subKey: '1', level: 1 },
            { key: 'Spur Res', subKey: '2', level: 2 },
            { key: 'Spur Res', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Anna: Wealth-Wisher',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Fortune Bow', level: 3 },
            { key: 'Fortune Bow+', level: 5 }
        ],
        assists: [
            { key: 'Rally Resistance', level: 3 },
            { key: 'Rally Def/Res', level: 4 },
            { key: 'Rally Def/Res+', level: 5 }
        ],
        specials: [
            { key: 'Night Sky', level: 3 },
            { key: 'Astra', level: 4 }
        ],
        bSkills: [
            { key: 'Sabotage Atk', subKey: '1', level: 3 },
            { key: 'Sabotage Atk', subKey: '2', level: 4 },
            { key: 'Sabotage Atk', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Atk/Spd Gap', subKey: '1', level: 3 },
            { key: 'Atk/Spd Gap', subKey: '2', level: 4 },
            { key: 'Atk/Spd Gap', subKey: '3', level: 5 }
        ]
    }
    /*,
    {
        key: 'Valter: Dark Moonstone',
        wpType: lance,
        range: closeRange,
        colour: blue,
        move: flying,
        wps: [{ key: 'Iron Lance', level: 1 }]
    }*/
];
