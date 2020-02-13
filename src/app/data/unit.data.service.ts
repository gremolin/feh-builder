import { fehAssists } from './assist';
import { Skill, UnitSkills, UnitStats, Weapon } from './data.types';
import { fehASkills } from './skills-a';
import { fehBSkills } from './skills-b';
import { fehCSkills } from './skills-c';
import { fehSpecials } from './special';
import { unitSkills } from './unit.skills';
import { unitStats } from './unit.stats';
import { fehWeapons } from './weapon';

export class UnitDataService {
    statsByUnit = new Map();
    skillsByUnit = new Map();
    weaponByName = new Map();
    assistByName = new Map();
    specialByName = new Map();
    aSkillByName = new Map();
    bSkillByName = new Map();
    cSkillByName = new Map();

    unitsByWeapon = new Map();
    unitsByAssist = new Map();
    unitsBySpecial = new Map();
    unitsByASkill = new Map();
    unitsByBSkill = new Map();
    unitsByCSkill = new Map();

    constructor() {
        for (const stats of unitStats) {
            this.statsByUnit.set(stats.key, stats);
        }

        for (const skills of unitSkills) {
            this.skillsByUnit.set(skills.key, skills);

            for (const skill of skills.wps) {
                this.addToMap(this.unitsByWeapon, skill.key, { name: skills.key, level: skill.level });
            }

            if (skills.assists) {
                for (const skill of skills.assists) {
                    this.addToMap(this.unitsByAssist, skill.key, { name: skills.key, level: skill.level });
                }
            }

            if (skills.specials) {
                for (const skill of skills.specials) {
                    this.addToMap(this.unitsBySpecial, skill.key, { name: skills.key, level: skill.level });
                }
            }

            if (skills.aSkills) {
                for (const skill of skills.aSkills) {
                    const key = skill.subKey ? skill.key + skill.subKey : skill.key;
                    this.addToMap(this.unitsByASkill, key, { name: skills.key, level: skill.level });
                }
            }

            if (skills.bSkills) {
                for (const skill of skills.bSkills) {
                    const key = skill.subKey ? skill.key + skill.subKey : skill.key;
                    this.addToMap(this.unitsByBSkill, key, { name: skills.key, level: skill.level });
                }
            }

            if (skills.cSkills) {
                for (const skill of skills.cSkills) {
                    const key = skill.subKey ? skill.key + skill.subKey : skill.key;
                    this.addToMap(this.unitsByCSkill, key, { name: skills.key, level: skill.level });
                }
            }
        }

        for (const wp of fehWeapons) {
            this.weaponByName.set(wp.name, wp);
        }

        for (const ass of fehAssists) {
            this.assistByName.set(ass.name, ass);
        }

        for (const spec of fehSpecials) {
            this.specialByName.set(spec.name, spec);
        }

        for (const a of fehASkills) {
            this.aSkillByName.set(a.name, a);
        }

        for (const b of fehBSkills) {
            this.aSkillByName.set(b.name, b);
        }

        for (const c of fehCSkills) {
            this.aSkillByName.set(c.name, c);
        }
    }

    addToMap(map: Map<any, any[]>, key: string, value: any) {
        if (map.has(key)) {
            map.get(key).push(value);
        } else {
            map.set(key, [value]);
        }
    }

    getUnitsByWeapon(wp: Skill) {
        return wp ? this.unitsByWeapon.get(wp.name) : undefined;
    }

    getUnitsByAssist(ass: Skill) {
        return ass ? this.unitsByAssist.get(ass.name) : undefined;
    }

    getUnitsBySpecial(special: Skill) {
        return special ? this.unitsBySpecial.get(special.name) : undefined;
    }

    getUnitsByASkill(aSkill: Skill, aSub: string): any[] {
        if (aSkill) {
            const key = aSub ? aSkill.name + aSub : aSkill.name;
            return this.unitsByASkill.get(key);
        }
        return undefined;
    }

    getUnitsByBSkill(bSkill: Skill, bSub: string): any[] {
        console.log('this.unitsByASkill', this.unitsByASkill);
        console.log('this.unitsByBSkill', this.unitsByBSkill);
        if (bSkill) {
            const key = bSub ? bSkill.name + bSub : bSkill.name;
            return this.unitsByBSkill.get(key);
        }
        return undefined;
    }

    getUnitsByCSkill(cSkill: Skill, cSub: string): any[] {
        if (cSkill) {
            const key = cSub ? cSkill.name + cSub : cSkill.name;
            return this.unitsByCSkill.get(key);
        }
        return undefined;
    }

    getStatsByUnit(unit: string): UnitStats {
        return this.statsByUnit.get(unit);
    }

    getSkillsByUnit(unit: string): UnitSkills {
        return this.skillsByUnit.get(unit);
    }

    getWeaponByName(weapon: string): Weapon {
        return this.weaponByName.get(weapon);
    }

    getAssistByName(assist: string): Skill {
        return this.assistByName.get(assist);
    }

    getSpecialByName(special: string): Skill {
        return this.specialByName.get(special);
    }

    getASkillByName(aSkill: string): Skill {
        return this.aSkillByName.get(aSkill);
    }

    getBSkillByName(bSkill: string): Skill {
        return this.aSkillByName.get(bSkill);
    }

    getCSkillByName(cSkill: string): Skill {
        return this.aSkillByName.get(cSkill);
    }
}
