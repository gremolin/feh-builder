import { Skill } from './data.types';

export const fehBSkills: Skill[] = [
    { name: '-', description: '-' },
    {
        name: 'Swordbreaker',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit`s HP ≥ 90% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.',
                sp: 50
            },
            {
                value: '2',
                description:
                    'If unit`s HP ≥ 70% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.',
                sp: 100
            },
            {
                value: '3',
                description:
                    'If unit`s HP ≥ 50% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.',
                sp: 200
            }
        ],
        restrictions: ['Green']
    },
    {
        name: 'Special Spiral',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit initiates combat and unit`s Special triggers before or during combat, grants Special cooldown count-1 after combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'If Special triggers before or during combat, grants Special cooldown count-1 after combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'If Special triggers before or during combat, grants Special cooldown count-2 after combat.',
                sp: 240
            }
        ],
        restrictions: ['Cavalry', 'Flying', 'Staff']
    }
];
