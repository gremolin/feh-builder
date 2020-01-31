import { Component, OnInit, ViewChild } from '@angular/core';

import { StatsPanelComponent } from '../stat/stats-panel.component';
import { assetFlaw, flowers, merges, summonerSupports } from './../data/misc.stats';
import { fehUnits } from './../data/unit';
import { UnitDataService } from './../data/unit.data.service';
import { unitStats } from './../data/unit.stats';
import { SkillsPanelComponent } from './../skill/skills-panel.component';

@Component({
    selector: 'feh-builder',
    templateUrl: './feh-builder.component.html',
    styleUrls: ['./feh-builder.component.css']
})
export class FehBuilderComponent implements OnInit {
    update320Release = new Date(2019, 1, 7); // release 3.2.0 is 'Feb 7, 2019' := previous infantry units can have 10 df;

    units = fehUnits;
    unitStats = unitStats;

    selectedUnit: string;
    selectedMerge = 0;
    selectedAsset = -1;
    selectedFlaw = -1;
    selectedFlower = 0;
    selectedSupport = 0;

    @ViewChild('statsPanel', { static: true }) statsPanel: StatsPanelComponent;
    @ViewChild('skillsPanel', { static: true }) skillsPanel: SkillsPanelComponent;

    //data
    merges = merges;
    assetFlaw = assetFlaw;
    flowers = flowers;
    supports = summonerSupports;

    constructor(private unitDataService: UnitDataService) {}

    ngOnInit() {
        this.selectedUnit = this.units[0].name;
        this.changedSelectedUnit(this.units[0]);

        this.statsPanel.asset = this.selectedAsset;
        this.statsPanel.flaw = this.selectedFlaw;
        this.updateUnitsStats(this.selectedUnit);
        this.updateUnitsSkills(this.selectedUnit);
    }

    changedSelectedUnit($event) {
        $event.released <= this.update320Release ? (this.flowers = flowers) : (this.flowers = flowers.slice(0, 6));
        this.updateUnitsStats($event.name);
        this.updateUnitsSkills($event.name);
    }

    changedMerge($event) {
        this.statsPanel.applyMerges($event);
    }

    changedAsset($event) {
        this.statsPanel.applyAsset($event.key);
    }

    changedFlaw($event) {
        this.statsPanel.applyFlaw($event.key);
    }

    changedFlower($event) {
        this.statsPanel.applyFlower($event);
    }
    changedSupport($event) {
        this.statsPanel.applySupport($event.key);
    }

    updateUnitsStats(unitKey) {
        console.log(unitKey);
        const foundUnitStats = this.unitDataService.getStatsByUnit(unitKey);
        console.log(foundUnitStats);
        this.statsPanel.applyUnitStats(foundUnitStats);
    }

    updateUnitsSkills(unitKey) {
        console.log(unitKey);
        const foundUnitSkills = this.unitDataService.getSkillsByUnit(unitKey);
        console.log(foundUnitSkills);
        this.skillsPanel.applyUnitSkills(foundUnitSkills);
    }
}
