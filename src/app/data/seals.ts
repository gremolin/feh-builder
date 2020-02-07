import { Skill } from './data.types';
import { armor, cavalry, distant, infantry, none, staff } from './hardcoded';

export const fehSeals: Skill[] = [
    { name: '-', description: '-', sp: undefined },
    {
        name: 'HP',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants HP+3.',
                sp: 0,
                statIncreases: [{ key: 0, value: 3 }]
            },
            {
                value: '2',
                description: 'Grants HP+4.',
                sp: 0,
                statIncreases: [{ key: 0, value: 4 }]
            },
            {
                value: '3',
                description: 'Grants HP+5.',
                sp: 0,
                statIncreases: [{ key: 0, value: 5 }]
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Aerobatics',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit`s HP = 100%, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'If unit`s HP ≥ 50%, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.',
                sp: 120
            },
            {
                value: '3',
                description: 'Unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.',
                sp: 240
            }
        ],
        restrictions: [infantry, armor, cavalry]
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
        name: 'Armored Boots',
        description: 'At start of turn, if unit`s HP = 100%, unit can move 1 extra space.',
        required: [armor]
    },
    {
        name: 'Atk Feint',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If a Rally Assist skill is used by unit or targets unit, inflicts Atk-3 on foes in cardinal directions of unit through their next actions.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'If a Rally Assist skill is used by unit or targets unit, inflicts Atk-3 on foes in cardinal directions of unit through their next actions.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'If a Rally Assist skill is used by unit or targets unit, inflicts Atk-3 on foes in cardinal directions of unit through their next actions.',
                sp: 240
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Atk Ploy',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, inflicts Atk-3 on foes in cardinal directions with Res < unit`s Res through their next actions.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, inflicts Atk-4 on foes in cardinal directions with Res < unit`s Res through their next actions.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, inflicts Atk-5 on foes in cardinal directions with Res < unit`s Res through their next actions.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Atk Tactic',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, grants Atk+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, grants Atk+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, grants Atk+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2.',
                sp: 240
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
                description: 'If unit is adjacent to an ally, grants Atk/Def+3 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Atk/Def+4 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Atk/Def+5 during combat.',
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
                description: 'If unit is adjacent to an ally, grants Atk/Res+3 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Atk/Res+4 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Atk/Res+5 during combat.',
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
                description: 'If unit is adjacent to an ally, grants Atk/Spd+3 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Atk/Spd+4 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Atk/Spd+5 during combat.',
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
        name: 'Blaze Dance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If Sing or Dance is used, grants Atk+2 to target.',
                sp: 50
            },
            {
                value: '2',
                description: 'If Sing or Dance is used, grants Atk+3 to target.',
                sp: 100
            },
            {
                value: '3',
                description: 'If Sing or Dance is used, grants Atk+4 to target.',
                sp: 200
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Brash Assault',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit initiates combat against a foe that can counter and unit`s HP ≤ 30%, unit makes a guaranteed follow-up attack.',
                sp: 50
            },
            {
                value: '2',
                description:
                    'If unit initiates combat against a foe that can counter and unit`s HP ≤ 40%, unit makes a guaranteed follow-up attack.',
                sp: 100
            },
            {
                value: '3',
                description:
                    'If unit initiates combat against a foe that can counter and unit`s HP ≤ 50%, unit makes a guaranteed follow-up attack.',
                sp: 200
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
        name: 'Breath of Life',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, restores 3 HP to adjacent allies after combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If unit initiates combat, restores 5 HP to adjacent allies after combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If unit initiates combat, restores 7 HP to adjacent allies after combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Chill Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Atk-3 on foe on the enemy team with the highest Atk through its next action.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Atk-5 on foe on the enemy team with the highest Atk through its next action.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Chill Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Spd-3 on foe on the enemy team with the highest Spd through its next action.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Spd-5 on foe on the enemy team with the highest Spd through its next action.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of turn, inflicts Spd-7 on foe on the enemy team with the highest Spd through its next action.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Chill Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Def-3 on foe on the enemy team with the highest Def through its next action.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Def-5 on foe on the enemy team with the highest Def through its next action.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of turn, inflicts Def-7 on foe on the enemy team with the highest Def through its next action.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Chill Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Res-3 on foe on the enemy team with the highest Res through its next action.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Res-5 on foe on the enemy team with the highest Res through its next action.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.',
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
                    'If foe initiates combat and uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+2 during combat.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'If foe initiates combat and uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+4 during combat.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'If foe initiates combat and uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+6 during combat.',
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
                description: 'If unit initiates combat, grants Spd+6 during combat.',
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
        name: 'Def Ploy',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, inflicts Def-3 on foes in cardinal directions with Res < unit`s Res through their next actions.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, inflicts Def-4 on foes in cardinal directions with Res < unit`s Res through their next actions.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, inflicts Def-5 on foes in cardinal directions with Res < unit`s Res through their next actions.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Def Tactic',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, grants Def+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, grants Def+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Def / Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Def/Res+1.',
                sp: 80,
                statIncreases: [
                    { key: 3, value: 1 },
                    { key: 4, value: 1 }
                ]
            },
            {
                value: '2',
                description: 'Grants Def/Res+2.',
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
                description: 'If unit is adjacent to an ally, grants Def/Res+3 during combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit is adjacent to an ally, grants Def/Res+4 during combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit is adjacent to an ally, grants Def/Res+5 during combat.',
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
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Atk+3 for 1 turn.',
                sp: 40
            },
            {
                value: '2',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Atk+5 for 1 turn.',
                sp: 80
            },
            {
                value: '3',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Atk+7 for 1 turn.',
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
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Def+3 for 1 turn.',
                sp: 40
            },
            {
                value: '2',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Def+5 for 1 turn.',
                sp: 80
            },
            {
                value: '3',
                description: 'At start of turn, if unit`s HP ≤ 50%, grants Def+7 for 1 turn.',
                sp: 160
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Deflect Magic',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit receives consecutive attacks and foe uses magic, reduces damage from foe`s second attack onward by 30%.',
                sp: 40
            },
            {
                value: '2',
                description:
                    'If unit receives consecutive attacks and foe uses magic, reduces damage from foe`s second attack onward by 50%.',
                sp: 80
            },
            {
                value: '3',
                description:
                    'If unit receives consecutive attacks and foe uses magic, reduces damage from foe`s second attack onward by 80%.',
                sp: 160
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Deflect Melee',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit receives consecutive attacks and foe uses a sword, lance, or axe, reduces damage from foe`s second attack onward by 30%.',
                sp: 40
            },
            {
                value: '2',
                description:
                    'If unit receives consecutive attacks and foe uses a sword, lance, or axe, reduces damage from foe`s second attack onward by 50%.',
                sp: 80
            },
            {
                value: '3',
                description:
                    'If unit receives consecutive attacks and foe uses a sword, lance, or axe, reduces damage from foe`s second attack onward by 80%.',
                sp: 160
            }
        ],
        restrictions: [staff, distant]
    },
    {
        name: 'Deflect Missile',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit receives consecutive attacks and foe uses bow or dagger, reduces damage from foe`s second attack onward by 30%.',
                sp: 50
            },
            {
                value: '2',
                description:
                    'If unit receives consecutive attacks and foe uses bow or dagger, reduces damage from foe`s second attack onward by 50%.',
                sp: 100
            },
            {
                value: '3',
                description:
                    'If unit receives consecutive attacks and foe uses bow or dagger, reduces damage from foe`s second attack onward by 80%.',
                sp: 200
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
                sp: 300
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Distant Guard',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Allies within 2 spaces gain: "If foe uses bow, dagger, magic, or staff, grants Def/Res+2 during combat."',
                sp: 60
            },
            {
                value: '2',
                description: 'Allies within 2 spaces gain: "If foe uses bow, dagger, magic, or staff, grants Def/Res+3 during combat." ',
                sp: 120
            },
            {
                value: '3',
                description: 'Allies within 2 spaces gain: "If foe uses bow, dagger, magic, or staff, grants Def/Res+4 during combat." ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Drive Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Atk+2 to allies within 2 spaces during combat.',
                sp: 120
            },
            {
                value: '2',
                description: 'Grants Atk+2 to allies within 2 spaces during combat.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Drive Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Spd+2 to allies within 2 spaces during combat.',
                sp: 120
            },
            {
                value: '2',
                description: 'Grants Spd+2 to allies within 2 spaces during combat.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Drive Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Def+2 to allies within 2 spaces during combat.',
                sp: 120
            },
            {
                value: '2',
                description: 'Grants Def+2 to allies within 2 spaces during combat.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Drive Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Res+2 to allies within 2 spaces during combat.',
                sp: 120
            },
            {
                value: '2',
                description: 'Grants Res+2 to allies within 2 spaces during combat.',
                sp: 240
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
    },
    {
        name: 'Earth Dance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If Sing or Dance is used, grants Def+3 to target.',
                sp: 50
            },
            {
                value: '2',
                description: 'If Sing or Dance is used, grants Def+4 to target.',
                sp: 100
            },
            {
                value: '3',
                description: 'If Sing or Dance is used, grants Def+5 to target.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Embla`s Ward',
        description: 'Reduces damage dealt to unit to 0.',
        restrictions: [none]
    },
    {
        name: 'Even Def Wave',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of even-numbered turns, grants Def+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.) ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of even-numbered turns, grants Def+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.) ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of even-numbered turns, grants Def+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.) ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Even Res Wave',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of even-numbered turns, grants Res+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.) ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of even-numbered turns, grants Res+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.) ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of even-numbered turns, grants Res+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.) ',
                sp: 240
            }
        ],
        restrictions: [none]
    }
];
