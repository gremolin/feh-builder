import { SkillLevel } from './data.types';
import { axe, beast, breath, lance, sword } from './hardcoded';

export const merges = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const assetFlaw = [
    { key: -1, value: '-' },
    { key: 0, value: 'Hp' },
    { key: 1, value: 'Att' },
    { key: 2, value: 'Spd' },
    { key: 3, value: 'Def' },
    { key: 4, value: 'Res' }
];

export const flowers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const summonerSupports = [
    { key: 0, value: '-' },
    { key: 1, value: 'C' },
    { key: 2, value: 'B' },
    { key: 3, value: 'A' },
    { key: 4, value: 'S' }
];

export const basicRefines: SkillLevel[] = [
    { key: -10, value: '-', description: '', sp: 400 }, // key -9 to -1 reserved for personal refines
    { key: 1, value: 'Att', description: '', sp: 400 },
    { key: 2, value: 'Spd', description: '', sp: 400 },
    { key: 3, value: 'Def', description: '', sp: 400 },
    { key: 4, value: 'Res', description: '', sp: 400 }
];

export const staffRefines: SkillLevel[] = [
    { key: -10, value: '-', description: '', sp: 400 }, // key -9 to -1 reserved for personal refines
    { key: 5, value: 'W', description: 'Calculates damage from staff like other weapons.', sp: 350 },
    { key: 6, value: 'D', description: 'Foe cannot counterattack.', sp: 350 }
];

export const meleeWeaponTypes = [sword, axe, lance, beast, breath];
