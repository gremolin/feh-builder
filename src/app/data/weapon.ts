import { Weapon } from './data.types';
import { axe, bow, lance, sword } from './hardcoded';

export const fehWeapons: Weapon[] = [
    { name: '-', mt: 0, description: '-', sp: undefined },
    { name: 'Iron Lance', mt: 6, description: '', sp: 50, required: [lance] },
    { name: 'Steel Lance', mt: 8, description: '', sp: 100, required: [lance] },
    { name: 'Silver Lance', mt: 11, description: '', sp: 200, required: [lance] },
    { name: 'Silver Lance+', mt: 14, description: '', sp: 200, required: [lance], refinable: true },
    { name: 'Iron Sword', mt: 6, description: '', sp: 50, required: [sword] },
    { name: 'Steel Sword', mt: 8, description: '', sp: 100, required: [sword] },
    { name: 'Silver Sword', mt: 11, description: '', sp: 200, required: [sword] },
    { name: 'Silver Sword+', mt: 14, description: '', sp: 200, required: [sword], refinable: true },
    { name: 'Iron Axe', mt: 6, description: '', sp: 50, required: [axe] },
    { name: 'Steel Axe', mt: 8, description: '', sp: 100, required: [axe] },
    { name: 'Silver Axe', mt: 11, description: '', sp: 200, required: [axe] },
    { name: 'Silver Axe+', mt: 14, description: '', sp: 200, required: [axe], refinable: true },
    { name: 'Iron Bow', mt: 4, description: '', sp: 50, required: [bow] },
    { name: 'Steel Bow', mt: 6, description: '', sp: 100, required: [bow] },
    { name: 'Silver Bow', mt: 9, description: '', sp: 200, required: [bow] },
    { name: 'Silver Bow+', mt: 13, description: '', sp: 200, required: [bow], refinable: true },
    { name: 'Slaying Axe', mt: 10, description: 'Accelerates Special trigger (cooldown count-1).', sp: 200, required: [axe] },
    {
        name: 'Slaying Axe+',
        mt: 14,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 300,
        required: [axe],
        refinable: true
    },
    {
        name: 'Brave Lance',
        mt: 5,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 200,
        required: ['Lance'],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Brave Lance+',
        mt: 8,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 300,
        required: ['Lance'],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Panther Lance',
        mt: 16,
        description: 'During combat, boosts unit`s Atk/Def by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.)',
        sp: 400,
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description: 'If cavalry allies within 2 spaces use sword, lance, or axe and unit initiates combat, unit attacks twice.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ],
        required: ['Abel: The Panther']
    },
    { name: 'Light', mt: 4, description: '', sp: 50, required: ['Blue Tome'] },
    { name: 'Ellight', mt: 6, description: '', sp: 100, required: ['Blue Tome'] },
    { name: 'Shine', mt: 9, description: '', sp: 200, required: ['Blue Tome'] },
    {
        name: 'Imbued Koma',
        mt: 14,
        description:
            'Accelerates Special trigger (cooldown count-1). At start of combat, if Special is ready, grants Atk/Spd/Def/Res+5 during combat and foe cannot make a follow-up attack.',
        sp: 400,
        required: ['Alfonse: Askran Duo']
    },
    {
        name: 'Fólkvangr',
        mt: 16,
        description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Def+7 during combat.',
        sp: 400,
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description:
                    'If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ],
        required: ['Alfonse: Prince of Askr']
    },
    {
        name: 'Giant Spoon',
        mt: 9,
        description: 'Deals +10 damage when Special triggers.',
        sp: 200,
        required: [axe]
    },
    {
        name: 'Giant Spoon+',
        mt: 13,
        description: 'Deals +10 damage when Special triggers.',
        sp: 300,
        refinable: true,
        required: [axe]
    },
    {
        name: 'Falchion',
        mt: 16,
        description: 'Effective against dragons.\nAt the start of every third turn, unit recovers 10 HP',
        sp: 400,
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description:
                    'If unit`s HP = 100% at start of combat and unit initiates combat, unit attacks twice, but deals 5 damage to unit after combat.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ],
        required: [sword]
    },
    {
        name: 'Dracofalchion',
        mt: 16,
        description:
            'Effective against dragon foes. Grants Atk+3. If the number of foes within 2 spaces (excluding target) ≥ the number of allies within 2 spaces (excluding unit), grants Atk/Spd/Def/Res+5 during combat.',
        sp: 400,
        required: ['Alm: Imperial Ascent'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Scepter of Love', // TODO
        mt: 0,
        description: '',
        sp: 0,
        required: ['Alm: Lovebird Duo']
    },
    {
        name: 'Luna Arc',
        mt: 14,
        description:
            'Effective against flying foes. Grants Spd+3. If unit initiates combat, deals damage = 25% of foe`s Def. (Ignores reductions to Def from special skills like Lunar Flash.) ',
        sp: 400,
        required: ['Alm: Saint-King'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Earthly Gáe Bolg',
        mt: 14,
        description:
            'Grants Def+3. In combat against an infantry, armored, or cavalry foe, inflicts Atk/Def-5 on foe and neutralizes foe`s bonuses to Atk/Def (from skills like Fortify, Rally, etc.) during combat.',
        sp: 400,
        required: ['Altena: Luminous Rider'],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Ragnell·Alondite',
        mt: 14,
        description: 'Unit can counterattack regardless of foe`s range. Inflicts Spd-5. Unit attacks twice (even if foe initiates combat).',
        sp: 400,
        required: ['Altena: Luminous Rider'],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Grado Poleax',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        required: ['Amelia: Rose of the War'],
        skillLevels: [
            {
                value: 'Perf',
                description:
                    'If a bonus granted by a skill like Rally or Hone and/or extra movement granted by a skill like Armor March or Armored Boots is active, grants Spd/Def+5 during combat.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ]
    },
    {
        name: 'Nóatún',
        mt: 16,
        description: 'If unit`s HP ≤ 50%, unit can move to a space adjacent to any ally.',
        sp: 400,
        required: ['Anna: Commander'],
        skillLevels: [
            {
                value: 'Perf',
                description: 'If unit`s HP ≥ 50%, unit can move to a space adjacent to any ally within 2 spaces.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ]
    },
    {
        name: 'Fortune Bow',
        mt: 8,
        description:
            'Effective against flying foes. At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Def/Res-5 on that foe through its next action.',
        sp: 200,
        required: [bow]
    },
    {
        name: 'Fortune Bow+',
        mt: 12,
        description:
            'Effective against flying foes. At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Def/Res-5 on that foe through its next action.',
        sp: 300,
        required: [bow],
        refinable: true
    }
];
