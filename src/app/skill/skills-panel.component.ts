import { Component } from '@angular/core';

import { fehAssists } from './../data/assist';
import { Skill, SkillDisplay, SkillLevel, Unit, UnitSkills, Weapon } from './../data/data.types';
import { staff } from './../data/hardcoded';
import { basicRefines, meleeWeaponTypes, staffRefines } from './../data/misc.stats';
import { fehSeals } from './../data/seals';
import { fehASkills } from './../data/skills-a';
import { fehBSkills } from './../data/skills-b';
import { fehCSkills } from './../data/skills-c';
import { fehSpecials } from './../data/special';
import { UnitDataService } from './../data/unit.data.service';
import { fehWeapons } from './../data/weapon';
import { StatsPanelComponent } from './../stat/stats-panel.component';

@Component({
    selector: 'skills-panel',
    templateUrl: './skills-panel.component.html',
    styleUrls: ['./skills-panel.component.css']
})
export class SkillsPanelComponent {
    statsPanel: StatsPanelComponent;

    wpns = fehWeapons;
    refines = basicRefines;
    assists = fehAssists;
    specials = fehSpecials;
    aSkills = fehASkills;
    aSubSkills: any[] = [];
    bSkills = fehBSkills;
    bSubSkills: any[] = [];
    cSkills = fehCSkills;
    cSubSkills: any[] = [];
    seals = fehSeals;
    sealSubs: any[] = [];

    selectedUnit: Unit;
    selectedUnitSkills: UnitSkills;
    selectedWeapon: Weapon;
    selectedRefine: any;
    selectedAssist: Skill;
    selectedSpecial: Skill;
    selectedASkill: Skill;
    selectedASub: SkillLevel;
    selectedBSkill: Skill;
    selectedBSub: SkillLevel;
    selectedCSkill: Skill;
    selectedCSub: SkillLevel;
    selectedSeal: Skill;
    selectedSealSub: SkillLevel;

    wp: SkillDisplay = {};
    refine: string;
    wpDesc: string;
    wpInheritance: string;
    wpSp: number;

    assist: SkillDisplay = {};
    special: SkillDisplay = {};
    aSkill: SkillDisplay = {};
    aSubSkill: string;
    bSkill: SkillDisplay = {};
    bSubSkill: string;
    cSkill: SkillDisplay = {};
    cSubSkill: string;
    seal: SkillDisplay = {};
    sealSub: string;

    skillHp = 0;
    skillAtt = 0;
    skillSpd = 0;
    skillDef = 0;
    skillRes = 0;

    constructor(private unitDataService: UnitDataService) {}

    applyUnitSkills(unit: Unit) {
        this.selectedUnit = unit;
        this.selectedUnitSkills = this.unitDataService.getSkillsByUnit(unit.name);

        this.filterAvailableSkills();
        this.resetSkills();

        this.calculateSkills();
    }

    filterAvailableSkills() {
        this.wpns = this.filterSkills(fehWeapons);
        this.assists = this.filterSkills(fehAssists);
        this.specials = this.filterSkills(fehSpecials);
        this.aSkills = this.filterSkills(fehASkills);
        this.bSkills = this.filterSkills(fehBSkills);
        this.cSkills = this.filterSkills(fehCSkills);
        this.seals = this.filterSkills(fehSeals);
    }

    filterSkills(skills: any[]): any[] {
        skills = skills.filter(
            skill =>
                skill.name === '-' ||
                (!skill.restrictions && !skill.required) ||
                (skill.restrictions &&
                    (skill.restrictions.indexOf('None') > -1 ||
                        (skill.restrictions.indexOf(this.selectedUnit.wpType) === -1 &&
                            skill.restrictions.indexOf(this.selectedUnit.colour) === -1 &&
                            skill.restrictions.indexOf(this.selectedUnit.range) === -1 &&
                            skill.restrictions.indexOf(this.selectedUnit.move) === -1))) ||
                (skill.required &&
                    (skill.required.indexOf(this.selectedUnitSkills.key) > -1 ||
                        skill.required.indexOf(this.selectedUnit.wpType) > -1 ||
                        skill.required.indexOf(this.selectedUnit.colour) > -1 ||
                        skill.required.indexOf(this.selectedUnit.range) > -1 ||
                        skill.required.indexOf(this.selectedUnit.move) > -1))
        );

        skills = skills.sort((i1, i2) => {
            return i1.name > i2.name ? 1 : -1;
        });
        return skills;
    }

