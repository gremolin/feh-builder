import { Skill } from './data.types';
import { armor, cavalry, flying, green, infantry, none, staff } from './hardcoded';

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
        restrictions: [green]
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
        restrictions: [cavalry, flying, staff]
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
        name: 'Lull Atk/Spd',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'Inflicts Atk/Spd-1 on foe and neutralizes foe`s bonuses to Atk/Spd (from skills like Fortify, Rally, etc.) during combat.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'Inflicts Atk/Spd-2 on foe and neutralizes foe`s bonuses to Atk/Spd (from skills like Fortify, Rally, etc.) during combat.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'Inflicts Atk/Spd-3 on foe and neutralizes foe`s bonuses to Atk/Spd (from skills like Fortify, Rally, etc.) during combat.',
                sp: 240
            }
        ],
        restrictions: [armor, flying]
    },
    {
        name: 'Null Follow-Up',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of combat, if unit`s HP = 100%, neutralizes effects that guarantee foe`s follow-up attacks and effects that prevent unit`s follow-up attacks during combat.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of combat, if unit`s HP ≥ 50%, neutralizes effects that guarantee foe`s follow-up attacks and effects that prevent unit`s follow-up attacks during combat.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'Neutralizes effects that guarantee foe`s follow-up attacks and effects that prevent unit`s follow-up attacks during combat.',
                sp: 240
            }
        ],
        required: [infantry]
    },
    {
        name: 'Vantage',
        description: '',
        skillLevels: [
            {
                value: '1',
                description: 'If unit`s HP ≤ 25% and foe initiates combat, unit can counterattack before foe`s first attack.',
                sp: 50
            },
            {
                value: '2',
                description: 'If unit`s HP ≤ 25% and foe initiates combat, unit can counterattack before foe`s first attack.',
                sp: 100
            },
            {
                value: '3',
                description: 'If unit`s HP ≤ 25% and foe initiates combat, unit can counterattack before foe`s first attack.',
                sp: 200
            }
        ],
        restrictions: [none]
    },
    {
        name: 'Sabotage Atk',
        description: '',
        skillLevels: [
            {
                value: '1',
                description:
                    'At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Atk-3 on that foe through its next action.',
                sp: 60
            },
            {
                value: '2',
                description:
                    'At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Atk-3 on that foe through its next action.',
                sp: 120
            },
            {
                value: '3',
                description:
                    'At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Atk-3 on that foe through its next action.',
                sp: 240
            }
        ],
        restrictions: [none]
    }
];
