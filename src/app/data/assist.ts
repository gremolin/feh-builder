import { Skill } from './data.types';
import { staff } from './hardcoded';

export const fehAssists: Skill[] = [
    { name: '-', description: '-', sp: undefined },
    { name: 'Ardent Sacrifice', description: 'Restores 10 HP to target ally. Unit loses 10 HP but cannot go below 1. ', sp: 150 },
    { name: 'Rally Resistance', description: 'Grants Res+4 to target ally for 1 turn. ', sp: 150, restrictions: [staff] },
    { name: 'Rally Def/Res', description: 'Grants Def/Res+3 to target ally for 1 turn.', sp: 300, restrictions: [staff] },
    { name: 'Rally Def/Res+', description: 'Grants Def/Res+6 to target ally for 1 turn.', sp: 400, restrictions: [staff] },
    { name: 'Swap', description: 'Unit and target ally swap spaces.', sp: 150, restrictions: [staff] },
    { name: 'Heal', description: 'Restores 5 HP to target ally.', sp: 50, required: [staff] },
    { name: 'Reconcile', description: 'Restores 7 HP to unit and target ally.', sp: 100, required: [staff] },
    {
        name: 'Martyr',
        description:
            'Slows Special trigger (cooldown count+1).\nRestores X HP to target (X = damage dealt to unit + 7).\nRestores Y HP to unit (Y = half damage dealt to unit).',
        sp: 200,
        required: [staff]
    },
    {
        name: 'Martyr+',
        description: 'Restores HP = damage dealt to unit +50% of Atk. (Minimum of 7 HP.)\nRestores HP to unit = half damage dealt to unit.',
        sp: 300,
        required: [staff]
    },
    {
        name: 'Sing',
        description: 'Grants another action to target ally.\n(Cannot target an ally with Sing or Dance.) ',
        sp: 150,
        required: [
            'Shigure: Dark Sky Singer',
            'Leanne: Forest`s Song',
            'Reyson: White Prince',
            'Azura: Celebratory Spirit',
            'Azura: Lady of Ballads',
            'Azura: Lady of the Lake',
            'Azura: Vallite Songstress',
            'Azura: Young Songstress'
        ]
    },
    {
        name: 'Dance',
        description: 'Grants another action to target ally.\n(Cannot target an ally with Sing or Dance.) ',
        sp: 150,
        required: [
            'Olivia: Blushing Beauty',
            'Ninian: Oracle of Destiny',
            'Olivia: Festival Dancer',
            'Inigo: Indigo Dancer',
            'Lene: Yearning Dancer',
            'Ninian: Bright-Eyed Bride',
            'Olivia: Sky-High Dancer',
            'Micaiah: Summer`s Dawn',
            'Ryoma: Dancing Samurai',
            'Elincia: Estival Princess',
            'Silvia: Traveling Dancer',
            'Rinea: Reminiscent Belle',
            'Berkut: Debonair Noble',
            'Ishtar: Thunder`s Waltz',
            'Nephenee: Sincere Dancer',
            'Reinhardt: Lightning`s Rondo',
            'Larum: Sprightly Dancer',
            'Phina: Roving Dancer',
            'Tethys: Beloved Dancer',
            'Peony: Sweet Dream'
        ]
    },
    {
        name: 'Gray Waves',
        description:
            'Grants another action to target ally, and if target is an infantry or flying ally, target can move 1 extra space.\n(That turn only. Does not stack. Cannot target an ally with Sing or Dance. This skill treated as Sing or Dance.)',
        sp: 400,
        required: ['Azura: Vallite Songstress']
    },
    {
        name: 'Reposition',
        description: 'Target ally moves to opposite side of unit.',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Smite',
        description: 'Pushes target ally 2 spaces away.',
        sp: 150,
        restrictions: [staff]
    }
];
