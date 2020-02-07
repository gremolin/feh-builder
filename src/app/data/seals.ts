import { Skill } from './data.types';
import { armor, cavalry, distant, flying, infantry, none, staff } from './hardcoded';

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
            }
        ],
        restrictions: [cavalry, flying, staff]
    },
    {
        name: 'Flier Formation',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit`s HP = 100%, unit can move to a space adjacent to a flying ally within 2 spaces.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit`s HP ≥ 50%, unit can move to a space adjacent to a flying ally within 2 spaces. ',
                sp: 120
            },
            {
                value: '3',
                description: 'Unit can move to a space adjacent to a flying ally within 2 spaces. ',
                sp: 240
            }
        ],
        restrictions: [infantry, armor, cavalry]
    },
    {
        name: 'Flier Guidance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit`s HP = 100%, flying allies within 2 spaces can move to a space adjacent to unit.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit`s HP ≥ 50%, flying allies within 2 spaces can move to a space adjacent to unit.',
                sp: 120
            },
            {
                value: '3',
                description: 'Flying allies within 2 spaces can move to a space adjacent to unit.',
                sp: 240
            }
        ],
        restrictions: [infantry, armor, cavalry]
    },
    {
        name: 'Fortify Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, grants Def+2 to adjacent allies for 1 turn.',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of turn, grants Def+3 to adjacent allies for 1 turn.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of turn, grants Def+4 to adjacent allies for 1 turn.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Fortify Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, grants Res+2 to adjacent allies for 1 turn.',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of turn, grants Res+3 to adjacent allies for 1 turn.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of turn, grants Res+4 to adjacent allies for 1 turn.',
                sp: 200
            }
        ],
        restrictions: [none]
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
        name: 'Gale Dance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If Sing or Dance is used, grants Spd+2 to target.',
                sp: 50
            },
            {
                value: '2',
                description: 'If Sing or Dance is used, grants Spd+3 to target.',
                sp: 100
            },
            {
                value: '3',
                description: 'If Sing or Dance is used, grants Spd+4 to target.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Guidance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit`s HP = 100%, infantry and armored allies within 2 spaces can move to a space adjacent to unit.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit`s HP ≥ 50%, infantry and armored allies within 2 spaces can move to a space adjacent to unit.',
                sp: 120
            },
            {
                value: '3',
                description: 'Infantry and armored allies within 2 spaces can move to a space adjacent to unit. ',
                sp: 240
            }
        ],
        restrictions: [infantry, armor, cavalry]
    },
    {
        name: 'Hardy Bearing',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'Disables unit`s skills that change attack priority. At start of combat, if unit`s HP = 100%, disables foe`s skills that change attack priority.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'Disables unit`s skills that change attack priority. At start of combat, if unit`s HP ≥ 50%, disables foe`s skills that change attack priority.',
                sp: 120
            },
            {
                value: '3',
                description: 'Disables unit`s and foe`s skills that change attack priority.',
                sp: 240
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
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Hone Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, grants Atk+2 to adjacent allies for 1 turn.',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of turn, grants Atk+3 to adjacent allies for 1 turn.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of turn, grants Atk+4 to adjacent allies for 1 turn.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Hone Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, grants Spd+2 to adjacent allies for 1 turn.',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of turn, grants Spd+3 to adjacent allies for 1 turn.',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of turn, grants Spd+4 to adjacent allies for 1 turn.',
                sp: 200
            }
        ],
        restrictions: [none]
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
        name: 'Live to Serve',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'When healing an ally with a staff, restores HP to unit = 50% of HP restored to target.',
                sp: 40
            },
            {
                value: '2',
                description: 'When healing an ally with a staff, restores HP to unit = 75% of HP restored to target. ',
                sp: 80
            },
            {
                value: '3',
                description: 'When healing an ally with a staff, restores HP to unit = HP restored to target. ',
                sp: 160
            }
        ],
        required: [staff]
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
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Múspellflame',
        description: 'Reduces damage dealt to unit to 0.',
        restrictions: [none]
    },
    {
        name: 'Obstruct',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit`s HP ≥ 90%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.) ',
                sp: 50
            },
            {
                value: '2',
                description:
                    'If unit`s HP ≥ 70%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.) ',
                sp: 100
            },
            {
                value: '3',
                description:
                    'If unit`s HP ≥ 50%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.) ',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Panic Ploy',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, converts bonuses on foes in cardinal directions with HP ≤ unit`s HP-5 into penalties through their next actions.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, converts bonuses on foes in cardinal directions with HP ≤ unit`s HP-3 into penalties through their next actions.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, converts bonuses on foes in cardinal directions with HP < unit`s HP into penalties through their next actions.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Phantom Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If a skill compares unit`s Spd to a foe`s or ally`s Spd, treats unit`s Spd as if granted +5.',
                sp: 60
            },
            {
                value: '2',
                description: 'If a skill compares unit`s Spd to a foe`s or ally`s Spd, treats unit`s Spd as if granted +8.',
                sp: 120
            },
            {
                value: '3',
                description: 'If a skill compares unit`s Spd to a foe`s or ally`s Spd, treats unit`s Spd as if granted +10.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Poison Strike',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, deals 4 damage to foe after combat. ',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit initiates combat, deals 7 damage to foe after combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit initiates combat, deals 10 damage to foe after combat.',
                sp: 240
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Quick Riposte',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit`s HP ≥ 90% and foe initiates combat, unit makes a guaranteed follow-up attack.',
                sp: 60
            },
            {
                value: '2',
                description: 'If unit`s HP ≥ 80% and foe initiates combat, unit makes a guaranteed follow-up attack.',
                sp: 120
            },
            {
                value: '3',
                description: 'If unit`s HP ≥ 70% and foe initiates combat, unit makes a guaranteed follow-up attack.',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Quickened Pulse',
        description: 'At the start of turn 1, grants Special cooldown count-1.',
        restrictions: [none]
    },
    {
        name: 'Renewal',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At the start of every fourth turn, restores 10 HP.',
                sp: 60
            },
            {
                value: '2',
                description: 'At the start of every third turn, restores 10 HP.',
                sp: 120
            },
            {
                value: '3',
                description: 'At the start of every second turn, restores 10 HP. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Res Ploy',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, inflicts Res-3 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, inflicts Res-4 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, inflicts Res-5 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Res Tactic',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, grants Res+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, grants Res+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2. ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, grants Res+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2. ',
                sp: 240
            }
        ],
        restrictions: [none]
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
        name: 'Røkkr',
        description:
            'Neutralizes damage outside of combat (from skills like Poison Strike, etc.) except damage dealt by Specials that trigger before combat. Unit`s HP can be reduced to 0 only by an attack from allied armies. Unit cannot restore its own HP. ',
        restrictions: [none]
    },
    {
        name: 'Savage Blow',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, deals 3 damage to foes within 2 spaces of target after combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'If unit initiates combat, deals 4 damage to foes within 2 spaces of target after combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'If unit initiates combat, deals 5 damage to foes within 2 spaces of target after combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Seal Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Inflicts Atk-3 on foe through its next action after combat.',
                sp: 40
            },
            {
                value: '2',
                description: 'Inflicts Atk-5 on foe through its next action after combat.',
                sp: 80
            },
            {
                value: '3',
                description: 'Inflicts Atk-7 on foe through its next action after combat.',
                sp: 160
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Seal Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Inflicts Spd-3 on foe through its next action after combat.',
                sp: 40
            },
            {
                value: '2',
                description: 'Inflicts Spd-5 on foe through its next action after combat.',
                sp: 80
            },
            {
                value: '3',
                description: 'Inflicts Spd-7 on foe through its next action after combat.',
                sp: 160
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Spd Feint',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If a Rally Assist skill is used by unit or targets unit, inflicts Spd-3 on foes in cardinal directions of unit through their next actions. ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'If a Rally Assist skill is used by unit or targets unit, inflicts Spd-5 on foes in cardinal directions of unit through their next actions. ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'If a Rally Assist skill is used by unit or targets unit, inflicts Spd-7 on foes in cardinal directions of unit through their next actions. ',
                sp: 240
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Spd Ploy',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, inflicts Spd-3 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, inflicts Spd-4 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, inflicts Spd-5 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spd Smoke',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Inflicts Spd-3 on foes within 2 spaces of target through their next actions after combat. ',
                sp: 60
            },
            {
                value: '2',
                description: 'Inflicts Spd-5 on foes within 2 spaces of target through their next actions after combat. ',
                sp: 120
            },
            {
                value: '3',
                description: 'Inflicts Spd-7 on foes within 2 spaces of target through their next actions after combat. ',
                sp: 240
            }
        ],
        restrictions: [staff]
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
        name: 'Spur Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Atk+2 to adjacent allies during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'Grants Atk+3 to adjacent allies during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'Grants Atk+4 to adjacent allies during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spur Atk / Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Atk/Res+2 to adjacent allies during combat. ',
                sp: 120
            },
            {
                value: '2',
                description: 'Grants Atk/Res+3 to adjacent allies during combat. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spur Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Def+2 to adjacent allies during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'Grants Def+3 to adjacent allies during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'Grants Def+4 to adjacent allies during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spur Def / Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Def/Res+2 to adjacent allies during combat. ',
                sp: 120
            },
            {
                value: '2',
                description: 'Grants Def/Res+3 to adjacent allies during combat. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spur Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Res+2 to adjacent allies during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'Grants Res+3 to adjacent allies during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'Grants Res+4 to adjacent allies during combat.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Spur Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Grants Spd+2 to adjacent allies during combat.',
                sp: 50
            },
            {
                value: '2',
                description: 'Grants Spd+3 to adjacent allies during combat.',
                sp: 100
            },
            {
                value: '3',
                description: 'Grants Spd+4 to adjacent allies during combat.',
                sp: 200
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
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Sturdy Blow',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit initiates combat, grants Atk/Def+2 during combat. ',
                sp: 120
            },
            {
                value: '2',
                description: 'If foe initiates combat, grants Atk/Def+4 during combat. ',
                sp: 240
            }
        ],
        restrictions: [staff]
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
        name: 'Threaten Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Atk-3 on foes within 2 spaces through their next actions. ',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Atk-4 on foes within 2 spaces through their next actions. ',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of turn, inflicts Atk-5 on foes within 2 spaces through their next actions. ',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Threaten Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Res-3 on foes within 2 spaces through their next actions. ',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Res-4 on foes within 2 spaces through their next actions. ',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of turn, inflicts Res-5 on foes within 2 spaces through their next actions. ',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Threaten Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Spd-3 on foes within 2 spaces through their next actions. ',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Spd-4 on foes within 2 spaces through their next actions. ',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of turn, inflicts Spd-5 on foes within 2 spaces through their next actions. ',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Threaten Def',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Def-3 on foes within 2 spaces through their next actions. ',
                sp: 50
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Def-4 on foes within 2 spaces through their next actions. ',
                sp: 100
            },
            {
                value: '3',
                description: 'At start of turn, inflicts Def-5 on foes within 2 spaces through their next actions. ',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Torrent Dance',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If Sing or Dance is used, grants Res+3 to target.',
                sp: 50
            },
            {
                value: '2',
                description: 'If Sing or Dance is used, grants Res+4 to target.',
                sp: 100
            },
            {
                value: '3',
                description: 'If Sing or Dance is used, grants Res+5 to target.',
                sp: 200
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
    }
];
