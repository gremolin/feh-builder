import { Skill } from './data.types';
import { staff } from './hardcoded';

export const fehAssists: Skill[] = [
    { name: '-', description: '-', sp: undefined },
    { name: 'Ardent Sacrifice', description: 'Restores 10 HP to target ally. Unit loses 10 HP but cannot go below 1. ', sp: 150 },
    { name: 'Rally Resistance', description: 'Grants Res+4 to target ally for 1 turn. ', sp: 150, restrictions: [staff] },
    { name: 'Rally Def/Res', description: 'Grants Def/Res+3 to target ally for 1 turn.', sp: 300, restrictions: [staff] },
    { name: 'Rally Def/Res+', description: 'Grants Def/Res+6 to target ally for 1 turn.', sp: 400, restrictions: [staff] }
];
