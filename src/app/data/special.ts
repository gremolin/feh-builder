import { Skill } from './data.types';
import { staff } from './hardcoded';

export const fehSpecials: Skill[] = [
    { name: '-', description: '-', sp: undefined },
    {
        name: 'Holy Vestments',
        description: 'If foe`s Range = 2, reduces damage from that foe`s attack by 30%.',
        sp: 100,
        restrictions: ['Distant'],
        misc: 3
    },
    {
        name: 'Aegis',
        description: 'If foe`s Range = 2, reduces damage from that foe`s attack by 50%.',
        sp: 200,
        restrictions: ['Distant'],
        misc: 3
    },
    {
        name: 'Sacred Cowl',
        description: 'If foe`s Range = 2, reduces damage from that foe`s attack by 30%',
        sp: 200,
        restrictions: ['Distant'],
        misc: 2
    },
    {
        name: 'Glowing Ember',
        description: 'Boosts damage by 50% of unit`s Def.',
        sp: 100,
        restrictions: ['Staff'],
        misc: 4
    },
    {
        name: 'Bonfire',
        description: 'Boosts damage by 50% of unit`s Def.',
        sp: 200,
        restrictions: ['Staff'],
        misc: 3
    },
    {
        name: 'Open the Future',
        description: 'Boosts damage by 50% of unit`s Def. Restores HP = 25% of damage dealt.',
        sp: 500,
        required: ['Alfonse: Askran Duo', 'Líf: Lethal Swordsman'],
        misc: 3
    },
    {
        name: 'Daylight',
        description: 'Restores HP = 30% of damage dealt.',
        sp: 100,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Sol',
        description: 'Restores HP = 50% of damage dealt.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Noontime',
        description: 'Restores HP = 30% of damage dealt.',
        sp: 200,
        restrictions: [staff],
        misc: 2
    },
    {
        name: 'Dragon Gaze',
        description: 'Boosts damage by 30% of unit`s Atk.',
        sp: 100,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Draconic Aura',
        description: 'Boosts damage by 30% of unit`s Atk.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'New Moon',
        description: 'Treats foe`s Def/Res as if reduced by 30% during combat.',
        sp: 100,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Moonbow',
        description: 'Treats foe`s Def/Res as if reduced by 30% during combat.',
        sp: 200,
        restrictions: [staff],
        misc: 2
    },
    {
        name: 'Lunar Flash',
        description: 'Treats foe’s Def/Res as if reduced by 20% during combat. Boosts damage by 20% of unit`s Spd.',
        sp: 500,
        required: ['Alm: Lovebird Duo', 'Alm: Saint-King'],
        misc: 2
    },
    {
        name: 'Retribution',
        description: 'Boosts damage by 30% of damage dealt to unit.',
        sp: 100,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Reprisal',
        description: 'Boosts damage by 30% of damage dealt to unit.',
        sp: 200,
        restrictions: [staff],
        misc: 2
    },
    {
        name: 'Chilling Wind',
        description: 'Boosts damage by 50% of unit`s Res.',
        sp: 100,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Iceberg',
        description: 'Boosts damage by 50% of unit`s Res.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Twin Blades',
        description: 'Boosts damage by 40% of unit`s Res. Disables non-Special skills that "reduce damage by X%."',
        sp: 200,
        required: ['Altina: Dawn`s Trueblade'],
        misc: 2
    },
    {
        name: 'Night Sky',
        description: 'Boosts damage dealt by 50%.',
        sp: 100,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Astra',
        description: 'Boosts damage dealt by 150%.',
        sp: 200,
        restrictions: [staff],
        misc: 4
    }
];