    resetSkills() {
        this.selectedWeapon = undefined;
        this.selectedRefine = undefined;
        this.selectedAssist = undefined;
        this.selectedSpecial = undefined;
        this.selectedASkill = undefined;
        this.selectedASub = undefined;
        this.selectedBSkill = undefined;
        this.selectedBSub = undefined;
        this.selectedCSkill = undefined;
        this.selectedCSub = undefined;
        this.selectedSeal = undefined;
        this.selectedSealSub = undefined;

        this.refines = [];
        this.aSubSkills = [];
        this.bSubSkills = [];
        this.cSubSkills = [];
        this.sealSubs = [];

        this.wp.name = this.selectedUnitSkills.wps[this.selectedUnitSkills.wps.length - 1].key;
        this.selectedWeapon = this.unitDataService.getWeaponByName(this.wp.name);
        this.applyRefine();

        if (this.selectedUnitSkills.assists) {
            this.assist.name = this.selectedUnitSkills.assists[this.selectedUnitSkills.assists.length - 1].key;
            this.selectedAssist = this.unitDataService.getAssistByName(this.assist.name);
        }

        if (this.selectedUnitSkills.specials) {
            this.special.name = this.selectedUnitSkills.specials[this.selectedUnitSkills.specials.length - 1].key;
            this.selectedSpecial = this.unitDataService.getSpecialByName(this.special.name);
        }

        if (this.selectedUnitSkills.aSkills) {
            const selectedSkill = this.selectedUnitSkills.aSkills[this.selectedUnitSkills.aSkills.length - 1];
            this.aSkill.name = selectedSkill.key;
            this.selectedASkill = this.unitDataService.getASkillByName(this.aSkill.name);
            this.selectedASub = this.applySubSkill(this.aSubSkills, this.selectedASkill, selectedSkill.subKey);
            this.aSubSkill = this.selectedASub ? this.selectedASub.value : undefined;
        }

        if (this.selectedUnitSkills.bSkills) {
            const selectedSkill = this.selectedUnitSkills.bSkills[this.selectedUnitSkills.bSkills.length - 1];
            this.bSkill.name = selectedSkill.key;
            this.selectedBSkill = this.unitDataService.getBSkillByName(this.bSkill.name);
            this.selectedBSub = this.applySubSkill(this.bSubSkills, this.selectedBSkill, selectedSkill.subKey);
            this.bSubSkill = this.selectedBSub ? this.selectedBSub.value : undefined;
        }

        if (this.selectedUnitSkills.cSkills) {
            const selectedSkill = this.selectedUnitSkills.cSkills[this.selectedUnitSkills.cSkills.length - 1];
            this.cSkill.name = selectedSkill.key;
            this.selectedCSkill = this.unitDataService.getCSkillByName(this.cSkill.name);
            this.selectedCSub = this.applySubSkill(this.cSubSkills, this.selectedCSkill, selectedSkill.subKey);
            this.cSubSkill = this.selectedCSub ? this.selectedCSub.value : undefined;
        }
    }

    applyRefine() {
        if (this.selectedWeapon.refinable) {
            this.refines = this.isStaff(this.selectedWeapon) ? Object.assign([], staffRefines) : Object.assign([], basicRefines);
            this.selectedRefine = this.refines[0];
            this.refine = this.selectedRefine.value;

            if (this.selectedWeapon.skillLevels) {
                for (const refine of this.selectedWeapon.skillLevels) {
                    this.refines.splice(1, 0, {
                        key: -1,
                        value: refine.value,
                        description: refine.description,
                        sp: refine.sp,
                        statIncreases: refine.statIncreases
                    });
                }
            }
        }
    }

    isStaff(weapon: Weapon): boolean {
        return weapon.required && weapon.required.indexOf(staff) > -1;
    }

    applySubSkill(subSkills: any[], selectedSkill: Skill, levelToSelect?: string, unitRarity?: number): SkillLevel {
        // TODO implement rarity select

        subSkills.length = 0;
        if (selectedSkill.skillLevels) {
            let x = 1;
            for (const sub of this.filterSkills(selectedSkill.skillLevels)) {
                subSkills.push({
                    key: x,
                    value: sub.value,
                    sp: sub.sp,
                    description: sub.description,
                    statIncreases: sub.statIncreases
                });
                x++;
            }
            return subSkills[levelToSelect ? +levelToSelect - 1 : subSkills.length - 1];
        }
        return undefined;
    }

