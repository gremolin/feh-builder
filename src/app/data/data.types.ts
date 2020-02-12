export interface Unit {
    name: string;
    released: Date;
    wpType: string;
    colour: string;
    move: string;
    range: string;
}

export interface UnitStats {
    key: string;
    baseHp: number;
    baseAtt: number;
    baseSpd: number;
    baseDef: number;
    baseRes: number;
    growthHp: number;
    growthAtt: number;
    growthSpd: number;
    growthDef: number;
    growthRes: number;
}

export interface MergedStat {
    rank: number;
    statToFind: number;
    instances: number;
    amountHigher: number;
    foundStats: number;
}

export interface UnitStat {
    // keys: 0 = hp, 1 = att
    key: number;
    value: number;
}

export interface UnitSkillInheritance {
    key: string;
    subKey?: string;
    level: number;
}

export interface UnitSkills {
    key: string;
    wps: UnitSkillInheritance[];
    assists?: UnitSkillInheritance[];
    specials?: UnitSkillInheritance[];
    aSkills?: UnitSkillInheritance[];
    bSkills?: UnitSkillInheritance[];
    cSkills?: UnitSkillInheritance[];
}

export interface SkillLevel {
    key?: number;
    value: string;
    description: string;
    sp: number;
    statIncreases?: UnitStat[];
    restrictions?: string[];
}

export interface Skill {
    name: string;
    description: string;
    sp?: number;
    skillLevels?: SkillLevel[];
    required?: string[];
    restrictions?: string[];
    misc?: any;
}

export interface Weapon extends Skill {
    mt: number;
    refinable?: boolean;
    statIncreases?: UnitStat[];
    attRefine?: boolean;
}

export interface SkillDisplay {
    name?: string;
    description?: string;
    inheritance?: string;
    sp?: number;
}
