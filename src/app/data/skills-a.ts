import { Skill } from './data.types';

export const fehASkills: Skill[] = [
    { name: '-', description: '-' },
    {
        name: 'HP',
        description: '',
        skillLevels: [
            {
                value: '3',
                description: 'Grants HP+3.',
                sp: 40,
                statIncreases: [{ key: 0, value: 3 }]
            },
            {
                value: '4',
                description: 'Grants HP+4.',
                sp: 80,
                statIncreases: [{ key: 0, value: 4 }]
            },
            {
                value: '5',
                description: 'Grants HP+5.',
                sp: 160,
                statIncreases: [{ key: 0, value: 5 }]
            }
        ]
    }
];
