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
            { key: 'Iron Bow', level: 1 },
            { key: 'Steel Bow', level: 2 },
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
    },
    {
        key: 'Arthur: Hapless Hero',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Emerald Axe', level: 3 },
            { key: 'Emerald Axe+', level: 5 },
            { key: 'Arthur`s Axe', level: 5 }
        ],
        assists: [{ key: 'Swap', level: 3 }],
        aSkills: [
            { key: 'HP', subKey: '1', level: 1 },
            { key: 'HP', subKey: '2', level: 2 },
            { key: 'HP', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Lancebreaker', subKey: '1', level: 3 },
            { key: 'Lancebreaker', subKey: '2', level: 4 },
            { key: 'Lancebreaker', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Arden: Strong and Tough',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Brave Sword', level: 3 },
            { key: 'Brave Sword+', level: 5 }
        ],
        specials: [
            { key: 'Buckler', level: 3 },
            { key: 'Pavise', level: 4 }
        ],
        bSkills: [{ key: 'Follow-Up Ring', subKey: '1', level: 5 }],
        cSkills: [
            { key: 'Spur Def', subKey: '1', level: 1 },
            { key: 'Drive Def', subKey: '2', level: 2 },
            { key: 'Drive Def', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Ares: Black Knight',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Slaying Edge', level: 3 },
            { key: 'Dark Mystletainn', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Draconic Aura', level: 4 }
        ],
        aSkills: [
            { key: 'Brazen Atk/Def', subKey: '1', level: 1 },
            { key: 'Brazen Atk/Def', subKey: '2', level: 2 },
            { key: 'Brazen Atk/Def', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Seal Def', subKey: '1', level: 1 },
            { key: 'Seal Def/Res', subKey: '2', level: 2 },
            { key: 'Seal Def/Res', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Arvis: Emperor of Flame',
        wps: [
            { key: 'Fire', level: 1 },
            { key: 'Elfire', level: 2 },
            { key: 'Bolganone', level: 3 },
            { key: 'Valflame', level: 5 }
        ],
        specials: [
            { key: 'Rising Flame', level: 3 },
            { key: 'Growing Flame', level: 4 }
        ],
        bSkills: [{ key: 'Recover Ring', subKey: '1', level: 5 }],
        cSkills: [
            { key: 'Def Ploy', subKey: '1', level: 1 },
            { key: 'Def Ploy', subKey: '2', level: 2 },
            { key: 'Def Ploy', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Astram: Midia`s Hero',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Slaying Edge', level: 3 },
            { key: 'Mercurius', level: 5 }
        ],
        specials: [
            { key: 'Glowing Ember', level: 3 },
            { key: 'Bonfire', level: 4 }
        ],
        aSkills: [
            { key: 'Wind Boost', subKey: '1', level: 1 },
            { key: 'Wind Boost', subKey: '2', level: 2 },
            { key: 'Wind Boost', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Wrath', subKey: '1', level: 3 },
            { key: 'Wrath', subKey: '2', level: 4 },
            { key: 'Wrath', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Athena: Borderland Sword',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Wo Dao', level: 4 },
            { key: 'Wo Dao+', level: 5 },
            { key: 'Concealed Blade', level: 5 }
        ],
        specials: [
            { key: 'New Moon', level: 3 },
            { key: 'Moonbow', level: 4 }
        ],
        aSkills: [
            { key: 'Armored Blow', subKey: '1', level: 3 },
            { key: 'Sturdy Blow', subKey: '1', level: 4 },
            { key: 'Sturdy Blow', subKey: '2', level: 5 }
        ],
        cSkills: [
            { key: 'Sword Exp.', subKey: '1', level: 1 },
            { key: 'Sword Exp.', subKey: '2', level: 2 },
            { key: 'Sword Exp.', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Aversa: Dark One',
        wps: [
            { key: 'Flux', level: 1 },
            { key: 'Ruin', level: 2 },
            { key: 'Fenrir', level: 4 },
            { key: 'Aversa`s Night', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Dragon Fang', level: 4 }
        ],
        aSkills: [
            { key: 'Speed', subKey: '1', level: 3 },
            { key: 'HP / Spd', subKey: '1', level: 4 },
            { key: 'HP / Spd', subKey: '2', level: 5 }
        ],
        cSkills: [
            { key: 'Odd Res Wave', subKey: '1', level: 1 },
            { key: 'Odd Res Wave', subKey: '2', level: 2 },
            { key: 'Odd Res Wave', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Ayra: Astra`s Wielder',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Silver Sword', level: 3 },
            { key: 'Ayra`s Blade', level: 5 }
        ],
        specials: [
            { key: 'Night Sky', level: 3 },
            { key: 'Astra', level: 4 },
            { key: 'Regnal Astra', level: 5 }
        ],
        aSkills: [
            { key: 'Darting Blow', subKey: '1', level: 3 },
            { key: 'Swift Sparrow', subKey: '1', level: 4 },
            { key: 'Swift Sparrow', subKey: '2', level: 5 }
        ],
        bSkills: [
            { key: 'Desperation', subKey: '1', level: 1 },
            { key: 'Desperation', subKey: '2', level: 2 },
            { key: 'Desperation', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Azama: Carefree Monk',
        wps: [
            { key: 'Assault', level: 1 },
            { key: 'Pain', level: 3 },
            { key: 'Pain+', level: 5 }
        ],
        assists: [
            { key: 'Heal', level: 1 },
            { key: 'Reconcile', level: 2 },
            { key: 'Martyr', level: 4 },
            { key: 'Martyr+', level: 5 }
        ],
        specials: [
            { key: 'Imbue', level: 2 },
            { key: 'Solid-Earth Balm', level: 3 }
        ],
        cSkills: [
            { key: 'Threaten Atk', subKey: '1', level: 3 },
            { key: 'Threaten Atk', subKey: '2', level: 4 },
            { key: 'Threaten Atk', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Azura: Celebratory Spirit',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Hagoita', level: 3 },
            { key: 'Hagoita+', level: 5 }
        ],
        assists: [{ key: 'Sing', level: 3 }],
        bSkills: [
            { key: 'Earth Dance', subKey: '1', level: 3 },
            { key: 'Earth Dance', subKey: '2', level: 4 },
            { key: 'Earth Dance', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Hone Spd', subKey: '1', level: 1 },
            { key: 'Hone Spd', subKey: '2', level: 2 },
            { key: 'Hone Fliers', subKey: '1', level: 4 }
        ]
    },
    {
        key: 'Azura: Lady of Ballads',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Silver Axe', level: 3 },
            { key: 'Urðr', level: 5 }
        ],
        assists: [{ key: 'Sing', level: 3 }],
        aSkills: [
            { key: 'Triangle Adept', subKey: '1', level: 1 },
            { key: 'Triangle Adept', subKey: '2', level: 2 },
            { key: 'Triangle Adept', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Spur Res', subKey: '1', level: 3 },
            { key: 'Drive Res', subKey: '1', level: 4 },
            { key: 'Drive Res', subKey: '2', level: 5 }
        ]
    },
    {
        key: 'Azura: Lady of the Lake',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Sapphire Lance', level: 3 },
            { key: 'Sapphire Lance+', level: 5 }
        ],
        assists: [{ key: 'Sing', level: 3 }],
        aSkills: [
            { key: 'Speed', subKey: '1', level: 3 },
            { key: 'Speed', subKey: '2', level: 4 },
            { key: 'Speed', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Fortify Res', subKey: '1', level: 1 },
            { key: 'Fortify Res', subKey: '2', level: 2 },
            { key: 'Fortify Res', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Azura: Vallite Songstress',
        wps: [
            { key: 'Light', level: 1 },
            { key: 'Ellight', level: 2 },
            { key: 'Shine', level: 3 },
            { key: 'Prayer Wheel', level: 5 }
        ],
        assists: [
            { key: 'Sing', level: 3 },
            { key: 'Gray Waves', level: 5 }
        ],

        aSkills: [
            { key: 'B Duel Flying', subKey: '1', level: 3 },
            { key: 'B Duel Flying', subKey: '2', level: 4 },
            { key: 'B Duel Flying', subKey: '3', level: 5 }
        ],
        bSkills: [
            { key: 'Aerobatics', subKey: '1', level: 3 },
            { key: 'Aerobatics', subKey: '2', level: 4 },
            { key: 'Aerobatics', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Atk Tactic', subKey: '1', level: 1 },
            { key: 'Atk Tactic', subKey: '2', level: 2 },
            { key: 'Atk Tactic', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Azura: Young Songstress',
        wps: [
            { key: 'Wind', level: 1 },
            { key: 'Elwind', level: 2 },
            { key: 'Rexcalibur', level: 3 },
            { key: 'Book of Shadows', level: 5 }
        ],
        aSkills: [
            { key: 'Spd / Res Bond', subKey: '1', level: 1 },
            { key: 'Spd / Res Bond', subKey: '2', level: 2 },
            { key: 'Spd / Res Bond', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Torrent Dance', subKey: '1', level: 3 },
            { key: 'Torrent Dance', subKey: '2', level: 4 },
            { key: 'Torrent Dance', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Bantu: Tiki`s Guardian',
        wps: [
            { key: 'Fire Breath', level: 1 },
            { key: 'Fire Breath+', level: 2 },
            { key: 'Dark Breath', level: 3 },
            { key: 'Dark Breath+', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Dragon Fang', level: 4 }
        ],
        aSkills: [
            { key: 'Fierce Stance', subKey: '1', level: 1 },
            { key: 'Fierce Stance', subKey: '2', level: 2 },
            { key: 'Fierce Stance', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Savage Blow', subKey: '1', level: 3 },
            { key: 'Savage Blow', subKey: '2', level: 4 },
            { key: 'Savage Blow', subKey: '3', level: 5 }
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
