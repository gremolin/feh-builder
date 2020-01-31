import { UnitSkills, UnitStats, Weapon } from './data.types';
import { unitSkills } from './unit.skills';
import { unitStats } from './unit.stats';
import { fehWeapons } from './weapon';

export class UnitDataService {
    statsByUnit = new Map();
    skillsByUnit = new Map();
    weaponByName = new Map();
    unitsByWeapon = new Map();

    constructor() {
        for (const stats of unitStats) {
            this.statsByUnit.set(stats.key, stats);
        }

        for (const skills of unitSkills) {
            this.skillsByUnit.set(skills.key, skills);

            for (const skill of skills.wps) {
                console.log('skill', skills);
                this.addToMap(this.unitsByWeapon, skill.key, { name: skills.key, level: skill.level });
                console.log('unitsByWeapon', this.unitsByWeapon);
            }
        }

        for (const wp of fehWeapons) {
            this.weaponByName.set(wp.name, wp);
        }
    }

    addToMap(map: Map<any, any[]>, key: string, value: any) {
        if (map.has(key)) {
            map.get(key).push(value);
        } else {
            map.set(key, [value]);
        }
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

    getUnitsByWeapon(wp: string) {
        return this.unitsByWeapon.get(wp);
    }
}
