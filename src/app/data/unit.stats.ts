import { UnitStats } from './data.types';

//month is -1
export const unitStats: UnitStats[] = [
    {
        key: 'Abel: The Panther',
        released: new Date(2017, 1, 2),
        baseHp: 17,
        baseAtt: 7,
        baseSpd: 8,
        baseDef: 8,
        baseRes: 6,
        growthHp: 50,
        growthAtt: 60,
        growthSpd: 55,
        growthDef: 40,
        growthRes: 45
    },
    {
        key: 'Alfonse: Askran Duo',
        released: new Date(2020, 0, 1),
        baseHp: 17,
        baseAtt: 6,
        baseSpd: 5,
        baseDef: 3,
        baseRes: 6,
        growthHp: 50,
        growthAtt: 70,
        growthSpd: 25,
        growthDef: 70,
        growthRes: 50
    }
];
