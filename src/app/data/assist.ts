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
    },
    //
    {
        name: 'Draw Back',
        description: 'Unit moves 1 space away from target ally.\nAlly moves to unit`s previous space.',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Frightful Dream',
        description:
            'Grants another action to target ally. Inflicts Atk/Spd/Def/Res-3 and【Guard】on foes in cardinal directions of unit and target through their next actions. (Cannot target an ally with Sing or Dance. This skill treated as Sing or Dance.)\n\n【Guard】\nInflicts Special cooldown charge -1 on target per attack during combat through its next action. (Only highest value applied. Does not stack.)',
        sp: 400,
        required: []
    },
    {
        name: 'Future Vision',
        description: 'Unit and target ally swap spaces. Grants another action to unit. (Additional action granted once per turn only.)',
        sp: 400,
        required: ['Lucina: Glorious Archer']
    },
    {
        name: 'Gentle Dream',
        description:
            'Grants another action to target ally. Grants Atk/Spd/Def/Res+3 and the following status to target ally and allies in cardinal directions of unit and target (excluding unit): Unit can move to a space adjacent to any ally within 2 spaces. (That turn only. Cannot target an ally with Sing or Dance. This skill treated as Sing or Dance.)',
        sp: 400,
        required: ['Peony: Sweet Dream']
    },
    {
        name: 'Harsh Command+',
        description:
            'Neutralizes target ally`s penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally`s next action. Converts any penalties on target ally into bonuses.',
        sp: 400,
        restrictions: [staff]
    },
    {
        name: 'Harsh Command',
        description: 'Converts penalties on target into bonuses.',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Mend',
        description: 'Restores 10 HP to target ally.',
        sp: 100,
        required: [staff]
    },
    {
        name: 'Physic+',
        description: 'Restores HP = 50% of Atk. (Minimum of 8 HP.) Range = 2.',
        sp: 300,
        required: [staff]
    },
    {
        name: 'Physic',
        description: 'Restores 8 HP to target ally. Range = 2.',
        sp: 200,
        required: [staff]
    },
    {
        name: 'Pivot',
        description: 'Unit moves to opposite side of target ally.',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Play',
        description:
            'Grants another action to target ally. (That turn only. Does not stack. Cannot target an ally with Sing or Dance. This skill treated as Sing or Dance.)',
        sp: 150,
        required: ['Nils: Bright Bard']
    },
    {
        name: 'Rally Atk/Def+',
        description: 'Grants Atk/Def+6 to target ally for 1 turn.',
        sp: 400,
        restrictions: [staff]
    },
    {
        name: 'Rally Atk/Def',
        description: 'Grants Atk/Def+3 to target ally for 1 turn.',
        sp: 300,
        restrictions: [staff]
    },
    {
        name: 'Rally Atk/Res+',
        description: 'Grants Atk/Res+6 to target ally for 1 turn.',
        sp: 400,
        restrictions: [staff]
    },
    {
        name: 'Rally Atk/Res',
        description: 'Grants Atk/Res+3 to target ally for 1 turn.',
        sp: 300,
        restrictions: [staff]
    },
    {
        name: 'Rally Atk/Spd+',
        description: 'Grants Atk/Spd+6 to target ally for 1 turn.',
        sp: 400,
        restrictions: [staff]
    },
    {
        name: 'Rally Atk/Spd',
        description: 'Grants Atk/Spd+3 to target ally for 1 turn.',
        sp: 300,
        restrictions: [staff]
    },
    {
        name: 'Rally Attack',
        description: 'Grants Atk+4 to target ally for 1 turn.',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Rally Defense',
        description: 'Grants Def+4 to target ally for 1 turn.',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Rally Spd/Def+',
        description: 'Grants Spd/Def+6 to target ally for 1 turn.',
        sp: 400,
        restrictions: [staff]
    },
    {
        name: 'Rally Spd/Def',
        description: 'Grants Spd/Def+3 to target ally for 1 turn.',
        sp: 300,
        restrictions: [staff]
    },
    {
        name: 'Rally Spd/Res+',
        description: 'Grants Spd/Res+6 to target ally for 1 turn.',
        sp: 400,
        restrictions: [staff]
    },
    {
        name: 'Rally Spd/Res',
        description: 'Grants Spd/Res+3 to target ally for 1 turn.',
        sp: 300,
        restrictions: [staff]
    },
    {
        name: 'Rally Speed',
        description: 'Grants Spd+4 to target ally for 1 turn.',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Rally Up Atk+',
        description: 'Grants Atk+6 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.',
        sp: 400,
        restrictions: [staff]
    },
    {
        name: 'Rally Up Atk',
        description: 'Grants Atk+4 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.',
        sp: 300,
        restrictions: [staff]
    },
    {
        name: 'Rally Up Res+',
        description: 'Grants Res+6 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.',
        sp: 400,
        restrictions: [staff]
    },
    {
        name: 'Rally Up Res',
        description: 'Grants Res+4 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.',
        sp: 300,
        restrictions: [staff]
    },
    {
        name: 'Reciprocal Aid',
        description: 'Unit and target ally swap HP.\n(Neither can go above their max HP.)',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Recover+',
        description: 'Restores HP = 50% of Atk +10. (Minimum of 15 HP.)',
        sp: 300,
        required: [staff]
    },
    {
        name: 'Recover',
        description: 'Slows Special trigger (cooldown count+1).\nRestores 15 HP to target ally.',
        sp: 200,
        required: [staff]
    },
    {
        name: 'Rehabilitate+',
        description:
            'Restores HP = 50% of Atk -10. (Minimum of 7 HP.)\nIf target`s HP is ≤ 50%, the lower the target`s HP, the more HP is restored.',
        sp: 300,
        required: [staff]
    },
    {
        name: 'Rehabilitate',
        description:
            'Slows Special trigger (cooldown count+1).\nIf target`s HP is ≤ 50%, the lower the target`s HP, the more HP is restored. (Minimum of 7 HP.)',
        sp: 200,
        required: [staff]
    },
    {
        name: 'Restore+',
        description:
            'Restores HP = 50% of Atk. (Minimum of 8 HP.)\nNeutralizes ally`s penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally`s next action.',
        sp: 300,
        required: [staff]
    },
    {
        name: 'Restore',
        description:
            'Restores 8 HP.\nNeutralizes ally`s penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally`s next action.',
        sp: 200,
        required: [staff]
    },
    {
        name: 'Sacrifice',
        description:
            'Converts penalties on target into bonuses. Restores HP to target = unit`s current HP-1. Reduces unit`s HP by amount restored.',
        sp: 400,
        required: ['Micaiah: Priestess of Dawn', 'Micaiah: Queen of Dawn']
    },
    {
        name: 'Shove',
        description: 'Pushes target ally 1 space away.',
        sp: 150,
        restrictions: [staff]
    },
    {
        name: 'Sweet Dreams',
        description:
            'Grants another action to target ally and grants Atk/Spd/Def/Res+3 to target ally for 1 turn. Inflicts Atk/Spd/Def/Res-4 on nearest foes within 4 spaces of target ally through foes` next actions. (Cannot target an ally with Sing or Dance. This skill treated as Sing or Dance.)',
        sp: 400,
        required: []
    },
    {
        name: 'To Change Fate!',
        description:
            'Moves target ally to opposite side of unit and grants another action to unit. Grants Atk+6 to unit and Pair Up cohort (if any) for 1 turn and inflicts【Isolation】on unit and Pair Up cohort (if any) through their next action. (Does not stack.)\n\n【Isolation】\nTarget cannot use or be the target of Assist skills through its next action. (Target can neither use nor be the target of skills like Dance and Sing, skills that neutralize penalties, like Restore and Harsh Command+, etc.)',
        sp: 500,
        required: ['Chrom: Crowned Exalt']
    }
];
