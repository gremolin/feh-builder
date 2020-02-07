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
    }
];
