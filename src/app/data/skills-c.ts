import { Skill } from './data.types';

export const fehCSkills: Skill[] = [
    { name: '-', description: '-', sp: undefined },
    {
        name: 'Def/Res Oath',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, if unit is adjacent to an ally, grants Def/Res+3 to unit for 1 turn.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of turn, if unit is adjacent to an ally, grants Def/Res+4 to unit for 1 turn.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of turn, if unit is adjacent to an ally, grants Def/Res+5 to unit for 1 turn.',
                sp: 240
            }
        ],
        restrictions: ['Cavalry', 'Armor']
    }
];