    calculateSkills() {
        this.skillHp = 0;
        this.skillAtt = 0;
        this.skillSpd = 0;
        this.skillDef = 0;
        this.skillRes = 0;
        const melee = meleeWeaponTypes.indexOf(this.selectedUnit.wpType) > -1;

        // wp
        this.updateSkill(this.selectedWeapon, this.wp, this.unitDataService.getUnitsByWeapon(this.selectedWeapon));
        this.wp.description = this.buildWeaponDesc();
        this.skillAtt += this.selectedWeapon.mt;

        // wp refines
        if (this.selectedRefine) {
            if (this.selectedRefine.key === 1) {
                this.skillHp += melee ? 5 : 2;
                this.skillAtt += melee ? 2 : 1;
                this.skillAtt += this.selectedWeapon.attRefine ? 1 : 0;
            } else if (this.selectedRefine.key === 2) {
                this.skillHp += melee ? 5 : 2;
                this.skillSpd += melee ? 3 : 2;
                this.skillAtt += this.selectedWeapon.attRefine ? 1 : 0;
            } else if (this.selectedRefine.key === 3) {
                this.skillHp += melee ? 5 : 2;
                this.skillDef += melee ? 4 : 3;
                this.skillAtt += this.selectedWeapon.attRefine ? 1 : 0;
            } else if (this.selectedRefine.key === 4) {
                this.skillHp += melee ? 5 : 2;
                this.skillRes += melee ? 4 : 3;
                this.skillAtt += this.selectedWeapon.attRefine ? 1 : 0;
            }
        }

        this.updateSkill(this.selectedAssist, this.assist, this.unitDataService.getUnitsByAssist(this.selectedAssist));
        this.updateSkill(this.selectedSpecial, this.special, this.unitDataService.getUnitsBySpecial(this.selectedSpecial));
        if (this.selectedSpecial && this.selectedSpecial.misc) {
            this.special.description = 'Charge = ' + this.selectedSpecial.misc + ' : ' + this.special.description;
        }

        this.updateSkill(
            this.selectedASkill,
            this.aSkill,
            this.unitDataService.getUnitsByASkill(this.selectedASkill, this.aSubSkill),
            this.selectedASub
        );
        this.updateSkill(
            this.selectedBSkill,
            this.bSkill,
            this.unitDataService.getUnitsByBSkill(this.selectedBSkill, this.bSubSkill),
            this.selectedBSub
        );
        this.updateSkill(
            this.selectedCSkill,
            this.cSkill,
            this.unitDataService.getUnitsByCSkill(this.selectedCSkill, this.cSubSkill),
            this.selectedCSub
        );
        this.updateSkill(this.selectedSeal, this.seal, null, this.selectedSealSub);

        this.skillHp += this.updateStats(0);
        this.skillAtt += this.updateStats(1);
        this.skillSpd += this.updateStats(2);
        this.skillDef += this.updateStats(3);
        this.skillRes += this.updateStats(4);

        this.statsPanel.removeSkillModifications();
        this.statsPanel.addToHp(this.skillHp);
        this.statsPanel.addToAtt(this.skillAtt);
        this.statsPanel.addToSpd(this.skillSpd);
        this.statsPanel.addToDef(this.skillDef);
        this.statsPanel.addToRes(this.skillRes);

        //console.log('bskils', this.selectedBSkill);
        //console.log('bskils', this.selectedBSub);
        //console.log('bskils', this.bSkill);
    }

    updateStats(statKey: number): number {
        let stat = 0;
        stat += this.updateStat(statKey, { value: '0', description: '', sp: 0, statIncreases: this.selectedWeapon.statIncreases });
        stat += this.updateStat(statKey, this.selectedRefine);
        stat += this.updateStat(statKey, this.selectedASub);
        stat += this.updateStat(statKey, this.selectedBSub);
        stat += this.updateStat(statKey, this.selectedCSub);
        stat += this.updateStat(statKey, this.selectedSealSub);
        return stat;
    }
    updateStat(statKey: number, selectedSub: SkillLevel): number {
        if (selectedSub) {
            if (selectedSub.statIncreases) {
                for (const stat of selectedSub.statIncreases) {
                    if (stat.key === statKey) {
                        return stat.value;
                    }
                }
            }
        }
        return 0;
    }

    updateSkill(skill: Skill, skillDisplay: SkillDisplay, units: any[], subSkill?: SkillLevel) {
        console.log('skill', skill);
        console.log('units', units);
        if (skill) {
            skillDisplay.name = skill.name;
            skillDisplay.description = skill.description;
            skillDisplay.inheritance = units ? this.buildInheritanceString(units) : '';
            skillDisplay.sp = skill.sp;
        } else {
            skillDisplay.name = '';
            skillDisplay.description = '';
            skillDisplay.inheritance = '';
            skillDisplay.sp = undefined;
        }
        //console.log('skillDisplay2', skillDisplay);

        if (subSkill) {
            skillDisplay.description += subSkill.description;
            skillDisplay.sp = subSkill.sp;
        }

        //console.log('skillDisplay3', skillDisplay);
    }

    buildWeaponDesc(): string {
        if (this.selectedWeapon.name === fehWeapons[0].name) {
            return '';
        }
        return (
            'Might: ' +
            this.selectedWeapon.mt +
            ' - ' +
            this.selectedWeapon.description +
            (this.selectedRefine ? '\n' + "<font color='green'>" + this.selectedRefine.description + '</font>' : '')
        );
    }

