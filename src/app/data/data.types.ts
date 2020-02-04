export interface Unit {
    name: string;
}

export interface UnitStats {
    key: string;
    released: Date;
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
    //keys: 0 = hp, 1 = att
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
    wpType: string;
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
}

export interface Skill {
    name: string;
    description: string;
    sp?: number;
    skillLevels?: SkillLevel[];
    restrictions?: string[];
}

export interface Weapon extends Skill {
    mt: number;
    refinable?: boolean;
}

export interface SkillDisplay {
    name?: string;
    description?: string;
    inheritance?: string;
    sp?: number;
}
