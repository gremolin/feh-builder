import { Skill } from './data.types';
import { closeRange, none, staff } from './hardcoded';

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
        ],
        restrictions: [none]
    },
    {
        name: 'Close Counter',
        description: 'Unit can counterattack regardless of foe`s range.',
        sp: 300,
        restrictions: [closeRange]
    },
    {
        name: 'Armored Blow',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, grants Def+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If unit initiates combat, grants Def+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If unit initiates combat, grants Def+6 during combat.',
                sp: 200
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Atk / Def Bond',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit is adjacent to an ally, grants Atk/Def+3 during combat. ',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Atk/Def+4 during combat. ',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Atk/Def+5 during combat. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Atk / Res Bond',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit is adjacent to an ally, grants Atk/Res+3 during combat. ',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Atk/Res+4 during combat. ',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Atk/Res+5 during combat. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Atk / Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Atk/Spd+1.',
                sp: 80,
                statIncreases: [
                    { key: 1, value: 1 },
                    { key: 2, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants Atk/Spd+2.',
                sp: 160,
                statIncreases: [
                    { key: 1, value: 2 },
                    { key: 2, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Atk / Spd Bond',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit is adjacent to an ally, grants Atk/Spd+3 during combat. ',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Atk/Spd+4 during combat. ',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Atk/Spd+5 during combat. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Attack',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Attack+1.',
                sp: 30,
                statIncreases: [{ key: 1, value: 1 }]
            },
            {
                value: '2',
                description: 'Grants Attack+2.',
                sp: 60,
                statIncreases: [{ key: 1, value: 2 }]
            },
            {
                value: '3',
                description: 'Grants Attack+3.',
                sp: 120,
                statIncreases: [{ key: 1, value: 3 }]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Atk / Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Atk/Def+1.',
                sp: 80,
                statIncreases: [
                    { key: 1, value: 1 },
                    { key: 3, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants Atk/Def+2.',
                sp: 160,
                statIncreases: [
                    { key: 1, value: 2 },
                    { key: 3, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Atk / Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Atk/Res+1.',
                sp: 80,
                statIncreases: [
                    { key: 1, value: 1 },
                    { key: 4, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants Atk/Res+2.',
                sp: 160,
                statIncreases: [
                    { key: 1, value: 2 },
                    { key: 4, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Brazen Atk/Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Def+3 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Def+5 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Def+7 during combat.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Brazen Atk/Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Res+3 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Res+5 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Res+7 during combat.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Brazen Atk/Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Spd+3 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Spd+5 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Spd+7 during combat.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Close Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If foe initiates combat and uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+2 during combat. ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'If foe initiates combat and uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+4 during combat. ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'If foe initiates combat and uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+6 during combat. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Darting Blow',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, grants Spd+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If unit initiates combat, grants Spd+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If unit initiates combat, grants Spd+6 during combat. ',
                sp: 200
            },
            {
                value: '4',
                description: 'If unit initiates combat, grants Spd+9 during combat. ',
                sp: 200
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Darting Stance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat, grants Spd+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Spd+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If foe initiates combat, grants Spd+6 during combat.',
                sp: 200
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Def / Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Def/Res+1. ',
                sp: 80,
                statIncreases: [
                    { key: 3, value: 1 },
                    { key: 4, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants Def/Res+2. ',
                sp: 160,
                statIncreases: [
                    { key: 3, value: 2 },
                    { key: 4, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Def / Res Bond',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit is adjacent to an ally, grants Def/Res+3 during combat. ',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Def/Res+4 during combat. ',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Def/Res+5 during combat. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Defense',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Defense +1',
                sp: 30,
                statIncreases: [{ key: 3, value: 1 }]
            },
            {
                value: '2',
                description: 'Defense +2',
                sp: 60,
                statIncreases: [{ key: 3, value: 2 }]
            },
            {
                value: '3',
                description: 'Defense +3',
                sp: 120,
                statIncreases: [{ key: 3, value: 3 }]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Defiant Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Atk+3 for 1 turn. ',
                sp: 40
            },
            {
                value: '2',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Atk+5 for 1 turn. ',
                sp: 80
            },
            {
                value: '3',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Atk+7 for 1 turn. ',
                sp: 160
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Defiant Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Def+3 for 1 turn. ',
                sp: 40
            },
            {
                value: '2',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Def+5 for 1 turn. ',
                sp: 80
            },
            {
                value: '3',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Def+7 for 1 turn. ',
                sp: 160
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Distant Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+2 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+4 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.',
                sp: 240
            },
            {
                value: '4',
                description:
                    'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+8 and neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat. ',
                sp: 300
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Earth Boost',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Def+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+4, grants Def+2 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+5, grants Def+2 during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    }
];
