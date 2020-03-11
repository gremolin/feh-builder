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
        bSkills: [{ key: 'Follow-Up Ring', level: 5 }],
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
        bSkills: [{ key: 'Recover Ring', level: 5 }],
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
            { key: 'HP/Spd', subKey: '1', level: 4 },
            { key: 'HP/Spd', subKey: '2', level: 5 }
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
            { key: 'Spd/Res Bond', subKey: '1', level: 1 },
            { key: 'Spd/Res Bond', subKey: '2', level: 2 },
            { key: 'Spd/Res Bond', subKey: '3', level: 4 }
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
    },
    {
        key: 'Barst: The Hatchet',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Brave Axe', level: 3 },
            { key: 'Brave Axe+', level: 5 },
            { key: 'Devil Axe', level: 5 }
        ],
        assists: [{ key: 'Reposition', level: 3 }],
        bSkills: [{ key: 'Knock Back', level: 1 }],
        cSkills: [
            { key: 'Spur Atk', subKey: '1', level: 1 },
            { key: 'Spur Atk', subKey: '2', level: 2 },
            { key: 'Spur Atk', subKey: '3', level: 3 }
        ]
    },
    {
        key: 'Bartre: Fearless Warrior',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Hammer', level: 3 },
            { key: 'Hammer+', level: 5 },
            { key: 'Axe of Virility', level: 5 }
        ],
        assists: [{ key: 'Smite', level: 3 }],
        aSkills: [
            { key: 'Fury', subKey: '1', level: 3 },
            { key: 'Fury', subKey: '2', level: 4 },
            { key: 'Fury', subKey: '3', level: 5 }
        ],
        bSkills: [
            { key: 'Brash Assault', subKey: '1', level: 1 },
            { key: 'Brash Assault', subKey: '2', level: 2 },
            { key: 'Brash Assault', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Berkut: Debonair Noble',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Silver Lance', level: 3 },
            { key: 'Verðandi', level: 5 }
        ],
        assists: [{ key: 'Dance', level: 3 }],
        aSkills: [
            { key: 'B Duel Infantry', subKey: '1', level: 3 },
            { key: 'B Duel Infantry', subKey: '2', level: 4 },
            { key: 'B Duel Infantry', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Distant Guard', subKey: '1', level: 1 },
            { key: 'Distant Guard', subKey: '2', level: 2 },
            { key: 'Distant Guard', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Berkut: Prideful Prince',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Berkut`s Lance', level: 3 },
            { key: 'Berkut`s Lance+', level: 5 }
        ],
        specials: [
            { key: 'Rising Flame', level: 3 },
            { key: 'Blazing Flame', level: 4 }
        ],
        aSkills: [
            { key: 'Water Boost', subKey: '1', level: 3 },
            { key: 'Water Boost', subKey: '2', level: 4 },
            { key: 'Water Boost', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Spur Res', subKey: '1', level: 1 },
            { key: 'Spur Res', subKey: '2', level: 2 },
            { key: 'Ward Cavalry', subKey: '1', level: 4 }
        ]
    },
    {
        key: 'Berkut: Purgatorial Prince',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Silver Lance', level: 3 },
            { key: 'Kriemhild', level: 5 }
        ],
        specials: [
            { key: 'Retribution', level: 3 },
            { key: 'Reprisal', level: 4 }
        ],
        aSkills: [
            { key: 'Warding Stance', subKey: '1', level: 2 },
            { key: 'Warding Stance', subKey: '2', level: 3 },
            { key: 'Warding Stance', subKey: '3', level: 4 },
            { key: 'Warding Stance', subKey: '4', level: 5 }
        ],
        cSkills: [
            { key: 'Odd Res Wave', subKey: '1', level: 1 },
            { key: 'Odd Res Wave', subKey: '2', level: 2 },
            { key: 'Odd Res Wave', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Beruka: Quiet Assassin',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Killer Axe', level: 3 },
            { key: 'Killer Axe+', level: 5 },
            { key: 'Beruka`s Axe', level: 5 }
        ],
        specials: [
            { key: 'Night Sky', level: 3 },
            { key: 'Glimmer', level: 4 }
        ],
        aSkills: [
            { key: 'Defiant Def', subKey: '1', level: 1 },
            { key: 'Defiant Def', subKey: '2', level: 2 },
            { key: 'Defiant Def', subKey: '3', level: 4 }
        ],
        bSkills: [{ key: 'Lunge', level: 3 }]
    },
    {
        key: 'Black Knight: Sinister General',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 3 },
            { key: 'Silver Sword', level: 3 },
            { key: 'Alondite', level: 5 }
        ],
        specials: [
            { key: 'New Moon', level: 3 },
            { key: 'Luna', level: 4 },
            { key: 'Black Luna', level: 5 }
        ],
        aSkills: [
            { key: 'Steady Stance', subKey: '1', level: 3 },
            { key: 'Steady Stance', subKey: '2', level: 4 },
            { key: 'Steady Stance', subKey: '3', level: 5 }
        ],
        bSkills: [
            { key: 'Wings of Mercy', subKey: '1', level: 1 },
            { key: 'Wings of Mercy', subKey: '2', level: 2 },
            { key: 'Wings of Mercy', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Boey: Skillful Survivor',
        wps: [
            { key: 'Wind', level: 1 },
            { key: 'Elwind', level: 2 },
            { key: 'Gronnowl', level: 3 },
            { key: 'Gronnowl+', level: 5 },
            { key: 'Inscribed Tome', level: 5 }
        ],
        specials: [
            { key: 'Growing Ember', level: 3 },
            { key: 'Ignis', level: 4 }
        ],
        aSkills: [
            { key: 'Earth Boost', subKey: '1', level: 1 },
            { key: 'Earth Boost', subKey: '2', level: 2 },
            { key: 'Earth Boost', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Renewal', subKey: '1', level: 3 },
            { key: 'Renewal', subKey: '2', level: 4 },
            { key: 'Renewal', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Brady: Daunting Priest',
        wps: [
            { key: 'Assault', level: 1 },
            { key: 'Slow', level: 3 },
            { key: 'Slow+', level: 5 }
        ],
        assists: [
            { key: 'Heal', level: 1 },
            { key: 'Mend', level: 2 },
            { key: 'Recover', level: 3 },
            { key: 'Recover+', level: 5 }
        ],
        specials: [
            { key: 'Growing Ember', level: 3 },
            { key: 'Ignis', level: 4 }
        ]
    },
    {
        key: 'Brunnya: Devoted General',
        wps: [
            { key: 'Thunder', level: 1 },
            { key: 'Elthunder', level: 2 },
            { key: 'Thoron', level: 4 },
            { key: 'Fimbulvetr', level: 5 }
        ],
        specials: [
            { key: 'Chilling Wind', level: 3 },
            { key: 'Glacies', level: 4 }
        ],
        aSkills: [
            { key: 'Death Blow', subKey: '1', level: 3 },
            { key: 'Death Blow', subKey: '2', level: 4 },
            { key: 'Death Blow', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Res Smoke', subKey: '1', level: 1 },
            { key: 'Res Smoke', subKey: '2', level: 2 },
            { key: 'Res Smoke', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Bruno: Masked Hare',
        wps: [
            { key: 'Assault', level: 1 },
            { key: 'Ovoid Staff', level: 3 },
            { key: 'Ovoid Staff+', level: 5 }
        ],
        assists: [
            { key: 'Heal', level: 1 },
            { key: 'Reconcile', level: 2 },
            { key: 'Martyr', level: 3 },
            { key: 'Martyr+', level: 5 }
        ],
        specials: [
            { key: 'Imbue', level: 2 },
            { key: 'Miracle', level: 3 }
        ],
        aSkills: [
            { key: 'Atk/Def Push', subKey: '1', level: 1 },
            { key: 'Atk/Def Push', subKey: '2', level: 2 },
            { key: 'Atk/Def Push', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Dazzling Staff', subKey: '1', level: 3 },
            { key: 'Dazzling Staff', subKey: '2', level: 4 },
            { key: 'Dazzling Staff', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Byleth: Proven Professor',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Silver Sword', level: 3 },
            { key: 'Creator Sword', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Draconic Aura', level: 4 },
            { key: 'Ruptured Sky', level: 5 }
        ],
        aSkills: [
            { key: 'Fury', subKey: '1', level: 2 },
            { key: 'Fury', subKey: '2', level: 3 },
            { key: 'Fury', subKey: '3', level: 4 },
            { key: 'Fury', subKey: '4', level: 5 }
        ],
        bSkills: [
            { key: 'Wrath', subKey: '1', level: 3 },
            { key: 'Wrath', subKey: '2', level: 4 },
            { key: 'Wrath', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Even Atk Wave', subKey: '1', level: 1 },
            { key: 'Even Atk Wave', subKey: '2', level: 2 },
            { key: 'Even Atk Wave', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Byleth: Tested Professor',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Silver Sword', level: 4 },
            { key: 'Creator Sword', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Draconic Aura', level: 4 },
            { key: 'Ruptured Sky', level: 5 }
        ],
        aSkills: [{ key: 'Distant Counter', subKey: '1', level: 5 }],
        bSkills: [
            { key: 'Chill Spd', subKey: '1', level: 3 },
            { key: 'Chill Spd', subKey: '2', level: 4 },
            { key: 'Chill Spd', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Odd Spd Wave', subKey: '1', level: 1 },
            { key: 'Odd Spd Wave', subKey: '2', level: 2 },
            { key: 'Odd Spd Wave', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Caeda: Talys`s Bride',
        wps: [
            { key: 'Thunder', level: 1 },
            { key: 'Elthunder', level: 2 },
            { key: 'Blessed Bouquet', level: 3 },
            { key: 'Blessed Bouquet+', level: 5 }
        ],
        specials: [
            { key: 'Chilling Wind', level: 3 },
            { key: 'Iceberg', level: 4 }
        ],
        aSkills: [
            { key: 'Resistance', subKey: '1', level: 3 },
            { key: 'Atk/Res', subKey: '1', level: 4 },
            { key: 'Atk/Res', subKey: '2', level: 5 }
        ],
        cSkills: [
            { key: 'Hone Spd', subKey: '1', level: 1 },
            { key: 'Hone Spd', subKey: '2', level: 2 },
            { key: 'Hone Spd', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Caeda: Talys`s Heart',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Armorslayer', level: 4 },
            { key: 'Armorslayer+', level: 5 },
            { key: 'Wing Sword', level: 5 }
        ],
        assists: [{ key: 'Rally Speed', level: 3 }],
        specials: [
            { key: 'Chilling', level: 3 },
            { key: 'Glacies', level: 4 }
        ],
        aSkills: [
            { key: 'Darting Blow', subKey: '1', level: 3 },
            { key: 'Darting Blow', subKey: '2', level: 4 },
            { key: 'Darting Blow', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Fortify Res', subKey: '1', level: 1 },
            { key: 'Fortify Res', subKey: '2', level: 2 },
            { key: 'Fortify Fliers', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Cain: The Bull',
        wps: [
            { key: 'IRon Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Brave Sword', level: 3 },
            { key: 'Brave Sword+', level: 5 },
            { key: 'Bull Blade', level: 5 }
        ],
        specials: [
            { key: 'Buckler', level: 3 },
            { key: 'Escutcheon	', level: 4 }
        ],
        bSkills: [
            { key: 'Wings of Mercy', subKey: '1', level: 1 },
            { key: 'Wings of Mercy', subKey: '2', level: 2 },
            { key: 'Wings of Mercy', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Threaten Atk', subKey: '1', level: 3 },
            { key: 'Threaten Atk', subKey: '2', level: 4 },
            { key: 'Threaten Atk', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Caineghis: Gallia`s Lion King',
        wps: [
            { key: 'Whelp (Armored)', level: 1 },
            { key: 'Yearling (Arm.)', level: 2 },
            { key: 'Adult (Armored)', level: 3 },
            { key: 'Lion King Fang', level: 5 }
        ],
        specials: [
            { key: 'Glowing Ember', level: 3 },
            { key: 'Bonfire', level: 4 }
        ],
        aSkills: [
            { key: 'Distant Def', subKey: '1', level: 2 },
            { key: 'Distant Def', subKey: '2', level: 3 },
            { key: 'Distant Def', subKey: '3', level: 4 },
            { key: 'Distant Def', subKey: '4', level: 5 }
        ],
        bSkills: [
            { key: 'Vengeful Fighter', subKey: '1', level: 3 },
            { key: 'Vengeful Fighter', subKey: '2', level: 4 },
            { key: 'Vengeful Fighter', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Distant Guard', subKey: '1', level: 1 },
            { key: 'Distant Guard', subKey: '2', level: 2 },
            { key: 'Distant Guard', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Camilla: Bewitching Beauty',
        wps: [
            { key: 'Iron Axe', level: 1 },
            { key: 'Steel Axe', level: 2 },
            { key: 'Brave Axe', level: 3 },
            { key: 'Brave Axe+', level: 5 },
            { key: 'Camilla`s Axe', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Draconic Aura', level: 4 }
        ],
        aSkills: [
            { key: 'Darting Blow', subKey: '1', level: 3 },
            { key: 'Darting Blow', subKey: '2', level: 4 },
            { key: 'Darting Blow', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Savage Blow', subKey: '1', level: 1 },
            { key: 'Savage Blow', subKey: '2', level: 2 },
            { key: 'Savage Blow', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Camilla: Flower of Fantasy',
        wps: [
            { key: 'Flux', level: 1 },
            { key: 'Ruin', level: 2 },
            { key: 'Fenrir', level: 3 },
            { key: 'Book of Dreams', level: 5 }
        ],
        assists: [{ key: 'Draw Back', level: 3 }],
        specials: [
            { key: 'Chilling', level: 3 },
            { key: 'Glacies', level: 4 }
        ],
        aSkills: [
            { key: 'Atk/Res Bond', subKey: '1', level: 1 },
            { key: 'Atk/Res Bond', subKey: '2', level: 2 },
            { key: 'Atk/Res Bond', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Atk/Res Link', subKey: '1', level: 3 },
            { key: 'Atk/Res Link', subKey: '2', level: 4 },
            { key: 'Atk/Res Link', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Spur Atk', subKey: '1', level: 3 },
            { key: 'Spur Atk', subKey: '2', level: 2 },
            { key: 'Goad Fliers', level: 5 }
        ]
    },
    {
        key: 'Camilla: Holiday Traveler',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Kadomatsu', level: 3 },
            { key: 'Kadomatsu+', level: 5 }
        ],

        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Draconic Aura', level: 4 }
        ],
        aSkills: [
            { key: 'Spd/Def Bond', subKey: '1', level: 3 },
            { key: 'Spd/Def Bond', subKey: '2', level: 4 },
            { key: 'Spd/Def Bond', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Spur Def', subKey: '1', level: 1 },
            { key: 'Spur Def', subKey: '2', level: 2 },
            { key: 'Ward Fliers', level: 4 }
        ]
    },
    {
        key: 'Camilla: Light of Nohr',
        wps: [
            { key: 'Assault', level: 1 },
            { key: 'Sanngriðr', level: 5 }
        ],
        assists: [
            { key: 'Heal', level: 1 },
            { key: 'Reconcile', level: 2 },
            { key: 'Restore	', level: 3 },
            { key: 'Restore+', level: 5 }
        ],
        aSkills: [
            { key: 'Atk/Spd Push', subKey: '1', level: 2 },
            { key: 'Atk/Spd Push', subKey: '2', level: 3 },
            { key: 'Atk/Spd Push', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Wrathful Staff', subKey: '1', level: 3 },
            { key: 'Wrathful Staff', subKey: '2', level: 4 },
            { key: 'Wrathful Staff', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Atk Tactic', subKey: '1', level: 1 },
            { key: 'Atk Tactic', subKey: '2', level: 2 },
            { key: 'Atk Tactic', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Camilla: Spring Princess',
        wps: [
            { key: 'Wind', level: 1 },
            { key: 'Elwind', level: 2 },
            { key: 'Green Egg', level: 3 },
            { key: 'Green Egg+', level: 5 }
        ],
        assists: [{ key: 'Rally Attack', level: 3 }],
        specials: [
            { key: 'Chilling', level: 3 },
            { key: 'Glacies', level: 4 }
        ],
        aSkills: [
            { key: 'Defiant Spd', subKey: '1', level: 1 },
            { key: 'Defiant Spd', subKey: '2', level: 2 },
            { key: 'Defiant Spd', subKey: '3', level: 4 }
        ],
        bSkills: [{ key: 'Live for Bounty', subKey: '1', level: 4 }]
    },
    {
        key: 'Camilla: Steamy Secrets',
        wps: [
            { key: 'Iron Dagger', level: 1 },
            { key: 'Steel Dagger', level: 2 },
            { key: 'Ouch Pouch', level: 3 },
            { key: 'Ouch Pouch+', level: 5 }
        ],
        aSkills: [
            { key: 'Attack', subKey: '1', level: 3 },
            { key: 'Atk/Spd', subKey: '1', level: 4 },
            { key: 'Atk/Spd', subKey: '2', level: 5 }
        ],
        cSkills: [
            { key: 'Hone Atk', subKey: '1', level: 1 },
            { key: 'Hone Atk', subKey: '2', level: 2 },
            { key: 'Hone Fliers', level: 4 }
        ]
    },
    {
        key: 'Camilla: Tropical Beauty',
        wps: [
            { key: 'Thunder', level: 1 },
            { key: 'Elthunder', level: 2 },
            { key: 'Juicy Wave', level: 3 },
            { key: 'Juicy Wave+', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Dragon Aura', level: 4 }
        ],
        aSkills: [
            { key: 'Death Blow', subKey: '1', level: 1 },
            { key: 'Death Blow', subKey: '2', level: 2 },
            { key: 'Death Blow', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Flier Formation', subKey: '1', level: 3 },
            { key: 'Flier Formation', subKey: '2', level: 4 },
            { key: 'Flier Formation', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Hone Atk', subKey: '1', level: 3 },
            { key: 'Hone Atk', subKey: '2', level: 4 },
            { key: 'Hone Fliers', level: 5 }
        ]
    },
    {
        key: 'Camus: Sable Knight',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Silver Lance', level: 3 },
            { key: 'Gradivus', level: 5 }
        ],
        specials: [
            { key: 'Rising Thunder', level: 3 },
            { key: 'Growing Thunder', level: 4 }
        ],
        aSkills: [{ key: 'Grani`s Shield', level: 4 }],
        cSkills: [
            { key: 'Spur Atk', subKey: '1', level: 1 },
            { key: 'Spur Atk', subKey: '2', level: 2 },
            { key: 'Goad Cavalry', level: 4 }
        ]
    },
    {
        key: 'Canas: Wisdom Seeker',
        wps: [
            { key: 'Flux', level: 1 },
            { key: 'Ruin', level: 2 },
            { key: 'Rauðrowl', level: 3 },
            { key: 'Rauðrowl+', level: 5 }
        ],
        assists: [{ key: 'Reciprocal Aid', level: 3 }],
        aSkills: [
            { key: 'Resistance', subKey: '1', level: 3 },
            { key: 'HP/Res', subKey: '1', level: 4 },
            { key: 'HP/Res', subKey: '2', level: 5 }
        ],
        cSkills: [
            { key: 'Res Tactic', subKey: '1', level: 1 },
            { key: 'Res Tactic', subKey: '2', level: 2 },
            { key: 'Res Tactic', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Catria: Middle Whitewing',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Killer Lance', level: 3 },
            { key: 'Killer Lance+', level: 5 },
            { key: 'Whitewing Lance', level: 5 }
        ],
        specials: [
            { key: 'New Moon', level: 3 },
            { key: 'Luna', level: 4 }
        ],
        aSkills: [
            { key: 'Armored Blow', subKey: '1', level: 1 },
            { key: 'Armored Blow', subKey: '2', level: 2 },
            { key: 'Armored Blow', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Seal Atk', subKey: '1', level: 3 },
            { key: 'Seal Atk', subKey: '2', level: 4 },
            { key: 'Seal Atk', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Catria: Mild Middle Sister',
        wps: [
            { key: 'Iron Sword', level: 1 },
            { key: 'Steel Sword', level: 2 },
            { key: 'Silver Sword', level: 3 },
            { key: 'Astra Blade', level: 5 }
        ],
        assists: [
            { key: 'Harsh Command', level: 3 },
            { key: 'Harsh Command+', level: 4 }
        ],
        aSkills: [
            { key: 'Atk/Spd Bond', subKey: '1', level: 2 },
            { key: 'Atk/Spd Bond', subKey: '2', level: 3 },
            { key: 'Atk/Spd Bond', subKey: '3', level: 4 },
            { key: 'Atk/Spd Bond', subKey: '4', level: 5 }
        ],
        bSkills: [
            { key: 'Aerobatics', subKey: '1', level: 1 },
            { key: 'Aerobatics', subKey: '2', level: 2 },
            { key: 'Aerobatics', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Spd Tactic', subKey: '1', level: 3 },
            { key: 'Spd Tactic', subKey: '2', level: 4 },
            { key: 'Spd Tactic', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Catria: Spring Whitewing',
        wps: [
            { key: 'Thunder', level: 1 },
            { key: 'Elthunder', level: 2 },
            { key: 'Thoron', level: 3 },
            { key: 'Huginn`s Egg', level: 5 }
        ],
        assists: [{ key: 'Draw Back', level: 3 }],
        bSkills: [
            { key: 'Chill Res', subKey: '1', level: 3 },
            { key: 'Chill Res', subKey: '2', level: 4 },
            { key: 'Chill Res', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Spur Spd', subKey: '1', level: 1 },
            { key: 'Drive Spd', subKey: '1', level: 2 },
            { key: 'Drive Spd', subKey: '2', level: 4 }
        ]
    },
    {
        key: 'Cecilia: Etrurian General',
        wps: [
            { key: 'Wind', level: 1 },
            { key: 'Elwind', level: 2 },
            { key: 'Gronnraven', level: 3 },
            { key: 'Gronnraven+	', level: 5 }
        ],
        assists: [{ key: 'Rally Resistance', level: 3 }],
        aSkills: [
            { key: 'Attack', subKey: '1', level: 3 },
            { key: 'Attack', subKey: '2', level: 4 },
            { key: 'Attack', subKey: '3', level: 5 }
        ],
        bSkills: [
            { key: 'Escape Route', subKey: '1', level: 1 },
            { key: 'Escape Route', subKey: '2', level: 2 },
            { key: 'Escape Route', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Cecilia: Festive Instructor',
        wps: [
            { key: 'Iron Dagger', level: 1 },
            { key: 'Steel Dagger', level: 2 },
            { key: 'Goodie Boot', level: 3 },
            { key: 'Goodie Boot+', level: 5 }
        ],
        specials: [
            { key: 'Chilling Wind', level: 3 },
            { key: 'Iceberg', level: 4 }
        ],
        aSkills: [
            { key: 'Atk/Res Bond', subKey: '1', level: 1 },
            { key: 'Atk/Res Bond', subKey: '2', level: 2 },
            { key: 'Atk/Res Bond', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Def Ploy', subKey: '1', level: 3 },
            { key: 'Def Ploy', subKey: '2', level: 4 },
            { key: 'Def Ploy', subKey: '3', level: 5 }
        ]
    },
    { key: 'Ced: Hero on the Wind', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Celica: Caring Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Celica: Imprisoned Soul', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Celica: Queen of Valentia', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Celica: Warrior Priestess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Chad: Lycian Wildcat', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Charlotte: Money Maiden', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Cherche: Wyvern Friend', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Chrom: Exalted Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Chrom: Gifted Leader', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Chrom: Knight Exalt', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Chrom: Spring Exalt', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Clair: Highborn Flier', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Clarine: Refined Noble', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Clarisse: Sniper in the Dark', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Claude: The Schemer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Clive: Idealistic Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Conrad: Masked Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Cordelia: Knight Paradise', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Cordelia: Knight Paragon', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Cordelia: Perfect Bride', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Cormag: Aloof Lanceman', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Corrin: Dream Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Corrin: Dream Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Corrin: Enjoying Tradition', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Corrin: Fateful Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Corrin: Fateful Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Corrin: Novice Vacationer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Corrin: Wailing Soul', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Cynthia: Hero Chaser', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Death Knight: The Reaper', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Deirdre: Lady of the Forest', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Delthea: Free Spirit', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Delthea: Tatarrah`s Puppet', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Dimitri: The Protector', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Donnel: Village Hero', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Dorcas: Pumpkin Smasher', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Dorcas: Serene Warrior', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Dozla: Harvest Attendant', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Draug: Gentle Giant', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Duma: God of Strength', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Echidna: Unyielding Idealist', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Edelgard: The Future', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Effie: Army of One', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eir: Merciful Death', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eir: Renewed Life', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eirika: Anamnesis Lady', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eirika: Gentle as Snow', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eirika: Graceful Resolve', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eirika: Restoration Lady', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eldigan: Lionheart', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eleonora: Shooting Starlet', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Elincia: Estival Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Elincia: Lost Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Elise: Bubbling Flower', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Elise: Budding Flower', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Elise: Tropical Flower', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eliwood: Blazing Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eliwood: Devoted Love', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eliwood: Knight of Lycia', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eliwood: Marquess Pherae', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ephraim: Dynastic Duo', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ephraim: Legendary Lord', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ephraim: Restoration Lord', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ephraim: Sacred Twin Lord', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ephraim: Sparkling Gallantly', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Est: Junior Whitewing', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ethlyn: Spirited Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ewan: Eager Student', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Eyvel: Mistress of Fiana', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Fae: Divine Dragon', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Fae: Holiday Dear', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Faye: Devoted Heart', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Felicia: Maid Mayhem', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Felicia: Off the Menu', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Finn: Lance of Legend', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Fiora: Defrosted Illian', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Fir: Sword Student', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Fjorm: Bride of Rime', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Fjorm: New Traditions', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Fjorm: Princess of Ice', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Flora: Cold as Ice', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Flora: Signature Dish', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Florina: Lovely Flier', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Forsyth: Loyal Lieutenant', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Frederick: Horizon Watcher', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Frederick: Polite Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gaius: Candy Stealer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gaius: Thief Exposed', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Garon: King of Nohr', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Genny: Dressed with Care', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Genny: Endearing Ally', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gerik: Desert Tiger', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gerome: Masked Rider', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gharnef: Dark Pontifex', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gordin: Altean Archer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gray: Wry Comrade', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Greil: Heroic Exemplar', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gunnthrá: Beaming Smile', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gunnthrá: Voice of Dreams', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gunnthrá: Year`s First Dream', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gunter: Inveterate Soldier', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Gwendolyn: Adorable Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Haar: Black Tempest', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hana: Focused Samurai', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hardin: Dark Emperor', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hawkeye: Desert Guardian', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hector: Brave Warrior', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hector: Dressed-Up Duo', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hector: General of Ostia', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hector: Just Here to Fight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hector: Marquess of Ostia', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Helbindi: Savage Scourge', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Helbindi: Seaside Scourge', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Henry: Happy Vampire', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Henry: Twisted Mind', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hilda: Idle Maiden', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hinata: Wild Samurai', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hinoka: Blue Sky Warrior', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hinoka: Relaxed Warrior', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hinoka: Warrior Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hríd: Icy Blade', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hríd: Resolute Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Hubert: Sinister Servant', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Idunn: Dark Priestess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Igrene: Nabata Protector', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ike: Brave Mercenary', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ike: Stalwart Heart', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ike: Vanguard Legend', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ike: Young Mercenary', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ilyana: Treat Harvester', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Inigo: Indigo Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Innes: Flawless Form', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Innes: Regal Strategician', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ishtar: Thunder Goddess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ishtar: Thunder`s Waltz', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Itsuki: Finding a Path', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Jaffar: Angel of Death', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Jaffar: Angel of Night', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Jagen: Veteran Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Jakob: Devoted Monster', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Jakob: Devoted Servant', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Jamke: Prince of Verdane', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Jeorge: Perfect Shot', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Joshua: Tempest King', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Julia: Crusader of Light', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Julia: Naga`s Blood', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Julius: Scion of Darkness', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kaden: Kitsune Braggart', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kagero: Beverage Ninja', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kagero: Honorable Ninja', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kagero: Spring Ninja', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kana: Dragon Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kana: Dragon Spawn', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Karel: Sword Demon', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Karla: Sword Vassal', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Katarina: Wayward One', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kaze: Easygoing Ninja', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Keaton: Lupine Collector', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kempf: Conniving General', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kiria: Cool Façade', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kjelle: Fair Fighter', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Klein: Silver Nobleman', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kliff: Curious Spirit', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Kronya: Gleaming Blade', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lachesis: Lionheart`s Sister', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Laegjarn: Burning Sun', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Laegjarn: New Experiences', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Laegjarn: Sheathed Steel', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Laevatein: Bonfire`s Blaze', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Laevatein: Kumade Warrior', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Laevatein: Searing Steel', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'L`Arachel: Harvest Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'L`Arachel: Princess of Light', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Larcei: Keen Kin ', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Larum: Sprightly Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Laslow: Dancing Duelist', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Leanne: Forest`s Song', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Legault: The Hurricane', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Legion: Masked Maniac', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Leif: Prince of Leonster', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Leif: Unifier of Thracia', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lene: Yearning Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Leo: Extra Tomatoes', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Leo: Seashore`s Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Leo: Sorcerous Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Leon: True of Heart', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lethe: Gallia`s Valkyrie', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lethe: New Year`s Claw', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lewyn: Guiding Breeze', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Libra: Fetching Friar', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lilina: Beachside Bloom', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lilina: Blush of Youth', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lilina: Delightful Noble', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Linde: Light Mage', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Linde: Summer Rays', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Linus: Mad Dog', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lissa: Pure Joy', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lissa: Sprightly Cleric', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lloyd: White Wolf', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Loki: Spring Trickster', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Loki: The Trickster', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lon`qu: Solitary Blade', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Louise: Eternal Devotion', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lucina: Brave Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lucina: Future Witness', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lucina: Glorious Archer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lucina: Spring Exalt', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lucius: The Light', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lugh: Anima Child', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lukas: Buffet for One', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lukas: Sharp Soldier', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Luke: Rowdy Squire', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lute: Prodigy', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lyn: Brave Lady', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lyn: Bride of the Plains', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lyn: Lady of the Beach', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lyn: Lady of the Plains', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lyn: Lady of the Wind', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lyn: Wind`s Embrace', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Lyon: Shadow Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mae: Bundle of Energy', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mamori: Microwavin` Idol', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mareeta: Sword of Stars', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mareeta: The Blade`s Pawn', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Maria: Minerva`s Sister', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Maribelle: Dire Damsel', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Marisa: Crimson Flash', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Marisa: Crimson Rabbit', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Marth: Altean Groom', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Marth: Altean Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Marth: Enigmatic Blade', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Marth: Hero-King', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Marth: Royal Altean Duo', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mathilda: Legendary Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Matthew: Faithful Spy', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mercedes: Kindly Devotee', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Merric: Wind Mage', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mia: Lady of Blades', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mia: Moonlit Witch', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Micaiah: Priestess of Dawn', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Micaiah: Queen of Dawn', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Micaiah: Summer`s Dawn', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Michalis: Ambitious King', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mikoto: Caring Mother', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Minerva: Red Dragoon', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mist: Helpful Sister', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mist: Purest Spirit', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Mordecai: Kindhearted Tiger', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Morgan: Lad from Afar', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Morgan: Lass from Afar', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Myrrh: Great Dragon', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Myrrh: Spooky Monster', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Naesala: Sky`s Shadow', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Naga: Dragon Divinity', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nagi: Dragon Avatar', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nah: Little Miss', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nailah: Unflinching Eye', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nanna: Nordion Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Narcian: Wyvern General', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Navarre: Scarlet Sword', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nephenee: Fierce Halberdier', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nephenee: Sincere Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Niles: Cruel to Be Kind', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Niles: Forbidden Tease', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nina: Eye Spy', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ninian: Bright-Eyed Bride', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ninian: Oracle of Destiny', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nino: Flower of Frost', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nino: Pale Flower', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nino: Pious Mage', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Noire: Shade Seeker', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Norne: The Volunteer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nowi: Eternal Witch', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Nowi: Eternal Youth', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Oboro: Fierce Fighter', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Odin: Potent Force', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ogma: Loyal Blade', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Oliver: Admirer of Beauty', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Olivia: Blushing Beauty', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Olivia: Festival Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Olivia: Sky-High Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Olwen: Blue Mage Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Olwen: Righteous Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ophelia: Dramatic Heroine', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Oscar: Agile Horseman', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Osian: Scolded Soldier', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Owain: Chosen One', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Palla: Eldest Bun-Bun', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Palla: Eldest Whitewing', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Panne: Proud Taguel', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Pent: Fancy Fiancé', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Peony: Sweet Dream', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Perceval: Knightly Ideal', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Peri: Playful Slayer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Petra: Princess of Brigid', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Phina: Roving Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Priscilla: Delicate Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Python: Apathethic Archer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Quan: Luminous Lancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Raigh: Dark Child', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ranulf: Friend of Nations', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Raven: Peerless Fighter', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Rebecca: Wildflower', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Reinhardt: Lightning`s Rondo', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Reinhardt: Thunder`s Fist', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Reinhardt: Thunder`s Sword', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Reyson: White Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Rhajat: Black Magician', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Rinea: Reminiscent Belle', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Robin: Fell Reincarnation', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Robin: Fell Vessel', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Robin: Festive Tactician', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Robin: High Deliverer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Robin: Mystery Tactician', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Robin: Seaside Tactician', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Roderick: Steady Squire', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Rolf: Tricky Archer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ross: His Father`s Son', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Roy: Blazing Lion', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Roy: Brave Lion', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Roy: Young Lion', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Roy: Youthful Gifts', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Rutger: Lone Swordsman', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ryoma: Dancing Samurai', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ryoma: Peerless Samurai', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ryoma: Samurai at Ease', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ryoma: Supreme Samurai', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Saber: Driven Mercenary', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Saias: Bishop of Flame', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Saizo: Angry Ninja', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sakura: Gentle Nekomata', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sakura: Hot-Spring Healer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sakura: Loving Priestess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sanaki: Apostle in White', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sanaki: Begnion`s Apostle', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Selena: Cutting Wit', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Seliph: Heir of Light', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Selkie: Free Spirit', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Selkie: New Year`s Spirit', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Serra: Outspoken Cleric', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Seth: Silver Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Setsuna: Absent Archer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Shanna: Sprightly Flier', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Shannan: Wielder of Astra', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sharena: Princess of Askr', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sharena: Spring Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sheena: Princess of Gra', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Shigure: Dark Sky Singer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Shigure: Uplifting Artist', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Shiro: Raw Talent', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Siegbert: Future King', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sigrun: Loyal Protector', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sigrun: Steadfast Bride', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sigurd: Holy Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Silas: Loyal Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Silque: Adherent of Mila', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Silvia: Traveling Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sirius: Mysterious Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Soleil: Adorable Adorer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sonya: Vengeful Mage', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sophia: Nabata Prophet', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Soren: Addled Strategist', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Soren: Shrewd Strategist', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sothe: Zephyr', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sothis: Girl on the Throne', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sothis: Silver Specter', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Stahl: Viridian Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Subaki: Perfect Expert', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sue: Doe of the Plains', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sully: Crimson Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Sumia: Maid of Flowers', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Surtr: Ruler of Flame', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tailtiu: Thunder Noble', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Takumi: Empty Vessel', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Takumi: Prince at Play', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Takumi: Prince of Soup', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Takumi: Wild Card', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tana: Noble and Nimble', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tana: Winged Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tanith: Forthright Heart', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tanya: Dagdar`s Kid', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tethys: Beloved Dancer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tharja: "Normal Girl"', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tharja: Dark Shadow', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tharja: Obsessive Bride', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Thea: Stormy Flier', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Thrasir: Omnicidal Witch', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tibarn: Lord of the Air', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tiki: Beachside Scion', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tiki: Dragon Scion', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tiki: Legendary Dragon', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tiki: Naga`s Voice', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tiki: Summering Scion', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tiki: Torpid Dragon', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Titania: Mighty Mercenary', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Titania: Warm Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tobin: The Clueless One', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Travant: Heir of Light', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Tsubasa: Madcap Idol', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ursula: Blue Crow', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ursula: Clear-Blue Crow', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Valbar: Open and Honest', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Valter: Dark Moonstone', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Velouria: Wolf Cub', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Veronica: Brave Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Veronica: Spring Princess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Virion: Elite Archer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Walhart: The Conqueror', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Wolt: Sunbeam Archer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Wrys: Kindly Priest', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Xander: Dancing Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Xander: Paragon Knight', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Xander: Spring Prince', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Xander: Student Swimmer', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Yarne: Timid Taguel', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ylgr: Breaking the Ice', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Ylgr: Fresh Snowfall', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Yune: Chaos Goddess', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Zelgius: Jet-Black General', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Zephiel: The Liberator', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Zephiel: Winter`s Crown', wps: [{ key: 'Hammer', level: 1 }] },
    //
    {
        key: 'Rath: Wolf of Sacae',
        wps: [
            { key: 'Iron Bow', level: 1 },
            { key: 'Steel Bow', level: 2 },
            { key: 'Slaying Bow', level: 3 },
            { key: 'Slaying Bow+', level: 5 }
        ],
        specials: [
            { key: 'Night Sky', level: 3 },
            { key: 'Glimmer', level: 4 }
        ],
        aSkills: [
            { key: 'Spd/Res Form', subKey: '1', level: 1 },
            { key: 'Spd/Res Form', subKey: '2', level: 2 },
            { key: 'Spd/Res Form', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Def Smoke', subKey: '1', level: 3 },
            { key: 'Def Smoke', subKey: '2', level: 4 },
            { key: 'Def Smoke', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Nils: Bright Bard',
        wps: [
            { key: 'Fire Breath', level: 1 },
            { key: 'Fire Breath+', level: 2 },
            { key: 'Flametongue', level: 3 },
            { key: 'Frost Breath', level: 5 }
        ],
        assists: [{ key: 'Play', level: 3 }],
        aSkills: [
            { key: 'HP', subKey: '1', level: 1 },
            { key: 'HP/Def', subKey: '1', level: 2 },
            { key: 'HP/Def', subKey: '2', level: 4 }
        ],
        bSkills: [
            { key: 'Even Pulse Tie', subKey: '1', level: 3 },
            { key: 'Even Pulse Tie', subKey: '2', level: 4 },
            { key: 'Even Pulse Tie', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Infantry Pulse', subKey: '1', level: 3 },
            { key: 'Infantry Pulse', subKey: '2', level: 4 },
            { key: 'Infantry Pulse', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Leila: Rose amid Fangs',
        wps: [
            { key: 'Iron Dagger', level: 1 },
            { key: 'Steel Dagger', level: 2 },
            { key: 'Silver Dagger', level: 3 },
            { key: 'Constant Dagger', level: 5 }
        ],
        assists: [
            { key: 'Rally Speed', level: 3 },
            { key: 'Rally Atk/Spd', level: 4 },
            { key: 'Rally Atk/Spd+', level: 5 }
        ],
        aSkills: [
            { key: 'Life and Death', subKey: '1', level: 2 },
            { key: 'Life and Death', subKey: '2', level: 3 },
            { key: 'Life and Death', subKey: '3', level: 4 },
            { key: 'Life and Death', subKey: '4', level: 5 }
        ],
        bSkills: [
            { key: 'Atk/Def Ruse', subKey: '1', level: 3 },
            { key: 'Atk/Def Ruse', subKey: '2', level: 4 },
            { key: 'Atk/Def Ruse', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Atk Smoke', subKey: '1', level: 1 },
            { key: 'Atk Smoke', subKey: '2', level: 2 },
            { key: 'Atk Smoke', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Heath: Wandering Knight',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Ridersbane', level: 3 },
            { key: 'Ridersbane+', level: 5 }
        ],
        specials: [
            { key: 'Dragon Gaze', level: 3 },
            { key: 'Dragon Fang', level: 4 }
        ],
        aSkills: [
            { key: 'Atk/Def Push', subKey: '1', level: 1 },
            { key: 'Atk/Def Push', subKey: '2', level: 2 },
            { key: 'Atk/Def Push', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Escape Route', subKey: '1', level: 3 },
            { key: 'Escape Route', subKey: '2', level: 4 },
            { key: 'Escape Route', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Fiora: Airborne Warrior',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Guard Lance', level: 3 },
            { key: 'Guard Lance+', level: 5 }
        ],
        specials: [
            { key: 'Chilling Wind', level: 3 },
            { key: 'Iceberg', level: 4 }
        ],
        aSkills: [
            { key: 'Fury', subKey: '1', level: 1 },
            { key: 'Fury', subKey: '2', level: 2 },
            { key: 'Fury', subKey: '3', level: 4 }
        ],
        bSkills: [
            { key: 'Pegasus Flight', subKey: '1', level: 3 },
            { key: 'Pegasus Flight', subKey: '2', level: 4 },
            { key: 'Pegasus Flight', subKey: '3', level: 5 }
        ]
    },
    {
        key: 'Chrom: Crowned Exalt',
        wps: [
            { key: 'Iron Bow', level: 1 },
            { key: 'Steel Bow', level: 2 },
            { key: 'Silver Bow', level: 3 },
            { key: 'Randgríðr', level: 5 }
        ],
        assists: [
            { key: 'Reposition', level: 3 },
            { key: 'To Change Fate!', level: 4 }
        ],
        aSkills: [{ key: 'Close Counter', level: 5 }],
        bSkills: [
            { key: 'Lull Atk/Def', subKey: '1', level: 3 },
            { key: 'Lull Atk/Def', subKey: '2', level: 4 },
            { key: 'Lull Atk/Def', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Rouse Def/Res', subKey: '1', level: 1 },
            { key: 'Rouse Def/Res', subKey: '2', level: 2 },
            { key: 'Rouse Def/Res', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Lysithea: Child Prodigy',
        wps: [
            { key: 'Flux', level: 1 },
            { key: 'Ruin', level: 2 },
            { key: 'Fenrir', level: 3 },
            { key: 'Hades Ω', level: 5 }
        ],
        specials: [
            { key: 'New Moon', level: 3 },
            { key: 'Moonbow', level: 4 }
        ],
        aSkills: [
            { key: 'Death Blow', subKey: '1', level: 2 },
            { key: 'Death Blow', subKey: '2', level: 3 },
            { key: 'Death Blow', subKey: '3', level: 4 },
            { key: 'Death Blow', subKey: '4', level: 5 }
        ],
        bSkills: [
            { key: 'Lull Spd/Res', subKey: '1', level: 3 },
            { key: 'Lull Spd/Res', subKey: '2', level: 4 },
            { key: 'Lull Spd/Res', subKey: '3', level: 5 }
        ],
        cSkills: [
            { key: 'Time`s Pulse', subKey: '1', level: 1 },
            { key: 'Time`s Pulse', subKey: '2', level: 2 },
            { key: 'Time`s Pulse', subKey: '3', level: 4 }
        ]
    },
    {
        key: 'Ferdinand: Noblest of Nobles',
        wps: [
            { key: 'Iron Lance', level: 1 },
            { key: 'Steel Lance', level: 2 },
            { key: 'Vanguard', level: 3 },
            { key: 'Vanguard+', level: 5 }
        ],
        assists: [{ key: 'Reposition', level: 3 }],
        aSkills: [
            { key: 'Fortress Def', subKey: '1', level: 1 },
            { key: 'Fortress Def', subKey: '2', level: 2 },
            { key: 'Fortress Def', subKey: '3', level: 4 }
        ],
        cSkills: [
            { key: 'Rouse Spd/Def', subKey: '1', level: 3 },
            { key: 'Rouse Spd/Def', subKey: '2', level: 4 },
            { key: 'Rouse Spd/Def', subKey: '3', level: 5 }
        ]
    },
    { key: 'Bernadetta: Eternal Loner', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Annette: Overachiever', wps: [{ key: 'Hammer', level: 1 }] },
    { key: 'Flame Emperor: Bringer of War', wps: [{ key: 'Hammer', level: 1 }] }
];
