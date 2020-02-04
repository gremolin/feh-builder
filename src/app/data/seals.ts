import { Skill } from './data.types';

export const fehSeals: Skill[] = [
    { name: '-', description: '-', sp: undefined },
    {
        name: 'HP',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants HP+3.',
                sp: 40,
                statIncreases: [{ key: 0, value: 3 }]
            },
            {
                value: '2',
                description: 'Grants HP+4.',
                sp: 80,
                statIncreases: [{ key: 0, value: 4 }]
            },
            {
                value: '3',
                description: 'Grants HP+5.',
                sp: 160,
                statIncreases: [{ key: 0, value: 5 }]
            }
        ]
    }
];
