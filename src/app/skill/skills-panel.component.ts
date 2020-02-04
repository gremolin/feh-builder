import { Component } from '@angular/core';

import { fehAssists } from './../data/assist';
import { Skill, SkillDisplay, SkillLevel, UnitSkills, Weapon } from './../data/data.types';
import { basicRefines, meleeWeaponTypes } from './../data/misc.stats';
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

    selectedUnit: UnitSkills;
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

    applyUnitSkills(unitSkills: UnitSkills) {
        this.selectedUnit = unitSkills;
        this.resetSkills();

        this.calculateSkills();
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

        this.wp.name = this.selectedUnit.wps[this.selectedUnit.wps.length - 1].key;
        this.selectedWeapon = this.unitDataService.getWeaponByName(this.wp.name);
        this.applyRefine();

        if (this.selectedUnit.assists) {
            this.assist.name = this.selectedUnit.assists[this.selectedUnit.assists.length - 1].key;
            this.selectedAssist = this.unitDataService.getAssistByName(this.assist.name);
        }

        if (this.selectedUnit.specials) {
            this.special.name = this.selectedUnit.specials[this.selectedUnit.specials.length - 1].key;
            this.selectedSpecial = this.unitDataService.getSpecialByName(this.special.name);
        }

        if (this.selectedUnit.aSkills) {
            this.aSkill.name = this.selectedUnit.aSkills[this.selectedUnit.aSkills.length - 1].key;
            this.selectedASkill = this.unitDataService.getASkillByName(this.aSkill.name);
            this.selectedASub = this.applySubSkill(this.aSubSkills, this.selectedASkill);
            this.aSubSkill = this.selectedASub ? this.selectedASub.value : undefined;
        }

        if (this.selectedUnit.bSkills) {
            this.bSkill.name = this.selectedUnit.bSkills[this.selectedUnit.bSkills.length - 1].key;
            this.selectedBSkill = this.unitDataService.getBSkillByName(this.bSkill.name);
            this.selectedBSub = this.applySubSkill(this.bSubSkills, this.selectedBSkill);
            this.bSubSkill = this.selectedBSub ? this.selectedBSub.value : undefined;
        }

        if (this.selectedUnit.cSkills) {
            this.cSkill.name = this.selectedUnit.cSkills[this.selectedUnit.cSkills.length - 1].key;
            this.selectedCSkill = this.unitDataService.getCSkillByName(this.cSkill.name);
            this.selectedCSub = this.applySubSkill(this.cSubSkills, this.selectedCSkill);
            this.cSubSkill = this.selectedCSub ? this.selectedCSub.value : undefined;
        }
    }

    applyRefine() {
        if (this.selectedWeapon.refinable) {
            this.refines = Object.assign([], basicRefines);
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

    applySubSkill(subSkills: any[], selectedSkill: Skill): SkillLevel {
        subSkills.length = 0;
        if (selectedSkill.skillLevels) {
            for (const sub of selectedSkill.skillLevels) {
                subSkills.push({
                    key: sub.value,
                    value: sub.value,
                    sp: sub.sp,
                    description: sub.description,
                    statIncreases: sub.statIncreases
                });
            }
            return subSkills[subSkills.length - 1];
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
        //  this.wpInheritance = this.buildInheritanceString(this.unitDataService.getUnitsByWeapon(this.wp));
        //  this.wpSp = this.selectedWeapon.sp;
        this.updateSkill(this.selectedWeapon, this.wp, this.unitDataService.getUnitsByWeapon(this.selectedWeapon));
        this.wp.description = this.buildWeaponDesc();
        this.skillAtt += this.selectedWeapon.mt;

        // wp refines
        if (this.selectedRefine) {
            if (this.selectedRefine.key === 1) {
                this.skillHp += melee ? 5 : 2;
                this.skillAtt += melee ? 2 : 1;
            } else if (this.selectedRefine.key === 2) {
                this.skillHp += melee ? 5 : 2;
                this.skillSpd += melee ? 3 : 2;
            } else if (this.selectedRefine.key === 3) {
                this.skillHp += melee ? 5 : 2;
                this.skillDef += melee ? 4 : 3;
            } else if (this.selectedRefine.key === 4) {
                this.skillHp += melee ? 5 : 2;
                this.skillRes += melee ? 4 : 3;
            }
        }

        this.updateSkill(this.selectedAssist, this.assist, this.unitDataService.getUnitsByAssist(this.selectedAssist));
        this.updateSkill(this.selectedSpecial, this.special, this.unitDataService.getUnitsBySpecial(this.selectedSpecial));
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
    }

    updateStats(statKey: number): number {
        let stat = 0;
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

        if (subSkill) {
            skillDisplay.description += subSkill.description;
            skillDisplay.sp = subSkill.sp;
        }
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
            (this.selectedRefine ? ' ' + "<font color='green'>" + this.selectedRefine.description + '</font>' : '')
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
        console.log('handleASkillChange', aSkill);
        if (aSkill) {
            this.selectedASkill = aSkill;
            this.selectedASub = this.applySubSkill(this.aSubSkills, this.selectedASkill);
            this.aSubSkill = this.selectedASub ? this.selectedASub.value : '';
        } else {
            this.selectedASkill = fehASkills[0];
            this.selectedASub = undefined;
        }
        this.calculateSkills();
    }

    handleASubSkillChange(aSub: Skill) {
        this.selectedASub = aSub ? aSub : this.aSubSkills[this.aSubSkills.length - 1];
        this.aSubSkill = aSub ? this.selectedASub.value : '';
        this.calculateSkills();
    }

    handleBSkillChange(bSkill: Skill) {
        if (bSkill) {
            this.selectedBSkill = bSkill;
            this.selectedBSub = this.applySubSkill(this.bSubSkills, this.selectedBSkill);
            this.bSubSkill = this.selectedBSub ? this.selectedBSub.value : '';
        } else {
            this.selectedBSkill = fehBSkills[0];
            this.selectedBSub = undefined;
        }
        this.calculateSkills();
    }

    handleBSubSkillChange(bSub: Skill) {
        this.selectedBSub = bSub ? bSub : this.bSubSkills[this.bSubSkills.length - 1];
        this.bSubSkill = bSub ? this.selectedBSub.value : '';
        this.calculateSkills();
    }

    handleCSkillChange(cSkill: Skill) {
        if (cSkill) {
            this.selectedCSkill = cSkill;
            this.selectedCSub = this.applySubSkill(this.cSubSkills, this.selectedCSkill);
            this.cSubSkill = this.selectedCSub ? this.selectedCSub.value : '';
        } else {
            this.selectedCSkill = fehCSkills[0];
            this.selectedCSub = undefined;
        }
        this.calculateSkills();
    }

    handleCSubSkillChange(cSub: Skill) {
        this.selectedCSub = cSub ? cSub : this.cSubSkills[this.cSubSkills.length - 1];
        this.cSubSkill = cSub ? this.selectedCSub.value : '';
        this.calculateSkills();
    }

    handleSealChange(seal: Skill) {
        if (seal) {
            this.selectedSeal = seal;
            this.selectedSealSub = this.applySubSkill(this.sealSubs, this.selectedSeal);
            this.sealSub = this.selectedSealSub ? this.selectedSealSub.value : '';
        } else {
            this.selectedSeal = fehSeals[0];
            this.selectedSealSub = undefined;
        }
        this.calculateSkills();
    }

    handleSealSubChange(sealSub: Skill) {
        this.selectedSealSub = sealSub ? sealSub : this.sealSubs[this.sealSubs.length - 1];
        this.sealSub = sealSub ? this.selectedSealSub.value : '';
        this.calculateSkills();
    }
}
