import { Skill } from './data.types';
import { armor, cavalry, none, staff } from './hardcoded';

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
        restrictions: [cavalry, armor]
    },
    {
        name: 'Atk Ploy',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, inflicts Atk-3 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, inflicts Atk-4 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, inflicts Atk-5 on foes in cardinal directions with Res < unit`s Res through their next actions. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Atk Smoke',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Inflicts Atk-3 on foes within 2 spaces of target through their next actions after combat.',
                sp: 60
            },
            {
                value: '2',
                description: 'Inflicts Atk-5 on foes within 2 spaces of target through their next actions after combat.',
                sp: 120
            },
            {
                value: '3',
                description: 'Inflicts Atk-7 on foes within 2 spaces of target through their next actions after combat.',
                sp: 240
            }
        ],
        restrictions: [staff]
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
                    'At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2. ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, grants Def+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2. ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, grants Def+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally`s movement type on current team ≤ 2. ',
                sp: 240
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
