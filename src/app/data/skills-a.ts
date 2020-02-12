import { Skill } from './data.types';
import { blue, cavalry, closeRange, colourless, flying, infantry, none, staff } from './hardcoded';

export const fehASkills: Skill[] = [
    { name: '-', description: '-' },
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
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Def+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Def+6 during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Fierce Stance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat, grants Atk+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Atk+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If foe initiates combat, grants Atk+6 during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Fire Boost',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Atk+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Atk+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Atk+6 during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Flashing Blade',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit`s Spd ≥ foe`s Spd+5, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
                sp: 60
            },
            {
                value: '2',
                description:
                    'If unit`s Spd ≥ foe`s Spd+5, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
                sp: 120
            },
            {
                value: '3',
                description:
                    'If unit`s Spd ≥ foe`s Spd+5, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
                sp: 240
            },
            {
                value: '4',
                description:
                    'If unit`s Spd > foe`s Spd, grants Special cooldown charge +1 and deals +5 damage per unit`s attack. (Only highest value applied. Does not stack.) ',
                sp: 300
            }
        ],
        restrictions: [cavalry, flying, staff]
    },
    {
        name: 'Fortress Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Def+3. Inflicts Atk-3.',
                sp: 40,
                statIncreases: [
                    { key: 1, value: -3 },
                    { key: 3, value: 3 }
                ]
            },
            {
                value: '2',
                description: 'Grants Def+4. Inflicts Atk-3.',
                sp: 80,
                statIncreases: [
                    { key: 1, value: -3 },
                    { key: 3, value: 4 }
                ]
            },
            {
                value: '3',
                description: 'Grants Def+5. Inflicts Atk-3.',
                sp: 160,
                statIncreases: [
                    { key: 1, value: -3 },
                    { key: 3, value: 5 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Fortress Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Res+3. Inflicts Atk-3.',
                sp: 40,
                statIncreases: [
                    { key: 1, value: -3 },
                    { key: 4, value: 3 }
                ]
            },
            {
                value: '2',
                description: 'Grants Res+4. Inflicts Atk-3.',
                sp: 80,
                statIncreases: [
                    { key: 1, value: -3 },
                    { key: 4, value: 4 }
                ]
            },
            {
                value: '3',
                description: 'Grants Res+5. Inflicts Atk-3.',
                sp: 160,
                statIncreases: [
                    { key: 1, value: -3 },
                    { key: 4, value: 5 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Heavy Blade',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit`s Atk ≥ foe`s Atk+5, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
                sp: 60
            },
            {
                value: '2',
                description:
                    'If unit`s Atk ≥ foe`s Atk+3, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
                sp: 120
            },
            {
                value: '3',
                description:
                    'If unit`s Atk > foe`s Atk, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
                sp: 240
            },
            {
                value: '4',
                description:
                    'If unit`s Atk > foe`s Atk, grants Special cooldown charge +1 and deals +5 damage to foe per unit`s attack. (Only highest value applied. Does not stack.)',
                sp: 300
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'HP / Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants HP+3, Atk+1.',
                sp: 100,
                statIncreases: [
                    { key: 0, value: 3 },
                    { key: 1, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants HP+4, Atk+2.',
                sp: 200,
                statIncreases: [
                    { key: 0, value: 4 },
                    { key: 1, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'HP / Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants HP+3, Spd+1.',
                sp: 100,
                statIncreases: [
                    { key: 0, value: 3 },
                    { key: 2, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants HP+4, Spd+2.',
                sp: 200,
                statIncreases: [
                    { key: 0, value: 4 },
                    { key: 2, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'HP / Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants HP+3, Def+1.',
                sp: 100,
                statIncreases: [
                    { key: 0, value: 3 },
                    { key: 3, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants HP+4, Def+2.',
                sp: 200,
                statIncreases: [
                    { key: 0, value: 4 },
                    { key: 3, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'HP / Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants HP+3, Res+1.',
                sp: 100,
                statIncreases: [
                    { key: 0, value: 3 },
                    { key: 4, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants HP+4, Res+2.',
                sp: 200,
                statIncreases: [
                    { key: 0, value: 4 },
                    { key: 4, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Iote`s Shield',
        description: '',
        sp: 200,
        required: [flying]
    },
    {
        name: 'Mirror Stance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat, grants Atk/Res+2 during combat. ',
                sp: 120
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Atk/Res+4 during combat. ',
                sp: 240
            },
            {
                value: '3',
                description:
                    'If foe initiates combat, grants Atk/Res+6 during combat and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)',
                sp: 300
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Resistance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Resistance +1',
                sp: 30,
                statIncreases: [{ key: 4, value: 1 }]
            },
            {
                value: '2',
                description: 'Resistance +2',
                sp: 60,
                statIncreases: [{ key: 4, value: 2 }]
            },
            {
                value: '3',
                description: 'Resistance +3',
                sp: 120,
                statIncreases: [{ key: 4, value: 3 }]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spd / Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Spd/Def+1.',
                sp: 80,
                statIncreases: [
                    { key: 2, value: 1 },
                    { key: 3, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants Spd/Def+2.',
                sp: 160,
                statIncreases: [
                    { key: 2, value: 2 },
                    { key: 3, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spd / Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Spd/Res+1.',
                sp: 80,
                statIncreases: [
                    { key: 2, value: 1 },
                    { key: 4, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants Spd/Res+2.',
                sp: 160,
                statIncreases: [
                    { key: 2, value: 2 },
                    { key: 4, value: 2 }
                ]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spd / Res Bond',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit is adjacent to an ally, grants Spd/Res+3 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Spd/Res+4 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Spd/Res+5 during combat.',
                sp: 240
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Speed',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Speed +1',
                sp: 30,
                statIncreases: [{ key: 2, value: 1 }]
            },
            {
                value: '2',
                description: 'Speed +2',
                sp: 60,
                statIncreases: [{ key: 2, value: 2 }]
            },
            {
                value: '3',
                description: 'Speed +3',
                sp: 120,
                statIncreases: [{ key: 2, value: 3 }]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Steady Posture',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat, grants Spd/Def+2 during combat.',
                sp: 120
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Spd/Def+4 during combat.',
                sp: 240
            },
            {
                value: '3',
                description:
                    'If foe initiates combat, grants Spd/Def+6 to unit during combat and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)',
                sp: 300
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Steady Stance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat, grants Def+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Def+2 during combat. ',
                sp: 100
            },
            {
                value: '3',
                description: 'If foe initiates combat, grants Def+2 during combat. ',
                sp: 200
            },
            {
                value: '4',
                description:
                    'If foe initiates combat, grants Def+8 during combat and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)',
                sp: 300,
                restrictions: [staff]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Swift Sparrow',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, grants Atk/Spd+2 during combat.',
                sp: 120
            },
            {
                value: '2',
                description: 'If unit initiates combat, grants Atk/Spd+2 during combat.',
                sp: 240
            },
            {
                value: '3',
                description: 'If unit initiates combat, grants Atk+6, Spd+7 during combat. ',
                sp: 300
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Swift Stance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat, grants Spd/Res+2 during combat. ',
                sp: 120
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Spd/Res+4 during combat. ',
                sp: 240
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Warding Blow',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, grants Res+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If unit initiates combat, grants Res+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If unit initiates combat, grants Res+6 during combat.',
                sp: 200
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Warding Stance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat, grants Res+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Res+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If foe initiates combat, grants Res+6 during combat.',
                sp: 200
            },
            {
                value: '4',
                description:
                    'If foe initiates combat, grants Res+8 during combat and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)',
                sp: 300
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Water Boost',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Res+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Res+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Res+6 during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Wind Boost',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Spd+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Spd+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of combat, if unit`s HP ≥ foe`s HP+3, grants Spd+6 during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Death Blow',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, grants Atk+2 during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If unit initiates combat, grants Atk+4 during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If unit initiates combat, grants Atk+6 during combat.',
                sp: 200
            },
            {
                value: '4',
                description: 'If unit initiates combat, grants Atk+8 during combat.',
                sp: 300
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Sturdy Blow',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, grants Atk/Def+2 during combat.',
                sp: 120
            },
            {
                value: '2',
                description: 'If unit initiates combat, grants Atk/Def+4 during combat.',
                sp: 240
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Bonus Doubler',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'Grants bonus to Atk/Spd/Def/Res during combat = 50% of current bonus on each of unit`s stats. Calculates each stat bonus independently. ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'Grants bonus to Atk/Spd/Def/Res during combat = 75% of current bonus on each of unit`s stats. Calculates each stat bonus independently. ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'Grants bonus to Atk/Spd/Def/Res during combat = current bonus on each of unit`s stats. Calculates each stat bonus independently. ',
                sp: 240
            }
        ],
        required: [infantry]
    },
    {
        name: 'Sturdy Stance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If foe initiates combat, grants Atk/Def+2 during combat.',
                sp: 120
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Atk/Def+4 during combat.',
                sp: 240
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Ashera`s Chosen',
        description:
            'Neutralizes "effective against flying" bonuses. If unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, grants Atk/Def+6 during combat.',
        required: ['Altina: Dawn`s Trueblade'],
        sp: 300
    },
    {
        name: 'Triangle Adept',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit has weapon-triangle advantage, boosts Atk by 10%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 10%.',
                sp: 50
            },
            {
                value: '2',
                description:
                    'If unit has weapon-triangle advantage, boosts Atk by 15%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 10%.',
                sp: 100
            },
            {
                value: '3',
                description:
                    'If unit has weapon-triangle advantage, boosts Atk by 20%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 10%.',
                sp: 200
            }
        ],
        restrictions: [staff, colourless]
    },
    {
        name: 'B Duel Flying',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'Grants HP+3. If unit is 5★ and level 40 and unit`s stats total less than 160, treats unit`s stats as 160 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)',
                sp: 70,
                statIncreases: [{ key: 0, value: 3 }]
            },
            {
                value: '2',
                description:
                    'Grants HP+4. If unit is 5★ and level 40 and unit`s stats total less than 165, treats unit`s stats as 165 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)',
                sp: 150,
                statIncreases: [{ key: 0, value: 4 }]
            },
            {
                value: '3',
                description:
                    'Grants HP+5. If unit is 5★ and level 40 and unit`s stats total less than 170, treats unit`s stats as 170 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)',
                sp: 300,
                statIncreases: [{ key: 0, value: 5 }]
            }
        ],
        required: [blue, flying]
    }
];
