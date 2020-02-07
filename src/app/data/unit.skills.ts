import { UnitSkills } from './data.types';
import { blue, blueTome, cavalry, closeRange, distant, flying, infantry, lance } from './hardcoded';

export const unitSkills: UnitSkills[] = [
    {
        key: 'Abel: The Panther',
        wpType: lance,
        range: closeRange,
        colour: blue,
        move: cavalry,
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
            { key: 'HP', subKey: '3', level: 3 },
            { key: 'HP', subKey: '4', level: 4 },
            { key: 'HP', subKey: '5', level: 5 }
        ],
        bSkills: [
            { key: 'Swordbreaker', subKey: '1', level: 1 },
            { key: 'Swordbreaker', subKey: '2', level: 2 },
            { key: 'Swordbreaker', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Alfonse: Askran Duo',
        wpType: blueTome,
        range: distant,
        colour: blueTome,
        move: infantry,
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
        key: 'Valter: Dark Moonstone',
        wpType: lance,
        range: closeRange,
        colour: blue,
        move: flying,
        wps: [{ key: 'Iron Lance', level: 1 }]
    }
];
