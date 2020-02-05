import { Weapon } from './data.types';

export const fehWeapons: Weapon[] = [
    { name: '-', mt: 0, description: '-', sp: undefined },
    { name: 'Iron Lance', mt: 6, description: '', sp: 50, required: ['Lance'] },
    { name: 'Steel Lance', mt: 8, description: '', sp: 100, required: ['Lance'] },
    {
        name: 'Brave Lance',
        mt: 5,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 200,
        required: ['Lance']
    },
    {
        name: 'Brave Lance+',
        mt: 8,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 300,
        required: ['Lance']
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
    }
];