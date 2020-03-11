import { Skill } from './data.types';
import { beast, breath, distant, none, staff } from './hardcoded';

export const fehSpecials: Skill[] = [
    { name: '-', description: '-', sp: undefined },
    {
        name: 'Aegis',
        description: 'If foe`s Range = 2, reduces damage from that foe`s attack by 50%.',
        sp: 200,
        restrictions: [distant],
        misc: 3
    },
    {
        name: 'Aether',
        description: 'Treats foe`s Def/Res as if reduced by 50% during combat.\nRestores HP = half of damage dealt.',
        sp: 500,
        restrictions: [staff],
        misc: 5
    },
    {
        name: 'Astra',
        description: 'Boosts damage dealt by 150%.',
        sp: 200,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Black Luna',
        description: 'Treats foe`s Def/Res as if reduced by 80% during combat.\n(Skill cannot be inherited.)',
        sp: 500,
        required: ['Zelgius: Jet-Black General', 'Black Knight: Sinister General'],
        misc: 3
    },
    {
        name: 'Blazing Flame',
        description:
            'Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit`s Atk minus foe`s Def or Res).',
        sp: 300,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Blazing Light',
        description:
            'Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit`s Atk minus foe`s Def or Res).',
        sp: 300,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Blazing Thunder',
        description:
            'Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit`s Atk minus foe`s Def or Res).',
        sp: 300,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Blazing Wind',
        description:
            'Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit`s Atk minus foe`s Def or Res).',
        sp: 300,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Blue Flame',
        description: 'Boosts damage by 10. If unit is adjacent to an ally, boosts damage by 25 instead.',
        sp: 500,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Bonfire',
        description: 'Boosts damage by 50% of unit`s Def.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Buckler',
        description: 'Reduces damage from an adjacent foe`s attack by 30%.',
        sp: 100,
        restrictions: [staff, distant],
        misc: 3
    },
    {
        name: 'Chilling Wind',
        description: 'Boosts damage by 50% of unit`s Res.',
        sp: 100,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Daylight',
        description: 'Restores HP = 30% of damage dealt.',
        sp: 100,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Draconic Aura',
        description: 'Boosts damage by 30% of unit`s Atk.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Dragon Fang',
        description: 'Boosts damage by 50% of unit`s Atk.',
        sp: 200,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Dragon Gaze',
        description: 'Boosts damage by 30% of unit`s Atk.',
        sp: 100,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Earthfire Balm',
        description: 'When healing an ally with a staff, grants Atk/Def+4 to all allies for 1 turn.',
        sp: 200,
        required: [staff],
        misc: 1
    },
    {
        name: 'Earthfire Balm+',
        description: 'When healing an ally with a staff, grants Atk/Def+6 to all allies for 1 turn.',
        sp: 300,
        required: [staff],
        misc: 1
    },
    {
        name: 'Earthwater Balm',
        description: 'When healing an ally with a staff, grants Def/Res+4 to all allies for 1 turn.',
        sp: 200,
        required: [staff],
        misc: 1
    },
    {
        name: 'Earthwater Balm+',
        description: 'When healing an ally with a staff, grants Def/Res+6 to all allies for 1 turn.',
        sp: 300,
        required: [staff],
        misc: 1
    },
    {
        name: 'Escutcheon',
        description: 'Reduces damage from an adjacent foe`s attack by 30%.',
        sp: 200,
        restrictions: [staff, distant],
        misc: 2
    },
    {
        name: 'Fire Emblem',
        description:
            'Boosts damage by 30% of unit`s Spd.\nGrants Atk/Spd/Def/Res+4 to unit and all allies for 1 turn after combat. (Bonus granted to allies even if unit`s HP reaches 0.)',
        sp: 500,
        required: ['Marth: Hero-King', 'Marth: Royal Altean Duo'],
        misc: 2
    },
    {
        name: 'Fireflood Balm',
        description: 'When healing an ally with a staff, grants Atk/Res+4 to all allies for 1 turn.',
        sp: 200,
        required: [staff],
        misc: 1
    },
    {
        name: 'Fireflood Balm+',
        description: 'When healing an ally with a staff, grants Atk/Res+6 to all allies for 1 turn.',
        sp: 300,
        required: [staff],
        misc: 1
    },
    {
        name: 'Galeforce',
        description: '\n(Once per turn.)If unit initiates combat, grants unit another action after combat.',
        sp: 500,
        restrictions: [staff, distant, breath],
        misc: 5
    },
    {
        name: 'Glacies',
        description: 'Boosts damage by 80% of unit`s Res.',
        sp: 200,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Glimmer',
        description: 'Boosts damage dealt by 50%.',
        sp: 200,
        restrictions: [staff],
        misc: 2
    },
    {
        name: 'Glowing Ember',
        description: 'Boosts damage by 50% of unit`s Def.',
        sp: 100,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Growing Flame',
        description:
            'Before combat this unit initiates, foes in a wide area around target take damage equal to (unit`s Atk minus foe`s Def or Res).',
        sp: 300,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Growing Light',
        description:
            'Before combat this unit initiates, foes in a wide area around target take damage equal to (unit`s Atk minus foe`s Def or Res).',
        sp: 300,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Growing Thunder',
        description:
            'Before combat this unit initiates, foes in a wide area around target take damage equal to (unit`s Atk minus foe`s Def or Res).',
        sp: 300,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Growing Wind',
        description:
            'Before combat this unit initiates, foes in a wide area around target take damage equal to (unit`s Atk minus foe`s Def or Res).',
        sp: 300,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Heavenly Light',
        description: 'When healing an ally with a staff, restores 10 HP to all allies.',
        sp: 150,
        required: [staff],
        misc: 2
    },
    {
        name: 'Holy Vestments',
        description: 'If foe`s Range = 2, reduces damage from that foe`s attack by 30%.',
        sp: 100,
        restrictions: [staff, distant],
        misc: 3
    },
    {
        name: 'Ice Mirror',
        description:
            'If foe`s Range = 2, reduces damage from foe`s attacks by 30%. Boosts unit`s next attack by total damage reduced (by any source, including other skills) when Special triggers. Resets at end of combat. (Skill cannot be inherited.)',
        sp: 500,
        required: ['Fjorm: Princess of Ice'],
        misc: 2
    },
    {
        name: 'Iceberg',
        description: 'Boosts damage by 50% of unit`s Res.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Ignis',
        description: 'Boosts damage by 80% of unit`s Def.',
        sp: 200,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Imbue',
        description: 'When healing an ally with a staff, restores an additional 10 HP to target ally.',
        sp: 50,
        required: [staff],
        misc: 1
    },
    {
        name: 'Imperial Astra',
        description: 'Boosts damage by 40% of unit`s Spd.',
        sp: 500,
        required: ['Shannan: Wielder of Astra'],
        misc: 2
    },
    {
        name: 'Kindled-Fire Balm',
        description: 'When healing an ally with a staff, grants Atk+4 to all allies for 1 turn.',
        sp: 150,
        required: [staff],
        misc: 1
    },
    {
        name: 'Luna',
        description: 'Treats foe`s Def/Res as if reduced by 50% during combat.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Lunar Flash',
        description: 'Treats foe’s Def/Res as if reduced by 20% during combat. Boosts damage by 20% of unit`s Spd.',
        sp: 500,
        required: ['Alm: Saint-King', 'Alm: Lovebird Duo'],
        misc: 2
    },
    {
        name: 'Miracle',
        description: 'If unit`s HP > 1 and foe would reduce unit`s HP to 0, unit survives with 1 HP.',
        sp: 200,
        restrictions: [none],
        misc: 5
    },
    {
        name: 'Moonbow',
        description: 'Treats foe`s Def/Res as if reduced by 30% during combat.',
        sp: 200,
        restrictions: [staff],
        misc: 2
    },
    {
        name: 'New Moon',
        description: 'Treats foe`s Def/Res as if reduced by 30% during combat.',
        sp: 100,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Night Sky',
        description: 'Boosts damage dealt by 50%.',
        sp: 100,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Njörun`s Zeal',
        description:
            'If unit initiates combat, grants another action to unit after combat. (Once per turn.) When Special triggers, inflicts restricts movement to 1 space on unit and Pair Up cohort through their next action.',
        sp: 500,
        required: ['Leif: Unifier of Thracia'],
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
        name: 'Open the Future',
        description: 'Boosts damage by 50% of unit`s Def. Restores HP = 25% of damage dealt.',
        sp: 500,
        required: ['Alfonse: Askran Duo', 'Líf: Lethal Swordsman'],
        misc: 3
    },
    {
        name: 'Pavise',
        description: 'Reduces damage from an adjacent foe`s attack by 50%.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Radiant Aether',
        description: 'During combat, treats foe`s Def/Res as if reduced by 50%.\nRestores HP = 50% of damage dealt.',
        sp: 500,
        required: ['Ike: Vanguard Legend', 'Ike: Stalwart Heart'],
        misc: 4
    },
    {
        name: 'Regnal Astra',
        description: 'Boosts damage by 40% of unit`s Spd.\n(Skill cannot be inherited.)',
        sp: 500,
        required: ['Ayra: Astra`s Wielder'],
        misc: 2
    },
    {
        name: 'Reprisal',
        description: 'Boosts damage by 30% of damage dealt to unit.',
        sp: 200,
        restrictions: [staff],
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
        name: 'Rising Flame',
        description:
            'Before combat this unit initiates, foes in an area near target take damage equal to (unit`s Atk minus foe`s Def or Res).',
        sp: 150,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Rising Light',
        description:
            'Before combat this unit initiates, foes in an area near target take damage equal to (unit`s Atk minus foe`s Def or Res).',
        sp: 150,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Rising Thunder',
        description:
            'Before combat this unit initiates, foes in an area near target take damage equal to (unit`s Atk minus foe`s Def or Res).',
        sp: 150,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Rising Wind',
        description:
            'Before combat this unit initiates, foes in an area near target take damage equal to (unit`s Atk minus foe`s Def or Res).',
        sp: 150,
        restrictions: [staff],
        misc: 4
    },
    {
        name: 'Ruptured Sky',
        description:
            'Boosts damage by 20% of foe`s Atk. If in combat against a dragon foe or beast foe, boosts damage by 40% instead of 20%.',
        sp: 500,
        restrictions: [staff, beast, breath],
        misc: 2
    },
    {
        name: 'Sacred Cowl',
        description: 'If foe`s Range = 2, reduces damage from that foe`s attack by 30%.',
        sp: 200,
        restrictions: [staff, distant],
        misc: 2
    },
    {
        name: 'Sirius',
        description: 'Boosts damage by 30% of unit`s Spd. Restores HP = 30% of damage dealt.',
        sp: 500,
        required: ['Sothis: Girl on the Throne', 'Sothis: Silver Specter'],
        misc: 2
    },
    {
        name: 'Sol',
        description: 'Restores HP = 50% of damage dealt.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Solid-Earth Balm',
        description: 'When healing an ally with a staff, grants Def+4 to all allies for 1 turn.',
        sp: 150,
        required: [staff],
        misc: 1
    },
    {
        name: 'Still-Water Balm',
        description: 'When healing an ally with a staff, grants Res+4 to all allies for 1 turn.',
        sp: 150,
        required: [staff],
        misc: 1
    },
    {
        name: 'Swift-Winds Balm',
        description: 'When healing an ally with a staff, grants Spd+4 to all allies for 1 turn.',
        sp: 150,
        required: [staff],
        misc: 1
    },
    {
        name: 'Twin Blades',
        description: 'Boosts damage by 40% of unit`s Res. Disables non-Special skills that reduce damage by X%.',
        sp: 500,
        required: ['Altina: Dawn`s Trueblade'],
        misc: 2
    },
    {
        name: 'Umbra Blast',
        description: 'After combat, deals 5 damage to target and foes within 2 spaces of target and then unit and target foe swap spaces.',
        sp: 0,
        restrictions: [],
        misc: 9
    },
    {
        name: 'Umbra Calamity',
        description: 'After combat, deals 15 damage to target and foes within 2 spaces of target and then unit and target foe swap spaces.',
        sp: 0,
        restrictions: [],
        misc: 9
    },
    {
        name: 'Umbra Eruption',
        description: 'After combat, deals 10 damage to target and foes within 2 spaces of target and then unit and target foe swap spaces.',
        sp: 0,
        restrictions: [],
        misc: 9
    },
    {
        name: 'Vengeance',
        description: 'Boosts damage by 50% of damage dealt to unit.',
        sp: 200,
        restrictions: [staff],
        misc: 3
    },
    {
        name: 'Windfire Balm',
        description: 'When healing an ally with a staff, grants Atk/Spd+4 to all allies for 1 turn.',
        sp: 200,
        required: [staff],
        misc: 1
    },
    {
        name: 'Windfire Balm+',
        description: 'When healing an ally with a staff, grants Atk/Spd+6 to all allies for 1 turn.',
        sp: 300,
        required: [staff],
        misc: 1
    }
];
