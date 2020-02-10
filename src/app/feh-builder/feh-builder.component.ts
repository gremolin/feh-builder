import { Component, OnInit, ViewChild } from '@angular/core';

import { infantry } from '../data/hardcoded';
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
        this.skillsPanel.setStatsPanel(this.statsPanel);
        this.statsPanel.setSkillsPanel(this.skillsPanel);

        this.statsPanel.asset = this.selectedAsset;
        this.statsPanel.flaw = this.selectedFlaw;

        this.selectedUnit = this.units[0].name;
        this.changedSelectedUnit(this.units[0]);
        //this.updateUnitsStats(this.selectedUnit);
        //this.updateUnitsSkills(this.selectedUnit);
    }

    changedSelectedUnit($event) {
        this.flowers = Object.assign([], flowers);
        if ($event.move !== infantry || $event.released >= this.update320Release) {
            this.flowers = this.flowers.slice(0, 6);
        }

        this.updateUnitsStats($event.name);
        this.updateUnitsSkills($event);
    }

    changedMerge($event) {
        this.statsPanel.applyMerges($event);
    }

    changedAsset($event) {
        if (this.selectedAsset === this.selectedFlaw) {
            this.selectedFlaw = -1;
        }
        this.statsPanel.applyAssetFlaw($event.key, this.selectedFlaw);
    }

    changedFlaw($event) {
        if (this.selectedAsset === this.selectedFlaw) {
            this.selectedAsset = -1;
        }
        this.statsPanel.applyAssetFlaw(this.selectedAsset, $event.key);
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

    updateUnitsSkills(unit) {
        this.selectedUnit = unit.name;
        console.log(unit);
        this.skillsPanel.applyUnitSkills(unit);
    }
}