    buildInheritanceString(units: any[]): string {
        const inheritances = ['', '', '', '', ''];

        for (const unit of units) {
            inheritances[unit.level - 1] += unit.name + ', ';
        }

        return (
            '1... ' +
            inheritances[0] +
            '\n' +
            '2... ' +
            inheritances[1] +
            '\n' +
            '3... ' +
            inheritances[2] +
            '\n' +
            '4... ' +
            inheritances[3] +
            '\n' +
            '5... ' +
            inheritances[4]
        );
    }

    setStatsPanel(statsPanel: StatsPanelComponent) {
        this.statsPanel = statsPanel;
    }

    handleWeaponChange(weapon: Weapon) {
        if (weapon) {
            this.selectedWeapon = weapon;
            this.applyRefine();
        } else {
            this.selectedWeapon = fehWeapons[0];
            this.selectedRefine = basicRefines[0];
        }
        this.calculateSkills();
    }

    handleWeaponRefineChange(refine: any) {
        this.selectedRefine = refine ? refine : basicRefines[0];
        this.refine = refine ? this.selectedRefine.value : '';
        this.calculateSkills();
    }

    handleAssistChange(assist: Skill) {
        this.selectedAssist = assist ? assist : fehAssists[0];
        this.calculateSkills();
    }

    handleSpecialChange(special: Skill) {
        this.selectedSpecial = special ? special : fehSpecials[0];
        this.calculateSkills();
    }

    handleASkillChange(aSkill: Skill) {
        if (aSkill) {
            this.selectedASkill = this.unitDataService.getASkillByName(aSkill.name);
            this.aSubSkills = [];
            this.selectedASub = this.applySubSkill(this.aSubSkills, this.selectedASkill);
            this.aSubSkill = this.selectedASub ? this.selectedASub.value : '';

            console.log('handleASkillChange', this.aSubSkills);
        } else {
            this.selectedASkill = fehASkills[0];
            this.selectedASub = undefined;
        }
        this.calculateSkills();
    }

    handleASubSkillChange(aSub) {
        this.selectedASub = aSub ? aSub : this.aSubSkills[this.aSubSkills.length - 1];
        this.aSubSkill = aSub ? this.selectedASub.value : '';
        this.calculateSkills();
    }

    handleBSkillChange(bSkill: Skill) {
        if (bSkill) {
            this.selectedBSkill = this.unitDataService.getBSkillByName(bSkill.name);
            this.bSubSkills = [];
            this.selectedBSub = this.applySubSkill(this.bSubSkills, this.selectedBSkill);
            this.bSubSkill = this.selectedBSub ? this.selectedBSub.value : '';
        } else {
            this.selectedBSkill = fehBSkills[0];
            this.selectedBSub = undefined;
        }
        this.calculateSkills();
    }

    handleBSubSkillChange(bSub) {
        this.selectedBSub = bSub ? bSub : this.bSubSkills[this.bSubSkills.length - 1];
        this.bSubSkill = bSub ? this.selectedBSub.value : '';
        this.calculateSkills();
    }

    handleCSkillChange(cSkill: any) {
        console.log('cskill', cSkill);
        if (cSkill) {
            this.selectedCSkill = this.unitDataService.getCSkillByName(cSkill.name);
            this.cSubSkills = [];
            this.selectedCSub = this.applySubSkill(this.cSubSkills, this.selectedCSkill);
            this.cSubSkill = this.selectedCSub ? this.selectedCSub.value : '';
        } else {
            this.selectedCSkill = fehCSkills[0];
            this.selectedCSub = undefined;
        }
        this.calculateSkills();
    }

    handleCSubSkillChange(cSub) {
        this.selectedCSub = cSub ? cSub : this.cSubSkills[this.cSubSkills.length - 1];
        this.cSubSkill = cSub ? this.selectedCSub.value : '';
        this.calculateSkills();
    }

    handleSealChange(seal: Skill) {
        if (seal) {
            this.selectedSeal = seal;
            this.sealSubs = [];
            this.selectedSealSub = this.applySubSkill(this.sealSubs, this.selectedSeal);
            this.sealSub = this.selectedSealSub ? this.selectedSealSub.value : '';
        } else {
            this.selectedSeal = fehSeals[0];
            this.selectedSealSub = undefined;
        }
        this.calculateSkills();
    }

    handleSealSubChange(sealSub) {
        this.selectedSealSub = sealSub ? sealSub : this.sealSubs[this.sealSubs.length - 1];
        this.sealSub = sealSub ? this.selectedSealSub.value : '';
        this.calculateSkills();
    }
}
