export interface Unit {
    key: string;
    value: string;
    data?: any;
}

export interface UnitStats {
    key: string;
    released: Date;
    baseHp: number;
    baseAtt: number;
    baseSpd: number;
    baseDef: number;
    baseRes: number;
    hp: number;
    att: number;
    spd: number;
    def: number;
    res: number;
}

export interface MergedStat {
    rank: number;
    statToFind: number;
    instances: number;
    amountHigher: number;
    foundStats: number;
}
