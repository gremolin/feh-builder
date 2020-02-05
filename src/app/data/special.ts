import { Skill } from './data.types';

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
    }
];
