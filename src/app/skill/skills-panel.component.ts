import { Component } from '@angular/core';

import { UnitSkills, Weapon } from './../data/data.types';
import { UnitDataService } from './../data/unit.data.service';
import { fehWeapons } from './../data/weapon';

@Component({
    selector: 'skills-panel',
    templateUrl: './skills-panel.component.html',
    styleUrls: ['./skills-panel.component.css']
})
export class SkillsPanelComponent {
    wpns = fehWeapons;

    selectedUnit: UnitSkills;
    selectedWeapon: Weapon;

    wp: string;
    wpDesc: string;
    wpInheritance: string;

    constructor(private unitDataService: UnitDataService) {}

    applyUnitSkills(unitSkills: UnitSkills) {
        this.selectedUnit = unitSkills;
        this.resetSkills();

        this.calculateSkills();
    }

    resetSkills() {
        this.wp = this.selectedUnit.wps[this.selectedUnit.wps.length - 1].key;
        this.selectedWeapon = this.unitDataService.getWeaponByName(this.wp);
    }

    calculateSkills() {
        this.wpDesc = 'Might: ' + this.selectedWeapon.mt + ' - ' + this.selectedWeapon.description;
        this.wpInheritance = this.buildInheritanceString();
    }

    buildInheritanceString(): string {
        const inheritances = ['', '', '3...', '4...', '5...'];

        for (const unit of this.unitDataService.getUnitsByWeapon(this.wp)) {
            inheritances[unit.level - 1] += unit.name + ', ';
        }

        return '1... ' + inheritances[0] + '\n' + '2... ' + inheritances[1];
    }

    handleWeaponChange(weapon: Weapon) {
        this.selectedWeapon = weapon;
        this.wp = this.selectedWeapon.name;
        this.calculateSkills();
    }
}
