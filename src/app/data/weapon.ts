import { Weapon } from './data.types';
import { axe, beast, blueTome, bow, breath, dagger, greenTome, lance, redTome, staff, sword } from './hardcoded';

export const fehWeapons: Weapon[] = [
    { name: '-', mt: 0, description: '-', sp: undefined },
    { name: 'Iron Sword', mt: 6, description: '', sp: 50, required: [sword] },
    { name: 'Steel Sword', mt: 8, description: '', sp: 100, required: [sword] },
    { name: 'Silver Sword', mt: 11, description: '', sp: 200, required: [sword] },
    { name: 'Silver Sword+', mt: 15, description: '', sp: 200, required: [sword], refinable: true, attRefine: true },

    {
        name: 'Fólkvangr',
        mt: 16,
        description: 'At start of combat, if unit`s HP ≤ 80%, grants Atk/Def+7 during combat.',
        sp: 400,
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description:
                    'If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ],
        required: ['Alfonse: Prince of Askr']
    },
    {
        name: 'Falchion',
        mt: 16,
        description: 'Effective against dragons.\nAt the start of every third turn, unit recovers 10 HP',
        sp: 400,
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description:
                    'If unit`s HP = 100% at start of combat and unit initiates combat, unit attacks twice, but deals 5 damage to unit after combat.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ],
        required: ['Alm: Imperial Ascent']
    },
    {
        name: 'Dracofalchion',
        mt: 16,
        description:
            'Effective against dragon foes. Grants Atk+3. If the number of foes within 2 spaces (excluding target) ≥ the number of allies within 2 spaces (excluding unit), grants Atk/Spd/Def/Res+5 during combat.',
        sp: 400,
        required: ['Alm: Imperial Ascent'],
        statIncreases: [{ key: 1, value: 3 }]
    },

    {
        name: 'Earthly Gáe Bolg',
        mt: 14,
        description:
            'Grants Def+3. In combat against an infantry, armored, or cavalry foe, inflicts Atk/Def-5 on foe and neutralizes foe`s bonuses to Atk/Def (from skills like Fortify, Rally, etc.) during combat.',
        sp: 400,
        required: ['Altena: Luminous Rider'],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Ragnell·Alondite',
        mt: 14,
        description: 'Unit can counterattack regardless of foe`s range. Inflicts Spd-5. Unit attacks twice (even if foe initiates combat).',
        sp: 400,
        required: ['Altena: Luminous Rider'],
        statIncreases: [{ key: 2, value: -5 }]
    },

    {
        name: 'Dark Mystletainn',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1).\nIf Special triggers before or during combat, grants Special cooldown count-2 after combat.',
        sp: 400,
        required: ['Ares: Black Knight']
    },
    {
        name: 'Mercurius',
        mt: 16,
        description:
            'Grants Atk+3. At start of turn, if unit`s HP ≥ 50%, grants Atk/Spd/Def/Res+4 to unit and sword, lance, axe, bow, dagger, or beast allies within 2 spaces for 1 turn. (Bonus granted to unit even if no allies are within 2 spaces.)',
        sp: 400,
        required: ['Astram: Midia`s Hero'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Concealed Blade',
        mt: 13,
        description: 'Deals +10 damage when Special triggers.',
        sp: 400,
        required: ['Athena: Borderland Sword'],
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description: 'If unit`s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ]
    },
    {
        name: 'Ayra`s Blade',
        mt: 16,
        description:
            'Grants Spd+3. If unit`s Spd > foe`s Spd, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
        sp: 400,
        required: ['Ayra: Astra`s Wielder'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Alondite',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range.',
        sp: 400,
        required: ['Zelgius: Jet-Black General', 'Black Knight: Sinister General']
    },
    {
        name: 'Wo Dao',
        mt: 9,
        description: 'Deals +10 damage when Special triggers.',
        sp: 200,
        required: [sword]
    },
    {
        name: 'Wo Dao+',
        mt: 13,
        description: 'Deals +10 damage when Special triggers.',
        sp: 300,
        required: [sword],
        refinable: true
    },
    {
        name: 'Brave Sword',
        mt: 5,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 200,
        required: [sword],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Brave Sword+',
        mt: 8,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 300,
        required: [sword],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Amiti',
        mt: 11,
        description: 'Inflicts Spd-2. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: true,
        required: ['Elincia: Lost Princess'],
        statIncreases: [{ key: 2, value: -2 }]
    },
    {
        name: 'Ardent Durandal',
        mt: 16,
        description:
            'Grants Atk+3. At start of turn, grants 【Bonus Doubler】to ally with the highest Atk.\n【Bonus Doubler】\nGrants bonus to Atk/Spd/Def/Res during combat = current bonus on each of unit`s stats for 1 turn. Calculates each stat bonus independently.',
        sp: 400,
        refinable: false,
        required: ['Eliwood: Blazing Knight'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    { name: 'Armorslayer', mt: 8, description: 'Effective against armored foes.', sp: 200, refinable: false, required: [sword] },
    { name: 'Armorslayer+', mt: 12, description: 'Effective against armored foes.', sp: 300, refinable: false, required: [sword] },
    { name: 'Armorsmasher', mt: 10, description: 'Effective against armored foes.', sp: 200, refinable: false, required: [sword] },
    { name: 'Armorsmasher+', mt: 14, description: 'Effective against armored foes.', sp: 300, refinable: true, required: [sword] },
    {
        name: 'Astra Blade',
        mt: 16,
        description: 'Grants Atk+3. If unit`s Atk > foe`s Def, deals damage = 50% of unit`s Atk minus foe`s Def.',
        sp: 400,
        refinable: false,
        required: ['Catria: Mild Middle Sister']
    },
    {
        name: 'Audhulma',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).\nGrants Res+5.',
        sp: 400,
        refinable: false,
        required: ['Joshua: Tempest King'],
        statIncreases: [{ key: 4, value: 5 }]
    },
    {
        name: 'Balmung',
        mt: 16,
        description:
            'Grants Spd+3. If foe initiates combat or if foe`s HP = 100% at start of combat, neutralizes penalties on unit and grants Atk/Spd/Def/Res+5 to unit during combat.',
        sp: 400,
        refinable: false,
        required: ['Shannan: Wielder of Astra'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Barrier Blade',
        mt: 10,
        description: 'If foe initiates combat, grants Res+7 during combat.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Barrier Blade+',
        mt: 14,
        description: 'If foe initiates combat, grants Res+7 during combat.',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Bellringer',
        mt: 10,
        description: 'When unit deals damage to foe during combat, restores 5 HP to unit. (Triggers even if 0 damage is dealt.)',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Bellringer+',
        mt: 14,
        description: 'When unit deals damage to foe during combat, restores 5 HP to unit. (Triggers even if 0 damage is dealt.)',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Beloved Zofia',
        mt: 16,
        description:
            'Grants Def+3. At start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+4, but after combat, if unit attacked, deals 4 damage to unit.',
        sp: 400,
        refinable: false,
        required: ['Celica: Imprisoned Soul']
    },
    {
        name: 'Binding Blade',
        mt: 16,
        description: 'If foe initiates combat, grants Def/Res+2 during combat.',
        sp: 400,
        refinable: false,
        required: ['Roy: Young Lion']
    },
    {
        name: 'Blazing Durandal',
        mt: 16,
        description:
            'Grants Atk+3. If unit`s Atk > foe`s Atk, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
        sp: 400,
        refinable: false,
        required: ['Roy: Brave Lion']
    },
    {
        name: 'Bull Blade',
        mt: 16,
        description: 'During combat, boosts unit`s Atk/Def by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.)',
        sp: 400,
        refinable: false,
        required: ['Cain: The Bull']
    },
    {
        name: 'Cake Cutter',
        mt: 10,
        description: 'If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Cake Cutter+',
        mt: 14,
        description: 'If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Conjurer Curios',
        mt: 16,
        description:
            'Effective against armored foes. Grants Atk+3. If it is an odd-numbered turn or if foe`s HP < 100% at start of combat, grants Atk/Spd/Def/Res+4 to unit during combat.',
        sp: 400,
        refinable: false,
        required: ['Hector: Dressed-Up Duo'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Creator Sword',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). During combat, neutralizes effects that guarantee foe`s follow-up attacks, prevent unit`s follow-up attacks, grant "Special cooldown charge +X" to foe, or inflict "Special cooldown charge -X" on unit.',
        sp: 400,
        refinable: false,
        required: ['Byleth: Proven Professor', 'Byleth: Tested Professor']
    },
    {
        name: 'Dark Greatsword',
        mt: 16,
        description: 'If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 400,
        refinable: false,
        required: ['Siegbert: Future King']
    },
    {
        name: 'Divine Tyrfing',
        mt: 16,
        description: 'Grants Res+3. Reduces damage from magic foe`s first attack by 50%.',
        sp: 400,
        refinable: false,
        required: ['Sigurd: Holy Knight'],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Dragonbind',
        mt: 16,
        description: 'Effective against dragon foes. Unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: ['Roy: Blazing Lion']
    },
    {
        name: 'Durandal',
        mt: 16,
        description: 'If unit initiates combat, grants Atk+4 during combat.',
        sp: 400,
        refinable: false,
        required: ['Eliwood: Knight of Lycia'],
        statIncreases: [{ key: 1, value: 4 }]
    },
    {
        name: 'Eckesachs',
        mt: 16,
        description: 'At start of turn, inflicts Def-4 on foes within 2 spaces through their next actions.',
        sp: 400,
        refinable: false,
        required: ['Zephiel: The Liberator']
    },
    {
        name: 'Exalted Falchion',
        mt: 16,
        description:
            'Effective against dragon foes. Grants Spd+3.\nGrants bonus to Atk/Spd/Def/Res during combat = current bonus on each of unit`s stats. Calculates each stat bonus independently.',
        sp: 400,
        refinable: false,
        required: ['Marth: Hero-King']
    },
    { name: 'Firesweep Sword', mt: 11, description: 'Unit and foe cannot counterattack.', sp: 200, refinable: false, required: [sword] },
    { name: 'Firesweep Sword+', mt: 15, description: 'Unit and foe cannot counterattack.', sp: 300, refinable: false, required: [sword] },
    {
        name: 'Geishun',
        mt: 10,
        description: 'At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Geishun+',
        mt: 14,
        description: 'At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Gjöll',
        mt: 16,
        description:
            'Grants Atk+3. If a penalty inflicted by a skill like Panic or Threaten and/or a negative status effect (preventing counterattacks or restricting movement) is active on foe, unit makes a guaranteed follow-up attack and foe cannot.',
        sp: 400,
        refinable: false,
        required: ['Hríd: Icy Blade'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Gladiator`s Blade',
        mt: 16,
        description:
            'If unit’s Atk > foe’s Atk, grants Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
        sp: 400,
        refinable: false,
        required: ['Ogma: Loyal Blade']
    },
    {
        name: 'Golden Dagger',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: ['Saber: Driven Mercenary']
    },
    {
        name: 'Guard Sword',
        mt: 10,
        description: 'Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.)',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Guard Sword+',
        mt: 14,
        description: 'Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.)',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Guard Lance',
        mt: 10,
        description: 'Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.)',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Guard Lance+',
        mt: 14,
        description: 'Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.)',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Hana`s Katana',
        mt: 16,
        description: 'Effective against armored foes.',
        sp: 400,
        refinable: false,
        required: ['Hana: Focused Samurai']
    },
    {
        name: 'Heart`s Blade',
        mt: 10,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Heart`s Blade+',
        mt: 14,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Hikami',
        mt: 16,
        description:
            'Grants Spd+3. At start of turn, inflicts Atk/Spd/Def/Res-4 on nearest foes within 4 spaces through their next actions.',
        sp: 400,
        refinable: false,
        required: ['Gunnthrá: Year`s First Dream'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Hinata`s Katana',
        mt: 16,
        description: 'If foe initiates combat, grants Atk/Def+4 during combat.',
        sp: 400,
        refinable: false,
        required: ['Hinata: Wild Samurai']
    },
    {
        name: 'Kadomatsu',
        mt: 10,
        description: 'Grants Def/Res+2 to allies within 2 spaces during combat.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Kadomatsu+',
        mt: 14,
        description: 'Grants Def/Res+2 to allies within 2 spaces during combat.',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Killing Edge',
        mt: 7,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Killing Edge+',
        mt: 11,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 300,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Laevatein',
        mt: 16,
        description: 'Grants Atk+3. Grants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 400,
        refinable: false,
        required: ['Laevatein: Searing Steel'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Larcei`s Edge',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). At start of combat, if unit`s Spd > foe`s Spd or if foe`s HP = 100%, grants Atk/Spd/Def/Res+4 to unit and neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 400,
        refinable: false,
        required: ['Larcei: Keen Kin ']
    },
    {
        name: 'Laslow`s Blade',
        mt: 16,
        description:
            'If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Spd/Def/Res+4 to target or targeting ally and allies within 2 spaces of unit and target or targeting ally for 1 turn after movement. (Excludes unit.)',
        sp: 400,
        refinable: false,
        required: ['Laslow: Dancing Duelist']
    },
    {
        name: 'Light Brand',
        mt: 16,
        description: 'Grants Def+3. If foe`s Def ≥ foe`s Res+5, deals +7 damage.',
        sp: 400,
        refinable: false,
        required: ['Leif: Prince of Leonster'],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Mareeta`s Sword',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If unit is not adjacent to an ally, grants Atk/Spd/Def/Res+4 and neutralizes effects that guarantee foe`s follow-up attacks and effects that prevent unit`s follow-up attacks during combat.',
        sp: 400,
        refinable: false,
        required: ['Mareeta: Sword of Stars']
    },
    {
        name: 'Meisterschwert',
        mt: 11,
        description: 'Inflicts Spd-5. Unit attacks twice.\n(Even if foe initiates combat, unit attacks twice.)',
        sp: 400,
        refinable: false,
        required: ['Reinhardt: Thunder`s Sword'],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Melee Bouquet',
        mt: 10,
        description: 'If unit initiates combat, grants Atk/Def+4 during combat and foe cannot make a follow-up attack.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Melee Bouquet+',
        mt: 14,
        description: 'If unit initiates combat, grants Atk/Def+4 during combat and foe cannot make a follow-up attack.',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Mirage Falchion',
        mt: 16,
        description:
            'Effective against dragon foes. Grants Def+3. If unit initiates combat, grants bonus to unit`s Atk/Def during combat = 3 + number of allies who have already acted × 2 (max value of 7). If foe initiates combat, grants bonus to unit`s Atk/Def during combat = 7 - number of foes who have already acted × 2 (min value of 3).',
        sp: 400,
        refinable: false,
        required: ['Itsuki: Finding a Path']
    },
    {
        name: 'Missiletainn',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1).\nGrants Special cooldown charge +1 per foe`s attack during combat. (Only highest value applied. Does not stack. Special cooldown charge granted even if foe`s attack deals 0 damage.)',
        sp: 400,
        refinable: false,
        required: ['Owain: Chosen One']
    },
    {
        name: 'Mystletainn',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: ['Eldigan: Lionheart']
    },
    {
        name: 'Nameless Blade',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: ['Fir: Sword Student', 'Karel: Sword Demon']
    },
    {
        name: 'Níu',
        mt: 16,
        description: 'Grants Spd+3. Adds 50% of total bonuses on foe to unit`s Atk/Spd/Def/Res during combat.',
        sp: 400,
        refinable: false,
        required: ['Laegjarn: Sheathed Steel'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Panther Sword',
        mt: 16,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 400,
        refinable: false,
        required: ['Stahl: Viridian Knight']
    },
    {
        name: 'Petal Parasol',
        mt: 10,
        description:
            'If【Penalty】is active on foe, grants Atk/Spd+5 during combat.\n【Penalty】\nAll effects that last "on foe through its next action." Includes penalties inflicted by a skill like Panic or Threaten and negative status effects (preventing counterattacks, restricting movement, or the effects of a skill like Triangle Adept or Guard).',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Petal Parasol+',
        mt: 14,
        description:
            'If【Penalty】is active on foe, grants Atk/Spd+5 during combat.\n【Penalty】\nAll effects that last "on foe through its next action." Includes penalties inflicted by a skill like Panic or Threaten and negative status effects (preventing counterattacks, restricting movement, or the effects of a skill like Triangle Adept or Guard).',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Ragnell',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: ['Ike: Young Mercenary', 'Ike: Vanguard Legend']
    },
    {
        name: 'Raijinto',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: ['Ryoma: Supreme Samurai', 'Ryoma: Peerless Samurai']
    },
    {
        name: 'Rapier',
        mt: 16,
        description:
            'Effective against armored and cavalry foes. Grants Spd+3. If unit’s HP ≤ 75% and foe initiates combat, unit can counterattack before foe`s first attack.',
        sp: 400,
        refinable: false,
        required: ['Phina: Roving Dancer']
    },
    {
        name: 'Regal Blade',
        mt: 16,
        description: 'At start of combat, if foe’s HP = 100%, grants Atk/Spd+2 during combat.',
        sp: 400,
        refinable: false,
        required: ['Lloyd: White Wolf']
    },
    {
        name: 'Resolute Blade',
        mt: 16,
        description: 'Grants Atk+3. Deals +10 damage when Special triggers.',
        sp: 400,
        refinable: false,
        required: ['Mia: Lady of Blades'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Rowdy Sword',
        mt: 11,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: false,
        required: ['Luke: Rowdy Squire'],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Royal Sword',
        mt: 16,
        description:
            'Grants Spd+3. If unit is within 2 spaces of an ally, grants unit Special cooldown charge +1 per unit`s attack. (Only highest value applied. Does not stack.)',
        sp: 400,
        refinable: false,
        required: ['Celica: Warrior Priestess']
    },
    {
        name: 'Ruby Sword',
        mt: 8,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Ruby Sword+',
        mt: 12,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 300,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Safeguard',
        mt: 10,
        description: 'If foe initiates combat, grants Def+7 during combat.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Safeguard+',
        mt: 14,
        description: 'If foe initiates combat, grants Def+7 during combat.',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Sandfort Spade',
        mt: 10,
        description: 'If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Def+4 during combat.',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Sandfort Spade+',
        mt: 14,
        description: 'If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Def+4 during combat.',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Scarlet Sword',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: ['Navarre: Scarlet Sword']
    },
    {
        name: 'Sealed Falchion',
        mt: 16,
        description: 'Effective against dragon foes.\nAt start of combat, if unit`s HP < 100%, grants Atk/Spd/Def/Res+5 during combat.',
        sp: 400,
        refinable: false,
        required: ['Chrom: Knight Exalt']
    },
    {
        name: 'Selena`s Blade',
        mt: 16,
        description:
            'Effective against armored foes. At start of combat, if foe`s Atk ≥ unit`s Atk+3, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 400,
        refinable: false,
        required: ['Selena: Cutting Wit']
    },
    {
        name: 'Shadow Sword',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If unit`s HP ≥ 50% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
        sp: 400,
        refinable: false,
        required: ['Mareeta: The Blade`s Pawn']
    },
    {
        name: 'Siegfried',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: ['Xander: Paragon Knight']
    },
    {
        name: 'Sieglinde',
        mt: 16,
        description: 'At start of turn, grants Atk+3 to adjacent allies for 1 turn.',
        sp: 400,
        refinable: false,
        required: ['Eirika: Restoration Lady']
    },
    {
        name: 'Silverbrand',
        mt: 16,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 400,
        refinable: false,
        required: ['Seth: Silver Knight']
    },
    {
        name: 'Skuld',
        mt: 16,
        description: 'If Sing or Dance is used, grants Atk/Spd/Def/Res+3 to target.',
        sp: 400,
        refinable: false,
        required: ['Olivia: Sky-High Dancer']
    },
    {
        name: 'Slaying Edge',
        mt: 10,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 200,
        refinable: false,
        required: [sword]
    },
    {
        name: 'Slaying Edge+',
        mt: 14,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 300,
        refinable: true,
        required: [sword]
    },
    {
        name: 'Sökkvabekkr',
        mt: 16,
        description:
            'If unit is within 3 spaces of an ally, grants Atk/Spd/Def/Res+4 during combat, and unit makes a guaranteed follow-up attack, but after combat, if unit attacked, deals 20 damage to nearest ally.',
        sp: 400,
        refinable: false,
        required: ['Lif']
    },
    {
        name: 'Sol Katti',
        mt: 16,
        description: 'If unit`s HP ≤ 50% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
        sp: 400,
        refinable: false,
        required: ['Lyn: Lady of the Plains']
    },
    {
        name: 'Solitary Blade',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: ['Lon`qu: Solitary Blade']
    },
    {
        name: 'Storm Sieglinde',
        mt: 16,
        description:
            'Grants Atk+3. If the number of foes within 2 spaces (excluding target) ≥ the number of allies within 2 spaces (excluding unit), grants Def/Res+3 and Special cooldown charge +1 per unit`s attack during combat.\n(Only highest value applied. Does not stack.)',
        sp: 400,
        refinable: false,
        required: ['Eirika: Graceful Resolve'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Tyrfing',
        mt: 16,
        description: 'If unit`s HP ≤ 50%, grants Def+4 during combat.',
        sp: 400,
        refinable: false,
        required: ['Seliph: Heir of Light'],
        statIncreases: [{ key: 3, value: 4 }]
    },
    {
        name: 'Umbra Burst',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false,
        required: ['Røkkr']
    },
    {
        name: 'Vassal`s Blade',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If unit`s Spd > foe`s Spd, deals damage = 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.)',
        sp: 400,
        refinable: false,
        required: ['Karla: Sword Vassal']
    },
    {
        name: 'Venin Edge',
        mt: 16,
        description:
            'Grants Def+3. After combat, if unit attacked, deals 10 damage to target and foes within 2 spaces of target, and inflicts status on those foes preventing counterattacks through their next actions.',
        sp: 400,
        refinable: false,
        required: ['Kempf: Conniving General'],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Whitewing Blade',
        mt: 16,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 400,
        refinable: false,
        required: ['Palla: Eldest Whitewing']
    },
    {
        name: 'Wing Sword',
        mt: 16,
        description: 'Effective against armored and cavalry foes.',
        sp: 400,
        refinable: false,
        required: ['Caeda: Talys`s Heart']
    },
    {
        name: 'Yato',
        mt: 16,
        description: 'If unit initiates combat, grants Spd+4 during combat.',
        sp: 400,
        refinable: false,
        required: ['Corrin: Fateful Prince'],
        statIncreases: [{ key: 2, value: 4 }]
    },
    { name: 'Zanbato', mt: 10, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [sword] },
    { name: 'Zanbato+', mt: 14, description: 'Effective against cavalry foes.', sp: 300, refinable: true, required: [sword] },
    //red tomes
    {
        name: 'Aversa`s Night',
        mt: 13,
        description:
            'Grants Res+3. At start of turn, if any foe`s HP ≤ unit`s HP-3 and that foe is adjacent to another foe, inflicts Atk/Spd/Def/Res-3 on that foe and bonuses on that foe become penalties through its next action.',
        sp: 400,
        required: ['Aversa: Dark One'],
        statIncreases: [{ key: 4, value: 3 }]
    },
    { name: 'Bolganone+', mt: 13, description: '', sp: 300, refinable: false, required: [redTome] },
    { name: 'Bolganone', mt: 9, description: '', sp: 200, refinable: false, required: [redTome] },
    {
        name: 'Book of Dreams',
        mt: 14,
        description: 'Grants Atk+3. If unit is adjacent to an ally, inflicts Atk/Spd/Def/Res-4 on foe during combat.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Brynhildr',
        mt: 14,
        description: 'If unit initiates combat, inflicts status on foe restricting movement to 1 space through its next action.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Candelabra+',
        mt: 12,
        description: 'If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: true,
        required: [redTome]
    },
    {
        name: 'Candelabra',
        mt: 8,
        description: 'If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Corvus Tome',
        mt: 14,
        description:
            'Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 400,
        refinable: true,
        required: [redTome]
    },
    {
        name: 'Cymbeline',
        mt: 14,
        description: 'If unit initiates combat, grants Atk+4 to adjacent allies for 1 turn after combat.',
        sp: 400,
        refinable: true,
        required: [redTome]
    },
    {
        name: 'Dawn Suzu',
        mt: 14,
        description:
            'Effective against armored and cavalry foes. Grants Atk+3. Disables unit`s and foe`s skills that change attack priority.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    { name: 'Elfire', mt: 6, description: '', sp: 100, refinable: false, required: [redTome] },
    {
        name: 'Eternal Tome',
        mt: 14,
        description:
            'Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    { name: 'Fenrir+', mt: 13, description: '', sp: 300, refinable: false, required: [redTome] },
    { name: 'Fenrir', mt: 9, description: '', sp: 200, refinable: false, required: [redTome] },
    { name: 'Fire', mt: 4, description: '', sp: 50, refinable: false, required: [redTome] },
    {
        name: 'Flower of Plenty',
        mt: 14,
        description: 'Grants Res+3. Grants Atk/Res+3 to allies within 5 rows and 3 columns centered on unit during combat.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    { name: 'Flux', mt: 4, description: '', sp: 50, refinable: false, required: [redTome] },
    {
        name: 'Forblaze',
        mt: 14,
        description: 'At start of turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Fruit of Iðunn',
        mt: 14,
        description: 'Grants Spd+3. If unit`s HP ≥ 50%, allies within 2 spaces can move to a space adjacent to unit.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Gleipnir',
        mt: 14,
        description: 'Grants Res+3. At start of combat, if foe`s HP = 100%, grants Atk/Spd+3 during combat.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Grima`s Truth',
        mt: 14,
        description:
            'Grants Def+3. After combat, if unit attacked, inflicts Atk/Spd-5 on target and foes within 2 spaces of target through their next actions, and grants Atk/Spd+5 to unit and allies within 2 spaces for 1 turn.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Grimoire',
        mt: 14,
        description: 'If unit`s HP ≥ 50%, unit can move to a space adjacent to an ally within 2 spaces.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Hermit`s Tome',
        mt: 14,
        description:
            'Effective against cavalry foes. If foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Imhullu',
        mt: 14,
        description:
            'Grants Res+3. At the start of turn 3, deals 5 damage to non-magic foes within 5 columns centered on unit, and inflicts status on those foes preventing counterattacks through their next actions.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    { name: 'Keen Rauðrwolf+', mt: 12, description: 'Effective against cavalry foes.', sp: 300, refinable: true, required: [redTome] },
    { name: 'Keen Rauðrwolf', mt: 8, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [redTome] },
    {
        name: 'Loptous',
        mt: 14,
        description:
            'Grants Res+3. Skills with "effective against dragons" are effective against unit.\nIf foe has no skills with "effective against dragons," inflicts Atk-6 on foe during combat.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Loyal Wreath+',
        mt: 12,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 300,
        refinable: true,
        required: [redTome]
    },
    {
        name: 'Loyal Wreath',
        mt: 8,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 200,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Mirage Rod',
        mt: 14,
        description: 'Grants Atk+3. Inflicts Atk/Res-6 on foes within 2 spaces during combat.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Mögþrasir',
        mt: 8,
        description: 'Inflicts Spd-2. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 2, value: -2 }]
    },
    {
        name: 'Múspell Fireposy',
        mt: 14,
        description:
            'Grants Spd+3. During combat, boosts unit`s Atk/Spd by number of allies within 2 spaces × 2.\n(Maximum bonus of +6 to each stat.)',
        sp: 400,
        refinable: false,
        required: [redTome],
        statIncreases: [{ key: 1, value: -2 }]
    },
    {
        name: 'Naglfar',
        mt: 14,
        description:
            'Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Ragnarok',
        mt: 14,
        description:
            'At start of combat, if unit`s HP = 100%, grants Atk/Spd+5, but after combat, if unit attacked, deals 5 damage to unit.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrblade+',
        mt: 13,
        description: 'Slows Special trigger (cooldown count+1).\nGrants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 300,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrblade',
        mt: 9,
        description: 'Slows Special trigger (cooldown count+1).\nGrants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 200,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrfox+',
        mt: 12,
        description: 'If unit initiates combat, inflicts Atk/Spd/Def/Res-4 on foe during combat.',
        sp: 300,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrfox',
        mt: 8,
        description: 'If unit initiates combat, inflicts Atk/Spd/Def/Res-4 on foe during combat.',
        sp: 200,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrowl+',
        mt: 10,
        description: 'During combat, boosts unit`s Atk/Spd/Def/Res by number of adjacent allies × 2.',
        sp: 300,
        refinable: true,
        required: [redTome]
    },
    {
        name: 'Rauðrowl',
        mt: 6,
        description: 'During combat, boosts unit`s Atk/Spd/Def/Res by number of adjacent allies × 2.',
        sp: 200,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrraven+',
        mt: 11,
        description:
            'Grants weapon-triangle advantage against colorless foes,\nand inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 300,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrraven',
        mt: 7,
        description:
            'Grants weapon-triangle advantage against colorless foes,\nand inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 200,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrserpent+',
        mt: 12,
        description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.',
        sp: 300,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Rauðrserpent',
        mt: 8,
        description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.',
        sp: 200,
        refinable: false,
        required: [redTome]
    },
    { name: 'Rauðrwolf+', mt: 10, description: 'Effective against cavalry foes.', sp: 300, refinable: false, required: [redTome] },
    { name: 'Rauðrwolf', mt: 6, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [redTome] },
    {
        name: 'Reese`s Tome',
        mt: 14,
        description: 'During combat, boosts unit`s Atk/Spd/Def/Res by number of adjacent allies × 2.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    { name: 'Ruin', mt: 6, description: '', sp: 100, refinable: false, required: [redTome] },
    {
        name: 'Tharja`s Hex',
        mt: 14,
        description: 'Grants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 400,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Tomato Tome+',
        mt: 12,
        description: 'Grants Atk/Spd+1 to allies within 2 spaces during combat.',
        sp: 300,
        refinable: true,
        required: [redTome]
    },
    {
        name: 'Tomato Tome',
        mt: 8,
        description: 'Grants Atk/Spd+1 to allies within 2 spaces during combat.',
        sp: 200,
        refinable: false,
        required: [redTome]
    },
    {
        name: 'Umbra Burst',
        mt: 14,
        description: 'Unit can counterattack regardless of foe`s range. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false
    },
    {
        name: 'Valflame',
        mt: 14,
        description:
            'At start of turn, inflicts Atk/Res-4 on foes in cardinal directions with Res < unit`s Res through their next actions.',
        sp: 400,
        refinable: true,
        required: ['Arvis: Emperor of Flame']
    },
    // lance
    {
        name: 'Barrier Lance+',
        mt: 14,
        description: 'If foe initiates combat, grants Res+7 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Barrier Lance',
        mt: 10,
        description: 'If foe initiates combat, grants Res+7 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Berkut`s Lance+',
        mt: 14,
        description: 'If foe initiates combat, grants Res+4 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Berkut`s Lance',
        mt: 10,
        description: 'If foe initiates combat, grants Res+4 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Brave Lance+',
        mt: 8,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 300,
        refinable: false,
        required: [lance],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Brave Lance',
        mt: 5,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 200,
        refinable: false,
        required: [lance],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Bright Naginata',
        mt: 16,
        description: 'If foe initiates combat, grants Atk/Def+4 during combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Bull Spear',
        mt: 16,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 400,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Carrot Lance+',
        mt: 13,
        description: 'If unit initiates combat, restores 4 HP after combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Carrot Lance',
        mt: 9,
        description: 'If unit initiates combat, restores 4 HP after combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Casa Blanca+',
        mt: 14,
        description:
            'If foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Casa Blanca',
        mt: 10,
        description:
            'If foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Cordelia`s Lance',
        mt: 10,
        description: 'Inflicts Spd-2. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: true,
        required: [lance],
        statIncreases: [{ key: 2, value: -2 }]
    },
    {
        name: 'Cursed Lance',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1). Grants Atk/Spd+2. Deals 4 damage to unit after combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Dauntless Lance',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).\nEffective against armored foes.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Daybreak Lance',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Deft Harpoon+',
        mt: 14,
        description:
            'At start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Deft Harpoon',
        mt: 10,
        description:
            'At start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Fensalir',
        mt: 16,
        description: 'At start of turn, inflicts Atk-4 on foes within 2 spaces through their next actions.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Festive Siegmund',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1).\nIf unit is not adjacent to an ally, grants Atk/Spd/Def/Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    { name: 'Firesweep L+', mt: 15, description: 'Unit and foe cannot counterattack.', sp: 300, refinable: false, required: [lance] },
    { name: 'Firesweep Lance', mt: 11, description: 'Unit and foe cannot counterattack.', sp: 200, refinable: false, required: [lance] },
    {
        name: 'First Bite+',
        mt: 14,
        description: 'If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'First Bite',
        mt: 10,
        description: 'If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Flame Siegmund',
        mt: 16,
        description:
            'Grants Atk+3. If the number of foes within 2 spaces (excluding target) ≥ the number of allies within 2 spaces (excluding unit), unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [lance],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Flashing Carrot+',
        mt: 14,
        description: 'At start of combat, if foe`s HP = 100%, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Flashing Carrot',
        mt: 10,
        description: 'At start of combat, if foe`s HP = 100%, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    { name: 'Florina`s Lance', mt: 16, description: 'Effective against armored foes.', sp: 400, refinable: false, required: [lance] },
    {
        name: 'Gáe Bolg',
        mt: 16,
        description: 'In combat against an infantry, armored, or cavalry foe, grants Atk/Def+5 during combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Geirskögul',
        mt: 16,
        description:
            'Grants Def+3. If allies within 2 spaces use sword, lance, axe, bow, dagger, or beast damage, grants Atk/Spd+3 to those allies during combat.',
        sp: 400,
        refinable: false,
        required: [lance],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Golden Naginata',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). At start of combat, if foe`s Atk ≥ unit`s Atk+3, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Gradivus',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Harmonic Lance+',
        mt: 13,
        description: 'Deals +10 damage when Special triggers.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Harmonic Lance',
        mt: 9,
        description: 'Deals +10 damage when Special triggers.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    { name: 'Heavy Spear+', mt: 12, description: 'Effective against armored foes.', sp: 300, refinable: true, required: [lance] },
    { name: 'Heavy Spear', mt: 8, description: 'Effective against armored foes.', sp: 200, refinable: false, required: [lance] },
    {
        name: 'Hinoka`s Spear',
        mt: 16,
        description: 'If unit is within 2 spaces of a flying or infantry ally, grants Atk/Spd+4 during combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    { name: 'Iron Lance', mt: 6, description: '', sp: 50, refinable: false, required: [lance] },
    {
        name: 'It`s Curtains...+',
        mt: 14,
        description: 'At the start of turn 1, grants Special cooldown count-2.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'It`s Curtains...',
        mt: 10,
        description: 'At the start of turn 1, grants Special cooldown count-2.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Killer Lance+',
        mt: 11,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 300,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Killer Lance',
        mt: 7,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Knightly Lance',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Kriemhild',
        mt: 16,
        description:
            'If a bow, dagger, magic, or staff foe initiates combat and unit is within 2 spaces of an ally, unit can counterattack regardless of foe`s range and foe cannot make a follow-up attack, but after combat, if unit attacked, deals 20 damage to nearest ally.',
        sp: 400,
        required: ['Berkut: Purgatorial Prince']
    },
    {
        name: 'Leiptr',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Lofty Blossoms+',
        mt: 14,
        description: 'If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Lofty Blossoms',
        mt: 10,
        description: 'If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    { name: 'Lordly Lance', mt: 16, description: 'Effective against armored foes.', sp: 400, refinable: false, required: [lance] },
    {
        name: 'Loyal Greatlance',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Luncheon Lance+',
        mt: 14,
        description: 'If foe initiates combat, grants Atk/Def+4 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Luncheon Lance',
        mt: 10,
        description: 'If foe initiates combat, grants Atk/Def+4 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Maltet',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If unit`s HP ≥ 50% and foe initiates combat, unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Mirage Feather',
        mt: 16,
        description:
            'Effective against armored and cavalry foes. Grants Spd+3. If unit initiates combat after an ally has already acted, grants Atk/Spd+6 during combat and unit can make a follow-up attack before foe can counterattack.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Ninis`s Ice Lance',
        mt: 16,
        description:
            'Effective against dragon and beast foes. Grants Spd+3. If unit initiates combat, grants Atk/Spd/Def/Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Noble Lance',
        mt: 16,
        description:
            'Grants Atk+3. At start of combat, if both unit`s and foe`s HP = 100% or if both unit`s and foe`s HP < 100%, unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [lance],
        statIncreases: [{ key: 1, value: 3 }]
    },
    { name: 'Oboro`s Spear', mt: 16, description: 'Effective against armored foes.', sp: 400, refinable: true, required: [lance] },
    {
        name: 'Panther Lance',
        mt: 16,
        description: 'During combat, boosts unit`s Atk/Def by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.)',
        sp: 400,
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description: 'If cavalry allies within 2 spaces use sword, lance, or axe and unit initiates combat, unit attacks twice.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ],
        required: ['Abel: The Panther']
    },
    {
        name: 'Peri`s Lance',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Prized Lance',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). At start of combat, if foe’s HP = 100%, grants Atk/Spd/Def/Res+4 during combat and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Reginleif',
        mt: 16,
        description:
            'Effective against armored and cavalry foes. Grants Atk+3. If unit’s Atk > foe’s Atk and/or extra movement granted by another skill is active on unit, unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Reprisal Lance+',
        mt: 14,
        description: 'If foe initiates combat, grants Atk+6 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Reprisal Lance',
        mt: 10,
        description: 'If foe initiates combat, grants Atk+6 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Rhomphaia',
        mt: 16,
        description: 'Effective against armored and cavalry foes.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    { name: 'Ridersbane+', mt: 14, description: 'Effective against cavalry foes.', sp: 300, refinable: true, required: [lance] },
    { name: 'Ridersbane', mt: 10, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [lance] },
    {
        name: 'Sable Lance',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If unit is not adjacent to an ally, grants Atk/Spd/Def/Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Sapphire Lance+',
        mt: 12,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 300,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Sapphire Lance',
        mt: 8,
        description: 'If unit has weapon-triangle advantage, boosts Atk by 20%.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Scythe of Sariel',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If a bonus granted by a skill like Rally or Hone and/or extra movement granted by a skill like Armor March or Armored Boots is active on foe, grants Atk/Spd/Def/Res+4 to unit during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Shanna`s Lance',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Shell Lance+',
        mt: 14,
        description: 'If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Shell Lance',
        mt: 10,
        description: 'If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Siegmund',
        mt: 16,
        description: 'At start of turn, grants Atk+3 to adjacent allies for 1 turn.',
        sp: 400,
        refinable: false,
        required: [lance],
        statIncreases: [{ key: 1, value: 3 }]
    },
    { name: 'Silver Lance+', mt: 15, description: '', sp: 300, refinable: false, required: [lance] },
    { name: 'Silver Lance', mt: 11, description: '', sp: 200, refinable: false, required: [lance] },
    {
        name: 'Slaying Lance+',
        mt: 14,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Slaying Lance',
        mt: 10,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    { name: 'Slaying Spear+', mt: 14, description: 'Effective against armored foes.', sp: 300, refinable: false, required: [lance] },
    { name: 'Slaying Spear', mt: 10, description: 'Effective against armored foes.', sp: 200, refinable: false, required: [lance] },
    {
        name: 'Sol Lance',
        mt: 16,
        description:
            'Grants Res+3. When unit deals damage to foe during combat, restores 10 HP to unit. (Triggers even if 0 damage is dealt.)',
        sp: 400,
        refinable: false,
        required: [lance],
        statIncreases: [{ key: 4, value: 3 }]
    },
    { name: 'Steady Lance', mt: 16, description: 'Unit and foe cannot counterattack.', sp: 400, refinable: false, required: [lance] },
    { name: 'Steel Lance', mt: 8, description: '', sp: 100, refinable: false, required: [lance] },
    {
        name: 'Tannenboom!+',
        mt: 14,
        description: 'If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Tannenboom!',
        mt: 10,
        description: 'If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Thorn Lance',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). At start of combat, if unit`s Atk > foe`s Atk, inflicts Atk/Def-6 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Umbra Burst',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Vanguard+',
        mt: 14,
        description: 'If foe initiates combat, grants Def+7 during combat.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Vanguard',
        mt: 10,
        description: 'If foe initiates combat, grants Def+7 during combat.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Verðandi',
        mt: 12,
        description: 'If Sing or Dance is used, grants Atk/Spd/Def/Res+4 to target.',
        sp: 400,
        required: ['Berkut: Debonair Noble']
    },
    {
        name: 'Vidofnir',
        mt: 16,
        description: 'If foe initiates combat and uses sword, lance, or axe, grants Def+7 during combat.',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Wagasa+',
        mt: 14,
        description: 'At start of turn, inflicts Def-7 on foe on the enemy team with the highest Def through its next action.',
        sp: 300,
        refinable: true,
        required: [lance]
    },
    {
        name: 'Wagasa',
        mt: 10,
        description: 'At start of turn, inflicts Def-7 on foe on the enemy team with the highest Def through its next action.',
        sp: 200,
        refinable: false,
        required: [lance]
    },
    {
        name: 'Whitewing Lance',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: [lance]
    },
    { name: 'Whitewing Spear', mt: 16, description: 'Effective against armored foes.', sp: 400, refinable: false, required: [lance] },
    // blue tome
    {
        name: 'Aura',
        mt: 14,
        description: 'If unit initiates combat, restores 5 HP to adjacent allies after combat.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blárblade+',
        mt: 13,
        description: 'Slows Special trigger (cooldown count+1).\nGrants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 300,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blárblade',
        mt: 9,
        description: 'Slows Special trigger (cooldown count+1).\nGrants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blárblooms+',
        mt: 12,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Blárblooms',
        mt: 8,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blárowl+',
        mt: 10,
        description: 'During combat, boosts unit`s Atk/Spd/Def/Res by number of adjacent allies × 2.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Blárowl',
        mt: 6,
        description: 'During combat, boosts unit`s Atk/Spd/Def/Res by number of adjacent allies × 2.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blárraven+',
        mt: 11,
        description:
            'Grants weapon-triangle advantage against colorless foes,\nand inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 300,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blárraven',
        mt: 7,
        description:
            'Grants weapon-triangle advantage against colorless foes,\nand inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blárserpent+',
        mt: 12,
        description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Blárserpent',
        mt: 8,
        description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    { name: 'Blárwolf+', mt: 10, description: 'Effective against cavalry foes.', sp: 300, refinable: false, required: [blueTome] },
    { name: 'Blárwolf', mt: 6, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [blueTome] },
    {
        name: 'Blessed Bouquet+',
        mt: 12,
        description: 'If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Blessed Bouquet',
        mt: 8,
        description: 'If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.',
        sp: 300,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blue Egg+',
        mt: 11,
        description: 'If unit initiates combat, restores 4 HP after combat.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Blue Egg',
        mt: 7,
        description: 'If unit initiates combat, restores 4 HP after combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Blue Gift+',
        mt: 12,
        description:
            'If foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Blue Gift',
        mt: 8,
        description:
            'If foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Book of Orchids',
        mt: 14,
        description: 'If unit initiates combat, grants Atk+6 during combat.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Dancer`s Score+',
        mt: 12,
        description: 'If unit initiates combat, restores 7 HP to adjacent allies after combat.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Dancer`s Score',
        mt: 8,
        description: 'If unit initiates combat, restores 7 HP to adjacent allies after combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Dark Aura',
        mt: 14,
        description:
            'At start of turn, if adjacent allies use sword, axe, lance, dragonstone, or beast damage, grants Atk+6 to those allies for 1 turn.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Death',
        mt: 14,
        description: 'Grants Res+3. Grants Atk/Spd/Def/Res+4 during combat. After combat, if unit attacked, deals 4 damage to unit.',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Dire Thunder',
        mt: 9,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 2, value: -5 }]
    },
    { name: 'Ellight', mt: 6, description: '', sp: 100, refinable: false, required: [blueTome] },
    { name: 'Elthunder', mt: 6, description: '', sp: 100, refinable: false, required: [blueTome] },
    {
        name: 'Father`s Tactics',
        mt: 12,
        description: 'At start of combat, if unit`s Res > foe`s Res, grants Atk/Spd/Def/Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Fimbulvetr',
        mt: 14,
        description:
            'Grants Res+3. At start of combat, if【Penalty】 is active on unit or if unit`s HP < 100%, neutralizes penalties on unit and grants Atk/Spd/Def/Res+4 during combat.\n\n【Penalty】\nAll effects that last "on foe through its next action." Includes penalties inflicted by a skill like Panic or Threaten and negative status effects (preventing counterattacks, restricting movement, or the effects of a skill like Triangle Adept or Guard).',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Flower of Joy',
        mt: 14,
        description: 'Grants Res+3. Grants Atk/Spd+3 to any ally in a cardinal direction from unit during that ally`s combat.',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Fresh Bouquet+',
        mt: 12,
        description: 'At start of turn, if unit is adjacent to an ally, grants Spd+4 to unit and adjacent allies for 1 turn.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Fresh Bouquet',
        mt: 8,
        description: 'At start of turn, if unit is adjacent to an ally, grants Spd+4 to unit and adjacent allies for 1 turn.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Huginn`s Egg',
        mt: 14,
        description:
            'Grants Res+3. At start of turn, if unit`s HP ≥ 50%, inflicts Atk/Def-5 on foe on the enemy team with the lowest Res through its next action.',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Imbued Koma',
        mt: 14,
        description:
            'Accelerates Special trigger (cooldown count-1). At start of combat, if Special is ready, grants Atk/Spd/Def/Res+5 during combat and foe cannot make a follow-up attack.',
        sp: 400,
        required: ['Alfonse: Askran Duo']
    },
    {
        name: 'Ivaldi',
        mt: 14,
        description: 'Grants Def+3. At start of combat, if foe`s HP = 100%, grants Atk/Spd+3 during combat.',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Juicy Wave+',
        mt: 12,
        description: 'If unit`s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
        sp: 300,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Juicy Wave',
        mt: 8,
        description: 'If unit`s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    { name: 'Keen Blárwolf+', mt: 12, description: 'Effective against cavalry foes.', sp: 300, refinable: false, required: [blueTome] },
    { name: 'Keen Blárwolf', mt: 8, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [blueTome] },
    { name: 'Light', mt: 4, description: '', sp: 50, refinable: false, required: [blueTome] },
    {
        name: 'Missiletainn',
        mt: 14,
        description:
            'Accelerates Special trigger (cooldown count-1). At the start of turn 1, grants Special cooldown count-1 to unit for each magic ally on your team (including unit).',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Mjölnir',
        mt: 14,
        description: 'Accelerates Special trigger (cooldown count-1).\nIf unit initiates combat, grants Spd+6 during combat.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Odin`s Grimoire',
        mt: 14,
        description: 'Grants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Prayer Wheel',
        mt: 14,
        description:
            'Grants Spd+3. If a skill like Sing or Dance is used, grants bonus to target`s Atk/Spd/Def/Res = highest bonus on target ally for 1 turn. (Example: if target has a +6 bonus to Atk, grants Atk/Spd/Def/Res+6.)',
        sp: 400,
        required: ['Azura: Vallite Songstress'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Sagittae',
        mt: 14,
        description: 'Grants Def+3.\nAt start of combat, if foe`s Atk ≥ unit`s Atk+5, grants Atk/Spd/Def/Res+5 during combat.',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Sealife Tome+',
        mt: 12,
        description: 'Grants Atk/Spd+1 to allies within 2 spaces during combat.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Sealife Tome',
        mt: 8,
        description: 'Grants Atk/Spd+1 to allies within 2 spaces during combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    { name: 'Shine+', mt: 13, description: '', sp: 300, refinable: true, required: [blueTome] },
    { name: 'Shine', mt: 9, description: '', sp: 200, refinable: false, required: [blueTome] },
    {
        name: 'Silver Goblet+',
        mt: 12,
        description: 'Grants Def/Res+4 to allies within 2 spaces during combat against bow, dagger, magic, or staff foes.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Silver Goblet',
        mt: 8,
        description: 'Grants Def/Res+4 to allies within 2 spaces during combat against bow, dagger, magic, or staff foes.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Spooky Censer+',
        mt: 12,
        description: 'Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.',
        sp: 300,
        refinable: true,
        required: [blueTome],
        statIncreases: [
            { key: 1, value: 3 },
            { key: 2, value: 3 },
            { key: 3, value: 3 },
            { key: 4, value: 3 }
        ]
    },
    {
        name: 'Spooky Censer',
        mt: 8,
        description: 'Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.',
        sp: 200,
        refinable: false,
        required: [blueTome],
        statIncreases: [
            { key: 1, value: 3 },
            { key: 2, value: 3 },
            { key: 3, value: 3 },
            { key: 4, value: 3 }
        ]
    },
    {
        name: 'Tactical Bolt',
        mt: 14,
        description:
            'Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Tannenbit+',
        mt: 12,
        description: 'When unit deals damage to foe during combat, restores 5 HP to unit. (Triggers even if 0 damage is dealt.)',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Tannenbit',
        mt: 8,
        description: 'When unit deals damage to foe during combat, restores 5 HP to unit. (Triggers even if 0 damage is dealt.)',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Thani',
        mt: 14,
        description:
            'Effective against armored and cavalry foes. Grants Res+3. If armored or cavalry foe uses bow, dagger, magic, or staff, reduces damage from foe`s first attack by 30%.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    { name: 'Thoron+', mt: 13, description: '', sp: 300, refinable: false, required: [blueTome] },
    { name: 'Thoron', mt: 9, description: '', sp: 200, refinable: false, required: [blueTome] },
    { name: 'Thunder', mt: 4, description: '', sp: 50, refinable: false, required: [blueTome] },
    {
        name: 'Tome of Thoron',
        mt: 14,
        description:
            'At start of turn, if unit`s HP ≤ 75% and unit`s attack triggers Special, grants Special cooldown count-1, and deals +10 damage when Special triggers.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Umbra Burst',
        mt: 14,
        description: 'Unit can counterattack regardless of foe`s range. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Valaskjálf',
        mt: 14,
        description: 'If unit`s HP ≤ 50% and foe initiates combat, unit can counterattack before foe`s first attack.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Vessel of Cheer+',
        mt: 12,
        description: 'If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 300,
        refinable: true,
        required: [blueTome]
    },
    {
        name: 'Vessel of Cheer',
        mt: 8,
        description: 'If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 200,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Virtuous Naga',
        mt: 14,
        description:
            'Effective against dragon foes. Grants Atk+3. At start of combat, if unit`s Atk > foe`s Atk, grants Atk/Res+6 during combat.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Wargod`s Tome',
        mt: 14,
        description:
            'At start of turn, inflicts Atk/Res-4 on foes in cardinal directions with Res < unit`s Res through their next actions.',
        sp: 400,
        refinable: false,
        required: [blueTome]
    },
    {
        name: 'Weirding Tome',
        mt: 14,
        description:
            'Grants Spd+3. At start of turn, inflicts Spd-5 on foes in cardinal directions with Res < unit`s Res through their next actions.',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Worldsea Wave',
        mt: 14,
        description:
            'Grants Spd+3. If unit`s HP ≥ 50% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
        sp: 400,
        refinable: false,
        required: [blueTome],
        statIncreases: [{ key: 2, value: 3 }]
    },

    // axe
    {
        name: 'Ardent Service+',
        mt: 14,
        description: 'At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Ardent Service',
        mt: 10,
        description: 'At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Armads',
        mt: 16,
        description: 'If unit`s HP ≥ 80% and foe initiates combat, unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Arthur`s Axe',
        mt: 16,
        description: 'If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 400,
        required: ['Arthur: Hapless Hero'],
        skillLevels: [
            {
                value: 'Perf',
                description:
                    'At start of combat, if【Penalty】 is active on unit or if unit`s HP < 100%, grants Atk/Spd/Def/Res+5 during combat.\n【Penalty】\nAll effects that last "on foe through its next action." Includes penalties inflicted by a skill like Panic or Threaten and negative status effects (preventing counterattacks, restricting movement, or the effects of a skill like Triangle Adept or Guard).',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ]
    },
    {
        name: 'Axe of Virility',
        mt: 16,
        description: 'Effective against armored foes.',
        sp: 300,
        required: [axe],
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description: 'Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.',
                sp: 400,
                statIncreases: [
                    { key: 0, value: 3 },
                    { key: 1, value: 3 },
                    { key: 2, value: 3 },
                    { key: 4, value: 3 }
                ]
            }
        ]
    },
    {
        name: 'Basilikos',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Beach Banner+',
        mt: 14,
        description: 'If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Beach Banner',
        mt: 10,
        description: 'If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Berserk Armads',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1).\nAt start of turn, if unit`s HP ≤ 75% and unit`s attack triggers Special, grants Special cooldown count-1, and deals +10 damage when Special triggers.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Beruka`s Axe',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        required: ['Beruka: Quiet Assassin'],
        refinable: true,
        skillLevels: [
            {
                value: 'Perf',
                description:
                    'At start of combat, if unit`s HP ≥ 50%, inflicts Atk-4 on foe during combat and Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ]
    },
    {
        name: 'Brave Axe+',
        mt: 8,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 300,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Brave Axe',
        mt: 5,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 200,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Býleistr',
        mt: 16,
        description:
            'At start of odd-numbered turns, grants Atk/Spd/Def/Res+4 to unit and adjacent allies for 1 turn.\n(Bonus granted to unit even if no allies are adjacent.)',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Camilla`s Axe',
        mt: 16,
        description: 'If unit is within 2 spaces of a cavalry or flying ally, grants Atk/Spd+4 during combat.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Carrot Axe+',
        mt: 13,
        description: 'If unit initiates combat, restores 4 HP after combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Carrot Axe',
        mt: 9,
        description: 'If unit initiates combat, restores 4 HP after combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Cherche`s Axe',
        mt: 11,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 2, value: -5 }]
    },

    {
        name: 'Devil Axe',
        mt: 16,
        description: 'Grants Atk/Spd/Def/Res+4 during combat, but if unit attacked, deals 4 damage to unit after combat.',
        sp: 400,
        refinable: false,
        required: ['Barst: The Hatchet']
    },
    {
        name: 'Draconic Poleax',
        mt: 16,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Eldhrímnir',
        mt: 16,
        description:
            'Effective against beast foes. Grants Spd+3. At start of combat, if unit`s Res > foe`s Res, reduces foe`s Atk/Spd by 50% of difference between stats during combat. (Calculates reduction before combat. Maximum penalty of -8.)',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Emerald Axe+',
        mt: 12,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Emerald Axe',
        mt: 8,
        description:
            'If unit has weapon-triangle advantage, boosts Atk by 20%.\nIf unit has weapon-triangle disadvantage, reduces Atk by 20%.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Faithful Axe+',
        mt: 14,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Faithful Axe',
        mt: 10,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    { name: 'Firesweep Axe+', mt: 15, description: 'Unit and foe cannot counterattack.', sp: 300, refinable: false, required: [axe] },
    { name: 'Firesweep Axe', mt: 11, description: 'Unit and foe cannot counterattack.', sp: 200, refinable: false, required: [axe] },
    { name: 'Frederick`s Axe', mt: 16, description: 'Effective against armored foes.', sp: 400, refinable: false, required: [axe] },
    {
        name: 'Freikugel',
        mt: 16,
        description:
            'Grants Spd+3. At start of ally`s combat, if unit is within 2 spaces of any allies with Def > unit`s Def, grants Atk/Spd+4 to those allies during combat. At start of unit`s combat, if unit is not within 2 spaces of any allies with Def > unit`s Def, grants Atk/Spd+6 to unit during combat.',
        sp: 400,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Garm',
        mt: 16,
        description:
            'Grants Atk+3. If a bonus granted by a skill like Rally or Hone and/or extra movement granted by a skill like Armor March or Armored Boots is active, unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 1, value: 3 }]
    },
    { name: 'Giant Spoon+', mt: 13, description: 'Deals +10 damage when Special triggers.', sp: 300, refinable: false, required: [axe] },
    { name: 'Giant Spoon', mt: 9, description: 'Deals +10 damage when Special triggers.', sp: 200, refinable: false, required: [axe] },
    {
        name: 'Glitnir',
        mt: 16,
        description:
            'Grants Atk+3. If unit initiates combat and foe uses sword, lance, axe, dragonstone, or beast damage, grants Atk+6 during combat, and if unit initiates combat against a foe that can counter, unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Grado Poleax',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        required: ['Amelia: Rose of the War'],
        skillLevels: [
            {
                value: 'Perf',
                description:
                    'If a bonus granted by a skill like Rally or Hone and/or extra movement granted by a skill like Armor March or Armored Boots is active, grants Spd/Def+5 during combat.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ]
    },
    {
        name: 'Guardian`s Axe',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Hack-o`-Lantern+',
        mt: 14,
        description: 'Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.)',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Hack-o`-Lantern',
        mt: 10,
        description: 'Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.)',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Hagoita+',
        mt: 14,
        description: 'Grants Def/Res+2 to allies within 2 spaces during combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Hagoita',
        mt: 10,
        description: 'Grants Def/Res+2 to allies within 2 spaces during combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    { name: 'Hammer+', mt: 12, description: 'Effective against armored foes.', sp: 300, refinable: false, required: [axe] },
    { name: 'Hammer', mt: 8, description: 'Effective against armored foes.', sp: 200, refinable: false, required: [axe] },
    {
        name: 'Handbell+',
        mt: 14,
        description: 'If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Handbell',
        mt: 10,
        description: 'If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Hauteclere',
        mt: 16,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Hel Scythe',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If foe does not use magic or staff, calculates damage using foe`s Res, and if unit’s HP > 1 and foe would reduce unit’s HP to 0, unit survives with 1 HP. (Once per combat. Does not stack.)',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    { name: 'Iron Axe', mt: 6, description: '', sp: 50, refinable: false, required: [axe] },
    {
        name: 'Killer Axe+',
        mt: 11,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Killer Axe',
        mt: 7,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Legion`s Axe+',
        mt: 14,
        description: 'After combat, if unit attacked, converts bonuses on foe into penalties through its next action.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Legion`s Axe',
        mt: 10,
        description: 'After combat, if unit attacked, converts bonuses on foe into penalties through its next action.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Lilith Floatie+',
        mt: 14,
        description: 'Grants Atk/Spd+1 to allies within 2 spaces during combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Lilith Floatie',
        mt: 10,
        description: 'Grants Atk/Spd+1 to allies within 2 spaces during combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Melon Crusher+',
        mt: 14,
        description:
            'At start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Melon Crusher',
        mt: 10,
        description:
            'At start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Mirage Axe',
        mt: 16,
        description:
            'Grants Res+3. If unit is within 2 spaces of an ally, grants Def/Res+6 to unit during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Nóatún',
        mt: 16,
        description: 'If unit`s HP ≤ 50%, unit can move to a space adjacent to any ally.',
        sp: 400,
        required: ['Anna: Commander'],
        skillLevels: [
            {
                value: 'Perf',
                description: 'If unit`s HP ≥ 50%, unit can move to a space adjacent to any ally within 2 spaces.',
                sp: 400,
                statIncreases: [{ key: 0, value: 3 }]
            }
        ]
    },
    { name: 'Poleaxe+', mt: 14, description: 'Effective against cavalry foes.', sp: 300, refinable: false, required: [axe] },
    { name: 'Poleaxe', mt: 10, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [axe] },
    {
        name: 'Rearguard+',
        mt: 14,
        description: 'If foe initiates combat, grants Def+7 during combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Rearguard',
        mt: 10,
        description: 'If foe initiates combat, grants Def+7 during combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Sack o` Gifts+',
        mt: 14,
        description: 'If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Sack o` Gifts',
        mt: 10,
        description: 'If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Scepter of Love',
        mt: 16,
        description:
            'Grants Spd+3. At start of combat, if a bonus granted by a skill like Rally or Hone is active on unit or if unit`s HP ≥ 70% at start of combat, grants bonus to unit`s Atk = 25% of foe`s Def and inflicts penalty on foe`s Atk = 25% of foe`s Res during combat.',
        sp: 400,
        refinable: false,
        required: ['Alm: Lovebird Duo'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Shoreline Rake+',
        mt: 14,
        description: 'If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Def+4 during combat.',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Shoreline Rake',
        mt: 10,
        description: 'If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Def+4 during combat.',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    { name: 'Silver Axe+', mt: 15, description: '', sp: 300, refinable: false, required: [axe] },
    { name: 'Silver Axe', mt: 11, description: '', sp: 200, refinable: false, required: [axe] },
    {
        name: 'Sinmara',
        mt: 16,
        description: 'Grants Def+3. At start of turn, deals 20 damage to foes within 2 spaces.',
        sp: 400,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Slaying Axe+',
        mt: 14,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 300,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Slaying Axe',
        mt: 10,
        description: 'Accelerates Special trigger (cooldown count-1).',
        sp: 200,
        refinable: false,
        required: [axe]
    },
    { name: 'Slaying Hammer+', mt: 14, description: 'Effective against armored foes.', sp: 300, refinable: false, required: [axe] },
    { name: 'Slaying Hammer', mt: 10, description: 'Effective against armored foes.', sp: 200, refinable: false, required: [axe] },
    { name: 'Steel Axe', mt: 8, description: '', sp: 100, refinable: false, required: [axe] },
    {
        name: 'Stout Tomahawk',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Thunder Armads',
        mt: 16,
        description:
            'Grants Def+3. If the number of allies within 2 spaces (excluding unit) > the number of foes within 2 spaces (excluding target), foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Umbra Burst',
        mt: 16,
        description: 'Unit can counterattack regardless of foe`s range. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Urvan',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If unit receives consecutive attacks, reduces damage from foe`s second attack onward by 80%.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Urðr',
        mt: 16,
        description: 'If Sing or Dance is used, grants Atk/Spd/Def/Res+3 to target.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Victorious Axe',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If the number of foes within 2 spaces (excluding target) ≥ the number of allies within 2 spaces (excluding unit), unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    {
        name: 'Vouge',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). At start of combat, if unit`s HP ≥ 50%, unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: [axe]
    },
    { name: 'Wo Gùn+', mt: 13, description: 'Deals +10 damage when Special triggers.', sp: 300, refinable: false, required: [axe] },
    { name: 'Wo Gùn', mt: 9, description: 'Deals +10 damage when Special triggers.', sp: 200, refinable: false, required: [axe] },
    {
        name: 'Wolf Berg',
        mt: 16,
        description:
            'Grants Def+3. If the number of foes within 2 spaces (excluding target) ≥ the number of allies within 2 spaces (excluding unit), grants Atk/Spd/Def/Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [axe],
        statIncreases: [{ key: 3, value: 3 }]
    },
    //green tome
    {
        name: 'Blizzard',
        mt: 14,
        description: 'Grants Res+3. Grants bonus to unit`s Atk = total penalties on foe during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Book of Shadows',
        mt: 14,
        description: 'Grants Spd+3. If unit is adjacent to an ally, inflicts Atk/Spd/Def/Res-4 on foe during combat.',
        sp: 400,
        required: ['Azura: Young Songstress'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Buoyboard+',
        mt: 12,
        description: 'If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Res+4 during combat.',
        sp: 300,
        refinable: true,
        required: [greenTome]
    },
    {
        name: 'Buoyboard',
        mt: 8,
        description: 'If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Res+4 during combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Chaos Manifest',
        mt: 14,
        description:
            'Grants Res+3. If a penalty inflicted by a skill like Panic or Threaten and/or a negative status effect (preventing counterattacks or restricting movement) is active on foe, grants Atk+6 during combat and unit makes a guaranteed follow-up attack.',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Dancer`s Ring+',
        mt: 12,
        description: 'If unit initiates combat, restores 7 HP to adjacent allies after combat.',
        sp: 300,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Dancer`s Ring',
        mt: 8,
        description: 'If unit initiates combat, restores 7 HP to adjacent allies after combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Dark Excalibur',
        mt: 14,
        description: 'Deals +10 damage when Special triggers.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Divine Naga',
        mt: 14,
        description: 'Effective against dragon foes. Neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Élivágar',
        mt: 14,
        description:
            'If unit initiates combat, converts bonuses on foes within 2 spaces of target into penalties through their next actions.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    { name: 'Elwind', mt: 6, description: '', sp: 100, refinable: false, required: [greenTome] },
    { name: 'Excalibur', mt: 14, description: 'Effective against flying foes.', sp: 400, refinable: false, required: [greenTome] },
    {
        name: 'Flower of Sorrow',
        mt: 14,
        description: 'Grants Atk+3. Inflicts Def/Res-4 on any foe in a cardinal direction from unit during that foe`s combat.',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Forseti',
        mt: 14,
        description:
            'Grants Spd+3. If unit`s HP ≥ 50% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Giga Excalibur',
        mt: 14,
        description:
            'Grants Spd+3. If unit`s Spd > foe`s Spd, deals damage = 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.)',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Green Egg+',
        mt: 11,
        description: 'If unit initiates combat, restores 4 HP after combat.',
        sp: 300,
        refinable: true,
        required: [greenTome]
    },
    {
        name: 'Green Egg',
        mt: 7,
        description: 'If unit initiates combat, restores 4 HP after combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Green Gift+',
        mt: 12,
        description:
            'If foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 300,
        refinable: true,
        required: [greenTome]
    },
    {
        name: 'Green Gift',
        mt: 8,
        description:
            'If foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Gronnblade+',
        mt: 13,
        description: 'Slows Special trigger (cooldown count+1).\nGrants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 300,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Gronnblade',
        mt: 9,
        description: 'Slows Special trigger (cooldown count+1).\nGrants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Gronnblooms+',
        mt: 12,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 300,
        refinable: true,
        required: [greenTome]
    },
    {
        name: 'Gronnblooms',
        mt: 8,
        description: 'If unit is adjacent to an ally, grants Atk/Spd/Def/Res+3 during combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Gronnowl+',
        mt: 10,
        description: 'During combat, boosts unit`s Atk/Spd/Def/Res by number of adjacent allies × 2.',
        sp: 300,
        refinable: true,
        required: [greenTome]
    },
    {
        name: 'Gronnowl',
        mt: 6,
        description: 'During combat, boosts unit`s Atk/Spd/Def/Res by number of adjacent allies × 2.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Gronnraven+',
        mt: 11,
        description:
            'Grants weapon-triangle advantage against colorless foes,\nand inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 300,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Gronnraven',
        mt: 7,
        description:
            'Grants weapon-triangle advantage against colorless foes,\nand inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Gronnserpent+',
        mt: 12,
        description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.',
        sp: 300,
        refinable: true,
        required: [greenTome]
    },
    {
        name: 'Gronnserpent',
        mt: 8,
        description: 'If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    { name: 'Gronnwolf+', mt: 10, description: 'Effective against cavalry foes.', sp: 300, refinable: false, required: [greenTome] },
    { name: 'Gronnwolf', mt: 6, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [greenTome] },
    {
        name: 'Hibiscus Tome+',
        mt: 12,
        description: 'Grants Atk/Spd+1 to allies within 2 spaces during combat.',
        sp: 300,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Hibiscus Tome',
        mt: 8,
        description: 'Grants Atk/Spd+1 to allies within 2 spaces during combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Ífingr',
        mt: 14,
        description:
            'Effective against dragon foes. If unit is within 3 spaces of an ally, grants Atk/Spd/Def/Res+4 and neutralizes effects that guarantee foe`s follow-up attacks during combat, but after combat, if unit attacked, inflicts Atk/Spd/Def/Res-4 on nearest ally through its next action.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Inscribed Tome',
        mt: 14,
        description:
            'Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Iris`s Tome',
        mt: 14,
        description: 'Grants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    { name: 'Keen Gronnwolf+', mt: 12, description: 'Effective against cavalry foes.', sp: 300, refinable: true, required: [greenTome] },
    { name: 'Keen Gronnwolf', mt: 8, description: 'Effective against cavalry foes.', sp: 200, refinable: false, required: [greenTome] },
    {
        name: 'Light of Dawn',
        mt: 14,
        description:
            'Effective against armored and cavalry foes. Grants Res+3. Grants bonus to Atk/Spd/Def/Res during combat = current penalty on each of target`s stats. Calculates each stat bonus independently.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Madness Flask+',
        mt: 12,
        description: 'Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.',
        sp: 300,
        refinable: true,
        required: [greenTome],
        statIncreases: [
            { key: 1, value: 3 },
            { key: 2, value: 3 },
            { key: 3, value: 3 },
            { key: 4, value: 3 }
        ]
    },
    {
        name: 'Madness Flask',
        mt: 8,
        description: 'Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.',
        sp: 200,
        refinable: false,
        required: [greenTome],
        statIncreases: [
            { key: 1, value: 3 },
            { key: 2, value: 3 },
            { key: 3, value: 3 },
            { key: 4, value: 3 }
        ]
    },
    {
        name: 'Muninn`s Egg',
        mt: 14,
        description:
            'Grants Res+3. At start of turn, if unit`s HP ≥ 50%, inflicts Atk/Res-5 on foe on the enemy team with the lowest Spd through its next action.',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Naga',
        mt: 14,
        description: 'Effective against dragon foes. If foe initiates combat, grants Def/Res+2 during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Nifl Frostflowers',
        mt: 14,
        description:
            'Grants Atk+3. During combat, boosts unit`s Atk/Spd by number of allies within 2 spaces × 2.\n(Maximum bonus of +6 to each stat.)',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 1, value: 3 }]
    },
    { name: 'Rexcalibur+', mt: 13, description: '', sp: 300, refinable: false, required: [greenTome] },
    { name: 'Rexcalibur', mt: 9, description: '', sp: 200, refinable: false, required: [greenTome] },
    {
        name: 'Saintly Seraphim',
        mt: 14,
        description:
            'Grants Spd+3. If unit initiates combat, deals damage = 25% of foe`s Res. (Ignores reductions to Res from Special skills.)',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Sandwiches!+',
        mt: 12,
        description: 'If foe initiates combat, grants Atk/Res+4 during combat.',
        sp: 300,
        refinable: true,
        required: [greenTome]
    },
    {
        name: 'Sandwiches!',
        mt: 8,
        description: 'If foe initiates combat, grants Atk/Res+4 during combat.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Spectral Tome+',
        mt: 12,
        description:
            'After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.',
        sp: 300,
        refinable: true,
        required: [greenTome]
    },
    {
        name: 'Spectral Tome',
        mt: 8,
        description:
            'After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.',
        sp: 200,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Tactical Gale',
        mt: 14,
        description:
            'Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Thunderhead',
        mt: 14,
        description: 'Grants bonus to unit’s Atk = total bonuses on unit during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Umbra Burst',
        mt: 14,
        description: 'Unit can counterattack regardless of foe`s range. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Vafþrúðnir',
        mt: 9,
        description: 'Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Veðrfölnir`s Egg',
        mt: 14,
        description: 'Grants Spd+3. At start of combat, if unit`s HP ≥ 75%, grants Atk/Spd/Def/Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Wind`s Brand',
        mt: 14,
        description: 'At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.',
        sp: 400,
        refinable: false,
        required: [greenTome]
    },
    {
        name: 'Winds of Silesse',
        mt: 14,
        description: 'Grants Spd+3. If unit is not adjacent to an ally, grants Atk/Spd+6 to unit during combat.',
        sp: 400,
        refinable: false,
        required: [greenTome],
        statIncreases: [{ key: 2, value: 3 }]
    },
    { name: 'Wind', mt: 4, description: '', sp: 50, refinable: false, required: [greenTome] },

    // staff

    {
        name: 'Absorb+',
        mt: 7,
        description: 'Restores HP = 50% of damage dealt.\nAfter combat, if unit attacked, restores 7 HP to allies within 2 spaces of unit.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    { name: 'Absorb', mt: 4, description: 'Restores HP = 50% of damage dealt.', sp: 150, refinable: false, required: [staff] },
    { name: 'Assault', mt: 10, description: '', sp: 50, refinable: false, required: [staff] },
    {
        name: 'Candlelight+',
        mt: 11,
        description:
            'After combat, if unit attacked, inflicts status on target and foes within 2 spaces of target preventing counterattacks through their next actions.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Candlelight',
        mt: 7,
        description: 'After combat, if unit attacked, inflicts status on foe preventing counterattacks through its next action.',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Fear+',
        mt: 12,
        description:
            'After combat, if unit attacked, inflicts Atk-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Fear',
        mt: 5,
        description: 'After combat, if unit attacked, inflicts Atk-6 on foe through its next action.',
        sp: 150,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Flash+',
        mt: 11,
        description:
            'After combat, if unit attacked, inflicts status on target and foes within 2 spaces of target preventing counterattacks through their next actions.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Flash',
        mt: 7,
        description: 'After combat, if unit attacked, inflicts status on foe preventing counterattacks through its next action.',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Gjallarbrú',
        mt: 14,
        description:
            'Calculates damage from staff like other weapons. At start of turn, if foe`s HP ≤ unit`s HP-3 and foe is in cardinal directions, inflicts【Isolation】on foe.\n\n【Isolation】\nTarget cannot use or be the target of Assist skills through its next action. (Target can neither use nor be the target of skills like Dance and Sing, skills that neutralize penalties, like Restore and Harsh Command+, etc.)',
        sp: 400,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Grandscratcher+',
        mt: 12,
        description:
            'At the start of turn 1, grants Special cooldown count-1 to ally with the highest Atk. (If that ally does not have a Special skill, this skill has no effect.)',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Grandscratcher',
        mt: 8,
        description:
            'At the start of turn 1, grants Special cooldown count-1 to ally with the highest Atk. (If that ally does not have a Special skill, this skill has no effect.)',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Gravity+',
        mt: 10,
        description:
            'After combat, if unit attacked, inflicts status on target and foes within 1 space of target restricting movement to 1 space through their next actions.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Gravity',
        mt: 6,
        description: 'After combat, if unit attacked, inflicts status on foe restricting movement to 1 space through its next action.',
        sp: 150,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Hliðskjálf',
        mt: 14,
        description:
            'Foe cannot counterattack. After combat, if unit attacked, inflicts Atk/Spd/Def/Res-4 on target and foes within 2 spaces of target through their next actions, and grants Atk/Spd/Def/Res+4 to unit and allies within 2 spaces for 1 turn.',
        sp: 400,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Joyous Lantern+',
        mt: 12,
        description: 'At start of turn, grants Def/Res+5 to ally with the highest Atk for 1 turn. (Excludes unit.)',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Joyous Lantern',
        mt: 8,
        description: 'At start of turn, grants Def/Res+3 to ally with the highest Atk for 1 turn. (Excludes unit.)',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Kumade+',
        mt: 12,
        description: 'At start of turn, inflicts Atk/Spd-5 on foe on the enemy team with the highest Def through its next action.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Kumade',
        mt: 8,
        description: 'At start of turn, inflicts Atk/Spd-3 on foe on the enemy team with the highest Def through its next action.',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Melancholy+',
        mt: 12,
        description:
            'After combat, if unit attacked, resets Special cooldown of target and foes within 2 spaces of target, and inflicts【Guard】on target and foes within 2 spaces of target. (Neutralizes Special cooldown count reductions after combat, but skills that Accelerate and Slow Special are still effective.)\n\n【Guard】\nInflicts Special cooldown charge -1 on target per attack during combat through its next action. (Only highest value applied. Does not stack.)',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Melancholy',
        mt: 8,
        description:
            'After combat, if unit attacked, resets Special cooldown of foe, and inflicts【Guard】on foe. (Neutralizes Special cooldown count reductions after combat, but skills that Accelerate and Slow Special are still effective.)\n\n【Guard】\nInflicts Special cooldown charge -1 on target per attack during combat through its next action. (Only highest value applied. Does not stack.)',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Ovoid Staff+',
        mt: 12,
        description: 'At start of turn, restores 7 HP to unit and adjacent allies.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Ovoid Staff',
        mt: 8,
        description: 'At start of turn, restores 5 HP to unit and adjacent allies.',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Pain+',
        mt: 10,
        description: 'Deals 10 damage to target and foes within 2 spaces of target after combat.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Pain',
        mt: 3,
        description: 'After combat, if unit attacked, deals 10 damage to foe.',
        sp: 150,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Panic+',
        mt: 11,
        description:
            'After combat, if unit attacked, converts bonuses on target and foes within 2 spaces of target into penalties through their next actions.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Panic',
        mt: 7,
        description: 'After combat, if unit attacked, converts bonuses on foe into penalties through its next action.',
        sp: 150,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Rapport Wand+',
        mt: 12,
        description: 'At start of turn, grants Atk/Def+5 to ally with the highest Spd for 1 turn. (Excludes unit.)',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Rapport Wand',
        mt: 8,
        description: 'At start of turn, grants Atk/Def+3 to ally with the highest Spd for 1 turn. (Excludes unit.)',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Sanngriðr',
        mt: 14,
        description:
            'Foe cannot counterattack. If unit initiates combat, grants Atk/Spd+3 during combat. After combat, if unit attacked, inflicts【Gravity】on target and foes within 1 space of target.\n\n【Gravity】\nRestricts target`s movement to 1 space through its next action.',
        sp: 400,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Slow+',
        mt: 12,
        description:
            'After combat, if unit attacked, inflicts Spd-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Slow',
        mt: 5,
        description: 'After combat, if unit attacked, inflicts Spd-6 on foe through its next action.',
        sp: 150,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Thökk',
        mt: 14,
        description:
            'Calculates damage from staff like other weapons.\nAt start of turn, if foe`s HP ≤ unit`s HP-3 and foe is in cardinal direction and uses bow, dagger, magic, or staff, foe cannot move more than 1 space through its action.',
        sp: 400,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Toasty Skewer+',
        mt: 12,
        description: 'If a foe initiates combat against an ally within 2 spaces of unit, grants Def/Res+3 to that ally during combat.',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Toasty Skewer',
        mt: 8,
        description: 'If a foe initiates combat against an ally within 2 spaces of unit, grants Def/Res+3 to that ally during combat.',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Trilemma+',
        mt: 12,
        description:
            'After combat, if unit attacked, inflicts the following status on target and foes within 2 spaces of target through their next actions: "If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%."',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Trilemma',
        mt: 8,
        description:
            'After combat, if unit attacked, inflicts the following status on foe through its next action: "If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%."',
        sp: 200,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Umbra Burst',
        mt: 14,
        description:
            'Unit can counterattack regardless of foe`s range. Calculates damage from staff like other weapons. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false,
        required: [staff]
    },
    {
        name: 'Witchy Wand+',
        mt: 12,
        description:
            'After combat, if unit attacked, resets Special cooldown of target and foes within 2 spaces of target, and inflicts the following status on target and foes within 2 spaces of target through their next actions: "Inflicts Special cooldown charge -1 per attack during combat. (Only highest value applied. Does not stack.)" (Neutralizes Special cooldown count reductions after combat, but skills that Accelerate and Slow Special are still effective.)',
        sp: 300,
        refinable: true,
        required: [staff]
    },
    {
        name: 'Witchy Wand',
        mt: 8,
        description:
            'After combat, if unit attacked, resets Special cooldown of foe, and inflicts the following status on foe through its next action: "Inflicts Special cooldown charge -1 per attack during combat. (Only highest value applied. Does not stack.)" (Neutralizes Special cooldown count reductions after combat, but skills that Accelerate and Slow Special are still effective.)',
        sp: 200,
        refinable: false,
        required: [staff]
    },

    //beast

    {
        name: 'Adult (Armored)',
        mt: 9,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and unit can counterattack regardless of foe`s range.',
        sp: 200,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Adult (Cavalry)',
        mt: 9,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 200,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Adult (Flier)',
        mt: 9,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, unit can move 1 extra space. (That turn only. Does not stack.) If unit transforms, grants Atk+2.',
        sp: 200,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Adult (Infantry)',
        mt: 9,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2 and deals +10 damage when Special triggers.',
        sp: 200,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Brazen Cat Fang',
        mt: 14,
        description:
            'Grants Spd+3. If unit is not adjacent to an ally, grants Atk/Spd+6 during combat. At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Bunny Fang',
        mt: 14,
        description:
            'Grants Spd+3. Effective against cavalry foes. After combat, if unit`s HP ≤ 75%, grants Special cooldown count-2.\nEffect:【Beast (Cavalry)】\n\n【Beast (Cavalry)】\nAt start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Covert Cat Fang',
        mt: 14,
        description:
            'Grants Def+3. If unit is within 2 spaces of an ally, grants Atk/Def+3 to unit and allies within 2 spaces of unit during combat. At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Fledgling (Flier)',
        mt: 6,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, unit can move 1 extra space. (That turn only. Does not stack.) If unit transforms, grants Atk+2.',
        sp: 100,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Foxkit Fang',
        mt: 14,
        description:
            'Grants Res+3. At start of combat, if unit`s Res > foe`s Res, and if foe uses sword, lance, axe, dragonstone, or beast damage, grants bonus to Atk/Spd/Def/Res = 50% of difference between stats. (Maximum bonus of +8 to each stat.) At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Guardian Fang',
        mt: 14,
        description:
            'Grants Spd+3. If unit`s Spd > foe`s Spd, deals damage = 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.) If unit`s Spd > foe`s Spd, reduces damage from attacks during combat and from area-of-effect Specials (excluding Røkkr area-of-effect Specials) by percentage = difference between stats × 4 (max 40%) .\n\nAt start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Hatchling (Flier)',
        mt: 4,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, unit can move 1 extra space. (That turn only. Does not stack.) If unit transforms, grants Atk+2.',
        sp: 50,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Hawk King Claw',
        mt: 14,
        description:
            'Grants Atk+3. If foe`s HP = 100% and if unit initiates combat, unit makes a guaranteed follow-up attack. At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, unit can move 1 extra space. (That turn only. Does not stack.) If unit transforms, grants Atk+2.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Heron Wing',
        mt: 14,
        description:
            'Grants Spd+3. At start of turn, restores 7 HP to allies within 2 spaces of unit. At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, unit can move 1 extra space. (That turn only. Does not stack.) If unit transforms, grants Atk+2.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Kitsune Fang',
        mt: 14,
        description:
            'Grants Def+3. Grants allies within 2 spaces bonus to Atk/Spd/Def/Res during combat = current bonus on each of unit`s stats. Calculates each stat bonus independently. At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Lion King Fang',
        mt: 14,
        description:
            'Grants Atk+3. If foe initiates combat, grants Atk/Spd/Def/Res+4 during combat. At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and unit can counterattack regardless of foe`s range.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'New Foxkit Fang',
        mt: 14,
        description:
            'Accelerates Special trigger (cooldown count-1). If unit`s Res > foe`s Res, deals damage = 70% of difference between stats. (Maximum bonus of +7 damage.) If unit`s Res > foe`s Res, reduces damage from attacks during combat and from area-of-effect Specials (excluding Røkkr area-of-effect Specials) by percentage = difference between stats × 4 (max 40%).\n\nAt start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Raven King Beak',
        mt: 14,
        description:
            'Grants Spd+3. If unit`s Spd > foe`s Spd, deals damage = 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.) At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, unit can move 1 extra space. (That turn only. Does not stack.) If unit transforms, grants Atk+2.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Sabertooth Fang',
        mt: 14,
        description:
            'Grants Def+3. If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, inflicts Atk/Spd/Def/Res-4 on foes within 2 spaces of unit and target through their next actions after movement. At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2 and deals +10 damage when Special triggers.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Taguel Fang',
        mt: 14,
        description:
            'Effective against cavalry foes. If unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, grants Atk/Spd/Def/Res+3 during combat. At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 400,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Whelp (Armored)',
        mt: 4,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and unit can counterattack regardless of foe`s range.',
        sp: 50,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Whelp (Cavalry)',
        mt: 4,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 50,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Whelp (Infantry)',
        mt: 4,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2 and deals +10 damage when Special triggers.',
        sp: 50,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Wolf Queen Fang',
        mt: 14,
        description:
            'Accelerates Special trigger (cooldown count-1).\nDuring combat, boosts unit`s Atk/Spd by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.) At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2 and deals +10 damage when Special triggers.',
        sp: 400,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Wolfpup Fang',
        mt: 14,
        description:
            'Grants Spd+3. At the start of turn 1, grants special cooldown count-2 to unit and unit`s support partner (if any). At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2 and deals +10 damage when Special triggers.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Wolfskin Fang',
        mt: 9,
        description:
            'Inflicts Spd-5. Unit attacks twice. (Even if foe initiates combat, unit attacks twice.) At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2 and deals +10 damage when Special triggers.',
        sp: 400,
        refinable: false,
        required: [beast],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Yearling (Arm.)',
        mt: 6,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and unit can counterattack regardless of foe`s range.',
        sp: 100,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Yearling (Cavalry)',
        mt: 6,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2, and if unit initiates combat, inflicts Atk/Def-4 on foe during combat and foe cannot make a follow-up attack.',
        sp: 100,
        refinable: false,
        required: [beast]
    },
    {
        name: 'Yearling (Infantry)',
        mt: 6,
        description:
            'At start of turn, if unit is adjacent to only beast or dragon allies or if unit is not adjacent to any ally, unit transforms (otherwise, unit reverts). If unit transforms, grants Atk+2 and deals +10 damage when Special triggers.',
        sp: 100,
        refinable: false,
        required: [beast]
    },

    // breath

    {
        name: 'Breath of Blight',
        mt: 16,
        description:
            'Neutralizes "effective against dragons" bonuses. At the start of turn 4, deals 10 damage to foes within 3 spaces, and restores HP to unit = number of foes within 3 spaces × 5. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Breath of Fog',
        mt: 16,
        description:
            'Effective against dragon foes. At the start of every second turn, restores 10 HP. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Dark Breath+',
        mt: 13,
        description:
            'If unit initiates combat, inflicts Atk/Spd-5 on foes within 2 spaces of target through their next actions after combat.',
        sp: 300,
        refinable: true,
        attRefine: true,
        required: [breath]
    },
    {
        name: 'Dark Breath',
        mt: 9,
        description:
            'If unit initiates combat, inflicts Atk/Spd-5 on foes within 2 spaces of target through their next actions after combat.',
        sp: 200,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Demonic Breath',
        mt: 16,
        description:
            'Grants Def+3. Effective against armored foes. At start of combat, if a negative status effect is active on unit, or if unit`s HP < 100%, neutralizes penalties on unit and grants Atk/Spd/Def/Res+4 during combat. If foe`s Range = 2, calculates damage using the lower of foe`s Def and Res.',
        sp: 400,
        refinable: false,
        required: [breath],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Divine Breath',
        mt: 16,
        description:
            'Grants Atk+3. Effective against dragon foes. Grants Atk/Spd/Def/Res+X during combat. (X = number of dragon allies and allies that have "effective against dragons" within 2 spaces ×3. Maximum bonus of +9 to each stat.) If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Divine Mist',
        mt: 16,
        description:
            'Effective against dragon foes. Unit can counterattack regardless of foe`s range. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Draconic Rage',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). If the number of allies within 2 spaces (excluding unit) > the number of foes within 2 spaces (excluding target), grants Atk/Spd+5 during combat. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Ethereal Breath',
        mt: 16,
        description:
            'Accelerates Special trigger (cooldown count-1). Effective against dragon foes. Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat. Reduces damage from area-of-effect Specials by 80% (excluding Røkkr area-of-effect Specials). If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Expiration',
        mt: 16,
        description:
            'Unit can counterattack regardless of foe`s range. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Fell Breath',
        mt: 16,
        description:
            'Grants Atk+3. At the start of combat, if foe’s HP < 100%, grants Atk/Res+6 during combat and foe cannot make a follow-up attack. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath],
        statIncreases: [{ key: 1, value: 3 }]
    },
    { name: 'Fire Breath+', mt: 8, description: '', sp: 100, refinable: false, required: [breath] },
    { name: 'Fire Breath', mt: 6, description: '', sp: 50, refinable: false, required: [breath] },
    { name: 'Flametongue+', mt: 15, description: '', sp: 300, refinable: true, required: [breath] },
    { name: 'Flametongue', mt: 11, description: '', sp: 200, refinable: false, required: [breath] },
    {
        name: 'Glittering Breath+',
        mt: 14,
        description:
            'During combat, boosts unit`s Def/Res by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.) If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 300,
        refinable: true,
        required: [breath]
    },
    {
        name: 'Glittering Breath',
        mt: 10,
        description:
            'During combat, boosts unit`s Def/Res by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.) If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 200,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Great Flame',
        mt: 16,
        description:
            'Grants Atk+3. If unit`s Def ≥ foe`s Def+5, foe cannot make a follow-up attack. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Light Breath+',
        mt: 13,
        description: 'If unit initiates combat, grants Def/Res+4 to adjacent allies for 1 turn after combat.',
        sp: 300,
        refinable: true,
        required: [breath]
    },
    {
        name: 'Light Breath',
        mt: 9,
        description: 'If unit initiates combat, grants Def/Res+4 to adjacent allies for 1 turn after combat.',
        sp: 200,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Lightning Breath+',
        mt: 11,
        description: 'Slows Special trigger (cooldown count+1).\nUnit can counterattack regardless of foe`s range.',
        sp: 300,
        refinable: true,
        required: [breath]
    },
    {
        name: 'Lightning Breath',
        mt: 7,
        description: 'Slows Special trigger (cooldown count+1).\nUnit can counterattack regardless of foe`s range.',
        sp: 200,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Oracle`s Breath',
        mt: 16,
        description:
            'Grants Atk+3. If a bonus granted by a skill like Rally or Hone is active on unit, foe cannot make a follow-up attack. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Razing Breath',
        mt: 16,
        description:
            'Effective against dragon foes. Unit can counterattack regardless of foe`s range. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Savage Breath',
        mt: 16,
        description:
            'Grants Atk+3. Grants Atk/Spd/Def/Res+X. (Calculates X based on number of allies within 2 spaces of unit: 0 allies grants +6; 1 ally grants +4; 2 allies grants +2; ≥3 allies grants +0.) If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Snow`s Grace',
        mt: 16,
        description:
            'Neutralizes "effective against dragons" bonuses. Grants Spd+3. At start of combat, if unit`s HP ≥ 50%, grants Atk/Spd/Def/Res+5 during combat. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Spirit Breath',
        mt: 16,
        description:
            'Grants Def+3. If unit initiates combat and unit`s Def ≥ foe`s Def+5, unit makes a guaranteed follow-up attack. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath],
        statIncreases: [{ key: 3, value: 3 }]
    },
    {
        name: 'Sublime Surge',
        mt: 16,
        description:
            'Neutralizes "effective against dragons" bonuses. Unit can counterattack regardless of foe`s range. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Summer`s Breath',
        mt: 16,
        description:
            'Effective against dragon foes. Grants Def+3. If foe initiates combat, grants Special cooldown charge +1 per attack during combat. (Only highest value applied. Does not stack.) If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Sun Dragonstone',
        mt: 16,
        description:
            'If foe initiates combat or if a bonus granted by a skill like Rally or Hone is not active on foe, grants Atk/Spd/Def/Res+4 to unit during combat. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Umbra Burst',
        mt: 16,
        description:
            'Unit can counterattack regardless of foe`s range. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Water Breath+',
        mt: 14,
        description:
            'If foe initiates combat, grants Def/Res+4 during combat.\nIf foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 300,
        refinable: true,
        required: [breath]
    },
    {
        name: 'Water Breath',
        mt: 10,
        description:
            'If foe initiates combat, grants Def/Res+4 during combat.\nIf foe`s Range = 2, calculates damage using the lower of foe`s Def or Res.',
        sp: 200,
        refinable: false,
        required: [breath]
    },
    {
        name: 'Argent Bow',
        mt: 8,
        description: ':Effective against flying foes. Inflicts Spd-2. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: -2 }]
    },
    {
        name: 'Assassin`s Bow+',
        mt: 11,
        description:
            ':Effective against flying foes. In combat against a colorless dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Assassin`s Bow',
        mt: 7,
        description:
            ':Effective against flying foes.\nIn combat against a colorless dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.',
        sp: 200,
        refinable: false,
        required: [bow]
    },

    {
        name: 'Beguiling Bow+',
        mt: 12,
        description: ':Effective against flying foes. At start of combat, if foe’s HP = 100%, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Beguiling Bow',
        mt: 8,
        description: ':Effective against flying foes. At start of combat, if foe’s HP = 100%, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Big-Catch Bow+',
        mt: 12,
        description:
            ':Effective against flying foes. If【Penalty】is active on foe, grants Atk/Spd+5 during combat.\n\n【Penalty】\nAll effects that last "on foe through its next action." Includes penalties inflicted by a skill like Panic or Threaten and negative status effects (preventing counterattacks, restricting movement, or the effects of a skill like Triangle Adept or Guard).',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Big-Catch Bow',
        mt: 8,
        description:
            ':Effective against flying foes. If【Penalty】is active on foe, grants Atk/Spd+5 during combat.\n\n【Penalty】\nAll effects that last "on foe through its next action." Includes penalties inflicted by a skill like Panic or Threaten and negative status effects (preventing counterattacks, restricting movement, or the effects of a skill like Triangle Adept or Guard).',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Bouquet Bow+',
        mt: 12,
        description: ':Effective against flying foes. If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Bouquet Bow',
        mt: 8,
        description: ':Effective against flying foes. If unit initiates combat, grants Atk/Spd+4 during combat.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Bow of Devotion',
        mt: 14,
        description:
            ':Effective against flying foes. If foe initiates combat and uses bow, dagger, magic, or staff, grants Atk/Spd/Def/Res+4 to unit during combat.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Brave Bow+',
        mt: 7,
        description: ':Effective against flying foes.\nInflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 300,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Brave Bow',
        mt: 4,
        description: ':Effective against flying foes.\nInflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 200,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Budding Bow+',
        mt: 12,
        description:
            ':Effective against flying foes. If unit initiates combat, grants Atk/Def+4 during combat and foe cannot make a follow-up attack.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Budding Bow',
        mt: 8,
        description:
            ':Effective against flying foes. If unit initiates combat, grants Atk/Def+4 during combat and foe cannot make a follow-up attack.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Candlewax Bow+',
        mt: 12,
        description: ':Effective against flying foes. Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Candlewax Bow',
        mt: 8,
        description: ':Effective against flying foes. Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Clarisse`s Bow+',
        mt: 11,
        description:
            ':Effective against flying foes.\nIf unit initiates combat, inflicts Atk/Spd-5 on foes within 2 spaces of target through their next actions after combat.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Clarisse`s Bow',
        mt: 7,
        description:
            ':Effective against flying foes.\nIf unit initiates combat, inflicts Atk/Spd-5 on foes within 2 spaces of target through their next actions after combat.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Cocobow+',
        mt: 12,
        description: ':Effective against flying foes.\nIf unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Cocobow',
        mt: 8,
        description: ':Effective against flying foes.If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Cunning Bow',
        mt: 14,
        description:
            ':Grants Spd+3. Effective against flying foes. When total bonuses on unit + total penalties on foe ≥ 10, inflicts Atk/Spd/Def/Res-5 on foe during combat. (Example: if unit has a +5 bonus and foe has a -5 penalty, the calculated total will be 10.)',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Cupid Arrow+',
        mt: 12,
        description:
            ':Effective against flying foes.\nIf unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Cupid Arrow',
        mt: 8,
        description:
            ':Effective against flying foes.\nIf unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Deep-Blue Bow',
        mt: 14,
        description:
            ':Grants Spd+3. Effective against flying and armored foes. If foe`s HP = 100% and unit initiates combat, grants Atk/Spd/Def/Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Devilish Bow+',
        mt: 12,
        description:
            ':Effective against flying foes. Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.)',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Devilish Bow',
        mt: 8,
        description:
            ':Effective against flying foes. Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.)',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Dignified Bow',
        mt: 14,
        description:
            ':Effective against flying foes. At start of turn, if any foe`s HP ≤ unit`s HP-1 and that foe is adjacent to another foe, inflicts【Panic】on that foe.\n\n【Panic】\nConverts bonuses on target into penalties through its next action.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Fiddlestick Bow+',
        mt: 12,
        description:
            ':Effective against flying foes. Grants Def/Res+4 to allies within 2 spaces during combat against sword, lance, axe, dragonstone, or beast foes.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Fiddlestick Bow',
        mt: 8,
        description:
            ':Effective against flying foes. Grants Def/Res+4 to allies within 2 spaces during combat against sword, lance, axe, dragonstone, or beast foes.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Firesweep Bow+',
        mt: 11,
        description: ':Effective against flying foes. Unit and foe cannot counterattack.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Firesweep Bow',
        mt: 7,
        description: ':Effective against flying foes. Unit and foe cannot counterattack.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Fishie Bow+',
        mt: 12,
        description:
            ':Effective against flying foes. If unit`s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Fishie Bow',
        mt: 8,
        description:
            ':Effective against flying foes. If unit`s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Fortune Bow+',
        mt: 12,
        description:
            ':Effective against flying foes. At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Def/Res-5 on that foe through its next action.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Fortune Bow',
        mt: 8,
        description:
            ':Effective against flying foes. At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Def/Res-5 on that foe through its next action.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Fujin Yumi',
        mt: 14,
        description: ':Effective against flying foes. If unit`s HP ≥ 50%, unit can move through foes` spaces.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Gratia+',
        mt: 12,
        description:
            ':Effective against flying foes.\nIf foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Gratia',
        mt: 8,
        description:
            ':Effective against flying foes.\nIf foe uses bow, dagger, magic, or staff, neutralizes foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Guard Bow+',
        mt: 12,
        description:
            ':Effective against flying foes.\nIf foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 to unit during combat.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Guard Bow',
        mt: 8,
        description:
            ':Effective against flying foes.\nIf foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 to unit during combat.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Guardian`s Bow',
        mt: 14,
        description:
            ':Accelerates Special trigger (cooldown count-1). Effective against flying foes. If unit`s Spd > foe`s Spd at start of combat or during combat, inflicts Atk/Spd/Def-5 on foe during combat. (If unit and foe both have this weapon equipped, effect is calculated first for whoever initiates combat.)',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Hama Ya+',
        mt: 12,
        description: ':Effective against flying foes.\nGrants Def/Res+2 to allies within 2 spaces during combat.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Hama Ya',
        mt: 8,
        description: ':Effective against flying foes.\nGrants Def/Res+2 to allies within 2 spaces during combat.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    { name: 'Iron Bow', mt: 4, description: ':Effective against flying foes.', sp: 50, refinable: false, required: [bow] },
    {
        name: 'Kabura Ya+',
        mt: 12,
        description:
            ':Effective against flying foes. At start of turn, inflicts Spd-7 on foe on the enemy team with the highest Spd through its next action.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Kabura Ya',
        mt: 8,
        description:
            ':Effective against flying foes. At start of turn, inflicts Spd-7 on foe on the enemy team with the highest Spd through its next action.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Killer Bow+',
        mt: 9,
        description: ':Accelerates Special trigger (cooldown count-1).\nEffective against flying foes.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Killer Bow',
        mt: 5,
        description: ':Accelerates Special trigger (cooldown count-1).\nEffective against flying foes.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Luna Arc',
        mt: 14,
        description:
            'Effective against flying foes. Grants Spd+3. If unit initiates combat, deals damage = 25% of foe`s Def. (Ignores reductions to Def from special skills like Lunar Flash.) ',
        sp: 400,
        required: ['Alm: Saint-King'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Meisterbogen',
        mt: 9,
        description:
            ':Effective against flying foes. Inflicts Spd-5. Unit attacks twice (even if foe initiates combat). When under player`s control, unit gains: "If unit initiates combat, foe cannot make a follow-up attack."',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: -5 }]
    },
    {
        name: 'Mirage Longbow',
        mt: 14,
        description: ':Effective against flying foes. Grants Spd+3. If unit`s Spd > foe`s Spd, foe cannot counterattack.',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Monstrous Bow+',
        mt: 12,
        description:
            ':Effective against flying foes.\nAfter combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Monstrous Bow',
        mt: 8,
        description:
            ':Effective against flying foes.\nAfter combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Mulagir',
        mt: 14,
        description:
            ':Effective against flying foes. Grants Spd+3. Neutralizes magic foe`s bonuses (from skills like Fortify, Rally, etc.) during combat.',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Nidhogg',
        mt: 14,
        description: ':Effective against flying foes. During combat, boosts unit`s Atk/Spd/Def/Res by number of adjacent allies × 2.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Niles`s Bow',
        mt: 14,
        description:
            ':Accelerates Special trigger (cooldown count-1). Effective against flying foes. If foe`s Def ≥ foe`s Res+5, deals +7 damage.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Parthia',
        mt: 14,
        description: ':Effective against flying foes.\nIf unit initiates combat, grants Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Rebecca`s Bow',
        mt: 14,
        description: ':Accelerates Special trigger (cooldown count-1). Effective against flying foes.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Refreshing Bolt+',
        mt: 12,
        description:
            ':Effective against flying foes.\nAt start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Refreshing Bolt',
        mt: 8,
        description:
            ':Effective against flying foes.\nAt start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Renowned Bow',
        mt: 9,
        description: ':Effective against flying foes. Inflicts Spd-5. If unit initiates combat, unit attacks twice.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Shining Bow+',
        mt: 12,
        description: ':Effective against flying foes. If foe`s Def ≥ foe`s Res+5, deals +7 damage.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Shining Bow',
        mt: 8,
        description: ':Effective against flying foes. If foe`s Def ≥ foe`s Res+5, deals +7 damage.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Short Bow+',
        mt: 12,
        description: ':Effective against flying foes. Deals +10 damage when Special triggers.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Short Bow',
        mt: 8,
        description: ':Effective against flying foes. Deals +10 damage when Special triggers.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    { name: 'Silver Bow+', mt: 13, description: ':Effective against flying foes.', sp: 300, refinable: false, required: [bow] },
    { name: 'Silver Bow', mt: 9, description: ':Effective against flying foes.', sp: 200, refinable: false, required: [bow] },
    {
        name: 'Skadi',
        mt: 14,
        description:
            ':Effective against flying foes.\nGrants Spd+3. At the start of turn 3, deals 10 damage to foes within 3 columns centered on unit, and converts bonuses on those foes into penalties through their next actions.',
        sp: 400,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Slaying Bow+',
        mt: 12,
        description: ':Accelerates Special trigger (cooldown count-1).\nEffective against flying foes.',
        sp: 300,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Slaying Bow',
        mt: 8,
        description: ':Accelerates Special trigger (cooldown count-1).\nEffective against flying foes.',
        sp: 200,
        refinable: false,
        required: [bow]
    },
    { name: 'Steel Bow', mt: 6, description: ':Effective against flying foes.', sp: 100, refinable: false, required: [bow] },
    {
        name: 'Swift Mulagir',
        mt: 14,
        description:
            ':Effective against flying foes.\nGrants Res+3. If the number of allies within 2 spaces (excluding unit) > the number of foes within 2 spaces (excluding target), grants Atk/Spd+5 during combat.',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Tanngrisnir',
        mt: 14,
        description:
            ':Effective against flying foes. Grants Spd+3. If a bonus granted by a skill like Rally or Hone and/or extra movement granted by a skill like Armor March or Armored Boots is active, grants Atk/Spd/Def/Res+3 and Special cooldown charge +1 per unit`s attack during combat. (Only highest value applied. Does not stack.)',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Thögn',
        mt: 14,
        description:
            ':Effective against flying foes.\nGrants Spd+3. If unit initiates combat and foe uses sword, lance, axe, dragonstone, or beast damage, grants Atk/Spd/Def/Res+4 during combat.',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Umbra Burst',
        mt: 14,
        description: ':Effective against flying foes. Unit can counterattack regardless of foe`s range. Deals a minimum of 1 damage.',
        sp: 0,
        refinable: false,
        required: [bow]
    },
    {
        name: 'Warrior Princess',
        mt: 14,
        description: ':Effective against flying and armored foes.\nGrants Spd+3. Grants Atk+3 to allies within 2 spaces during combat.',
        sp: 400,
        refinable: false,
        required: [bow],
        statIncreases: [{ key: 2, value: 3 }]
    },

    //dagger

    {
        name: 'Athame',
        mt: 14,
        description:
            ':Grants Res+3. At start of combat, if foe’s HP < 100%, grants Atk/Spd+5 during combat, and if foe initiates combat, unit can counterattack before foe’s first attack.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: false,
        required: [dagger],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Barb Shuriken+',
        mt: 12,
        description:
            ':Accelerates Special trigger (cooldown count-1).\nAfter combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Barb Shuriken',
        mt: 8,
        description:
            ':Accelerates Special trigger (cooldown count-1).\nAfter combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Bottled Juice+',
        mt: 12,
        description:
            ':Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.) After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Bottled Juice',
        mt: 8,
        description:
            ':Inflicts Special cooldown charge -1 on foe per attack during combat. (Only highest value applied. Does not stack.) After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Broadleaf Fan+',
        mt: 12,
        description:
            ':Grants bonus to unit`s Atk = total penalties on foe during combat.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Broadleaf Fan',
        mt: 8,
        description:
            ':Grants bonus to unit`s Atk = total penalties on foe during combat.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.\nEffect:【Dagger ５】\n\n【Dagger ５】\nAfter combat, if unit attacked, inflicts Def/Res-５ on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Cloud Maiougi+',
        mt: 12,
        description:
            ':Effective against dragon foes. Disables unit`s and foe`s skills that change attack priority. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Cloud Maiougi',
        mt: 8,
        description:
            ':Effective against dragon foes. Disables unit`s and foe`s skills that change attack priority. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Dancer`s Fan+',
        mt: 10,
        description:
            ':If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Dancer`s Fan',
        mt: 7,
        description:
            ':If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Deathly Dagger',
        mt: 11,
        description:
            ':After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.\nIf unit initiates combat, deals 7 damage to foe after combat.',
        sp: 400,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Dragonslasher+',
        mt: 12,
        description:
            ':Effective against dragon foes. Disables unit`s and foe`s skills that change attack priority. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Dragonslasher',
        mt: 8,
        description:
            ':Effective against dragon foes. Disables unit`s and foe`s skills that change attack priority. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Dusk Uchiwa+',
        mt: 12,
        description:
            ':Effective against cavalry foes. Disables unit`s and foe`s skills that change attack priority. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Dusk Uchiwa',
        mt: 8,
        description:
            ':Effective against cavalry foes. Disables unit`s and foe`s skills that change attack priority. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Felicia`s Plate',
        mt: 14,
        description:
            ':After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces through their next actions.\nCalculates damage using the lower of foe`s Def or Res.',
        sp: 400,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Goodie Boot+',
        mt: 12,
        description:
            ':During combat, boosts unit`s Def/Res by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.)\nAfter combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Goodie Boot',
        mt: 8,
        description:
            ':During combat, boosts unit`s Def/Res by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.)\nAfter combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Hoarfrost Knife',
        mt: 14,
        description:
            ':Accelerates Special trigger (cooldown count-1). If unit initiates combat and foe uses sword, lance, axe, dragonstone, or beast damage, grants Def+20 during combat, and if foe can counter, unit makes a guaranteed follow-up attack. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Hunting Blade',
        mt: 14,
        description:
            ':Accelerates Special trigger (cooldown count-1). Effective against beast foes. At start of combat, if unit`s Atk/Spd/Def/Res < that of an ally within 2 spaces, grants +5 to unit`s corresponding stat during combat. Calculates each stat bonus independently.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Iron Dagger',
        mt: 3,
        description: ':After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.',
        sp: 50,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Jakob`s Tray',
        mt: 14,
        description:
            ':If unit initiates combat, inflicts Atk/Spd/Def/Res-4 on foe during combat.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Kagami Mochi+',
        mt: 12,
        description:
            ':Accelerates Special trigger (cooldown count-1).\nAfter combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Kagami Mochi',
        mt: 8,
        description:
            ':Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Kagero`s Dart',
        mt: 14,
        description:
            ':At start of combat, if unit`s Atk > foe`s Atk, grants Atk/Spd+4 during combat.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Kitty Paddle+',
        mt: 8,
        description:
            ':Effective against magic foes. After combat, if unit attacked and if foe uses magic, inflicts Def/Res-7 on foe through its next action.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Kitty Paddle',
        mt: 5,
        description:
            ':Effective against magic foes.\nAfter combat, if unit attacked and if foe uses magic, inflicts Def/Res-5 on foe through its next action.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Lethal Carrot+',
        mt: 12,
        description:
            ':Deals +10 damage when Special triggers.\nAfter combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Lethal Carrot',
        mt: 8,
        description:
            ':Deals +10 damage when Special triggers.\nAfter combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Lyfjaberg',
        mt: 14,
        description:
            ':Grants Res+3. At start of combat, if unit`s HP ≥ 50%, grants Atk/Spd+4 during combat, and if unit initiates combat, foe cannot make a follow-up attack. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions, and if bonus was granted to unit, deals 4 damage to unit.',
        sp: 400,
        refinable: false,
        required: [dagger],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Minty Cane+',
        mt: 12,
        description:
            ':When unit deals damage to foe during combat, restores 5 HP to unit. (Triggers even if 0 damage is dealt.)\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Minty Cane',
        mt: 8,
        description:
            ':When unit deals damage to foe during combat, restores 5 HP to unit. (Triggers even if 0 damage is dealt.)\nEffect:【Dagger ５】\n\n【Dagger ５】\nAfter combat, if unit attacked, inflicts Def/Res-５ on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Ouch Pouch+',
        mt: 12,
        description:
            ':At the start of turn 1, grants Special cooldown count-2. After combat, if unit attacked, inflicts Def/Res-7 on foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Ouch Pouch',
        mt: 8,
        description:
            ':At the start of turn 1, grants Special cooldown count-2. After combat, if unit attacked, inflicts Def/Res-5 on foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Pegasus Carrot+',
        mt: 12,
        description:
            ':Effective against armored foes. If unit has weapon-triangle advantage, neutralizes effects that prevent unit`s follow-up attacks during combat. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Pegasus Carrot',
        mt: 8,
        description:
            ':Effective against armored foes. If unit has weapon-triangle advantage, neutralizes effects that prevent unit`s follow-up attacks during combat. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Peshkatz',
        mt: 14,
        description:
            ':After combat, if unit attacked, inflicts Atk/Spd/Def/Res-4 on target and foes within 2 spaces of target through their next actions, and grants Atk/Spd/Def/Res+4 to unit and allies within 2 spaces for 1 turn.',
        sp: 400,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Poison Dagger+',
        mt: 5,
        description:
            ':Effective against infantry foes.\nAfter combat, if unit attacked, inflicts Def/Res-6 on infantry foe through its next action.',
        sp: 300,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Poison Dagger',
        mt: 2,
        description:
            ':Effective against infantry foes.\nAfter combat, if unit attacked, inflicts Def/Res-4 on infantry foe through its next action.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Pumpkin-a-Box+',
        mt: 12,
        description:
            ':Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger],
        statIncreases: [
            { key: 1, value: 3 },
            { key: 2, value: 3 },
            { key: 3, value: 3 },
            { key: 4, value: 3 }
        ]
    },
    {
        name: 'Pumpkin-a-Box',
        mt: 8,
        description:
            ':Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.\nEffect:【Dagger ５】\n\n【Dagger ５】\nAfter combat, if unit attacked, inflicts Def/Res-５ on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger],
        statIncreases: [
            { key: 1, value: 3 },
            { key: 2, value: 3 },
            { key: 3, value: 3 },
            { key: 4, value: 3 }
        ]
    },
    {
        name: 'Red-Hot Ducks+',
        mt: 12,
        description:
            ':If unit`s Spd > foe`s Spd, deals damage = 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.) After combat, if unit attacked, inflicts Def/Res-7 on foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Red-Hot Ducks',
        mt: 8,
        description:
            ':If unit`s Spd > foe`s Spd, deals damage = 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.) After combat, if unit attacked, inflicts Def/Res-5 on foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Rogue Dagger+',
        mt: 7,
        description:
            ':After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Rogue Dagger',
        mt: 4,
        description:
            ':After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action. Grants unit Def/Res+3 for 1 turn.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Saizo`s Star',
        mt: 14,
        description:
            ':After combat, if unit attacked, inflicts Atk/Spd/Def/Res-6 on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Scallop Blade+',
        mt: 12,
        description:
            ':If【Penalty】is active on foe, grants Atk/Spd+5 during combat.\nEffect:【Dagger ７】\n\n【Penalty】\nAll effects that last "on foe through its next action." Includes penalties inflicted by a skill like Panic or Threaten and negative status effects (preventing counterattacks, restricting movement, or the effects of a skill like Triangle Adept or Guard).\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Scallop Blade',
        mt: 8,
        description:
            ':If【Penalty】is active on foe, grants Atk/Spd+5 during combat.\nEffect:【Dagger ５】\n\n【Penalty】\nAll effects that last "on foe through its next action." Includes penalties inflicted by a skill like Panic or Threaten and negative status effects (preventing counterattacks, restricting movement, or the effects of a skill like Triangle Adept or Guard).\n\n【Dagger ５】After combat, if unit attacked, inflicts Def/Res-５ on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Seashell+',
        mt: 10,
        description:
            ':At start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.\nAfter combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Seashell',
        mt: 7,
        description:
            ':At start of combat, if unit`s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.\nAfter combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Silver Dagger+',
        mt: 10,
        description: ':After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Silver Dagger',
        mt: 7,
        description: ':After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Sky Maiougi+',
        mt: 12,
        description:
            ':Effective against armored foes. Disables unit`s and foe`s skills that change attack priority. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Sky Maiougi',
        mt: 8,
        description:
            ':Effective against armored foes. Disables unit`s and foe`s skills that change attack priority. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Smoke Dagger+',
        mt: 9,
        description: ':After combat, if unit attacked, inflicts Def/Res-6 on foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Smoke Dagger',
        mt: 6,
        description: ':After combat, if unit attacked, inflicts Def/Res-4 on foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Splashy Bucket+',
        mt: 12,
        description:
            ':Effective against dragon foes. Disables foe`s skills that "calculate damage using the lower of foe`s Def or Res" and "calculate damage from staff like other weapons." After combat, if unit attacked, inflicts Def/Res-7 on foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Splashy Bucket',
        mt: 8,
        description:
            ':Effective against dragon foes. Disables foe`s skills that "calculate damage using the lower of foe`s Def or Res" and "calculate damage from staff like other weapons." After combat, if unit attacked, inflicts Def/Res-5 on foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Spy`s Dagger',
        mt: 14,
        description:
            ':After combat, if unit attacked, grants Def/Res+6 to unit and allies within 2 spaces of unit for 1 turn.\nEffect:【Dagger ６】\n\n【Dagger ６】\nAfter combat, if unit attacked, inflicts Def/Res-６ on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Starfish+',
        mt: 12,
        description:
            ':If unit`s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Starfish',
        mt: 8,
        description:
            ':If unit`s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Steel Dagger',
        mt: 5,
        description: ':After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.',
        sp: 100,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Sylgr',
        mt: 14,
        description:
            ':Grants Spd+3. At start of combat, if unit`s Spd > foe`s Spd, grants Atk/Spd+4 during combat. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: false,
        required: [dagger],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Sæhrímnir',
        mt: 14,
        description:
            ':Effective against beast foes. Grants Atk+3. At start of combat, if unit`s Res > foe`s Res, reduces foe`s Atk/Def by 50% of difference between stats during combat. (Calculates reduction before combat. Maximum penalty of -8.) After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 400,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Temari+',
        mt: 12,
        description:
            ':At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Atk/Spd-5 on that foe through its next action.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Temari',
        mt: 8,
        description:
            ':At start of turn, if any foe`s Res ≤ unit`s Res-3 and that foe is adjacent to another foe, inflicts Atk/Spd-5 on that foe through its next action.\nEffect:【Dagger ５】\n\n【Dagger ５】\nAfter combat, if unit attacked, inflicts Def/Res-５ on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'The Cleaner+',
        mt: 12,
        description:
            ':Grants bonus to unit’s Atk = total bonuses on foe during combat. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'The Cleaner',
        mt: 8,
        description:
            ':Grants bonus to unit’s Atk = total bonuses on foe during combat. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Tropical Treats+',
        mt: 12,
        description:
            ':If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Res+4 during combat.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 300,
        refinable: true,
        required: [dagger]
    },
    {
        name: 'Tropical Treats',
        mt: 8,
        description:
            'If a bonus granted by a skill like Rally or Hone is active on unit, grants Atk/Res+4 during combat.\nEffect:【Dagger ５】\n\n【Dagger ５】\nAfter combat, if unit attacked, inflicts Def/Res-５ on target and foes within 2 spaces of target through their next actions.',
        sp: 200,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Umbra Burst',
        mt: 14,
        description:
            ':Unit can counterattack regardless of foe`s range. Deals a minimum of 1 damage.\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions.',
        sp: 0,
        refinable: false,
        required: [dagger]
    },
    {
        name: 'Frost Breath',
        mt: 16,
        description:
            'Grants Res+3. At start of turn or when Play is used, inflicts Atk/Spd/Def/Res-4 on closest foe within 4 spaces of unit through their next action. If foe`s Range = 2, calculates damage using the lower of foe`s Def or Res. ',
        sp: 400,
        refinable: false,
        required: ['Nils: Bright Bard'],
        statIncreases: [{ key: 4, value: 3 }]
    },
    {
        name: 'Constant Dagger',
        mt: 16,
        description:
            'Grants Spd+3. If unit initiates combat, grants Atk/Spd+5 during combat. If unit initiates combat and is within 2 spaces of support partner, foe cannot counterattack and unit and support partner swap spaces after combat. (If unit is within 2 spaces of more than one support partner, swap does not occur.)\nEffect:【Dagger ７】\n\n【Dagger ７】\nAfter combat, if unit attacked, inflicts Def/Res-７ on target and foes within 2 spaces of target through their next actions. ',
        sp: 400,
        refinable: false,
        required: ['Leila: Rose amid Fangs'],
        statIncreases: [{ key: 2, value: 3 }]
    },
    {
        name: 'Randgríðr',
        mt: 14,
        description:
            'Effective against flying and armored foes. Grants Atk+3. If foe`s HP = 100% at start of combat, neutralizes penalties on unit and inflicts Atk/Def-6 on foe during combat.',
        sp: 400,
        refinable: false,
        required: ['Chrom: Crowned Exalt'],
        statIncreases: [{ key: 1, value: 3 }]
    },
    {
        name: 'Hades Ω',
        mt: 14,
        description:
            'Accelerates Special trigger (cooldown count-1). If unit initiates combat, grants Atk/Spd+4 during combat, and if unit`s Special is ready, grants an additional Atk+6 during combat. ',
        sp: 400,
        refinable: false,
        required: ['Lysithea: Child Prodigy']
    }
];
