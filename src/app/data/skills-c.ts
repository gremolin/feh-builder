import { Skill } from './data.types';
import { armor, cavalry, infantry, none, staff } from './hardcoded';

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
        name: 'Def Smoke',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'Inflicts Def-3 on foes within 2 spaces of target through their next actions after combat. ',
                sp: 60
            },
            {
                value: '2',
                description: 'Inflicts Def-5 on foes within 2 spaces of target through their next actions after combat. ',
                sp: 120
            },
            {
                value: '3',
                description: 'Inflicts Def-7 on foes within 2 spaces of target through their next actions after combat. ',
                sp: 240
            }
        ],
        restrictions: [staff]
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
        name: 'Windsweep',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'If unit initiates combat, unit cannot make a follow-up attack. If unit’s Spd ≥ foe’s Spd+5 and foe uses sword, lance, axe, bow, dagger, or beast damage, foe cannot counterattack.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'If unit initiates combat, unit cannot make a follow-up attack. If unit’s Spd ≥ foe’s Spd+3 and foe uses sword, lance, axe, bow, dagger, or beast damage, foe cannot counterattack.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'If unit initiates combat, unit cannot make a follow-up attack. If unit’s Spd > foe’s Spd and foe uses sword, lance, axe, bow, dagger, or beast damage, foe cannot counterattack.',
                sp: 240
            }
        ],
        restrictions: [staff]
    },
    {
        name: 'Threat. Atk/Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, inflicts Atk/Spd-3 on foes within 2 spaces through their next actions.',
                sp: 100
            },
            {
                value: '2',
                description: 'At start of turn, inflicts Atk/Spd-4 on foes within 2 spaces through their next actions.',
                sp: 200
            },
            {
                value: '3',
                description:
                    'At start of turn, if unit is within 2 spaces of a foe, grants Atk/Spd+5 to unit for 1 turn and inflicts Atk/Spd-5 on foes within 2 spaces through their next actions.',
                sp: 300
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Rouse Spd/Res',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, if unit is not adjacent to an ally, grants Spd/Res+2 to unit for 1 turn.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of turn, if unit is not adjacent to an ally, grants Spd/Res+4 to unit for 1 turn. ',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of turn, if unit is not adjacent to an ally, grants Spd/Res+6 to unit for 1 turn. ',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Odd Atk Wave',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of odd-numbered turns, grants Atk+2 to unit and adjacent allies for 1 turn.\n(Bonus granted to unit even if no allies are adjacent.)',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of odd-numbered turns, grants Atk+4 to unit and adjacent allies for 1 turn.\n(Bonus granted to unit even if no allies are adjacent.)',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of odd-numbered turns, grants Atk+6 to unit and adjacent allies for 1 turn.\n(Bonus granted to unit even if no allies are adjacent.)',
                sp: 240
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Atk/Def Oath',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, if unit is adjacent to an ally, grants Atk/Def+3 to unit for 1 turn.',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of turn, if unit is adjacent to an ally, grants Atk/Def+4 to unit for 1 turn.',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of turn, if unit is adjacent to an ally, grants Atk/Def+5 to unit for 1 turn.',
                sp: 240
            }
        ],
        restrictions: [cavalry, armor]
    },
    {
        name: 'Armor March',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, if unit`s HP = 100% and unit is adjacent to an armored ally, unit and adjacent armored allies can move 1 extra space.\n(That turn only. Does not stack.) ',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, if unit`s HP ≥ 100% and unit is adjacent to an armored ally, unit and adjacent armored allies can move 1 extra space.\n(That turn only. Does not stack.) ',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, if unit is adjacent to an armored ally, unit and adjacent armored allies can move 1 extra space.\n(That turn only. Does not stack.) ',
                sp: 240
            }
        ],
        required: [armor]
    },
    {
        name: 'Atk/Spd Gap',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'At start of turn, grants Atk/Spd+1 to ally with the highest Atk+Spd total for 1 turn. (Excludes unit.)',
                sp: 60
            },
            {
                value: '2',
                description: 'At start of turn, grants Atk/Spd+3 to ally with the highest Atk+Spd total for 1 turn. (Excludes unit.)',
                sp: 120
            },
            {
                value: '3',
                description: 'At start of turn, grants Atk/Spd+5 to ally with the highest Atk+Spd total for 1 turn. (Excludes unit.)',
                sp: 240
            }
        ],
        restrictions: [none]
    }
];
